/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconArrowLeft, iconMoreMenu } from '@siemens/ix-icons/icons';
import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import type { ContentHeaderVariant } from './content-header.types';

/**
 * @slot header - Content to be placed in the header area next to the title
 * @slot secondary-actions - Secondary action buttons that collapse into the overflow menu on small viewports
 * @slot - Default slot for primary content that remains visible at all viewport sizes
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

  @State() private isSmallBreakpoint = false;

  private static readonly SMALL_BREAKPOINT_QUERY = '(max-width: 48em)';

  private mediaQuery?: MediaQueryList;
  private hasDisconnected = false;
  private readonly mediaQueryHandler = (e: MediaQueryListEvent) => {
    this.isSmallBreakpoint = e.matches;
  };

  componentWillLoad() {
    if (globalThis.window !== undefined) {
      this.mediaQuery = globalThis.window.matchMedia(
        ContentHeader.SMALL_BREAKPOINT_QUERY
      );
      this.isSmallBreakpoint = this.mediaQuery.matches;
      this.mediaQuery.addEventListener('change', this.mediaQueryHandler);
    }
  }

  connectedCallback() {
    if (this.hasDisconnected && globalThis.window !== undefined) {
      this.mediaQuery = globalThis.window.matchMedia(
        ContentHeader.SMALL_BREAKPOINT_QUERY
      );
      this.isSmallBreakpoint = this.mediaQuery.matches;
      this.mediaQuery.addEventListener('change', this.mediaQueryHandler);
    }
  }

  disconnectedCallback() {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.mediaQueryHandler);
    }
    this.hasDisconnected = true;
  }

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
        {this.isSmallBreakpoint ? (
          <div class="actions">
            <slot />
            <ix-dropdown-button icon={iconMoreMenu} variant="tertiary" label="">
              <slot name="secondary-actions" />
            </ix-dropdown-button>
          </div>
        ) : (
          <div class="actions">
            <slot name="secondary-actions" />
            <slot />
          </div>
        )}
      </Host>
    );
  }
}
