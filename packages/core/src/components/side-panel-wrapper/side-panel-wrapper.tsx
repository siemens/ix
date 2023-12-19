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
   * Determines if the side panes behave inline
   */
  @Prop() inline: boolean = true;

  /**
   * Determines if the side panes behave floating
   */
  @Prop() floating: boolean = false;

  /**
   * Choose the variant of the panes
   */
  @Prop() variant: '1' | '2' = '1';

  @State() expanded: boolean = false;
  @State() mobileMode: boolean = false;

  private sidePanels: {
    [position: string]: HTMLIxSidePanelElement | null;
  } = {};

  componentWillRender() {
    const sidePanels = this.getSidePanels();
    sidePanels.forEach((sidePanelElement) => {
      this.sidePanels[sidePanelElement.position] = sidePanelElement;
      sidePanelElement.inline = this.inline;
    });

    this.onWindowResize();
  }

  componentDidRender() {
    this.configureLayout();
  }

  configureLayout() {
    const sidePanels = this.getSidePanels();
    sidePanels.forEach((sidePanelElement) => {
      let zIndex: string = '1';
      const isBottomTop =
        sidePanelElement.position === 'top' ||
        sidePanelElement.position === 'bottom';

      if (this.variant === '1') {
        if (!isBottomTop) {
          zIndex = '2';
        }
      } else {
        if (isBottomTop) {
          zIndex = '2';
        }
      }

      sidePanelElement.style.zIndex = zIndex;
    });
  }

  @Listen('resize', { target: 'window' })
  onWindowResize() {
    const newMode = window.innerWidth <= mobileBreakpoint;
    if (this.mobileMode != newMode) {
      this.mobileMode = newMode;
    }
  }

  /**
   * Open the side panel
   */
  @Method()
  public setOpenSidePanel(position: string) {
    this.sidePanels[position].expandPane = true;
  }

  /**
   * Close the side panel, especially for the floating version
   */
  @Method()
  public closeSidePanel() {
    this.expanded = false;
  }

  getSidePanels() {
    return this.hostElement.querySelectorAll('ix-side-panel');
  }

  render() {
    return (
      <Host style={{ height: '100%', width: '100%' }}>
        {this.variant == '1' && !this.mobileMode ? (
          <ix-row class="row">
            <slot name="left"></slot>
            <ix-col class="col">
              <slot name="top"></slot>
              <slot name="content"></slot>
              <slot name="bottom"></slot>
            </ix-col>
            <slot name="right"></slot>
          </ix-row>
        ) : null}
        {this.variant == '2' && !this.mobileMode ? (
          <div class="side-pane-wrapper">
            <ix-row
              class={{
                col: true,
                'col-floating': this.floating,
              }}
            >
              <slot name="top"></slot>
              <ix-col class="row">
                <div class="side-pane-wrapper">
                  <slot name="left"></slot>
                </div>
                {this.inline ? (
                  <div class="content">
                    <slot name="content"></slot>
                  </div>
                ) : null}
                <div class="side-pane-wrapper">
                  <slot name="right"></slot>
                </div>
              </ix-col>
              <slot name="bottom"></slot>
            </ix-row>
            {this.floating ? (
              <div class="content absolute">
                <slot name="content"></slot>
              </div>
            ) : null}
          </div>
        ) : null}
        {this.mobileMode ? (
          <ix-col class="col">
            <div>
              <slot name="top"></slot>
              <slot name="left"></slot>
            </div>
            <div class="content-area">
              <slot name="content"></slot>
            </div>
            <div>
              <slot name="right"></slot>
              <slot name="bottom"></slot>
            </div>
          </ix-col>
        ) : null}
      </Host>
    );
  }
}
