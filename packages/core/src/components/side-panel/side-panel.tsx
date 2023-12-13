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
import anime from "animejs";

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
        this.setBorder('right');
        return;
      case 'right':
        this.expandIcon = this.mobile
          ? 'double-chevron-down'
          : 'double-chevron-right';
        this.minimizeIcon = this.mobile
          ? 'double-chevron-up'
          : 'double-chevron-left';
        this.setBorder('left');
        break;
      case 'bottom':
        this.expandIcon = 'double-chevron-down';
        this.minimizeIcon = 'double-chevron-up';
        this.setBorder('top');
        break;
      case 'top':
        this.expandIcon = 'double-chevron-up';
        this.minimizeIcon = 'double-chevron-down';
        this.setBorder('bottom');
        return;
    }
  }

  setBorder(direction: string) {
    this.hostElement.style.setProperty(
      'border-' + direction,
      '1px solid rgba(224, 245, 255, 0.25)'
    );
  }

  componentWillRender() {
    this.determineSidePanelIcons();

    this.hostElement.style.setProperty(this.position, '0');
  }

  @Watch('mobile')
  onMobileModeChange() {
    if (!this.inline) {
      this.expanded = false;
      return;
    }

    if (this.mobile && this.inline) {
      if (this.isHorizontal) {
        this.hostElement.style.setProperty('box-shadow', '0px 0px 0px re');
      } else {
        this.hostElement.style.setProperty('width', '100%');
      }
      this.expanded = false;
    } else {
      if (this.isHorizontal) {
        this.hostElement.style.setProperty('box-shadow', '0px 0px 10px red');
      } else {
        this.hostElement.style.setProperty('width', 'unset');
      }
      this.expanded = false;
    }
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

    const dimension: 'height' | 'width' = this.isHorizontal
      ? 'height'
      : 'width';

    if (this.expanded) {
      this.hostElement.style.setProperty(dimension, this.expandedSize);
    } else {
      if (this.miniContent) {
        this.hostElement.style.setProperty(dimension, '76px');
      } else {
        this.hostElement.style.setProperty(dimension, 'unset');
      }
    }
  }

  private animateOverlayFadeIn() {

    requestAnimationFrame(() => {
      anime({
        targets: this.hostElement,
        duration: 150,
        translateX: [-240, 0],
        opacity: [0, 1],
        easing: 'linear',
        begin: () => {

          this.expanded = !this.expanded;
        },
      });
    });
  }

  render() {
    return (
      <Host hidden={!this.inline && (!this.expanded || this.mobile)}>
        <aside
          class={{
            expanded: this.expanded,
            'mini-content': this.miniContent,
            'side-panel-horizontal': this.isHorizontal,
            'side-panel-vertical': !this.isHorizontal,
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
                this.animateOverlayFadeIn();
                //this.expanded = !this.expanded;
              }}
            ></ix-icon-button>
            <span
              class="rotate"
              hidden={this.miniContent && !this.expanded && !this.mobile}
            >
              {this.paneTitle}
            </span>
          </div>
          <div
            class="side-panel-content"
            hidden={this.mobile || !this.expanded}
          >
            <slot></slot>
          </div>
        </aside>
      </Host>
    );
  }
}
