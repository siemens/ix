/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { fetchCode } from './fetching';

export async function fetchSourceForAngular(baseUrl: string, name: string) {
  const snippets: Record<string, string> = {};
  const tsFile = await fetchCode(`${baseUrl}/${name}.ts`);

  snippets[`${name}.ts`] = tsFile;

  const regex = /styleUrls:\s*\[\s*['"]([^'"]+)['"]\s*\]/;
  const match = tsFile.match(regex);

  const htmlFIle = await fetchCode(`${baseUrl}/${name}.html`);
  if (htmlFIle) {
    snippets[`${name}.html`] = htmlFIle;
  }

  if (match) {
    const styleFile = await fetchCode(`${baseUrl}/${match[1]}`);

    if (styleFile) {
      snippets[`${match[1]}`] = styleFile;
    }
  }

  return snippets;
}
