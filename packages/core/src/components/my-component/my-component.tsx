/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
        <button id="trigger">Test</button>
        <ix-dropdown trigger={'trigger'}>
          <ix-dropdown-item label="test 1"></ix-dropdown-item>
          <ix-dropdown-item label="test 2"></ix-dropdown-item>
          <ix-dropdown-item label="test 3"></ix-dropdown-item>
          <ix-dropdown-item label="test 4"></ix-dropdown-item>
        </ix-dropdown>
        <button id="trigger2">Test 2</button>

        <ix-dropdown trigger={'trigger2'} closeBehavior={'outside'}>
          <ix-dropdown-item label="test 1"></ix-dropdown-item>
          <ix-dropdown-item label="test 2"></ix-dropdown-item>
          <ix-dropdown-item label="test 3"></ix-dropdown-item>
          <ix-dropdown-item label="test 4"></ix-dropdown-item>
        </ix-dropdown>
        <ix-breadcrumb>
          <ix-breadcrumb-item label="test"></ix-breadcrumb-item>
          <ix-breadcrumb-item label="test"></ix-breadcrumb-item>
          <ix-breadcrumb-item label="test"></ix-breadcrumb-item>
          <ix-breadcrumb-item label="test"></ix-breadcrumb-item>
          <ix-breadcrumb-item label="test"></ix-breadcrumb-item>
          <ix-breadcrumb-item label="test"></ix-breadcrumb-item>
          <ix-breadcrumb-item label="test"></ix-breadcrumb-item>
          <ix-breadcrumb-item label="test222"></ix-breadcrumb-item>
          <ix-breadcrumb-item label="test22"></ix-breadcrumb-item>
          <ix-breadcrumb-item label="test2"></ix-breadcrumb-item>
        </ix-breadcrumb>

        <ix-select>
          <ix-select-item label="1" value={'1'}></ix-select-item>
          <ix-select-item label="2" value={'2'}></ix-select-item>
          <ix-select-item label="3" value={'3'}></ix-select-item>
        </ix-select>

        <ix-dropdown-button label="test">
          <ix-dropdown-item label="Test 1"></ix-dropdown-item>
          <ix-dropdown-item label="Test 2"></ix-dropdown-item>
          <ix-dropdown-item label="Test 3"></ix-dropdown-item>
          <ix-dropdown-item label="Test 4"></ix-dropdown-item>
        </ix-dropdown-button>

        <ix-split-button icon="star">
          <ix-split-button-item icon="rocket"></ix-split-button-item>
          <ix-split-button-item icon="document"></ix-split-button-item>
          <ix-split-button-item icon="copy"></ix-split-button-item>
        </ix-split-button>
      </Host>
    );
  }
}
