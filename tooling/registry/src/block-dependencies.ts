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

export type BlockDependency = {
  name: string;
  version: string;
};

type BlockFile = {
  source: string;
  target: string;
};

type BlockVariant = {
  files: BlockFile[];
  dependencies?: BlockDependency[];
};

export type BlockDefinition = {
  name: string;
  variants: Record<string, BlockVariant>;
};

type PackageManifest = {
  name?: string;
  version?: string;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

export type GenerateBlockDefinitionsOptions = {
  blocksDir: string;
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

function assertContainedPath(root: string, candidate: string): void {
  const relative = path.relative(root, candidate);
  if (
    relative === '' ||
    (!relative.startsWith('..') && !path.isAbsolute(relative))
  ) {
    return;
  }

  throw new Error(`Block source escapes the blocks directory: ${candidate}`);
}

async function readWorkspacePackages(
  workspaceRoot: string
): Promise<Map<string, PackageManifest>> {
  const manifestFiles = await glob(
    [
      path.join(workspaceRoot, 'packages', '*', 'package.json'),
      path.join(workspaceRoot, 'blocks', '*', 'package.json'),
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
  block: BlockDefinition,
  variant: BlockVariant,
  blocksDir: string,
  registryVersion: string,
  manifests: Map<string, PackageManifest>
): Promise<BlockDependency[]> {
  const directPackages = new Set<string>();
  const declaredRanges = new Map<string, string>();

  for (const file of variant.files) {
    const sourcePath = path.resolve(blocksDir, file.source);
    assertContainedPath(blocksDir, sourcePath);
    const sourcePackageName = file.source.replace(/\\/g, '/').split('/')[0];
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
          `Cannot resolve a version for '${packageName}' used by block '${block.name}'`
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

export async function generateBlockDefinitions(
  options: GenerateBlockDefinitionsOptions
): Promise<number> {
  const blockFiles = await glob(path.join(options.blocksDir, '*.json'), {
    absolute: true,
  });
  const manifests = await readWorkspacePackages(options.workspaceRoot);

  await fs.ensureDir(options.outputDir);

  await Promise.all(
    blockFiles.map(async (file) => {
      const block = (await fs.readJson(file)) as BlockDefinition;

      for (const variant of Object.values(block.variants)) {
        const dependencies = await dependenciesForVariant(
          block,
          variant,
          options.blocksDir,
          options.registryVersion,
          manifests
        );
        variant.dependencies =
          dependencies.length > 0 ? dependencies : undefined;
      }

      await fs.writeJson(
        path.join(options.outputDir, path.basename(file)),
        block,
        { spaces: 2 }
      );
    })
  );

  return blockFiles.length;
}
