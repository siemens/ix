/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function convertDocsTagsToTSXElement(
  tagName: string,
  docsTags: {
    name: string;
    text: string;
  }[]
) {
  return docsTags.map((tag) => {
    const { name, text } = tag;
    let template = '';
    if (name === 'since') {
      template = `<ApiTableSinceTag message="${text}" />`;
    }

    if (template === '') {
      console.warn(`Unknown tag: ${name} within ${tagName}`);
    }

    return {
      rTag: template,
    };
  });
}
