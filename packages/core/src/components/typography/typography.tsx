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
