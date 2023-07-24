/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ApiTableEntry } from '@site/src/components/ApiTable';
import { writeFile } from 'fs/promises';
import path from 'path';
import {
  Application,
  IntrinsicType,
  ReferenceType,
  TSConfigReader,
} from 'typedoc';

type XYZ = {
  name: string;
  properties: XYZProperty[];
  type: 'Function' | 'Type';
};

type XYZProperty = {
  name: string;
  defaultValue?: string;
  type: string;
};

export async function writeTypeScriptFiles(
  targetPath: string,
  generateMarkdown: any
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
    entryPoints: ['./../core/src/components/utils/modal/modal.ts'],
  });

  const project = app.convert();
  const types: XYZ[] = [];

  if (project) {
    project.children.forEach((c) => {
      const properties: XYZProperty[] = [];
      types.push({
        name: c.name,
        properties: properties,
        type: 'Type',
      });

      c?.children?.forEach((property) => {
        let type = 'unknown';

        if (property.type instanceof IntrinsicType) {
          type = property.type.name;
        } else if (property.type instanceof ReferenceType) {
          type = property.type.qualifiedName;
        }

        properties.push({
          name: property.name,
          defaultValue: property.defaultValue,
          type,
        });
      });
    });
  }

  const promises = types.map(async (t) => {
    const attributes: ApiTableEntry[] = [];

    attributes.push({
      name: t.name,
      description: '',
      tags: [],
      definition: t.properties.map((x) => ({
        name: x.name,
        value: x.defaultValue,
      })),
    });

    const staticCode = `import ApiTable from '@site/src/components/ApiTable';

    <ApiTable attributes={${JSON.stringify(attributes)}} />`;

    const content = generateMarkdown(targetPath, 'typescript', staticCode);

    return writeFile(path.join(targetPath, `${t.name}.md`), content);
  });

  return Promise.all(promises);
}
