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

export async function fetchSourceForAngular(baseUrl: string, name: string) {
  const snippets: Record<string, string> = {};
  const tsFile = await docusaurusFetch(`${baseUrl}/${name}.ts`);

  snippets[`${name}.ts`] = tsFile;

  const regex = /styleUrls:\s*\[\s*['"]([^'"]+)['"]\s*\]/;
  const match = tsFile.match(regex);

  const htmlFIle = await docusaurusFetch(`${baseUrl}/${name}.html`);
  if (htmlFIle) {
    snippets[`${name}.html`] = htmlFIle;
  }

  if (match) {
    const styleFile = await docusaurusFetch(`${baseUrl}/${match[1]}`);

    if (styleFile) {
      snippets[`${match[1]}`] = styleFile;
    }
  }

  return snippets;
}

export function getAngularTestAppGithubPath(name: string) {
  const base = getBranchPath(TargetFramework.ANGULAR);

  return `${base}/src/preview-examples/${name}.ts`;
}
