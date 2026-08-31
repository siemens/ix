/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import MiniSearch from 'minisearch';
import fs from 'fs-extra';
import path from 'node:path';
import { glob } from 'glob';

export const DOCUMENTATION_SEARCH_INDEX_FILE =
  'documentation-search-index.json';
export const DOCUMENTATION_SEARCH_INDEX_SCHEMA_VERSION = 1;

export const DOCUMENTATION_SEARCH_FRAMEWORKS = [
  'html',
  'react',
  'angular',
  'angular-standalone',
  'vue',
] as const;
export type DocumentationSearchFramework =
  (typeof DOCUMENTATION_SEARCH_FRAMEWORKS)[number];

export const DOCUMENTATION_SEARCH_FIELDS = [
  'kind',
  'name',
  'tag',
  'description',
  'keywords',
  'relatedComponents',
  'figmaMainComponentIds',
  'apiMembers',
  'files',
  'sourceText',
] as const;

export const DOCUMENTATION_SEARCH_STORE_FIELDS = [
  'id',
  'kind',
  'name',
  'tag',
  'description',
  'keywords',
  'framework',
  'path',
  'detailPath',
  'relatedComponents',
  'relatedExamples',
  'relatedBlocks',
  'documentation',
  'figmaMainComponentIds',
] as const;

export const DOCUMENTATION_SEARCH_OPTIONS = {
  boost: {
    kind: 1,
    name: 3,
    tag: 3,
    description: 2,
    keywords: 2,
    relatedComponents: 1.5,
    figmaMainComponentIds: 2,
    apiMembers: 1.5,
    files: 1.5,
    sourceText: 1,
  },
  fuzzy: 0.2,
  prefix: true,
} as const;

type DocsTag = {
  name: string;
  text?: string;
};

type ApiItem = {
  name?: string;
  event?: string;
  docs?: string;
  signature?: string;
};

type ComponentDoc = {
  tag: string;
  filePath?: string;
  docs?: string;
  overview?: string;
  docsTags?: DocsTag[];
  dependencies?: string[];
  dependents?: string[];
  props?: ApiItem[];
  methods?: ApiItem[];
  events?: ApiItem[];
  slots?: ApiItem[];
};

type ComponentDocJson = {
  components: ComponentDoc[];
};

type DefinitionFile = {
  source: string;
  target: string;
};

type DefinitionVariant = {
  files?: DefinitionFile[];
};

type ExampleDefinition = {
  name: string;
  variants?: Record<string, DefinitionVariant>;
};

type BlockDefinition = {
  name: string;
  description?: string;
  keywords?: string[];
  variants?: Record<string, DefinitionVariant>;
};

export type DocumentationSearchDocument = {
  id: string;
  kind: 'component' | 'example' | 'block';
  name: string;
  tag?: string;
  description: string;
  keywords: string;
  framework?: DocumentationSearchFramework;
  path: string;
  detailPath: string;
  relatedComponents: string[];
  relatedExamples?: string[];
  relatedBlocks?: string[];
  documentation?: string[];
  figmaMainComponentIds?: string[];
  apiMembers: string;
  files: string;
  sourceText: string;
};

type SearchIndexPayload = ReturnType<
  MiniSearch<DocumentationSearchDocument>['toJSON']
>;

export type DocumentationSearchIndex = {
  schemaVersion: typeof DOCUMENTATION_SEARCH_INDEX_SCHEMA_VERSION;
  fields: readonly string[];
  storeFields: readonly string[];
  searchOptions: {
    boost: Record<string, number>;
    fuzzy: number;
    prefix: boolean;
  };
  payload: SearchIndexPayload;
};

type BuildDocumentationSearchIndexOptions = {
  distDir: string;
  blocksDir: string;
  examplesDir: string;
  componentDocPath: string;
  componentRelatedExamplesPath: string;
  componentRelatedBlocksPath: string;
  workspaceRoot: string;
};

function stringList(values: Iterable<string>): string[] {
  return [
    ...new Set([...values].map((value) => value.trim()).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b));
}

function isDocumentationSearchFramework(
  value: string
): value is DocumentationSearchFramework {
  return (DOCUMENTATION_SEARCH_FRAMEWORKS as readonly string[]).includes(value);
}

function normalizeFigmaId(value: string): string {
  return /^\d+[-:]\d+$/.test(value) ? value.replace('-', ':') : value;
}

function getTagText(component: ComponentDoc, tagName: string): string[] {
  return (component.docsTags ?? [])
    .filter((tag) => tag.name === tagName)
    .flatMap((tag) => (tag.text ?? '').split(','))
    .map((value) => value.trim())
    .filter(Boolean);
}

function componentDescription(component: ComponentDoc): string {
  return (component.docs ?? component.overview ?? '').trim();
}

