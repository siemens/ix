/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './date-dropdown-require-confirmation.scoped.css';

import { IxDateDropdown, IxToggle, IxTypography } from '@siemens/ix-react';
import { useState } from 'react';

const descriptions = {
  off: 'The range picked in the dropdown is applied when you click Done or when the dropdown closes, including when you click outside it.',
  on: 'The range picked in the dropdown is applied only when you click Confirm. Cancel, pressing Escape or clicking outside the dropdown discards it.',
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
      <IxDateDropdown
        from="2026/10/05"
        to="2026/10/09"
        requireConfirmation={requireConfirmation}
        onDateRangeChange={(event) => log('dateRangeChange', event.detail)}
        onDateSelect={(event) => log('dateSelect', event.detail)}
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
