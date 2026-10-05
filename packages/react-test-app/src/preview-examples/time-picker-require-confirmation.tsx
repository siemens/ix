/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './time-picker-require-confirmation.scoped.css';

import { IxTimePicker, IxToggle, IxTypography } from '@siemens/ix-react';
import { useState } from 'react';

const descriptions = {
  off: 'timeChange is emitted for every picked value.',
  on: 'timeChange is emitted only when you click Confirm. Cancel discards the picked time and emits timeCancel.',
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
      <IxTimePicker
        time="09:30"
        format="HH:mm"
        requireConfirmation={requireConfirmation}
        onTimeChange={(event) => log('timeChange', event.detail)}
        onTimeSelect={(event) => log('timeSelect', event.detail)}
        onTimeCancel={(event) => log('timeCancel', event.detail)}
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
