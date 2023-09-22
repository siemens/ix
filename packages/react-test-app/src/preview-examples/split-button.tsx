/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDropdownItem, IxSplitButton } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <IxSplitButton label="Action text" splitIcon="chevron-down-small">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxSplitButton>
  );
};
