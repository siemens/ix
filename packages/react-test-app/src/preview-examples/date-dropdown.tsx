/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { DateRangeChangeEvent } from '@siemens/ix';
import { IxButton, IxDateDropdown } from '@siemens/ix-react';
import { DateTime } from 'luxon';
import React, { useState } from 'react';

const today = DateTime.now();
const format = 'yyyy/LL/dd';
const prevWeek = today.minus({
  day: 7,
});

export default () => {
  const [date, setDate] = useState('2024/02/01');
  const [customDate, setCustomDate] = useState('today');

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `auto auto`,
        gap: '1rem',
      }}
    >
      <div>
        <h4>Date Dropdown with Range Option</h4>
        <IxDateDropdown
          dateRangeId={customDate}
          customRangeAllowed
          dateRangeOptions={[
            {
              id: 'no-time',
              label: 'No time limit',
              from: '',
              to: today.toFormat(format),
            },
            {
              id: 'today',
              label: 'Today',
              from: today.toFormat(format),
              to: today.toFormat(format),
            },
            {
              id: 'last-7-days',
              label: 'Last 7 days',
              from: today
                .minus({
                  day: 7,
                })
                .toFormat(format),
              to: today.toFormat(format),
            },
            {
              id: 'last-week',
              label: 'Last week',
              from: prevWeek.startOf('week').toFormat(format),
              to: prevWeek.endOf('week').toFormat(format),
            },
            {
              id: 'current-month',
              label: 'Current month',
              from: today.startOf('month').toFormat(format),
              to: today.endOf('month').toFormat(format),
            },
          ]}
          format="yyyy/LL/dd"
        />
        <br />
        <br />
        <IxButton outline onClick={() => setCustomDate('today')}>
          Set Today
        </IxButton>
        <br />
        <br />
        <IxButton outline onClick={() => setCustomDate('last-7-days')}>
          Set Last Seven Day
        </IxButton>
        <br />
        <br />
        <IxButton outline onClick={() => setCustomDate('current-month')}>
          Set Current Date
        </IxButton>
      </div>

      <div>
        <h4>Set date from button</h4>
        <IxDateDropdown
          onDateRangeChange={(e: CustomEvent<DateRangeChangeEvent>) =>
            setDate(e.detail.from)
          }
          range={false}
          format="yyyy/LL/dd"
          from={date}
        />
        <br />
        <br />
        <IxButton
          outline
          onClick={() => {
            setDate(DateTime.now().plus({ day: 1 }).toFormat('yyyy/LL/dd'));
          }}
        >
          Set Tomorrow
        </IxButton>
      </div>
    </div>
  );
};
