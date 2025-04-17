import { Component, h, Host } from '@stencil/core';

/**
 * @slot title-actions - Place additional actions inside title
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
          <slot name="title-actions"></slot>
        </div>
      </Host>
    );
  }
}
