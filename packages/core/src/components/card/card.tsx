import { Component, Element, h, Host, Prop } from '@stencil/core';

export type CardVariant =
  | 'insight'
  | 'notification'
  | 'alarm'
  | 'critical'
  | 'warning'
  | 'info'
  | 'neutral'
  | 'success'
  | 'primary';

/**
 * @since 1.6.0
 */
@Component({
  tag: 'ix-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  @Element() hostElement: HTMLIxCardElement;

  /**
   * Card variant
   */
  @Prop() variant: CardVariant = 'insight';

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
