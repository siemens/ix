/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs-extra';
import { Listr } from 'listr2';
import path from 'path';
import { writeApi } from './api-tasks';
import { writeTypeScriptFiles } from './ts-class-tasks';
import { escapeMarkdown } from './utils';

const branch = process.env.IX_DOCS_BRANCH ?? 'main';
const rootPath = path.join(__dirname, '../');

const componentDocPath = path.join(
  rootPath,
  '..',
  'core',
  'component-doc.json'
);

const examplePath = path.join(rootPath, `..`);

const htmlTestAppPath = path.join(
  examplePath,
  'html-test-app',
  'src',
  'preview-examples'
);

const reactTestAppPath = path.join(
  examplePath,
  'react-test-app',
  'src',
  'preview-examples'
);

const angularTestAppPath = path.join(
  examplePath,
  'angular-test-app',
  'src',
  'preview-examples'
);

const vueTestAppPath = path.join(
  examplePath,
  'vue-test-app',
  'src',
  'preview-examples'
);

const docsPath = path.join(rootPath, 'docs', 'auto-generated');
const docsPreviewPath = path.join(
  rootPath,
  'docs',
  'auto-generated',
  'previews'
);

const docsExampleWebComponentPath = path.join(docsPreviewPath, 'web-component');
const docsExampleReactPath = path.join(docsPreviewPath, 'react');
const docsExampleAngularPath = path.join(docsPreviewPath, 'angular');
const docsExampleVuePath = path.join(docsPreviewPath, 'vue');

const iframeExampleCodePath = path.join(
  rootPath,
  'static',
  'webcomponent-examples'
);

const docsStaticExamples = path.join(
  rootPath,
  'static',
  'auto-generated',
  'previews'
);
const docsStaticWebComponentExamples = path.join(
  docsStaticExamples,
  'web-components'
);
const docsStaticAngularExamples = path.join(docsStaticExamples, 'angular');
const docsStaticReactExamples = path.join(docsStaticExamples, 'react');
const docsStaticVueExamples = path.join(docsStaticExamples, 'vue');

interface Context {
  names: string[];
  htmlExamples: string[];
  reactExamples: string[];
  angularExamples: string[];
  vueExamples: string[];
}

