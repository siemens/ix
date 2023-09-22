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
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'ix-event-list-item',
  styleUrl: 'event-list-item.scss',
  shadow: true,
})
export class EventListItem {
  /**
   * Color of the status indicator.
   * You can find a list of all available colors in our documentation.
   * Example values are `--theme-color-alarm` or `color-alarm`
   *
   * @see https://ix.siemens.io/docs/theming/colors/
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
   * Event list item click
   */
  @Event() itemClick: EventEmitter;

  @Listen('click', { passive: true })
  handleItemClick() {
    this.itemClick.emit();
  }

  render() {
    const color = this.color?.startsWith('--theme')
      ? `var(${this.color})`
      : `var(--theme-${this.color})`;

    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
      >
        <div
          class={{
            'event-list-item': true,
            selected: this.selected,
            disabled: this.disabled,
          }}
        >
          <div
            class={`indicator ${!this.color ? 'indicator-empty' : ''}`}
            style={{
              'background-color': this.color ? color : 'inherit',
              opacity: `${this.disabled ? 0.4 : 1}`,
            }}
          ></div>

          <div class="event-list-item-container">
            <div class="event-content">
              <slot></slot>
            </div>
            {this.chevron && (
              <ix-icon
                name={'chevron-right'}
                size="16"
                class="chevron-icon"
              ></ix-icon>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
