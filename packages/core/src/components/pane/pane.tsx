/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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

export type Composition = 'top' | 'left' | 'bottom' | 'right';
export type ExpandedChangedEvent = {
  slot: string;
  expanded: boolean;
};
export type SlotChangedEvent = {
  slot: string;
  newSlot: string;
};
export type HideOnCollapseChangedEvent = {
  slot: string;
  hideOnCollapse: boolean;
};
export type VariantChangedEvent = {
  slot: string;
  variant: 'floating' | 'inline';
};
export type BorderlessChangedEvent = {
  slot: string;
  borderless: boolean;
};

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
  @Prop() heading: string;

  /**
   * Variant of the side pane.
   * Defaults to the variant attribute of the pane layout. If used standalone it defaults to inline.
   */
  @Prop() variant: 'floating' | 'inline' = 'inline';

  /**
   * Define if the pane should have a collapsed state
   */
  @Prop() hideOnCollapse: boolean = false;

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
  @Prop() borderless: boolean = false;

  /**
   * State of the pane
   */
  @Prop({ mutable: true }) expanded: boolean = false;

  /**
   * Defines the position of the pane inside it's container.
   * Inside a pane layout this property will automatically be set to the name of slot the pane is assigned to.
   */
  @Prop({ mutable: true }) composition: Composition = 'top';

  /**
   * Name of the icon
   */
  @Prop() icon: string;

  /**
   * @internal
   * Prevents overwriting of the variant and borderless property when used inside layout
   */
  @Prop() ignoreLayoutSettings: boolean = false;

  /**
   * @internal
   */
  @Prop({ mutable: true }) isMobile: boolean = false;

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
  @Event() hideOnCollapseChanged: EventEmitter<HideOnCollapseChangedEvent>;

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

  private readonly validPositions = ['top', 'left', 'bottom', 'right'];
  private readonly collapsedPane = '40px';
  private readonly collapsedPaneMobile = '48px';
  private readonly animations: Map<string, anime.AnimeInstance> = new Map();
  private animationCounter = 0;

  private mutationObserver: MutationObserver;
  private resizeObserver: ResizeObserver;

  get currentSlot() {
    return this.hostElement.getAttribute('slot');
  }

  get isBottomTopPane() {
    return this.composition === 'bottom' || this.composition === 'top';
  }

  get isLeftRightPane() {
    return this.composition === 'left' || this.composition === 'right';
  }

  get isMobileTop() {
    return this.composition === 'top' || this.composition === 'left';
  }

  componentWillLoad() {
    this.setIcons();

    this.floating = this.variant === 'floating';

    if (this.expanded) {
      this.onParentSizeChange();
    }

    this.isMobile = matchBreakpoint('sm');
    applicationLayoutService.onChange.on(() => {
      this.isMobile = matchBreakpoint('sm');
    });

    this.setPosition(this.currentSlot);

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
              slot: oldSlot,
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
      this.composition = value as Composition;
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

    switch (this.composition) {
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

  private getKey() {
    return (this.animationCounter++).toString();
  }

  private animateVerticalFadeIn(size: string) {
    let key = this.getKey();
    let animation = anime({
      targets: this.hostElement,
      duration: Animation.mediumTime,
      width: size,
      easing: 'easeInOutSine',
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

        this.animations.delete(key);
      },
    });

    this.animations.set(key, animation);
  }

  private animateHorizontalFadeIn(size: string) {
    let key = this.getKey();
    let animation = anime({
      targets: this.hostElement,
      duration: Animation.mediumTime,
      height: size,
      easing: 'easeInOutSine',
      delay: 0,
      begin: () => {
        if (!this.expanded) {
          this.showContent = false;
          if (!this.isMobile) this.animateHorizontalPadding('0px');
        } else {
          if (!this.isMobile) this.animateHorizontalPadding('8px');
        }
      },
      complete: () => {
        if (this.expanded) {
          this.showContent = true;
        }

        this.animations.delete(key);
      },
    });

    this.animations.set(key, animation);
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

  private animateHorizontalPadding(
    size: string,
    duration = Animation.mediumTime
  ) {
    let key = this.getKey();
    let animation = anime({
      targets: this.hostElement.shadowRoot.querySelector('#title-div'),
      duration: duration,
      paddingTop: size,
      paddingBottom: size,
      easing: 'easeInOutSine',
      delay: 0,
      complete: () => {
        this.animations.delete(key);
      },
    });

    this.animations.set(key, animation);
  }

  private animateVerticalPadding(
    size: string,
    duration = Animation.mediumTime
  ) {
    let key = this.getKey();
    let animation = anime({
      targets: this.hostElement.shadowRoot.querySelector('#title-div'),
      duration: duration,
      paddingLeft: size,
      paddingRight: size,
      easing: 'easeInOutSine',
      delay: 0,
      complete: () => {
        this.animations.delete(key);
      },
    });

    this.animations.set(key, animation);
  }

  private clearAnimations() {
    this.animations.forEach((animation) => animation.pause());
    this.animations.clear();
    this.animationCounter = 0;
  }

  @Watch('isMobile')
  onMobileChange() {
    this.setIcons();
    this.hostElement.style.removeProperty('width');
    this.hostElement.style.removeProperty('height');
    this.hostElement.style.removeProperty('min-height');
    this.onParentSizeChange();
  }

  @Watch('composition')
  onPositionChange() {
    this.setIcons();
    this.hostElement.style.removeProperty('width');
    this.hostElement.style.removeProperty('height');
    this.onParentSizeChange();
  }

  @Watch('hideOnCollapse')
  onHideOnCollapseChange(value: boolean) {
    this.onParentSizeChange();

    this.hideOnCollapseChanged.emit({
      slot: this.currentSlot,
      hideOnCollapse: value,
    });
  }

  @Watch('variant')
  onVariantChange(value: 'inline' | 'floating') {
    this.floating = value === 'floating';

    this.variantChanged.emit({
      slot: this.currentSlot,
      variant: value,
    });
  }

  @Watch('borderless')
  onBorderlessChange(value: boolean) {
    this.borderlessChanged.emit({
      slot: this.currentSlot,
      borderless: value,
    });
  }

  @Watch('expanded')
  onExpandedChange() {
    this.onSizeChange();

    this.expandedChanged.emit({
      slot: this.currentSlot,
      expanded: this.expanded,
    });
  }

  @Watch('parentHeightPx')
  @Watch('parentWidthPx')
  onParentSizeChange() {
    this.clearAnimations();
    this.removePadding();

    if (this.expanded) {
      if (this.isMobile) {
        this.hostElement.style.height = '100%';
      } else {
        const expandPaneSize = this.getExpandPaneSize();

        if (this.isBottomTopPane) {
          this.hostElement.style.height = expandPaneSize;
          this.animateHorizontalPadding('8px', 0);
        } else {
          this.hostElement.style.width = expandPaneSize;
          this.animateVerticalPadding('8px', 0);
        }
      }

      this.showContent = true;
    } else {
      this.showContent = false;

      if (this.isMobile) {
        this.hostElement.style.height = this.hideOnCollapse
          ? '0'
          : this.collapsedPaneMobile;
      } else {
        if (this.isBottomTopPane) {
          this.hostElement.style.height = this.hideOnCollapse
            ? '0'
            : this.collapsedPane;
        } else {
          this.hostElement.style.width = this.hideOnCollapse
            ? '0'
            : this.collapsedPane;
        }
      }
    }
  }

  @Watch('size')
  onSizeChange() {
    if (this.expanded) {
      if (this.isMobile) {
        this.hostElement.style.minHeight = this.hideOnCollapse
          ? '0'
          : this.collapsedPaneMobile;
        this.animateHorizontalFadeIn('100%');
      } else {
        const expandPaneSize = this.getExpandPaneSize();

        if (this.isBottomTopPane) {
          this.hostElement.style.height = this.hideOnCollapse
            ? '0'
            : this.collapsedPane;
          this.animateHorizontalFadeIn(expandPaneSize);
        } else {
          this.hostElement.style.width = this.hideOnCollapse
            ? '0'
            : this.collapsedPane;
          this.animateVerticalFadeIn(expandPaneSize);
        }
      }
    } else {
      this.showContent = false;

      if (this.isMobile) {
        this.hostElement.style.height = this.collapsedPaneMobile;
      } else {
        if (this.isBottomTopPane) {
          this.animateHorizontalFadeIn(this.collapsedPane);
        } else {
          this.animateVerticalFadeIn(this.collapsedPane);
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
          [`${this.composition}-pane-border`]:
            !this.borderless && !this.isMobile && !this.floating,
          'nav-left-border':
            !this.borderless &&
            !this.isMobile &&
            this.composition !== 'right' &&
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
          'not-visible': this.hideOnCollapse && !this.expanded,
        }}
      >
        <aside
          id={`pane-${this.composition}`}
          class={{
            'top-bottom-pane': this.isBottomTopPane && !this.isMobile,
            'left-right-pane': this.isLeftRightPane && !this.isMobile,
            'mobile-pane': this.isMobile,
            expanded: this.expanded,
          }}
        >
          <div
            id="title-div"
            class={{
              title:
                !this.isMobile && !this.hideOnCollapse && !this.showContent,
              'title-finished':
                !this.isMobile && !this.hideOnCollapse && this.showContent,
              'title-expanded':
                !this.isMobile && !this.hideOnCollapse && this.expanded,
              'title-hide-on-collapse': !this.isMobile && this.hideOnCollapse,
              'title-mobile': this.isMobile,
              'header-gap': !this.isMobile && !this.hideOnCollapse,
            }}
          >
            <ix-icon-button
              class="title-icon"
              size="24"
              icon={
                this.expanded
                  ? this.isMobile || this.hideOnCollapse
                    ? 'close'
                    : this.expandIcon
                  : this.minimizeIcon
              }
              ghost
              onClick={() => {
                this.expanded = !this.expanded;
              }}
              aria-controls={`pane-${this.composition}`}
            />
            <span
              class={{
                'title-text': true,
                rotate:
                  !this.expanded && !this.isMobile && this.isLeftRightPane,
              }}
            >
              {this.icon ? (
                <ix-icon size="24" name={this.icon}></ix-icon>
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
