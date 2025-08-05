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
} from 'typedoc';
import { toKebabCase } from './utils/string-utils';

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

async function generateDocsForEntrypoint(
  entrypoint: string,
  targetPath: string
) {
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
    throw new Error(`No project generated for ${entrypoint}`);
  }

  const types = processProjectChildren(project, __root);
  await generateTypeDocs(types, targetPath, __templates);
}

function getPropertyType(property: any): string {
  if (property.type instanceof IntrinsicType) {
    return property.type.name;
  } else if (property.type instanceof ReferenceType) {
    return property.type.qualifiedName;
  } else if (property.type instanceof UnionType) {
    return property.type.types
      .filter((t: any) => 'name' in t)
      .map((t: any) => t.name)
      .join(' | ');
  } else {
    console.log(`=== Type ${property.name} is unknown`);
    return 'unknown';
  }
}

function extractCommentTags(
  property: any
): Array<{ tag: string; text?: string }> {
  const tags: Array<{ tag: string; text?: string }> = [];

  if (!property.comment?.blockTags) {
    return tags;
  }

  for (const tag of property.comment.blockTags) {
    const tagName = tag.tag.substring(1); // Remove @ symbol
    const tagText = tag.content
      .filter((content: any) => content.kind === 'text')
      .map((content: any) => content.text)
      .join('');

    tags.push({ tag: tagName, text: tagText });
  }

  return tags;
}

function getCommentSummary(property: any): string {
  if (!property?.comment?.summary) {
    return '';
  }

  return property.comment.summary
    .filter((summary: any) => summary.kind === 'text')
    .map((summary: any) => summary.text)
    .join('');
}

function processProperties(child: any): TypeDocProperty[] {
  const properties: TypeDocProperty[] = [];

  if (!child?.children) {
    return properties;
  }

  for (const property of child.children) {
    const type = getPropertyType(property);
    const tags = extractCommentTags(property);
    const comment = getCommentSummary(property);

    properties.push({
      name: property.name,
      defaultValue: property.defaultValue,
      type,
      comment,
      tags,
    });
  }

  return properties;
}

function processProjectChildren(
  project: any,
  rootPath: string
): TypeDocTarget[] {
  const types: TypeDocTarget[] = [];

  if (!project.children) {
    return types;
  }

  for (const child of project.children) {
    const source = path.relative(rootPath, child.sources![0].fullFileName);

    const properties = processProperties(child);

    types.push({
      name: child.name,
      properties,
      type: 'Type',
      source,
    });
  }

  return types;
}

function determineFramework(source: string): string | undefined {
  const frameworks = ['react', 'angular', 'vue'];

  for (const framework of frameworks) {
    if (source.includes(framework)) {
      return framework;
    }
  }

  return undefined;
}

async function generateTypeDocs(
  types: TypeDocTarget[],
  targetPath: string,
  templatesPath: string
) {
  const utilsPath = path.join(targetPath, 'utils');
  await fs.ensureDir(utilsPath);

  for (const typedoc of types) {
    const current_framework = determineFramework(typedoc.source);
    const mdxContent = generateStructuredMDX(
      typedoc,
      templatesPath,
      current_framework
    );

    const outputPath = path.join(utilsPath, `${toKebabCase(typedoc.name)}.mdx`);
    console.log(`Generating TypeDoc: ${outputPath}`);
    await fs.writeFile(outputPath, mdxContent);

    if (global.gc) {
      global.gc();
    }
  }
}

function convertTagsToTSXElements(tags: Array<{ tag: string; text?: string }>) {
  return tags
    .map((tag) => {
      if (tag.tag === 'deprecated') {
        return {
          rTag: `<DeprecatedTag message={\`${escapeBackticks(
            tag.text || ''
          )}\`} />`,
        };
      } else if (tag.tag === 'since') {
        return {
          rTag: `<SinceTag version={\`${escapeBackticks(tag.text || '')}\`} />`,
        };
      }
      return null;
    })
    .filter(Boolean);
}

function generateStructuredMDX(
  typedoc: TypeDocTarget,
  templatesPath: string,
  framework?: string
): string {
  const propertyTemplate = fs.readFileSync(
    path.join(templatesPath, 'property-table.mustache'),
    'utf-8'
  );
  const apiTemplate = fs.readFileSync(
    path.join(templatesPath, 'api.mustache'),
    'utf-8'
  );

  const kebabName = `ix-${toKebabCase(typedoc.name)}`;

  const formattedProps = typedoc.properties.map((prop) => {
    return {
      name: prop.name,
      singleFramework: framework,
      docs: escapeBackticks(prop.comment),
      type: escapeBackticks(prop.type),
      default: prop.defaultValue
        ? escapeBackticks(prop.defaultValue)
        : undefined,
      attr: prop.name,
      docsTags: convertTagsToTSXElements(prop.tags),
    };
  });

  const propertyOutput = Mustache.render(propertyTemplate, {
    tag: kebabName,
    props: formattedProps,
  });

  return Mustache.render(apiTemplate, {
    tag: kebabName,
    hasProps: typedoc.properties.length > 0,
    hasEvents: false,
    hasSlots: false,
    singleFramework: framework,
    framework: framework?.charAt(0).toUpperCase()! + framework?.slice(1),
    properties: propertyOutput,
    events: '',
    slots: '',
  });
}

function escapeBackticks(str: string): string {
  if (!str) return '';
  return str.replace(/`/g, '\\`');
}

export async function generateTypeScriptDocs(
  classPaths: string[],
  targetPath: string
) {
  console.log('Generating TypeScript API docs');

  const BATCH_SIZE = 5;
  const batches = [];

  for (let i = 0; i < classPaths.length; i += BATCH_SIZE) {
    batches.push(classPaths.slice(i, i + BATCH_SIZE));
  }

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(
      `Processing batch ${i + 1}/${batches.length} (${batch.length} files)`
    );
    for (const classPath of batch) {
      await generateDocsForEntrypoint(classPath, targetPath);

      if (global.gc) {
        global.gc();
      }
    }
  }
}
