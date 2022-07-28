/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cw-flip-tile-content',
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
