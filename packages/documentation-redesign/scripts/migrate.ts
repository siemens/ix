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
  indexPath?: string;
};

const newDocs: Record<string, DocsIndex> = {};

const no_single_tab_files = [
  '3d',
  'line-chart',
  'bar-chart',
  'pie-chart',
  'special-chart',
  'overview-chart',
  'gauge-chart',
  'overview'
]

function removeLeadingNewline(content: string): string {
  return content.startsWith('\n') ? content.slice(1) : content;
}

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
        const [, name, type] = match;

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
          docs[name].indexPath = _file;
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

function tryToResolveBrokenLinks(file: string) {
  const regex = /\[(.*?)]\((?!http)(\.\/)?(.*?)(\.md|\.mdx)\)/g;
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
  const importLines: string[] = [];
  let contentLines: string[];

  let i = 0;
  while (i < lines.length && (lines[i].trim().startsWith('import ') || lines[i].trim() === '')) {
    importLines.push(lines[i]);
    i++;
  }

  contentLines = lines.slice(i);

  let levelTwoFound = false;
  let currentSection: string[] = [];
  const sections: string[][] = [];

  contentLines.forEach((line) => {
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

  const exemptHeadings = new Set([
    '### Installation',
    '#### React',
    '#### Angular',
    '#### Vue',
    '#### Javascript'
  ]);

  const normalizedSections = sections
    .map((section) => {
      const [headline, ...content] = section;
      if (exemptHeadings.has(headline.trim())) {
        return section;
      }
      if (headline.trim() === "## Guidelines" || headline.trim() === "## Guideline") {
        return section;
      }
      // // If the section appears to have no content and is not exempt, discard it.
      // if (content.every((l) => l.trim() === '')) {
      //   return null;
      // }
      if (headline.startsWith('## ')) {
        if (!levelTwoFound) {
          levelTwoFound = true;
          return section;
        } else {
          return [headline.replace('## ', '### '), ...content];
        }
      } else if (
        headline.startsWith('### ') ||
        headline.startsWith('#### ') ||
        headline.startsWith('##### ')
      ) {
        return [headline.replace(/^(#+)/, '###'), ...content];
      }
      return section;
    })
    .filter((section) => section !== null);

  return [...importLines, ...normalizedSections.flat()].join('\n');
}

function tryToReplaceTags(file: string, name: string): string {
  const regex = /import (.*) from '.*(ix-.*)\/tags.md';/g;
  const matches = Array.from(file.matchAll(regex));
  if (matches.length) {
    file = file.replace(
      regex,
      "import $1 from '@site/docs/autogenerated/api/$2/tags.mdx'"
    );
  }

  file = file.replace(
    /import.*from.*'.*ApiTableTag';/gm,
    "import { SinceTag } from '@site/src/components/UI/Tags';"
  );
  file = file.replace(/<ApiTableSinceTag message=(.*) \/>/g, '<SinceTag message=$1 />');

  return file;
}

function tryToReplaceSourceCodeSnippets(file: string): string {
  // Remove any direct import for SourceCodePreview from PlaygroundV2.
  file = file.replace(/import\s+\{\s*SourceCodePreview\s*}\s+from\s+'.*\/PlaygroundV2';?\n/g, '');
  const componentRegex = /<SourceCodePreview\s+framework="([^"]+)"\s+name="([^"]+)"([^>]*)\/>/g;
  const imports = new Set<string>();
  file = file.replace(componentRegex, (match, framework, name, rest) => {
    const componentName = kebabToCamelCase(name) + "Playground";
    imports.add(
      `import ${componentName} from '@site/docs/autogenerated/playground/${name}.mdx';`
    );
    return `<${componentName} onlyFramework="${framework}"${rest} />`;
  });
  if (imports.size > 0) {
    file = Array.from(imports).join('\n') + '\n' + file;
  }
  return file;
}

function enforceSingleBlankLineAroundHeadings(content: string): string {
  const lines = content.split('\n');
  const result: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isHeading = /^#{2,6}\s/.test(line);

    if (isHeading) {
      if (result.length > 0) {
        if (result[result.length - 1].trim() !== '') {
          result.push('');
        } else {
          let j = result.length - 1;
          while (j > 0 && result[j].trim() === '' && result[j - 1].trim() === '') {
            result.pop();
            j--;
          }
        }
      }
      result.push(line);
      while (i + 1 < lines.length && lines[i + 1].trim() === '') {
        i++;
      }
      if (i + 1 < lines.length) {
        const nextLineIsHeading = /^#{2,6}\s/.test(lines[i + 1]);
        if (!nextLineIsHeading) {
          result.push('');
        }
      }
    } else {
      result.push(line);
    }
  }

  return result.join('\n');
}

function getComponentDeprecatedTags(file: string): string[] {
  const regex = /DeprecatedTags.*url=(['"])(.*)(['"])/gms;
  const matches = Array.from(file.matchAll(regex));
  return matches.map((match) => match[2]);
}

Object.keys(newDocs).forEach((name) => {
  const { guidePath, codePath, flatMarkdown } = newDocs[name];
  const folderName = path.resolve(__newDocumentationComponents, name);

  let introductionText = '';

  fs.ensureDirSync(folderName);

  if (flatMarkdown) {
    let markdown = fs.readFileSync(flatMarkdown, 'utf-8');
    markdown = markdown.replace(/^# [^\n]*\n/gm, '');
    markdown = tryToResolveBrokenLinks(markdown);
    markdown = enforceSingleBlankLineAroundHeadings(markdown);
    markdown = removeLeadingNewline(markdown);
    fs.writeFileSync(path.resolve(folderName, 'index.mdx'), markdown);
    return;
  }

  let tabs: string[] = [];

  if (guidePath) {
    tabs.push('Usage');
    let guideFile = fs.readFileSync(guidePath, 'utf-8');
    const removeImports = /import.*;\n/gm;
    guideFile = guideFile.replace(removeImports, '');

    guideFile = guideFile.replace(/^#/gm, '##');
    guideFile = ['## Usage', guideFile].join('\n');

    guideFile = tryToResolveBrokenLinks(guideFile);

    const { file, text } = tryToGetIntroductionText(guideFile);

    guideFile = file;
    if (text) {
      introductionText = text;
    }
    guideFile = enforceSingleBlankLineAroundHeadings(guideFile);
    guideFile = removeLeadingNewline(guideFile);
    fs.writeFileSync(path.resolve(folderName, 'guide.md'), guideFile);
  }

  let codeFile = '';
  if (codePath) {
    tabs.push('Code');
    codeFile = fs.readFileSync(codePath, 'utf-8');
    codeFile = codeFile.replace(/^# [^\n]*\n/gm, '');
    codeFile = codeFile.replace(/import DocsTabs.*;\n/gm, '');
    codeFile = codeFile.replace(/<Playground(.*?)(\/>)/g, '<Playground$1></Playground>');
    const patchCodeMarkdown = /<Playground.*?name="([^"]+)".*?<\/Playground>/gms;
    const playgrounds = codeFile.match(patchCodeMarkdown);
    const playgroundImports: string[] = [];
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
        const componentName = `${kebabToCamelCase(playgroundName)}Playground`;
        playgroundImports.push(
          `import ${componentName} from '@site/docs/autogenerated/playground/${playgroundName}.mdx';`
        );
        codeFile = codeFile.replace(playground, `<${componentName}${height} />`);
      }
    });
    codeFile = codeFile.replace(/import?.Preview.*;\n/g, '');
    codeFile = codeFile.replace(
      /import (.*) from '.*(ix-.*)\/props.md';/g,
      "import $1Api from '@site/docs/autogenerated/api/$2/api.mdx';"
    );
    codeFile = codeFile.replace(
      /import (.*) from.*auto-generated\/(.*)\/(events|slots).md';\n/g,
      ``
    );
    codeFile = codeFile.replace(
      /import.*Playground.*from.*Playground.*';?\n/g,
      playgroundImports.join('\n') + '\n'
    );
    codeFile = codeFile.replace(/#+\s(Properties|Events)\n+/gs, '');
    const apiComponents: string[] = [];
    Array.from(codeFile.matchAll(/import (.*Api) from.*/gm)).forEach((match) => {
      apiComponents.push(match[1]);
    });
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
    codeFile = tryToReplaceTags(codeFile, name);
    codeFile = tryToReplaceSourceCodeSnippets(codeFile);
    if (!codeFile.includes('## Development')) {
      const lines = codeFile.split('\n');
      let lastImportIndex = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          lastImportIndex = i;
        }
      }
      if (lastImportIndex !== -1) {
        lines.splice(lastImportIndex + 1, 0, '', '## Development');
      } else {
        lines.unshift('## Development', '');
      }
      codeFile = lines.join('\n');
    }
    codeFile = enforceSingleBlankLineAroundHeadings(codeFile);
    codeFile = removeLeadingNewline(codeFile);
    fs.writeFileSync(path.resolve(folderName, 'code.mdx'), codeFile);
  }

  if (tabs.length === 0) {
    throw Error(`No tabs for ${name}`);
  }

  const title = name.slice(0, 1).toUpperCase() + name.slice(1);
  let deprecatedTags: string[] = [];
  if (newDocs[name].indexPath) {
    const file = fs.readFileSync(newDocs[name].indexPath, 'utf-8');
    deprecatedTags = getComponentDeprecatedTags(file);
  }

  if (newDocs[name].codePath) {
    const file = fs.readFileSync(newDocs[name].codePath, 'utf-8');
    deprecatedTags = [...deprecatedTags, ...getComponentDeprecatedTags(file)];
  }

  let output = Mustache.render(indexMdTemplate, {
    hasGuide: tabs.includes('Usage'),
    tabs: tabs,
    noSingleTab: no_single_tab_files.includes(name),
    title: title.replace(/-/g, ' '),
    description: introductionText,
    deprecatedTags,
  });

  output = output.replace(/, ]$/gm, ']');
  output = removeLeadingNewline(output);
  fs.writeFileSync(path.resolve(folderName, 'index.mdx'), output);
});
