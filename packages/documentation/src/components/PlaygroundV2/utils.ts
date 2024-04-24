/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import sdk from '@stackblitz/sdk';
import { TargetFramework } from './framework-types';
import { themeSwitcher } from '@siemens/ix';

const repositoryUrl = 'https://github.com/siemens/ix/tree/main/packages';

export type SourceFile = {
  filename: string;
  source: string;
  raw: string;
};

function patchPkgLibraryVersion(pkg: string, replaceVersion: string) {
  return pkg.replace(/\"<VERSION>\"/g, `"${replaceVersion}"`);
}

function replaceTheme(source: string) {
  const theme: string = themeSwitcher
    .getCurrentTheme()
    .replace('brand', 'classic');
  return source.replace(/(<body class=")[^"]*(")/, `$1${theme}$2`);
}

function replaceScriptFilePath(source: string) {
  return source.replace(
    /(<script type="module" src=")[^"]*(">)/,
    `$1${'./main.js'}$2`
  );
}

function getSourceCodeFile({
  name,
  framework,
}: {
  name: string;
  framework: TargetFramework;
}) {
  if (framework === TargetFramework.ANGULAR) {
    return `${repositoryUrl}/angular-test-app/src/preview-examples/${name}.ts`;
  }

  if (framework === TargetFramework.JAVASCRIPT) {
    return `${repositoryUrl}/html-test-app/src/preview-examples/${name}.html`;
  }

  if (framework === TargetFramework.REACT) {
    return `${repositoryUrl}/react-test-app/src/preview-examples/${name}.tsx`;
  }

  if (framework === TargetFramework.VUE) {
    return `${repositoryUrl}/vue-test-app/src/preview-examples/${name}.vue`;
  }
}

export function openGitHubFile({
  name,
  framework,
}: {
  name: string;
  framework: TargetFramework;
}) {
  const url = getSourceCodeFile({
    framework,
    name,
  });

  window.open(url, '_blank');
}

async function loadSourceCodeFromStatic(paths: string[]) {
  const sourceFiles = await Promise.all(paths.map((path) => fetch(path)));
  return Promise.all(sourceFiles.map((res) => res.text()));
}

async function openHtmlStackBlitz(
  baseUrl: string,
  sourceFiles: SourceFile[],
  version: string
) {
  const [main_js, package_json, vite_config_ts] =
    await loadSourceCodeFromStatic([
      `${baseUrl}code-runtime/html/src/main.js`,
      `${baseUrl}code-runtime/html/package.json`,
      `${baseUrl}code-runtime/html/vite.config.ts`,
    ]);

  const [renderFirstExample, ...additionalFiles] = sourceFiles;

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
        'src/index.html': replaceTheme(
          replaceScriptFilePath(renderFirstExample.raw)
        ),
        'src/main.js': main_js,
        'package.json': patchPkgLibraryVersion(package_json, version),
        'vite.config.ts': vite_config_ts,
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
  additionalFiles: SourceFile[],
  version: string
) {
  const [
    app_component_css,
    app_component_html,
    app_component_ts,
    app_module_ts,
    index_html,
    main_ts,
    styles_css,
    angular_json,
    package_json,
    tsconfig_app_json,
    tsconfig_json,
  ] = await loadSourceCodeFromStatic([
    `${baseUrl}code-runtime/angular/src/app/app.component.css`,
    `${baseUrl}code-runtime/angular/src/app/app.component.html`,
    `${baseUrl}code-runtime/angular/src/app/app.component.ts`,
    `${baseUrl}code-runtime/angular/src/app/app.module.ts`,
    `${baseUrl}code-runtime/angular/src/index.html`,
    `${baseUrl}code-runtime/angular/src/main.ts`,
    `${baseUrl}code-runtime/angular/src/styles.css`,
    `${baseUrl}code-runtime/angular/angular.json`,
    `${baseUrl}code-runtime/angular/package.json`,
    `${baseUrl}code-runtime/angular/tsconfig.app.json`,
    `${baseUrl}code-runtime/angular/tsconfig.json`,
  ]);

  const declareComponents: string[] = [];
  additionalFiles.forEach(({ filename, source }) => {
    if (/@Component/gms.test(source)) {
      declareComponents.push(filename);
    }
  });
  const declare_component_ts = `
    ${declareComponents
      .map(
        (filename, index) =>
          `import COMPONENT_${index} from './${filename.substring(
            0,
            filename.lastIndexOf('.')
          )}'`
      )
      .join(';')}

    export const DECLARE = [
      //@__DELCARE__COMPONENTS
      ${declareComponents.map((_, index) => `COMPONENT_${index}`)}
    ];
  `;

  const exampleFiles = {};
  additionalFiles.forEach(({ filename, source }) => {
    exampleFiles[`src/app/${filename}`] = source;
  });

  sdk.openProject(
    {
      template: 'node',
      title: 'iX angular app',
      description: 'iX angular playground',
      files: {
        'src/app/declare-component.ts': declare_component_ts,
        'src/app/app.component.css': app_component_css,
        'src/app/app.component.html': app_component_html,
        'src/app/app.component.ts': app_component_ts,
        'src/app/app.module.ts': app_module_ts,
        'src/index.html': replaceTheme(index_html),
        'src/main.ts': main_ts,
        'src/styles.css': styles_css,
        'angular.json': angular_json,
        'package.json': patchPkgLibraryVersion(package_json, version),
        'tsconfig.app.json': tsconfig_app_json,
        'tsconfig.json': tsconfig_json,
        ...exampleFiles,
      },
    },
    {
      openFile: `src/app/${name}.ts`,
    }
  );
}

async function openReactStackBlitz(
  baseUrl: string,
  sourceFiles: SourceFile[],
  version: string
) {
  const [app_tsx, index_html, index_tsx, package_json, tsconfig_json] =
    await loadSourceCodeFromStatic([
      `${baseUrl}code-runtime/react/App.tsx`,
      `${baseUrl}code-runtime/react/index.html`,
      `${baseUrl}code-runtime/react/index.tsx`,
      `${baseUrl}code-runtime/react/package.json`,
      `${baseUrl}code-runtime/react/tsconfig.json`,
    ]);

  const [renderFirstExample] = sourceFiles;

  const patchAppTs = () => {
    return app_tsx
      .replace(
        /\/\/@_IMPORT_COMPONENT/gms,
        `import Example from './${renderFirstExample.filename.substring(
          0,
          renderFirstExample.filename.lastIndexOf('.')
        )}'\n`
      )
      .replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms, '\n<Example />\n');
  };

  const files: Record<string, string> = {};

  sourceFiles.forEach(({ filename, source }) => {
    files[`src/${filename}`] = source;
  });

  sdk.openProject(
    {
      template: 'node',
      title: 'iX React App',
      description: 'iX react playground',
      files: {
        ...files,
        'public/index.html': replaceTheme(index_html),
        'src/index.tsx': index_tsx,
        'src/App.tsx': patchAppTs(),
        'package.json': patchPkgLibraryVersion(package_json, version),
        'tsconfig.json': tsconfig_json,
        '.stackblitzrc': `{
        "startCommand": "yarn run start"
      }`,
      },
    },
    {
      openFile: `src/${renderFirstExample.filename}`,
    }
  );
}

