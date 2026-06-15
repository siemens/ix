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
    componentRelatedExamples: string;
  };
  llms?: {
    entrypoint: string;
    components: string;
    blocks: string;
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
    componentRelatedExamples: prefixVersionPath(
      version,
      components.componentRelatedExamples
    ),
  };
}

function prefixLlms(
  version: string,
  llms: RegistryVersionEntry['llms']
): RegistryVersionEntry['llms'] {
  if (!llms) {
    return undefined;
  }

  return {
    entrypoint: prefixVersionPath(version, llms.entrypoint),
    components: prefixVersionPath(version, llms.components),
    blocks: prefixVersionPath(version, llms.blocks),
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
  const baseRegistry: RegistryIndex = existingRegistry ?? {
    $schema: currentRegistry.$schema,
    name: currentRegistry.name,
    'dist-tags': { latest: latestTag },
    versions: {},
  };

  baseRegistry.$schema = currentRegistry.$schema;
  baseRegistry.name = currentRegistry.name;

  const currentVersionEntry = currentRegistry.versions[version];
  if (!currentVersionEntry) {
    const availableVersions = Object.keys(currentRegistry.versions ?? {});
    throw new Error(
      `Current registry does not contain version '${version}'. Available versions: ${
        availableVersions.join(', ') || 'none'
      }`
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
    llms: prefixLlms(version, currentVersionEntry.llms),
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
      : baseRegistry['dist-tags']?.latest ?? latestTag,
  };

  return baseRegistry;
}

function renderRootLlmsTxt(registry: RegistryIndex): string {
  const versions = Object.keys(registry.versions).sort((a, b) =>
    b.localeCompare(a)
  );
  const latest = registry['dist-tags']?.latest;
  const tagEntries = Object.entries(registry['dist-tags'] ?? {}).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  const versionLinks = versions
    .map((version) => {
      const entry = registry.versions[version];
      const llmsPath = entry.llms?.entrypoint ?? `${version}/llms.txt`;
      const tags = tagEntries
        .filter(([, taggedVersion]) => taggedVersion === version)
        .map(([tag]) => tag);
      const suffix = tags.length > 0 ? ` Tags: ${tags.join(', ')}.` : '';

      return `- [${version}](${llmsPath}): Versioned Siemens iX registry LLM entrypoint.${suffix}`;
    })
    .join('\n');

  const componentLinks = versions
    .map((version) => {
      const entry = registry.versions[version];
      const componentsPath = entry.llms?.components;

      if (!componentsPath) {
        return `- ${version}: Component LLM docs unavailable.`;
      }

      return `- [${version} components](${componentsPath}): Component API, examples, Figma IDs, and relationship availability for ${version}.`;
    })
    .join('\n');

  const blockLinks = versions
    .map((version) => {
      const entry = registry.versions[version];
      const blocksPath = entry.llms?.blocks;

      if (!blocksPath) {
        return `- ${version}: Block LLM docs unavailable.`;
      }

      return `- [${version} blocks](${blocksPath}): Registry block metadata, variants, files, dependencies, and component usage availability for ${version}.`;
    })
    .join('\n');

  return `# Siemens iX Registry

> Root LLM entrypoint for all deployed Siemens iX registries. Use this file to choose a registry version, then open that version's own llms.txt for focused component and block context.

Check the version of "iX" you are using in your project and select the corresponding registry version below for the most compatible LLM context e.g if @siemens/ix-react version 5.0.0 is installed, the 5.0.0 registry version will likely have the most relevant and accurate LLM context.

Recommended flow: choose a version, open its versioned llms.txt, then open component docs for exact API usage or block docs for complete copyable UI patterns.

Component docs contain properties, events, slots, documentation links, related examples, Figma main component IDs, and relationship availability. Figma IDs identify design-system counterparts and should be used for mapping design resources to iX components, not as runtime APIs.

Block docs describe copyable multi-file UI patterns built with iX packages, including previews, framework variants, files, dependencies, and component usage availability.

If a relationship is marked unavailable in a linked file, do not infer it; the registry JSON does not provide that relationship.

Latest registry tag: ${latest ?? 'unavailable'}.

## Registry versions

${versionLinks || '- No registry versions available.'}

## Component docs

${componentLinks || '- No component LLM docs available.'}

## Block docs

${blockLinks || '- No block LLM docs available.'}

## Optional

- [Registry manifest](registry.json): Machine-readable manifest containing all deployed registry versions and dist-tags.
`;
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

  const sourceRegistrySchemaPath = path.join(
    args.distDir,
    'registry.schema.json'
  );
  const sourceRegistrySchemaFallbackPath = path.join(
    args.distDir,
    'schemas',
    'registry.schema.json'
  );
  const targetRegistrySchemaPath = path.join(
    args.outDir,
    'registry.schema.json'
  );

  if (await fs.pathExists(sourceRegistrySchemaPath)) {
    await fs.copy(sourceRegistrySchemaPath, targetRegistrySchemaPath, {
      dereference: true,
      overwrite: true,
    });
  } else if (await fs.pathExists(sourceRegistrySchemaFallbackPath)) {
    await fs.copy(sourceRegistrySchemaFallbackPath, targetRegistrySchemaPath, {
      dereference: true,
      overwrite: true,
    });
  }

  const currentRegistryPath = path.join(args.distDir, 'registry.json');
  const existingRegistryPath = path.join(args.outDir, 'registry.json');

  const currentRegistry = (await fs.readJson(
    currentRegistryPath
  )) as RegistryIndex;
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
  await fs.writeFile(
    path.join(args.outDir, 'llms.txt'),
    renderRootLlmsTxt(mergedRegistry),
    'utf-8'
  );

  console.log(`✅ Staged merged registry in ${args.outDir}`);
  console.log(`   - version upserted: ${args.version}`);
  console.log(`   - latest tag: ${mergedRegistry['dist-tags'].latest}`);
  console.log('   - root llms.txt updated');
}

main().catch((error) => {
  console.error('❌ Failed to merge registry for deployment:', error);
  process.exit(1);
});
