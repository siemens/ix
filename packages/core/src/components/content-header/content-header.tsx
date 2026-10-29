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
import { getDeepActiveElement } from '../utils/focus/focus-trap';
import { makeRef } from '../utils/make-ref';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import type { Disposable } from '../utils/typed-event';
import { generateUUID } from '../utils/uuid';
import type {
  ContentHeaderTextOverflow,
  ContentHeaderVariant,
} from './content-header.types';

/**
 * Header area of a content page showing the title and page-level actions.
 *
 * @documentation https://ix.siemens.io//docs/components/content-header/guide.md
 * @figma-main-component-id 4727:112521
 *
 * @slot header - Content to be placed in the header area next to the title
 * @slot - Default slot for action buttons or other content
 * @slot secondary-actions - ix-button and ix-icon-button actions that collapse into a vertical overflow menu when space is limited. Provide an accessible name for icon-only actions. @since 6.0.0
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
   * Accessible label for the secondary actions overflow menu.
   *
   * @since 6.0.0
   */
  @Prop() ariaLabelMoreActions = 'More actions';

  /**
   * Triggered when back button is clicked
   */
  @Event() backButtonClick!: EventEmitter<void>;

  @State() private actionsOverflow = false;
  @State() private secondaryActions: (
    | HTMLIxButtonElement
    | HTMLIxIconButtonElement
  )[] = [];

  private primaryActionsElement?: HTMLDivElement;
  private secondaryActionsElement?: HTMLDivElement;
  private resizeObserver?: ResizeObserver;
  private actionsObserver?: MutationObserver;
  private breakpointSubscription?: Disposable;
  private animationFrame?: number;
  private hasLoaded = false;
  private focusAfterRender?:
    | 'overflow'
    | HTMLIxButtonElement
    | HTMLIxIconButtonElement;
  private readonly overflowTrigger = makeRef<HTMLIxIconButtonElement>();
  private readonly overflowId = `content-header-actions-${generateUUID()}`;

  connectedCallback() {
    if (this.hasLoaded) {
      this.observeActions();
    }
  }

  componentDidLoad() {
    this.hasLoaded = true;
    this.observeActions();
  }

  componentDidRender() {
    this.scheduleLayout();
    const focusTarget = this.focusAfterRender;
    this.focusAfterRender = undefined;
    if (focusTarget === 'overflow') {
      this.getOverflowTrigger().then((trigger) => trigger.focus());
    } else if (focusTarget) {
      focusTarget.shadowRoot!.querySelector<HTMLElement>('button, a')!.focus();
    }
  }

  disconnectedCallback() {
    this.resizeObserver?.disconnect();
    this.actionsObserver?.disconnect();
    this.breakpointSubscription?.dispose();
    if (this.animationFrame !== undefined) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = undefined;
    }
  }

  private observeActions() {
    this.resizeObserver = new ResizeObserver(this.scheduleLayout);
    this.actionsObserver = new MutationObserver(() => this.updateActions());
    this.breakpointSubscription = applicationLayoutService.onChange.on(
      this.scheduleLayout
    );
    this.updateActions();
  }

  private readonly updateActions = () => {
    this.secondaryActions = Array.from(
      this.hostElement.querySelectorAll<
        HTMLIxButtonElement | HTMLIxIconButtonElement
      >(
        ':scope > ix-button[slot="secondary-actions"], :scope > ix-icon-button[slot="secondary-actions"]'
      )
    ).filter((action) => !action.hidden);

    this.actionsObserver?.disconnect();
    this.actionsObserver?.observe(this.hostElement, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    });
    for (const action of this.secondaryActions) {
      if (action.shadowRoot) {
        this.actionsObserver?.observe(action.shadowRoot, {
          attributes: true,
          characterData: true,
          childList: true,
          subtree: true,
        });
      }
    }

    this.resizeObserver?.disconnect();
    this.resizeObserver?.observe(this.hostElement);
    if (this.primaryActionsElement) {
      this.resizeObserver?.observe(this.primaryActionsElement);
    }
    if (this.secondaryActionsElement) {
      this.resizeObserver?.observe(this.secondaryActionsElement);
    }
    this.scheduleLayout();
  };

  private readonly scheduleLayout = () => {
    if (this.animationFrame !== undefined) {
      return;
    }
    this.animationFrame = requestAnimationFrameNoNgZone(() => {
      this.animationFrame = undefined;
      this.updateOverflow();
    });
  };

  private updateOverflow() {
    if (!this.primaryActionsElement || !this.secondaryActionsElement) {
      return;
    }

    const titleGroup =
      this.hostElement.shadowRoot!.querySelector<HTMLElement>('.titleGroup')!;
    const backButton =
      this.hostElement.shadowRoot!.querySelector<HTMLElement>('.backButton');
    const headerSlot =
      this.hostElement.shadowRoot!.querySelector<HTMLElement>('.headerSlot')!;
    const requiredWidth =
      this.primaryActionsElement.scrollWidth +
      this.secondaryActionsElement.getBoundingClientRect().width +
      parseFloat(getComputedStyle(this.secondaryActionsElement).columnGap) +
      (backButton
        ? backButton.getBoundingClientRect().width +
          parseFloat(getComputedStyle(backButton).marginRight)
        : 0) +
      headerSlot.getBoundingClientRect().width +
      parseFloat(getComputedStyle(titleGroup).marginRight);

    const actionsOverflow =
      this.secondaryActions.length > 0 &&
      (applicationLayoutService.breakpoint === 'sm' ||
        requiredWidth > this.hostElement.clientWidth);
    if (actionsOverflow !== this.actionsOverflow) {
      const active = getDeepActiveElement();
      if (
        actionsOverflow &&
        this.secondaryActions.some(
          (action) => active && action.shadowRoot?.contains(active)
        )
      ) {
        this.focusAfterRender = 'overflow';
      } else if (
        !actionsOverflow &&
        active &&
        (this.overflowTrigger.current?.shadowRoot?.contains(active) ||
          this.hostElement
            .shadowRoot!.querySelector('.overflowButton')
            ?.contains(active))
      ) {
        const items = Array.from(
          this.hostElement.shadowRoot!.querySelectorAll('ix-dropdown-item')
        );
        this.focusAfterRender =
          this.secondaryActions[
            Math.max(
              0,
              items.findIndex((item) => item === active)
            )
          ];
      }
    }
    this.actionsOverflow = actionsOverflow;
  }

  private getActionLabel(
    action: HTMLIxButtonElement | HTMLIxIconButtonElement
  ) {
    return (
      action.getAttribute('aria-label') ||
      action.shadowRoot
        ?.querySelector('button, a')
        ?.getAttribute('aria-label') ||
      action.textContent?.trim() ||
      action.getAttribute('title') ||
      ''
    );
  }

  private activateAction(
    action: HTMLIxButtonElement | HTMLIxIconButtonElement
  ) {
    if (action.disabled || action.loading) {
      return;
    }
    // Activate the original control to preserve form submission, links and listeners.
    action.shadowRoot!.querySelector<HTMLElement>('button, a')!.click();
  }

  private async getOverflowTrigger() {
    const element = await this.overflowTrigger.waitForCurrent();
    await element.componentOnReady();
    return element.shadowRoot!.querySelector<HTMLButtonElement>('button')!;
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
            {this.headerTitle && (
              <h2
                class={{
                  'header-title': true,
                  secondary: this.variant === 'secondary',
                  headerText: true,
                  truncate: this.textOverflow === 'ellipsis',
                }}
              >
                <ix-typography
                  format={this.variant === 'secondary' ? 'h4' : 'h3'}
                  class={{
                    headerText: true,
                    truncate: this.textOverflow === 'ellipsis',
                  }}
                >
                  {this.headerTitle}
                </ix-typography>
              </h2>
            )}
            <div class="headerSlot">
              <slot name="header" />
            </div>
          </div>
          {!!this.headerSubtitle && (
            <ix-typography
              format={'h6'}
              text-color={'secondary'}
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
        <div
          class={{
            buttons: true,
            'inline-secondary-actions':
              this.secondaryActions.length > 0 && !this.actionsOverflow,
          }}
        >
          <div
            class={{
              secondaryActions: true,
              collapsed: this.actionsOverflow,
            }}
            inert={this.actionsOverflow}
            ref={(element) => (this.secondaryActionsElement = element)}
          >
            <slot name="secondary-actions" onSlotchange={this.updateActions} />
          </div>
          <div
            class="primaryActions"
            ref={(element) => (this.primaryActionsElement = element)}
          >
            <slot onSlotchange={this.scheduleLayout} />
          </div>
          {this.actionsOverflow && (
            <div class="overflowButton">
              <ix-icon-button
                ref={this.overflowTrigger}
                icon={iconMoreMenu}
                variant="tertiary"
                aria-label={this.ariaLabelMoreActions}
                aria-haspopup="menu"
                aria-controls={this.overflowId}
                aria-expanded="false"
              />
              <ix-dropdown
                id={this.overflowId}
                role="menu"
                aria-label={this.ariaLabelMoreActions}
                trigger={this.getOverflowTrigger()}
                navigationMode="roving-tabindex"
                placement="bottom-end"
                onShowChanged={(event) => {
                  this.getOverflowTrigger().then((trigger) =>
                    trigger.setAttribute('aria-expanded', String(event.detail))
                  );
                }}
              >
                {this.secondaryActions.map((action, index) => (
                  <ix-dropdown-item
                    key={index}
                    label={this.getActionLabel(action)}
                    icon={action.icon}
                    disabled={action.disabled || action.loading}
                    suppressChecked
                    onItemClick={() => this.activateAction(action)}
                  />
                ))}
              </ix-dropdown>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
