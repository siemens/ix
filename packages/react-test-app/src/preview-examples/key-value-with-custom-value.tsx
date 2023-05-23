/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxKeyValue } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <IxKeyValue label="Label">
      <input
        className="form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </IxKeyValue>
  );
};
