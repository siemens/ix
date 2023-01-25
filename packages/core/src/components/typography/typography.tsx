/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Prop } from '@stencil/core';
import { TypographyVariants, VariantsMapping } from './types';

@Component({
  tag: 'ix-typography',
  styleUrl: 'typography.scss',
  shadow: true,
})
export class IxTypography {
  /**
   * Font variant
   */
  @Prop() variant: TypographyVariants = 'default';

  render() {
    const typographyClass = {
      [VariantsMapping[this.variant]]: true,
    };
    return (
      <div class={typographyClass}>
        <slot></slot>
      </div>
    );
  }
}
