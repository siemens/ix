/**
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'path';
import fs from 'fs-extra';
import Mustache from 'mustache';
import {
  Application,
  IntrinsicType,
  ReferenceType,
  TSConfigReader,
  UnionType,
  DeclarationReflection,
} from 'typedoc';

export type TypeDocTarget = {
  name: string;
  properties: TypeDocProperty[];
  type: 'Function' | 'Type';
  source: string;
};

export type TypeDocProperty = {
  name: string;
  defaultValue?: string;
  type: string;
  comment: string;
  tags: Array<{ tag: string; text?: string }>;
};

export async function generateDocsForEntrypoint(entrypoint: string, targetPath: string) {
  const __root = path.resolve(__dirname, '../');
  const __templates = path.join(__dirname, 'templates');
  const tsconfig = path.join(
    __dirname,
    '..',
    '..',
    '..',
    'tsconfig.typedoc.json'
  );

  const app = await Application.bootstrap({
    tsconfig: tsconfig,
    skipErrorChecking: true,
    entryPoints: [entrypoint],
  });

  app.options.addReader(new TSConfigReader());

  const project = await app.convert();

  if (!project) {
    console.warn(`No project generated for ${entrypoint}`);
    return;
  }

  const types: TypeDocTarget[] = [];

  project.children?.forEach((child) => {
    const source = path.relative(
      __root,
      child.sources![0].fullFileName
    );
    const properties: TypeDocProperty[] = [];
    types.push({
      name: child.name,
      properties: properties,
      type: 'Type',
      source,
    });

    child?.children?.forEach((property) => {
      let type = 'unknown';
      if (property.type instanceof IntrinsicType) {
        type = property.type.name;
      } else if (property.type instanceof ReferenceType) {
        type = property.type.qualifiedName;
      } else if (property.type instanceof UnionType) {
        type = property.type.types
          .filter((t) => 'name' in t)
          .map((t: any) => t.name)
          .join(' | ');
      } else {
        console.log(`=== Type ${property.name} is unknown`);
      }

      const tags: Array<{ tag: string; text?: string }> = [];
      if (property.comment?.blockTags) {
        property.comment.blockTags.forEach((tag) => {
          const tagName = tag.tag.substring(1); // Remove @ symbol
          const tagText = tag.content
            .filter(content => content.kind === 'text')
            .map(content => content.text)
            .join('');

          tags.push({ tag: tagName, text: tagText });
        });
      }

      properties.push({
        name: property.name,
        defaultValue: property.defaultValue,
        type,
        comment: property?.comment?.summary
          ?.filter((summary) => summary.kind === 'text')
          .map((summary) => summary.text)
          .join('') || '',
        tags
      });
    });
  });

  for (const typedoc of types) {

    let utilsPath = path.join(targetPath, 'utils');
    const frameworks = ['react', 'angular', 'vue'];
    let current_framework = undefined;

    for (const framework of frameworks) {
      if (typedoc.source.includes(framework)) {
        //utilsPath = path.join(utilsPath, framework);
        current_framework = framework;
        break;
      }
    }

    const mdxContent = generateStructuredMDX(typedoc, __templates, current_framework);

    await fs.ensureDir(utilsPath);
    console.log(`Generating TypeDoc: ${path.join(utilsPath, `${toKebabCase(typedoc.name)}.mdx`)}`);
    await fs.writeFile(
      path.join(utilsPath, `${toKebabCase(typedoc.name)}.mdx`),
      mdxContent
    );

    if (global.gc) {
      global.gc();
    }
  }
}

function toKebabCase(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase();
}

function convertTagsToTSXElements(tags: Array<{ tag: string; text?: string }>) {
  return tags.map(tag => {
    if (tag.tag === 'deprecated') {
      return {
        rTag: `<DeprecatedTag message={\`${escapeBackticks(tag.text || '')}\`} />`
      };
    } else if (tag.tag === 'since') {
      return {
        rTag: `<SinceTag version={\`${escapeBackticks(tag.text || '')}\`} />`
      };
    }
    return null;
  }).filter(Boolean);
}

function generateStructuredMDX(typedoc: TypeDocTarget, templatesPath: string, framework?: string): string {
  const propertyTemplate = fs.readFileSync(path.join(templatesPath, 'property-table.mustache'), 'utf-8');
  const apiTemplate = fs.readFileSync(path.join(templatesPath, 'api.mustache'), 'utf-8');

  const kebabName = `ix-${toKebabCase(typedoc.name)}`;
  const isAngular = typedoc.source.includes('angular');

  const formattedProps = typedoc.properties.map(prop => {
    return {
      name: prop.name,
      onlyFramework: framework,
      docs: escapeBackticks(prop.comment),
      type: escapeBackticks(prop.type),
      default: prop.defaultValue ? escapeBackticks(prop.defaultValue) : undefined,
      attr: prop.name,
      docsTags: convertTagsToTSXElements(prop.tags)
    };
  });

  const propertyOutput = Mustache.render(propertyTemplate, {
    tag: kebabName,
    props: formattedProps
  });

  return Mustache.render(apiTemplate, {
    tag: kebabName,
    hasProps: typedoc.properties.length > 0,
    hasEvents: false,
    hasSlots: false,
    singleFramework: framework,
    framework: framework,
    properties: propertyOutput,
    events: '',
    slots: ''
  });
}

function escapeBackticks(str: string): string {
  if (!str) return '';
  return str.replace(/`/g, '\\`');
}

export async function generateTypeScriptDocs(classPaths: string[], targetPath: string) {
  console.log('Generating TypeScript API docs');

  const BATCH_SIZE = 5;
  const batches = [];

  for (let i = 0; i < classPaths.length; i += BATCH_SIZE) {
    batches.push(classPaths.slice(i, i + BATCH_SIZE));
  }

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`Processing batch ${i + 1}/${batches.length} (${batch.length} files)`);
    for (const classPath of batch) {
      await generateDocsForEntrypoint(classPath, targetPath);

      if (global.gc) {
        global.gc();
      }
    }
  }
}
