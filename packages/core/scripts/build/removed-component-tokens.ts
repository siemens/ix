/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'node:fs';
import path from 'node:path';

export function readRemovedComponentTokens() {
  const section = fs
    .readFileSync(
      path.resolve('../../BREAKING_CHANGES/v6_components_tokens.md'),
      'utf8'
    )
    .replaceAll('\r\n', '\n')
    .split('## Removed deprecated component tokens\n')[1]
    ?.split('\n## ')[0];

  if (!section) {
    throw new Error('Missing removed component-token migration tables.');
  }

  return [
    ...section.matchAll(
      /^\|\s*`(--theme-[a-z0-9-]+)`\s*\|\s*(?:`(--si-sys-[a-z0-9-]+)`|(no replacement))\s*\|$/gm
    ),
  ].map((match) => ({
    name: match[1],
    replacement: match[2] ?? match[3],
  }));
}
