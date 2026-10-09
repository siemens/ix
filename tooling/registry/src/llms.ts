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
import { glob } from 'glob';
import { componentReactAlias, readReactExportNames } from './search-index';

type DocsTag = {
  name: string;
  text?: string;
};

type ComponentProp = {
  name: string;
  attr?: string;
  type?: string;
  docs?: string;
  default?: string;
};

type ComponentEvent = {
  event?: string;
  docs?: string;
};

type ComponentSlot = {
  name: string;
  docs?: string;
};

type ComponentMethod = {
  name: string;
  signature?: string;
  docs?: string;
};

type ComponentDoc = {
  tag: string;
  docs?: string;
  docsTags?: DocsTag[];
  props?: ComponentProp[];
  events?: ComponentEvent[];
  slots?: ComponentSlot[];
  methods?: ComponentMethod[];
  dependencies?: string[];
  dependents?: string[];
};

type ComponentDocJson = {
  components: ComponentDoc[];
};

type PatternFile = {
  path: string;
};

type ExampleVariant = {
  files?: PatternFile[];
};

type ExampleDefinition = {
  name: string;
  variants?: Record<string, ExampleVariant>;
};

type PatternVariant = {
  files?: PatternFile[];
};

type PatternDefinition = {
  name: string;
  description?: string;
  keywords?: string[];
  preview?: string;
  variants?: Record<string, PatternVariant>;
};

export type LlmsArtifacts = {
  entrypoint: string;
  components: string;
  examples: string;
  patterns: string;
  catalog: string;
  figma: string;
  exampleIndexes: Record<string, string>;
};

export type GenerateLlmsOptions = {
  distDir: string;
  componentDocPath: string;
  componentRelatedExamplesPath: string;
  componentRelatedPatternsPath: string;
  patternsDir: string;
  examplesDir: string;
  /**
   * Workspace root used to resolve exported React component names from
   * `packages/react/dist/types`. React aliases are omitted when not provided.
   */
  workspaceRoot?: string;
  warn?: (message: string) => void;
};

/**
 * Example usage derived from example sources:
 * example name -> framework -> used iX component tags.
 */
type ExampleUsage = Record<string, Record<string, string[]>>;