const tasks = new Listr<Context>(
  [
    {
      title: 'Setup',
      task: async () => {
        await fs.ensureDir(docsPath);
        await fs.ensureDir(docsPreviewPath);

        await fs.ensureDir(docsExampleWebComponentPath);
        await fs.ensureDir(docsExampleReactPath);
        await fs.ensureDir(docsExampleAngularPath);
        await fs.ensureDir(docsExampleVuePath);

        await fs.ensureDir(docsStaticWebComponentExamples);
        await fs.ensureDir(docsStaticAngularExamples);
        await fs.ensureDir(docsStaticReactExamples);
        await fs.ensureDir(docsStaticVueExamples);

        await fs.ensureDir(iframeExampleCodePath);
      },
    },
    {
      title: `Collecting html examples`,
      task: (ctx) => {
        const examples = fs
          .readdirSync(htmlTestAppPath)
          .filter((name) => name.endsWith('.html'));

        ctx.names = examples.map((name) =>
          name.substring(0, name.indexOf('.html'))
        );
        ctx.htmlExamples = examples;
      },
    },
    {
      title: `Collecting react examples`,
      task: (ctx) => {
        const examples = fs
          .readdirSync(reactTestAppPath)
          .filter((name) => name.endsWith('.tsx'));

        ctx.reactExamples = examples;
      },
    },
    {
      title: `Collecting angular examples`,
      task: (ctx) => {
        const examples = fs
          .readdirSync(angularTestAppPath)
          .filter((name) => name.endsWith('.ts') || name.endsWith('.html'));

        ctx.angularExamples = examples;
      },
    },
    {
      title: `Collecting vue examples`,
      task: (ctx) => {
        const examples = fs
          .readdirSync(vueTestAppPath)
          .filter((name) => name.endsWith('.vue'));

        ctx.vueExamples = examples;
      },
    },
    {
      title: `Write html examples`,
      task: async (ctx, task) => {
        const examples = ctx.htmlExamples;

        examples.map(async (example) => {
          const rawSource = await getRawStingContent(
            path.join(htmlTestAppPath, example)
          );
          let formattedSource = rawSource;

          if (rawSource.includes('<!-- Preview code -->')) {
            const [__, source] = rawSource.split('<!-- Preview code -->');
            formattedSource = source
              .split('\n')
              .map((line) => line.replace(/[ ]{4}/, ''))
              .join('\n')
              .trimEnd();
          }

          const fileName = path.parse(example);

          return fs.writeFile(
            path.join(docsExampleWebComponentPath, `${fileName.name}.md`),
            wrap(`${formattedSource}`, 'html', 0)
          );
        });

        return Promise.all(examples);
      },
    },
    {
      title: `Write react examples`,
      task: async (ctx, task) => {
        const examples = ctx.reactExamples;

        examples.map(async (example) => {
          const rawSource = await getRawStingContent(
            path.join(reactTestAppPath, example)
          );
          return fs.writeFile(
            path.join(docsExampleReactPath, `${path.parse(example).name}.md`),
            wrap(rawSource, 'tsx')
          );
        });

        return Promise.all(examples);
      },
    },
    {
      title: `Write angular examples`,
      task: async (ctx, task) => {
        const examples = ctx.angularExamples;

        examples.map(async (example) => {
          if (example.endsWith('.html')) {
            const rawSource = await getRawStingContent(
              path.join(angularTestAppPath, example)
            );

            return fs.writeFile(
              path.join(docsExampleAngularPath, `${example}.md`),
              wrap(rawSource, 'html')
            );
          }

          if (example.endsWith('.ts')) {
            const rawSource = await getRawStingContent(
              path.join(angularTestAppPath, example)
            );

            return fs.writeFile(
              path.join(docsExampleAngularPath, `${example}.md`),
              wrap(rawSource, 'ts')
            );
          }
        });

        return Promise.all(examples);
      },
    },
    {
      title: `Write vue examples`,
      task: async (ctx, task) => {
        const examples = ctx.vueExamples;

        examples.map(async (example) => {
          const rawSource = await getRawStingContent(
            path.join(vueTestAppPath, example)
          );
          return fs.writeFile(
            path.join(docsExampleVuePath, `${path.parse(example).name}.md`),
            wrap(rawSource, 'html')
          );
        });

        return Promise.all(examples);
      },
    },
    {
      title: 'Generate API Docs',
      task: async () => {
        const componentDocRaw = (
          await fs.readFile(componentDocPath)
        ).toString();
        const componentDoc = JSON.parse(componentDocRaw) as {
          components: any[];
        };

        const { components } = componentDoc;

        return Promise.all(
          components.map(async (component) => writeApi(component, docsPath))
        );
      },
    },
    {
      title: 'Generate Typescript class docs',
      task: async () => {
        return writeTypeScriptFiles(
          [
            path.join(
              rootPath,
              '..',
              'core',
              'src',
              'components',
              'utils',
              'modal',
              'modal.ts'
            ),
          ],
          docsPath
        );
      },
    },
    {
      title: 'Copy examples to dist',
      task: async () => {
        return Promise.all([
          fs.copy(htmlTestAppPath, docsStaticWebComponentExamples),
          fs.copy(
            path.join(examplePath, 'html-test-app', 'dist'),
            path.join(iframeExampleCodePath, 'dist')
          ),
          fs.copy(angularTestAppPath, docsStaticAngularExamples),
          fs.copy(reactTestAppPath, docsStaticReactExamples),
          fs.copy(vueTestAppPath, docsStaticVueExamples),
        ]);
      },
    },
  ],
  { concurrent: false }
);

(async () => {
  try {
    await tasks.run();
  } catch (e) {
    console.error(e);
  }
})();

async function getRawStingContent(path: string) {
  const response = await fs.readFile(path);
  return response.toString();
}

/**
 * Wrap source code inside markdown
 */
function wrap(
  content: string,
  language: 'html' | 'tsx' | 'ts',
  newLinesStart = 1
) {
  const markdownHeader = `<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT
-->`;

  return `${markdownHeader}\n\n\`\`\`${language}${Array.from({
    length: newLinesStart,
  })
    .map(() => '\n')
    .join('')}${escapeMarkdown(content)}\n\`\`\``;
}
