/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDateField } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxDateField
          value="1970/01/01"
          infoText="Info text"
          className="ix-info"
        ></IxDateField>
      </div>

      <div>
        <IxDateField
          value="1970/01/01"
          warningText="Warning text"
          className="ix-warning"
        ></IxDateField>
      </div>

      <div>
        <IxDateField
          value="1970/01/01"
          validText="Valid text"
          className="ix-valid"
        ></IxDateField>
      </div>

      <div>
        <IxDateField
          value="1970/01/01"
          invalidText="Invalid text"
          className="ix-invalid"
        ></IxDateField>
      </div>
    </>
  );
};
