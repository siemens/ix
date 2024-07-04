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
          infoText="Storage options might differ in speed."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
            className="ix-info"
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
            className="ix-info"
          ></IxRadio>
        </IxRadioGroup>
      </div>

      <div>
        <IxRadioGroup
          label="Storage options"
          warningText="Storage options might not be available."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
            className="ix-warning"
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
            className="ix-warning"
          ></IxRadio>
        </IxRadioGroup>
      </div>

      <div>
        <IxRadioGroup
          label="Storage options"
          validText="Storage option is available."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
            className="ix-valid"
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
            className="ix-valid"
          ></IxRadio>
        </IxRadioGroup>
      </div>

      <div>
        <IxRadioGroup
          label="Storage options"
          invalidText="Storage option is not available."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
            className="ix-invalid"
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
            className="ix-invalid"
          ></IxRadio>
        </IxRadioGroup>
      </div>
    </>
  );
};
