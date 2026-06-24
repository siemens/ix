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
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import type { ContentHeaderVariant } from './content-header.types';

const SMALL_BREAKPOINT_QUERY = '(max-width: 48em)';

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
  @Element() hostElement!: HTMLIxContentHeaderElement;

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

  @State() isSmallBreakpoint = false;
  @State() hasSecondaryActions = false;

  mediaQuery?: MediaQueryList;
  hasDisconnected = false;
  secondarySlot: HTMLSlotElement | null = null;

  readonly mediaQueryHandler = (e: MediaQueryListEvent) => {
    this.isSmallBreakpoint = e.matches;
  };

  readonly slotChangeHandler = () => this.checkSecondarySlot();

  checkSecondarySlot() {
    this.hasSecondaryActions = Array.from(this.hostElement.childNodes).some(
      (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          return false;
        }
        return (node as Element).getAttribute?.('slot') === 'secondary-actions';
      }
    );
  }

  componentWillLoad() {
    if (globalThis.window !== undefined) {
      this.mediaQuery = globalThis.window.matchMedia(SMALL_BREAKPOINT_QUERY);
      this.isSmallBreakpoint = this.mediaQuery.matches;
      this.mediaQuery.addEventListener('change', this.mediaQueryHandler);
    }
  }

  componentDidLoad() {
    this.checkSecondarySlot();

    const slot = this.hostElement.shadowRoot?.querySelector(
      'slot[name="secondary-actions"]'
    ) as HTMLSlotElement | null;

    if (slot) {
      this.secondarySlot = slot;
      slot.addEventListener('slotchange', this.slotChangeHandler);
    }
  }

  connectedCallback() {
    if (this.hasDisconnected && globalThis.window !== undefined) {
      this.mediaQuery = globalThis.window.matchMedia(SMALL_BREAKPOINT_QUERY);
      this.isSmallBreakpoint = this.mediaQuery.matches;
      this.mediaQuery.addEventListener('change', this.mediaQueryHandler);

      const slot = this.hostElement.shadowRoot?.querySelector(
        'slot[name="secondary-actions"]'
      ) as HTMLSlotElement | null;

      if (slot) {
        this.secondarySlot = slot;
        slot.addEventListener('slotchange', this.slotChangeHandler);
      }
    }
  }

  disconnectedCallback() {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.mediaQueryHandler);
    }
    this.secondarySlot?.removeEventListener(
      'slotchange',
      this.slotChangeHandler
    );
    this.hasDisconnected = true;
  }

  render() {
    return (
      <Host>
        {this.hasBackButton ? (
          <ix-icon-button
            class="backButton"
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
              format="h6"
              text-color="soft"
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
            {this.hasSecondaryActions && (
              <ix-dropdown-button
                icon={iconMoreMenu}
                variant="tertiary"
                label=""
              >
                <slot name="secondary-actions" />
              </ix-dropdown-button>
            )}
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
