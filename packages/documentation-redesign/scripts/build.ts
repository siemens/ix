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
import componentDoc from '@siemens/ix/component-doc.json';

type OutputType = 'html' | 'react' | 'angular' | 'vue';

const version = 'v2';

const __root = path.resolve(__dirname, '../');
const __node_modules = path.resolve(__dirname, '../node_modules');

const __core = path.join(__node_modules, '@siemens/ix');

const __htmlTestAppDist = path.join(__node_modules, 'html-test-app', 'dist');
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

const __demo = path.join(__root, 'static', 'demo', version);
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
  fs.copySync(__htmlTestAppDist, __demo);
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

async function generatePlaygroundMarkdown() {
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

  for (const file of demoFiles) {
    const reactFiles: Record<string, string> = {};
    const angularFiles: Record<string, string> = {};
    const vueFiles: Record<string, string> = {};
    const htmlFiles: Record<string, string> = {};

    const name = file.replace('.html', '');

    const imports: string[] = [];

    if (fs.existsSync(path.join(__reactTestApp, `${name}.tsx`))) {
      reactFiles[`${name}.tsx`] = `react/${name}.tsx`;
    }

    if (fs.existsSync(path.join(__reactTestApp, `${name}.css`))) {
      reactFiles[`${name}.css`] = `react/${name}.css`;
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
    }

    if (fs.existsSync(path.join(__htmlTestAppDist, `${name}.css`))) {
      htmlFiles[`${name}.css`] = `html/${name}.css`;
    }

    function collectMarkdownImports(
      files: Record<string, string>,
      type: OutputType
    ) {
      Object.keys(files).forEach((key) => {
        imports.push(
          `import ${kebabToCamelCase(
            key.replace('.', '_')
          )}_${type} from '@site/docs/autogenerated/usage/${type}/${key}.md';`
        );
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
        value: `${kebabToCamelCase(key.replace('.', '_'))}_${type}`,
      }));
    }

    const view = {
      name,
      imports,
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
    const propertyOutput = Mustache.render(propertyTemplate, {
      tag: component.tag,
      props: component.props.map((prop) => ({
        ...prop,
        docs: prop.docs.replace(/\n/g, ''),
      })),
    });

    const eventOutput = Mustache.render(eventTemplate, {
      tag: component.tag,
      events: component.events,
    });

    const slotOutput = Mustache.render(slotTemplate, {
      slots: component.slots,
    });

    const apiOutput = Mustache.render(apiTemplate, { tag: component.tag });

    const tagsOutput = Mustache.render(tagsTemplate, {});

    const __component = path.join(__autogeneratedApi, component.tag);
    await fs.ensureDir(__component);
    await fs.writeFile(path.join(__component, `props.mdx`), propertyOutput);
    await fs.writeFile(path.join(__component, `events.mdx`), eventOutput);
    await fs.writeFile(path.join(__component, `slots.mdx`), slotOutput);
    await fs.writeFile(path.join(__component, `api.mdx`), apiOutput);
    await fs.writeFile(path.join(__component, `tags.mdx`), tagsOutput);
  }
}

(async () => {
  await fs.remove(__autogenerated);
  await fs.ensureDir(__autogenerated);

  // await copyStorybook();
  await copyStaticFiles();
  await copyUsage();
  await generatePlaygroundMarkdown();
  await generateApiMarkdown();
})();
