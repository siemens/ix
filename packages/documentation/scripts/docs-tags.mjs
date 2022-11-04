/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 *
 * @param {string} name
 * @param {Array<{ name: string, text: string }>} docsTags
 * @returns
 */
export function appendDocsTags(name, docsTags) {
  let value = name;
  docsTags.forEach((docsTag) => {
    if (docsTag.name === 'since') {
      value += `<span className="Api__Table Docs__Tag">Since: ${docsTag.text}</span>`;
    }
  });
  return value;
}
