
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-application-header',
  styleUrl: 'application-header.scss',
  shadow: true,
})
export class ApplicationHeader {
  /**
   * Application name
   */
  @Prop() name: string;

  render() {
    return (
      <Host>
        <div class="logo">
          <slot name="logo"></slot>
        </div>
        <span class="name">{this.name}</span>
        <slot></slot>
      </Host>
    );
  }
}
