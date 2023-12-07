/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DateDropdownOption } from '@siemens/ix';
import { IxDateDropdown } from '@siemens/ix-react';
import dayjs from 'dayjs';
import React from 'react';

const dateRangeOptions: DateDropdownOption[] = [
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

export default () => {
  return <IxDateDropdown dateRangeOptions={dateRangeOptions} />;
};
