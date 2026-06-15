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

type BlockDependency = {
  name: string;
  version: string;
};

type BlockVariant = {
  files?: BlockFile[];
  dependencies?: BlockDependency[];
};

type BlockDefinition = {
  name: string;
  preview?: string;
  variants?: Record<string, BlockVariant>;
};

export type LlmsArtifacts = {
  entrypoint: string;
  components: string;
  blocks: string;
};

export type GenerateLlmsOptions = {
  distDir: string;
  componentDocPath: string;
  componentRelatedExamplesPath: string;
  blocksDir: string;
};

const UNAVAILABLE_FROM_JSON = 'unavailable (not present in registry JSON)';

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

function renderComponentDetail(
  component: ComponentDoc,
  relatedExamples: Record<string, string[]>
): string {
  const docs = documentationUrls(component);
  const figma = figmaIds(component);
  const examples = normalizeRelatedExamples(relatedExamples, component.tag);

  return `# ${component.tag}

> ${componentDescription(component)}

## Documentation

${listOrNone(docs)}

## Figma IDs

${listOrNone(figma)}

## Related examples

${listOrNone(examples)}

## Related blocks

- ${UNAVAILABLE_FROM_JSON}

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
      return `- [${component.tag}](components/${fileName}): ${componentDescription(
        component
      )}`;
    })
    .join('\n');

  return `# Siemens iX components

> Component-focused LLM documentation generated from registry component JSON metadata.

This index links to all ${components.length} generated component detail files. Each detail file includes API metadata, related examples when available as JSON, Figma IDs, and explicitly unavailable relationships where registry JSON does not provide the data.

## Components

${links}
`;
}

function renderBlock(block: BlockDefinition): string {
  const variants = Object.entries(block.variants ?? {}).sort(([a], [b]) =>
    a.localeCompare(b)
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
              .map((file) => `  - \`${file.target}\` from \`${file.source}\``)
              .join('\n');
            const dependencies = sortByName(variant.dependencies ?? [])
              .map((dependency) => `  - \`${dependency.name}@${dependency.version}\``)
              .join('\n');

            return `### ${framework}

Files:
${files || '  - None'}

Dependencies:
${dependencies || '  - None'}`;
          })
          .join('\n\n');

  return `## ${block.name}

- Preview: ${block.preview ? `\`${block.preview}\`` : 'None'}
- Used iX components: ${UNAVAILABLE_FROM_JSON}

${variantSections}
`;
}

function renderBlocks(blocks: BlockDefinition[]): string {
  return `# Siemens iX blocks

> Block-focused LLM documentation generated from registry block JSON metadata.

Used iX component relationships are marked unavailable because this relationship is not present in registry JSON.

${blocks.map(renderBlock).join('\n')}
`;
}

function renderLlmsTxt(): string {
  return `# Siemens iX Registry

> Siemens iX is a multi-framework design system. This registry provides versioned LLM-readable component and block documentation generated from existing registry JSON metadata.

Use this file as the entrypoint for this registry version. For exact component API usage, open the component docs first; for complete copyable UI patterns, open the block docs first.

Components are individual iX web components. Their Markdown files contain properties, events, slots, documentation links, related examples, Figma main component IDs, and relationship availability. Use related examples to validate generated component code.

Blocks are copyable multi-file UI patterns built with iX packages. Their Markdown file contains previews, framework variants, source files, dependencies, and component usage availability. Use blocks when generating larger page sections or reusable patterns.

Figma IDs come from component \`figma-main-component-id\` metadata and identify design-system counterparts, not runtime APIs. If a task starts from a Figma resource, match the Figma ID to a component, then open that component's Markdown and related examples.

When a relationship is marked unavailable, do not infer it. It means the registry JSON does not provide that relationship.

## Registry LLM docs

- [Components](llms/components.md): Start here for component API-safe code generation; links to per-component Markdown with props, events, slots, related examples, and Figma IDs.
- [Blocks](llms/blocks.md): Start here for complete copyable UI patterns; includes block previews, framework variants, files, dependencies, and unavailable component-usage relationships.

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
  const components = sortComponents(componentDoc.components ?? []);
  const blocks = await readBlocks(options.blocksDir);

  const llmsDir = path.join(options.distDir, 'llms');
  const componentDetailsDir = path.join(llmsDir, 'components');

  await fs.ensureDir(componentDetailsDir);

  await Promise.all([
    fs.writeFile(path.join(options.distDir, 'llms.txt'), renderLlmsTxt(), 'utf-8'),
    fs.writeFile(
      path.join(llmsDir, 'components.md'),
      renderComponentsIndex(components),
      'utf-8'
    ),
    fs.writeFile(path.join(llmsDir, 'blocks.md'), renderBlocks(blocks), 'utf-8'),
    ...components.map((component) =>
      fs.writeFile(
        path.join(componentDetailsDir, componentDetailFileName(component)),
        renderComponentDetail(component, relatedExamples),
        'utf-8'
      )
    ),
  ]);

  console.log(
    `✅ Generated llms.txt artifacts for ${components.length} components and ${blocks.length} blocks`
  );

  return {
    entrypoint: 'llms.txt',
    components: 'llms/components.md',
    blocks: 'llms/blocks.md',
  };
}
