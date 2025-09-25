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
  Listen,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'ix-group-item',
  styleUrl: 'group-item.scss',
  shadow: true,
})
export class GroupItem {
  @Element() hostElement!: HTMLIxGroupItemElement;

  /**
   * Group item icon
   */
  @Prop() icon?: string;

  /**
   * ARIA label for the icon
   */
  @Prop() ariaLabelIcon?: string;

  /**
   * Group item text
   */
  @Prop() text?: string;

  /**
   * Group item secondary text
   */
  @Prop() secondaryText?: string;

  /**
   * Supress the selection of the group
   */
  @Prop() suppressSelection = false;

  /**
   * Show selected state
   */
  @Prop() selected: boolean = false;

  /**
   * Disable the group item.
   * The elements tabindex attribute will get set accordingly.
   *
   * If false tabindex will be 0, -1 otherwise.
   */
  @Prop() disabled = false;

  /**
   * Selection changed
   */
  @Event() selectedChanged!: EventEmitter<HTMLIxGroupItemElement>;

  /**
   * Index
   */
  @Prop() index?: number;

  @Listen('click', { passive: true })
  clickListen() {
    this.selectedChanged.emit(this.hostElement);
  }

  render() {
    return (
      <Host
        class={{
          selected: this.selected && !this.suppressSelection,
        }}
      >
        <button tabindex={this.disabled ? -1 : 0}>
          <div class="group-entry-selection-indicator"></div>
          {this.icon ? (
            <ix-icon
              size="16"
              name={this.icon}
              aria-label={this.ariaLabelIcon}
            ></ix-icon>
          ) : null}
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
        </button>
      </Host>
    );
  }
}
