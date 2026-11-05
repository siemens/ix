/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCustomField } from '@siemens/ix-react';

const wrapperStyle = {
  marginBottom: '1rem',
};

export default () => {
  return (
    <>
      <div style={wrapperStyle}>
        <IxCustomField
          helperText="Add your first name here"
          validText="Valid first name"
          label="First name"
        >
          <input
            id="first-name"
            className="ix-form-control ix-valid"
            value="Jane"
          />
        </IxCustomField>
      </div>

      <div style={wrapperStyle}>
        <IxCustomField infoText="Family name" label="Last name">
          <input
            id="last-name"
            className="ix-form-control ix-info"
            value="Doe"
          />
        </IxCustomField>
      </div>

      <div style={wrapperStyle}>
        <IxCustomField warningText="Not a valid email address" label="Email">
          <input
            id="email"
            className="ix-form-control ix-warning"
            value="info@"
          />
        </IxCustomField>
      </div>

      <div style={wrapperStyle}>
        <IxCustomField invalidText="Required" label="Address">
          <input id="address" className="ix-form-control ix-invalid" />
        </IxCustomField>
      </div>
    </>
  );
};
