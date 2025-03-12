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
        <span slot="input-start">Label Start</span>
        <input className="ix-form-control" type="text" />
      </IxInputGroup>

      <IxInputGroup>
        <input className="ix-form-control" type="text" />
        <span slot="input-end">Label End</span>
      </IxInputGroup>
    </form>
  );
};
