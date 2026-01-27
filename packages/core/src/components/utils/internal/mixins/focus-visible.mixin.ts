/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { MixedInCtor, Prop } from '@stencil/core';
import { StencilLifecycle } from '../component';

export const FocusVisibleMixin = <B extends MixedInCtor<StencilLifecycle>>(
  Base: B
) => {
  class FocusVisibleMixinCtor extends Base {
    @Prop({ reflect: true }) ixFocusVisible = false;

    componentDidLoad(): void {
      if (super.componentDidLoad) {
        super.componentDidLoad();
      }
    }
  }

  return FocusVisibleMixinCtor;
};
