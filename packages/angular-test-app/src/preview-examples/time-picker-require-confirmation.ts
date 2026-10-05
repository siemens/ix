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
  templateUrl: './time-picker-require-confirmation.html',
  styleUrls: ['./time-picker-require-confirmation.css'],
})
export default class TimePickerRequireConfirmation {
  requireConfirmation = false;
  events: string[] = [];

  readonly descriptions = {
    off: 'timeChange is emitted for every picked value.',
    on: 'timeChange is emitted only when you click Confirm. Cancel discards the picked time and emits timeCancel.',
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
