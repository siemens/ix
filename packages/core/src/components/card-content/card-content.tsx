import { Component, h, Host } from '@stencil/core';

/**
 * @slot default - Card body content.
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
        <div class="content-wrapper" part="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
