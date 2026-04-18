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
  template: `
    <ix-range-field type="datetime-range" style="width: 32rem" aria-label="Datetime range">
      <ix-datetime-input label="Start date and time"></ix-datetime-input>
      <ix-datetime-input label="End date and time"></ix-datetime-input>
    </ix-range-field>
  `,
})
export default class DatetimeRange {}
