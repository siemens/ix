import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ix-tab-panel',
  shadow: true,
})
export class TabPanel {
  /**
   * The value of the tab panel, which should match the value of the corresponding tab.
   */
  @Prop() value?: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
