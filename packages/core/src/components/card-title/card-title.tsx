import { Component, h, Host } from '@stencil/core';

/**
 * @since 1.6.0
 */
@Component({
  tag: 'ix-card-title',
  styleUrl: 'card-title.scss',
  shadow: true,
})
export class CardHeader {
  render() {
    return (
      <Host>
        <slot></slot>
        <div class="title-actions">
          <slot name="title-action"></slot>
        </div>
      </Host>
    );
  }
}