function sortByName<T extends { name: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

function sortComponents(components: ComponentDoc[]): ComponentDoc[] {
  return [...components].sort((a, b) => a.tag.localeCompare(b.tag));
}

function nonEmpty(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function inline(value: string | undefined): string {
  return nonEmpty(value)?.replace(/\s+/g, ' ') ?? '';
}

function listOrNone(values: string[]): string {
  if (values.length === 0) {
    return '- None';
  }

  return values.map((value) => `- ${value}`).join('\n');
}

function markdownLink(label: string, href: string): string {
  return `[${label}](${href})`;
}

export function normalizeDocumentationUrl(url: string): string {
  return url.replace(/([^:/])\/{2,}/g, '$1/');
}

function documentationUrls(component: ComponentDoc): string[] {
  return (
    component.docsTags
      ?.filter((tag) => tag.name === 'documentation')
      .map((tag) => normalizeDocumentationUrl(inline(tag.text)))
      .filter(Boolean)
      .sort() ?? []
  );
}

function normalizeFigmaId(value: string): string {
  return /^\d+-\d+$/.test(value) ? value.replace('-', ':') : value;
}

function figmaIds(component: ComponentDoc): string[] {
  return (
    component.docsTags
      ?.filter((tag) => tag.name === 'figma-main-component-id')
      .flatMap((tag) => inline(tag.text).split(','))
      .map((id) => normalizeFigmaId(id.trim()))
      .filter(Boolean)
      .sort() ?? []
  );
}

/**
 * Turns a kebab-case registry name into a readable title, e.g.
 * `date-picker-range` -> `Date picker range`.
 */
export function humanizeName(name: string): string {
  const words = name.split(/[-_\s]+/).filter(Boolean);
  const text = words.join(' ');
  return text ? `${text.slice(0, 1).toUpperCase()}${text.slice(1)}` : name;
}

/**
 * Extracts the iX component tags used by an example source file.
 *
 * Detects kebab-case custom element tags (`<ix-button`) used by HTML, Angular
 * and Vue templates as well as PascalCase wrapper tags (`<IxButton`) used by
 * React and Vue. Results are restricted to known component tags.
 */
export function extractUsedComponents(
  source: string,
  componentTags: ReadonlySet<string>
): string[] {
  const used = new Set<string>();
  const tagsByAlias = new Map(
    [...componentTags].map((tag) => [componentReactAlias(tag), tag])
  );

  for (const match of source.matchAll(/<\s*(ix-[a-z0-9-]+)(?=[\s/>])/g)) {
    const tag = match[1];
    if (tag && componentTags.has(tag)) {
      used.add(tag);
    }
  }

  for (const match of source.matchAll(/<\s*(Ix[A-Z][A-Za-z0-9]*)\b/g)) {
    const tag = tagsByAlias.get(match[1] ?? '');
    if (tag) {
      used.add(tag);
    }
  }

  return [...used].sort();
}

function isSafeRelativePath(filePath: string): boolean {
  return (
    !!filePath &&
    !filePath.includes('\\') &&
    !filePath.includes('\0') &&
    !path.posix.isAbsolute(filePath) &&
    filePath
      .split('/')
      .every((segment) => segment && segment !== '.' && segment !== '..')
  );
}

async function readExampleUsage(
  examples: ExampleDefinition[],
  examplesDir: string,
  componentTags: ReadonlySet<string>
): Promise<ExampleUsage> {
  const usage: ExampleUsage = {};

  for (const example of examples) {
    for (const [framework, variant] of Object.entries(example.variants ?? {})) {
      const used = new Set<string>();
      for (const file of variant.files ?? []) {
        if (!isSafeRelativePath(file.path)) {
          throw new Error(
            `Invalid example file path '${file.path}' in example '${example.name}'.`
          );
        }
        const sourcePath = path.join(examplesDir, file.path);
        if (!(await fs.pathExists(sourcePath))) {
          continue;
        }
        const source = await fs.readFile(sourcePath, 'utf8');
        extractUsedComponents(source, componentTags).forEach((tag) =>
          used.add(tag)
        );
      }
      usage[example.name] ??= {};
      usage[example.name][framework] = [...used].sort();
    }
  }

  return usage;
}

/**
 * Merges the authored relationship map (component -> example names) with
 * usage derived from example sources across all frameworks.
 */
function mergeExampleRelationships(
  relatedExamples: Record<string, string[]>,
  usage: ExampleUsage
): Record<string, string[]> {
  const merged: Record<string, Set<string>> = {};

  for (const [tag, exampleNames] of Object.entries(relatedExamples)) {
    merged[tag] ??= new Set();
    exampleNames.forEach((name) => merged[tag].add(name));
  }

  for (const [exampleName, frameworks] of Object.entries(usage)) {
    for (const tags of Object.values(frameworks)) {
      for (const tag of tags) {
        merged[tag] ??= new Set();
        merged[tag].add(exampleName);
      }
    }
  }

  return Object.fromEntries(
    Object.entries(merged)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([tag, names]) => [tag, [...names].sort()])
  );
}

function componentDescription(component: ComponentDoc): string {
  return inline(component.docs) || 'No component summary available.';
}

function componentDetailFileName(component: ComponentDoc): string {
  return `${component.tag}.md`;
}

function renderProperties(component: ComponentDoc): string {
  const props = sortByName(component.props ?? []);
  if (props.length === 0) {
    return '- None';
  }

  return props
    .map((prop) => {
      const parts = [
        `- \`${prop.name}\``,
        prop.attr ? `attr: \`${prop.attr}\`` : null,
        prop.type ? `type: \`${prop.type}\`` : null,
        prop.default !== undefined ? `default: \`${prop.default}\`` : null,
      ].filter(Boolean);
      const docs = inline(prop.docs);

      return docs ? `${parts.join('; ')} - ${docs}` : parts.join('; ');
    })
    .join('\n');
}

function renderEvents(component: ComponentDoc): string {
  const events = [...(component.events ?? [])].sort((a, b) =>
    (a.event ?? '').localeCompare(b.event ?? '')
  );
  if (events.length === 0) {
    return '- None';
  }

  return events
    .map((event) => {
      const name = event.event ?? 'unknown';
      const docs = inline(event.docs);
      return docs ? `- \`${name}\` - ${docs}` : `- \`${name}\``;
    })
    .join('\n');
}

function renderSlots(component: ComponentDoc): string {
  const slots = sortByName(component.slots ?? []);
  if (slots.length === 0) {
    return '- None';
  }

  return slots
    .map((slot) => {
      const docs = inline(slot.docs);
      return docs ? `- \`${slot.name}\` - ${docs}` : `- \`${slot.name}\``;
    })
    .join('\n');
}

function normalizeRelatedExamples(
  relatedExamples: Record<string, string[]>,
  componentTag: string
): string[] {
  return [...(relatedExamples[componentTag] ?? [])].sort();
}

async function readExamples(
  examplesDir: string
): Promise<Record<string, ExampleDefinition>> {
  const exampleFiles = await glob(path.join(examplesDir, '*.json'), {
    absolute: true,
  });
  const examples = await Promise.all(
    exampleFiles.map(
      async (file) => (await fs.readJson(file)) as ExampleDefinition
    )
  );

  return Object.fromEntries(examples.map((example) => [example.name, example]));
}

function exampleFrameworks(example: ExampleDefinition | undefined): string[] {
  return Object.keys(example?.variants ?? {}).sort();
}

function renderRelatedExamples(
  exampleNames: string[],
  examplesByName: Record<string, ExampleDefinition>
): string {
  if (exampleNames.length === 0) {
    return '- None';
  }

  return exampleNames
    .map((exampleName) => {
      const frameworks = exampleFrameworks(examplesByName[exampleName]);
      return frameworks.length > 0
        ? `- ${exampleName} (${frameworks.join(', ')})`
        : `- ${exampleName}`;
    })
    .join('\n');
}

function renderRelatedPatterns(
  patternNames: string[],
  patternsByName: Record<string, PatternDefinition>
): string {
  if (patternNames.length === 0) {
    return '- None';
  }

  return patternNames
    .map((patternName) => {
      const pattern = patternsByName[patternName];
      const patternLink = markdownLink(
        patternName,
        `../patterns.md#${patternName}`
      );
      const description = inline(pattern?.description);
      return description
        ? `- ${patternLink}: ${description}`
        : `- ${patternLink}`;
    })
    .join('\n');
}

function invertRelationships(
  relationships: Record<string, string[]>
): Record<string, string[]> {
  const relatedComponents: Record<string, string[]> = {};

  for (const [componentTag, entryNames] of Object.entries(relationships)) {
    for (const entryName of entryNames) {
      relatedComponents[entryName] ??= [];
      relatedComponents[entryName].push(componentTag);
    }
  }

  return Object.fromEntries(
    Object.entries(relatedComponents).map(([entryName, componentTags]) => [
      entryName,
      [...new Set(componentTags)].sort(),
    ])
  );
}

function renderMethods(component: ComponentDoc): string {
  const methods = sortByName(component.methods ?? []);
  if (methods.length === 0) {
    return '- None';
  }

  return methods
    .map((method) => {
      const signature = inline(method.signature) || `${method.name}()`;
      const docs = inline(method.docs);
      return docs ? `- \`${signature}\` - ${docs}` : `- \`${signature}\``;
    })
    .join('\n');
}

function renderTagList(tags: string[] | undefined): string {
  const sorted = [...new Set(tags ?? [])].sort();
  return sorted.length > 0
    ? sorted.map((tag) => `\`${tag}\``).join(', ')
    : 'None';
}

function renderComponentDetail(
  component: ComponentDoc,
  reactAlias: string | undefined,
  relatedExamples: Record<string, string[]>,
  examplesByName: Record<string, ExampleDefinition>,
  relatedPatterns: Record<string, string[]>,
  patternsByName: Record<string, PatternDefinition>
): string {
  const docs = documentationUrls(component);
  const figma = figmaIds(component);
  const examples = normalizeRelatedExamples(relatedExamples, component.tag);
  const patterns = [...(relatedPatterns[component.tag] ?? [])].sort();
  const names = [
    `Web component: \`<${component.tag}>\``,
    reactAlias
      ? `React/Vue: \`${reactAlias}\` from \`@siemens/ix-react\` / \`@siemens/ix-vue\``
      : null,
    reactAlias
      ? `Angular: \`<${component.tag}>\` (\`IxModule\` from \`@siemens/ix-angular\` or \`${reactAlias}\` from \`@siemens/ix-angular/standalone\`)`
      : null,
  ].filter(Boolean);

  return `# ${component.tag}

> ${componentDescription(component)}

${names.map((name) => `- ${name}`).join('\n')}

## Documentation

${listOrNone(docs)}

## Figma IDs

${listOrNone(figma)}

## Properties

${renderProperties(component)}

## Events

${renderEvents(component)}

## Methods

${renderMethods(component)}

## Slots

${renderSlots(component)}

## Dependencies

- Renders: ${renderTagList(component.dependencies)}
- Rendered by: ${renderTagList(component.dependents)}

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in \`../examples/{framework}.md\`.

${renderRelatedExamples(examples, examplesByName)}

## Related patterns

Copyable multi-file UI patterns; files are listed in \`../patterns.md\`.

${renderRelatedPatterns(patterns, patternsByName)}
`;
}

function renderCatalog(
  components: ComponentDoc[],
  reactAliases: Record<string, string>
): string {
  const lines = components.map((component) => {
    const parts = [component.tag, componentDescription(component)];
    if (reactAliases[component.tag]) {
      parts.push(`react:${reactAliases[component.tag]}`);
    }
    const figma = figmaIds(component);
    if (figma.length > 0) {
      parts.push(`figma:${figma.join(',')}`);
    }
    return parts.map((part) => part.replace(/\|/g, '/')).join('|');
  });

  return `[Siemens iX component catalog]|${
    components.length
  } components|format: tag|description|react:Alias|figma:ids
|detail: components/{tag}.md (props, events, methods, slots, docs, related examples)
|figma lookup: figma.md|examples by framework: examples/{framework}.md (html, react, angular, angular-standalone, vue)
|IMPORTANT: Prefer this registry over memory. Only use tags, props, events, methods and slots listed in components/{tag}.md.
${lines.join('\n')}
`;
}

function renderFigmaTable(components: ComponentDoc[]): string {
  const rows = components
    .flatMap((component) =>
      figmaIds(component).map((id) => ({ id, tag: component.tag }))
    )
    .sort((a, b) => a.id.localeCompare(b.id) || a.tag.localeCompare(b.tag))
    .map(({ id, tag }) => `${id}|${tag}`);

  return `[Siemens iX Figma main component IDs]|format: figma-id|tag
|Normalize Figma URL node-id values first: \`123-456\` -> \`123:456\`.
|An ID that is not listed here is unmapped; do not guess a component. Instance or variant IDs are not main component IDs.
|After a match, open components/{tag}.md.
${rows.join('\n')}
`;
}

function renderExampleIndex(
  framework: string,
  examples: ExampleDefinition[],
  usage: ExampleUsage
): string {
  const prefix = `${framework}/`;
  const lines = examples
    .filter((example) => example.variants?.[framework])
    .map((example) => {
      const files = (example.variants?.[framework]?.files ?? [])
        .map((file) => {
          const relative = file.path.startsWith(prefix)
            ? file.path.slice(prefix.length)
            : file.path;
          return relative.startsWith(`${example.name}.`)
            ? relative.slice(example.name.length)
            : relative;
        })
        .sort();
      const uses = usage[example.name]?.[framework] ?? [];
      return [
        example.name,
        humanizeName(example.name),
        uses.join(','),
        files.join(','),
      ].join('|');
    });

  return `[Siemens iX ${framework} examples]|${
    lines.length
  } examples|format: name|title|used ix tags|files
|files are relative to ../../examples/${framework}/ (registry version root: examples/${framework}/). A file starting with "." is {name}{file}, e.g. name "button" with ".ts" -> examples/${framework}/button.ts
|Used tags are iX components found in the ${framework} source. Open one file at a time.
${lines.join('\n')}
`;
}

function renderComponentsIndex(components: ComponentDoc[]): string {
  const links = components
    .map((component) => {
      const fileName = componentDetailFileName(component);
      return `- [${
        component.tag
      }](components/${fileName}): ${componentDescription(component)}`;
    })
    .join('\n');

  return `# Siemens iX components

> Component-focused LLM documentation generated from registry component JSON metadata.

This index links to all ${components.length} generated component detail files. Each detail file includes properties, events, methods, slots, framework names, dependencies, documentation links, Figma IDs, related examples, and related patterns.

For a compact one-line-per-component overview with React names and Figma IDs, use [catalog.md](catalog.md).

## Components

${links}
`;
}

function renderComponentLinks(
  componentTags: string[],
  availableComponentTags: Set<string>
): string {
  if (componentTags.length === 0) {
    return 'None listed in relationship map';
  }

  return componentTags
    .map((componentTag) => {
      if (!availableComponentTags.has(componentTag)) {
        return `\`${componentTag}\``;
      }

      return markdownLink(
        `\`${componentTag}\``,
        `components/${componentTag}.md`
      );
    })
    .join(', ');
}

function renderExample(
  example: ExampleDefinition,
  relatedComponents: Record<string, string[]>,
  availableComponentTags: Set<string>
): string {
  const variants = Object.entries(example.variants ?? {}).sort(([a], [b]) =>
    a.localeCompare(b)
  );
  const componentTags = relatedComponents[example.name] ?? [];
  const componentLinks = renderComponentLinks(
    componentTags,
    availableComponentTags
  );
  const variantSections =
    variants.length === 0
      ? '- None'
      : variants
          .map(([framework, variant]) => {
            const files = sortByName(
              (variant.files ?? []).map((file) => ({
                name: file.path,
                ...file,
              }))
            )
              .map((file) => {
                const href = `../examples/${file.path}`;
                return `  - \`${file.path}\`: ${markdownLink('file', href)}`;
              })
              .join('\n');
            return `### ${framework}

Files:
${files || '  - None'}`;
          })
          .join('\n\n');

  return `## ${example.name}

- Used iX components: ${componentLinks}

${variantSections}
`;
}

function renderExamples(
  examples: ExampleDefinition[],
  relatedExamples: Record<string, string[]>,
  components: ComponentDoc[]
): string {
  const relatedComponents = invertRelationships(relatedExamples);
  const availableComponentTags = new Set(
    components.map((component) => component.tag)
  );

  return `# Siemens iX examples

> Example-focused LLM documentation generated from registry example JSON metadata and component relationships.

Each example includes the iX components found in its sources across all frameworks, framework variants, and files. File and component links are relative to this Markdown file. For a compact per-framework index, use \`examples/{framework}.md\`.

${examples
  .map((example) =>
    renderExample(example, relatedComponents, availableComponentTags)
  )
  .join('\n')}
`;
}

function renderPattern(
  pattern: PatternDefinition,
  relatedComponents: Record<string, string[]>,
  availableComponentTags: Set<string>
): string {
  const variants = Object.entries(pattern.variants ?? {}).sort(([a], [b]) =>
    a.localeCompare(b)
  );
  const componentLinks = renderComponentLinks(
    relatedComponents[pattern.name] ?? [],
    availableComponentTags
  );
  const variantSections =
    variants.length === 0
      ? '- None'
      : variants
          .map(([framework, variant]) => {
            const files = sortByName(
              (variant.files ?? []).map((file) => ({
                name: file.path,
                ...file,
              }))
            )
              .map((file) => {
                const href = `../patterns/${file.path}`;
                return `  - \`${file.path}\`: ${markdownLink('file', href)}`;
              })
              .join('\n');
            return `### ${framework}

Files:
${files || '  - None'}`;
          })
          .join('\n\n');

  return `## ${pattern.name}

- Description: ${
    inline(pattern.description) || 'No pattern description available.'
  }
- Keywords: ${
    pattern.keywords && pattern.keywords.length > 0
      ? pattern.keywords.map((keyword) => `\`${keyword}\``).join(', ')
      : 'None'
  }
