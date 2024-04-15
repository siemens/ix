/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function escapeMarkdown(markdown: string) {
  let replacedMarkdown = markdown;
  const replacemenets: [RegExp, string][] = [
    [/\*/g, '\\*'],
    [/#/g, '\\#'],
    [/\//g, '\\/'],
    [/\(/g, '\\('],
    [/\)/g, '\\)'],
    [/\[/g, '\\['],
    [/\]/g, '\\]'],
    [/</g, '&lt;'],
    [/>/g, '&gt;'],
    [/_/g, '\\_'],
    [/`/g, '\\`'],
    [/\|/g, '\uff5c'],
  ];

  replacemenets.forEach((replace) => {
    const [source, target] = replace;
    replacedMarkdown = markdown.replaceAll(source, target);
  });

  return replacedMarkdown;
}
