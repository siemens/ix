/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs-extra';
import path from 'node:path';

type RegistryVersionEntry = {
  blocks: Array<{ name: string; path: string }>;
};

type ExamplesRegistryVersionEntry = {
  examples: Array<{ name: string; path: string }>;
};

type RegistryIndex = {
  $schema?: string;
  name: string;
  searchIndex?: Record<string, string>;
  'dist-tags': Record<string, string>;
  versions: Record<string, RegistryVersionEntry>;
};

type ExamplesRegistryIndex = {
  $schema?: string;
  name: string;
  searchIndex?: Record<string, string>;
  'dist-tags': Record<string, string>;
  versions: Record<string, ExamplesRegistryVersionEntry>;
};

type CliArgs = {
  distDir: string;
  pagesDir: string;
  outDir: string;
  version: string;
  shouldUpdateLatest: boolean;
  latestTag: string;
};

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);

  const getArg = (name: string): string | undefined => {
    const index = args.findIndex((value) => value === `--${name}`);
    if (index === -1) {
      return undefined;
    }

    return args[index + 1];
  };

  const distDir = getArg('dist-dir');
  const pagesDir = getArg('pages-dir');
  const outDir = getArg('out-dir');
  const version = getArg('version');
  const latestTag = getArg('latest-tag') ?? version;
  const shouldUpdateLatest = getArg('update-latest') === 'true';

  if (!distDir || !pagesDir || !outDir || !version || !latestTag) {
    throw new Error(
      'Missing arguments. Required: --dist-dir --pages-dir --out-dir --version --latest-tag --update-latest'
    );
  }

  return {
    distDir,
    pagesDir,
    outDir,
    version,
    shouldUpdateLatest,
    latestTag,
  };
}

