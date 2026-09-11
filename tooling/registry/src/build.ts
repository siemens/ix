/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Listr } from 'listr2';
import path from 'node:path';
import fs from 'fs-extra';
import tsconfig from '../tsconfig.json' assert { type: 'json' };
import { glob } from 'glob';
import {
  buildDocumentationSearchIndex,
  DOCUMENTATION_SEARCH_INDEX_FILE,
} from './search-index';
import { generateExampleDefinitions } from './generate-examples';
import { generateLlmsArtifacts } from './llms';
import { generatePatternDefinitions } from './pattern-dependencies';
import { validateJsonFiles } from './schema-validation';
import {
  updateComponentsRegistry,
  updatePatternsRegistry,
  updateExamplesRegistry,
  updateDocumentationSearchIndexRegistry,
  updateLlmsRegistry,
} from './update-registry';

const __dirname = path.resolve();
const __workspace_root = path.join(__dirname, '..', '..');
const __node_modules = path.join(__dirname, 'node_modules');
const __react_patterns = path.join(__node_modules, 'react-patterns');
const __ix_package = path.join(__dirname, '..', '..', 'packages', 'core');
const __examples_root = path.join(__dirname, '..', '..', 'examples');
const __registry_template = path.join(__dirname, 'registry.json');
const __registry_schema_template = path.join(__dirname, 'registry.schema.json');
const __pattern_schema = path.join(__dirname, 'schemas', 'pattern.schema.json');
const __authored_pattern_schema = path.join(
  __dirname,
  'schemas',
  'authored-pattern.schema.json'
);
const __example_schema = path.join(__dirname, 'schemas', 'example.schema.json');
const __documentation_search_index_schema = path.join(
  __dirname,
  'schemas',
  'documentation-search-index.schema.json'
);
const __ix_component_doc = path.join(__ix_package, 'component-doc.json');
const __patterns_root = path.join(__dirname, '..', '..', 'patterns');
const __html_examples_component_usage_by_component = path.join(
  __examples_root,
  'html-examples',
  'component-usage-by-component.json'
);
const __react_patterns_component_usage_by_component = path.join(
  __patterns_root,
  'react-patterns',
  'component-usage-by-component.json'
);

type PatternDefinition = {
  name: string;
  variants?: Record<
    string,
    {
      files?: Array<{ sourcePath: string }>;
    }
  >;
};

function normalizeRelationships(
  input: Record<string, string[]>,
  resolveEntryName: (file: string) => string | null
): Record<string, string[]> {
  const result: Record<string, string[]> = {};

  for (const [component, entries] of Object.entries(input)) {
    const normalizedEntries = Array.from(
      new Set(
        entries.map(resolveEntryName).filter((name): name is string => !!name)
      )
    ).sort();

    if (normalizedEntries.length > 0) {
      result[component] = normalizedEntries;
    }
  }

  return result;
}

function toExampleName(value: string): string | null {
  const normalized = value.replace(/\\/g, '/');
  const previewExampleMatch = normalized.match(
    /\/src\/preview-examples\/([^/]+)\.html$/
  );

  if (previewExampleMatch?.[1]) {
    return previewExampleMatch[1];
  }

  const htmlFileMatch = normalized.match(/([^/]+)\.html$/);
  return htmlFileMatch?.[1] ?? null;
}

function normalizeSourcePath(value: string): string {
  return value.replace(/\\/g, '/').replace(/^\/+/, '');
}

async function readPatternNamesByReactSource(): Promise<Map<string, string>> {
  const patternFiles = await glob(path.join(__patterns_root, '*.json'), {
    absolute: true,
  });
  const patterns = await Promise.all(
    patternFiles.map(
      async (file) => (await fs.readJson(file)) as PatternDefinition
    )
  );
  const patternNamesBySource = new Map<string, string>();

  for (const pattern of patterns) {
    for (const file of pattern.variants?.react?.files ?? []) {
      const source = normalizeSourcePath(file.sourcePath);
      const relativeSource = source.startsWith('react-patterns/')
        ? source.slice('react-patterns/'.length)
        : source;
      patternNamesBySource.set(relativeSource, pattern.name);
    }
  }

  return patternNamesBySource;
}

