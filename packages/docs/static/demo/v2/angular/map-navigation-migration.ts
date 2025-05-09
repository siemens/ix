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
  templateUrl: './map-navigation-migration.html',
  styleUrls: ['./map-navigation-migration.css'],
})
export default class MapNavigationMigration {
  expanded = false;

  resetExpanded(event: Event) {
    requestAnimationFrame(() => {
      this.expanded = (event as CustomEvent).detail.expanded;
    });
  }

  toggleOverlay() {
    this.expanded = !this.expanded;
  }
}
