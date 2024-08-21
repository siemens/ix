/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { docusaurusFetch } from '../../components/PlaygroundV3/fetching';

export async function getReactRuntime(baseUrl: string) {
  const files = [
    'vite.config.ts',
    'tsconfig.node.json',
    'tsconfig.json',
    'package.json',
    'index.html',
    '.eslintrc.cjs',
    'src/App.tsx',
    'src/main.tsx',
    'src/vite-env.d.ts',
  ];

  const runtime: Record<string, string> = {};

  const runtime$ = files.map(async (file) => {
    const source = await docusaurusFetch(
      `${baseUrl}code-runtime/react/${file}`
    );
    runtime[file] = source;
  });

  await Promise.all(runtime$);
  const globalCss = await docusaurusFetch(
    `${baseUrl}auto-generated/previews/react/styles/global.css`
  );
  runtime['src/styles/global.css'] = globalCss;
  return runtime;
}

export async function getAngularRuntime(baseUrl: string) {
  const files = [
    'src/app/app.module.ts',
    'src/app/app.component.ts',
    'src/app/app.component.html',
    'src/index.html',
    'src/main.ts',
    'tsconfig.json',
    'tsconfig.app.json',
    'angular.json',
    'package.json',
  ];

  const runtime: Record<string, string> = {};

  const runtime$ = files.map(async (file) => {
    const source = await docusaurusFetch(
      `${baseUrl}code-runtime/angular/${file}`
    );
    runtime[file] = source;
  });

  await Promise.all(runtime$);

  const globalCss = await docusaurusFetch(
    `${baseUrl}auto-generated/previews/angular/styles/global.css`
  );
  runtime['src/styles.css'] = globalCss;
  return runtime;
}

export async function getHTMLRuntime(baseUrl: string) {
  const files = ['src/main.js', 'package.json', 'vite.config.ts'];

  const runtime: Record<string, string> = {};

  const runtime$ = files.map(async (file) => {
    const source = await docusaurusFetch(`${baseUrl}code-runtime/html/${file}`);
    runtime[file] = source;
  });

  await Promise.all(runtime$);

  const globalCss = await docusaurusFetch(
    `${baseUrl}auto-generated/previews/web-components/styles/global.css`
  );
  runtime['src/styles.css'] = globalCss;
  return runtime;
}
