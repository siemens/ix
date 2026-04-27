/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { DateDropdownOption } from '@siemens/ix';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-dropdown-presets.html',
})
export default class DateDropdownPresets {
  dateRangeOptions: DateDropdownOption[] = this.buildOptions();

  private buildOptions(): DateDropdownOption[] {
    const today = this.formatDate(new Date());

    return [
      { id: 'today', label: 'Today', from: today, to: today },
      {
        id: 'last-7',
        label: 'Last 7 days',
        from: this.getDateDaysAgo(6),
        to: today,
      },
      {
        id: 'last-30',
        label: 'Last 30 days',
        from: this.getDateDaysAgo(29),
        to: today,
      },
      {
        id: 'last-90',
        label: 'Last 90 days',
        from: this.getDateDaysAgo(89),
        to: today,
      },
      {
        id: 'last-365',
        label: 'Last 365 days',
        from: this.getDateDaysAgo(364),
        to: today,
      },
    ];
  }

  private formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
  }

  private getDateDaysAgo(numberOfDays: number) {
    const date = new Date();
    date.setDate(date.getDate() - numberOfDays);

    return this.formatDate(date);
  }
}
