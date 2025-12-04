import { Component, Element, h, Host, Prop } from '@stencil/core';
import type { CardVariant } from './card.types';

@Component({
  tag: 'ix-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  @Element() hostElement!: HTMLIxCardElement;

  /**
   * Card variant
   */
  @Prop() variant: CardVariant = 'outline';

  /**
   * Show card in selected state
   */
  @Prop() selected: boolean = false;

  /**
   * If true, disables hover and active styles and changes cursor to default
   */
  @Prop() passive: boolean = false;

  render() {
    return (
      <Host
        class={{
          selected: this.selected,
          [`card-${this.variant}`]: true,
          passive: this.passive,
        }}
      >
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
