/**
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-application-header',
  styleUrl: 'application-header.scss',
  shadow: true,
})
export class CwApplicationHeader {
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
