/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { MixedInCtor } from '@stencil/core';
import { StencilLifecycle } from '../component';

let componentId = 0;

export const ComponentIdMixin = <B extends MixedInCtor<StencilLifecycle>>(
  Base: B
) => {
  class ComponentIdMixinCtor extends Base {
    $internal_id = ++componentId;

    getHostElementId(): string {
      if (this.hostElement) {
        if (this.hostElement.id !== '') {
          return this.hostElement.id;
        }

        const tagName = this.hostElement.tagName.toLowerCase();
        return `ix-component-${tagName}-${this.$internal_id}`;
      }

      return `ix-component-${this.$internal_id}`;
    }
  }

  return ComponentIdMixinCtor;
};
