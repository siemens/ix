import {
  Component,
  Element,
  h,
  Host,
  Listen,
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

  private expandedPanelPosition: string = '';
  private mobileMode: boolean = false;

  componentWillRender() {
    this.onWindowResize();
  }

  @Listen('resize', { target: 'window' })
  onWindowResize() {
    this.mobileMode = window.innerWidth <= mobileBreakpoint;
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
  }

  getSidePanel(): HTMLIxSidePanelElement {
    return this.hostElement.querySelector(
      `[slot="${this.expandedPanelPosition}"]`
    );
  }

  setExpandedState() {
    const sidePanel: HTMLIxSidePanelElement = this.getSidePanel();
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
          style={{
            display: this.expanded && this.mobileMode ? 'block' : 'none',
            height: '100%',
            width: '100%',
            position: 'absolute',
            zIndex: '1',
            backgroundColor: 'black',
          }}
        >
          <div
            id="mobile-full-screen-header"
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p>Header</p>
            <ix-icon-button
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
        <div style={{ zIndex: '1' }}>
          <slot name="top"></slot>
        </div>
        <div class="verticalSidePanel" style={{ backgroundColor: 'white' }}>
          <slot name="left"></slot>
          <slot name="right"></slot>
        </div>
        <div style={{ zIndex: '1' }}>
          <slot name="bottom"></slot>
        </div>
      </Host>
    );
  }
}
