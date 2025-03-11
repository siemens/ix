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

      // Extract tags from comment
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

  // Process each type one by one to avoid memory buildup
  for (const typedoc of types) {
    // Generate the structured MDX format
    const mdxContent = generateStructuredMDX(typedoc);

    let utilsPath = path.join(targetPath, 'utils');

    if (typedoc.source.startsWith(path.join('packages', 'core'))) {
      utilsPath = path.join(utilsPath, 'core');
    } else if (typedoc.source.startsWith(path.join('packages', 'react'))) {
      utilsPath = path.join(utilsPath, 'react');
    } else if (typedoc.source.startsWith(path.join('packages', 'angular'))) {
      utilsPath = path.join(utilsPath, 'angular');
    } else if (typedoc.source.startsWith(path.join('packages', 'vue'))) {
      utilsPath = path.join(utilsPath, 'vue');
    }

    await fs.ensureDir(utilsPath);
    console.log(`Generating TypeDoc: ${path.join(utilsPath, `${toKebabCase(typedoc.name)}.mdx`)}`);
    await fs.writeFile(
      path.join(utilsPath, `${toKebabCase(typedoc.name)}.mdx`),
      mdxContent
    );

    // Help garbage collection
    if (global.gc) {
      global.gc();
    }
  }
}

/**
 * Convert a string from PascalCase or camelCase to kebab-case
 */
function toKebabCase(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase();
}

function generateStructuredMDX(typedoc: TypeDocTarget): string {
  // Convert the name to kebab case with ix- prefix
  const kebabName = `ix-${toKebabCase(typedoc.name)}`;

  // Determine heading level based on the source path
  const isAngular = typedoc.source.includes('angular');
  const apiHeading = isAngular ? '#### API' : '### API';

  // Start with imports
  const mdxParts = [
    `import {SinceTag, DeprecatedTag} from '@site/src/components/UI/Tags';`,
    `import FrameworkSelection from '@site/src/components/UI/FrameworkSelection';`,
    `import ApiTable from '@site/src/components/ApiTable';`,
    '',
    `${apiHeading} (${kebabName})`,
    '',
    `${isAngular ? '#####' : '####'} Properties`,
    ''
  ];

  // Process each property
  typedoc.properties.forEach(prop => {
    mdxParts.push(`<ApiTable>`);

    // Header with optional tags
    mdxParts.push(`  <ApiTable.PropertyHeader name="${prop.name}">`);

    // Add tags if present
    prop.tags.forEach(tag => {
      if (tag.tag === 'deprecated') {
        mdxParts.push(`      <DeprecatedTag message={\`${escapeBackticks(tag.text || '')}\`} />`);
      } else if (tag.tag === 'since') {
        mdxParts.push(`      <SinceTag version={\`${escapeBackticks(tag.text || '')}\`} />`);
      }
    });

    mdxParts.push(`  </ApiTable.PropertyHeader>`);
    mdxParts.push('');

    // Description
    mdxParts.push(`  <ApiTable.Text name="Description">`);
    mdxParts.push(`    { \`${escapeBackticks(prop.comment)}\` }`);
    mdxParts.push(`  </ApiTable.Text>`);
    mdxParts.push('');

    // Attribute
    mdxParts.push(`  <ApiTable.Code name="Attribute">`);
    mdxParts.push(`    {\`${prop.name}\`}`);
    mdxParts.push(`  </ApiTable.Code>`);
    mdxParts.push('');

    // Type
    mdxParts.push(`  <ApiTable.Code name="Type">`);
    mdxParts.push(`   {\`${escapeBackticks(prop.type)}\`}`);
    mdxParts.push(`  </ApiTable.Code>`);
    mdxParts.push('');

    // Default
    mdxParts.push(`  <ApiTable.Code name="Default">`);
    mdxParts.push(`    {\`${escapeBackticks(prop.defaultValue || '')}\`}`);
    mdxParts.push(`  </ApiTable.Code>`);
    mdxParts.push('');

    mdxParts.push(`</ApiTable>`);
  });

  return mdxParts.join('\n');
}
/**
 * Helper function to escape backticks in strings
 */
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
