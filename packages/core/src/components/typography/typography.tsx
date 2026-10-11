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
    alarm: '--si-sys-color-text-danger',
    'alarm-contrast': '--si-sys-color-text-on-danger',
    contrast: '--si-sys-color-text-primary',
    'critical-contrast': '--si-sys-color-text-on-warning',
    'info-contrast': '--si-sys-color-text-on-information',
    'inv-contrast': '--si-sys-color-text-inverse',
    'inv-soft': '--si-sys-color-text-inverse',
    'inv-std': '--si-sys-color-text-inverse',
    'inv-weak': '--si-sys-color-text-inverse',
    'neutral-contrast': '--si-sys-color-text-primary',
    'primary-contrast': '--si-sys-color-text-on-accent',
    soft: '--si-sys-color-text-secondary',
    std: '--si-sys-color-text-primary',
    'success-contrast': '--si-sys-color-text-on-success',
    'warning-contrast': '--si-sys-color-text-on-warning',
    weak: '--si-sys-color-text-disabled',
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
