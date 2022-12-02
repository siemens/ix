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

async function openAngularStackBlitz(baseUrl: string, sourceCode: string) {
  const [
    angular_json,
    app_component_css,
    app_component_html,
    app_component_ts,
    app_module_ts,
    main_ts,
    styles_css,
    tsconfig_json,
  ] = await loadSourceCodeFromStatic([
    `${baseUrl}code-runtime/angular/angular.json`,
    `${baseUrl}code-runtime/angular/app.component.css`,
    `${baseUrl}code-runtime/angular/app.component.html`,
    `${baseUrl}code-runtime/angular/app.component.ts`,
    `${baseUrl}code-runtime/angular/app.module.ts`,
    `${baseUrl}code-runtime/angular/main.ts`,
    `${baseUrl}code-runtime/angular/styles.css`,
    `${baseUrl}code-runtime/angular/tsconfig.json`,
  ]);

  sdk.openProject(
    {
      template: 'angular-cli',
      title: 'iX angular app',
      description: 'iX angular playground',
      files: {
        'src/main.ts': main_ts,
        'src/polyfills.ts': `import 'zone.js/dist/zone';`,
        'src/app/app.module.ts': app_module_ts,
        'src/app/app.component.ts': app_component_ts,
        'src/app/app.component.html': app_component_html,
        'src/app/example.component.ts': sourceCode,
        'src/app/app.component.css': app_component_css,
        'src/index.html': '<app-root></app-root>',
        'src/styles.css': styles_css,
        'angular.json': angular_json,
        'tsconfig.json': tsconfig_json,
      },
      dependencies: {
        '@siemens/ix': '^1.1.1',
        '@siemens/ix-icons': '^1.0.2',
        '@siemens/ix-angular': '^1.1.1',
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
}
