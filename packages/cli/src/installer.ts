import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import semver from 'semver';
import { addBlockToConfig, IxBlocksConfig, saveConfig } from './config';
import {
  assertRegistryFetchResponse,
  BlockDefinition,
  resolveManifestFileUrl,
} from './registry';
import {
  assertSafeRelativePath,
  assertValidBlockName,
  isPathInside,
} from './validation';

type Framework = 'react' | 'angular';

export type InstallConflict = {
  path: string;
  type: 'modified' | 'untracked';
};

export type PreparedInstallFile = {
  path: string;
  targetPath: string;
  content: string;
  hash: string;
  existingHash?: string;
  operation: 'create' | 'update';
};

export type InstallPlan = {
  cwd: string;
  installRoot: string;
  blockName: string;
  files: PreparedInstallFile[];
  removals: Array<{ path: string; targetPath: string; expectedHash: string }>;
  conflicts: InstallConflict[];
  force: boolean;
};

export type PrepareInstallArgs = {
  cwd: string;
  baseUrl: string;
  blockEntryPath: string;
  blockDef: BlockDefinition;
  expectedBlockName: string;
  framework: Framework;
  tokens: Record<string, string>;
  targetFolder: string;
  previousFiles?: Array<{ path: string; hash: string }>;
  force?: boolean;
  fetchImpl?: typeof fetch;
};

type DependencyIssue = {
  name: string;
  required: string;
  installed?: string;
  type: 'missing' | 'version-mismatch';
};

type ApplyDependencies = {
  saveConfigImpl?: typeof saveConfig;
  beforeApplyFile?: (
    file: PreparedInstallFile,
    index: number
  ) => void | Promise<void>;
  beforeRollbackFile?: (
    targetPath: string,
    index: number
  ) => void | Promise<void>;
};

function applyTokens(content: string, tokens: Record<string, string>): string {
  let output = content;
  for (const [token, replacement] of Object.entries(tokens)) {
    output = output.split(token).join(replacement);
  }
  return output;
}

export function computeHash(content: string): string {
  return crypto.createHash('sha256').update(content, 'utf8').digest('hex');
}

