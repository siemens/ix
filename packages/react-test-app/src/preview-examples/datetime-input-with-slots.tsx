/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDatetimeInput, IxIcon } from '@siemens/ix-react';

function DatetimeInputWithSlots() {
  return (
    <IxDatetimeInput label="Scheduled event">
      <IxIcon slot="start" name="calendar" size="16"></IxIcon>
      <IxIcon slot="end" name="clock" size="16"></IxIcon>
    </IxDatetimeInput>
  );
}

export default DatetimeInputWithSlots;
