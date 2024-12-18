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
import Mustache from 'mustache';

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

type DocsIndex = {
  flatMarkdown?: string;
  componentText?: string;
  guidePath: string;
  codePath: string;
};

const newDocs: Record<string, DocsIndex> = {};

function flatMarkdowns(
  filePath: string,
  docs: Record<string, DocsIndex>,
  ignore: string[] = [],
  only?: string[],
  noTabsFor?: string[]
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
      if (noTabsFor && noTabsFor.some((n) => file.includes(n))) {
        docs[file] = {
          codePath: '',
          guidePath: '',
          flatMarkdown: path.join(filePath, file),
        };
        return;
      }

      const regex = /_(.*)_(code|styleguide|guide|style)\.(md|mdx)$/g;

      const match = regex.exec(file);
      if (match) {
        const [, name, type, extension] = match;

        if (!docs[name]) {
          docs[name] = {
            guidePath: '',
            codePath: '',
          };
        }

        if (type.includes('guide') || type.includes('style')) {
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
      flatMarkdowns(_file, docs, ignore, only, noTabsFor);
    }
  });
}

flatMarkdowns(
  __documentationControls,
  newDocs,
  [
    '_divider.md',
    '_category_.json',
    'toast',
    'modal',
    '_toast',
    '_modal',
    '_forms-toggle_styleguide.md',
  ],
  undefined,
  // forms-behavior does not have tabs but is located under components
  ['forms-behavior']
);

const indexMdTemplate = fs.readFileSync(__migrationIndexTemplate, 'utf-8');

function kebabToCamelCase(str: string): string {
  return str
    .toLowerCase()
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function tryToResolveBrokenLinks(file: string, isNested = false) {
  const regex = /\[(.*?)\]\((?!http)(\.\/)?(.*?)(\.md|\.mdx)\)/g;

  file = file.replace(regex, '[$1](../$3)');
  file = file.replace(/\.\.\/(\.\.\/)?/g, '../');
  file = file.replace(/\.\.\/.*\/(.*)\)/g, '../$1)');

  return file;
}

function tryToGetIntroductionText(file: string) {
  const introductionRegex =
    /<!-- introduction start -->\s(.*)\s<!-- introduction end -->/g;
  const [match] = file.matchAll(introductionRegex);
  if (match?.length) {
    return {
      text: match[1],
      file: file.replace(introductionRegex, ''),
    };
  }

  return {
    text: '',
    file,
  };
}

