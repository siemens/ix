/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function renderSinceTag(value: string) {
  return `<span className="Api__Table Docs__Tag">Since: ${value}</span>`;
}

export function renderDeprecatedTag(value: string) {
  return `<span className="Api__Table Docs__Tag Docs__Tag__Deprecated" title="${value}">Deprecated: ${value}</span>`;
}

export function appendDocsTags(name, docsTags) {
  let value = name;
  docsTags.forEach((docsTag) => {
    if (docsTag.name === 'since') {
      value += renderSinceTag(docsTag.text);
    }

    if (docsTag.name === 'deprecated') {
      value += renderDeprecatedTag(docsTag.text);
    }
  });
  return value;
}
