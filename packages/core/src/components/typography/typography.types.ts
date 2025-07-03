/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
type TypographyFormatLabel = 'label' | 'label-xs' | 'label-sm' | 'label-lg';
type TypographyFormatBody = 'body' | 'body-xs' | 'body-sm' | 'body-lg';
type TypographyFormatDisplay =
  | 'display'
  | 'display-xs'
  | 'display-sm'
  | 'display-lg'
  | 'display-xl'
  | 'display-xxl';
type TypographyFormatHeading = 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
type TypographyFormatCode = 'code' | 'code-sm' | 'code-lg';

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
  | 'large-title'
  | 'large-title-single'
  | 'h2'
  | 'display-large';

export type TypographyColors =
  | 'alarm'
  | 'alarm-contrast'
  | 'contrast'
  | 'critical-contrast'
  | 'info-contrast'
  | 'inv-contrast'
  | 'inv-soft'
  | 'inv-std'
  | 'inv-weak'
  | 'neutral-contrast'
  | 'primary-contrast'
  | 'soft'
  | 'std'
  | 'success-contrast'
  | 'warning-contrast'
  | 'weak';

export type TypographyFormat =
  | TypographyFormatLabel
  | TypographyFormatBody
  | TypographyFormatDisplay
  | TypographyFormatHeading
  | TypographyFormatCode;

export type TextDecoration = 'none' | 'underline' | 'line-through';
