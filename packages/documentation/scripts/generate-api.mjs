/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { readFileSync } from 'fs';
import fse from 'fs-extra';
import fs from 'fs';
import path from 'path';
import { appendDocsTags } from './docs-tags.mjs';
import copyLib from './copy-webcomponents.mjs';

const __dirname = path.resolve();

const htmlPreviewPath = path.join(
  __dirname,
  '../html-test-app/src/preview-examples'
);

function autoGenerationWarning(previewPath) {
  // unix/win normalization
  previewPath = previewPath.replace(/\\/g, '/');

  const copyright = `<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->
`;

  return [
    copyright,
    `<!-- Auto generated! Please edit here: ${previewPath.substring(
      previewPath.indexOf('packages/')
    )} -->`,
  ].join('\n');
}

function generateMarkdown(previewPath, type, code) {
  return `${autoGenerationWarning(
    previewPath
  )}\n\`\`\`${type}\n${code.trimEnd()}\n\`\`\`\n`;
}

function formatMultiline(str) {
  return str.split('\n\n').join('<br /><br />').split('\n').join(' ');
}

function removeNewLines(str) {
  return str.replace(/\n/g, str);
}

/**
 *
 * @param {string} name
 * @param {Array<{ name: string, text: string }>} docsTags
 * @returns
 */
function renderTableCellWithDocsTags(name, docsTags) {
  let eventName = name;
  let tags = '';
  if (!!docsTags.length) {
    tags = appendDocsTags(tags, docsTags);
  }

  const eventNameContainer = `<div className="Api__Table"><div>${eventName}</div><div className="Api__Table Docs__Tags">${tags}</div></div>`;
  return removeNewLines(eventNameContainer);
}

function readComponents() {
  const raw = readFileSync(
    path.join(__dirname, '..', 'core', 'component-doc.json')
  );

  return JSON.parse(raw);
}

function writeEvents(events) {
  if (events.length === 0) {
    return 'No events available for this component.';
  }

  return `| Name       | Description                   | Attribute        | Detail |
|------------|-------------------------------|------------------|--------|
${events
  .map((event) => {
    const eventDocs = renderTableCellWithDocsTags(
      formatMultiline(event.docs),
      event.docsTags
    );

    const eventEntry = `|${event.event}| ${eventDocs} | \`${event.detail}\``;

    return eventEntry;
  })
  .join('\n')}
`;
}

function writeProps(properties) {
  if (properties.length === 0) {
    return 'No properties available for this component.';
  }

  return `| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
${properties
  .map((prop) => {
    const propName = prop.name;
    const propDescription = renderTableCellWithDocsTags(
      formatMultiline(prop.docs),
      prop.docsTags
    );

    const propType = prop.type.replace(/\|/g, '\uff5c');

    return `|${propName}| ${propDescription} | \`${prop.attr}\` | \`${propType}\` | \`${prop.default}\` |`;
  })
  .join('\n')}
