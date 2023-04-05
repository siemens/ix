/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Prop } from '@stencil/core';
import { VariantsMapping } from './type-mapping';

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

export type TypographyColors =
  | 'contrast'
  | 'std'
  | 'soft'
  | 'weak'
  | 'inv-contrast'
  | 'inv-std'
  | 'inv-soft'
  | 'inv-weak'
  | 'alarm';

/**
 * @internal
 */
@Component({
  tag: 'ix-typography',
  styleUrl: 'typography.scss',
  shadow: true,
})
export class IxTypography {
  /**
   * Font variant based on theme variables
   */
  @Prop() variant: TypographyVariants = 'default';

  /**
   * Text color based on theme variables
   */
  @Prop() color: TypographyColors;

  render() {
    const typographyClass = {
      [VariantsMapping[this.variant]]: true,
    };

    const fontColor =
      this.color !== undefined
        ? `var(--theme-color-${this.color}-text)`
        : 'inherit';

    return (
      <div
        class={typographyClass}
        style={{
          color: fontColor,
        }}
      >
        <slot></slot>
      </div>
    );
  }
}
