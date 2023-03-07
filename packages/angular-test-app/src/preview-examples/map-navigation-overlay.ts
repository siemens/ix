/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
    <ix-map-navigation
      application-name="Test Application"
      navigation-title="Some other content"
    >
      <div class="placeholder-logo" slot="logo"></div>
      <ix-menu>
        <ix-menu-item>Item 1</ix-menu-item>
        <ix-menu-item>Item 2</ix-menu-item>
        <ix-menu-item>Item 3</ix-menu-item>
      </ix-menu>
      <div slot="sidebar-content">Sidebar content</div>
      <ix-button (click)="showOverlay = true">Show overlay</ix-button>
      <ix-map-navigation-overlay
        *ngIf="showOverlay"
        name="Custom overlay title"
        icon="bulb"
        slot="overlay"
        (closeClick)="showOverlay = false"
      ></ix-map-navigation-overlay>
    </ix-map-navigation>
  `,
})
export default class MapNavigationOverlay {
  showOverlay = true;
}
