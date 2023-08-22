/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ThemeFonts from '.';

export const themeFonts = [
  'label-lg',
  'label',
  'label-sm',
  'label-xs',

  'body-lg',
  'body',
  'body-sm',
  'body-xs',

  'display-xxl',
  'display-xl',
  'display-lg',
  'display',
  'display-sm',
  'display-xs',

  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',

  'code-lg',
  'code',
  'code-sm',
] as const;

type ThemeFonts = typeof themeFonts[keyof typeof themeFonts];

export function getPreview(font: ThemeFonts) {
  const raw = font.valueOf().toLocaleString();

  if (raw.startsWith('h') || raw.startsWith('code')) {
    return LOREM_IPSUM_SHORT;
  }

  if (raw.startsWith('display')) {
    return `12345.678\n87654.321`;
  }

  if (raw.startsWith('label') || raw.startsWith('body')) {
    return LOREM_IPSUM_LONG;
  }

  return LOREM_IPSUM_LONG;
}

export type CodeSelection =
  | 'react'
  | 'angular'
  | 'vue'
  | 'web-component'
  | 'class';

export function getCodeExample(format: ThemeFonts, selection: CodeSelection) {
  if (selection === 'react' || selection === 'vue') {
    return `<IxTypography format="${format}" />`;
  }

  if (selection === 'angular' || selection === 'web-component') {
    return `<ix-typography format="${format}">\n</ix-typography>`;
  }

  return `<span class="typography-${format}">\n</span>`;
}

const LOREM_IPSUM_SHORT = 'Lorem ipsum dolor sit amet consectetur.';
const LOREM_IPSUM_LONG =
  'Lorem ipsum dolor sit amet consectetur. Diam metus integer in ultrices est a. Nulla sed mattis bibendum integer imperdiet sapien at imperdiet hendrerit. Est volutpat morbi cursus morbi urna in vestibulum auctor quis.';
