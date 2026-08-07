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
 * @slot default - Text content.
 */
@Component({
  tag: 'ix-typography',
  styleUrl: 'typography.scss',
  shadow: true,
})
export class IxTypography {
  private static readonly textColors: Record<TypographyColors, string> = {
    alarm: '--theme-si-sys-text-danger',
    'alarm-contrast': '--theme-si-sys-text-on-danger',
    contrast: '--theme-si-sys-text-primary',
    'critical-contrast': '--theme-si-sys-text-on-warning',
    'info-contrast': '--theme-si-sys-text-on-information',
    'inv-contrast': '--theme-si-sys-text-inverse',
    'inv-soft': '--theme-si-sys-text-inverse',
    'inv-std': '--theme-si-sys-text-inverse',
    'inv-weak': '--theme-si-sys-text-inverse',
    'neutral-contrast': '--theme-si-sys-text-primary',
    'primary-contrast': '--theme-si-sys-text-on-accent',
    soft: '--theme-si-sys-text-secondary',
    std: '--theme-si-sys-text-primary',
    'success-contrast': '--theme-si-sys-text-on-success',
    'warning-contrast': '--theme-si-sys-text-on-warning',
    weak: '--theme-si-sys-text-disabled',
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
