/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'cw-group-item',
  styleUrl: 'group-item.scss',
  scoped: true,
})
export class GroupItem {
  @Element() hostElement!: HTMLCwGroupItemElement;

  /**
   * Group item icon
   */
  @Prop() icon: string;

  /**
   * Group item text
   */
  @Prop() text: string;

  /**
   * Group item secondary text
   */
  @Prop() secondaryText: string;

  /**
   * Supress the selection of the group
   */
  @Prop() suppressSelection = false;

  /**
   * Show selected state
   */
  @Prop() selected: boolean;

  /**
   * Selection changed
   */
  @Event() selectedChanged: EventEmitter<HTMLCwGroupItemElement>;

  /**
   * Index
   */
  @Prop() index: number;

  @Listen('click', { passive: true })
  clickListen() {
    if (this.suppressSelection) {
      return;
    }
    this.selectedChanged.emit(this.hostElement);
  }

  render() {
    return (
      <Host
        class={{
          'selected': this.selected && !this.suppressSelection,
          'suppress-selection': this.suppressSelection,
        }}
        tabindex="0"
      >
        <div class="group-entry-selection-indicator"></div>
        {this.icon ? <cw-icon size="16" name={this.icon}></cw-icon> : null}
        {this.text ? (
          <span class="group-entry-text">
            <span title={this.text}>{this.text}</span>
          </span>
        ) : null}
        {this.secondaryText ? (
          <span class="group-entry-text-secondary">
            <span title={this.secondaryText}>{this.secondaryText}</span>
          </span>
        ) : null}
        <slot></slot>
      </Host>
    );
  }
}
