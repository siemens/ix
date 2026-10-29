/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import type {
  TypographyFormat,
  TextDecoration,
  TypographyColors,
} from './typography.types';

/**
 * Applies consistent text styling based on the design system's typography scale.
 *
 * @documentation https://ix.siemens.io//docs/styles/typography/guide.md
 * @figma-main-component-id 40211:13267
 *
 * @slot - Typography content.
 */
@Component({
  tag: 'ix-typography',
  styleUrl: 'typography.scss',
  shadow: true,
})
export class IxTypography {
  private static readonly textColors: Record<TypographyColors, string> = {
    caution: '--si-sys-color-text-caution',
    critical: '--si-sys-color-text-critical',
    danger: '--si-sys-color-text-danger',
    disabled: '--si-sys-color-text-disabled',
    information: '--si-sys-color-text-information',
    inverse: '--si-sys-color-text-inverse',
    'on-accent': '--si-sys-color-text-on-accent',
    'on-caution': '--si-sys-color-text-on-caution',
    'on-critical': '--si-sys-color-text-on-critical',
    'on-danger': '--si-sys-color-text-on-danger',
    'on-information': '--si-sys-color-text-on-information',
    'on-neutral': '--si-sys-color-text-on-neutral',
    'on-success': '--si-sys-color-text-on-success',
    'on-warning': '--si-sys-color-text-on-warning',
    primary: '--si-sys-color-text-primary',
    secondary: '--si-sys-color-text-secondary',
    success: '--si-sys-color-text-success',
    warning: '--si-sys-color-text-warning',
  };

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
    return `var(${IxTypography.textColors[color]})`;
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
