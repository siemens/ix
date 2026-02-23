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
  return <IxDatetimeInput value="2026/02/08 00:00:00" disabled></IxDatetimeInput>;
}

export default DatetimeInputDisabled;
