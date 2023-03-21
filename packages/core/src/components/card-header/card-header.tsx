import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-card-header',
  styleUrl: 'card-header.scss',
  shadow: true,
})
export class CardHeader {
  render() {
    return (
      <Host>
        <slot></slot>
        <div class="header-actions">
          <slot name="actions"></slot>
        </div>
      </Host>
    );
  }
}
