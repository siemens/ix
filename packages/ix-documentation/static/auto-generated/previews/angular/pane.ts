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
  templateUrl: './pane.html',
})
export default class Pane {
  expanded: boolean = false;

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  expandedChanged(event: CustomEvent) {
    this.expanded = event.detail.expanded;
  }
}