async function fetchText(
  url: string,
  fetchImpl: typeof fetch
): Promise<string> {
  const response = await fetchImpl(url, { redirect: 'error' });
  assertRegistryFetchResponse(response, url, new URL('./', new URL(url)).href);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

async function pathType(
  filePath: string
): Promise<'missing' | 'file' | 'directory' | 'symlink' | 'other'> {
  try {
    const stat = await fs.lstat(filePath);
    if (stat.isSymbolicLink()) return 'symlink';
    if (stat.isFile()) return 'file';
    if (stat.isDirectory()) return 'directory';
    return 'other';
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return 'missing';
    throw error;
  }
}

async function assertNoSymlinks(
  root: string,
  candidate: string
): Promise<void> {
  if (!isPathInside(root, candidate)) {
    throw new Error(
      `Output path '${candidate}' resolves outside the install root.`
    );
  }

  const relative = path.relative(root, candidate);
  let current = root;
  for (const segment of relative.split(path.sep).filter(Boolean)) {
    current = path.join(current, segment);
    if ((await pathType(current)) === 'symlink') {
      throw new Error(`Output path '${current}' traverses a symbolic link.`);
    }
  }
}

function resolveInstallRoot(cwd: string, targetFolder: string): string {
  assertSafeRelativePath('targetFolder', targetFolder);
  const absoluteCwd = path.resolve(cwd);
  const installRoot = path.resolve(absoluteCwd, targetFolder);
  if (installRoot === absoluteCwd || !isPathInside(absoluteCwd, installRoot)) {
    throw new Error(
      `targetFolder '${targetFolder}' must resolve inside the project.`
    );
  }
  return installRoot;
}

function toLockPath(cwd: string, absolutePath: string): string {
  return path
    .relative(path.resolve(cwd), absolutePath)
    .split(path.sep)
    .join('/');
}

function resolveOutputPath(
  cwd: string,
  installRoot: string,
  blockName: string,
  framework: Framework,
  filePath: string
): { path: string; targetPath: string } {
  assertSafeRelativePath('block file path', filePath);
  const segments = filePath.split('/');
  if (segments[0] !== framework) {
    throw new Error(
      `Block file '${filePath}' must be prefixed with framework '${framework}'.`
    );
  }
  segments.shift();
  const nestedTarget = segments.join('/');
  assertSafeRelativePath('block file path', nestedTarget);

  const targetPath = path.resolve(installRoot, blockName, nestedTarget);
  if (targetPath === installRoot || !isPathInside(installRoot, targetPath)) {
    throw new Error(
      `Block file '${filePath}' resolves outside the install root.`
    );
  }
  return { path: toLockPath(cwd, targetPath), targetPath };
}

async function checkInstalledDependencies(
  cwd: string,
  deps: Array<{ name: string; version: string }>
): Promise<DependencyIssue[]> {
  if (!deps.length) return [];

  try {
    const raw = await fs.readFile(path.join(cwd, 'package.json'), 'utf8');
    const pkg = JSON.parse(raw);
    const installed = {
      ...(pkg.dependencies ?? {}),
      ...(pkg.devDependencies ?? {}),
    };

    return deps.flatMap((dependency): DependencyIssue[] => {
      const installedVersion = installed[dependency.name];
      if (!installedVersion) {
        return [
          {
            name: dependency.name,
            required: dependency.version,
            type: 'missing',
          },
        ];
      }
      if (
        dependency.version !== '*' &&
        installedVersion !== '*' &&
        !semver.intersects(installedVersion, dependency.version)
      ) {
        return [
          {
            name: dependency.name,
            required: dependency.version,
            installed: installedVersion,
            type: 'version-mismatch',
          },
        ];
      }
      return [];
    });
  } catch {
    return deps.map((dependency) => ({
      name: dependency.name,
      required: dependency.version,
      type: 'missing' as const,
    }));
  }
}

function reportDependencyIssues(issues: DependencyIssue[]): void {
  const missing = issues.filter((issue) => issue.type === 'missing');
  const mismatches = issues.filter(
    (issue) => issue.type === 'version-mismatch'
  );

  if (missing.length) {
    console.warn('⚠️  Missing block dependencies:');
    for (const issue of missing) {
      console.warn(`   - ${issue.name}@${issue.required}`);
    }
    console.warn(
      `   Install with: pnpm add ${missing
        .map((issue) => `${issue.name}@${issue.required}`)
        .join(' ')}`
    );
  }
  if (mismatches.length) {
    console.warn('⚠️  Block dependency version mismatches:');
    for (const issue of mismatches) {
      console.warn(
        `   - ${issue.name}: installed ${issue.installed}, required ${issue.required}`
      );
    }
  }
}

async function inspectExistingFile(
  filePath: string
): Promise<{ exists: boolean; hash?: string }> {
  const type = await pathType(filePath);
  if (type === 'missing') return { exists: false };
  if (type !== 'file') {
    throw new Error(
      `Cannot install over '${filePath}': expected a regular file, found ${type}.`
    );
  }
  return {
    exists: true,
    hash: computeHash(await fs.readFile(filePath, 'utf8')),
  };
}

export async function prepareBlockInstall(
  args: PrepareInstallArgs
): Promise<InstallPlan> {
  const expectedBlockName = assertValidBlockName(args.expectedBlockName);
  const definitionBlockName = assertValidBlockName(args.blockDef.name);
  if (definitionBlockName !== expectedBlockName) {
    throw new Error(
      `Registry block name mismatch: requested '${expectedBlockName}', received '${definitionBlockName}'.`
    );
  }
  assertSafeRelativePath('block entry path', args.blockEntryPath);

  const installRoot = resolveInstallRoot(args.cwd, args.targetFolder);
  await assertNoSymlinks(path.resolve(args.cwd), installRoot);

  const variant = args.blockDef.variants[args.framework];
  if (!variant) {
    throw new Error(
      `Block '${expectedBlockName}' has no ${args.framework} variant.`
    );
  }
  reportDependencyIssues(
    await checkInstalledDependencies(args.cwd, variant.dependencies ?? [])
  );

  const previousFiles = new Map(
    (args.previousFiles ?? []).map((file) => {
      assertSafeRelativePath('lock file path', file.path);
      return [file.path.split(path.sep).join('/'), file.hash];
    })
  );
  const plannedPaths = new Set<string>();
  const files: PreparedInstallFile[] = [];

  for (const file of variant.files) {
    const output = resolveOutputPath(
      args.cwd,
      installRoot,
      expectedBlockName,
      args.framework,
      file.path
    );
    if (plannedPaths.has(output.path)) {
      throw new Error(`Block defines duplicate file path '${output.path}'.`);
    }
    plannedPaths.add(output.path);
    await assertNoSymlinks(installRoot, output.targetPath);

    const sourceUrl = resolveManifestFileUrl(
      args.baseUrl,
      args.blockEntryPath,
      file.path
    );
    const raw = await fetchText(sourceUrl, args.fetchImpl ?? fetch);
    const content = applyTokens(raw, args.tokens);
    const existing = await inspectExistingFile(output.targetPath);
    files.push({
      ...output,
      content,
      hash: computeHash(content),
      existingHash: existing.hash,
      operation: existing.exists ? 'update' : 'create',
    });
  }

  const conflicts: InstallConflict[] = [];
  for (const file of files) {
    const current = await inspectExistingFile(file.targetPath);
    file.existingHash = current.hash;
    if (!current.exists) continue;
    const recordedHash = previousFiles.get(file.path);
    if (!recordedHash) {
      conflicts.push({ path: file.path, type: 'untracked' });
    } else if (current.hash !== recordedHash) {
      conflicts.push({ path: file.path, type: 'modified' });
    }
  }

  const removals: InstallPlan['removals'] = [];
  for (const [lockPath, recordedHash] of previousFiles) {
    const targetPath = path.resolve(args.cwd, lockPath);
    if (!isPathInside(installRoot, targetPath)) {
      throw new Error(
        `Tracked path '${lockPath}' is outside targetFolder '${args.targetFolder}'.`
      );
    }
    await assertNoSymlinks(installRoot, targetPath);
    const current = await inspectExistingFile(targetPath);
    if (current.exists && current.hash !== recordedHash) {
      if (!conflicts.some((conflict) => conflict.path === lockPath)) {
        conflicts.push({ path: lockPath, type: 'modified' });
      }
    }
    if (!plannedPaths.has(lockPath) && current.exists) {
      removals.push({
        path: lockPath,
        targetPath,
        expectedHash: current.hash!,
      });
    }
  }

  return {
    cwd: path.resolve(args.cwd),
    installRoot,
    blockName: expectedBlockName,
    files,
    removals,
    conflicts,
    force: !!args.force,
  };
}

export function reportInstallPlan(plan: InstallPlan, dryRun: boolean): void {
  if (dryRun) console.log('Dry run - no files will be changed.');
  for (const conflict of plan.conflicts) {
    const detail =
      conflict.type === 'modified'
        ? 'tracked file was modified'
        : 'untracked file already exists';
    console.log(`! ${conflict.path} (${detail})`);
  }
  for (const file of plan.files) {
    console.log(
      `${file.operation === 'create' ? '+' : '~'} ${file.path} (sha256: ${
        file.hash
      })`
    );
  }
  for (const removal of plan.removals) {
    console.log(`- ${removal.path}`);
  }
}

export function assertConflictsAllowed(plan: InstallPlan): void {
  if (plan.conflicts.length && !plan.force) {
    const paths = plan.conflicts.map((conflict) => conflict.path).join(', ');
    throw new Error(
      `Refusing to overwrite conflicting files: ${paths}. Review the files or rerun with --force.`
    );
  }
}

async function pruneEmptyDirectories(
  startPath: string,
  installRoot: string,
  projectRoot: string
): Promise<void> {
  let current = startPath;
  const parentOfRoot = path.dirname(installRoot);
  while (isPathInside(installRoot, current) && current !== parentOfRoot) {
    try {
      await assertNoSymlinks(projectRoot, current);
      await fs.rmdir(current);
    } catch {
      return;
    }
    if (current === installRoot) return;
    current = path.dirname(current);
  }
}

export async function applyInstallPlan(
  plan: InstallPlan,
  config: IxBlocksConfig,
  version: string,
  dependencies: ApplyDependencies = {}
): Promise<IxBlocksConfig> {
  assertConflictsAllowed(plan);
  const projectRoot = path.resolve(plan.cwd);
  const transactionRoot = path.join(
    plan.cwd,
    `.ix-cli-transaction-${crypto.randomUUID()}`
  );
  const stageRoot = path.join(transactionRoot, 'stage');
  const backupRoot = path.join(transactionRoot, 'backup');
  const applied: Array<{
    targetPath: string;
    backupPath?: string;
    installed: boolean;
  }> = [];
  let preserveTransaction = false;

  const nextConfig = await addBlockToConfig(
    config,
    plan.blockName,
    version,
    plan.files.map(({ path: filePath, hash }) => ({ path: filePath, hash }))
  );

  try {
    await fs.mkdir(stageRoot, { recursive: true });
    await Promise.all(
      plan.files.map((file, index) =>
        fs.writeFile(path.join(stageRoot, String(index)), file.content, 'utf8')
      )
    );

    for (const [index, file] of plan.files.entries()) {
      await dependencies.beforeApplyFile?.(file, index);
      await assertNoSymlinks(projectRoot, file.targetPath);
      const current = await inspectExistingFile(file.targetPath);
      if (current.hash !== file.existingHash) {
        throw new Error(
          `Refusing to overwrite '${file.path}' because it changed after installation planning. Rerun the command to review the latest file state.`
        );
      }
      await fs.mkdir(path.dirname(file.targetPath), { recursive: true });
      await assertNoSymlinks(projectRoot, file.targetPath);
      const backupPath = path.join(backupRoot, `write-${index}`);
      const existingType = await pathType(file.targetPath);
      let backup: string | undefined;
      if (existingType !== 'missing') {
        if (existingType !== 'file') {
          throw new Error(
            `Cannot replace ${file.path}: found ${existingType}.`
          );
        }
        await fs.mkdir(backupRoot, { recursive: true });
        await assertNoSymlinks(projectRoot, file.targetPath);
        await fs.rename(file.targetPath, backupPath);
        backup = backupPath;
      }
      const state = {
        targetPath: file.targetPath,
        backupPath: backup,
        installed: false,
      };
      applied.push(state);
      await assertNoSymlinks(projectRoot, file.targetPath);
      await fs.rename(path.join(stageRoot, String(index)), file.targetPath);
      state.installed = true;
    }

    for (const [index, removal] of plan.removals.entries()) {
      await assertNoSymlinks(projectRoot, removal.targetPath);
      const current = await inspectExistingFile(removal.targetPath);
      if (current.hash !== removal.expectedHash) {
        throw new Error(
          `Refusing to remove '${removal.path}' because it changed after installation planning. Rerun the command to review the latest file state.`
        );
      }
      const existingType = await pathType(removal.targetPath);
      if (existingType === 'missing') continue;
      if (existingType !== 'file') {
        throw new Error(
          `Cannot remove ${removal.path}: found ${existingType}.`
        );
      }
      await fs.mkdir(backupRoot, { recursive: true });
      const backupPath = path.join(backupRoot, `remove-${index}`);
      await assertNoSymlinks(projectRoot, removal.targetPath);
      await fs.rename(removal.targetPath, backupPath);
      applied.push({
        targetPath: removal.targetPath,
        backupPath,
        installed: false,
      });
    }

    await (dependencies.saveConfigImpl ?? saveConfig)(plan.cwd, nextConfig);
    return nextConfig;
  } catch (error) {
    const rollbackErrors: unknown[] = [];
    for (const [index, state] of applied.reverse().entries()) {
      try {
        await dependencies.beforeRollbackFile?.(state.targetPath, index);
        if (state.installed) {
          await assertNoSymlinks(projectRoot, state.targetPath);
          await fs.rm(state.targetPath, { force: true });
        }
        if (state.backupPath) {
          await assertNoSymlinks(projectRoot, state.targetPath);
          await fs.mkdir(path.dirname(state.targetPath), { recursive: true });
          await assertNoSymlinks(projectRoot, state.targetPath);
          await fs.rename(state.backupPath, state.targetPath);
        }
      } catch (rollbackError) {
        rollbackErrors.push(rollbackError);
      }
    }
    await Promise.all(
      plan.files.map((file) =>
        pruneEmptyDirectories(
          path.dirname(file.targetPath),
          plan.installRoot,
          projectRoot
        )
      )
    );
    if (rollbackErrors.length) {
      preserveTransaction = true;
      throw new AggregateError(
        [error, ...rollbackErrors],
        `Installation failed and one or more files could not be restored. Recovery files were preserved at ${transactionRoot}.`
      );
    }
    throw error;
  } finally {
    if (!preserveTransaction) {
      await fs.rm(transactionRoot, { recursive: true, force: true });
    }
  }
}
