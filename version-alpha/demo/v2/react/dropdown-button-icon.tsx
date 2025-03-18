/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconCheckboxes } from '@siemens/ix-icons/icons';
import './dropdown-button-icon.scoped.css';

import { IxDropdownButton, IxDropdownItem } from '@siemens/ix-react';

export default () => {
  return (
    <div className="dropdown-button">
      <IxDropdownButton label="" icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton label="" outline icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton label="" ghost icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label=""
        disabled
        icon={iconCheckboxes}
      ></IxDropdownButton>
    </div>
  );
};
