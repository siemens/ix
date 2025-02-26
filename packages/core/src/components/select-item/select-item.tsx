/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
import {
  IxSelectItemLabelChangeEvent,
  IxSelectItemValueChangeEvent,
} from './events';
import { DropdownItemWrapper } from '../dropdown/dropdown-controller';

@Component({
  tag: 'ix-select-item',
  styleUrl: 'select-item.scss',
  shadow: true,
})
export class SelectItem implements DropdownItemWrapper {
  @Element() hostElement!: HTMLIxSelectItemElement;

  /**
   * Displayed name of the item
   */
  @Prop({ reflect: true }) label?: string;

  /**
   * The value of the item.
   * Important: The select component uses string values to handle selection and will call toString() on this value.
   * Therefor a string should be passed to value to prevent unexpected behavior.
   */
  @Prop({ reflect: true }) value!: string;

  /**
   * Flag indicating whether the item is selected
   */
  @Prop() selected = false;

  /**
   * @internal
   */
  @Prop() hover = false;

  /**
   * Item clicked
   */
  @Event() itemClick!: EventEmitter<string>;

  private componentLoaded = false;

  /** @internal */
  @Method()
  async getDropdownItemElement(): Promise<HTMLIxDropdownItemElement> {
    return this.dropdownItem!;
  }

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

  get dropdownItem() {
    return this.hostElement.querySelector('ix-dropdown-item');
  }

  componentDidRender() {
    if (this.value === undefined || this.value === null) {
      throw Error('ix-select-item must have a `value` property');
    }
    this.componentLoaded = true;
  }

  @Watch('value')
  onValueChange(newValue: string, oldValue: string) {
    if (this.componentLoaded) {
      this.hostElement.dispatchEvent(
        new IxSelectItemValueChangeEvent({
          newValue: newValue,
          oldValue: oldValue,
        })
      );
    }
  }

  @Watch('label')
  labelChange(newValue: string, oldValue: string) {
    if (this.componentLoaded) {
      this.hostElement.dispatchEvent(
        new IxSelectItemLabelChangeEvent({
          newValue: newValue,
          oldValue: oldValue,
        })
      );
    }
  }

  render() {
    return (
      <Host>
        <ix-dropdown-item
          class={{
            'select-item-checked': this.selected,
          }}
          checked={this.selected}
          label={this.label ? this.label : this.value}
          onItemClick={(e) => this.onItemClick(e)}
        ></ix-dropdown-item>
      </Host>
    );
  }
}
