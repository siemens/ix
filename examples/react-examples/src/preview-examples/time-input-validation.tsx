/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTimeInput } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxTimeInput infoText="Info text" className="ix-info"></IxTimeInput>
      </div>

      <div>
        <IxTimeInput
          warningText="Warning text"
          className="ix-warning"
        ></IxTimeInput>
      </div>

      <div>
        <IxTimeInput validText="Valid text" className="ix-valid"></IxTimeInput>
      </div>

      <div>
        <IxTimeInput
          invalidText="Invalid text"
          className="ix-invalid"
        ></IxTimeInput>
      </div>
    </>
  );
};
