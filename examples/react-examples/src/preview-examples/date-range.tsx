/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDateInput, IxRangeField } from '@siemens/ix-react';

export default () => {
  return (
    <IxRangeField
      type="date-range"
      style={{ width: '32rem' }}
      aria-label="date range"
    >
      <IxDateInput label="Start date"></IxDateInput>
      <IxDateInput label="End date"></IxDateInput>
    </IxRangeField>
  );
};
