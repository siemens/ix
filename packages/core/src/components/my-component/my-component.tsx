/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
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
        <div
          style={{
            display: 'block',
            position: 'relative',
            width: '100rem',
            height: '35%',
            backgroundColor: 'lightgrey',
          }}
        >
          <ix-breadcrumb>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
            <ix-breadcrumb-item label="Test 1"></ix-breadcrumb-item>
          </ix-breadcrumb>
        </div>
      </Host>
    );
  }
}
