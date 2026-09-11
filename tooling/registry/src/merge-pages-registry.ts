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
import { pathToFileURL } from 'node:url';
import {
  assertDeploymentVersion,
  determineLatestRegistryVersion,
} from './deployment-policy';
import { assertJsonSchema, compileJsonSchema } from './schema-validation';

type SearchIndexMap = {
  html?: string;
  react?: string;
  angular?: string;
  'angular-standalone'?: string;
  vue?: string;
};

export type RegistryVersionEntry = {
  blocks: Array<{ name: string; path: string }>;
  examples: Array<{ name: string; path: string }>;
  components: {
    componentDoc: string;
    componentIndex: string;
    componentSearchIndex: string;
    componentRelatedExamples: string;
    componentRelatedBlocks?: string;
  };
  llms?: {
    entrypoint: string;
    components: string;
    examples?: string;
    blocks: string;
  };
  searchIndex?: {
    blocks?: SearchIndexMap;
    examples?: SearchIndexMap;
  };
};

export type RegistryIndex = {
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

  if (!distDir || !pagesDir || !outDir || !version) {
    throw new Error(
      'Missing arguments. Required: --dist-dir --pages-dir --out-dir --version'
    );
  }

  assertDeploymentVersion(version);

  return {
    distDir,
    pagesDir,
    outDir,
    version,
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
    ...(components.componentRelatedBlocks
      ? {
          componentRelatedBlocks: prefixVersionPath(
            version,
            components.componentRelatedBlocks
          ),
        }
      : {}),
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
    examples: llms.examples
      ? prefixVersionPath(version, llms.examples)
      : undefined,
    blocks: prefixVersionPath(version, llms.blocks),
  };
}

async function readJsonIfExists<T>(filePath: string): Promise<T | null> {
  if (!(await fs.pathExists(filePath))) {
    return null;
  }

  return fs.readJson(filePath);
}

export function mergeRegistry(
  existingRegistry: RegistryIndex | null,
  currentRegistry: RegistryIndex,
  version: string
): RegistryIndex {
  assertDeploymentVersion(version);

  const baseRegistry: RegistryIndex = existingRegistry ?? {
    $schema: currentRegistry.$schema,
    name: currentRegistry.name,
    'dist-tags': {},
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
    latest: determineLatestRegistryVersion(
      baseRegistry['dist-tags']?.latest,
      Object.keys(baseRegistry.versions),
      version
    ),
  };

  return baseRegistry;
}

function renderRootLlmsTxt(registry: RegistryIndex): string {
  const versions = Object.keys(registry.versions).sort((a, b) =>
    b.localeCompare(a)
  );
  const latest = registry['dist-tags']?.latest;
  const tagEntries = Object.entries(registry['dist-tags'] ?? {}).sort(
    ([a], [b]) => a.localeCompare(b)
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

      return `- [${version} blocks](${blocksPath}): Registry block metadata, variants, files, and component usage availability for ${version}.`;
    })
    .join('\n');

  const exampleLinks = versions
    .map((version) => {
      const entry = registry.versions[version];
      const examplesPath = entry.llms?.examples;

      if (!examplesPath) {
        return `- ${version}: Example LLM docs unavailable.`;
      }

      return `- [${version} examples](${examplesPath}): Registry examples with related iX components, framework variants, and source files for ${version}.`;
    })
    .join('\n');

  return `# Siemens iX Registry

> Root LLM entrypoint for all deployed Siemens iX registries. Use this file to choose a registry version, then open that version's own llms.txt for focused component, example, and block context.

Check the version of "iX" you are using in your project and select the corresponding registry version below for the most compatible LLM context e.g if @siemens/ix-react version 5.0.0 is installed, the 5.0.0 registry version will likely have the most relevant and accurate LLM context.

Recommended flow: choose a version, open its versioned llms.txt, then open component docs for exact API usage, example docs for practical framework code, or block docs for complete copyable UI patterns.

Component docs contain properties, events, slots, documentation links, related examples, Figma main component IDs, and relationship availability. Figma IDs identify design-system counterparts and should be used for mapping design resources to iX components, not as runtime APIs.

Example docs contain related iX components, framework variants, and source files so examples can be found without first navigating through component docs.

Block docs describe copyable multi-file UI patterns built with iX packages, including previews, framework variants, files, and component usage availability.

If a relationship is marked unavailable in a linked file, do not infer it; the registry JSON does not provide that relationship.

Latest registry tag: ${latest ?? 'unavailable'}.

## Registry versions

${versionLinks || '- No registry versions available.'}

## Component docs

${componentLinks || '- No component LLM docs available.'}

## Example docs

${exampleLinks || '- No example LLM docs available.'}

## Block docs

${blockLinks || '- No block LLM docs available.'}

## Optional

- [Registry manifest](registry.json): Machine-readable manifest containing all deployed registry versions and dist-tags.
`;
}

export async function copyVersionPayload(
  distDir: string,
  outDir: string,
  version: string
): Promise<void> {
  const versionDir = path.join(outDir, version);
  await fs.remove(versionDir);
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
  await fs.remove(path.join(args.outDir, '.git'));

  if (await fs.pathExists(args.pagesDir)) {
    await fs.copy(args.pagesDir, args.outDir, {
      dereference: true,
      overwrite: true,
      errorOnExist: false,
      filter: (source) => {
        const relativePath = path.relative(args.pagesDir, source);
        return (
          relativePath !== '.git' && !relativePath.startsWith(`.git${path.sep}`)
        );
      },
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
    args.version
  );
  const registrySchemaPath = (await fs.pathExists(sourceRegistrySchemaPath))
    ? sourceRegistrySchemaPath
    : sourceRegistrySchemaFallbackPath;
  const validateRegistry = await compileJsonSchema(registrySchemaPath);
  assertJsonSchema(mergedRegistry, validateRegistry, 'merged registry');

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

const entrypoint = process.argv[1]
  ? pathToFileURL(process.argv[1]).href
  : undefined;

if (entrypoint === import.meta.url) {
  main().catch((error) => {
    console.error('❌ Failed to merge registry for deployment:', error);
    process.exit(1);
  });
}
