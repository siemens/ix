/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxDateDropdown } from '@siemens/ix-angular/standalone';

import { DateDropdownOption } from '@siemens/ix';

const today = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const lastSevenDays = new Date(
  new Date().getTime() - 7 * 24 * 60 * 60 * 1000
).toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxDateDropdown],
  templateUrl: './date-dropdown-user-range.html',
})
export default class DateDropdownUserRange {
  dateDropdownOptions: DateDropdownOption[] = [
    {
      id: 'last-7',
      label: 'Last 7 days',
      from: lastSevenDays,
      to: today,
    },
    {
      id: 'today',
      label: 'Today',
      from: today,
      to: today,
    },
  ];
}
