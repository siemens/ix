/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles/dropdown-button.css';

import { IxDropdownButton, IxDropdownItem } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <div className="dropdown-button">
      <IxDropdownButton label="Dropdown" icon="checkboxes">
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton label="Dropdown" outline icon="checkboxes">
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton label="Dropdown" ghost icon="checkboxes">
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label="Dropdown"
        disabled
        icon="checkboxes"
      ></IxDropdownButton>
    </div>
  );
};
