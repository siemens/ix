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

type BlockFile = {
  source: string;
  target: string;
};

type ExampleVariant = {
  files?: BlockFile[];
};

type ExampleDefinition = {
  name: string;
  variants?: Record<string, ExampleVariant>;
};

type BlockVariant = {
  files?: BlockFile[];
};

type BlockDefinition = {
  name: string;
  description?: string;
  keywords?: string[];
  preview?: string;
  variants?: Record<string, BlockVariant>;
};

export type LlmsArtifacts = {
  entrypoint: string;
  components: string;
  examples: string;
  blocks: string;
};

export type GenerateLlmsOptions = {
  distDir: string;
  componentDocPath: string;
  componentRelatedExamplesPath: string;
  componentRelatedBlocksPath: string;
  blocksDir: string;
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
            const href = `../../examples/${file.source}`;
            return `    - \`${file.target}\`: ${markdownLink('source', href)}`;
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

function renderRelatedBlocks(
  blockNames: string[],
  blocksByName: Record<string, BlockDefinition>
): string {
  if (blockNames.length === 0) {
    return '- None';
  }

  return blockNames
    .map((blockName) => {
      const block = blocksByName[blockName];
      const variants = Object.entries(block?.variants ?? {}).sort(([a], [b]) =>
        a.localeCompare(b)
      );
      const blockLink = markdownLink(blockName, `../blocks.md#${blockName}`);

      if (variants.length === 0) {
        return `- ${blockLink}`;
      }

      const sourceLinks = variants
        .map(([framework, variant]) => {
          const links = (variant.files ?? []).map((file) => {
            const href = `../../blocks/${file.source}`;
            return `    - \`${file.target}\`: ${markdownLink('source', href)}`;
          });

          return links.length > 0
            ? `  - ${framework}:\n${links.join('\n')}`
            : null;
        })
        .filter(Boolean)
        .join('\n');

      return sourceLinks ? `- ${blockLink}\n${sourceLinks}` : `- ${blockLink}`;
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
  relatedBlocks: Record<string, string[]>,
  blocksByName: Record<string, BlockDefinition>
): string {
  const docs = documentationUrls(component);
  const figma = figmaIds(component);
  const examples = normalizeRelatedExamples(relatedExamples, component.tag);
  const blocks = [...(relatedBlocks[component.tag] ?? [])].sort();

  return `# ${component.tag}

> ${componentDescription(component)}

## Documentation

${listOrNone(docs)}

## Figma IDs

${listOrNone(figma)}

## Related examples

Example source links are relative to this Markdown file.

${renderRelatedExamples(examples, examplesByName)}

## Related blocks

Block and source links are relative to this Markdown file.

${renderRelatedBlocks(blocks, blocksByName)}

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

This index links to all ${components.length} generated component detail files. Each detail file includes API metadata, related examples and blocks from generated relationship maps, and Figma IDs.

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
                name: file.target,
                ...file,
              }))
            )
              .map((file) => {
                const href = `../examples/${file.source}`;
                return `  - \`${file.target}\`: ${markdownLink(
                  'source',
                  href
                )}`;
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

Each example includes related iX component tags, framework variants, and source files. Source and component links are relative to this Markdown file. A missing component relationship means the relationship map does not list one; it does not prove that the example uses no iX components.

${examples
  .map((example) =>
    renderExample(example, relatedComponents, availableComponentTags)
  )
  .join('\n')}
`;
}

function renderBlock(
  block: BlockDefinition,
  relatedComponents: Record<string, string[]>,
  availableComponentTags: Set<string>
): string {
  const variants = Object.entries(block.variants ?? {}).sort(([a], [b]) =>
    a.localeCompare(b)
  );
  const componentLinks = renderComponentLinks(
    relatedComponents[block.name] ?? [],
    availableComponentTags
  );
  const variantSections =
    variants.length === 0
      ? '- None'
      : variants
          .map(([framework, variant]) => {
            const files = sortByName(
              (variant.files ?? []).map((file) => ({
                name: file.target,
                ...file,
              }))
            )
              .map((file) => {
                const href = `../blocks/${file.source}`;
                return `  - \`${file.target}\`: ${markdownLink(
                  'source',
                  href
                )}`;
              })
              .join('\n');
            return `### ${framework}

Files:
${files || '  - None'}`;
          })
          .join('\n\n');

  return `## ${block.name}

- Description: ${inline(block.description) || 'No block description available.'}
- Keywords: ${
    block.keywords && block.keywords.length > 0
      ? block.keywords.map((keyword) => `\`${keyword}\``).join(', ')
      : 'None'
  }
