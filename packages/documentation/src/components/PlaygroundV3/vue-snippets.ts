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

export async function fetchSourceForVue(baseUrl: string, name: string) {
  const snippets: Record<string, string> = {};
  const tsFile = await docusaurusFetch(`${baseUrl}/${name}.vue`);

  snippets[`${name}.vue`] = tsFile;

  const regex =
    /<style\s*scoped\s*src=['"]\.\/styles\/([^'"]+)['"]\s*><\/style>/;
  const match = tsFile.match(regex);

  if (match) {
    const styleFile = await docusaurusFetch(`${baseUrl}/styles/${match[1]}`);

    if (styleFile) {
      snippets[`./styles/${match[1]}`] = styleFile;
    }
  }

  return snippets;
}

export function getVueTestAppGithubPath(name: string) {
  const base = getBranchPath(TargetFramework.VUE);

  return `${base}/src/preview-examples/${name}.vue`;
}
