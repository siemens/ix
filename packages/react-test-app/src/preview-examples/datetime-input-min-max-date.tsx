/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDatetimeInput } from '@siemens/ix-react';

function DatetimeInputMinMaxDate() {
  return (
    <IxDatetimeInput
      label="Event date"
      minDate="2024/01/01"
      maxDate="2024/12/31"
    ></IxDatetimeInput>
  );
}

export default DatetimeInputMinMaxDate;
