/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxDateInput, IxRangeField } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxRangeField, IxDateInput],
  template: `
    <ix-range-field type="date-range" style="width: 32rem" aria-label="date range">
      <ix-date-input label="Start date"></ix-date-input>
      <ix-date-input label="End date"></ix-date-input>
    </ix-range-field>
  `,
})
export default class DateRange {}
