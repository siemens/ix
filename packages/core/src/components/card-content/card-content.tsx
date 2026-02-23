import { Component, h, Host } from '@stencil/core';

/**
 * @figma-main-component-id 104612:25530
 */
@Component({
  tag: 'ix-card-content',
  styleUrl: 'card-content.scss',
  shadow: true,
})
export class CardContent {
  render() {
    return (
      <Host>
        <div class="content-wrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
