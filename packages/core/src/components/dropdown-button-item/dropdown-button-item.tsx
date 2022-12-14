/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'ix-dropdown-button-item',
  styleUrl: 'dropdown-button-item.scss',
  scoped: true,
})
export class DropdownButtonItem {
  @Element() hostElement: HTMLIxDropdownButtonElement;

  /**
   * Displayed name of the item
   */
  @Prop({ reflect: true }) label: string;

  /**
   * Item value
   */
  @Prop({ reflect: true }) value!: any;

  /**
   * Whether the item is selected.
   */
  @Prop() selected = false;

  /**
   * ***Internal***
   */
  @Prop() hover = false;

  /**
   * Item clicked
   */
  @Event() itemClick: EventEmitter<string>;

  /**
   * Internal
   * @param event
   */
  @Method()
  async onItemClick(event?: CustomEvent<HTMLIxDropdownItemElement>) {
    event?.preventDefault();
    event?.stopPropagation();

    this.itemClick.emit(this.value);
  }

  componentDidRender() {
    if (!this.value) {
      throw Error('ix-dropdown-button-item must have a `value` property');
    }
  }

  render() {
    return (
      <Host>
        <ix-dropdown-item
          checked={this.selected}
          hover={this.hover}
          label={this.label ? this.label : this.value}
          onItemClick={(e) => this.onItemClick(e)}
        ></ix-dropdown-item>
      </Host>
    );
  }
}
