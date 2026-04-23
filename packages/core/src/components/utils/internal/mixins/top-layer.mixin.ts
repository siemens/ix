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

export interface TopLayerMixinContract {
  suppressTopLayer: boolean;
  readonly useTopLayer: boolean;
}

export const TopLayerMixin = <B extends MixedInCtor<StencilLifecycle>>(
  Base: B
) => {
  class TopLayerMixinCtor extends Base implements TopLayerMixinContract {
    /**
     * Suppress Popover API rendering for dropdown.
     *
     * @default false
     * @since 5.0.0
     */
    @Prop() suppressTopLayer: boolean = false;

    get useTopLayer() {
      return !this.suppressTopLayer;
    }
  }

  return TopLayerMixinCtor;
};
