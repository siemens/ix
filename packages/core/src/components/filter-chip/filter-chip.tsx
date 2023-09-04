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
  Prop,
} from '@stencil/core';

@Component({
  tag: 'ix-filter-chip',
  styleUrl: 'filter-chip.scss',
  shadow: true,
})
export class FilterChip {
  @Element() el: HTMLIxFilterChipElement;

  /**
   * If true the filter chip will be in disabled state
   */
  @Prop() disabled = false;

  /**
   * If true the filter chip will be in readonly mode
   * @since 2.0.0
   */
  @Prop() readonly = false;

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
      <Host
        class={{ disabled: this.disabled, readonly: this.readonly }}
        title={this.el.textContent}
      >
        <div class="slot-container">
          <slot></slot>
        </div>
        {!this.disabled && !this.readonly ? (
          <ix-icon-button
            ghost
            oval
            icon="close-small"
            size="16"
            tabindex={this.disabled ? -1 : 0}
            variant="primary"
            disabled={this.disabled}
            onClick={(e) => this.onCloseClick(e)}
          ></ix-icon-button>
        ) : null}
      </Host>
    );
  }
}
