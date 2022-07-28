/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'cw-icon',
  styleUrl: 'icon.scss',
  scoped: true,
})
export class CwIcon {
  /**
   * Size of the icon
   */
  @Prop() size: '16' | '24' | '32';

  /**
   * Color of the icon
   */
  @Prop() color: string;

  /**
   * Use one of our defined icon names e.g `copy`.
   */
  @Prop({ reflect: true }) name: string;

  render() {
    return (
      <Host
        style={{
          color: this.color ? `var(--theme-${this.color})` : 'inherit',
        }}
        class={{
          [`size-16`]: this.size === '16',
          [`size-24`]: this.size === '24',
          [`size-32`]: this.size === '32',
        }}
      >
        <i
          class={{
            'glyph': true,
            [`glyph-${this.name}`]: true,
            'glyph-16': this.size === '16',
            'glyph-24': this.size === '24',
            'glyph-32': this.size === '32',
          }}
        >
          <slot></slot>
        </i>
      </Host>
    );
  }
}
