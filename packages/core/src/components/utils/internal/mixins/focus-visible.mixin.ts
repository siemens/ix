/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { MixedInCtor, Prop, Watch } from '@stencil/core';
import { StencilLifecycle } from '../component';
import { a11yBoolean } from '../../a11y';

export interface FocusVisibleMixinContract {
  ixFocusVisible: boolean;
  $internal_checkAriaSelected(focusVisible: boolean): void;
}

export const FocusVisibleMixin = <B extends MixedInCtor<StencilLifecycle>>(
  Base: B
) => {
  class FocusVisibleMixinCtor
    extends Base
    implements FocusVisibleMixinContract
  {
    /**
     * @internal
     */
    @Prop({ reflect: true }) ixFocusVisible = false;

    /**
     * @internal
     */
    @Prop() disableAriaSelectHandling: boolean = false;

    override componentDidLoad(): void {
      if (super.componentDidLoad) {
        super.componentDidLoad();
      }

      if (!this.disableAriaSelectHandling) {
      }
    }

    @Watch('ixFocusVisible')
    $internal_checkAriaSelected(focusVisible: boolean) {
      if (!this.hostElement) {
        return;
      }

      this.hostElement.ariaSelected = a11yBoolean(focusVisible);
    }
  }

  return FocusVisibleMixinCtor;
};
