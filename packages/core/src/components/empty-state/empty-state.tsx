/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

export type EmptyStateLayout = 'large' | 'compact' | 'compactBreak';

/**
 * @since 1.6.0
 */
@Component({
  tag: 'ix-empty-state',
  styleUrl: 'empty-state.scss',
  shadow: true,
})
export class EmptyState {
  /**
   * Optional empty state layout - one of 'large', 'compact' or 'compactBreak'
   */
  @Prop() layout: EmptyStateLayout = 'large';

  /**
   * Optional empty state icon
   */
  @Prop() icon: string;

  /**
   * Empty state header
   */
  @Prop() header!: string;

  /**
   * Optional empty state sub header
   */
  @Prop() subHeader: string;

  /**
   * Optional empty state action
   */
  @Prop() action: string;

  /**
   * Empty state action click event
   */
  @Event() actionClick: EventEmitter<void>;

  render() {
    return (
      <Host class={`emptyState emptyState--${this.layout}`}>
        {this.icon && (
          <div class="emptyState__icon">
            {/* TODO: replace size for large layout with '56' if available */}
            <ix-icon
              name={this.icon}
              size={this.layout === 'large' ? '32' : '32'}
              color="color-soft-text"
            />
          </div>
        )}

        <div class="emptyState__content">
          <div class="content__label">
            <ix-typography
              variant={this.layout === 'large' ? 'display-large' : 'default'}
            >
              {this.header}
            </ix-typography>

            {this.subHeader && (
              <div class="label__subHeader">{this.subHeader}</div>
            )}
          </div>

          {this.action && (
            <div class="content__action">
              <ix-button onClick={() => this.actionClick.emit()}>
                {this.action}
              </ix-button>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
