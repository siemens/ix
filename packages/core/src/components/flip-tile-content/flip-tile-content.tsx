/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-flip-tile-content',
  styleUrl: 'flip-tile-content.css',
  shadow: true,
})
export class CwFlipTileContent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
