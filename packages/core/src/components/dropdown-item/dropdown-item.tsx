/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, Element, Event, EventEmitter, h, Host, Method, Prop } from '@stencil/core';

@Component({
  tag: 'cw-dropdown-item',
  styleUrl: 'dropdown-item.scss',
  scoped: true,
})
export class DropdownItem {
  @Element() hostElement!: HTMLCwDropdownItemElement;

  /**
   * Label of dropdown item
   */
  @Prop() label: string;

  /**
   * Icon of dropdown item
   */
  @Prop() icon: string;

  /**
   * Display hover state
   */
  @Prop() hover = false;

  /**
   * Disable item and remove event listeners
   */
  @Prop() disabled = false;

  /**
   * Whether the item is checked or not. If true a checkmark will mark the item as checked.
   */
  @Prop() checked = false;

  /**
   * Click on item
   */
  @Event() itemClick: EventEmitter<HTMLCwDropdownItemElement>;

  /**
   * Internal usage only
   */
  @Method()
  async emitItemClick() {
    this.itemClick.emit(this.hostElement);
  }

  render() {
    return (
      <Host
        class={{
          checked: this.checked,
          'icon-text': this.label !== undefined && this.icon !== undefined,
          'icon-only': this.label === undefined && this.icon !== undefined,
        }}
      >
        <button
          class={{
            'dropdown-item': true,
            'hover': this.hover,
            'disabled': this.disabled,
          }}
          onClick={() => this.emitItemClick()}
        >
          {this.checked ? (
            <cw-icon class="checkmark" name="single-check" size='16'></cw-icon>
          ) : null}
          {this.icon ? (
            <span
              class={{
                glyph: true,
                [`glyph-${this.icon}`]: true,
              }}
            ></span>
          ) : null}
          {this.label ? <span class="label">{this.label}</span> : null}
          <slot></slot>
        </button>
      </Host>
    );
  }
}
