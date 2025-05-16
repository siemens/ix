/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-menu>
      <ix-menu-avatar
        top="john.doe@company.com"
        bottom="Administrator"
        image="https://ui-avatars.com/api/?name=John+Doe"
      >
        <ix-menu-avatar-item
          icon="user-profile"
          label="User profile..."
        ></ix-menu-avatar-item>
      </ix-menu-avatar>
      <ix-menu-item home-tab icon="home">Home</ix-menu-item>
      <ix-menu-item icon="globe">Normal tab</ix-menu-item>
      <ix-menu-item icon="star" disabled>Disabled tab</ix-menu-item>
      <ix-menu-item icon="star">With other icon</ix-menu-item>
      <ix-menu-item icon="globe" style="display: none">
        Should not be visible
      </ix-menu-item>
    </ix-menu>
  `,
  styleUrls: ['./vertical-tabs-with-avatar.css'],
})
export default class VerticalTabsWithAvatar {}
