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
  properties?: TypeDocProperty[];
  functions?: FunctionDocProperty[];
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

export type FunctionDocProperty = {
  name: string;
  parameters: Array<{
    name: string;
    type: string;
    optional?: boolean;
    defaultValue?: string;
  }>;
  returnType: string;
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
  // Only needed for type 'Function'
  const entrypointName = path.basename(entrypoint, path.extname(entrypoint));

  await generateTypeDocs(types, targetPath, __templates, entrypointName);
}

function getPropertyType(property: any): string {
  if (!property?.type) {
    console.log(`=== Type ${property?.name || 'unknown'} has no type property`);
    return 'unknown';
  }

  if (property.type instanceof IntrinsicType) {
    return property.type.name;
  } else if (property.type instanceof ReferenceType) {
    // Handle generic types like Promise<ModalInstance<TReason>>
    if (property.type.typeArguments && property.type.typeArguments.length > 0) {
      const baseType = property.type.qualifiedName || property.type.name;
      const typeArgs = property.type.typeArguments
        .map((arg: any) => getPropertyType({ type: arg }))
        .join(', ');
      return `${baseType}<${typeArgs}>`;
    }
    return property.type.qualifiedName || property.type.name;
  } else if (property.type instanceof UnionType) {
    return property.type.types
      .filter((t: any) => 'name' in t)
      .map((t: any) => t.name)
      .join(' | ');
  } else {
    console.log(`=== Type ${property?.name || 'unknown'} is unknown`);
    console.log('property.type:', property?.type);
    console.log('property.type constructor:', property?.type?.constructor?.name);
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
  const summary =
    property?.comment?.summary ?? property?.signatures?.[0]?.comment?.summary;

  if (summary) {
    return summary
      .filter((summary: any) => summary.kind === 'text')
      .map((summary: any) => summary.text)
      .join('');
  }

  return '';
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

function processFunctionSignature(child: any): FunctionDocProperty {
  const signature = child.signatures?.[0];

  return {
    name: child.name,
    parameters:
      signature.parameters?.map((param) => ({
        name: param.name,
        type: getPropertyType(param),
        optional: param.flags?.isOptional,
      })) || [],
    returnType: getPropertyType({ type: signature.type }),
    comment: getCommentSummary(child),
    tags: extractCommentTags(child),
  };
}

function processProjectChildren(
  project: any,
  rootPath: string
): TypeDocTarget[] {
  const types: TypeDocTarget[] = [];

  const functionGroups = new Map<string, any[]>();

  if (!project.children) {
    return types;
  }

  for (const child of project.children) {
    const source = path.relative(rootPath, child.sources![0].fullFileName);

    // Identifies simple functions (like closeModal) or complex functions (like showMessage/showModalLoading)
    const isFunction = child.signatures?.length > 0;

    // Identifies classes/services (like ModalService)
    // TypeDoc kind 128 = Class
    const isClass = child.kind === 128;

    // Identifies type/interface definitions (like ModalConfig)
    const isType = !child.signatures?.length && !isClass;

    if (isFunction) {
      // 1. Process the main function signature (e.g., showModalLoading, showMessage)
      const functionDoc = processFunctionSignature(child);

      if (!functionGroups.has(source)) {
        functionGroups.set(source, []);
      }
      functionGroups.get(source)!.push(functionDoc);

      // 2. If the function has static properties (e.g., showMessage.info), process its children
      if (child.children) {
        for (const staticProp of child.children) {
          if (staticProp.signatures?.length > 0) {
            const staticFunctionDoc = processFunctionSignature(staticProp);
            functionGroups.get(source)!.push(staticFunctionDoc);
          }
        }
      }
    } else if (isClass) {
      // Process class methods (like methods in ModalService)
      if (child.children) {
        const methods: any[] = [];
        for (const classChild of child.children) {
          // Process methods but skip constructors
          // TypeDoc kind 2048 = Method, kind 512 = Constructor
          if (classChild.signatures?.length > 0 && classChild.kind === 2048) {
            const methodDoc = processFunctionSignature(classChild);
            methods.push(methodDoc);
          }
        }

        if (methods.length > 0) {
          if (!functionGroups.has(source)) {
            functionGroups.set(source, []);
          }
          functionGroups.get(source)!.push(...methods);
        }
      }
    } else if (isType) {
      // Process Types and Interfaces
      const properties = processProperties(child);
      types.push({
        name: child.name,
        properties,
        type: 'Type',
        source,
      });
    }
  }

  for (const [source, funcs] of functionGroups) {
    funcs.sort((a, b) => a.name.localeCompare(b.name));

    const fileName = path.basename(source, path.extname(source));

    types.push({
      name: fileName,
      functions: funcs,
      type: 'Function',
      source: source,
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
  templatesPath: string,
  entrypointName: string
) {
  const utilsPath = path.join(targetPath, 'utils');
  await fs.ensureDir(utilsPath);

  const serviceFunctions = types.filter((t) => t.type === 'Function');
  const otherTypes = types.filter((t) => t.type !== 'Function');

  if (serviceFunctions.length > 0) {
    const functionDocsContent: string[] = [];

    serviceFunctions.sort((a, b) => a.name.localeCompare(b.name));

    for (const funcDoc of serviceFunctions) {
      const current_framework = determineFramework(funcDoc.source);

      const mdxFragment = generateStructuredMDX(
        funcDoc,
        templatesPath,
        current_framework
      );

      functionDocsContent.push(mdxFragment);
    }

    const joinedContent = functionDocsContent.join('\n\n<br/>\n\n');

    const outputFileName = `${toKebabCase(entrypointName)}.mdx`;
    const outputPath = path.join(utilsPath, outputFileName);

    console.log(`Generating Service Doc: ${outputPath}`);
    await fs.writeFile(outputPath, joinedContent);
  }

  for (const typedoc of otherTypes) {
    const current_framework = determineFramework(typedoc.source);
    const mdxContent = generateStructuredMDX(
      typedoc,
      templatesPath,
      current_framework
    );

    const outputPath = path.join(utilsPath, `${toKebabCase(typedoc.name)}.mdx`);
    console.log(`Generating TypeDoc: ${outputPath}`);
    await fs.writeFile(outputPath, mdxContent);
  }

  if (global.gc) {
    global.gc();
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
  if (typedoc.type === 'Function' && typedoc.functions) {
    return generateFunctionMDX(typedoc, templatesPath, framework);
  }

  return generatePropertyMDX(typedoc, templatesPath, framework);
}

function generatePropertyMDX(
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

  const formattedProps = (typedoc.properties || []).map((prop) => {
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
    hasProps: (typedoc.properties || []).length > 0,
    hasEvents: false,
    hasSlots: false,
    singleFramework: framework,
    framework: framework?.charAt(0).toUpperCase()! + framework?.slice(1),
    properties: propertyOutput,
    events: '',
    slots: '',
  });
}

function generateFunctionMDX(
  typedoc: any,
  templatesPath: string,
  framework?: string
): string {
  const functionTemplate = fs.readFileSync(
    path.join(templatesPath, 'function-table.mustache'),
    'utf-8'
  );

  const formatFunction = (func: any) => {
    const formattedParams = func.parameters.map((param: any) => ({
      name: param.name,
      type: escapeBackticks(param.type),
      optional: param.optional,
      default: param.defaultValue
        ? escapeBackticks(param.defaultValue)
        : undefined,
    }));

    return {
      name: func.name,
      comment: escapeBackticks(func.comment),
      returnType: escapeBackticks(func.returnType),
      parameters: formattedParams,
      hasParameters: formattedParams.length > 0,
      docsTags: convertTagsToTSXElements(func.tags),
      singleFramework: framework,
    };
  };

  const formattedFunctions = typedoc.functions.map(formatFunction);

  return Mustache.render(functionTemplate, {
    functions: formattedFunctions,
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
