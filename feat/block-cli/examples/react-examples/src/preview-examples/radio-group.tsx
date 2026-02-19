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
    <IxRadioGroup label="Storage options">
      <IxRadio
        label="256GB SSD storage"
        value="256"
        name="storage-256gb"
      ></IxRadio>
      <IxRadio
        label="512GB SSD storage"
        value="512"
        name="storage-512gb"
      ></IxRadio>
      <IxRadio
        label="1TB SSD storage"
        value="1024"
        name="storage-1tb"
      ></IxRadio>
      <IxRadio
        label="2TB SSD storage"
        value="2048"
        name="storage-2tb"
        disabled
      ></IxRadio>
    </IxRadioGroup>
  );
};
