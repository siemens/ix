/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIcon, IxInputGroup } from '@siemens/ix-react';
import { iconAbout } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <form className="needs-validation">
      <IxInputGroup>
        <input className="ix-form-control" type="text" />
        <span slot="input-end">
          <IxIcon name={iconAbout} size="16"></IxIcon>
        </span>
      </IxInputGroup>
    </form>
  );
};
