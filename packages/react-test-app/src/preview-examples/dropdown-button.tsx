/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDropdownButton, IxDropdownItem } from '@siemens/ix-react';
import React from 'react';

export const DropdownButton: React.FC = () => {
  return (
    <>
      <IxDropdownButton label="Dropdown" variant="Primary" icon="checkboxes">
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label="Dropdown"
        variant="Primary"
        outline
        icon="checkboxes"
      >
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label="Dropdown"
        variant="Primary"
        ghost
        icon="checkboxes"
      >
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label="Dropdown"
        variant="Primary"
        disabled
        icon="checkboxes"
      ></IxDropdownButton>
    </>
  );
};
