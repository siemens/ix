/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export type TypographyVariants =
  | 'x-small'
  | 'small'
  | 'caption'
  | 'caption-single'
  | 'default'
  | 'default-single'
  | 'default-title'
  | 'default-title-single'
  | 'large'
  | 'large-single'
  | 'h2'
  | 'display-large';

/**
 * @deprecated Will be removed with 3.0.0
 */
export const VariantsMapping: Record<TypographyVariants, string> = {
  'x-small': 'text-xs',
  small: 'text-s',
  caption: 'text-caption',
  'caption-single': 'text-caption-single',
  default: 'text-default',
  'default-single': 'text-default-single',
  large: 'text-l',
  'large-single': 'text-l-single',
  h2: 'text-h2',
  'display-large': 'text-xl',
  'default-title': 'text-default-title',
  'default-title-single': 'text-default-title-single',
};
