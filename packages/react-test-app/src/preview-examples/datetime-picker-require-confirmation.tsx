/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './datetime-picker-require-confirmation.scoped.css';

import { IxDatetimePicker, IxToggle, IxTypography } from '@siemens/ix-react';
import { useState } from 'react';

const descriptions = {
  off: 'dateChange and timeChange are emitted for every picked value.',
  on: 'dateChange and timeChange are emitted only when you click Confirm. Cancel discards the picked date and time and emits dateCancel.',
};

export default () => {
  const [requireConfirmation, setRequireConfirmation] = useState(false);
  const [events, setEvents] = useState<string[]>([]);

  const log = (name: string, detail: unknown) =>
    setEvents((previous) =>
      [`${name}: ${JSON.stringify(detail) ?? ''}`, ...previous].slice(0, 5)
    );

  return (
    <div className="require-confirmation">
      <IxToggle
        aria-label="Require confirmation"
        textOn="Require confirmation: on"
        textOff="Require confirmation: off"
        checked={requireConfirmation}
        onCheckedChange={(event) => {
          setRequireConfirmation(event.detail);
          setEvents([]);
        }}
      />
      <IxTypography>
        {requireConfirmation ? descriptions.on : descriptions.off}
      </IxTypography>
      <IxDatetimePicker
        from="2026/10/05"
        time="09:30:00"
        singleSelection
        requireConfirmation={requireConfirmation}
        onDateChange={(event) => log('dateChange', event.detail)}
        onTimeChange={(event) => log('timeChange', event.detail)}
        onDateSelect={(event) => log('dateSelect', event.detail)}
        onDateCancel={(event) => log('dateCancel', event.detail)}
      />
      <IxTypography format="label">Emitted events (latest first)</IxTypography>
      <ul className="event-log">
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};
