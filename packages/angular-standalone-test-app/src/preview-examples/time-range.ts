/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxRangeField, IxTimeInput } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxRangeField, IxTimeInput],
  template: `
    <ix-range-field type="time-range" style="width: 32rem" aria-label="Time range">
      <ix-time-input label="Start time"></ix-time-input>
      <ix-time-input label="End time"></ix-time-input>
    </ix-range-field>
  `,
})
export default class TimeRange {}
