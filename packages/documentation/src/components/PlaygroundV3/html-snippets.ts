/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { fetchCode } from './fetching';

export async function fetchSourceForHtml(baseUrl: string, name: string) {
  const snippets: Record<string, string> = {};
  const tsFile = await fetchCode(`${baseUrl}/${name}.html`);

  snippets[`${name}.html`] = tsFile;

  const regex =
    /<link\s*rel=\"stylesheet\"\s*href=['"]\.\/styles\/([^'"]+)['"]\s* \/>/;
  const match = tsFile.match(regex);

  if (match) {
    const styleFile = await fetchCode(`${baseUrl}/styles/${match[1]}`);

    if (styleFile) {
      snippets[`${match[1]}`] = styleFile;
    }
  }

  return snippets;
}
