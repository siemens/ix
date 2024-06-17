/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCheckbox, IxCheckboxGroup } from "@siemens/ix-react";

export default () => {
  return (
    <>
      <div>
        <IxCheckboxGroup
          label="Terms of something"
          infoText="Info text"
          class="ix-info"
        >
          <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
        </IxCheckboxGroup>
      </div>

      <div>
        <IxCheckboxGroup
          label="Terms of something"
          warningText="Warning text"
          class="ix-warning"
        >
          <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
          <IxCheckbox
            label="I disagree everything"
            name="agreed"
          ></IxCheckbox>
        </IxCheckboxGroup>
      </div>

      <div>
        <IxCheckboxGroup
          label="Terms of something"
          validText="Invalid text"
          class="ix-invalid"
        >
          <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
          <IxCheckbox
            label="I disagree everything"
            name="agreed"
          ></IxCheckbox>
        </IxCheckboxGroup>
      </div>

      <div>
        <IxCheckboxGroup
          label="Terms of something"
          validText="Valid text"
          class="ix-valid"
        >
          <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
          <IxCheckbox
            label="I disagree everything"
            name="agreed"
          ></IxCheckbox>
        </IxCheckboxGroup>
      </div>
      <!-- Preview code -->
    </>
  );
};
