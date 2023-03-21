import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  render() {
    return (
      <Host>
        <div class="card-content">
          <slot></slot>
        </div>
        <slot name="card-accordion"></slot>
      </Host>
    );
  }
}
