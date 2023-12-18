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

type SidePanelPosition = 'top' | 'left' | 'bottom' | 'right';
type ExpandedChangeEvent = {
  position: string;
  expanded: boolean;
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
   * The maximum size of the sidebar, when it is expanded
   */
  @Prop() expandedSize:
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
  @Prop() miniContent: boolean = false;

  /**
   * State of the side-panel
   */
  @Prop({ mutable: true, reflect: true }) expanded: boolean = false;

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
  @State() private minimizeIcon: string = '';

  private isHorizontal: boolean;

  componentWillLoad() {
    this.position =
      (this.hostElement.getAttribute('slot') as SidePanelPosition) ||
      this.position;
    this.isHorizontal = this.position === 'bottom' || this.position === 'top';

    if (this.expanded) {
      this.onExpandedChange();
    }
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

  componentWillRender() {
    this.determineSidePanelIcons();

    this.hostElement.style.setProperty(this.position, '0');
  }

  @Watch('mobile')
  onMobileModeChange() {
    this.expanded = false;
    this.determineSidePanelIcons();
  }

  @Watch('expanded')
  onExpandedChange() {
    this.expandedChange.emit({
      position: this.position,
      expanded: this.expanded,
    });

    if (this.mobile && !this.isHorizontal) {
      return;
    }

    if (this.expanded) {
      if (this.isHorizontal) {
        this.animateHorizontalFadeIn(parseInt(this.expandedSize, 10));
      } else {
        this.animateVerticalFadeIn(parseInt(this.expandedSize, 10));
      }
    } else {
      if (this.isHorizontal) {
        this.animateHorizontalFadeIn(32);
      } else {
        if (this.miniContent) {
          this.animateVerticalFadeIn(76);
        } else {
          this.animateVerticalFadeIn(32);
        }
      }
    }
  }

  private animateVerticalFadeIn(size: number) {
    requestAnimationFrame(() => {
      anime({
        targets: this.hostElement,
        duration: 300,
        width: size,
        easing: 'linear',
      });
    });
  }

  private animateHorizontalFadeIn(size: number) {
    requestAnimationFrame(() => {
      anime({
        targets: this.hostElement,
        duration: 300,
        height: size,
        easing: 'linear',
      });
    });
  }

  render() {
    return (
      <Host
        hidden={!this.inline && (!this.expanded || this.mobile)}
        class={{
          'mobile-overlay': this.expanded && this.mobile,
        }}
      >
        <aside
          class={{
            expanded: this.expanded && !this.mobile,
            'box-shadow': this.inline && !this.mobile,
            'mini-content': this.miniContent,
            'side-panel-horizontal': this.isHorizontal,
            'side-panel-vertical': !this.isHorizontal,
            'border-top': this.position === 'top',
            'border-right': this.position === 'right',
            'border-left': this.position === 'left',
            'border-bottom': this.position === 'bottom',
          }}
        >
          <div
            class={{
              container: true,
              floating: !this.inline,
            }}
          >
            <ix-icon-button
              icon={
                !this.inline
                  ? 'close'
                  : this.expanded
                  ? this.expandIcon
                  : this.minimizeIcon
              }
              ghost
              onClick={() => {
                this.expanded = !this.expanded;
              }}
            ></ix-icon-button>
            <span class="rotate" hidden={this.miniContent && !this.expanded}>
              {this.paneTitle}
            </span>
          </div>
          <div class="side-panel-content" hidden={!this.expanded}>
            <slot></slot>
          </div>
        </aside>
      </Host>
    );
  }
}
