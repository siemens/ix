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
  Listen,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'ix-event-list-item',
  styleUrl: 'event-list-item.scss',
  scoped: false,
})
export class EventListItem {
  @Element() el!: HTMLIxEventListItemElement;

  /**
   * Color of the status indicator.
   * Allowed values are all Core UI color names.
   */
  @Prop() color: string;

  /**
   * Show event list item as selected
   */
  @Prop() selected: boolean;

  /**
   * Disable event list item
   */
  @Prop() disabled: boolean;

  /**
   * Show chevron on right side of the event list item
   */
  @Prop() chevron: boolean;

  /**
   * Opacity of the status indicator.
   * Defaults to 1.0
   *
   * @deprecated Will be removed in 2.0.0
   */
  @Prop() opacity = 1;

  /**
   * Event list item click
   */
  @Event() itemClick: EventEmitter;

  @Listen('click', { passive: true })
  handleItemClick() {
    this.itemClick.emit();
  }

  render() {
    return (
      <div
        class={{
          'ix-event-list-item': true,
          selected: this.selected,
          disabled: this.disabled,
        }}
      >
        <div
          class={`indicator ${!this.color ? 'indicator-empty' : ''}`}
          style={{
            'background-color': this.color
              ? `var(--theme-${this.color})`
              : 'inherit',
            opacity: `${this.disabled ? 0.4 : this.opacity}`,
          }}
        ></div>

        <div class="event-list-item-container">
          <div class="event-content">
            <slot></slot>
          </div>
          {this.chevron ? (
            <i class="glyph glyph-16 glyph-chevron-right chevron-icon"></i>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
