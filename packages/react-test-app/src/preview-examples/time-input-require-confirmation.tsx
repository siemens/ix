/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './time-input-require-confirmation.scoped.css';

import { IxTimeInput, IxToggle, IxTypography } from '@siemens/ix-react';
import { useState } from 'react';

const descriptions = {
  off: 'A time picked in the dropdown is applied immediately. Done closes the dropdown.',
  on: 'A time picked in the dropdown is applied only when you click Confirm. Cancel, pressing Escape or clicking outside the dropdown discards it. Reopening the dropdown shows the applied time.',
};

export default () => {
  const [requireConfirmation, setRequireConfirmation] = useState(true);
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
      <IxTimeInput
        label="Time"
        value="09:30"
        format="HH:mm"
        requireConfirmation={requireConfirmation}
        onValueChange={(event) => log('valueChange', event.detail)}
        onIxChange={(event) => log('ixChange', event.detail)}
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
