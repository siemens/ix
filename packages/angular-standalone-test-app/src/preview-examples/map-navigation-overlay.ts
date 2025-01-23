/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import {
  IxMapNavigation,
  IxMenu,
  IxMenuItem,
  IxContent,
  IxContentHeader,
  IxButton,
  IxMapNavigationOverlay,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [
    IxMapNavigation,
    IxMenu,
    IxMenuItem,
    IxContent,
    IxContentHeader,
    IxButton,
    IxMapNavigationOverlay,
    NgIf,
  ],
  template: `
    <ix-map-navigation
      application-name="My Application"
      navigation-title="Navigation title"
      hide-context-menu="false"
    >
      <div class="placeholder-logo" slot="logo"></div>

      <ix-menu>
        <ix-menu-item>Item 1</ix-menu-item>
        <ix-menu-item>Item 2</ix-menu-item>
      </ix-menu>

      <ix-content slot="sidebar-content">Sidebar content</ix-content>

      <ix-content>
        <ix-content-header
          slot="header"
          header-title="My Content Page"
        ></ix-content-header>

        <ix-button (click)="showOverlay = true">Show overlay</ix-button>
      </ix-content>

      <ix-map-navigation-overlay
        *ngIf="showOverlay"
        slot="overlay"
        name="Custom overlay"
        icon="bulb"
        (closeClick)="showOverlay = false"
      >
        <ix-content>Overlay content</ix-content>
      </ix-map-navigation-overlay>
    </ix-map-navigation>
  `,
})
export default class MapNavigationOverlay {
  showOverlay = true;
}
