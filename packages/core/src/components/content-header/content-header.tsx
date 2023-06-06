/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

export type ContentHeaderVariant = 'Primary' | 'Secondary';

@Component({
  tag: 'ix-content-header',
  styleUrl: 'content-header.scss',
  shadow: true,
})
export class ContentHeader {
  /**
   * Variant of content header
   */
  @Prop() variant: ContentHeaderVariant = 'Primary';

  /**
   * Title of Header
   */
  @Prop() headerTitle: string;

  /**
   * Subtitle of Header
   */
  @Prop() headerSubtitle: string | undefined = undefined;

  /**
   * Display a back button
   */
  @Prop() hasBackButton: boolean = false;

  /**
   * Triggered when back button is clicked
   */
  @Event() backButtonClick: EventEmitter<void>;

  render() {
    return (
      <Host>
        {this.hasBackButton ? (
          <ix-icon-button
            class={'backButton'}
            variant="Primary"
            icon="arrow-left"
            ghost={true}
            onClick={() => this.backButtonClick.emit()}
          ></ix-icon-button>
        ) : null}

        <div class="titleGroup">
          <ix-typography
            variant={this.variant === 'Secondary' ? 'large-single' : 'h2'}
          >
            {this.headerTitle}
          </ix-typography>
          {this.headerSubtitle !== undefined ? (
            <ix-typography variant={'caption'} color={'soft'} class="subtitle">
              {this.headerSubtitle}
            </ix-typography>
          ) : null}
        </div>
        <div class="buttons">
          <slot />
        </div>
      </Host>
    );
  }
}
