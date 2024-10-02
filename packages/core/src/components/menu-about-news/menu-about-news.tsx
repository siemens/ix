/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-menu-about-news',
  styleUrl: 'menu-about-news.scss',
  shadow: true,
})
export class MenuAboutNews {
  /**
   * Show about news
   */
  @Prop({ mutable: true, reflect: true }) show = false;

  /**
   * Title of the about news
   */
  @Prop() label: string;

  /**
   *
   */
  @Prop() i18nShowMore = 'Show more';

  /**
   * Subtitle of the about news
   */
  @Prop() aboutItemLabel: string;

  /**
   * Bottom offset
   */
  @Prop() offsetBottom = 0;

  /**
   * Show More button is pressed
   */
  @Event() showMore: EventEmitter<MouseEvent>;

  /**
   * Popover closed
   */
  @Event() closePopover: EventEmitter<void>;

  /**
   * Internal
   */
  @Prop() expanded = false;

  render() {
    return (
      <Host
        class={{
          expanded: this.expanded,
          show: !this.show,
        }}
      >
        <div class="banner-container">
          <ix-icon
            color="color-inv-contrast-text"
            name={'shout'}
            size="32"
          ></ix-icon>
          <svg viewBox="0 0 48 56" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0 0 48 0 48 56 24 48 0 56" />
          </svg>
        </div>

        <div class="cui-popover-news-header">
          <ix-typography format="label" bold>
            {this.label}
          </ix-typography>
        </div>

        <ix-icon-button
          size="24"
          icon={'close'}
          ghost
          onClick={() => {
            this.show = false;
            this.closePopover.emit();
          }}
        ></ix-icon-button>
        <div class="slot-container">
          <slot></slot>
        </div>
        {this.aboutItemLabel ? (
          <div class="cui-popover-news-footer">
            <ix-button
              variant="primary"
              onClick={(e) => {
                this.show = false;
                this.showMore.emit(e);
              }}
            >
              {this.i18nShowMore}
            </ix-button>
          </div>
        ) : null}
        <div id="arrow"></div>
      </Host>
    );
  }
}
