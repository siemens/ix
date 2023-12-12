import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-side-panel-content-area',
  styleUrl: 'side-panel-content-area.scss',
  shadow: true,
})
export class SidePanelContentArea {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
