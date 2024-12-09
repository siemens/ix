/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from 'path';
import fs from 'fs-extra';
import Mustache, { name } from 'mustache';

console.log('Migration script');

const __root = path.resolve(__dirname, '../');
const __documentation = path.resolve(__root, '..', 'documentation');
const __documentationDocs = path.resolve(__documentation, 'docs');
const __documentationControls = path.resolve(__documentationDocs, 'controls');

const __newDocumentationComponents = path.resolve(__root, 'docs', 'components');

const __migrationIndexTemplate = path.resolve(
  __dirname,
  'templates',
  'migration-index.mustache'
);

const newDocs: Record<
  string,
  {
    guidePath: string;
    codePath: string;
  }
> = {};

function flatMarkdowns(
  filePath: string,
  docs: Record<
    string,
    {
      guidePath: string;
      codePath: string;
    }
  >,
  ignore: string[] = [],
  only?: string[],
  parent?: string
) {
  const files = fs.readdirSync(filePath).filter((file) => {
    if (only) {
      return only.some((o) => file.includes(o));
    }
    return !ignore.some((i) => file.includes(i));
  });

  files.forEach((file) => {
    const _file = path.resolve(filePath, file);

    if (fs.statSync(_file).isFile()) {
      const regex = /_(.*)_(code|styleguide|guide)\.(md|mdx)$/g;

      const match = regex.exec(file);
      if (parent) {
        console.log('Parent', parent, file);
      }
      if (match) {
        const [, name, type, extension] = match;

        if (!docs[name]) {
          docs[name] = {
            guidePath: '',
            codePath: '',
          };
        }

        if (type.includes('guide')) {
          docs[name].guidePath = _file;
        } else {
          docs[name].codePath = _file;
        }
      } else {
        const name = file.replace(/.(md|mdx)$/g, '');
        if (docs[name]) {
          return;
        }
        docs[name] = {
          guidePath: '',
          codePath: path.join(filePath, file),
        };
      }
    } else {
      const nested = _file.split('/').pop();
      console.log('Folder', nested);
      flatMarkdowns(_file, docs, ignore, undefined, nested);
    }
  });
}

flatMarkdowns(__documentationControls, newDocs, [
  '_divider.md',
  '_category_.json',
  'toast',
  'modal',
  '_toast',
  '_modal',
  'toggle-buttons',
  '_forms-toggle_styleguide.md',
  'forms',
]);

const indexMdTemplate = fs.readFileSync(__migrationIndexTemplate, 'utf-8');

function kebabToCamelCase(str: string): string {
  return str
    .toLowerCase()
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function replaceTagImports(id: string, file: string) {
  const regex = /import (.*) from '.*(ix-.*)\/tags.md';/g;
  const matches = Array.from(file.matchAll(regex));
  if (matches.length > 1) {
    console.log('Multiple tags for', id);
  } else if (matches.length === 1) {
    return file.replace(
      regex,
      "import Tags from '@site/docs/autogenerated/api/$2/tags.mdx'"
    );
  }
  return file;
}

Object.keys(newDocs).forEach((name) => {
  const { guidePath, codePath } = newDocs[name];
  const folderName = path.resolve(__newDocumentationComponents, name);

  fs.ensureDirSync(folderName);

  let tabs = [];

  if (guidePath) {
    tabs.push('Usage');
    let guideFile = fs.readFileSync(guidePath, 'utf-8');
    const removeImports = /import.*;\n/gm;

    replaceTagImports(guidePath, guideFile);

    guideFile = guideFile.replace(removeImports, '');

    guideFile = guideFile.replace(/^#/gm, '##');
    guideFile = ['## Usage', guideFile].join('\n');

    fs.writeFileSync(path.resolve(folderName, 'guide.md'), guideFile);
  }

  if (codePath) {
    tabs.push('Code');
    let codeFile = fs.readFileSync(codePath, 'utf-8');

    codeFile = codeFile.replace(/import DocsTabs.*;\n/gm, '');

    const patchCodeMarkdown =
      /<Playground.*?name="([^"]+)".*?<\/Playground>/gms;

    const playgrounds = codeFile.match(patchCodeMarkdown);

    const imports: string[] = [];

    playgrounds?.forEach((playground) => {
      const nameRegex = /name="([^"]+)"/gms;

      const match = nameRegex.exec(playground);

      if (match) {
        const [, playgroundName] = match;

        imports.push(
          `import ${kebabToCamelCase(
            playgroundName
          )}Playground from '@site/docs/autogenerated/playground/${playgroundName}.mdx';`
        );

        codeFile = codeFile.replace(
          playground,
          `<${kebabToCamelCase(playgroundName)}Playground />`
        );
      }
    });
    codeFile = codeFile.replace(/import?.Preview.*;\n/g, '');

    codeFile = codeFile.replace(
      /import (.*) from '.*(ix-.*)\/props.md';/g,
      "import $1Api from '@site/docs/autogenerated/api/$2/api.mdx';"
    );

    codeFile = replaceTagImports(codePath, codeFile);

    codeFile = codeFile.replace(
      /import (.*) from.*auto-generated\/(.*)\/(events|slots|tags).md';\n/g,
      ``
    );

    // Remove headings
    codeFile = codeFile.replace(/^#/gm, '##');
    // Replace first heading
    codeFile = codeFile.replace(/### Examples/gm, '## Code');
    // Replace generic playground with specific playground
    codeFile = codeFile.replace(
      /import.*Playground.*from.*Playground.*';?\n/g,
      `${imports.join('\n')}\n`
    );

    // Remove Event and Props headings
    codeFile = codeFile.replace(/#+\s(Properties|Events)\n+/gs, '');

    const apiComponents: string[] = [];
    Array.from(codeFile.matchAll(/import (.*Api) from.*/gm)).forEach(
      (match) => {
        apiComponents.push(match[1]);
      }
    );

    codeFile = codeFile.replace(
      /#+\sAPI.*\/>/gms,
      `## API\n\n${apiComponents.map((c) => `<${c} />`).join('\n')}`
    );

    fs.writeFileSync(path.resolve(folderName, 'code.mdx'), codeFile);
  }

  if (tabs.length === 0) {
    throw Error(`No tabs for ${name}`);
  }

  const title = name.slice(0, 1).toUpperCase() + name.slice(1);

  let output = Mustache.render(indexMdTemplate, {
    hasGuide: tabs.includes('Usage'),
    tabs: tabs,
    title: title.replace(/-/g, ' '),
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  });

  // Remove last comma
  output = output.replace(/, ]$/gm, ']');

  fs.writeFileSync(path.resolve(folderName, 'index.mdx'), output);
});
