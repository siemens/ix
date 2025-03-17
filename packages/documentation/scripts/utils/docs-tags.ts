/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { escapeMarkdown } from './escape';

export function convertDocsTagsToTSXElement(
  tagName: string,
  docsTags: {
    name: string;
    text: string;
  }[]
) {
  return docsTags.map((tag) => {
    const { name, text } = tag;
    const escapedText = escapeMarkdown(text).replace(/`/g, '\\`');
    let template = '';
    if (name === 'since') {
      template = `<SinceTag message={\`${escapedText}\`} />`;
    }

    if (name === 'deprecated') {
      template = `<DeprecatedTag message={\`${escapedText}\`} />`;
    }

    if (template === '') {
      console.warn(`Unknown tag: ${name} within ${tagName}`);
    }

    return {
      rTag: template,
    };
  });
}
