/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxRadio, IxRadioGroup } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxRadioGroup
          label="Storage options"
          class="ix-info"
          infoText="Storage options might differ in speed."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
          ></IxRadio>
        </IxRadioGroup>
      </div>

      <div>
        <IxRadioGroup
          label="Storage options"
          class="ix-warning"
          warningText="Storage options might not be available."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
          ></IxRadio>
        </IxRadioGroup>
      </div>

      <div>
        <IxRadioGroup
          label="Storage options"
          class="ix-valid"
          validText="Storage option is available."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
          ></IxRadio>
        </IxRadioGroup>
      </div>

      <div>
        <IxRadioGroup
          label="Storage options"
          class="ix-invalid"
          invalidText="Storage option is not available."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
          ></IxRadio>
        </IxRadioGroup>
      </div>
    </>
  );
};