function normalizeHeadlines(name: string, file: string): string {
  const lines = file.split('\n');
  let levelTwoFound = false;
  let currentSection = [];
  const sections = [];

  // Process each line
  lines.forEach((line) => {
    if (
      line.startsWith('## ') ||
      line.startsWith('### ') ||
      line.startsWith('#### ') ||
      line.startsWith('##### ')
    ) {
      if (currentSection.length > 0) {
        sections.push(currentSection);
      }
      currentSection = [line];
    } else {
      currentSection.push(line);
    }
  });
  if (currentSection.length > 0) {
    sections.push(currentSection);
  }

  // Normalize headlines and remove empty sections
  const normalizedSections = sections
    .map((section) => {
      const [headline, ...content] = section;
      if (content.every((line) => line.trim() === '')) {
        return null; // Remove section if it contains no content
      }
      if (headline.startsWith('## ')) {
        if (!levelTwoFound) {
          levelTwoFound = true;
          return section; // Keep the first level two headline
        } else {
          return [headline.replace('## ', '### '), ...content]; // Convert subsequent level two headlines to level three
        }
      } else if (
        headline.startsWith('### ') ||
        headline.startsWith('#### ') ||
        headline.startsWith('##### ')
      ) {
        return [headline.replace(/^(#+)/, '###'), ...content]; // Normalize all other headlines to level three
      } else {
        return section; // Keep all other lines unchanged
      }
    })
    .filter((section) => section !== null);

  // Join the processed sections back into a single string
  let normalizedData = normalizedSections.flat().join('\n');

  return normalizedData;
}

function tryToReplaceTags(file: string) {
  const regex = /import (.*) from '.*(ix-.*)\/tags.md';/g;
  const matches = Array.from(file.matchAll(regex));
  if (matches.length) {
    return file.replace(
      regex,
      "import $1 from '@site/docs/autogenerated/api/$2/tags.mdx'"
    );
  }

  file = file.replace(
    /import { ApiTableSinceTag } from '.*ApiTableTag';/g,
    "import { SinceTag } from '@site/src/components/UI/Tags';"
  );

  file = file.replace(
    /<ApiTableSinceTag message=(.*) \/>/g,
    '<SinceTag version=$1 />'
  );

  return file;
}

function tryToReplaceSourceCodeSnippets(file: string) {
  const importRegex =
    /import { (SourceCodePreview) } from '.*\/PlaygroundV2';/g;
  const match = file.match(importRegex);

  if (match) {
    file = file.replace(importRegex, '');
  }

  const componentRegex =
    /<SourceCodePreview framework="(.*)" name="(.*)" examplesByName\/>/gm;

  const imports = new Set();

  const matches = Array.from(file.matchAll(componentRegex));
  matches.forEach((match) => {
    const [, framework, name] = match;

    file = file.replace(
      componentRegex,
      `<${kebabToCamelCase(name)} onlyFramework="$1" />`
    );

    imports.add(
      `import ${kebabToCamelCase(
        name
      )} from '@site/docs/autogenerated/playground/${name}.mdx';`
    );
  });

  file = [...imports, file].join('\n');

  return file;
}

Object.keys(newDocs).forEach((name) => {
  const { guidePath, codePath, flatMarkdown } = newDocs[name];
  const folderName = path.resolve(__newDocumentationComponents, name);

  let introductionText = '';

  fs.ensureDirSync(folderName);

  if (flatMarkdown) {
    let markdown = fs.readFileSync(flatMarkdown, 'utf-8');

    [tryToResolveBrokenLinks].forEach((fn) => (markdown = fn(markdown)));

    fs.writeFileSync(path.resolve(folderName, 'index.mdx'), markdown);
    return;
  }

  let tabs = [];

  if (guidePath) {
    tabs.push('Usage');
    let guideFile = fs.readFileSync(guidePath, 'utf-8');
    const removeImports = /import.*;\n/gm;

    // replaceTagImports(guidePath, guideFile);

    guideFile = guideFile.replace(removeImports, '');

    guideFile = guideFile.replace(/^#/gm, '##');
    guideFile = ['## Usage', guideFile].join('\n');

    guideFile = tryToResolveBrokenLinks(guideFile);

    const { file, text } = tryToGetIntroductionText(guideFile);

    guideFile = file;
    if (text) {
      introductionText = text;
    }

    fs.writeFileSync(path.resolve(folderName, 'guide.md'), guideFile);
  }

  if (codePath) {
    tabs.push('Code');
    let codeFile = fs.readFileSync(codePath, 'utf-8');

    codeFile = codeFile.replace(/import DocsTabs.*;\n/gm, '');

    codeFile = codeFile.replace(
      /<Playground(.*?)(\/>)/g,
      '<Playground$1></Playground>'
    );

    const patchCodeMarkdown =
      /<Playground.*?name="([^"]+)".*?<\/Playground>/gms;

    const playgrounds = codeFile.match(patchCodeMarkdown);

    const imports: string[] = [];

    playgrounds?.forEach((playground) => {
      const nameRegex = /name="([^"]+)"/gms;
      const heightRegex = /height="([^"]+)"/gms;

      const nameMatch = nameRegex.exec(playground);
      const heightMatch = heightRegex.exec(playground);

      if (nameMatch) {
        const [, playgroundName] = nameMatch;
        let height = '';

        if (heightMatch?.length) {
          height = ` height="${heightMatch[1]}"`;
        }

        imports.push(
          `import ${kebabToCamelCase(
            playgroundName
          )}Playground from '@site/docs/autogenerated/playground/${playgroundName}.mdx';`
        );

        codeFile = codeFile.replace(
          playground,
          `<${kebabToCamelCase(playgroundName)}Playground${height} />`
        );
      }
    });
    codeFile = codeFile.replace(/import?.Preview.*;\n/g, '');

    codeFile = codeFile.replace(
      /import (.*) from '.*(ix-.*)\/props.md';/g,
      "import $1Api from '@site/docs/autogenerated/api/$2/api.mdx';"
    );

    // codeFile = replaceTagImports(codePath, codeFile);

    codeFile = codeFile.replace(
      /import (.*) from.*auto-generated\/(.*)\/(events|slots).md';\n/g,
      ``
    );

    // Remove headings
    // codeFile = codeFile.replace(/^#/gm, '##');
    // Replace first heading
    // codeFile = codeFile.replace(/### Examples/gm, '## Code');
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
      /(#+\sAPI.*\/>)/gms,
      `### API\n\n${apiComponents.map((c) => `<${c} />`).join('\n')}`
    );

    codeFile = tryToResolveBrokenLinks(codeFile);

    const { text, file } = tryToGetIntroductionText(codeFile);
    codeFile = file;
    if (text) {
      introductionText = text;
    }

    codeFile = normalizeHeadlines(name, codeFile);

    codeFile = tryToReplaceTags(codeFile);

    codeFile = tryToReplaceSourceCodeSnippets(codeFile);

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
    description: introductionText,
  });

  // Remove last comma
  output = output.replace(/, ]$/gm, ']');

  fs.writeFileSync(path.resolve(folderName, 'index.mdx'), output);
});