interface Ctx {
  dist: string;
  registryVersion: string;
  registryPathPrefix: string;
  registryLatestTag: string;
  noRegistryMinify: boolean;
}

const task = new Listr<Ctx>([
  {
    title: 'Resolve build metadata',
    task: (ctx) => {
      ctx.dist = tsconfig.compilerOptions.outDir || 'dist';
      ctx.registryVersion =
        process.env.REGISTRY_VERSION?.trim() || 'development';
      ctx.registryPathPrefix = process.env.REGISTRY_PATH_PREFIX?.trim() ?? '';
      ctx.registryLatestTag =
        process.env.REGISTRY_LATEST_TAG?.trim() || ctx.registryVersion;

      const noRegistryMinifyRaw = process.env.NO_REGISTRY_MINIFY?.trim();
      ctx.noRegistryMinify =
        noRegistryMinifyRaw === '1' ||
        noRegistryMinifyRaw === 'true' ||
        noRegistryMinifyRaw === 'yes';

      console.log(`📌 Registry version: ${ctx.registryVersion}`);
      console.log(`📂 Registry path prefix: ${ctx.registryPathPrefix}`);
      console.log(`🏷️  Registry latest tag: ${ctx.registryLatestTag}`);
    },
  },
  {
    title: 'Validate source pattern definitions',
    task: async () => {
      const files = await glob(path.join(__patterns_root, '*.json'), {
        absolute: true,
      });
      await validateJsonFiles(files, __authored_pattern_schema);
    },
  },
  {
    title: 'Copy registry templates to dist',
    task: async (ctx) => {
      await fs.remove(ctx.dist);
      await fs.ensureDir(ctx.dist);
      await Promise.all([
        fs.copy(__registry_template, path.join(ctx.dist, 'registry.json'), {
          dereference: true,
        }),
        fs.copy(
          __registry_schema_template,
          path.join(ctx.dist, 'registry.schema.json'),
          {
            dereference: true,
          }
        ),
      ]);
    },
  },
  {
    title: 'Copy pattern preview assets to dist',
    task: async (ctx) => {
      const dest = path.join(ctx.dist, 'patterns', 'react-patterns');
      await fs.copy(
        path.join(__react_patterns, 'dist'),
        path.join(dest, 'dist'),
        {
          dereference: true,
        }
      );
    },
  },
  {
    title: 'Generate example definitions',
    task: async (ctx) => {
      const examplesOutputDir = path.join(ctx.dist, 'examples');
      const examplesDir = path.join(__dirname, '..', '..', 'examples');
      await generateExampleDefinitions(examplesOutputDir, examplesDir);
    },
  },
  {
    title: 'Copy HTML example preview assets to dist',
    task: async (ctx) => {
      const htmlDistSourcePath = path.join(
        __examples_root,
        'html-examples',
        'dist'
      );
      const htmlDistDestPath = path.join(
        ctx.dist,
        'examples',
        'html-examples',
        'dist'
      );

      if (await fs.pathExists(htmlDistSourcePath)) {
        await fs.copy(htmlDistSourcePath, htmlDistDestPath, {
          dereference: true,
        });
      }
    },
  },
  {
    title: 'Copy IX component metadata to dist',
    task: async (ctx) => {
      const dest = path.join(ctx.dist, 'ix');

      await Promise.all([
        fs.copy(__ix_component_doc, path.join(dest, 'component-doc.json'), {
          dereference: true,
        }),
      ]);

      const componentRelatedExamplesTarget = path.join(
        dest,
        'component-related-examples.json'
      );
      const componentRelatedPatternsTarget = path.join(
        dest,
        'component-related-patterns.json'
      );

      if (await fs.pathExists(__html_examples_component_usage_by_component)) {
        const relatedExamples = (await fs.readJson(
          __html_examples_component_usage_by_component
        )) as Record<string, string[]>;

        await fs.outputJson(
          componentRelatedExamplesTarget,
          normalizeRelationships(relatedExamples, toExampleName),
          { spaces: 2 }
        );
      } else {
        console.warn(
          `⚠️  Related examples file not found: ${__html_examples_component_usage_by_component}. Creating empty mapping.`
        );
        await fs.outputJson(componentRelatedExamplesTarget, {}, { spaces: 2 });
      }

      if (await fs.pathExists(__react_patterns_component_usage_by_component)) {
        const [relatedPatterns, patternNamesBySource] = await Promise.all([
          fs.readJson(__react_patterns_component_usage_by_component) as Promise<
            Record<string, string[]>
          >,
          readPatternNamesByReactSource(),
        ]);
        const unmappedPatternFiles = Array.from(
          new Set(
            Object.values(relatedPatterns)
              .flat()
              .map(normalizeSourcePath)
              .filter((file) => !patternNamesBySource.has(file))
          )
        ).sort();

        if (unmappedPatternFiles.length > 0) {
          throw new Error(
            `Component usage found in React files not declared by a pattern: ${unmappedPatternFiles.join(
              ', '
            )}`
          );
        }

        await fs.outputJson(
          componentRelatedPatternsTarget,
          normalizeRelationships(
            relatedPatterns,
            (file) =>
              patternNamesBySource.get(normalizeSourcePath(file)) ?? null
          ),
          { spaces: 2 }
        );
      } else {
        console.warn(
          `⚠️  Related patterns file not found: ${__react_patterns_component_usage_by_component}. Creating empty mapping.`
        );
        await fs.outputJson(componentRelatedPatternsTarget, {}, { spaces: 2 });
      }
    },
  },
  {
    title: 'Update patterns registry.json',
    task: async (ctx) => {
      const registryPath = path.join(ctx.dist, 'registry.json');
      const patternsDir = path.join(__dirname, '..', '..', 'patterns');
      await updatePatternsRegistry(registryPath, patternsDir, {
        version: ctx.registryVersion,
        latestTag: ctx.registryLatestTag,
        pathPrefix: ctx.registryPathPrefix,
      });
    },
  },
  {
    title: 'Update registry.json components section',
    task: async (ctx) => {
      const registryPath = path.join(ctx.dist, 'registry.json');
      await updateComponentsRegistry(registryPath, {
        version: ctx.registryVersion,
        latestTag: ctx.registryLatestTag,
        pathPrefix: ctx.registryPathPrefix,
        components: {
          componentDoc: 'ix/component-doc.json',
          componentRelatedExamples: 'ix/component-related-examples.json',
          componentRelatedPatterns: 'ix/component-related-patterns.json',
        },
      });
    },
  },
  {
    title: 'Update registry.json examples section',
    task: async (ctx) => {
      const registryPath = path.join(ctx.dist, 'registry.json');
      const examplesDir = path.join(ctx.dist, 'examples');
      await updateExamplesRegistry(registryPath, examplesDir, {
        version: ctx.registryVersion,
        latestTag: ctx.registryLatestTag,
        pathPrefix: ctx.registryPathPrefix,
      });
    },
  },
  {
    title: 'Generate pattern definitions with dependency metadata',
    task: async (ctx) => {
      const dest = path.join(ctx.dist, 'patterns');
      await generatePatternDefinitions({
        patternsDir: __patterns_root,
        outputDir: dest,
        registryVersion: ctx.registryVersion,
        workspaceRoot: __workspace_root,
      });
    },
  },
  {
    title: 'Copy schema JSON files to dist',
    task: async (ctx) => {
      const dest = path.join(ctx.dist, 'schemas');
      const files = await glob(path.join(__dirname, 'schemas', '*.json'), {
        absolute: true,
      });
      await Promise.all(
        files
          .filter(
            (file) => path.basename(file) !== 'authored-pattern.schema.json'
          )
          .map((file) =>
            fs.copy(file, path.join(dest, path.basename(file)), {
              dereference: true,
            })
          )
      );
    },
  },
  {
    title: 'Fix schema $schema paths for pattern JSON files',
    task: async (ctx) => {
      const patternDir = path.join(ctx.dist, 'patterns');
      const files = await glob(path.join(patternDir, '*.json'), {
        absolute: true,
      });
      await Promise.all(
        files.map(async (file) => {
          const content = await fs.readFile(file, 'utf-8');
          const json = JSON.parse(content);
          if (json.$schema) {
            json.$schema = '../schemas/pattern.schema.json';
            await fs.writeFile(file, JSON.stringify(json, null, 2), 'utf-8');
          }
        })
      );
    },
  },
  {
    title: 'Fix schema $schema paths for example JSON files',
    task: async (ctx) => {
      const examplesDir = path.join(ctx.dist, 'examples');
      const files = await glob(path.join(examplesDir, '*.json'), {
        absolute: true,
      });
      await Promise.all(
        files.map(async (file) => {
          const content = await fs.readFile(file, 'utf-8');
          const json = JSON.parse(content);
          if (json.$schema) {
            json.$schema = '../schemas/example.schema.json';
            await fs.writeFile(file, JSON.stringify(json, null, 2), 'utf-8');
          }
        })
      );
    },
  },
  {
    title: 'Validate generated pattern and example definitions',
    task: async (ctx) => {
      const [patternFiles, exampleFiles] = await Promise.all([
        glob(path.join(ctx.dist, 'patterns', '*.json'), { absolute: true }),
        glob(path.join(ctx.dist, 'examples', '*.json'), { absolute: true }),
      ]);
      await Promise.all([
        validateJsonFiles(patternFiles, __pattern_schema),
        validateJsonFiles(exampleFiles, __example_schema),
      ]);
    },
  },
  {
    title: 'Generate llms.txt artifacts',
    task: async (ctx) => {
      const registryPath = path.join(ctx.dist, 'registry.json');
      const llmsArtifacts = await generateLlmsArtifacts({
        distDir: ctx.dist,
        componentDocPath: path.join(ctx.dist, 'ix', 'component-doc.json'),
        componentRelatedExamplesPath: path.join(
          ctx.dist,
          'ix',
          'component-related-examples.json'
        ),
        componentRelatedPatternsPath: path.join(
          ctx.dist,
          'ix',
          'component-related-patterns.json'
        ),
        patternsDir: path.join(ctx.dist, 'patterns'),
        examplesDir: path.join(ctx.dist, 'examples'),
      });

      await updateLlmsRegistry(registryPath, {
        version: ctx.registryVersion,
        latestTag: ctx.registryLatestTag,
        pathPrefix: ctx.registryPathPrefix,
        llms: llmsArtifacts,
      });
    },
  },
  {
    title: 'Build central documentation search index',
    task: async (ctx) => {
      await buildDocumentationSearchIndex({
        distDir: ctx.dist,
        patternsDir: path.join(ctx.dist, 'patterns'),
        examplesDir: path.join(ctx.dist, 'examples'),
        componentDocPath: path.join(ctx.dist, 'ix', 'component-doc.json'),
        componentRelatedExamplesPath: path.join(
          ctx.dist,
          'ix',
          'component-related-examples.json'
        ),
        componentRelatedPatternsPath: path.join(
          ctx.dist,
          'ix',
          'component-related-patterns.json'
        ),
        workspaceRoot: __workspace_root,
      });
      await validateJsonFiles(
        [path.join(ctx.dist, DOCUMENTATION_SEARCH_INDEX_FILE)],
        __documentation_search_index_schema
      );

      await updateDocumentationSearchIndexRegistry(
        path.join(ctx.dist, 'registry.json'),
        {
          version: ctx.registryVersion,
          latestTag: ctx.registryLatestTag,
          pathPrefix: ctx.registryPathPrefix,
          documentationSearchIndex: DOCUMENTATION_SEARCH_INDEX_FILE,
        }
      );
    },
  },
  {
    title: 'Validate generated registry manifest',
    task: async (ctx) => {
      await validateJsonFiles(
        [path.join(ctx.dist, 'registry.json')],
        __registry_schema_template
      );
    },
  },
  {
    title: 'Minify JSON files in dist',
    task: async (ctx) => {
      if (ctx.noRegistryMinify) {
        console.log('🧾 JSON minification disabled (NO_REGISTRY_MINIFY)');
        return;
      }

      const jsonFiles = await glob(path.join(ctx.dist, '**', '*.json'), {
        absolute: true,
      });

      await Promise.all(
        jsonFiles.map(async (file) => {
          const json = await fs.readJson(file);
          await fs.writeFile(file, JSON.stringify(json), 'utf-8');
        })
      );
    },
  },
]);

async function main() {
  const context = await task.run();
  return context;
}

main().catch((err) => {
  console.error('❌ Error during build:', err);
  process.exit(1);
});
