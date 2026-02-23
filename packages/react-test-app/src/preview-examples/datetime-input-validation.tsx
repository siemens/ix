/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDatetimeInput } from '@siemens/ix-react';

function DatetimeInputValidation() {
  return (
    <>
      <div>
        <IxDatetimeInput
          value="2026/02/08 00:00:00"
          infoText="Info text"
          className="ix-info"
        ></IxDatetimeInput>
      </div>

      <div>
        <IxDatetimeInput
          value="2026/02/08 00:00:00"
          warningText="Warning text"
          className="ix-warning"
        ></IxDatetimeInput>
      </div>

      <div>
        <IxDatetimeInput
          value="2026/02/08 00:00:00"
          validText="Valid text"
          className="ix-valid"
        ></IxDatetimeInput>
      </div>

      <div>
        <IxDatetimeInput
          value="2026/02/08 00:00:00"
          invalidText="Invalid text"
          className="ix-invalid"
        ></IxDatetimeInput>
      </div>
    </>
  );
}

export default DatetimeInputValidation;
