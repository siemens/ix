import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
} from '@stencil/core';

const mobileBreakpoint: number = 767;

@Component({
  tag: 'ix-side-panel-wrapper',
  styleUrl: 'side-panel-wrapper.scss',
  shadow: true,
})
export class SidePanelWrapper {
  @Element() hostElement: HTMLIxSidePanelWrapperElement;

  /**
   * Sets the behaviour of the component, either it should be an inline or a floating component
   */
  @Prop() behaviour: 'inline' | 'floating' = 'inline';

  /**
   * TODO: !!!
   */
  @State() expanded: boolean = false;

  /**
   * TODO: !!!
   */
  @State() overlayHeading: string = '';

  private expandedPanelPosition: string = '';
  private mobileMode: boolean = false;

  private sidePanels: {
    [position: string]: HTMLIxSidePanelElement | null;
  } = {};

  componentWillLoad() {
    this.onWindowResize();
  }

  componentWillRender() {
    const sidePanels = this.getSidePanels();
    sidePanels.forEach((sidePanelElement) => {
      this.sidePanels[sidePanelElement.position] = sidePanelElement;
      sidePanelElement.inline = this.behaviour === 'inline';
    });

    this.onWindowResize();
  }

  @Listen('resize', { target: 'window' })
  onWindowResize() {
    const newMode = window.innerWidth <= mobileBreakpoint;
    if (this.mobileMode != newMode) {
      this.mobileMode = newMode;

      for (var key in this.sidePanels) {
        this.sidePanels[key].mobile = this.mobileMode;
      }
    }
  }

  /**
   * Open the side panel, especially for the floating version
   */
  @Method()
  public setOpenSidePanel() {
    this.expanded = true;
  }

  /**
   * Close the side panel, especially for the floating version
   */
  @Method()
  public closeSidePanel() {
    this.expanded = false;
  }

  handleExpandChange(expandDetail: { position: string; expanded: boolean }) {
    const slotElement: any = this.hostElement.shadowRoot.querySelector(
      'slot[name=' + expandDetail.position + ']'
    );
    const childrenElements = slotElement.assignedElements()[0].innerHTML;
    const mobileContentArea = this.hostElement.shadowRoot.querySelector(
      '#mobile-full-screen-area'
    );

    const contentArea = mobileContentArea.querySelector(
      '#mobile-full-screen-content'
    );

    contentArea.innerHTML = childrenElements;
    mobileContentArea.appendChild(contentArea);

    this.expanded = expandDetail.expanded;
    this.expandedPanelPosition = expandDetail.position;
    this.overlayHeading = this.getSidePanel(
      this.expandedPanelPosition
    ).paneTitle;
  }

  getSidePanel(position: string): HTMLIxSidePanelElement {
    return this.hostElement.querySelector(`[slot="${position}"]`);
  }

  getSidePanels() {
    return this.hostElement.querySelectorAll('ix-side-panel');
  }

  setExpandedState() {
    const sidePanel: HTMLIxSidePanelElement = this.getSidePanel(
      this.expandedPanelPosition
    );
    sidePanel.expanded = this.expanded;
  }

  render() {
    return (
      <Host
        onExpandedChange={(expandDetail) => {
          this.handleExpandChange(expandDetail.detail);
        }}
        style={{ height: '100%', width: '100%' }}
      >
        <div
          id="mobile-full-screen-area"
          class="mobile-full-screen-area"
          style={{
            display: this.expanded && this.mobileMode ? 'block' : 'none',
          }}
        >
          <div class="mobile-full-screen-header">
            <p>{this.overlayHeading}</p>
            <ix-icon-button
              ghost
              icon="close"
              size="16"
              variant="primary"
              onClick={(_) => {
                this.expanded = !this.expanded;
                this.setExpandedState();
              }}
            ></ix-icon-button>
          </div>
          <div id="mobile-full-screen-content"></div>
        </div>
        <div
          style={{
            zIndex: this.mobileMode ? 'unset' : '10',
          }}
        >
          <slot name="top"></slot>
        </div>
        <div class="verticalSidePanel" style={{ backgroundColor: 'white' }}>
          <slot name="left"></slot>
          {this.behaviour === 'inline' ? (
            <div class="content-area">
              <slot name="content"></slot>
            </div>
          ) : null}
          <slot name="right"></slot>
        </div>
        <div style={{ zIndex: this.mobileMode ? 'unset' : '10' }}>
          <slot name="bottom"></slot>
        </div>
        {this.behaviour === 'floating' ? (
          <div class="content-area content-area_absolute">
            <slot name="content"></slot>
          </div>
        ) : null}
      </Host>
    );
  }
}
