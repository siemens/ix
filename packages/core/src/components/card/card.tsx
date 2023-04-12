import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  @Element() hostElement: HTMLIxCardElement;

  render() {
    return (
      <Host>
        <div class="card-content">
          <slot></slot>
        </div>
        <div class="card-footer">
          <slot name="card-accordion"></slot>
        </div>
      </Host>
    );
  }
}
