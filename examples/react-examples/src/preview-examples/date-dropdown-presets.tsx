/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DateDropdownOption } from '@siemens/ix';
import { IxDateDropdown } from '@siemens/ix-react';

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}

function getDateDaysAgo(numberOfDays: number) {
  const date = new Date();
  date.setDate(date.getDate() - numberOfDays);

  return formatDate(date);
}

const today = formatDate(new Date());

const dateRangeOptions: DateDropdownOption[] = [
  { id: 'today', label: 'Today', from: today, to: today },
  {
    id: 'last-7',
    label: 'Last 7 days',
    from: getDateDaysAgo(6),
    to: today,
  },
  {
    id: 'last-30',
    label: 'Last 30 days',
    from: getDateDaysAgo(29),
    to: today,
  },
  {
    id: 'last-90',
    label: 'Last 90 days',
    from: getDateDaysAgo(89),
    to: today,
  },
  {
    id: 'last-365',
    label: 'Last 365 days',
    from: getDateDaysAgo(364),
    to: today,
  },
];

export default () => {
  return (
    <IxDateDropdown
      dateRangeOptions={dateRangeOptions}
      dateRangeId="last-7"
      format="yyyy/LL/dd"
    />
  );
};
