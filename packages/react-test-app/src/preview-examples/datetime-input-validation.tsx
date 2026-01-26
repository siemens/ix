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
          infoText="Info text"
          className="ix-info"
        ></IxDatetimeInput>
      </div>

      <div>
        <IxDatetimeInput
          warningText="Warning text"
          className="ix-warning"
        ></IxDatetimeInput>
      </div>

      <div>
        <IxDatetimeInput
          validText="Valid text"
          className="ix-valid"
        ></IxDatetimeInput>
      </div>

      <div>
        <IxDatetimeInput
          invalidText="Invalid text"
          className="ix-invalid"
        ></IxDatetimeInput>
      </div>
    </>
  );
}

export default DatetimeInputValidation;
