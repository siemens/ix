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
  const response = await docusaurusFetch(
    `${baseUrl}code-runtime/react/vite.config.ts`
  );

  const files = [
    'vite.config.ts',
    'tsconfig.mode.json',
    'tsconfig.json',
    'package.json',
    'index.html',
    '.eslintrc.js',
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
  return runtime;
}
