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

export type PageHeaderVariant = 'Primary' | 'Secondary';

@Component({
  tag: 'ix-page-header',
  styleUrl: 'page-header.scss',
  scoped: true,
})
export class PageHeader {
  /**
   * page header variant
   */
  @Prop() variant: PageHeaderVariant = 'Primary';

  /**
   * title
   */
  @Prop() headerTitle: string;

  /**
   * subtitle
   */
  @Prop() headerSubtitle: string | undefined = undefined;

  /**
   * has back button
   */
  @Prop() hasBackButton: boolean = false;

  @Element() hostElement: HTMLIxPageHeaderElement;

  /**
   * triggered when back button is clicked
   */
  @Event() backButtonClicked: EventEmitter<void>;

  render() {
    return (
      <Host>
        {this.hasBackButton ? (
          <ix-icon-button
            variant="Primary"
            icon="arrow-left"
            ghost={true}
            onClick={() => this.backButtonClicked.emit()}
          ></ix-icon-button>
        ) : null}

        <div class="titleGroup">
          <span
            class={{
              headerTitle: true,
              secondary: this.variant === 'Secondary',
            }}
          >
            {this.headerTitle}
          </span>
          {this.headerSubtitle !== undefined ? (
            <span class="headerSubtitle">{this.headerSubtitle}</span>
          ) : null}
        </div>
        <div class="buttons">
          <slot />
        </div>
      </Host>
    );
  }
}
