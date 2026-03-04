import { Component, h, Host } from '@stencil/core';
/**
 * @documentation https://ix.siemens.io//docs/components/card/guide.md
 * @figma-main-component-id 104612:25530
 */
@Component({
  tag: 'ix-card-content',
  styleUrl: 'card-content.scss',
  shadow: true,
})
export class CardContent {
  render() {
    return (
      <Host>
        <div class="content-wrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
