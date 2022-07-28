/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'cw-menu-avatar-item',
  styleUrl: 'menu-avatar-item.css',
  scoped: true,
})
export class MenuAvatarItem {
  /**
   * Avatar dropdown icon
   */
  @Prop() icon: string;

  /**
   * Avatar dropdown label
   */
  @Prop() label: string;

  /**
   * Avatar dropdown item clicked
   */
  @Event() itemClick: EventEmitter<MouseEvent>;

  @Element() hostElement: HTMLCwMenuAvatarItemElement;

  render() {
    return <cw-dropdown-item icon={this.icon} label={this.label} onClick={e => this.itemClick.emit(e)}></cw-dropdown-item>;
  }
}
