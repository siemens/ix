/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconArrowLeft } from '@siemens/ix-icons/icons';
import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import type { ContentHeaderVariant } from './content-header.types';

/**
 * @figma-main-component-id 4727:112521
 *
 * @slot header - Content to be placed in the header area next to the title
 * @slot - Default slot for action buttons or other content
 */
@Component({
  tag: 'ix-content-header',
  styleUrl: 'content-header.scss',
  shadow: true,
})
export class ContentHeader {
  /**
   * Variant of content header
   */
  @Prop() variant: ContentHeaderVariant = 'primary';

  /**
   * Title of Header
   */
  @Prop() headerTitle?: string;

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
  @Event() backButtonClick!: EventEmitter<void>;

  render() {
    return (
      <Host>
        {this.hasBackButton ? (
          <ix-icon-button
            class={'backButton'}
            variant="tertiary"
            icon={iconArrowLeft}
            onClick={() => this.backButtonClick.emit()}
          ></ix-icon-button>
        ) : null}

        <div class="titleGroup">
          <div class="headerTitleRow">
            <ix-typography
              format={this.variant === 'secondary' ? 'h4' : 'h3'}
              class={{
                secondary: this.variant === 'secondary',
                titleOverflow: true,
              }}
            >
              {this.headerTitle}
            </ix-typography>
            <div class="headerSlot">
              <slot name="header" />
            </div>
          </div>
          {!!this.headerSubtitle && (
            <ix-typography
              format={'h6'}
              text-color={'soft'}
              class={{
                subtitle: this.variant === 'secondary',
                titleOverflow: true,
              }}
              title={this.headerSubtitle}
            >
              {this.headerSubtitle}
            </ix-typography>
          )}
        </div>
        <div class="buttons">
          <slot />
        </div>
      </Host>
    );
  }
}