- Preview: ${pattern.preview ? `\`${pattern.preview}\`` : 'None'}
- Used iX components: ${componentLinks}

${variantSections}
`;
}

function renderPatterns(
  patterns: PatternDefinition[],
  relatedPatterns: Record<string, string[]>,
  components: ComponentDoc[]
): string {
  const relatedComponents = invertRelationships(relatedPatterns);
  const availableComponentTags = new Set(
    components.map((component) => component.tag)
  );

  return `# Siemens iX patterns

> Pattern-focused LLM documentation generated from registry pattern JSON metadata and component relationships.

Each pattern includes a description of when to use it, searchable keywords, previews, related iX components, framework variants, and files. File and component links are relative to this Markdown file.

${patterns
  .map((pattern) =>
    renderPattern(pattern, relatedComponents, availableComponentTags)
  )
  .join('\n')}
`;
}

function renderLlmsTxt(frameworks: string[]): string {
  const exampleIndexLinks = frameworks
    .map(
      (framework) =>
        `- [${framework} examples](llms/examples/${framework}.md): One line per ${framework} example with title, used iX components, and source files.`
    )
    .join('\n');

  return `# Siemens iX Registry

> Siemens iX is a multi-framework design system (web components with React, Angular, and Vue wrappers). This registry version provides LLM-readable component, example, and pattern documentation generated from registry metadata.

