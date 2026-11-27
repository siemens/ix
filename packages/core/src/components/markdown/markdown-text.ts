/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Nodes } from 'mdast';

export const textOf = (node: Nodes): string => {
  if ('children' in node) {
    return (node.children as Nodes[]).map(textOf).join('');
  }
  if (node.type === 'image') {
    return node.alt ?? '';
  }
  return 'value' in node && typeof node.value === 'string' ? node.value : '';
};
