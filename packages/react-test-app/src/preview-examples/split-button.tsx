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
import './split-button.css'

export default () => {
  return (
    <div>
      <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxSplitButton>
      <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall} disabled>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxSplitButton>
      <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall} disabledButton={true}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxSplitButton>
      <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall} disabledIcon={true}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxSplitButton>
    </div>
  );
};
