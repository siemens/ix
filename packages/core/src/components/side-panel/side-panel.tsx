import { Component, Element, h, Host, Prop } from '@stencil/core';

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
   * State of the side-panel
   */
  @Prop() expanded: boolean = false;

  /**
   * Placement of the sidebar
   */
  @Prop() position: 'top' | 'left' | 'bottom' | 'right' = 'right';

  private expandIcon: string = '';
  private minimizeIcon: string = '';
  private isHorizontal: boolean;

  constructor() {
    switch (this.position) {
      case 'left':
        this.expandIcon = 'double-chevron-left';
        this.minimizeIcon = 'double-chevron-right';
        return;
      case 'right':
        this.expandIcon = 'double-chevron-right';
        this.minimizeIcon = 'double-chevron-left';
        break;
      case 'bottom':
        this.expandIcon = 'double-chevron-up';
        this.minimizeIcon = 'double-chevron-down';
        break;
      case 'top':
        this.expandIcon = 'double-chevron-down';
        this.minimizeIcon = 'double-chevron-up';
        break;
    }

    this.isHorizontal = this.position === 'bottom' || this.position === 'top';
    this.hostElement.style.setProperty(this.position, '0');
    return;
  }

  render() {
    return (
      <Host
        class={{
          expanded: this.expanded,
          'host-horizontal': this.isHorizontal,
          'host-vertical': !this.isHorizontal,
        }}
      >
        <aside
          class={{
            expanded: this.expanded,
            'side-panel-horizontal': this.isHorizontal,
            'side-panel-vertical': !this.isHorizontal,
          }}
        >
          <div class="container">
            <ix-icon-button
              icon={this.expanded ? this.expandIcon : this.minimizeIcon}
              class="btn-expand"
              ghost
              onClick={() => {
                this.expanded = !this.expanded;
              }}
            ></ix-icon-button>
            <span class="rotate">{this.paneTitle}</span>
          </div>
          <div hidden={!this.expanded}>
            <slot></slot>
          </div>
        </aside>
      </Host>
    );
  }
}
