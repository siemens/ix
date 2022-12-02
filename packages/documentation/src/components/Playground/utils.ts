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

async function openReactStackBlitz(baseUrl: string, sourceCode: string) {
  const [app_tsx, index_html, index_tsx, package_json, tsconfig_json] =
    await loadSourceCodeFromStatic([
      `${baseUrl}code-runtime/react/App.tsx`,
      `${baseUrl}code-runtime/react/index.html`,
      `${baseUrl}code-runtime/react/index.tsx`,
      `${baseUrl}code-runtime/react/package.json`,
      `${baseUrl}code-runtime/react/tsconfig.json`,
    ]);

  sdk.openProject({
    template: 'node',
    title: 'test',
    description: 'test description',
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
  });
}

// const openReactEditor = async (code: string, options?: EditorOptions) => {
//   let [index_tsx, app_tsx, variables_css, ts_config_json, package_json, package_lock_json, index_html] = await loadSourceFiles([
//     'react/index.tsx',
//     options?.includeIonContent ? 'react/app.withContent.tsx' : 'react/app.tsx',
//     'react/variables.css',
//     'react/tsconfig.json',
//     'react/package.json',
//     'react/package-lock.json',
//     'react/index.html'
//   ]);

//   app_tsx = app_tsx.replace('{{ MODE }}', options?.mode);

//   sdk.openProject({
//     template: 'node',
//     title: options?.title ?? DEFAULT_EDITOR_TITLE,
//     description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
//     files: {
//       'public/index.html': index_html,
//       'src/index.tsx': index_tsx,
//       'src/App.tsx': app_tsx,
//       'src/main.tsx': code,
//       'src/theme/variables.css': variables_css,
//       'tsconfig.json': ts_config_json,
//       'package.json': package_json,
//       'package-lock.json': package_lock_json,
//       ...options?.files,
//       '.stackblitzrc': `{
//         "startCommand": "yarn run start"
//       }`
//     }
//   })
// }

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
    await openReactStackBlitz(baseUrl, sourceFile);
  }
}
