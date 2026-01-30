import fs from 'node:fs/promises';
import path from 'node:path';
import semver from 'semver';
import { BlockDefinition } from './registry';

type Framework = 'react' | 'angular';

type InstallArgs = {
  cwd: string;
  baseUrl: string;
  blockEntryPath: string;
  blockDef: BlockDefinition;
  framework: Framework;
  dryRun: boolean;
  tokens: Record<string, string>;
  targetFolder: string;
};

function applyTokens(content: string, tokens: Record<string, string>): string {
  let out = content;
  for (const [k, v] of Object.entries(tokens)) {
    out = out.split(k).join(v);
  }
  return out;
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.text();
}

async function ensureDir(filePath: string, dryRun: boolean) {
  const dir = path.dirname(filePath);
  if (dryRun) return;
  await fs.mkdir(dir, { recursive: true });
}

type DependencyIssue = {
  name: string;
  required: string;
  installed?: string;
  type: 'missing' | 'version-mismatch';
};

async function checkInstalledDependencies(
  cwd: string,
  deps: Array<{ name: string; version: string }>,
): Promise<DependencyIssue[]> {
  if (!deps.length) return [];

  const pkgPath = path.join(cwd, 'package.json');
  const issues: DependencyIssue[] = [];

  try {
    const raw = await fs.readFile(pkgPath, 'utf8');
    const pkg = JSON.parse(raw);
    const installed = {
      ...(pkg.dependencies ?? {}),
      ...(pkg.devDependencies ?? {}),
    };

    for (const dep of deps) {
      const pkgName = dep.name;
      const requiredVersion = dep.version;

      const installedVersion = installed[pkgName];

      if (!installedVersion) {
        issues.push({
          name: pkgName,
          required: requiredVersion,
          type: 'missing',
        });
      } else if (
        requiredVersion !== '*' &&
        installedVersion !== '*' &&
        !semver.intersects(installedVersion, requiredVersion)
      ) {
        issues.push({
          name: pkgName,
          required: requiredVersion,
          installed: installedVersion,
          type: 'version-mismatch',
        });
      }
    }

    return issues;
  } catch {
    return deps.map((dep) => ({
      name: dep.name,
      required: dep.version,
      type: 'missing' as const,
    }));
  }
}

export async function installBlock(args: InstallArgs): Promise<void> {
  const {
    cwd,
    baseUrl,
    blockEntryPath,
    blockDef,
    framework,
    dryRun,
    tokens,
    targetFolder,
  } = args;
  const variant = blockDef.variants[framework];
  if (!variant) throw new Error(`Missing variant ${framework}`);

  // Base folder for resolving sources:
  // blockEntryPath = blocks/hero/block.json -> base = blocks/hero
  const blockBaseDir = blockEntryPath.split('/').slice(0, -1).join('/');

  const deps = variant.dependencies ?? [];
  if (deps.length) {
    const issues = await checkInstalledDependencies(cwd, deps);

    const missing = issues.filter((i) => i.type === 'missing');
    const versionMismatches = issues.filter(
      (i) => i.type === 'version-mismatch',
    );

    if (missing.length > 0) {
      console.log(`⚠️  Warning: The following dependencies are missing:`);
      missing.forEach((issue) => {
        console.log(`   - ${issue.name}@${issue.required}`);
      });
      console.log(
        `   Install them with: pnpm add ${missing.map((i) => `${i.name}@${i.required}`).join(' ')}\n`,
      );
    }

    if (versionMismatches.length > 0) {
      console.log(
        `⚠️  Warning: The following dependencies have version mismatches:`,
      );
      versionMismatches.forEach((issue) => {
        console.log(
          `   - ${issue.name}: installed ${issue.installed}, required ${issue.required}`,
        );
      });
      console.log(
        `   Update them with: pnpm add ${versionMismatches.map((i) => `${i.name}@${i.required}`).join(' ')}\n`,
      );
    }
  }

  for (const file of variant.files) {
    const sourceUrl = `${baseUrl}/${blockBaseDir}/${file.source}`
      .replace(/\/+/g, '/')
      .replace(':/', '://');

    const targetWithoutFramework = file.target.replace(
      new RegExp(`^(react|angular)/`),
      '',
    );

    const targetWithBlockFolder = path.join(
      blockDef.name,
      targetWithoutFramework,
    );

    const targetPath = path.join(cwd, targetFolder, targetWithBlockFolder);

    if (dryRun) {
      console.log(`[dry-run] copy ${sourceUrl} -> ${targetWithBlockFolder}`);
      continue;
    }

    const raw = await fetchText(sourceUrl);
    const transformed = applyTokens(raw, tokens);

    await ensureDir(targetPath, dryRun);
    await fs.writeFile(targetPath, transformed, 'utf8');
    console.log(`+ ${targetWithBlockFolder}`);
  }
}
