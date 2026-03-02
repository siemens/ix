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

type SearchIndexMap = {
  html?: string;
  react?: string;
  angular?: string;
  'angular-standalone'?: string;
  vue?: string;
};

type RegistryVersionEntry = {
  blocks: Array<{ name: string; path: string }>;
  examples: Array<{ name: string; path: string }>;
  components: {
    componentDoc: string;
    componentIndex: string;
    componentSearchIndex: string;
  };
  searchIndex?: {
    blocks?: SearchIndexMap;
    examples?: SearchIndexMap;
  };
};

type RegistryIndex = {
  $schema?: string;
  name: string;
  'dist-tags': Record<string, string>;
  versions: Record<string, RegistryVersionEntry>;
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

function prefixSearchIndexMap(
  version: string,
  searchIndex: SearchIndexMap | undefined
): SearchIndexMap | undefined {
  if (!searchIndex) {
    return searchIndex;
  }

  return Object.fromEntries(
    Object.entries(searchIndex).map(([framework, indexFile]) => [
      framework,
      prefixVersionPath(version, indexFile),
    ])
  ) as SearchIndexMap;
}

function prefixComponents(
  version: string,
  components: RegistryVersionEntry['components']
): RegistryVersionEntry['components'] {
  return {
    componentDoc: prefixVersionPath(version, components.componentDoc),
    componentIndex: prefixVersionPath(version, components.componentIndex),
    componentSearchIndex: prefixVersionPath(
      version,
      components.componentSearchIndex
    ),
  };
}

async function readJsonIfExists<T>(filePath: string): Promise<T | null> {
  if (!(await fs.pathExists(filePath))) {
    return null;
  }

  return fs.readJson(filePath);
}

function mergeRegistry(
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
      'dist-tags': { latest: latestTag },
      versions: {},
    };

  const currentVersionEntry = currentRegistry.versions[version];
  if (!currentVersionEntry) {
    const availableVersions = Object.keys(currentRegistry.versions ?? {});
    throw new Error(
      `Current registry does not contain version '${version}'. Available versions: ${availableVersions.join(', ') || 'none'}`
    );
  }

  const normalizedVersionEntry: RegistryVersionEntry = {
    blocks: currentVersionEntry.blocks.map((block) => ({
      ...block,
      path: prefixVersionPath(version, block.path),
    })),
    examples: currentVersionEntry.examples.map((example) => ({
      ...example,
      path: prefixVersionPath(version, example.path),
    })),
    components: prefixComponents(version, currentVersionEntry.components),
    searchIndex: {
      blocks: prefixSearchIndexMap(
        version,
        currentVersionEntry.searchIndex?.blocks
      ),
      examples: prefixSearchIndexMap(
        version,
        currentVersionEntry.searchIndex?.examples
      ),
    },
  };

  baseRegistry.versions = {
    ...baseRegistry.versions,
    [version]: normalizedVersionEntry,
  };

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
      .filter((file) => file !== 'registry.json')
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
  const existingRegistryPath = path.join(args.outDir, 'registry.json');

  const currentRegistry = (await fs.readJson(currentRegistryPath)) as RegistryIndex;
  const existingRegistry = await readJsonIfExists<RegistryIndex>(
    existingRegistryPath
  );

  const mergedRegistry = mergeRegistry(
    existingRegistry,
    currentRegistry,
    args.version,
    args.latestTag,
    args.shouldUpdateLatest
  );

  await fs.writeJson(existingRegistryPath, mergedRegistry, { spaces: 2 });

  console.log(`✅ Staged merged registry in ${args.outDir}`);
  console.log(`   - version upserted: ${args.version}`);
  console.log(`   - latest tag: ${mergedRegistry['dist-tags'].latest}`);
}

main().catch((error) => {
  console.error('❌ Failed to merge registry for deployment:', error);
  process.exit(1);
});
