/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxInputGroup } from '@siemens/ix-react';

export default () => {
  return (
    <form className="needs-validation">
      <IxInputGroup>
        <span slot="input-start">Text:</span>
        <input
          className="ix-form-control"
          placeholder="Enter text"
          type="text"
        />
      </IxInputGroup>

      <IxInputGroup>
        <span slot="input-start">Number:</span>
        <input className="ix-form-control" type="number" />
        <span slot="input-end">.00</span>
        <span slot="input-end">$</span>
      </IxInputGroup>

      <IxInputGroup>
        <span slot="input-start">Password:</span>
        <input
          className="ix-form-control"
          placeholder="Enter password"
          type="password"
        />
      </IxInputGroup>

      <IxInputGroup>
        <span slot="input-start">Email:</span>
        <input
          className="ix-form-control"
          placeholder="example@domain.com"
          type="email"
        />
      </IxInputGroup>

      <IxInputGroup>
        <span slot="input-start">Telephone:</span>
        <input
          className="ix-form-control"
          placeholder="111-111-111"
          type="tel"
        />
      </IxInputGroup>
    </form>
  );
};
