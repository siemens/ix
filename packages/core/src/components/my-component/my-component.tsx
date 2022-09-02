/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <ix-basic-navigation applicationName="Test">
          <div slot="logo">
            <ix-siemens-logo />
          </div>
          <ix-menu>
            <ix-menu-item>Test 1</ix-menu-item>
            <ix-menu-item>Test 2</ix-menu-item>
            <ix-menu-item>Test 3</ix-menu-item>
            <ix-menu-about>
              <ix-menu-about-item label="Legal">
                <ix-siemens-about-content></ix-siemens-about-content>
              </ix-menu-about-item>
              <ix-menu-about-item label="Example">
                <div>Example</div>
              </ix-menu-about-item>
            </ix-menu-about>
            <ix-menu-about-news label="Test" show about-item-label="Example">
              Test
            </ix-menu-about-news>
          </ix-menu>
        </ix-basic-navigation>
      </Host>
    );
  }
}
