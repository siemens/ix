/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ApiTableEntry } from '@site/src/components/ApiTable';
import { ensureDir } from 'fs-extra';
import { writeFile } from 'fs/promises';
import path from 'path';
import {
  Application,
  IntrinsicType,
  ReferenceType,
  TSConfigReader,
  UnionType,
} from 'typedoc';

type TypeDocTarget = {
  name: string;
  properties: TypeDocProperty[];
  type: 'Function' | 'Type';
  source: string;
};

type TypeDocProperty = {
  name: string;
  defaultValue?: string;
  type: string;
  comment: string;
};

async function generateDocsForEntrypoint(
  entrypoint: string,
  targetPath: string
) {
  const app = new Application();

  app.options.addReader(new TSConfigReader());

  const tsconfig = path.join(
    __dirname,
    '..',
    '..',
    '..',
    'tsconfig.typedoc.json'
  );

  app.bootstrap({
    tsconfig: tsconfig,
    skipErrorChecking: true,
    entryPoints: [entrypoint],
  });

  const project = app.convert();
  const types: TypeDocTarget[] = [];

  if (project) {
    project.children?.forEach((child) => {
      const source = path.relative(
        path.join(__dirname, '..', '..', '..'),
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

        properties.push({
          name: property.name,
          defaultValue: property.defaultValue,
          type,
          comment: property?.comment?.summary
            .filter((summary) => summary.kind === 'text')
            .map((summary) => summary.text)
            .join('')!,
        });
      });
    });
  }

  const promises = types.map(async (typedoc) => {
    const attributes: ApiTableEntry[] = [];

    typedoc.properties.forEach((prop) => {
      attributes.push({
        name: prop.name,
        description: prop.comment,
        tags: [],
        definition: [
          {
            name: 'Attribute',
            value: prop.name,
          },
          {
            name: 'Type',
            value: prop.type,
          },
          {
            name: 'Default',
            value: prop.defaultValue!,
          },
        ],
      });
    });

    const staticCode = [
      `import ApiTable from '@site/src/components/ApiTable';`,
    ];
    staticCode.push('\n\n');
    staticCode.push(`<ApiTable attributes={${JSON.stringify(attributes)}} />`);

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

    await ensureDir(utilsPath);
    return writeFile(
      path.join(utilsPath, `${typedoc.name}.md`),
      staticCode.join('\n')
    );
  });

  return Promise.all(promises);
}

export function writeTypeScriptFiles(classPath: string[], targetPath: string) {
  return Promise.all(
    classPath.flatMap((e) => generateDocsForEntrypoint(e, targetPath))
  );
}
