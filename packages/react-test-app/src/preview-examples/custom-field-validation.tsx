/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCustomField } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxCustomField
          helper-text="Add your first name here"
          valid-text="Valid first name"
          label="First name"
        >
          <input
            id="first-name"
            className="ix-form-control ix-valid"
            value="Jane"
          />
        </IxCustomField>
      </div>

      <div>
        <IxCustomField info-text="Family name" label="Last name">
          <input
            id="last-name"
            className="ix-form-control ix-info"
            value="Doe"
          />
        </IxCustomField>
      </div>

      <div>
        <IxCustomField warning-text="Not a valid email address" label="Email">
          <input
            id="email"
            className="ix-form-control ix-warning"
            value="info@"
          />
        </IxCustomField>
      </div>

      <div>
        <IxCustomField invalid-text="Required" label="Address">
          <input id="address" className="ix-form-control ix-invalid" />
        </IxCustomField>
      </div>
    </>
  );
};
