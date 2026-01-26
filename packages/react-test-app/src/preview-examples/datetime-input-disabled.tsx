/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDatetimeInput } from '@siemens/ix-react';

function DatetimeInputDisabled() {
  return (
    <IxDatetimeInput
      disabled
      label="Datetime"
      value="2024/01/15 14:30:00"
    ></IxDatetimeInput>
  );
}

export default DatetimeInputDisabled;
