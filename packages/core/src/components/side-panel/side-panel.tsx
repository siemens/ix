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

const oppositeEdge = {
  top: 'Bottom',
  right: 'Left',
  bottom: 'Top',
  left: 'Right',
};

@Component({
  tag: 'ix-side-panel',
  styleUrl: 'side-panel.scss',
  shadow: true,
})
export class SidePanel {
  @Element() hostElement: HTMLIxSidePanelElement;

  /**
   * Title of the side panel
   */
  @Prop() paneTitle: string = 'Pane title';

  /**
   * Floating or inline style
   */
  @Prop() inline: boolean = true;

  /**
   * Floating or inline style
   */
  @Prop() floating: boolean = !this.inline;

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
   * State of the side-panel
   */
  @Prop({ mutable: true, reflect: true }) expandPane: boolean = false;

  /**
   * Placement of the sidebar
   */
  @Prop({ mutable: true, reflect: true }) position: SidePanelPosition = 'top';

  /**
   * Event
   */
  @Event() expandedChange: EventEmitter<ExpandedChangeEvent>;

  /**
   * TODO: !!!
   */
  @Prop({ mutable: true, reflect: true }) mobile: boolean =
    window.innerWidth < 767;

  @State() private expandIcon: string = '';
  @State() private showContent: boolean = false;
  @State() private minimizeIcon: string = '';
  @State() private isMobileTop: boolean =
    (this.position === 'top' || this.position === 'left') && this.mobile;

  private isBottomTopPane: boolean;
  private isLeftRightPane: boolean;
  private previousWidth: string = null;
  private previousHeight: string = null;

  componentWillLoad() {
    this.position =
      (this.hostElement.getAttribute('slot') as SidePanelPosition) ||
      this.position;
    this.isBottomTopPane =
      this.position === 'bottom' || this.position === 'top';
    this.isLeftRightPane = !this.isBottomTopPane;

    this.determineSidePanelIcons();

    if (this.expandPane) {
      this.onExpandedChange();
    }

    const borderPosition = oppositeEdge[this.position];
    this.hostElement.style[`border${borderPosition}`] =
      '1px solid rgba(224, 245, 255, 0.25)';
    this.hostElement.style.boxShadow = '0px 0px 15px black';
  }

  determineSidePanelIcons() {
    switch (this.position) {
      case 'left':
        this.expandIcon = this.mobile
          ? 'double-chevron-up'
          : 'double-chevron-left';
        this.minimizeIcon = this.mobile
          ? 'double-chevron-down'
          : 'double-chevron-right';
        return;
      case 'right':
        this.expandIcon = this.mobile
          ? 'double-chevron-down'
          : 'double-chevron-right';
        this.minimizeIcon = this.mobile
          ? 'double-chevron-up'
          : 'double-chevron-left';
        break;
      case 'bottom':
        this.expandIcon = 'double-chevron-down';
        this.minimizeIcon = 'double-chevron-up';
        break;
      case 'top':
        this.expandIcon = 'double-chevron-up';
        this.minimizeIcon = 'double-chevron-down';
        return;
    }
  }

  @Watch('expandPane')
  onExpandedChange() {
    if (this.expandPane) {
      this.previousHeight = this.hostElement.offsetHeight.toString();
      this.previousWidth = this.hostElement.offsetWidth.toString();
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

  @Listen('resize', { target: 'window' })
  onWindowResize() {
    const newMode = window.innerWidth <= 787;
    if (this.mobile != newMode) {
      this.mobile = newMode;
    }
  }

  @Watch('mobile')
  onMobileChange(): void {
    this.expandPane = false;
    this.resetLayoutState();
  }

  resetLayoutState() {
    this.previousWidth = null;
    this.previousHeight = null;
    this.hostElement.style.removeProperty('height');
    this.hostElement.style.removeProperty('width');
  }

  private animateVerticalFadeIn(size: string) {
    requestAnimationFrame(() => {
      anime({
        targets: this.hostElement,
        duration: 300,
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
          }
        },
      });
    });
  }

  private animateHorizontalFadeIn(size: string) {
    requestAnimationFrame(() => {
      anime({
        targets: this.hostElement,
        duration: 300,
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
          }
        },
      });
    });
  }

  render() {
    return (
      <Host
        hidden={!this.inline && (!this.expandPane || this.mobile)}
        class={{
          'mobile-overlay': this.expandPane && this.mobile,
          'top-expand': this.expandPane && this.isMobileTop,
          'bottom-expand': this.expandPane && !this.isMobileTop,
        }}
      >
        <aside
          class={{
            'top-bottom-pane': this.isBottomTopPane && !this.mobile,
            'left-right-pane': this.isLeftRightPane && !this.mobile,
            'left-right-pane-mobile': this.isLeftRightPane && this.mobile,
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
          <div class="side-panel-content" hidden={!this.showContent}>
            <slot></slot>
          </div>
        </aside>
      </Host>
    );
  }
}