`;
}

function writeApi(component) {
  const output = path.join(__dirname, 'docs', 'auto-generated', component.tag);

  let data = [writeProps(component.props)].join('');
  fse.outputFileSync(path.join(output, 'props.md'), data);

  data = [writeEvents(component.events)].join('');
  fse.outputFileSync(path.join(output, 'events.md'), data);
}

function writeWebComponentPreviews() {
  const webComponentPreviews = fs
    .readdirSync(htmlPreviewPath)
    .filter((name) => name.includes('.html'))
    .map((name) => [
      name.replace('.html', ''),
      path.join(htmlPreviewPath, name),
    ]);

  webComponentPreviews.forEach(([name, previewPath]) => {
    const writePath = path.join(
      __dirname,
      'docs',
      'auto-generated',
      'previews',
      'web-component'
    );
    fse.ensureDirSync(writePath);

    let code = fs.readFileSync(previewPath).toString();
    const CODE_SPLIT = '<!-- Preview code -->\n';
    const splitHtmlContent = code.split(CODE_SPLIT);
    if (splitHtmlContent?.length === 3) {
      code = splitHtmlContent[1]
        .split('\n')
        .map((line) => line.replace(/[ ]{4}/, ''))
        .join('\n')
        .trimEnd();
    }

    const markdown = generateMarkdown(previewPath, 'html', code);
    fs.writeFileSync(path.join(writePath, `${name}.md`), markdown);
  });
}

function writeReactPreviews() {
  const webComponentPreviews = fs
    .readdirSync(htmlPreviewPath)
    .filter((name) => name.includes('.html'))
    .map((name) => name.replace('.html', ''));

  const reactPreviewPath = path.join(
    __dirname,
    '../react-test-app/src/preview-examples'
  );

  const reactPreviews = fs.readdirSync(reactPreviewPath);
  const reactPreviewPaths = webComponentPreviews
    .filter((name) => {
      const exist = reactPreviews.includes(`${name}.tsx`);

      if (!exist) {
        console.warn(`React preview for ${name} is missing in react-test-app`);
      }

      return exist;
    })
    .map((name) => [name, path.join(reactPreviewPath, `${name}.tsx`)]);

  reactPreviewPaths.forEach(([name, previewPath]) => {
    const writePath = path.join(
      __dirname,
      'docs',
      'auto-generated',
      'previews',
      'react'
    );
    fse.ensureDirSync(writePath);
    const code = fs.readFileSync(previewPath).toString();
    const markdown = generateMarkdown(previewPath, 'tsx', code);
    fs.writeFileSync(path.join(writePath, `${name}.md`), markdown);
  });
}

function writeAngularPreviews() {
  const webComponentPreviews = fs
    .readdirSync(htmlPreviewPath)
    .filter((name) => name.includes('.html'))
    .map((name) => name.replace('.html', ''));

  const angularPreviewPath = path.join(
    __dirname,
    '../angular-test-app/src/preview-examples'
  );

  const angularPreviews = fs.readdirSync(angularPreviewPath);
  const angularPreviewPaths = webComponentPreviews
    .filter((name) => {
      const exist = angularPreviews.includes(`${name}.ts`);

      if (!exist) {
        console.warn(
          `Angular preview for ${name} is missing in angular-test-app`
        );
      }

      return exist;
    })
    .map((name) => [name, path.join(angularPreviewPath, `${name}.ts`)]);

  angularPreviewPaths.forEach(([name, previewPath]) => {
    const writePath = path.join(
      __dirname,
      'docs',
      'auto-generated',
      'previews',
      'angular'
    );
    fse.ensureDirSync(writePath);

    const code = fs.readFileSync(previewPath).toString();
    const markdown = generateMarkdown(previewPath, 'typescript', code);
    fs.writeFileSync(path.join(writePath, `${name}.md`), markdown);
  });
}

function writeVuePreviews() {
  const webComponentPreviews = fs
    .readdirSync(htmlPreviewPath)
    .filter((name) => name.includes('.html'))
    .map((name) => name.replace('.html', ''));

  const vuePreviewPath = path.join(
    __dirname,
    '../vue-test-app/src/preview-examples'
  );

  const vuePreviews = fs.readdirSync(vuePreviewPath);
  const vuePreviewPaths = webComponentPreviews
    .filter((name) => {
      const exist = vuePreviews.includes(`${name}.vue`);

      if (!exist) {
        console.warn(`Vue preview for ${name} is missing in vue-test-app`);
      }

      return exist;
    })
    .map((name) => [name, path.join(vuePreviewPath, `${name}.vue`)]);

  vuePreviewPaths.forEach(([name, previewPath]) => {
    const writePath = path.join(
      __dirname,
      'docs',
      'auto-generated',
      'previews',
      'vue'
    );
    fse.ensureDirSync(writePath);
    const code = fs.readFileSync(previewPath).toString();
    const markdown = generateMarkdown(previewPath, 'html', code);
    fs.writeFileSync(path.join(writePath, `${name}.md`), markdown);
  });
}

(async function () {
  await copyLib();

  const { components } = readComponents();
  components.forEach(writeApi);

  writeWebComponentPreviews();
  writeReactPreviews();
  writeAngularPreviews();
  writeVuePreviews();
})();
