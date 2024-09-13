/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxInput } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxInput
          type="text"
          label="Username"
          value="MaxMuster1"
        ></IxInput>
      </div>

      <div>
        <IxInput
          type="email"
          label="Email"
          value="example@example.com"
        ></IxInput>
      </div>

      <div>
        <IxInput
          type="password"
          label="Password"
          placeholder="Enter your password"
          value="1234"
        ></IxInput>
      </div>
    </>
  );
};