function componentApiMembers(component: ComponentDoc): string[] {
  return stringList([
    ...(component.props ?? []).flatMap((item) =>
      [item.name, item.docs, item.signature].filter(
        (value): value is string => typeof value === 'string'
      )
    ),
    ...(component.methods ?? []).flatMap((item) =>
      [item.name, item.docs, item.signature].filter(
        (value): value is string => typeof value === 'string'
      )
    ),
    ...(component.events ?? []).flatMap((item) =>
      [item.event, item.name, item.docs].filter(
        (value): value is string => typeof value === 'string'
      )
    ),
    ...(component.slots ?? []).flatMap((item) =>
      [item.name, item.docs].filter(
        (value): value is string => typeof value === 'string'
      )
    ),
  ]);
}

function createComponentDocuments(
  componentDoc: ComponentDocJson,
  relatedExamples: Record<string, string[]>,
  relatedBlocks: Record<string, string[]>
): DocumentationSearchDocument[] {
  return componentDoc.components
    .map((component): DocumentationSearchDocument => {
      const documentation = stringList(getTagText(component, 'documentation'));
      const figmaMainComponentIds = stringList(
        getTagText(component, 'figma-main-component-id').map(normalizeFigmaId)
      );
      const relatedComponents = stringList([
        ...(component.dependencies ?? []),
        ...(component.dependents ?? []),
      ]);
      const apiMembers = componentApiMembers(component);

      return {
        id: `component:${component.tag}`,
        kind: 'component',
        name: component.tag,
        tag: component.tag,
        description: componentDescription(component),
        keywords: stringList([
          ...relatedComponents,
          ...apiMembers,
          ...documentation,
          ...figmaMainComponentIds,
        ]).join(' '),
        path: `llms/components/${component.tag}.md`,
        detailPath: `llms/components/${component.tag}.md`,
        relatedComponents,
        relatedExamples: stringList(relatedExamples[component.tag] ?? []),
        relatedBlocks: stringList(relatedBlocks[component.tag] ?? []),
        documentation,
        figmaMainComponentIds,
        apiMembers: apiMembers.join(' '),
        files: stringList(
          [component.filePath].filter(
            (value): value is string => typeof value === 'string'
          )
        ).join(' '),
        sourceText: [
          component.tag,
          component.filePath ?? '',
          componentDescription(component),
          ...apiMembers,
          ...documentation,
        ].join(' '),
      };
    })
    .sort((a, b) => a.id.localeCompare(b.id));
}

async function resolveSourcePath(
  source: string,
  contentRoot: 'blocks' | 'examples',
  contentDir: string,
  distDir: string,
  workspaceRoot: string
): Promise<string | null> {
  const candidates = [
    path.resolve(contentDir, source),
    path.resolve(distDir, source),
    path.resolve(distDir, contentRoot, source),
    path.resolve(workspaceRoot, source),
    path.resolve(workspaceRoot, contentRoot, source),
  ];

  for (const candidate of candidates) {
    if (await fs.pathExists(candidate)) {
      return candidate;
    }
  }

  return null;
}

async function readVariantContent(
  variant: DefinitionVariant,
  contentRoot: 'blocks' | 'examples',
  contentDir: string,
  distDir: string,
  workspaceRoot: string
): Promise<{ files: string; sourceText: string }> {
  const files = [...(variant.files ?? [])].sort((a, b) =>
    a.target.localeCompare(b.target)
  );
  const sourceCode: string[] = [];

  for (const file of files) {
    const sourcePath = await resolveSourcePath(
      file.source,
      contentRoot,
      contentDir,
      distDir,
      workspaceRoot
    );
    if (!sourcePath) {
      console.warn(`⚠️  Source file not found: ${file.source}`);
      continue;
    }

    sourceCode.push(await fs.readFile(sourcePath, 'utf8'));
  }

  return {
    files: files.map((file) => file.target).join(' '),
    sourceText: sourceCode.join('\n'),
  };
}

