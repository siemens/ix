/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxDatetimePicker,
  IxToggle,
  IxTypography,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDatetimePicker, IxToggle, IxTypography],
  templateUrl: './datetime-picker-require-confirmation.html',
  styleUrls: ['./datetime-picker-require-confirmation.css'],
})
export default class DatetimePickerRequireConfirmation {
  requireConfirmation = false;
  events: string[] = [];

  readonly descriptions = {
    off: 'dateChange and timeChange are emitted for every picked value.',
    on: 'dateChange and timeChange are emitted only when you click Confirm. Cancel discards the picked date and time and emits dateCancel.',
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
