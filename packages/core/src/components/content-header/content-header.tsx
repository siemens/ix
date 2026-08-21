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
 * @slot header            - Content to be placed in the header area next to the title
 * @slot secondary-actions - Secondary action buttons that collapse into the overflow menu
 * @slot default           - Default slot for action buttons or other content
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
   * Variant of content header
   */
  @Prop() headerTitle?: string;

  /** Subtitle of Header */
  @Prop() headerSubtitle: string | undefined = undefined;

  /** Display a back button */
  @Prop() hasBackButton: boolean = false;

  /** Triggered when back button is clicked */
  @Event() backButtonClick!: EventEmitter<void>;

  @State() isSmallBreakpoint = false;
  @State() hasSecondaryActions = false;

  breakpointDisposable?: Disposable;
  hasDisconnected = false;
  secondarySlot: HTMLSlotElement | null = null;
  defaultSlot: HTMLSlotElement | null = null;

  private resizeObserver?: ResizeObserver;
  private titleGroupEl?: HTMLDivElement;
  private actionsEl?: HTMLDivElement;
  private backButtonEl?: HTMLElement;
  private cachedRequiredWidth = 0;
  private isTransitioning = false;

  readonly breakpointChangeHandler = () => {
    this.updateOverflowState();
  };

  readonly slotChangeHandler = () => {
    this.checkSecondarySlot();
    if (!this.isSmallBreakpoint) {
      this.refreshCache();
    }
    this.updateOverflowState();
  };

  private refreshCache() {
    if (!this.titleGroupEl || !this.actionsEl) return;
    const titleWidth = this.titleGroupEl.scrollWidth;
    const actionsWidth = this.actionsEl.offsetWidth;
    const backWidth = this.backButtonEl?.offsetWidth ?? 0;
    if (actionsWidth > 0) {
      this.cachedRequiredWidth = titleWidth + actionsWidth + backWidth;
    }
  }

  private updateOverflowState() {
    if (this.isTransitioning) return;
    if (!this.titleGroupEl || !this.actionsEl) return;

    if (!this.isSmallBreakpoint) {
      this.refreshCache();
    }

    const shouldOverflow =
      this.cachedRequiredWidth > this.hostElement.clientWidth;

    if (shouldOverflow !== this.isSmallBreakpoint) {
      this.isTransitioning = true;
      this.isSmallBreakpoint = shouldOverflow;

      requestAnimationFrame(() => {
        this.isTransitioning = false;
        if (!this.isSmallBreakpoint) {
          this.refreshCache();
        }
      });
    }
  }

  checkSecondarySlot() {
    this.hasSecondaryActions = Array.from(this.hostElement.childNodes).some(
      (node) => {
        if (node.nodeType === Node.TEXT_NODE) return false;
        return (node as Element).getAttribute?.('slot') === 'secondary-actions';
      }
    );
  }

  private attachSlotListeners() {
    const secSlot = this.hostElement.shadowRoot?.querySelector(
      'slot[name="secondary-actions"]'
    ) as HTMLSlotElement | null;

    if (secSlot) {
      this.secondarySlot = secSlot;
      secSlot.addEventListener('slotchange', this.slotChangeHandler);
    }

    const defSlot = this.hostElement.shadowRoot?.querySelector(
      'slot:not([name])'
    ) as HTMLSlotElement | null;

    if (defSlot) {
      this.defaultSlot = defSlot;
      defSlot.addEventListener('slotchange', this.slotChangeHandler);
    }
  }

  private detachSlotListeners() {
    this.secondarySlot?.removeEventListener(
      'slotchange',
      this.slotChangeHandler
    );
    this.defaultSlot?.removeEventListener('slotchange', this.slotChangeHandler);
  }

  private subscribeToBreakpointChanges() {
    this.breakpointDisposable = applicationLayoutService.onChange.on(
      this.breakpointChangeHandler
    );
  }

  componentWillLoad() {
    this.subscribeToBreakpointChanges();
  }

  componentDidLoad() {
    this.checkSecondarySlot();
    this.attachSlotListeners();

    this.resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(() => this.updateOverflowState());
    });
    this.resizeObserver.observe(this.hostElement);

    requestAnimationFrame(() => {
      this.refreshCache();
      this.updateOverflowState();
    });
  }

  connectedCallback() {
    if (this.hasDisconnected && globalThis.window !== undefined) {
      this.subscribeToBreakpointChanges();
      this.attachSlotListeners();

      if (!this.resizeObserver) {
        this.resizeObserver = new ResizeObserver(() => {
          requestAnimationFrame(() => this.updateOverflowState());
        });
      }

      this.resizeObserver.observe(this.hostElement);

      requestAnimationFrame(() => {
        this.refreshCache();
        this.updateOverflowState();
      });
    }
  }

  disconnectedCallback() {
    this.breakpointDisposable?.dispose();
    this.detachSlotListeners();
    this.resizeObserver?.disconnect();
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
            ref={(el) => (this.backButtonEl = el as HTMLElement)}
            onClick={() => this.backButtonClick.emit()}
          ></ix-icon-button>
        ) : null}

        <div
          class="titleGroup"
          ref={(el) => (this.titleGroupEl = el as HTMLDivElement)}
        >
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
          <div
            class="actions"
            ref={(el) => (this.actionsEl = el as HTMLDivElement)}
          >
            <slot />
            {this.hasSecondaryActions && (
              <ix-dropdown-button
                class="secondaryActionsDropdown"
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
          <div
            class="actions"
            ref={(el) => (this.actionsEl = el as HTMLDivElement)}
          >
            <slot name="secondary-actions" />
            <slot />
          </div>
        )}
      </Host>
    );
  }
}
