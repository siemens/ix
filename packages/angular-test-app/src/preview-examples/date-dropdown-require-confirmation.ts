/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-dropdown-require-confirmation.html',
  styleUrls: ['./date-dropdown-require-confirmation.css'],
})
export default class DateDropdownRequireConfirmation {
  requireConfirmation = false;
  events: string[] = [];

  readonly descriptions = {
    off: 'The range picked in the dropdown is applied when you click Done or when the dropdown closes, including when you click outside it.',
    on: 'The range picked in the dropdown is applied only when you click Confirm. Cancel, pressing Escape or clicking outside the dropdown discards it.',
  };

  onCheckedChange(event: CustomEvent<boolean>) {
    this.requireConfirmation = event.detail;
    this.events = [];
  }

  log(name: string, event: CustomEvent<unknown>) {
    const detail = JSON.stringify(event.detail) ?? '';
    this.events = [`${name}: ${detail}`, ...this.events].slice(0, 5);
  }
}
