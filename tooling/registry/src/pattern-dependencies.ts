/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'node:path';

export type PatternDependency = {
  name: string;
  version: string;
};

type AuthoredPatternFile = {
  sourcePath: string;
};

type PatternVariant = {
  files: AuthoredPatternFile[];
  dependencies?: PatternDependency[];
};

type AuthoredPatternDefinition = {
  $schema?: string;
  name: string;
  description?: string;
  keywords?: string[];
  preview?: string;
  variants: Record<string, PatternVariant>;
};

type PackageManifest = {
  name?: string;
  version?: string;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

export type GeneratePatternDefinitionsOptions = {
  patternsDir: string;
  outputDir: string;
  registryVersion: string;
  workspaceRoot: string;
};

const IMPORT_PATTERN =
  /\b(?:import|export)\s+(?:[^'"]*?\s+from\s+)?['"]([^'"]+)['"]/g;
const STABLE_REGISTRY_VERSION_PATTERN = /^v(\d+\.\d+\.\d+)$/;
const FIXED_IX_PACKAGE_PATTERN = /^@siemens\/ix(?:-(?:angular|react|vue))?$/;

function packageNameFromSpecifier(specifier: string): string | null {
  if (!specifier.startsWith('@siemens/')) {
    return null;
  }

  const [scope, name] = specifier.split('/');
  return name ? `${scope}/${name}` : null;
}

function extractSiemensImports(source: string): Set<string> {
  const packages = new Set<string>();

  for (const match of source.matchAll(IMPORT_PATTERN)) {
    const packageName = packageNameFromSpecifier(match[1]);
    if (packageName) {
      packages.add(packageName);
    }
  }

  return packages;
}

function assertContainedPath(
  root: string,
  candidate: string,
  message: string
): void {
  const relative = path.relative(root, candidate);
  if (
    relative === '' ||
    (!relative.startsWith('..') && !path.isAbsolute(relative))
  ) {
    return;
  }

  throw new Error(message);
}

function assertSafePublicPath(publicPath: string): void {
  if (
    !publicPath ||
    publicPath.includes('\\') ||
    publicPath.includes('\0') ||
    publicPath.includes(':') ||
    publicPath.includes('?') ||
    publicPath.includes('#') ||
    publicPath.includes('%') ||
    path.posix.isAbsolute(publicPath) ||
    /^[a-zA-Z]:/.test(publicPath) ||
    publicPath
      .split('/')
      .some((segment) => !segment || segment === '.' || segment === '..')
  ) {
    throw new Error(
      `Invalid canonical pattern path '${publicPath}'. Expected a safe framework-prefixed relative path.`
    );
  }
}

function assertNoCanonicalPathConflicts(publicPaths: string[]): void {
  const sortedPaths = [...publicPaths].sort();
  for (let index = 1; index < sortedPaths.length; index++) {
    const previousPath = sortedPaths[index - 1];
    const currentPath = sortedPaths[index];
    if (
      currentPath === previousPath ||
      currentPath.startsWith(`${previousPath}/`)
    ) {
      throw new Error(
        `Conflicting public pattern paths '${previousPath}' and '${currentPath}'.`
      );
    }
  }
}

async function assertNoSymlinks(
  root: string,
  candidate: string
): Promise<void> {
  const rootStat = await fs.lstat(root);
  if (rootStat.isSymbolicLink()) {
    throw new Error(
      `Cannot materialize pattern through symbolic link '${root}'.`
    );
  }

  const relative = path.relative(root, candidate);
  let current = root;

  for (const segment of relative.split(path.sep).filter(Boolean)) {
    current = path.join(current, segment);
    const stat = await fs.lstat(current).catch((error: unknown) => {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
      throw error;
    });
    if (stat?.isSymbolicLink()) {
      throw new Error(
        `Cannot materialize pattern through symbolic link '${current}'.`
      );
    }
  }
}

async function assertMaterializablePatternFile(
  patternsDir: string,
  outputDir: string,
  publicPath: string,
  sourcePath: string
): Promise<boolean> {
  const destination = path.join(outputDir, publicPath);
  assertContainedPath(
    outputDir,
    destination,
    `Pattern public path escapes the output directory: ${publicPath}`
  );
  assertSafePublicPath(publicPath);
  await assertNoSymlinks(outputDir, destination);

  const source = path.resolve(patternsDir, sourcePath);
  assertContainedPath(
    patternsDir,
    source,
    `Pattern source escapes the patterns directory: ${source}`
  );
  const sourceStat = await fs.lstat(source);
  if (!sourceStat.isFile()) {
    throw new Error(`Pattern source is not a regular file: ${sourcePath}`);
  }

  const destinationStat = await fs
    .lstat(destination)
    .catch((error: unknown) => {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
      throw error;
    });
  if (!destinationStat) {
    return false;
  }
  if (!destinationStat.isFile()) {
    throw new Error(
      `Cannot materialize pattern '${sourcePath}': already exists at canonical public path '${publicPath}'.`
    );
  }

  const [sourceContent, existingContent] = await Promise.all([
    fs.readFile(source),
    fs.readFile(destination),
  ]);
  if (Buffer.compare(sourceContent, existingContent) !== 0) {
    throw new Error(
      `Cannot materialize pattern '${sourcePath}': already exists at canonical public path '${publicPath}'.`
    );
  }

  return true;
}

async function materializePatternFile(
  patternsDir: string,
  outputDir: string,
  publicPath: string,
  sourcePath: string
): Promise<void> {
  const alreadyMaterialized = await assertMaterializablePatternFile(
    patternsDir,
    outputDir,
    publicPath,
    sourcePath
  );
  if (alreadyMaterialized) {
    return;
  }

  const destination = path.join(outputDir, publicPath);
  await fs.copy(path.join(patternsDir, sourcePath), destination, {
    dereference: true,
  });
}

async function readWorkspacePackages(
  workspaceRoot: string
): Promise<Map<string, PackageManifest>> {
  const manifestFiles = await glob(
    [
      path.join(workspaceRoot, 'packages', '*', 'package.json'),
      path.join(workspaceRoot, 'patterns', '*', 'package.json'),
    ],
    { absolute: true }
  );
  const manifests = await Promise.all(
    manifestFiles.map(async (file) => {
      const manifest = (await fs.readJson(file)) as PackageManifest;
      return { file, manifest };
    })
  );
  const byName = new Map<string, PackageManifest>();

  for (const { manifest } of manifests) {
    if (manifest.name) {
      byName.set(manifest.name, manifest);
    }
  }

  return byName;
}

function registryIxRange(
  packageName: string,
  registryVersion: string,
  manifestVersion: string | undefined
): string | null {
  if (!FIXED_IX_PACKAGE_PATTERN.test(packageName)) {
    return null;
  }

  const stableVersion = registryVersion.match(
    STABLE_REGISTRY_VERSION_PATTERN
  )?.[1];
  const version = stableVersion ?? manifestVersion;
  return version ? `^${version}` : null;
}

function siemensRequirements(
  manifest: PackageManifest
): Array<[string, string]> {
  return Object.entries({
    ...(manifest.dependencies ?? {}),
    ...(manifest.peerDependencies ?? {}),
  }).filter(([name]) => name.startsWith('@siemens/'));
}

async function dependenciesForVariant(
  pattern: AuthoredPatternDefinition,
  variant: PatternVariant,
  patternsDir: string,
  registryVersion: string,
  manifests: Map<string, PackageManifest>
): Promise<PatternDependency[]> {
  const directPackages = new Set<string>();
  const declaredRanges = new Map<string, string>();

  for (const file of variant.files) {
    const sourcePath = path.resolve(patternsDir, file.sourcePath);
    assertContainedPath(
      patternsDir,
      sourcePath,
      `Pattern source escapes the patterns directory: ${sourcePath}`
    );
    const sourcePackageName = file.sourcePath.replace(/\\/g, '/').split('/')[0];
    const sourcePackage = manifests.get(sourcePackageName);
    if (sourcePackage) {
      for (const [name, version] of siemensRequirements(sourcePackage)) {
        declaredRanges.set(name, version);
      }
    }
    const source = await fs.readFile(sourcePath, 'utf-8');
    for (const packageName of extractSiemensImports(source)) {
      directPackages.add(packageName);
    }
  }

  const ranges = new Map<string, string>();
  const pending = [...directPackages].sort();
  const visited = new Set<string>();

  while (pending.length > 0) {
    const packageName = pending.shift()!;
    if (visited.has(packageName)) {
      continue;
    }
    visited.add(packageName);

    const manifest = manifests.get(packageName);
    const generatedRange = registryIxRange(
      packageName,
      registryVersion,
      manifest?.version
    );
    if (generatedRange) {
      ranges.set(packageName, generatedRange);
    } else if (!ranges.has(packageName)) {
      const declaredRange = declaredRanges.get(packageName);
      if (!declaredRange) {
        throw new Error(
          `Cannot resolve a version for '${packageName}' used by pattern '${pattern.name}'`
        );
      }
      ranges.set(packageName, declaredRange);
    }

    if (!manifest) {
      continue;
    }

    for (const [dependencyName, declaredRange] of siemensRequirements(
      manifest
    )) {
      const dependencyManifest = manifests.get(dependencyName);
      const dependencyRange = registryIxRange(
        dependencyName,
        registryVersion,
        dependencyManifest?.version
      );
      ranges.set(dependencyName, dependencyRange ?? declaredRange);
      if (!visited.has(dependencyName)) {
        pending.push(dependencyName);
      }
    }
  }

  return [...ranges.entries()]
    .map(([name, version]) => ({ name, version }))
    .sort((left, right) => left.name.localeCompare(right.name));
}

export async function generatePatternDefinitions(
  options: GeneratePatternDefinitionsOptions
): Promise<number> {
  const patternFiles = (
    await glob(path.join(options.patternsDir, '*.json'), {
      absolute: true,
    })
  ).sort();
  const manifests = await readWorkspacePackages(options.workspaceRoot);

  await fs.ensureDir(options.outputDir);

  const patterns = await Promise.all(
    patternFiles.map(async (file) => ({
      file,
      pattern: (await fs.readJson(file)) as AuthoredPatternDefinition,
    }))
  );

  const publicPaths = new Map<string, string>();
  const generatedPatterns = [];

  for (const { file, pattern } of patterns) {
    const variants: Record<
      string,
      {
        files: Array<{ path: string }>;
        dependencies?: PatternDependency[];
      }
    > = {};

    for (const [framework, authoredVariant] of Object.entries(
      pattern.variants
    ).sort(([left], [right]) => left.localeCompare(right))) {
      const dependencies = await dependenciesForVariant(
        pattern,
        authoredVariant,
        options.patternsDir,
        options.registryVersion,
        manifests
      );
      const files: Array<{ path: string }> = [];

      for (const authoredFile of authoredVariant.files) {
        const publicPath = `${framework}/${path.basename(
          authoredFile.sourcePath
        )}`;
        const previousSource = publicPaths.get(publicPath);
        if (previousSource) {
          throw new Error(
            `Duplicate public pattern path '${publicPath}' for '${previousSource}' and '${file}'.`
          );
        }
        publicPaths.set(publicPath, authoredFile.sourcePath);
        files.push({ path: publicPath });
      }

      variants[framework] = {
        files,
        ...(dependencies.length > 0 ? { dependencies } : {}),
      };
    }

    generatedPatterns.push({
      file,
      pattern: {
        ...pattern,
        $schema: '../schemas/pattern.schema.json',
        variants,
      },
    });
  }

  assertNoCanonicalPathConflicts([...publicPaths.keys()]);
  await Promise.all(
    [...publicPaths.entries()].map(([publicPath, sourcePath]) =>
      assertMaterializablePatternFile(
        options.patternsDir,
        options.outputDir,
        publicPath,
        sourcePath
      )
    )
  );
  await Promise.all(
    [...publicPaths.entries()].map(async ([publicPath, sourcePath]) => {
      await materializePatternFile(
        options.patternsDir,
        options.outputDir,
        publicPath,
        sourcePath
      );
    })
  );

  await Promise.all(
    generatedPatterns.map(({ file, pattern }) =>
      fs.writeJson(path.join(options.outputDir, path.basename(file)), pattern, {
        spaces: 2,
      })
    )
  );

  return patternFiles.length;
}
