/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'ix-split-button-item',
  styleUrl: 'split-button-item.css',
  scoped: true,
})
export class SplitButtonItem {
  /**
   * Dropdown icon
   */
  @Prop() icon: string;

  /**
   * Dropdown label
   */
  @Prop() label: string;

  /**
   * Dropdown item clicked
   */
  @Event() itemClick: EventEmitter<MouseEvent>;

  @Element() hostElement: HTMLIxSplitButtonItemElement;

  render() {
    return (
      <ix-dropdown-item
        icon={this.icon}
        label={this.label}
        onClick={(e) => this.itemClick.emit(e)}
      ></ix-dropdown-item>
    );
  }
}
