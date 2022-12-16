/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs, { readFileSync } from 'fs';
import fse from 'fs-extra';
import fsp from 'fs/promises';
import path from 'path';
import copyLib from './copy-webcomponents';
import { appendDocsTags } from './docs-tags';
import { writeAngularPreviews } from './write-angular-preview';

(async function () {
  const __dirname = path.resolve();

  const htmlPreviewPath = path.join(
    __dirname,
    '../html-test-app/src/preview-examples'
  );

  const staticPath = path.join(
    __dirname,
    'static',
    'auto-generated',
    'previews'
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
    let sourceCode = code.replace(/\/\*.*SPD.*\*\/\n\n/gms, '');

    return `${autoGenerationWarning(
      previewPath
    )}\n\`\`\`${type}\n${sourceCode.trimEnd()}\n\`\`\`\n`;
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
    ).toString();

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
    const output = path.join(
      __dirname,
      'docs',
      'auto-generated',
      component.tag
    );

    let data = [writeProps(component.props)].join('');
    fse.outputFileSync(path.join(output, 'props.md'), data);

    data = [writeEvents(component.events)].join('');
    fse.outputFileSync(path.join(output, 'events.md'), data);
  }

  async function writeWebComponentPreviews() {
    const htmlPreviewSourceCodePath = path.join(staticPath, 'javascript');
    fse.ensureDirSync(htmlPreviewSourceCodePath);

    const webComponentPreviews = fs.readdirSync(htmlPreviewPath);

    await Promise.all(
      webComponentPreviews.flatMap((previewPath) => {
        const writePath = path.join(
          __dirname,
          'docs',
          'auto-generated',
          'previews',
          'web-component'
        );
        fse.ensureDirSync(writePath);

        let code = fs
          .readFileSync(path.join(htmlPreviewPath, previewPath))
          .toString();
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
        return [
          fsp.writeFile(
            path.join(
              writePath,
              `${previewPath.substring(0, previewPath.lastIndexOf('.'))}.md`
            ),
            markdown
          ),
          fsp.writeFile(
            path.join(htmlPreviewSourceCodePath, `${previewPath}.txt`),
            code
          ),
        ];
      })
    );
  }

  async function writeReactPreviews() {
    const reactPreviewSourceCodePath = path.join(staticPath, 'react');
    fse.ensureDirSync(reactPreviewSourceCodePath);

    const reactPreviewPath = path.join(
      __dirname,
      '../react-test-app/src/preview-examples'
    );
    const reactPreviews = fs.readdirSync(reactPreviewPath);
    await Promise.all(
      reactPreviews.flatMap((previewPath) => {
        const name = previewPath.substring(0, previewPath.lastIndexOf('.'));
        const writePath = path.join(
          __dirname,
          'docs',
          'auto-generated',
          'previews',
          'react'
        );
        fse.ensureDirSync(writePath);
        const code = fs
          .readFileSync(path.join(reactPreviewPath, previewPath))
          .toString();
        const markdown = generateMarkdown(previewPath, 'tsx', code);

        return [
          fsp.writeFile(path.join(writePath, `${name}.md`), markdown),
          fsp.writeFile(
            path.join(staticPath, 'react', `${previewPath}.txt`),
            code
          ),
        ];
      })
    );
  }

  await copyLib();

  const { components } = readComponents();
  components.forEach(writeApi);

  await writeWebComponentPreviews();
  await writeReactPreviews();
  await writeAngularPreviews(
    staticPath,
    htmlPreviewPath,
    __dirname,
    generateMarkdown
  );
})();
