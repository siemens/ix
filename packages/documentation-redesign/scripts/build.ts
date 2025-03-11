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
import { fetchChangelog } from './utils/fetch-changelog';
import componentDoc from '@siemens/ix/component-doc.json';
import { downloadTheme } from './utils/download-theme';
import { rimrafSync } from 'rimraf';
import { convertDocsTagsToTSXElement } from './utils/docs-tags';
import { generateTypeScriptDocs } from './typedoc-generator';

type OutputType = 'html' | 'react' | 'angular' | 'vue';

const version = 'v2';

const __root = path.resolve(__dirname, '../');
const __node_modules = path.resolve(__dirname, '../node_modules');

const __core = path.join(__node_modules, '@siemens/ix');

const __htmlTestAppDist = path.join(__node_modules, 'html-test-app', 'dist');
const __mobileTestAppDist = path.join(__node_modules, 'ionic-test-app', 'dist');

const __htmlTestApp = path.join(
  __node_modules,
  'html-test-app',
  'src',
  'preview-examples'
);
const __reactTestApp = path.join(
  __node_modules,
  'react-test-app',
  'src',
  'preview-examples'
);
const __angularTestApp = path.join(
  __node_modules,
  'angular-test-app',
  'src',
  'preview-examples'
);
const __vueTestApp = path.join(
  __node_modules,
  'vue-test-app',
  'src',
  'preview-examples'
);

const __docs = path.join(__root, 'docs');
const __static = path.join(__root, 'static');
const __autogenerated = path.join(__docs, 'autogenerated');
const __autogeneratedApi = path.join(__autogenerated, 'api');
const __autogeneratedPlayground = path.join(__autogenerated, 'playground');
const __autogeneratedUtils = path.join(__autogenerated, 'utils');
const __changelog = path.join(__docs, 'home', 'releases', 'changelog.md');

const __demo = path.join(__root, 'static', 'demo', version);
const __previewHtml = path.join(__demo, 'preview', 'html');
const __previewMobile = path.join(__demo, 'preview', 'mobile');
const __previewHtmlAdditionalTheme = path.join(
  __previewHtml,
  'additional-theme'
);
const __previewMobileAdditionalTheme = path.join(
  __previewMobile,
  'additional-theme'
);

const __usage = path.join(__autogenerated, 'usage');

const __templates = path.join(__dirname, 'templates');

