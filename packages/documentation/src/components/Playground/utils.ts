/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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

const loadSourceFiles = async (files: string[]) => {
  const sourceFiles = await Promise.all(
    files.map((f) => fetch(`/docs/code/stackblitz/${f}`))
  );
  return await Promise.all(sourceFiles.map((res) => res.text()));
};

async function openHtmlEditor() {
  // const [index_ts, index_html, variables_css] = await loadSourceFiles([
  //   'html/index.ts',
  //   options?.includeIonContent ? 'html/index.withContent.html' : 'html/index.html',
  //   'html/variables.css'
  // ]);
  // sdk.openProject({
  //   template: 'typescript',
  //   title: options?.title ?? DEFAULT_EDITOR_TITLE,
  //   description: options?.description ?? DEFAULT_EDITOR_DESCRIPTION,
  //   files: {
  //     'index.html': index_html.replace(/{{ TEMPLATE }}/g, code).replace(/{{ MODE }}/g, options?.mode),
  //     'index.ts': index_ts,
  //     'theme/variables.css': variables_css,
  //     ...options?.files
  //   },
  //   dependencies: {
  //     '@ionic/core': DEFAULT_IONIC_VERSION,
  //   },
  // })
}

export function openStackBlitz({
  name,
  framework,
}: {
  name: string;
  framework: TargetFramework;
}) {}
