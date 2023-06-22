/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  @State() overlay = true;
  @State() activeMap: Record<string, boolean> = {};

  onActive(id: string) {
    if (!this.activeMap[id]) {
      this.activeMap[id] = true;
    }

    Object.keys(this.activeMap).forEach((k) => {
      this.activeMap[k] = k === id;
    });

    this.activeMap = {
      ...this.activeMap,
    };
  }

  render() {
    return (
      <Host>
        <ix-map-navigation applicationName="Test">
          {/* <div slot="logo">LOGO!!!</div> */}
          <ix-menu
            enableToggleTheme
            supportedModes={['small', 'medium', 'large']}
          >
            <ix-menu-avatar top="top 123" bottom="bottom 456">
              <ix-menu-avatar-item label="Random 1"></ix-menu-avatar-item>
              <ix-menu-avatar-item label="Random 2"></ix-menu-avatar-item>
            </ix-menu-avatar>
            <ix-menu-item>Test</ix-menu-item>

            <ix-menu-item tabIcon="home" home>
              Home
            </ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item
              active={this.activeMap['test1']}
              onClick={() => this.onActive('test1')}
            >
              Test
            </ix-menu-item>

            <ix-menu-category label="AI Configuration" icon="rocket">
              <ix-menu-item
                icon={'empty'}
                active={this.activeMap['test2']}
                onClick={() => this.onActive('test2')}
              >
                Nested Item 1
              </ix-menu-item>
              <ix-menu-item
                icon={'empty'}
                active={this.activeMap['test3']}
                onClick={() => this.onActive('test3')}
              >
                Nested Item 2
              </ix-menu-item>
            </ix-menu-category>

            <a href="#">
              <ix-menu-item>Test123</ix-menu-item>
            </a>
            <ix-menu-item>Test XZY</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item>Test</ix-menu-item>
            <ix-menu-item bottom active>
              Test
            </ix-menu-item>
            <ix-menu-about>
              <ix-menu-about-item label="About 1">
                About Content 1
              </ix-menu-about-item>

              <ix-menu-about-item label="About 2">
                About Content 2
              </ix-menu-about-item>
            </ix-menu-about>

            {/* <ix-menu-about-news label="Test" show about-item-label="About 2">
              Test
            </ix-menu-about-news> */}

            <ix-menu-settings>
              <ix-menu-settings-item label="Settings 1">
                Settings Content 1
              </ix-menu-settings-item>
              <ix-menu-settings-item label="Settings 2">
                Settings Content 2
              </ix-menu-settings-item>
            </ix-menu-settings>
          </ix-menu>
          {/* <div slot="content-header">header content</div> */}
          {this.overlay ? (
            <div slot="content-header">header content</div>
          ) : null}
          <main>
            <ix-button onClick={() => (this.overlay = !this.overlay)}>
              open
            </ix-button>
            {/* {this.overlay ? (
              <ix-map-navigation-overlay
                name="Custom overlay title"
                icon="bulb"
              >
                Lorem ipsum
              </ix-map-navigation-overlay>
            ) : null} */}

            <ix-select>
              <ix-select-item label="Item 1" value={'Item 1'}></ix-select-item>
              <ix-select-item label="Item 2" value={'Item 2'}></ix-select-item>
              <ix-select-item label="Item 3" value={'Item 3'}></ix-select-item>
            </ix-select>

            <ix-category-filter
              repeatCategories={false}
              categories={{
                ID_1: {
                  label: 'Vendor',
                  options: ['Apple', 'MS', 'Siemens'],
                },
                ID_2: {
                  label: 'Product',
                  options: ['iPhone X', 'Windows', 'APS'],
                },
              }}
            ></ix-category-filter>
          </main>
        </ix-map-navigation>
      </Host>
    );
  }
}
