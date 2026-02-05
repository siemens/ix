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
  Mixin,
} from '@stencil/core';
import { DropdownItemWrapper } from '../dropdown/dropdown-controller';
import {
  IX_FOCUS_VISIBLE,
  IX_FOCUS_VISIBLE_ACTIVE,
} from '../utils/focus/focus-utilities';
import { FocusVisibleMixin } from '../utils/internal/mixins/focus-visible.mixin';
import { makeRef } from '../utils/make-ref';
import {
  IxSelectItemLabelChangeEvent,
  IxSelectItemValueChangeEvent,
} from './events';
import { DefaultMixins } from '../utils/internal/component';
import { ComponentIdMixin } from '../utils/internal/mixins/id.mixin';
import { A11yAttributes, a11yHostAttributes } from '../utils/a11y';

@Component({
  tag: 'ix-select-item',
  styleUrl: 'select-item.scss',
  shadow: {
    delegatesFocus: false,
  },
})
export class SelectItem
  extends Mixin(...DefaultMixins, FocusVisibleMixin, ComponentIdMixin)
  implements DropdownItemWrapper
{
  @Element() override hostElement!: HTMLIxSelectItemElement;

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
  private readonly dropdownItemRef = makeRef<HTMLIxDropdownItemElement>();

  private inheritAriaAttributes: A11yAttributes = {};

  override componentDidLoad(): void {
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement);
  }

  /** @internal */
  @Method()
  async getDropdownItemElement(): Promise<HTMLIxDropdownItemElement> {
    return this.dropdownItemRef.waitForCurrent();
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

  override componentDidRender() {
    if (this.value === undefined || this.value === null) {
      console.warn('ix-select-item must have a `value` property');
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

  override render() {
    const ariaAttributes = {
      ...this.inheritAriaAttributes,
      'aria-label': this.inheritAriaAttributes['aria-label'] ?? this.label,
    };
    return (
      <Host
        {...ariaAttributes}
        id={this.getHostElementId()}
        class={{
          [IX_FOCUS_VISIBLE]: true,
        }}
      >
        <ix-dropdown-item
          role="option"
          class={{
            'select-item-checked': this.selected,
            [IX_FOCUS_VISIBLE_ACTIVE]: this.ixFocusVisible,
          }}
          checked={this.selected}
          label={this.label ? this.label : this.value}
          onItemClick={(e) => this.onItemClick(e)}
          ref={(ref) => {
            this.dropdownItemRef(ref);
            ref!.tabIndex = -1;
          }}
        ></ix-dropdown-item>
      </Host>
    );
  }
}
