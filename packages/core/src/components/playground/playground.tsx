/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Host, h } from '@stencil/core';

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
        <ix-radio-group>
          <ix-radio label="Option 1" value="option1"></ix-radio>
          <ix-radio label="Option 2" value="option2" checked></ix-radio>
          <ix-radio label="Option 3" value="option3"></ix-radio>
        </ix-radio-group>
      </Host>
    );
  }
}
