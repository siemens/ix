/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import anime from 'animejs';

type SidePanelPosition = 'top' | 'left' | 'bottom' | 'right';
type ExpandedChangeEvent = {
  position: string;
  expanded: boolean;
};
const ANIMATION_DURATION = 300;

@Component({
  tag: 'ix-side-pane',
  styleUrl: 'side-pane.scss',
  shadow: true,
})
export class SidePane {
  @Element() hostElement: HTMLIxSidePaneElement;

  /**
   * Title of the side panel
   */
  @Prop() paneTitle: string = 'Pane title';

  /**
   * Floating or inline style
   */
  @Prop() inline: boolean = false;

  /**
   * Floating or inline style
   */
  @Prop() floating: boolean = false;

  /**
   * The maximum size of the sidebar, when it is expanded
   */
  @Prop() expandedPaneSize:
    | '240px'
    | '320px'
    | '360px'
    | '480px'
    | '600px'
    | '33%'
    | '50%'
    | '100%' = '240px';

  /**
   * Toggle
   */
  @Prop() showPreviewContent: boolean = false;

  /**
   * State of the side-pane
   */
  @Prop({mutable: true, reflect: true}) expandPane: boolean = false;

  /**
   * Placement of the sidebar
   */
  @Prop({mutable: true, reflect: true}) position: SidePanelPosition = 'top';

  /**
   * Event
   */
  @Event() expandedChange: EventEmitter<ExpandedChangeEvent>;

  @State() private expandIcon: string = '';
  @State() private showContent: boolean = false;
  @State() private minimizeIcon: string = '';
  @State() private isMobileTop: boolean;
  @State() private mobile: boolean = window.innerWidth < 767;

  private isBottomTopPane: boolean;
  private isLeftRightPane: boolean;
  private previousWidth: string = null;
  private previousHeight: string = null;

  componentWillLoad() {
    this.initializePosition();
    this.setIcons();

    if (this.expandPane) {
      this.onExpandedChange();
    }
  }

  private initializePosition() {
    this.position =
      (this.hostElement.getAttribute('slot') as SidePanelPosition) ||
      this.position;
    this.isBottomTopPane =
      this.position === 'bottom' || this.position === 'top';
    this.isLeftRightPane = !this.isBottomTopPane;
    this.isMobileTop = this.position === 'top' || this.position === 'left';
  }

  setIcons() {
    const {expandIcon, minimizeIcon} = this.getIconNames();
    this.expandIcon = expandIcon;
    this.minimizeIcon = minimizeIcon;
  }

  private getIconNames(): { expandIcon: string; minimizeIcon: string } {
    let expandIcon = '';
    let minimizeIcon = '';

    switch (this.position) {
      case 'left':
        expandIcon = this.mobile ? 'double-chevron-up' : 'double-chevron-left';
        minimizeIcon = this.mobile
          ? 'double-chevron-down'
          : 'double-chevron-right';
        break;
      case 'right':
        expandIcon = this.mobile
          ? 'double-chevron-down'
          : 'double-chevron-right';
        minimizeIcon = this.mobile
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

    return {expandIcon, minimizeIcon};
  }

  @Watch('expandPane')
  onExpandedChange() {
    if (this.expandPane) {
      this.previousHeight = this.hostElement.offsetHeight.toString();
      this.previousWidth = this.hostElement.offsetWidth.toString();

      //fallback, if initially expanded
      if (!this.mobile) {
        if (this.previousWidth === '0') {
          this.previousWidth = '32px';
          this.previousHeight = '32px';
        }
      }

      const expandPaneSize = this.mobile ? '100%' : this.expandedPaneSize;

      if (this.isBottomTopPane || this.mobile) {
        this.animateHorizontalFadeIn(expandPaneSize);
      } else {
        this.animateVerticalFadeIn(expandPaneSize);
      }
    } else {
      if (this.mobile) {
        this.resetLayoutState();
      } else if (this.isBottomTopPane) {
        this.animateHorizontalFadeIn(this.previousHeight);
      } else {
        this.animateVerticalFadeIn(this.previousWidth);
      }
    }
  }

  @Listen('resize', {target: 'window'})
  onWindowResize() {
    const newMode = window.innerWidth <= 767;
    if (this.mobile != newMode) {
      this.mobile = newMode;
    }
  }

  @Watch('mobile')
  onMobileChange(): void {
    this.resetLayoutState();
    this.setIcons();
    this.expandPane = false;
  }

  resetLayoutState() {
    this.previousWidth = null;
    this.previousHeight = null;
    this.showContent = false;
    this.hostElement.style.removeProperty('height');
    this.hostElement.style.removeProperty('width');
  }

  private animateVerticalFadeIn(size: string) {
    requestAnimationFrame(() => {
      anime({
        targets: this.hostElement,
        duration: ANIMATION_DURATION,
        width: size,
        easing: 'linear',
        begin: () => {
          if (!this.expandPane) {
            this.showContent = false;
          }
        },
        complete: () => {
          if (this.expandPane) {
            this.showContent = true;
          } else {
            this.hostElement.style.removeProperty('width');
          }
        },
      });
    });
  }

  private animateHorizontalFadeIn(size: string) {
    requestAnimationFrame(() => {
      anime({
        targets: this.hostElement,
        duration: ANIMATION_DURATION,
        height: size,
        easing: 'linear',
        begin: () => {
          if (!this.expandPane) {
            this.showContent = false;
          }
        },
        complete: () => {
          if (this.expandPane) {
            this.showContent = true;
          } else {
            this.hostElement.style.removeProperty('height');
          }
        },
      });
    });
  }

  hiddePane(): boolean {
    if (this.inline) {
      return false;
      //floating and mobile --> mobile panes at top and bottom
    } else if (this.floating && this.mobile) {
      return false;
      //floating at normal screen --> panes are hidden if they are not expanded
    } else if (this.floating && this.expandPane && !this.mobile) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <Host
        hidden={this.hiddePane()}
        class={{
          'mobile-overlay': this.expandPane && this.mobile,
          'top-expand': this.expandPane && this.isMobileTop && this.mobile,
          'bottom-expand': this.expandPane && !this.isMobileTop && this.mobile,
        }}
      >
        <aside
          class={{
            [`${this.position}-pane-border`]: !this.mobile,
            'top-bottom-pane': this.isBottomTopPane && !this.mobile,
            'left-right-pane': this.isLeftRightPane && !this.mobile,
            'left-right-pane-mobile': this.isLeftRightPane && this.mobile,
            'box-shadow': this.floating && !this.mobile,
            'mobile-border-top':
              this.isMobileTop && this.mobile && !this.expandPane,
            'mobile-border-bottom':
              !this.isMobileTop && this.mobile && !this.expandPane,
            'mobile-expanded': this.expandPane && this.mobile,
          }}
        >
          <div
            class={{
              'title-inline-collapsed':
                !this.expandPane && !this.mobile && this.inline,
              'title-inline-expanded':
                this.expandPane && !this.mobile && this.inline,
              'title-mobile': this.mobile,
              'title-floating': this.floating,
            }}
          >
            <ix-icon-button
              icon={
                this.expandPane
                  ? this.mobile || this.floating
                    ? 'close'
                    : this.expandIcon
                  : this.minimizeIcon
              }
              ghost
              onClick={() => {
                this.expandPane = !this.expandPane;
              }}
            ></ix-icon-button>
            <span
              class={{
                rotate:
                  !this.expandPane && !this.mobile && this.isLeftRightPane,
              }}
              hidden={this.showPreviewContent && !this.expandPane}
            >
              {this.paneTitle}
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
