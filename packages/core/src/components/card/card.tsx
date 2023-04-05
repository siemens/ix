import { Component, Element, h, Host, Prop } from '@stencil/core';

export type CardVariant =
  | 'insight'
  | 'notification'
  | 'alarm'
  | 'critical'
  | 'warning';

@Component({
  tag: 'ix-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  /**
   * Look of the card
   */
  @Prop() variant: CardVariant = 'insight';

  @Element() hostElement: HTMLIxCardElement;

  render() {
    return (
      <Host class={`card-${this.variant}`}>
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
