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
  paneId: string;
  expanded: boolean;
};
export type SlotChangedEvent = {
  paneId: string;
  newSlot: string;
};
export type CollapsibleChangedEvent = {
  paneId: string;
  collapsible: boolean;
};
export type VariantChangedEvent = {
  paneId: string;
  variant: 'floating' | 'inline';
};
export type BorderlessChangedEvent = {
  paneId: string;
  borderless: boolean;
};

let idCounter = 0;

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
   * Variant of the side pane.
   * Defaults to the variant attribute of the pane layout. If used standalone it defaults to inline.
   */
  @Prop() variant: 'floating' | 'inline';

  /**
   * Define if the pane should have a collapsed state
   */
  @Prop({ reflect: true }) collapsible: boolean = true;

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
    | '50%' = '240px';

  /**
   * Toggle the border of the pane.
   * Defaults to the borderless attribute of the pane layout. If used standalone it defaults to false.
   */
  @Prop() borderless: boolean;

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
   * Identifier of the pane
   */
  @Prop() identifier: string = `pane-${idCounter++}`;

  /**
   * @internal
   */
  @Prop({ mutable: true }) isMobile: boolean = false;

  /**
   * @internal
   */
  @Prop({ mutable: true }) initialZIndex: number = 1;

  /**
   * This event is triggered when the pane either expands or contracts
   */
  @Event() expandedChanged: EventEmitter<ExpandedChangedEvent>;

  /**
   * This event is triggered when the variant of the pane is changed
   */
  @Event() variantChanged: EventEmitter<VariantChangedEvent>;

  /**
   * This event is triggered when the variant of the pane is changed
   */
  @Event() borderlessChanged: EventEmitter<BorderlessChangedEvent>;

  /**
   * @internal
   */
  @Event() collapsibleChanged: EventEmitter<CollapsibleChangedEvent>;

  /**
   * @internal
   */
  @Event() slotChanged: EventEmitter<SlotChangedEvent>;

  @State() private expandIcon = '';
  @State() private showContent = false;
  @State() private minimizeIcon = '';
  @State() private floating = false;
  @State() private parentWidthPx = 0;
  @State() private parentHeightPx = 0;

  private validPositions = ['top', 'left', 'bottom', 'right'];
  private collapsedWidth = '40px';
  private collapsedHeight = '40px';

  private mutationObserver: MutationObserver;
  private resizeObserver: ResizeObserver;

  get currentSlot() {
    return this.hostElement.getAttribute('slot');
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

  componentWillLoad() {
    this.setIcons();

    this.floating = this.variant === 'floating';

    // handle initial expansion
    if (this.expanded) {
      this.onExpandedChange();
    }

    // observe breakpoint
    this.isMobile = matchBreakpoint('sm');
    applicationLayoutService.onChange.on(() => {
      this.isMobile = matchBreakpoint('sm');
    });

    // set position
    this.setPosition(this.currentSlot);

    // recognize a changed slot attribute
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'slot'
        ) {
          const newSlot = this.currentSlot;
          const oldSlot = mutation.oldValue;

          if (newSlot !== oldSlot) {
            this.slotChanged.emit({
              paneId: this.identifier,
              newSlot: newSlot,
            });
            this.setPosition(newSlot);
          }
        }
      });
    });
    this.mutationObserver.observe(this.hostElement, {
      attributes: true,
      attributeOldValue: true,
    });

    // Observe parent size change
    const parentElement = this.hostElement.parentElement;
    this.resizeObserver = new ResizeObserver((entries) => {
      this.parentWidthPx = entries[0].borderBoxSize[0].inlineSize;
      this.parentHeightPx = entries[0].borderBoxSize[0].blockSize;
    });
    if (parentElement) this.resizeObserver.observe(parentElement);
  }

  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
  }

  private setPosition(value: string) {
    if (this.validPositions.includes(value)) {
      this.position = value as Position;
    }
  }

  private getExpandPaneSize() {
    let expandPaneSize: string;

    if (this.isBottomTopPane) {
      if (this.size.includes('px')) {
        const referenceValue = Math.round(this.parentHeightPx / 2);
        const currentValue = Number(this.size.replace('px', ''));

        if (referenceValue && referenceValue < currentValue) {
          expandPaneSize = `${referenceValue}px`;
        } else {
          expandPaneSize = `${currentValue}px`;
        }
      } else {
        if (this.size === '50%') {
          expandPaneSize = `${Math.round(this.parentHeightPx / 2)}px`;
        } else {
          expandPaneSize = `${Math.round(this.parentHeightPx / 3)}px`;
        }
      }
    } else {
      if (this.size.includes('px')) {
        const referenceValue = Math.round(this.parentWidthPx / 2);
        const currentValue = Number(this.size.replace('px', ''));

        if (referenceValue && referenceValue < currentValue) {
          expandPaneSize = `${referenceValue}px`;
        } else {
          expandPaneSize = `${currentValue}px`;
        }
      } else {
        if (this.size === '50%') {
          expandPaneSize = `${Math.round(this.parentWidthPx / 2)}px`;
        } else {
          expandPaneSize = `${Math.round(this.parentWidthPx / 3)}px`;
        }
      }
    }

    return expandPaneSize;
  }

  private setIcons() {
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
        }
      },
    });
  }

  private resetLayoutState() {
    this.removePadding();
    this.hostElement.style.removeProperty('height');
    this.hostElement.style.removeProperty('width');
  }

  private removePadding() {
    anime({
      targets: this.hostElement.shadowRoot.querySelector('#title-div'),
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
      targets: this.hostElement.shadowRoot.querySelector('#title-div'),
      duration: Animation.mediumTime,
      paddingTop: size,
      paddingBottom: size,
      easing: 'linear',
      delay: 0,
    });
  }

  private animateVerticalPadding(size: string) {
    anime({
      targets: this.hostElement.shadowRoot.querySelector('#title-div'),
      duration: Animation.mediumTime,
      paddingLeft: size,
      paddingRight: size,
      easing: 'linear',
      delay: 0,
    });
  }

  @Watch('isMobile')
  onMobileChange() {
    this.setIcons();
    this.hostElement.style.removeProperty('width');
    this.hostElement.style.removeProperty('height');
    this.onParentSizeChange();
  }

  @Watch('position')
  async onPositionChange() {
    this.setIcons();
    this.hostElement.style.removeProperty('width');
    this.hostElement.style.removeProperty('height');
    this.onParentSizeChange();
  }

  @Watch('collapsible')
  onCollapsibleChange(value: boolean) {
    this.collapsibleChanged.emit({
      paneId: this.identifier,
      collapsible: value,
    });
  }

  @Watch('variant')
  onVariantChange(value: 'inline' | 'floating') {
    this.floating = value === 'floating';

    this.variantChanged.emit({
      paneId: this.identifier,
      variant: value,
    });
  }

  @Watch('borderless')
  onBorderlessChange(value: boolean) {
    this.borderlessChanged.emit({
      paneId: this.identifier,
      borderless: value,
    });
  }

  @Watch('expanded')
  onExpandedChange() {
    this.onSizeChange();

    this.expandedChanged.emit({
      paneId: this.identifier,
      expanded: this.expanded,
    });
  }

  @Watch('parentHeightPx')
  @Watch('parentWidthPx')
  onParentSizeChange() {
    if (this.expanded) {
      if (this.isMobile) {
        this.hostElement.style.height = '100%';
      } else {
        const expandPaneSize = this.getExpandPaneSize();

        if (this.isBottomTopPane) {
          this.hostElement.style.height = expandPaneSize;
        } else {
          this.hostElement.style.width = expandPaneSize;
        }
      }
    } else {
      this.showContent = false;

      if (this.isMobile) {
        this.resetLayoutState();
      } else {
        if (this.isBottomTopPane) {
          this.hostElement.style.height = this.collapsedHeight;
        } else {
          this.hostElement.style.width = this.collapsedWidth;
        }
      }
    }
  }

  @Watch('size')
  onSizeChange() {
    if (this.expanded) {
      if (this.isMobile) {
        this.animateHorizontalFadeIn('100%');
      } else {
        const expandPaneSize = this.getExpandPaneSize();

        if (this.isBottomTopPane) {
          this.animateHorizontalFadeIn(expandPaneSize);
        } else {
          this.animateVerticalFadeIn(expandPaneSize);
        }
      }
    } else {
      this.showContent = false;

      if (this.isMobile) {
        this.resetLayoutState();
      } else {
        if (this.isBottomTopPane) {
          this.animateHorizontalFadeIn(this.collapsedHeight);
        } else {
          this.animateVerticalFadeIn(this.collapsedWidth);
        }
      }
    }
  }

  render() {
    return (
      <Host
        class={{
          'inline-color': !this.floating,
          'mobile-overlay': this.expanded && this.isMobile,
          'top-expanded': this.expanded && this.isMobileTop && this.isMobile,
          'bottom-expanded':
            this.expanded && !this.isMobileTop && this.isMobile,
          'top-bottom-pane': this.isBottomTopPane && !this.isMobile,
          'left-right-pane': this.isLeftRightPane && !this.isMobile,
          [`${this.position}-pane-border`]:
            !this.borderless && !this.isMobile && !this.floating,
          'nav-left-border':
            !this.borderless &&
            !this.isMobile &&
            this.position !== 'right' &&
            this.floating,
          'mobile-border-top':
            !this.borderless &&
            this.isMobileTop &&
            this.isMobile &&
            !this.expanded &&
            !this.floating,
          'mobile-border-bottom':
            !this.borderless &&
            !this.isMobileTop &&
            this.isMobile &&
            !this.expanded &&
            !this.floating,
          'box-shadow': this.floating,
          'aria-expanded': this.expanded,
          'not-visible': !this.collapsible && !this.expanded,
        }}
      >
        <aside
          class={{
            'top-bottom-pane': this.isBottomTopPane && !this.isMobile,
            'left-right-pane': this.isLeftRightPane && !this.isMobile,
            'mobile-pane': this.isMobile,
          }}
        >
          <div
            id="title-div"
            class={{
              title: !this.isMobile && this.collapsible && !this.showContent,
              'title-finished':
                !this.isMobile && this.collapsible && this.showContent,
              'title-expanded':
                !this.isMobile && this.collapsible && this.expanded,
              'title-collapsible': !this.isMobile && !this.collapsible,
              'title-mobile': this.isMobile,
              'header-gap': !this.isMobile && this.collapsible,
            }}
          >
            <ix-icon-button
              class="title-icon"
              size="24"
              icon={
                this.expanded
                  ? this.isMobile || !this.collapsible
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
