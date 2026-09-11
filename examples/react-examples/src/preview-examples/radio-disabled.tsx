/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxRadio } from '@siemens/ix-react';

export default () => {
  return (
    <IxRadio
      label="2TB SSD storage"
      value="2048"
      name="storage-2tb"
      disabled
    ></IxRadio>
  );
};
