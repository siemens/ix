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
  Watch,
} from '@stencil/core';
import { IxSelectItemLabelChangeEvent } from './events';

@Component({
  tag: 'ix-select-item',
  styleUrl: 'select-item.scss',
  scoped: true,
})
export class SelectItem {
  @Element() hostElement: HTMLIxSelectItemElement;

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
   * @internal
   */
  @Prop() hover = false;

  /**
   * Item clicked
   */
  @Event() itemClick: EventEmitter<string>;

  /**
   * @internal
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
      throw Error('ix-select-item must have a `value` property');
    }
  }

  @Watch('label')
  labelChange(newValue: string, oldValue: string) {
    this.hostElement.dispatchEvent(
      new IxSelectItemLabelChangeEvent({
        newValue: newValue,
        oldValue: oldValue,
      })
    );
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
