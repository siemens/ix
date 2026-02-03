/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDatetimeInput } from '@siemens/ix-react';

function DatetimeInputLabel() {
  return (
    <IxDatetimeInput
      value="01.01.1970 00:00"
      label="Meeting schedule"
      dateFormat="dd.MM.yyyy"
      timeFormat="HH:mm"
    ></IxDatetimeInput>
  );
}

export default DatetimeInputLabel;
