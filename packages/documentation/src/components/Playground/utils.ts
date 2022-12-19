/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import sdk from '@stackblitz/sdk';
import { TargetFramework } from './framework-types';

const repositoryUrl = 'https://github.com/siemens/ix/tree/main/packages';

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

async function openHtmlStackBlitz(baseUrl: string, sourceCode: string) {
  const [index_html, main_js, package_json, vite_config_ts] =
    await loadSourceCodeFromStatic([
      `${baseUrl}code-runtime/html/src/index.html`,
      `${baseUrl}code-runtime/html/src/main.js`,
      `${baseUrl}code-runtime/html/package.json`,
      `${baseUrl}code-runtime/html/vite.config.ts`,
    ]);

  sdk.openProject(
    {
      template: 'node',
      title: 'iX html app',
      description: 'iX html playground',
      files: {
        'src/index.html': index_html.replace(
          '<!-- IX_INJECT_SOURCE_CODE -->',
          sourceCode
        ),
        'src/main.js': main_js,
        'package.json': package_json,
        'vite.config.ts': vite_config_ts,
      },
    },
    {
      openFile: ['src/index.html'],
    }
  );
}

async function openAngularStackBlitz(baseUrl: string, sourceCode: string) {
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

  sdk.openProject(
    {
      template: 'node',
      title: 'iX angular app',
      description: 'iX angular playground',
      files: {
        'src/app/example.component.ts': sourceCode,
        'src/app/app.component.css': app_component_css,
        'src/app/app.component.html': app_component_html,
        'src/app/app.component.ts': app_component_ts,
        'src/app/app.module.ts': app_module_ts,
        'src/index.html': index_html,
        'src/main.ts': main_ts,
        'src/styles.css': styles_css,
        'angular.json': angular_json,
        'package.json': package_json,
        'tsconfig.app.json': tsconfig_app_json,
        'tsconfig.json': tsconfig_json,
      },
    },
    {
      openFile: 'src/app/example.component.ts',
    }
  );
}

async function openReactStackBlitz(baseUrl: string, sourceCode: string) {
  const [app_tsx, index_html, index_tsx, package_json, tsconfig_json] =
    await loadSourceCodeFromStatic([
      `${baseUrl}code-runtime/react/App.tsx`,
      `${baseUrl}code-runtime/react/index.html`,
      `${baseUrl}code-runtime/react/index.tsx`,
      `${baseUrl}code-runtime/react/package.json`,
      `${baseUrl}code-runtime/react/tsconfig.json`,
    ]);

  sdk.openProject(
    {
      template: 'node',
      title: 'iX React App',
      description: 'iX react playground',
      files: {
        'public/index.html': index_html,
        'src/index.tsx': index_tsx,
        'src/App.tsx': app_tsx,
        'src/Example.tsx': sourceCode,
        'package.json': package_json,
        'tsconfig.json': tsconfig_json,
        '.stackblitzrc': `{
        "startCommand": "yarn run start"
      }`,
      },
    },
    {
      openFile: 'src/Example.tsx',
    }
  );
}

export async function openStackBlitz({
  name,
  framework,
  baseUrl,
}: {
  name: string;
  framework: TargetFramework;
  baseUrl: string;
}) {
  const examplePath = `${baseUrl}auto-generated/previews/${framework}/${name}.txt`;
  const [sourceFile] = await loadSourceCodeFromStatic([examplePath]);

  if (framework === TargetFramework.REACT) {
    return openReactStackBlitz(baseUrl, sourceFile);
  }

  if (framework === TargetFramework.ANGULAR) {
    return openAngularStackBlitz(baseUrl, sourceFile);
  }

  if (framework === TargetFramework.JAVASCRIPT) {
    return openHtmlStackBlitz(baseUrl, sourceFile);
  }
}
