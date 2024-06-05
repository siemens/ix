/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  // shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  scoped: true,
})
export class PlaygroundInternal {
  render() {
    return (
      <Host>
        <div style={{ padding: '4rem' }}>
          <ix-button class="any-class" aria-describedby="tooltip-1">
            Hover me
          </ix-button>
          <ix-tooltip id="tooltip-1" for=".any-class" placement="left">
            Simple selector
          </ix-tooltip>

          <ix-button
            my-custom-special-selector="any-value"
            aria-describedby="tooltip-2"
          >
            Also hover me
          </ix-button>
          <ix-tooltip
            id="tooltip-2"
            for="[my-custom-special-selector='any-value']"
          >
            Custom selector
          </ix-tooltip>
        </div>
      </Host>
    );
  }
}
