/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import './key-value-list-with-custom-value.scoped.css';
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValueList>
      <IxKeyValue label="Label" labelPosition="left">
        <input
          className="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left">
        <input
          className="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left">
        <input
          className="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </IxKeyValue>
    </IxKeyValueList>
  );
};
