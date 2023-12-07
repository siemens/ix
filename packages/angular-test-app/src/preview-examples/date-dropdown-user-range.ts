/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {DateDropdownOption} from "@siemens/ix";
import dayjs from "dayjs";

@Component({
  selector: 'app-example',
  template: `
      <ix-date-dropdown
        [dateRangeOptions]="dateDropdownOptions"
      >
      </ix-date-dropdown>
  `,
})
export default class DateDropdownUserRange {
  dateDropdownOptions: DateDropdownOption[] = [
    {
      label: 'No time limit',
      getValue: () => {
        const today = dayjs();
        return { from: undefined, to: today };
      },
    },
    {
      label: 'Today',
      getValue: () => {
        const today = dayjs();
        return { from: today, to: today };
      },
    },
    {
      label: 'Last 7 days',
      getValue: () => {
        const today = dayjs();
        return {
          from: today.subtract(7, 'day') as dayjs.Dayjs,
          to: today,
        };
      },
    },
  ];
}
