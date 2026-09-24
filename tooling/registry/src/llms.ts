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

type ComponentDoc = {
  tag: string;
  docs?: string;
  docsTags?: DocsTag[];
  props?: ComponentProp[];
  events?: ComponentEvent[];
  slots?: ComponentSlot[];
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
};

export type GenerateLlmsOptions = {
  distDir: string;
  componentDocPath: string;
  componentRelatedExamplesPath: string;
  componentRelatedPatternsPath: string;
  patternsDir: string;
  examplesDir: string;
};

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

function documentationUrls(component: ComponentDoc): string[] {
  return (
    component.docsTags
      ?.filter((tag) => tag.name === 'documentation')
      .map((tag) => inline(tag.text))
      .filter(Boolean)
      .sort() ?? []
  );
}

function figmaIds(component: ComponentDoc): string[] {
  return (
    component.docsTags
      ?.filter((tag) => tag.name === 'figma-main-component-id')
      .flatMap((tag) => inline(tag.text).split(','))
      .map((id) => id.trim())
      .filter(Boolean)
      .sort() ?? []
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

function renderRelatedExamples(
  exampleNames: string[],
  examplesByName: Record<string, ExampleDefinition>
): string {
  if (exampleNames.length === 0) {
    return '- None';
  }

  return exampleNames
    .map((exampleName) => {
      const example = examplesByName[exampleName];
      const variants = Object.entries(example?.variants ?? {}).sort(
        ([a], [b]) => a.localeCompare(b)
      );

      if (variants.length === 0) {
        return `- ${exampleName}`;
      }

      const sourceLinks = variants
        .map(([framework, variant]) => {
          const links = (variant.files ?? []).map((file) => {
            const href = `../../examples/${file.path}`;
            return `    - \`${file.path}\`: ${markdownLink('file', href)}`;
          });

          return links.length > 0
            ? `  - ${framework}:\n${links.join('\n')}`
            : null;
        })
        .filter(Boolean)
        .join('\n');

      return sourceLinks
        ? `- ${exampleName}\n${sourceLinks}`
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
      const variants = Object.entries(pattern?.variants ?? {}).sort(
        ([a], [b]) => a.localeCompare(b)
      );
      const patternLink = markdownLink(
        patternName,
        `../patterns.md#${patternName}`
      );

      if (variants.length === 0) {
        return `- ${patternLink}`;
      }

      const sourceLinks = variants
        .map(([framework, variant]) => {
          const links = (variant.files ?? []).map((file) => {
            const href = `../../patterns/${file.path}`;
            return `    - \`${file.path}\`: ${markdownLink('file', href)}`;
          });

          return links.length > 0
            ? `  - ${framework}:\n${links.join('\n')}`
            : null;
        })
        .filter(Boolean)
        .join('\n');

      return sourceLinks
        ? `- ${patternLink}\n${sourceLinks}`
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

function renderComponentDetail(
  component: ComponentDoc,
  relatedExamples: Record<string, string[]>,
  examplesByName: Record<string, ExampleDefinition>,
  relatedPatterns: Record<string, string[]>,
  patternsByName: Record<string, PatternDefinition>
): string {
  const docs = documentationUrls(component);
  const figma = figmaIds(component);
  const examples = normalizeRelatedExamples(relatedExamples, component.tag);
  const patterns = [...(relatedPatterns[component.tag] ?? [])].sort();

  return `# ${component.tag}

> ${componentDescription(component)}

## Documentation

${listOrNone(docs)}

## Figma IDs

${listOrNone(figma)}

## Related examples

Example file links are relative to this Markdown file.

${renderRelatedExamples(examples, examplesByName)}

## Related patterns

Pattern and file links are relative to this Markdown file.

${renderRelatedPatterns(patterns, patternsByName)}

## Properties

${renderProperties(component)}

## Events

${renderEvents(component)}

## Slots

${renderSlots(component)}
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

This index links to all ${components.length} generated component detail files. Each detail file includes API metadata, related examples and patterns from generated relationship maps, and Figma IDs.

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

- Used iX components (relationship map): ${componentLinks}

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

Each example includes related iX component tags, framework variants, and files. File and component links are relative to this Markdown file. A missing component relationship means the relationship map does not list one; it does not prove that the example uses no iX components.

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

function renderLlmsTxt(): string {
  return `# Siemens iX Registry

> Siemens iX is a multi-framework design system. This registry provides versioned LLM-readable component, example, and pattern documentation generated from existing registry JSON metadata.

Use this file as the entrypoint for this registry version. For exact component API usage, open the component docs first; for practical framework code, open the example docs first; for complete copyable UI patterns, open the pattern docs first.

Components are individual iX web components. Their Markdown files contain properties, events, slots, documentation links, related examples, related patterns, and Figma main component IDs. Use related examples to validate generated component code and related patterns to discover complete UI patterns.

Examples provide direct access to framework variants, files, and related iX components without first navigating through a component detail page.

Patterns are copyable multi-file UI patterns built with iX packages. Their Markdown file contains descriptions, keywords, previews, related iX components, framework variants, and files. Use patterns when generating larger page sections or reusable patterns.

Figma IDs come from component \`figma-main-component-id\` metadata and identify design-system counterparts, not runtime APIs. If a task starts from a Figma resource, match the Figma ID to a component, then open that component's Markdown and related examples.

## Registry LLM docs

- [Components](llms/components.md): Start here for component API-safe code generation; links to per-component Markdown with props, events, slots, related examples, and Figma IDs.
- [Examples](llms/examples.md): Start here for practical framework code; includes related iX components, variants, and files.
- [Patterns](llms/patterns.md): Start here for complete copyable UI patterns; includes pattern descriptions, keywords, previews, related iX components, framework variants, and files.

## Optional

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

export async function generateLlmsArtifacts(
  options: GenerateLlmsOptions
): Promise<LlmsArtifacts> {
  const componentDoc = (await fs.readJson(
    options.componentDocPath
  )) as ComponentDocJson;
  const relatedExamples = (await fs.readJson(
    options.componentRelatedExamplesPath
  )) as Record<string, string[]>;
  const relatedPatterns = (await fs.readJson(
    options.componentRelatedPatternsPath
  )) as Record<string, string[]>;
  const components = sortComponents(componentDoc.components ?? []);
  const patterns = await readPatterns(options.patternsDir);
  const patternsByName = Object.fromEntries(
    patterns.map((pattern) => [pattern.name, pattern])
  );
  const examplesByName = await readExamples(options.examplesDir);
  const examples = sortByName(Object.values(examplesByName));

  const llmsDir = path.join(options.distDir, 'llms');
  const componentDetailsDir = path.join(llmsDir, 'components');

  await fs.ensureDir(componentDetailsDir);

  await Promise.all([
    fs.writeFile(
      path.join(options.distDir, 'llms.txt'),
      renderLlmsTxt(),
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
    ...components.map((component) =>
      fs.writeFile(
        path.join(componentDetailsDir, componentDetailFileName(component)),
        renderComponentDetail(
          component,
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
  };
}
