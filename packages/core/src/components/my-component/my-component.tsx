/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  @State() initialOpened: number = 3;
  @State() individualBlindOpen: boolean = true;
  @State() disableAccordion: boolean = false;

  render() {
    return (
      <Host>
        <ix-blind-group disableAccordion={true}>
          <ix-blind label="Example">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          </ix-blind>
          <ix-blind label="Example">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          </ix-blind>
          <ix-blind label="Example">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          </ix-blind>
        </ix-blind-group>
      </Host>
    );
  }
}
