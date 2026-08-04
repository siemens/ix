/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { MixedInCtor, Prop } from '@stencil/core';
import { StencilLifecycle } from '../utils/internal/component';

export interface BaseTabMixinContract {
  tabKey: string;
}

export const BaseTabMixin = <B extends MixedInCtor<StencilLifecycle>>(
  Base: B
) => {
  class BaseTabMixinCtor extends Base implements BaseTabMixinContract {
    /**
     * Key of the tab, used for identifying the tab in events
     *
     * @since 5.0.0
     */
    @Prop() tabKey!: string;
  }

  return BaseTabMixinCtor;
};
