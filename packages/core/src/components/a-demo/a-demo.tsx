import { Component, Element, Host, h } from '@stencil/core';
import { makeRef } from '../utils/make-ref';

@Component({
  tag: 'a-demo',
  shadow: true,
})
export class ADemo {
  @Element() hostElement!: HTMLADemoElement;

  private readonly buttonRef = makeRef<HTMLIxButtonElement>();

  componentDidLoad() {}

  render() {
    return (
      <Host>
        <ix-button ref={this.buttonRef}>Button inside a-demo</ix-button>
        <ix-dropdown trigger={this.buttonRef.waitForCurrent()}>
          <ix-dropdown-item>Item 1</ix-dropdown-item>
          <ix-dropdown-item>Item 2</ix-dropdown-item>
          <ix-dropdown-item>Item 3</ix-dropdown-item>
          <ix-dropdown-item>Item 4</ix-dropdown-item>
          <ix-dropdown-item>Item 5</ix-dropdown-item>
          <slot></slot>
        </ix-dropdown>
      </Host>
    );
  }
}
