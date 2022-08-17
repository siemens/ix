/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
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
      throw Error('ix-select-item must have a `value` property');
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
