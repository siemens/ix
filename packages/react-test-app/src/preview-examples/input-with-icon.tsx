/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIcon, IxInputGroup } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <form className="needs-validation m-2">
      <IxInputGroup>
        <input type="text" />
        <span slot="input-end">
          <IxIcon name="about" size="16"></IxIcon>
        </span>
      </IxInputGroup>
    </form>
  );
};
