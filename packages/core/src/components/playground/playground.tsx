/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  // shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  scoped: true,
})
export class PlaygroundInternal {
  render() {
    return (
      <Host>
        <ix-dropdown-button
          closeBehavior="outside"
          label="Dropdown"
          variant="primary"
          icon="checkboxes"
        >
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown-button>
        <ix-dropdown-button
          label="Dropdown"
          variant="primary"
          outline
          icon="checkboxes"
        >
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown-button>
        <ix-dropdown-button
          closeBehavior="inside"
          label="Dropdown"
          variant="primary"
          ghost
          icon="checkboxes"
        >
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
          <ix-dropdown-item label="Item 2"></ix-dropdown-item>
        </ix-dropdown-button>
        <ix-date-picker></ix-date-picker>
        <ix-date-dropdown></ix-date-dropdown>
      </Host>
    );
  }
}
