/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxNumberField } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxNumberField
          value={5}
          infoText="Info text"
          className="ix-info"
        ></IxNumberField>
      </div>

      <div>
        <IxNumberField
          value={5}
          warningText="Warning text"
          className="ix-warning"
        ></IxNumberField>
      </div>

      <div>
        <IxNumberField
          value={5}
          validText="Valid text"
          className="ix-valid"
        ></IxNumberField>
      </div>

      <div>
        <IxNumberField
          value={5}
          invalidText="Invalid text"
          class="ix-invalid"
        ></IxNumberField>
      </div>
    </>
  );
};