async function definitionDocuments(
  definitionsDir: string,
  contentRoot: 'blocks' | 'examples',
  distDir: string,
  workspaceRoot: string,
  relatedComponents: Record<string, string[]>
): Promise<DocumentationSearchDocument[]> {
  const definitionFiles = await glob(path.join(definitionsDir, '*.json'), {
    absolute: true,
  });
  const definitions = await Promise.all(
    definitionFiles.map(async (file) => ({
      file,
      definition: (await fs.readJson(file)) as
        | BlockDefinition
        | ExampleDefinition,
    }))
  );
  const documents: DocumentationSearchDocument[] = [];

  for (const { file, definition } of definitions.sort((a, b) =>
    a.definition.name.localeCompare(b.definition.name)
  )) {
    const variants = Object.entries(definition.variants ?? {}).sort(
      ([a], [b]) => a.localeCompare(b)
    );

    for (const [frameworkName, variant] of variants) {
      if (!isDocumentationSearchFramework(frameworkName)) {
        continue;
      }

      const content = await readVariantContent(
        variant,
        contentRoot,
        definitionsDir,
        distDir,
        workspaceRoot
      );
      const kind = contentRoot === 'blocks' ? 'block' : 'example';
      const name = definition.name;
      const pathValue = `${contentRoot}/${path.basename(file)}`;
      const related = stringList(relatedComponents[name] ?? []);
      const description =
        'description' in definition
          ? (definition.description ?? '').trim()
          : '';
      const keywords =
        'keywords' in definition ? stringList(definition.keywords ?? []) : [];

      documents.push({
        id: `${kind}:${frameworkName}:${name}`,
        kind,
        name,
        description,
        keywords: keywords.join(' '),
        framework: frameworkName,
        path: pathValue,
        detailPath: pathValue,
        relatedComponents: related,
        apiMembers: '',
        files: content.files,
        sourceText: [
          name,
          description,
          ...keywords,
          related.join(' '),
          content.sourceText,
        ].join('\n'),
      });
    }
  }

  return documents.sort((a, b) => a.id.localeCompare(b.id));
}

export async function buildDocumentationSearchIndex(
  options: BuildDocumentationSearchIndexOptions
): Promise<string> {
  const [componentDoc, relatedExamples, relatedBlocks, blocks, examples] =
    await Promise.all([
      fs.readJson(options.componentDocPath) as Promise<ComponentDocJson>,
      fs.readJson(options.componentRelatedExamplesPath) as Promise<
        Record<string, string[]>
      >,
      fs.readJson(options.componentRelatedBlocksPath) as Promise<
        Record<string, string[]>
      >,
      definitionDocuments(
        options.blocksDir,
        'blocks',
        options.distDir,
        options.workspaceRoot,
        {}
      ),
      definitionDocuments(
        options.examplesDir,
        'examples',
        options.distDir,
        options.workspaceRoot,
        {}
      ),
    ]);

  const componentSearchDocuments = createComponentDocuments(
    componentDoc,
    relatedExamples,
    relatedBlocks
  );

  const exampleComponents: Record<string, string[]> = {};
  for (const [componentTag, exampleNames] of Object.entries(relatedExamples)) {
    for (const exampleName of exampleNames) {
      exampleComponents[exampleName] ??= [];
      exampleComponents[exampleName].push(componentTag);
    }
  }

  const blockComponents: Record<string, string[]> = {};
  for (const [componentTag, blockNames] of Object.entries(relatedBlocks)) {
    for (const blockName of blockNames) {
      blockComponents[blockName] ??= [];
      blockComponents[blockName].push(componentTag);
    }
  }

  for (const document of examples) {
    document.relatedComponents = stringList(
      exampleComponents[document.name] ?? []
    );
    document.sourceText = `${
      document.sourceText
    }\n${document.relatedComponents.join(' ')}`;
  }
  for (const document of blocks) {
    document.relatedComponents = stringList(
      blockComponents[document.name] ?? []
    );
    document.sourceText = `${
      document.sourceText
    }\n${document.relatedComponents.join(' ')}`;
  }

  const documents = [...componentSearchDocuments, ...examples, ...blocks].sort(
    (a, b) => a.id.localeCompare(b.id)
  );
  const miniSearch = new MiniSearch<DocumentationSearchDocument>({
    fields: [...DOCUMENTATION_SEARCH_FIELDS],
    storeFields: [...DOCUMENTATION_SEARCH_STORE_FIELDS],
  });
  miniSearch.addAll(documents);

  const index: DocumentationSearchIndex = {
    schemaVersion: DOCUMENTATION_SEARCH_INDEX_SCHEMA_VERSION,
    fields: [...DOCUMENTATION_SEARCH_FIELDS],
    storeFields: [...DOCUMENTATION_SEARCH_STORE_FIELDS],
    searchOptions: {
      boost: { ...DOCUMENTATION_SEARCH_OPTIONS.boost },
      fuzzy: DOCUMENTATION_SEARCH_OPTIONS.fuzzy,
      prefix: DOCUMENTATION_SEARCH_OPTIONS.prefix,
    },
    payload: miniSearch.toJSON(),
  };
  const outputPath = path.join(
    options.distDir,
    DOCUMENTATION_SEARCH_INDEX_FILE
  );
  await fs.writeFile(outputPath, JSON.stringify(index), 'utf8');
  console.log(
    `✅ Created central documentation search index with ${documents.length} items at ${DOCUMENTATION_SEARCH_INDEX_FILE}`
  );
  return DOCUMENTATION_SEARCH_INDEX_FILE;
}
