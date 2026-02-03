/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDatetimeInput, IxIcon, IxTypography } from '@siemens/ix-react';

function DatetimeInputWithSlots() {
  return (
    <IxDatetimeInput value="1970/01/01 00:00:00">
      <IxIcon slot="start" name="bulb" size="16"></IxIcon>
      <IxTypography slot="end">Slot</IxTypography>
    </IxDatetimeInput>
  );
}

export default DatetimeInputWithSlots;
