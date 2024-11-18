/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCheckbox, IxCustomField } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxCustomField infoText="Info text">
        <IxCheckbox
          label="I agree everything"
          name="agreed"
          className="ix-info"
        ></IxCheckbox>
      </IxCustomField>

      <br />

      <IxCustomField warningText="Warning text">
        <IxCheckbox
          label="I disagree everything"
          name="agreed"
          className="ix-warning"
        ></IxCheckbox>
      </IxCustomField>

      <br />

      <IxCustomField invalidText="Invalid text">
        <IxCheckbox
          label="I disagree everything"
          name="agreed"
          className="ix-invalid"
        ></IxCheckbox>
      </IxCustomField>

      <br />

      <IxCustomField validText="Valid text">
        <IxCheckbox
          label="I disagree everything"
          name="agreed"
          className="ix-valid"
        ></IxCheckbox>
      </IxCustomField>
    </>
  );
};
