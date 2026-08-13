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
    alarm: '--si-sys-text-danger',
    'alarm-contrast': '--si-sys-text-on-danger',
    contrast: '--si-sys-text-primary',
    'critical-contrast': '--si-sys-text-on-warning',
    'info-contrast': '--si-sys-text-on-information',
    'inv-contrast': '--si-sys-text-inverse',
    'inv-soft': '--si-sys-text-inverse',
    'inv-std': '--si-sys-text-inverse',
    'inv-weak': '--si-sys-text-inverse',
    'neutral-contrast': '--si-sys-text-primary',
    'primary-contrast': '--si-sys-text-on-accent',
    soft: '--si-sys-text-secondary',
    std: '--si-sys-text-primary',
    'success-contrast': '--si-sys-text-on-success',
    'warning-contrast': '--si-sys-text-on-warning',
    weak: '--si-sys-text-disabled',
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
