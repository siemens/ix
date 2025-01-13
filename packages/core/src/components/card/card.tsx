import { Component, Element, h, Host, Prop } from '@stencil/core';

//TODO(IX-1601): Remove insight, notification in 3.0
export type CardVariant =
  | 'insight'
  | 'notification'
  | 'alarm'
  | 'critical'
  | 'warning'
  | 'info'
  | 'neutral'
  | 'success'
  | 'primary'
  | 'outline'
  | 'filled';

/**
 * @since 1.6.0
 */
@Component({
  tag: 'ix-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  @Element() hostElement!: HTMLIxCardElement;

  /**
   * Card variant
   * @deprecated variant insight and notification will be removed in 3.0. Use 'outline' or 'filled' instead.
   */
  @Prop() variant: CardVariant = 'insight';

  /**
   * @since 2.1.0
   */
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host
        class={{
          selected: this.selected,
          [`card-${this.variant}`]: true,
        }}
      >
        <div class="card-content">
          <div class="card-content-wrapper">
            <slot></slot>
          </div>
        </div>
        <div class="card-footer">
          <slot name="card-accordion"></slot>
        </div>
      </Host>
    );
  }
}
