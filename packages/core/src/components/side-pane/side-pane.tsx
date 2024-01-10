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
  Prop,
  State,
  Watch,
} from '@stencil/core';
import anime from 'animejs';
import Animation from '../utils/animation';
import { applicationLayoutService } from '../utils/application-layout';
import { matchBreakpoint } from '../utils/breakpoints';

export type SidePanelPosition = 'top' | 'left' | 'bottom' | 'right';
export type ExpandPaneChangeEvent = {
  position: string;
  expanded: boolean;
};

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
   * Behaviour of the side pane
   */
  @Prop() behaviour: 'floating' | 'inline' = 'inline';

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
   * Toggle either the preview content is shown or not
   */
  @Prop() showPreviewContent: boolean = false;

  /**
   * State of the side-pane
   */
  @Prop({ mutable: true }) expandPane: boolean = false;

  /**
   * Placement of the sidebar
   */
  @Prop() position: SidePanelPosition = 'top';

  /**
   * Event
   */
  @Event() expandPaneChange: EventEmitter<ExpandPaneChangeEvent>;

  @State() private expandIcon: string = '';
  @State() private showContent: boolean = false;
  @State() private minimizeIcon: string = '';
  @State() private isMobile: boolean = false;

  private previousWidth: string = null;
  private previousHeight: string = null;
  private inline: boolean = null;
  private floating: boolean = null;

  get pos() {
    return this.hostElement.getAttribute('slot') as SidePanelPosition;
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
    this.inline = this.behaviour === 'inline';
    this.floating = this.behaviour === 'floating';

    if (this.showPreviewContent && this.isBottomTopPane) {
      console.warn('Preview content is only available on vertical side panes!');
    }

    this.setIcons();

    if (this.expandPane) {
      this.onExpandedChange();
    }

    applicationLayoutService.onChange.on(() => {
      this.isMobile = matchBreakpoint('sm');
    });
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

  @Watch('expandPane')
  onExpandedChange() {
    if (this.expandPane) {
      this.previousHeight = this.hostElement.offsetHeight.toString();
      this.previousWidth = this.hostElement.offsetWidth.toString();

      //fallback, if initially expanded
      if (!this.isMobile) {
        if (this.previousWidth === '0') {
          this.previousWidth = this.showPreviewContent ? '76px' : '32px';
          this.previousHeight = this.showPreviewContent ? '76px' : '32px';
        }
      }

      const expandPaneSize = this.isMobile ? '100%' : this.expandedPaneSize;

      if (this.isBottomTopPane || this.isMobile) {
        this.animateHorizontalFadeIn(expandPaneSize);
      } else {
        this.animateVerticalFadeIn(expandPaneSize);
      }
    } else {
      if (this.isMobile) {
        this.resetLayoutState();
      } else if (this.isBottomTopPane) {
        this.animateHorizontalFadeIn(this.previousHeight);
      } else {
        this.animateVerticalFadeIn(this.previousWidth);
      }
    }

    this.expandPaneChange.emit({
      position: this.position,
      expanded: this.expandPane,
    });
  }

  @Watch('isMobile')
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
        duration: Animation.mediumTime,
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
        duration: Animation.mediumTime,
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
    } else if (this.floating && this.isMobile) {
      return false;
      //floating at normal screen --> panes are hidden if they are not expanded
    } else if (this.floating && this.expandPane && !this.isMobile) {
      return false;
    }

    return true;
  }

  hidePaneContent() {
    if (this.showPreviewContent && this.isLeftRightPane && !this.isMobile) {
      return false;
    } else if (this.showContent) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <Host
        hidden={this.hiddePane()}
        class={{
          'mobile-overlay': this.expandPane && this.isMobile,
          'top-expand': this.expandPane && this.isMobileTop && this.isMobile,
          'bottom-expand':
            this.expandPane && !this.isMobileTop && this.isMobile,
          'preview-content':
            this.isLeftRightPane &&
            !this.expandPane &&
            !this.isMobile &&
            this.showPreviewContent,
        }}
        aria-hidden={!this.hiddePane()}
        aria-expanded={this.expandPane}
      >
        <aside
          class={{
            [`${this.position}-pane-border`]: !this.isMobile,
            'top-bottom-pane': this.isBottomTopPane && !this.isMobile,
            'left-right-pane': this.isLeftRightPane && !this.isMobile,
            'left-right-pane-mobile': this.isLeftRightPane && this.isMobile,
            'box-shadow': this.floating && !this.isMobile,
            'mobile-border-top':
              this.isMobileTop && this.isMobile && !this.expandPane,
            'mobile-border-bottom':
              !this.isMobileTop && this.isMobile && !this.expandPane,
            'mobile-expanded': this.expandPane && this.isMobile,
          }}
        >
          <div
            class={{
              'title-inline-collapsed':
                !this.expandPane && !this.isMobile && this.inline,
              'title-inline-expanded':
                this.expandPane && !this.isMobile && this.inline,
              'title-mobile': this.isMobile,
              'title-floating': this.floating,
            }}
          >
            <ix-icon-button
              icon={
                this.expandPane
                  ? this.isMobile || this.floating
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
                  !this.expandPane && !this.isMobile && this.isLeftRightPane,
              }}
              hidden={
                this.showPreviewContent &&
                !this.isMobile &&
                !this.expandPane &&
                this.isLeftRightPane
              }
            >
              {this.paneTitle}
            </span>
          </div>
          <div class="side-pane-content" hidden={this.hidePaneContent()}>
            <slot></slot>
          </div>
        </aside>
      </Host>
    );
  }
}
