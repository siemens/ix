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
import { applicationLayoutService } from '../utils/application-layout';
import type { Disposable } from '../utils/typed-event';
import type { ContentHeaderVariant } from './content-header.types';

/**
 * @slot header - Content to be placed in the header area next to the title
 * @slot secondary-actions - Secondary action buttons that collapse into the overflow menu on small viewports
 * @slot default - Default slot for action buttons or other content
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

  breakpointDisposable?: Disposable;
  hasDisconnected = false;
  secondarySlot: HTMLSlotElement | null = null;

  readonly breakpointChangeHandler = (breakpoint: string) => {
    this.isSmallBreakpoint = breakpoint === 'sm';
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

  private subscribeToBreakpointChanges() {
    this.isSmallBreakpoint = applicationLayoutService.breakpoint === 'sm';
    this.breakpointDisposable = applicationLayoutService.onChange.on(
      this.breakpointChangeHandler
    );
  }

  componentWillLoad() {
    this.subscribeToBreakpointChanges();
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
      this.subscribeToBreakpointChanges();

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
    this.breakpointDisposable?.dispose();
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
                aria-label="More actions"
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
