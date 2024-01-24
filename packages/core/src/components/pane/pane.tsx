/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @stencil-community/strict-mutable */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import anime from 'animejs';
import Animation from '../utils/animation';
import { applicationLayoutService } from '../utils/application-layout';
import { matchBreakpoint } from '../utils/breakpoints';

export type Position = 'top' | 'left' | 'bottom' | 'right';
export type ExpandedChangedEvent = {
  position: string;
  expanded: boolean;
};
export type SlotChangedEvent = { oldSlot: string; newSlot: string };

/**
 * @since 2.1.0
 */
@Component({
  tag: 'ix-pane',
  styleUrl: 'pane.scss',
  shadow: true,
})
export class Pane {
  @Element() hostElement: HTMLIxPaneElement;

  /**
   * Title of the side panel
   */
  @Prop() heading: string = 'Pane title';

  /**
   * Variant of the side pane
   */
  @Prop() variant: 'floating' | 'inline' = 'inline';

  /**
   * The maximum size of the sidebar, when it is expanded
   */
  @Prop() size:
    | '240px'
    | '320px'
    | '360px'
    | '480px'
    | '600px'
    | '33%'
    | '50%'
    | '100%' = '240px';

  /**
   * Toggle border
   */
  @Prop() borderless: boolean = false;

  /**
   * State of the pane
   */
  @Prop({ mutable: true }) expanded: boolean = false;

  /**
   * Placement of the sidebar
   */
  @Prop({ mutable: true }) position: Position = 'top';

  /**
   * Name of the icon
   */
  @Prop() icon: string;

  /**
   * @internal
   */
  @Prop({ mutable: true }) isMobile: boolean = false;

  /**
   * This event is triggered when the pane either expands or contracts
   */
  @Event() expandedChanged: EventEmitter<ExpandedChangedEvent>;

  /**
   * @internal
   */
  @Event() slotChanged: EventEmitter<SlotChangedEvent>;

  @State() private expandIcon = '';
  @State() private showContent = false;
  @State() private minimizeIcon = '';
  @State() private floating = false;

  private previousWidth: string;
  private previousHeight: string;
  private observer: MutationObserver;