- Preview: ${block.preview ? `\`${block.preview}\`` : 'None'}
- Used iX components: ${componentLinks}

${variantSections}
`;
}

function renderBlocks(
  blocks: BlockDefinition[],
  relatedBlocks: Record<string, string[]>,
  components: ComponentDoc[]
): string {
  const relatedComponents = invertRelationships(relatedBlocks);
  const availableComponentTags = new Set(
    components.map((component) => component.tag)
  );

  return `# Siemens iX blocks

> Block-focused LLM documentation generated from registry block JSON metadata and component relationships.

Each block includes a description of when to use it, searchable keywords, previews, related iX components, framework variants, and source files. Source and component links are relative to this Markdown file.

${blocks
  .map((block) => renderBlock(block, relatedComponents, availableComponentTags))
  .join('\n')}
`;
}

function renderLlmsTxt(): string {
  return `# Siemens iX Registry

> Siemens iX is a multi-framework design system. This registry provides versioned LLM-readable component, example, and block documentation generated from existing registry JSON metadata.

Use this file as the entrypoint for this registry version. For exact component API usage, open the component docs first; for practical framework code, open the example docs first; for complete copyable UI patterns, open the block docs first.

Components are individual iX web components. Their Markdown files contain properties, events, slots, documentation links, related examples, related blocks, and Figma main component IDs. Use related examples to validate generated component code and related blocks to discover complete UI patterns.

Examples provide direct access to framework variants, source files, and related iX components without first navigating through a component detail page.

Blocks are copyable multi-file UI patterns built with iX packages. Their Markdown file contains descriptions, keywords, previews, related iX components, framework variants, and source files. Use blocks when generating larger page sections or reusable patterns.

Figma IDs come from component \`figma-main-component-id\` metadata and identify design-system counterparts, not runtime APIs. If a task starts from a Figma resource, match the Figma ID to a component, then open that component's Markdown and related examples.

## Registry LLM docs

- [Components](llms/components.md): Start here for component API-safe code generation; links to per-component Markdown with props, events, slots, related examples, and Figma IDs.
- [Examples](llms/examples.md): Start here for practical framework code; includes related iX components, variants, and source files.
- [Blocks](llms/blocks.md): Start here for complete copyable UI patterns; includes block descriptions, keywords, previews, related iX components, framework variants, and files.

## Optional

- [Registry manifest](registry.json): Machine-readable registry manifest with versioned artifact paths.
`;
}

async function readBlocks(blocksDir: string): Promise<BlockDefinition[]> {
  const blockFiles = await glob(path.join(blocksDir, '*.json'), {
    absolute: true,
  });

  const blocks = await Promise.all(
    blockFiles.map(async (file) => (await fs.readJson(file)) as BlockDefinition)
  );

  return sortByName(blocks);
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
  const relatedBlocks = (await fs.readJson(
    options.componentRelatedBlocksPath
  )) as Record<string, string[]>;
  const components = sortComponents(componentDoc.components ?? []);
  const blocks = await readBlocks(options.blocksDir);
  const blocksByName = Object.fromEntries(
    blocks.map((block) => [block.name, block])
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
      path.join(llmsDir, 'blocks.md'),
      renderBlocks(blocks, relatedBlocks, components),
      'utf-8'
    ),
    ...components.map((component) =>
      fs.writeFile(
        path.join(componentDetailsDir, componentDetailFileName(component)),
        renderComponentDetail(
          component,
          relatedExamples,
          examplesByName,
          relatedBlocks,
          blocksByName
        ),
        'utf-8'
      )
    ),
  ]);

  console.log(
    `✅ Generated llms.txt artifacts for ${components.length} components, ${examples.length} examples, and ${blocks.length} blocks`
  );

  return {
    entrypoint: 'llms.txt',
    components: 'llms/components.md',
    examples: 'llms/examples.md',
    blocks: 'llms/blocks.md',
  };
}
