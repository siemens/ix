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
        <ix-application>
          <ix-application-header>
            <ix-dropdown-button>
              <ix-dropdown-item label="1"></ix-dropdown-item>
              <ix-dropdown-item label="2"></ix-dropdown-item>
              <ix-dropdown-item label="3"></ix-dropdown-item>
            </ix-dropdown-button>
            <ix-avatar>
              <ix-dropdown-item label="123"></ix-dropdown-item>
              <ix-dropdown-item label="123"></ix-dropdown-item>
              <ix-dropdown-item label="123"></ix-dropdown-item>
              <ix-dropdown-item label="123"></ix-dropdown-item>
            </ix-avatar>
          </ix-application-header>
          <ix-menu>
            <ix-menu-avatar top="Name" initials="PS">
              <ix-dropdown-item
                id="dd-item"
                icon="globe"
                label="DropDownItem"
              ></ix-dropdown-item>
              <ix-menu-avatar-item
                id="ma-item"
                icon="globe"
                label="MenuAvatarItem"
              ></ix-menu-avatar-item>
            </ix-menu-avatar>
          </ix-menu>
          <ix-content>
            <ix-split-button label="123">
              <ix-split-button-item label="1"></ix-split-button-item>
              <ix-split-button-item label="2"></ix-split-button-item>
              <ix-split-button-item
                label="3"
                id="xx-item"
              ></ix-split-button-item>
            </ix-split-button>
          </ix-content>
        </ix-application>
        <ix-dropdown trigger="dd-item">
          <ix-dropdown-item label="1"></ix-dropdown-item>
          <ix-dropdown-item label="2"></ix-dropdown-item>
        </ix-dropdown>

        <ix-dropdown trigger="ma-item">
          <ix-dropdown-item label="1"></ix-dropdown-item>
          <ix-dropdown-item label="2"></ix-dropdown-item>
        </ix-dropdown>

        <ix-dropdown trigger="xx-item">
          <ix-dropdown-item label="1"></ix-dropdown-item>
          <ix-dropdown-item label="2"></ix-dropdown-item>
        </ix-dropdown>
      </Host>
    );
  }
}
