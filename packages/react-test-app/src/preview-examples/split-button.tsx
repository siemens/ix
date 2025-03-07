/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconChevronDownSmall } from '@siemens/ix-icons/icons';
import { IxDropdownItem, IxSplitButton } from '@siemens/ix-react';

export default () => {
  return (
    <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall}>
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxSplitButton>
  );
};
