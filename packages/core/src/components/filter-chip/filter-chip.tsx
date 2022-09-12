/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
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
    Prop
} from '@stencil/core';

@Component({
  tag: 'ix-filter-chip',
  styleUrl: 'filter-chip.scss',
  scoped: true,
})
export class FilterChip {
  @Element() el: HTMLIxFilterChipElement;

  /**
   * If true the filter chip will be in disabled state
   */
  @Prop() disabled = false;

  /**
   * Close clicked
   */
  @Event() closeClick: EventEmitter<void>;

  private onCloseClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.closeClick.emit();
  }

  render() {
    return (
      <Host class={{ disabled: this.disabled }} title={this.el.textContent}>
        <div class="slot-container">
          <slot></slot>
        </div>
        <button
          disabled={this.disabled}
          class="btn btn-invisible-secondary btn-oval"
          onClick={(e) => this.onCloseClick(e)}
        >
          <ix-icon name="close-small" size="16"></ix-icon>
        </button>
      </Host>
    );
  }
}
