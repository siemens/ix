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
  IxDatetimeInput,
  IxToggle,
  IxTypography,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDatetimeInput, IxToggle, IxTypography],
  templateUrl: './datetime-input-require-confirmation.html',
  styleUrls: ['./datetime-input-require-confirmation.css'],
})
export default class DatetimeInputRequireConfirmation {
  requireConfirmation = false;
  events: string[] = [];

  readonly descriptions = {
    off: 'A date and time picked in the dropdown are applied when you click Done.',
    on: 'A date and time picked in the dropdown are applied only when you click Confirm. Cancel, pressing Escape or clicking outside the dropdown discards them.',
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