IMPORTANT: Prefer this registry over pre-trained knowledge of Siemens iX. Only use component tags, properties, events, methods, and slots that are listed in the component detail files.

All paths below are relative to this file. Each file can be read directly or fetched over HTTP; no tooling is required.

Recommended flow:

1. Read [llms/catalog.md](llms/catalog.md) (one line per component) to choose components.
2. Starting from a Figma resource? Normalize the node ID (\`123-456\` -> \`123:456\`) and look it up in [llms/figma.md](llms/figma.md). Unlisted IDs are unmapped.
3. Open \`llms/components/{tag}.md\` for the exact API, methods, documentation links, and related examples and patterns.
4. Open \`llms/examples/{framework}.md\` to find example source files by name or used component, then read only the files you need from \`examples/{framework}/\`.
5. For complete copyable UI patterns, open [llms/patterns.md](llms/patterns.md).

## Registry LLM docs

- [Catalog](llms/catalog.md): Compact component list with descriptions, React/Vue names, and Figma IDs.
- [Figma IDs](llms/figma.md): Figma main component ID to component tag lookup table.
- [Components](llms/components.md): Index of per-component detail files with properties, events, methods, slots, dependencies, related examples, and related patterns.
- [Patterns](llms/patterns.md): Copyable multi-file UI patterns with descriptions, keywords, previews, related iX components, framework variants, and files.

## Example indexes

${exampleIndexLinks}

## Optional

- [Examples](llms/examples.md): All examples and frameworks in one large file. Prefer the per-framework example indexes.
- [Registry manifest](registry.json): Machine-readable registry manifest with versioned artifact paths.
`;
}

