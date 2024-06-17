/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTextField } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxTextField
          label="Username"
          placeholder="Enter your Username"
          infoText="Info text"
          className="ix-info"
        ></IxTextField>
      </div>

      <div>
        <IxTextField
          label="Username"
          placeholder="Enter your Username"
          warningText="Warning text"
          className="ix-warning"
        ></IxTextField>
      </div>

      <div>
        <IxTextField
          label="Username"
          placeholder="Enter your Username"
          validText="Valid text"
          className="ix-valid"
        ></IxTextField>
      </div>

      <div>
        <IxTextField
          label="Username"
          placeholder="Enter your Username"
          invalidText="Invalid text"
          className="ix-invalid"
        ></IxTextField>
      </div>
    </>
  );
};
