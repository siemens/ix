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
    /*
    <div class="row-floating">
          <slot name="left"></slot>
          <div class="col-floating">
            <slot name="top"></slot>
            <slot name="bottom"></slot>
          </div>
          <slot name="right"></slot>
        </div>
     */

    /*
    <div class="col-floating">
          <slot name="top"></slot>

          <div class="row-floating">
            <slot name="left"></slot>
            <slot name="right"></slot>
          </div>

          <slot name="bottom"></slot>
        </div>
     */
    return (
      <Host style={{ height: '100%', width: '100%' }}>
        <div class="col-floating">
          <div>
            <slot name="top"></slot>
            <slot name="left"></slot>
          </div>
          <div>
            <slot name="right"></slot>
            <slot name="bottom"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
