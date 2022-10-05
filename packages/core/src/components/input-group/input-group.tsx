/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-input-group',
  styleUrl: 'input-group.scss',
  scoped: true,
})
export class InputGroup {
  @Element() host!: HTMLIxInputGroupElement;

  componentDidRender() {
    let paddingRight = 15;
    let paddingLeft = 15;
    this.host.querySelectorAll('[slot="input-end"]').forEach((item) => {
      item.classList.add('input-group-label');
      paddingRight += item.getBoundingClientRect().width;
    });

    this.host.querySelectorAll('[slot="input-start"]').forEach((item) => {
      item.classList.add('input-group-label');
      paddingLeft += item.getBoundingClientRect().width;
    });

    const inputElement = this.host.querySelector(
      'input.form-control'
    ) as HTMLInputElement;

    if (inputElement) {
      inputElement.style.paddingRight = paddingRight + 'px';
      inputElement.style.paddingLeft = paddingLeft + 'px';
    } else {
      console.warn(
        'You used the ix-input-group without an input-tag, e.g. <input class="form-control" />'
      );
    }
  }

  render() {
    return (
      <Host>
        <div class="group group-start">
          <slot name="input-start"></slot>
        </div>
        <slot></slot>
        <div class="group group-end">
          <slot name="input-end"></slot>
        </div>
      </Host>
    );
  }
}
