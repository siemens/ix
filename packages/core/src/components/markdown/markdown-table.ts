/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Nodes } from 'mdast';
import { LINE_BREAK_HTML } from './markdown-html';

export const cellText = (node: Nodes): string => {
  if (node.type === 'break') {
    return '\n';
  }
  if (node.type === 'html') {
    return LINE_BREAK_HTML.test(node.value.trim()) ? '\n' : node.value;
  }
  if ('children' in node) {
    return (node.children as Nodes[]).map(cellText).join('');
  }
  return 'value' in node && typeof node.value === 'string' ? node.value : '';
};

const escapeCsv = (value: string) =>
  /[",\r\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;

export const toCsv = (rows: string[][]) =>
  rows.map((row) => row.map(escapeCsv).join(',')).join('\r\n');

export const downloadCsv = (document: Document, csv: string) => {
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'table.csv';
  link.hidden = true;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};