async function readPatterns(patternsDir: string): Promise<PatternDefinition[]> {
  const patternFiles = await glob(path.join(patternsDir, '*.json'), {
    absolute: true,
  });

  const patterns = await Promise.all(
    patternFiles.map(
      async (file) => (await fs.readJson(file)) as PatternDefinition
    )
  );

  return sortByName(patterns);
}

async function resolveReactAliases(
  components: ComponentDoc[],
  options: GenerateLlmsOptions
): Promise<Record<string, string>> {
  if (!options.workspaceRoot) {
    return {};
  }

  const exportNames = await readReactExportNames(
    options.workspaceRoot,
    options.warn
  );

  return Object.fromEntries(
    components
      .map((component) => [component.tag, componentReactAlias(component.tag)])
      .filter(([, alias]) => exportNames.has(alias))
  );
}

export async function generateLlmsArtifacts(
  options: GenerateLlmsOptions
): Promise<LlmsArtifacts> {
  const componentDoc = (await fs.readJson(
    options.componentDocPath
  )) as ComponentDocJson;
  const authoredRelatedExamples = (await fs.readJson(
    options.componentRelatedExamplesPath
  )) as Record<string, string[]>;
  const relatedPatterns = (await fs.readJson(
    options.componentRelatedPatternsPath
  )) as Record<string, string[]>;
  const components = sortComponents(componentDoc.components ?? []);
  const componentTags = new Set(components.map((component) => component.tag));
  const patterns = await readPatterns(options.patternsDir);
  const patternsByName = Object.fromEntries(
    patterns.map((pattern) => [pattern.name, pattern])
  );
  const examplesByName = await readExamples(options.examplesDir);
  const examples = sortByName(Object.values(examplesByName));
  const exampleUsage = await readExampleUsage(
    examples,
    options.examplesDir,
    componentTags
  );
  const relatedExamples = mergeExampleRelationships(
    authoredRelatedExamples,
    exampleUsage
  );
  const reactAliases = await resolveReactAliases(components, options);
  const frameworks = [
    ...new Set(examples.flatMap((example) => exampleFrameworks(example))),
  ].sort();

  const llmsDir = path.join(options.distDir, 'llms');
  const componentDetailsDir = path.join(llmsDir, 'components');
  const exampleIndexesDir = path.join(llmsDir, 'examples');

  await fs.ensureDir(componentDetailsDir);
  await fs.ensureDir(exampleIndexesDir);

  const exampleIndexes = Object.fromEntries(
    frameworks.map((framework) => [framework, `llms/examples/${framework}.md`])
  );

  await Promise.all([
    fs.writeFile(
      path.join(options.distDir, 'llms.txt'),
      renderLlmsTxt(frameworks),
      'utf-8'
    ),
    fs.writeFile(
      path.join(llmsDir, 'catalog.md'),
      renderCatalog(components, reactAliases),
      'utf-8'
    ),
    fs.writeFile(
      path.join(llmsDir, 'figma.md'),
      renderFigmaTable(components),
      'utf-8'
    ),
    fs.writeFile(
      path.join(llmsDir, 'components.md'),
      renderComponentsIndex(components),
      'utf-8'
    ),
    fs.writeFile(
      path.join(llmsDir, 'examples.md'),
      renderExamples(examples, relatedExamples, components),
      'utf-8'
    ),
    fs.writeFile(
      path.join(llmsDir, 'patterns.md'),
      renderPatterns(patterns, relatedPatterns, components),
      'utf-8'
    ),
    ...frameworks.map((framework) =>
      fs.writeFile(
        path.join(exampleIndexesDir, `${framework}.md`),
        renderExampleIndex(framework, examples, exampleUsage),
        'utf-8'
      )
    ),
    ...components.map((component) =>
      fs.writeFile(
        path.join(componentDetailsDir, componentDetailFileName(component)),
        renderComponentDetail(
          component,
          reactAliases[component.tag],
          relatedExamples,
          examplesByName,
          relatedPatterns,
          patternsByName
        ),
        'utf-8'
      )
    ),
  ]);

  console.log(
    `✅ Generated llms.txt artifacts for ${components.length} components, ${examples.length} examples, and ${patterns.length} patterns`
  );

  return {
    entrypoint: 'llms.txt',
    components: 'llms/components.md',
    examples: 'llms/examples.md',
    patterns: 'llms/patterns.md',
    catalog: 'llms/catalog.md',
    figma: 'llms/figma.md',
    exampleIndexes,
  };
}
