/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDatetimeInput, IxRangeField } from '@siemens/ix-react';

export default () => {
  return (
    <IxRangeField
      type="datetime-range"
      style={{ width: '32rem' }}
      aria-label="Datetime range"
    >
      <IxDatetimeInput label="Start date and time"></IxDatetimeInput>
      <IxDatetimeInput label="End date and time"></IxDatetimeInput>
    </IxRangeField>
  );
};