function kebabToCamelCase(str: string): string {
  return str
    .toLowerCase()
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

async function copyStorybook() {
  fs.copySync(
    path.join(__core, 'storybook-static'),
    path.join(__static, 'storybook-static')
  );
}

async function copyStaticFiles() {
  console.log('Copying demo source');
  fs.copySync(__htmlTestAppDist, __previewHtml);
  fs.copySync(__mobileTestAppDist, path.join(__demo, 'preview', 'mobile'));
  fs.copySync(__htmlTestApp, path.join(__demo, 'html'));
  fs.copySync(__reactTestApp, path.join(__demo, 'react'));
  fs.copySync(__angularTestApp, path.join(__demo, 'angular'));
  fs.copySync(__vueTestApp, path.join(__demo, 'vue'));
}

async function copyUsage() {
  console.log('Generate usage markdown');

  function stripComments(code: string) {
    return code
      .replace(/\/\*[^]*?\*\//gs, '')
      .replace(/<!--[^]*?-->/gs, '')
      .trim();
  }

  function generateSourceCodeMarkdown(testAppPath: string, type: OutputType) {
    fs.readdirSync(testAppPath).forEach((file) => {
      if (file.match(/.*.(html|css|tsx|ts|vue)/)) {
        const code = stripComments(
          fs.readFileSync(path.join(testAppPath, file), 'utf-8')
        );
        const fileType = file.split('.').pop();

        const output = Mustache.render(
          fs.readFileSync(path.join(__templates, 'usage.mustache'), 'utf-8'),
          {
            code,
            type: fileType,
          }
        );

        fs.ensureDirSync(path.join(__usage, type));
        fs.writeFileSync(path.join(__usage, type, `${file}.md`), output);
      }
    });
  }

  generateSourceCodeMarkdown(__htmlTestApp, 'html');
  generateSourceCodeMarkdown(__reactTestApp, 'react');
  generateSourceCodeMarkdown(__angularTestApp, 'angular');
  generateSourceCodeMarkdown(__vueTestApp, 'vue');
}

async function generatePlaygroundMarkdown(extendedPlayground: string[] = []) {
  const __playgroundTemplate = path.join(__templates, 'playground.mustache');
  const playgroundFilesTemplate = fs.readFileSync(
    path.join(__templates, 'playground-files.mustache'),
    'utf-8'
  );
  const playgroundMarkdownTemplate = fs.readFileSync(
    path.join(__templates, 'playground-markdown.mustache'),
    'utf-8'
  );
  const playgroundTemplate = fs.readFileSync(__playgroundTemplate, 'utf-8');

  const files = await fs.readdir(__htmlTestApp);
  const demoFiles = files.filter((file) => file.endsWith('.html'));

  extendedPlayground = extendedPlayground.map((f) => f + '.html');

  for (const file of [...demoFiles, ...extendedPlayground]) {
    const reactFiles: Record<string, string> = {};
    const angularFiles: Record<string, string> = {};
    const vueFiles: Record<string, string> = {};
    const htmlFiles: Record<string, string> = {};

    let isPreviewAvailable = false;

    const name = file.replace('.html', '');

    const imports: string[] = [];

    if (fs.existsSync(path.join(__reactTestApp, `${name}.tsx`))) {
      reactFiles[`${name}.tsx`] = `react/${name}.tsx`;
    }

    if (fs.existsSync(path.join(__reactTestApp, `${name}.scoped.css`))) {
      reactFiles[`${name}.scoped.css`] = `react/${name}.scoped.css`;
    }

    if (fs.existsSync(path.join(__angularTestApp, `${name}.ts`))) {
      angularFiles[`${name}.ts`] = `angular/${name}.ts`;
    }

    if (fs.existsSync(path.join(__angularTestApp, `${name}.html`))) {
      angularFiles[`${name}.html`] = `angular/${name}.html`;
    }

    if (fs.existsSync(path.join(__angularTestApp, `${name}.css`))) {
      angularFiles[`${name}.css`] = `angular/${name}.css`;
    }

    if (fs.existsSync(path.join(__vueTestApp, `${name}.vue`))) {
      vueFiles[`${name}.vue`] = `vue/${name}.vue`;
    }

    if (fs.existsSync(path.join(__vueTestApp, `${name}.css`))) {
      vueFiles[`${name}.css`] = `vue/${name}.css`;
    }

    if (fs.existsSync(path.join(__htmlTestApp, `${name}.html`))) {
      htmlFiles[`${name}.html`] = `html/${name}.html`;
      isPreviewAvailable = true;
    }

    if (fs.existsSync(path.join(__htmlTestApp, `${name}.css`))) {
      htmlFiles[`${name}.css`] = `html/${name}.css`;
    }

    function collectMarkdownImports(
      files: Record<string, string>,
      type: OutputType
    ) {
      Object.keys(files).forEach((key) => {
        const importStatement = `import ${kebabToCamelCase(
          key.replaceAll('.', '_')
        )}_${type} from '@site/docs/autogenerated/usage/${type}/${key}.md';`;
        imports.push(importStatement);
      });
    }

    collectMarkdownImports(reactFiles, 'react');
    collectMarkdownImports(angularFiles, 'angular');
    collectMarkdownImports(vueFiles, 'vue');
    collectMarkdownImports(htmlFiles, 'html');

    function mapValues(files: Record<string, string>) {
      return Object.keys(files).map((key) => ({
        key,
        value: files[key],
      }));
    }

    function mapMarkdownImports(
      files: Record<string, string>,
      type: OutputType
    ) {
      return Object.keys(files).map((key) => ({
        key,
        value: `${kebabToCamelCase(key.replaceAll('.', '_'))}_${type}`,
      }));
    }

    const view = {
      name,
      imports,
      isPreviewAvailable: !isPreviewAvailable,
      react: mapValues(reactFiles),
      angular: mapValues(angularFiles),
      vue: mapValues(vueFiles),
      html: mapValues(htmlFiles),

      reactMarkdown: mapMarkdownImports(reactFiles, 'react'),
      angularMarkdown: mapMarkdownImports(angularFiles, 'angular'),
      vueMarkdown: mapMarkdownImports(vueFiles, 'vue'),
      htmlMarkdown: mapMarkdownImports(htmlFiles, 'html'),
    };

    const output = Mustache.render(
      playgroundTemplate,
      view,
      {
        files: playgroundFilesTemplate,
        markdown: playgroundMarkdownTemplate,
      },
      {
        tags: ['<%', '%>'],
      }
    );

    await fs.ensureDir(__autogeneratedPlayground);

    await fs.writeFile(
      path.join(__autogeneratedPlayground, `${name}.mdx`),
      output
    );
  }
}

async function generateApiMarkdown() {
  const components = componentDoc.components;

  const __propertyTemplate = path.join(__templates, 'property-table.mustache');
  const __eventTemplate = path.join(__templates, 'event-table.mustache');
  const __slotTemplate = path.join(__templates, 'slot-table.mustache');
  const __apiTemplate = path.join(__templates, 'api.mustache');
  const __tagsTemplate = path.join(__templates, 'tags.mustache');
  const propertyTemplate = fs.readFileSync(__propertyTemplate, 'utf-8');
  const eventTemplate = fs.readFileSync(__eventTemplate, 'utf-8');
  const slotTemplate = fs.readFileSync(__slotTemplate, 'utf-8');
  const apiTemplate = fs.readFileSync(__apiTemplate, 'utf-8');
  const tagsTemplate = fs.readFileSync(__tagsTemplate, 'utf-8');

  for (const component of components) {
    const { props, events, slots } = component;

    const propertyOutput = Mustache.render(propertyTemplate, {
      tag: component.tag,
      props: props.map((prop) => ({
        ...prop,
        docsTags: convertDocsTagsToTSXElement(component.tag, prop.docsTags),
        docs: prop.docs.replace(/\n/g, ''),
      })),
    });

    const eventOutput = Mustache.render(eventTemplate, {
      tag: component.tag,
      events: events.map((event) => ({
        ...event,
        docsTags: convertDocsTagsToTSXElement(component.tag, event.docsTags),
      })),
    });

    const slotOutput = Mustache.render(slotTemplate, {
      slots: slots.map((tag) => ({
        ...tag,
        docsTags: convertDocsTagsToTSXElement(component.tag, []),
      })),
    });

    const tagsOutput = Mustache.render(tagsTemplate, {
      docsTags: convertDocsTagsToTSXElement(component.tag, component.docsTags),
    });

    const apiOutput = Mustache.render(apiTemplate, {
      tag: component.tag,
      hasSlots: slots.length > 0,
      hasEvents: events.length > 0,
      hasProps: props.length > 0,
      properties: propertyOutput,
      events: eventOutput,
      slots: slotOutput,
    });

    const __component = path.join(__autogeneratedApi, component.tag);
    await fs.ensureDir(__component);
    await fs.writeFile(path.join(__component, `props.mdx`), propertyOutput);
    await fs.writeFile(path.join(__component, `events.mdx`), eventOutput);
    await fs.writeFile(path.join(__component, `slots.mdx`), slotOutput);
    await fs.writeFile(path.join(__component, `api.mdx`), apiOutput);
    await fs.writeFile(path.join(__component, `tags.mdx`), tagsOutput);
  }
}

async function generateChangelog() {
  console.log('Generating changelog...');

  const changeLogExist = fs.existsSync(__changelog);

  if (!process.env.GITHUB_TOKEN) {
    if (changeLogExist) {
      return;
    }
    console.error('No GITHUB_TOKEN provided, creating empty changelog');
    return;
  }

  const changelog = await fetchChangelog();
  await fs.writeFile(__changelog, changelog);
}

async function downloadAdditionalTheme() {
  console.time('Download additional theme');
  try {
    const unpackTarget = path.join(__previewHtmlAdditionalTheme, 'package');

    if (fs.existsSync(unpackTarget)) {
      rimrafSync(unpackTarget);
    }

    await downloadTheme(__previewHtmlAdditionalTheme);

    const renameTarget = path.join(
      __previewHtmlAdditionalTheme,
      'ix-corporate-theme'
    );
    if (fs.existsSync(renameTarget)) {
      rimrafSync(renameTarget);
    }
    fs.renameSync(unpackTarget, renameTarget);

    // Copy the theme to the mobile preview
    fs.copySync(
      renameTarget,
      path.join(__previewMobileAdditionalTheme, 'ix-corporate-theme')
    );

    // This step is necessary to make the theme available during the build process of the documentation
    fs.copySync(
      renameTarget,
      path.join(__node_modules, '@siemens', 'ix-corporate-theme')
    );
  } catch (e: any) {
    console.timeLog('Download additional theme', e.message);
  } finally {
    console.timeEnd('Download additional theme');
  }
}

(async () => {
  await fs.remove(__autogenerated);
  await fs.ensureDir(__autogenerated);
  await fs.ensureDir(__autogeneratedUtils);

  // await copyStorybook();
  await copyStaticFiles();
  await copyUsage();
  await generatePlaygroundMarkdown(['form-validation']);
  await generateApiMarkdown();
  await downloadAdditionalTheme();
  await generateChangelog();

  // Generate TypeScript documentation using the imported function
  await generateTypeScriptDocs([
    path.join(__root, '..', 'core', 'src', 'components', 'utils', 'modal', 'modal.ts'),
    path.join(__root, '..', 'angular', 'src', 'modal', 'modal.service.ts'),
    path.join(__root, '..', 'core', 'src', 'components', 'toast', 'toast-utils.ts'),
    path.join(__root, '..', 'angular', 'src', 'toast', 'toast.service.ts'),
  ], __autogenerated);
})();
