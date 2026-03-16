/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxInputRange, IxDateInput, IxTimeInput } from '@siemens/ix-react';
import './input-range.scoped.css';

export default () => {
  return (
    <>
      <IxInputRange type="date-range" style="width: 32rem">
        <IxDateInput label="Start date"></IxDateInput>
        <IxDateInput label="End date"></IxDateInput>
      </IxInputRange>

      <IxInputRange type="time-range" style="width: 32rem">
        <IxTimeInput label="Start time"></IxTimeInput>
        <IxTimeInput label="End time"></IxTimeInput>
      </IxInputRange>
    </>
  );
};
