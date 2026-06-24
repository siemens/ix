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

  private onKeyDown(event: KeyboardEvent) {
    if (this.passive) {
      return;
    }
    const originalTarget = event.composedPath()[0];

    if (originalTarget !== this.hostElement) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.hostElement.click();
    }
  }

  render() {
    return (
      <Host
        role={this.passive ? 'presentation' : 'button'}
        tabIndex={this.passive ? -1 : 0}
        onKeyDown={(event: KeyboardEvent) => this.onKeyDown(event)}
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
