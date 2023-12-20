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
   * Determines if the side panes behave inline
   */
  @Prop() inline: boolean = false;

  /**
   * Determines if the side panes behave floating
   */
  @Prop() floating: boolean = true;

  /**
   * Choose the variant of the panes
   */
  @Prop() variant: '1' | '2' = '1';

  @State() mobileMode: boolean = false;

  private sidePanels: {
    [position: string]: HTMLIxSidePanelElement | null;
  } = {};

  componentWillRender() {
    if (this.inline && this.floating) {
      console.error('Inline and floating can not be set at once!');
      return;
    }

    this.onWindowResize();
  }

  componentDidRender() {
    const sidePanels = this.getSidePanels();
    sidePanels.forEach((sidePanelElement) => {
      this.sidePanels[sidePanelElement.position] = sidePanelElement;
      sidePanelElement.inline = this.inline;
      sidePanelElement.floating = this.floating;
    });

    this.configureLayout();
  }

  configureLayout() {
    const sidePanels = this.getSidePanels();
    sidePanels.forEach((sidePanelElement) => {
      let zIndex: string = '1';
      const isBottomTop =
        sidePanelElement.position === 'top' ||
        sidePanelElement.position === 'bottom';

      if (this.mobileMode) {
        sidePanelElement.style.removeProperty('z-index');
        return;
      } else if (this.variant === '1') {
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
              <div>
                <slot name="top"></slot>
              </div>
              {this.inline ? (
                <div class="content">
                  <slot name="content"></slot>
                </div>
              ) : null}
              <div>
                <slot name="bottom"></slot>
              </div>
            </ix-col>
            <slot name="right"></slot>
            {this.floating ? (
              <div class="content absolute">
                <slot name="content"></slot>
              </div>
            ) : null}
          </ix-row>
        ) : null}
        {this.variant == '2' && !this.mobileMode ? (
          <div class="side-panes-wrapper">
            <ix-col
              class={{
                col: true,
                'col-floating': this.floating,
              }}
            >
              <div>
                <slot name="top"></slot>
              </div>
              <div class="row">
                <div class="side-pane-wrapper-vertical">
                  <slot name="left"></slot>
                </div>
                {this.inline ? (
                  <div class="content">
                    <slot name="content"></slot>
                  </div>
                ) : null}
                <div class="side-pane-wrapper-vertical">
                  <slot name="right"></slot>
                </div>
              </div>
              <div>
                <slot name="bottom"></slot>
              </div>
              {this.floating ? (
                <div class="content absolute">
                  <slot name="content"></slot>
                </div>
              ) : null}
            </ix-col>
          </div>
        ) : null}
        {this.mobileMode ? (
          <ix-col class="col">
            <div>
              <slot name="top"></slot>
              <slot name="left"></slot>
            </div>
            <div class="content">
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
