import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cw-tile',
  styleUrl: 'tile.scss',
  scoped: true,
})
export class CwTile {
  /**
   * Size of the tile - one of 'small', 'medium' or 'large'
   */
  @Prop() size: 'small' | 'medium' | 'big' = 'medium';

  render() {
    return (
      <Host
        class={{
          'tile-small': this.size === 'small',
          'tile-medium': this.size === 'medium',
          'tile-big': this.size === 'big',
        }}
      >
        <div class="tile-header text-l-title">
          <slot name="header"></slot>
        </div>
        <div class="tile-subheader">
          <slot name="subheader"></slot>
        </div>
        <div class="tile-content">
          <slot></slot>
        </div>
        <div class="tile-footer">
          <slot name="footer"></slot>
        </div>
      </Host>
    );
  }
}
