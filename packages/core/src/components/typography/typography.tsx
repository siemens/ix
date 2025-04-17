/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

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

export type TypographyFormat =
  | TypographyFormatLabel
  | TypographyFormatBody
  | TypographyFormatDisplay
  | TypographyFormatHeading
  | TypographyFormatCode;

export type TextDecoration = 'none' | 'underline' | 'line-through';

@Component({
  tag: 'ix-typography',
  styleUrl: 'typography.scss',
  shadow: true,
})
export class IxTypography {
  /**
   * Text format
   */
  @Prop() format?: TypographyFormat;

  /**
   * Text color based on theme variables
   */
  @Prop() textColor?: TypographyColors;

  /**
   * Display text bold
   */
  @Prop() bold = false;

  /**
   * Text decoration
   */
  @Prop() textDecoration: TextDecoration = 'none';

  private static getTextColor(color: TypographyColors) {
    if (color.startsWith('inv-') || !color.endsWith('-contrast')) {
      return `var(--theme-color-${color}-text)`;
    }

    return `var(--theme-color-${color.replace('-', '--')})`;
  }

  render() {
    let typographyClass: Record<string, boolean> = {};
    typographyClass[`typography-${this.format ?? 'body'}`] = true;

    if (this.textDecoration !== 'none') {
      typographyClass[`typography-decoration-${this.textDecoration}`] = true;
    }

    typographyClass['typography-weight-bold'] = this.bold;

    let style = {};

    if (this.textColor) {
      style = {
        color: IxTypography.getTextColor(this.textColor),
      };
    }

    return (
      <Host class={typographyClass} style={style}>
        <slot></slot>
      </Host>
    );
  }
}
