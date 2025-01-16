import { Component, h, Host } from '@stencil/core';

/**
 * @since 1.6.0
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