function prefixVersionPath(version: string, value: string): string {
  const normalizedValue = value.replace(/^\.\//, '').replace(/^\/+/, '');

  if (normalizedValue.startsWith(`${version}/`)) {
    return normalizedValue;
  }

  if (normalizedValue.startsWith('release-registry/')) {
    return normalizedValue.replace(/^release-registry\//, '');
  }

  return `${version}/${normalizedValue}`;
}

function prefixSearchIndex(
  version: string,
  searchIndex: Record<string, string> | undefined
): Record<string, string> | undefined {
  if (!searchIndex) {
    return searchIndex;
  }

  return Object.fromEntries(
    Object.entries(searchIndex).map(([framework, indexFile]) => [
      framework,
      prefixVersionPath(version, indexFile),
    ])
  );
}

async function readJsonIfExists<T>(filePath: string): Promise<T | null> {
  if (!(await fs.pathExists(filePath))) {
    return null;
  }

  return fs.readJson(filePath);
}

function mergeBlocksRegistry(
  existingRegistry: RegistryIndex | null,
  currentRegistry: RegistryIndex,
  version: string,
  latestTag: string,
  shouldUpdateLatest: boolean
): RegistryIndex {
  const baseRegistry: RegistryIndex =
    existingRegistry ?? {
      $schema: currentRegistry.$schema,
      name: currentRegistry.name,
      searchIndex: {},
      'dist-tags': { latest: latestTag },
      versions: {},
    };

  const currentVersionEntry = currentRegistry.versions[version];
  if (!currentVersionEntry) {
    throw new Error(`Current blocks registry does not contain version '${version}'`);
  }

  const normalizedVersionEntry: RegistryVersionEntry = {
    blocks: currentVersionEntry.blocks.map((block) => ({
      ...block,
      path: prefixVersionPath(version, block.path),
    })),
  };

  baseRegistry.versions = {
    ...baseRegistry.versions,
    [version]: normalizedVersionEntry,
  };

  const prefixedSearchIndex = prefixSearchIndex(version, currentRegistry.searchIndex);
  if (prefixedSearchIndex && (shouldUpdateLatest || !baseRegistry.searchIndex)) {
    baseRegistry.searchIndex = prefixedSearchIndex;
  }

  baseRegistry['dist-tags'] = {
    ...baseRegistry['dist-tags'],
    latest: shouldUpdateLatest
      ? latestTag
      : (baseRegistry['dist-tags']?.latest ?? latestTag),
  };

  return baseRegistry;
}

function mergeExamplesRegistry(
  existingRegistry: ExamplesRegistryIndex | null,
  currentRegistry: ExamplesRegistryIndex,
  version: string,
  latestTag: string,
  shouldUpdateLatest: boolean
): ExamplesRegistryIndex {
  const baseRegistry: ExamplesRegistryIndex =
    existingRegistry ?? {
      $schema: currentRegistry.$schema,
      name: currentRegistry.name,
      searchIndex: {},
      'dist-tags': { latest: latestTag },
      versions: {},
    };

  const currentVersionEntry = currentRegistry.versions[version];
  if (!currentVersionEntry) {
    throw new Error(
      `Current examples registry does not contain version '${version}'`
    );
  }

  const normalizedVersionEntry: ExamplesRegistryVersionEntry = {
    examples: currentVersionEntry.examples.map((example) => ({
      ...example,
      path: prefixVersionPath(version, example.path),
    })),
  };

  baseRegistry.versions = {
    ...baseRegistry.versions,
    [version]: normalizedVersionEntry,
  };

  const prefixedSearchIndex = prefixSearchIndex(version, currentRegistry.searchIndex);
  if (prefixedSearchIndex && (shouldUpdateLatest || !baseRegistry.searchIndex)) {
    baseRegistry.searchIndex = prefixedSearchIndex;
  }

  baseRegistry['dist-tags'] = {
    ...baseRegistry['dist-tags'],
    latest: shouldUpdateLatest
      ? latestTag
      : (baseRegistry['dist-tags']?.latest ?? latestTag),
  };

  return baseRegistry;
}

async function copyVersionPayload(
  distDir: string,
  outDir: string,
  version: string
): Promise<void> {
  const versionDir = path.join(outDir, version);
  await fs.ensureDir(versionDir);

  const files = await fs.readdir(distDir);
  await Promise.all(
    files
      .filter(
        (file) => file !== 'registry.json' && file !== 'examples-registry.json'
      )
      .map((file) =>
        fs.copy(path.join(distDir, file), path.join(versionDir, file), {
          dereference: true,
          overwrite: true,
        })
      )
  );
}

async function main() {
  const args = parseArgs();

  await fs.ensureDir(args.outDir);

  if (await fs.pathExists(args.pagesDir)) {
    await fs.copy(args.pagesDir, args.outDir, {
      dereference: true,
      overwrite: true,
      errorOnExist: false,
    });
  }

  await copyVersionPayload(args.distDir, args.outDir, args.version);

  const currentRegistryPath = path.join(args.distDir, 'registry.json');
  const currentExamplesRegistryPath = path.join(args.distDir, 'examples-registry.json');

  const existingRegistryPath = path.join(args.outDir, 'registry.json');
  const existingExamplesRegistryPath = path.join(args.outDir, 'examples-registry.json');

  const currentRegistry = (await fs.readJson(currentRegistryPath)) as RegistryIndex;
  const currentExamplesRegistry =
    (await fs.readJson(currentExamplesRegistryPath)) as ExamplesRegistryIndex;

  const existingRegistry = await readJsonIfExists<RegistryIndex>(
    existingRegistryPath
  );
  const existingExamplesRegistry =
    await readJsonIfExists<ExamplesRegistryIndex>(existingExamplesRegistryPath);

  const mergedRegistry = mergeBlocksRegistry(
    existingRegistry,
    currentRegistry,
    args.version,
    args.latestTag,
    args.shouldUpdateLatest
  );

  const mergedExamplesRegistry = mergeExamplesRegistry(
    existingExamplesRegistry,
    currentExamplesRegistry,
    args.version,
    args.latestTag,
    args.shouldUpdateLatest
  );

  await fs.writeJson(existingRegistryPath, mergedRegistry, { spaces: 2 });
  await fs.writeJson(existingExamplesRegistryPath, mergedExamplesRegistry, {
    spaces: 2,
  });

  console.log(`✅ Staged merged registries in ${args.outDir}`);
  console.log(`   - version upserted: ${args.version}`);
  console.log(`   - latest tag: ${mergedRegistry['dist-tags'].latest}`);
}

main().catch((error) => {
  console.error('❌ Failed to merge registries for deployment:', error);
  process.exit(1);
});