  componentWillLoad() {
    this.resetLayoutState();

    this.floating = this.variant === 'floating';

    this.setIcons();

    if (this.expanded) {
      this.onExpandedChange();
    }

    this.isMobile = matchBreakpoint('sm');
    applicationLayoutService.onChange.on(() => {
      this.isMobile = matchBreakpoint('sm');
    });

    // recognize a changed slot attribute
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'slot'
        ) {
          const newSlotValue = this.hostElement.getAttribute('slot');

          if (mutation.oldValue !== newSlotValue) {
            this.position = newSlotValue as Position;

            this.slotChanged.emit({
              oldSlot: mutation.oldValue,
              newSlot: newSlotValue,
            });
          }
        }
      });
    });
    this.observer.observe(this.hostElement, {
      attributes: true,
      attributeOldValue: true,
    });
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }

  @Watch('position')
  async onPositionChange() {
    this.setIcons();
    this.resetLayoutState();
    if (this.expanded) {
      await this.onExpandedChange();
    }
  }

  @Watch('variant')
  onVariantChange(value: 'inline' | 'floating') {
    this.floating = value === 'floating';
  }

  get isBottomTopPane() {
    return this.position === 'bottom' || this.position === 'top';
  }

  get isLeftRightPane() {
    return this.position === 'left' || this.position === 'right';
  }

  get isMobileTop() {
    return this.position === 'top' || this.position === 'left';
  }

  setIcons() {
    const { expandIcon, minimizeIcon } = this.getIconNames();
    this.expandIcon = expandIcon;
    this.minimizeIcon = minimizeIcon;
  }

  private getIconNames(): { expandIcon: string; minimizeIcon: string } {
    let expandIcon = '';
    let minimizeIcon = '';

    switch (this.position) {
      case 'left':
        expandIcon = this.isMobile
          ? 'double-chevron-up'
          : 'double-chevron-left';
        minimizeIcon = this.isMobile
          ? 'double-chevron-down'
          : 'double-chevron-right';
        break;
      case 'right':
        expandIcon = this.isMobile
          ? 'double-chevron-down'
          : 'double-chevron-right';
        minimizeIcon = this.isMobile
          ? 'double-chevron-up'
          : 'double-chevron-left';
        break;
      case 'bottom':
        expandIcon = 'double-chevron-down';
        minimizeIcon = 'double-chevron-up';
        break;
      case 'top':
        expandIcon = 'double-chevron-up';
        minimizeIcon = 'double-chevron-down';
        break;
    }

    return { expandIcon, minimizeIcon };
  }

  @Watch('size')
  @Watch('expanded')
  async onExpandedChange() {
    if (this.expanded) {
      this.previousHeight = '40px';
      this.previousWidth = '40px';

      const expandPaneSize = this.isMobile ? '100%' : this.size;

      if (this.isBottomTopPane || this.isMobile) {
        this.animateHorizontalFadeIn(expandPaneSize);
      } else {
        this.animateVerticalFadeIn(expandPaneSize);
      }
    } else {
      if (this.isMobile) {
        this.resetLayoutState();
      } else {
        if (this.isBottomTopPane) {
          this.animateHorizontalFadeIn(this.previousHeight);
        } else {
          this.animateVerticalFadeIn(this.previousWidth);
        }
      }
    }

    this.expandedChanged.emit({
      position: this.position,
      expanded: this.expanded,
    });
  }

  @Watch('isMobile')
  onMobileChange() {
    this.resetLayoutState();
    this.setIcons();
    this.expanded = false;
  }

  resetLayoutState() {
    this.previousWidth = null;
    this.previousHeight = null;
    this.showContent = false;
    this.removePadding();
    this.hostElement.style.removeProperty('height');
    this.hostElement.style.removeProperty('width');
  }

  private animateVerticalFadeIn(size: string) {
    anime({
      targets: this.hostElement,
      duration: Animation.mediumTime,
      width: size,
      easing: 'linear',
      delay: 0,
      begin: () => {
        if (!this.expanded) {
          this.showContent = false;
          this.animateVerticalPadding('0px');
        } else {
          this.animateVerticalPadding('8px');
        }
      },
      complete: () => {
        if (this.expanded) {
          this.showContent = true;
        } else {
          this.hostElement.style.removeProperty('width');
        }
      },
    });
  }

  private animateHorizontalFadeIn(size: string) {
    anime({
      targets: this.hostElement,
      duration: Animation.mediumTime,
      height: size,
      easing: 'linear',
      delay: 0,
      begin: () => {
        if (!this.expanded) {
          this.showContent = false;
          this.animateHorizontalPadding('0px');
        } else {
          this.animateHorizontalPadding('8px');
        }
      },
      complete: () => {
        if (this.expanded) {
          this.showContent = true;
        } else {
          this.hostElement.style.removeProperty('width');
        }
      },
    });
  }

  private removePadding() {
    anime({
      targets: this.hostElement.shadowRoot.querySelector('.title-inline'),
      duration: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      delay: 0,
    });
  }

  private animateHorizontalPadding(size: string) {
    anime({
      targets: this.hostElement.shadowRoot.querySelector('.title-inline'),
      duration: Animation.mediumTime,
      paddingTop: size,
      paddingBottom: size,
      easing: 'linear',
      delay: 0,
    });
  }

  private animateVerticalPadding(size: string) {
    anime({
      targets: this.hostElement.shadowRoot.querySelector('.title-inline'),
      duration: Animation.mediumTime,
      paddingLeft: size,
      paddingRight: size,
      easing: 'linear',
      delay: 0,
    });
  }

  render() {
    return (
      <Host
        class={{
          'inline-color': true /* !this.floating || this.isMobile */,
          'mobile-overlay': this.expanded && this.isMobile,
          'top-expanded': this.expanded && this.isMobileTop && this.isMobile,
          'bottom-expanded':
            this.expanded && !this.isMobileTop && this.isMobile,
          'top-bottom-pane': this.isBottomTopPane && !this.isMobile,
          'left-right-pane': this.isLeftRightPane && !this.isMobile,
          [`${this.position}-pane-border`]: !this.isMobile && !this.floating,
          'nav-left-border':
            !this.borderless && !this.isMobile && this.position !== 'right',
          'box-shadow': this.floating && !this.isMobile,
          'aria-expanded': this.expanded,
        }}
      >
        <aside
          class={{
            [`${this.position}-pane-border`]: !this.isMobile,
            'top-bottom-pane': this.isBottomTopPane && !this.isMobile,
            'left-right-pane': this.isLeftRightPane && !this.isMobile,
            'mobile-pane': this.isMobile,
            'mobile-border-top':
              this.isMobileTop && this.isMobile && !this.expanded,
            'mobile-border-bottom':
              !this.isMobileTop && this.isMobile && !this.expanded,
          }}
        >
          <div
            class={{
              'title-inline': !this.isMobile,
              'title-inline-expanded': this.expanded && !this.isMobile,
              'title-mobile': this.isMobile,
              'header-gap': !this.isMobile,
            }}
          >
            <ix-icon-button
              class="title-icon"
              size="24"
              icon={
                this.expanded
                  ? this.isMobile
                    ? 'close'
                    : this.expandIcon
                  : this.minimizeIcon
              }
              ghost
              onClick={() => {
                this.expanded = !this.expanded;
              }}
              aria-controls={this.position + 'ToggleButton'}
            ></ix-icon-button>
            <span
              class={{
                'title-text': true,
                rotate:
                  !this.expanded && !this.isMobile && this.isLeftRightPane,
              }}
            >
              {this.icon ? (
                <ix-icon
                  class={{
                    'title-text-left-right-expanded':
                      this.expanded && !this.isMobile && this.isLeftRightPane,
                    'rotate-icon':
                      !this.expanded && !this.isMobile && this.isLeftRightPane,
                  }}
                  size="24"
                  name={this.icon}
                ></ix-icon>
              ) : null}
              <div class="title-text-overflow">
                <ix-typography format="h4">{this.heading}</ix-typography>
              </div>
            </span>
          </div>
          <div class="side-pane-content" hidden={!this.showContent}>
            <slot></slot>
          </div>
        </aside>
      </Host>
    );
  }
}
