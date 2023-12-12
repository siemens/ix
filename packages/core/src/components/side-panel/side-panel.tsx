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

type SidePanelPosition = 'top' | 'left' | 'bottom' | 'right';
const mobileBreakpoint: number = 767;
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
    | '100%' = '320px';

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

  @State() private expandIcon: string = '';
  @State() private minimizeIcon: string = '';
  @State() private mobileMode: boolean = false;

  private isHorizontal: boolean;

  componentWillLoad() {
    this.position =
      (this.hostElement.getAttribute('slot') as SidePanelPosition) ||
      this.position;

    this.isHorizontal = this.position === 'bottom' || this.position === 'top';
  }

  determineSidePanelIcons() {
    switch (this.position) {
      case 'left':
        this.expandIcon = 'double-chevron-left';
        this.minimizeIcon = 'double-chevron-right';
        this.setBorder('right');
        return;
      case 'right':
        this.expandIcon = 'double-chevron-right';
        this.minimizeIcon = 'double-chevron-left';
        this.setBorder('left');
        break;
      case 'bottom':
        this.expandIcon = 'double-chevron-down';
        this.minimizeIcon = 'double-chevron-up';
        this.hostElement.style.setProperty('box-shadow', '0px 0px 10px black');
        this.setBorder('top');
        break;
      case 'top':
        this.expandIcon = 'double-chevron-up';
        this.minimizeIcon = 'double-chevron-down';
        this.hostElement.style.setProperty('box-shadow', '0px 0px 10px black');
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
    this.onWindowResize();

    this.hostElement.style.setProperty(this.position, '0');
  }

  @Listen('resize', { target: 'window' })
  onWindowResize() {
    if (window.innerWidth <= mobileBreakpoint) {
      this.mobileMode = true;
      if (this.position === 'left') {
        this.expandIcon = 'double-chevron-up';
        this.minimizeIcon = 'double-chevron-down';
      } else if (this.position === 'right') {
        this.expandIcon = 'double-chevron-down';
        this.minimizeIcon = 'double-chevron-up';
      }
    } else {
      this.mobileMode = false;
      this.determineSidePanelIcons();
    }
    console.log(this.mobileMode);
  }

  @Watch('expanded')
  onExpandedChange() {
    this.expandedChange.emit({
      position: this.position,
      expanded: this.expanded,
    });

    if (this.mobileMode) {
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
        this.hostElement.style.setProperty(dimension, '32px');
      }
    }
  }

  render() {
    return (
      <Host>
        <aside
          class={{
            expanded: this.expanded,
            'mini-content': this.miniContent,
            'side-panel-horizontal': this.isHorizontal,
            'side-panel-vertical': !this.isHorizontal,
          }}
        >
          <div class="container">
            <ix-icon-button
              icon={this.expanded ? this.expandIcon : this.minimizeIcon}
              ghost
              onClick={() => {
                this.expanded = !this.expanded;
              }}
            ></ix-icon-button>
            <span
              class="rotate"
              hidden={this.miniContent && !this.expanded && !this.mobileMode}
            >
              {this.paneTitle}
            </span>
          </div>
          <div hidden={this.mobileMode || !this.expanded}>
            <slot></slot>
          </div>
        </aside>
      </Host>
    );
  }
}
