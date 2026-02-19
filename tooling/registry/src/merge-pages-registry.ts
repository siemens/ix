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
  searchIndex?: Record<string, string>;
};

type ComponentsRegistryVersionEntry = {
  components: {
    componentDoc: string;
    componentIndex: string;
    componentSearchIndex: string;
  };
};

type ExamplesRegistryVersionEntry = {
  examples: Array<{ name: string; path: string }>;
  searchIndex?: Record<string, string>;
};

type RegistryIndex = {
  $schema?: string;
  name: string;
  'dist-tags': Record<string, string>;
  versions: Record<string, RegistryVersionEntry>;
};

type ExamplesRegistryIndex = {
  $schema?: string;
  name: string;
  'dist-tags': Record<string, string>;
  versions: Record<string, ExamplesRegistryVersionEntry>;
};

type ComponentsRegistryIndex = {
  $schema?: string;
  name: string;
  'dist-tags': Record<string, string>;
  versions: Record<string, ComponentsRegistryVersionEntry>;
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

function prefixComponents(
  version: string,
  components: ComponentsRegistryVersionEntry['components']
): ComponentsRegistryVersionEntry['components'] {
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
      'dist-tags': { latest: latestTag },
      versions: {},
    };

  const currentVersionEntry = currentRegistry.versions[version];
  if (!currentVersionEntry) {
    const availableVersions = Object.keys(currentRegistry.versions ?? {});
    throw new Error(
      `Current blocks registry does not contain version '${version}'. Available versions: ${availableVersions.join(', ') || 'none'}`
    );
  }

  const sourceSearchIndex =
    currentVersionEntry.searchIndex ||
    (currentRegistry as { searchIndex?: Record<string, string> }).searchIndex;

  const normalizedVersionEntry: RegistryVersionEntry = {
    blocks: currentVersionEntry.blocks.map((block) => ({
      ...block,
      path: prefixVersionPath(version, block.path),
    })),
    searchIndex: prefixSearchIndex(version, sourceSearchIndex),
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

  delete (baseRegistry as { searchIndex?: unknown }).searchIndex;

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
      'dist-tags': { latest: latestTag },
      versions: {},
    };

  const currentVersionEntry = currentRegistry.versions[version];
  if (!currentVersionEntry) {
    const availableVersions = Object.keys(currentRegistry.versions ?? {});
    throw new Error(
      `Current examples registry does not contain version '${version}'. Available versions: ${availableVersions.join(', ') || 'none'}`
    );
  }

  const sourceSearchIndex =
    currentVersionEntry.searchIndex ||
    (currentRegistry as { searchIndex?: Record<string, string> }).searchIndex;

  const normalizedVersionEntry: ExamplesRegistryVersionEntry = {
    examples: currentVersionEntry.examples.map((example) => ({
      ...example,
      path: prefixVersionPath(version, example.path),
    })),
    searchIndex: prefixSearchIndex(version, sourceSearchIndex),
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

  delete (baseRegistry as { searchIndex?: unknown }).searchIndex;

  return baseRegistry;
}

function mergeComponentsRegistry(
  existingRegistry: ComponentsRegistryIndex | null,
  currentRegistry: ComponentsRegistryIndex,
  version: string,
  latestTag: string,
  shouldUpdateLatest: boolean
): ComponentsRegistryIndex {
  const baseRegistry: ComponentsRegistryIndex =
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
      `Current components registry does not contain version '${version}'. Available versions: ${availableVersions.join(', ') || 'none'}`
    );
  }

  const normalizedVersionEntry: ComponentsRegistryVersionEntry = {
    components: prefixComponents(version, currentVersionEntry.components),
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
      .filter(
        (file) =>
          file !== 'registry.json' &&
          file !== 'examples-registry.json' &&
          file !== 'components-registry.json'
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
  const currentComponentsRegistryPath = path.join(
    args.distDir,
    'components-registry.json'
  );

  const existingRegistryPath = path.join(args.outDir, 'registry.json');
  const existingExamplesRegistryPath = path.join(args.outDir, 'examples-registry.json');
  const existingComponentsRegistryPath = path.join(
    args.outDir,
    'components-registry.json'
  );

  const currentRegistry = (await fs.readJson(currentRegistryPath)) as RegistryIndex;
  const currentExamplesRegistry =
    (await fs.readJson(currentExamplesRegistryPath)) as ExamplesRegistryIndex;
  const currentComponentsRegistry =
    (await fs.readJson(currentComponentsRegistryPath)) as ComponentsRegistryIndex;

  const existingRegistry = await readJsonIfExists<RegistryIndex>(
    existingRegistryPath
  );
  const existingExamplesRegistry =
    await readJsonIfExists<ExamplesRegistryIndex>(existingExamplesRegistryPath);
  const existingComponentsRegistry =
    await readJsonIfExists<ComponentsRegistryIndex>(
      existingComponentsRegistryPath
    );

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

  const mergedComponentsRegistry = mergeComponentsRegistry(
    existingComponentsRegistry,
    currentComponentsRegistry,
    args.version,
    args.latestTag,
    args.shouldUpdateLatest
  );

  await fs.writeJson(existingRegistryPath, mergedRegistry, { spaces: 2 });
  await fs.writeJson(existingExamplesRegistryPath, mergedExamplesRegistry, {
    spaces: 2,
  });
  await fs.writeJson(existingComponentsRegistryPath, mergedComponentsRegistry, {
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
