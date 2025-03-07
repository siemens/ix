/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TargetFramework } from '../PlaygroundV2/framework-types';
import { getBranchPath } from '../PlaygroundV2/utils';
import { docusaurusFetch } from './fetching';

async function fetchFile(
  snippets: Record<string, string>,
  url: string,
  fileName: string,
  removeComments?: boolean
) {
  try {
    const file = await docusaurusFetch(url, removeComments);

    if (file) {
      snippets[fileName] = file;
    }
  } catch (e) {}
}

export async function fetchSourceForAngular(
  baseUrl: string,
  name: string,
  removeComments?: boolean
) {
  const snippets: Record<string, string> = {};

  await fetchFile(
    snippets,
    `${baseUrl}/${name}.html`,
    `${name}.html`,
    removeComments
  );

  await Promise.all([
    fetchFile(snippets, `${baseUrl}/${name}.ts`, `${name}.ts`, removeComments),
    fetchFile(
      snippets,
      `${baseUrl}/${name}.css`,
      `${name}.css`,
      removeComments
    ),
  ]);

  return snippets;
}

export function getAngularTestAppGithubPath(name: string) {
  const base = getBranchPath(TargetFramework.ANGULAR);

  return `${base}/src/preview-examples/${name}.ts`;
}