async function openVueStackBlitz(
  baseUrl: string,
  sourceFiles: SourceFile[],
  version: string
) {
  const [
    app_vue,
    index_html,
    index_ts,
    package_json,
    tsconfig_json,
    viteconfig_ts,
    env_d_ts,
  ] = await loadSourceCodeFromStatic([
    `${baseUrl}code-runtime/vue/App.vue`,
    `${baseUrl}code-runtime/vue/index.html`,
    `${baseUrl}code-runtime/vue/main.ts`,
    `${baseUrl}code-runtime/vue/package.json`,
    `${baseUrl}code-runtime/vue/tsconfig.json`,
    `${baseUrl}code-runtime/vue/vite.config.ts`,
    `${baseUrl}code-runtime/vue/env.d.ts`,
  ]);

  const [renderFirstExample] = sourceFiles;

  const patchAppTs = () => {
    return app_vue
      .replace(
        /\/\/@_IMPORT_COMPONENT/gms,
        `import Example from './${renderFirstExample.filename}'`
      )
      .replace(/<!-- @_RENDER_COMPONENT -->/gms, ' <Example />');
  };

  const files: Record<string, string> = {};

  sourceFiles.forEach(({ filename, source }) => {
    files[`src/${filename}`] = source;
  });

  sdk.openProject(
    {
      template: 'node',
      title: 'iX Vue App',
      description: 'iX vue playground',
      files: {
        ...files,
        'index.html': replaceTheme(index_html),
        'src/main.ts': index_ts,
        'src/App.vue': patchAppTs(),
        'src/env.d.ts': env_d_ts,
        'package.json': patchPkgLibraryVersion(package_json, version),
        'tsconfig.json': tsconfig_json,
        'vite.config.ts': viteconfig_ts,
        '.stackblitzrc': `{
          "startCommand": "yarn run dev"
        }`,
      },
    },
    {
      openFile: `src/${renderFirstExample.filename}`,
    }
  );
}

async function getSourceCodeFiles(
  baseUrl: string,
  framework: TargetFramework,
  filenames: string[]
) {
  const getPath = (name: string) =>
    `${baseUrl}auto-generated/previews/${framework}/${name}`;

  const sourceFiles: { filename: string; sourceCode: string }[] = [];
  const files = await loadSourceCodeFromStatic(filenames.map(getPath));

  files.forEach((value, index) => {
    sourceFiles.push({
      filename: filenames[index],
      sourceCode: value,
    });
  });

  return sourceFiles;
}

export async function openStackBlitz({
  name,
  framework,
  files,
  baseUrl,
  version,
}: {
  name: string;
  files: SourceFile[];
  framework: TargetFramework;
  baseUrl: string;
  version: string;
}) {
  const libraryVersion = version || 'latest';
  if (framework === TargetFramework.REACT) {
    return openReactStackBlitz(baseUrl, files, libraryVersion);
  }

  if (framework === TargetFramework.ANGULAR) {
    return openAngularStackBlitz(baseUrl, name, files, libraryVersion);
  }

  if (framework === TargetFramework.JAVASCRIPT) {
    return openHtmlStackBlitz(baseUrl, files, libraryVersion);
  }

  if (framework === TargetFramework.VUE) {
    return openVueStackBlitz(baseUrl, files, libraryVersion);
  }
}
