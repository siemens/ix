/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { themeSwitcher } from '@siemens/ix';
import { TargetFramework } from './framework-types';
import sdk from '@stackblitz/sdk';

export interface SourceFile {
  filename: string;
  source: string;
  raw: string;
}

function replaceStyleFilepath(source: string, sameFolder: boolean = false) {
  // get style file name
  var styleFileName: string | undefined;
  const regex = /styles-auto-gen\/(.*\.(css|scss))/;
  const match = source.match(regex);
  if (match && match.length > 1) {
    styleFileName = match[1];
  }

  // adapt path
  source = source.replace('./styles-auto-gen', sameFolder ? '.' : './styles');

  return { source, styleFileName };
}

function replaceTheme(source: string) {
  const theme: string = themeSwitcher.getCurrentTheme();
  return source.replace(/(<body class=")[^"]*(")/, `$1${theme}$2`);
}

function getAppFile(source: string, file: SourceFile) {
  return source
    .replace(
      /\/\/@_IMPORT_COMPONENT/gms,
      `import Example from './${file.filename.replace('.tsx', '')}'`
    )
    .replace(/({\/\*|<!--) @_RENDER_COMPONENT (\*\/}|-->)/gms, '<Example />');
}

function getComponentDeclarationFile(components: string[]) {
  return `
  /*
  * SPDX-FileCopyrightText: 2023 Siemens AG
  *
  * SPDX-License-Identifier: MIT
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */

  ${components
    .map(
      (filename, index) =>
        `import COMPONENT_${index} from './${(filename as String).substring(
          0,
          (filename as String).lastIndexOf('.')
        )}'`
    )
    .join(';')}

  export const DECLARE = [
    //@__DELCARE__COMPONENTS
    ${components.map((_, index) => `COMPONENT_${index}`)}
  ];`;
}

async function loadSourceCodeFromStatic(paths: string[]) {
  const sourceFiles = await Promise.all(paths.map((path) => fetch(path)));
  return Promise.all(sourceFiles.map((res) => res.text()));
}

async function openHtmlStackBlitz(baseUrl: string, sourceFiles: SourceFile[]) {
  const styleFilePath: string = `${baseUrl}auto-generated/previews/web-components/styles-auto-gen/`;

  const [
    global_css,
    index_html,
    init_js,
    utils_js,
    package_json,
    vite_config_ts,
    license,
  ] = await loadSourceCodeFromStatic([
    `${styleFilePath}global.css`,
    `${baseUrl}code-runtime/html/src/index.html`,
    `${baseUrl}code-runtime/html/src/init.js`,
    `${baseUrl}code-runtime/html/src/utils.js`,
    `${baseUrl}code-runtime/html/package.json`,
    `${baseUrl}code-runtime/html/vite.config.ts`,
    `${baseUrl}LICENSE.md`,
  ]);

  const [file, ...additionalFiles] = sourceFiles;

  // get source
  let source = file.raw;

  // set theme
  source = replaceTheme(source);

  // set style filepath
  const { source: adaptedSource, styleFileName } = replaceStyleFilepath(source);
  source = adaptedSource;

  // get style file
  const styleFile = {};
  if (styleFileName) {
    styleFile[`src/styles/${styleFileName}`] = (
      await loadSourceCodeFromStatic([`${styleFilePath}${styleFileName}`])
    )[0];
  }

  // process additional files
  const files = {};
  additionalFiles.forEach((file) => {
    files[`src/${file.filename}`] = file.source;
  });

  sdk.openProject(
    {
      template: 'node',
      title: 'iX html app',
      description: 'iX html playground',
      files: {
        ...files,
        'src/styles/global.css': global_css,
        'src/index.html': index_html.replace(
          '<!-- IX_INJECT_SOURCE_CODE -->',
          source
        ),
        'src/init.js': init_js,
        'src/utils.js': utils_js,
        'package.json': package_json,
        'vite.config.ts': vite_config_ts,
        'LICENSE.md': license,
        ...styleFile,
      },
    },
    {
      openFile: ['src/index.html'],
    }
  );
}

async function openAngularStackBlitz(
  baseUrl: string,
  name: string,
  sourceFiles: SourceFile[]
) {
  const styleFilePath: string = `${baseUrl}auto-generated/previews/angular/styles-auto-gen/`;

  const [
    app_component_html,
    app_component_ts,
    app_module_ts,
    global_css,
    index_html,
    main_ts,
    styles_scss,
    angular_json,
    package_json,
    tsconfig_app_json,
    tsconfig_json,
    license,
  ] = await loadSourceCodeFromStatic([
    `${baseUrl}code-runtime/angular/src/app/app.component.html`,
    `${baseUrl}code-runtime/angular/src/app/app.component.ts`,
    `${baseUrl}code-runtime/angular/src/app/app.module.ts`,
    `${styleFilePath}global.css`,
    `${baseUrl}code-runtime/angular/src/index.html`,
    `${baseUrl}code-runtime/angular/src/main.ts`,
    `${baseUrl}code-runtime/angular/src/styles.scss`,
    `${baseUrl}code-runtime/angular/angular.json`,
    `${baseUrl}code-runtime/angular/package.json`,
    `${baseUrl}code-runtime/angular/tsconfig.app.json`,
    `${baseUrl}code-runtime/angular/tsconfig.json`,
    `${baseUrl}LICENSE.md`,
  ]);

  // set theme
  const newIndexHtml: string = replaceTheme(index_html);

  // get component declaration file
  const components = [];
  sourceFiles.forEach(({ filename, source }) => {
    if (/@Component/gms.test(source)) {
      components.push(filename);
    }
  });
  const component_declaration_file = getComponentDeclarationFile(components);

  // process source files
  const exampleFiles = {};
  const styleFiles = {};
  const fileProcessingPromises = sourceFiles.map(
    async ({ filename, source }) => {
      if (filename.endsWith('.ts')) {
        // set style filepath
        const { source: adaptedSource, styleFileName } = replaceStyleFilepath(
          source,
          true
        );
        source = adaptedSource;

        // get style file
        if (styleFileName) {
          styleFiles[`src/app/${styleFileName}`] = (
            await loadSourceCodeFromStatic([`${styleFilePath}${styleFileName}`])
          )[0];
        }
      }
      exampleFiles[`src/app/${filename}`] = source;
    }
  );
  await Promise.all(fileProcessingPromises);

  sdk.openProject(
    {
      template: 'node',
      title: 'iX angular app',
      description: 'iX angular playground',
      files: {
        'src/app/declare-component.ts': component_declaration_file,
        'src/app/app.component.html': app_component_html,
        'src/app/app.component.ts': app_component_ts,
        'src/app/app.module.ts': app_module_ts,
        'src/styles/global.css': global_css,
        'src/index.html': newIndexHtml,
        'src/main.ts': main_ts,
        'src/styles.scss': styles_scss,
        'angular.json': angular_json,
        'package.json': package_json,
        'tsconfig.app.json': tsconfig_app_json,
        'tsconfig.json': tsconfig_json,
        'LICENSE.md': license,
        ...exampleFiles,
        ...styleFiles,
      },
    },
    {
      openFile: `src/app/${name}.ts`,
    }
  );
}

async function openReactStackBlitz(baseUrl: string, sourceFiles: SourceFile[]) {
  const styleFilePath: string = `${baseUrl}auto-generated/previews/react/styles-auto-gen/`;

  const [
    global_css,
    app_tsx,
    index_html,
    index_tsx,
    package_json,
    tsconfig_json,
    license,
  ] = await loadSourceCodeFromStatic([
    `${styleFilePath}global.css`,
    `${baseUrl}code-runtime/react/src/App.tsx`,
    `${baseUrl}code-runtime/react/public/index.html`,
    `${baseUrl}code-runtime/react/src/index.tsx`,
    `${baseUrl}code-runtime/react/package.json`,
    `${baseUrl}code-runtime/react/tsconfig.json`,
    `${baseUrl}LICENSE.md`,
  ]);

  // main file
  const [file] = sourceFiles;

  // set theme
  const newIndexHtml: string = replaceTheme(index_html);

  // get app file
  const app_file = getAppFile(app_tsx, file);

  // process source files
  const files: Record<string, string> = {};
  const styleFiles = {};
  const fileProcessingPromises = sourceFiles.map(
    async ({ filename, source }) => {
      if (filename.endsWith('.tsx')) {
        // set style filepath
        const { source: adaptedSource, styleFileName } =
          replaceStyleFilepath(source);
        source = adaptedSource;

        // get style file
        if (styleFileName) {
          styleFiles[`src/styles/${styleFileName}`] = (
            await loadSourceCodeFromStatic([`${styleFilePath}${styleFileName}`])
          )[0];
        }
      }
      files[`src/${filename}`] = source;
    }
  );
  await Promise.all(fileProcessingPromises);

  sdk.openProject(
    {
      template: 'node',
      title: 'iX React App',
      description: 'iX react playground',
      files: {
        ...files,
        'src/styles/global.css': global_css,
        'src/index.tsx': index_tsx,
        'src/App.tsx': app_file,
        'public/index.html': newIndexHtml,
        'package.json': package_json,
        'tsconfig.json': tsconfig_json,
        'LICENSE.md': license,
        ...styleFiles,
        '.stackblitzrc': `{
          "startCommand": "yarn run start"
        }`,
      },
    },
    {
      openFile: `src/${file.filename}`,
    }
  );
}

async function openVueStackBlitz(baseUrl: string, sourceFiles: SourceFile[]) {
  const styleFilePath: string = `${baseUrl}auto-generated/previews/vue/styles-auto-gen/`;

  const [
    global_css,
    app_vue,
    main_ts,
    env_d_ts,
    index_html,
    package_json,
    tsconfig_json,
    vite_config_ts,
    license,
  ] = await loadSourceCodeFromStatic([
    `${styleFilePath}global.css`,
    `${baseUrl}code-runtime/vue/src/App.vue`,
    `${baseUrl}code-runtime/vue/src/main.ts`,
    `${baseUrl}code-runtime/vue/env.d.ts`,
    `${baseUrl}code-runtime/vue/index.html`,
    `${baseUrl}code-runtime/vue/package.json`,
    `${baseUrl}code-runtime/vue/tsconfig.json`,
    `${baseUrl}code-runtime/vue/vite.config.ts`,
    `${baseUrl}LICENSE.md`,
  ]);

  // main file
  const [file] = sourceFiles;

  // set theme
  const newIndexHtml: string = replaceTheme(index_html);

  // get app file
  const app_file = getAppFile(app_vue, file);

  // process source files
  const files: Record<string, string> = {};
  const styleFiles = {};
  const fileProcessingPromises = sourceFiles.map(
    async ({ filename, source }) => {
      if (filename.endsWith('.vue')) {
        // set style filepath
        const { source: adaptedSource, styleFileName } =
          replaceStyleFilepath(source);
        source = adaptedSource;

        // get style file
        if (styleFileName) {
          styleFiles[`src/styles/${styleFileName}`] = (
            await loadSourceCodeFromStatic([`${styleFilePath}${styleFileName}`])
          )[0];
        }
      }
      files[`src/${filename}`] = source;
    }
  );
  await Promise.all(fileProcessingPromises);

  sdk.openProject(
    {
      template: 'node',
      title: 'iX Vue App',
      description: 'iX vue playground',
      files: {
        ...files,
        'src/styles/global.css': global_css,
        'src/main.ts': main_ts,
        'src/App.vue': app_file,
        'index.html': newIndexHtml,
        'env.d.ts': env_d_ts,
        'package.json': package_json,
        'tsconfig.json': tsconfig_json,
        'vite.config.ts': vite_config_ts,
        'LICENSE.md': license,
        ...styleFiles,
        '.stackblitzrc': `{
          "startCommand": "yarn run dev"
        }`,
      },
    },
    {
      openFile: `src/${file.filename}`,
    }
  );
}

export async function openStackBlitz({
  name,
  framework,
  files,
  baseUrl,
}: {
  name: string;
  files: SourceFile[];
  framework: TargetFramework;
  baseUrl: string;
}) {
  if (framework === TargetFramework.REACT) {
    return openReactStackBlitz(baseUrl, files);
  }

  if (framework === TargetFramework.ANGULAR) {
    return openAngularStackBlitz(baseUrl, name, files);
  }

  if (framework === TargetFramework.JAVASCRIPT) {
    return openHtmlStackBlitz(baseUrl, files);
  }

  if (framework === TargetFramework.VUE) {
    return openVueStackBlitz(baseUrl, files);
  }
}
