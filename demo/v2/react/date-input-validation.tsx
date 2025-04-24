/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxDateInput
          value="1970/01/01"
          infoText="Info text"
          className="ix-info"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="1970/01/01"
          warningText="Warning text"
          className="ix-warning"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="1970/01/01"
          validText="Valid text"
          className="ix-valid"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="1970/01/01"
          invalidText="Invalid text"
          className="ix-invalid"
        ></IxDateInput>
      </div>
    </>
  );
};
