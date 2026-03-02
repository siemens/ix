/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './key-value-with-custom-value.scoped.css';
import { IxKeyValue } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValue label="Label">
      <input
        className="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </IxKeyValue>
  );
};
