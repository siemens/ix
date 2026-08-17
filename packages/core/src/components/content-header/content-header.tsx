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
import type {
  ContentHeaderTextOverflow,
  ContentHeaderVariant,
} from './content-header.types';

/**
 * @slot header - Content to be placed in the header area next to the title
 * @slot default - Default slot for action buttons or other content
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
   * Controls how the title and subtitle handle limited horizontal space.
   * Ellipsis visually truncates the text without adding a tooltip.
   *
   * @since 6.0.0
   */
  @Prop({ reflect: true }) textOverflow: ContentHeaderTextOverflow = 'wrap';

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
                headerText: true,
                truncate: this.textOverflow === 'ellipsis',
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
                headerText: true,
                truncate: this.textOverflow === 'ellipsis',
              }}
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
