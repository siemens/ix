import { Component, h, Host } from '@stencil/core';

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
          <slot name="actions"></slot>
        </div>
      </Host>
    );
  }
}
