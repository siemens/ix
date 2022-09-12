import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-flip-tile-content',
  styleUrl: 'flip-tile-content.css',
  shadow: true,
})
export class FlipTileContent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
