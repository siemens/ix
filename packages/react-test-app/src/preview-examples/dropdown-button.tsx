/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDropdownButton, IxDropdownButtonItem } from '@siemens/ix-react';
import React from 'react';

export const DropdownButton: React.FC = () => {
  return (
    <>
      <IxDropdownButton label="Dropdown" variant="Primary" icon="checkboxes">
        <IxDropdownButtonItem label="Item 1" value="1"></IxDropdownButtonItem>
        <IxDropdownButtonItem label="Item 2" value="2"></IxDropdownButtonItem>
      </IxDropdownButton>
      <IxDropdownButton
        label="Dropdown"
        variant="Primary"
        outline
        icon="checkboxes"
      >
        <IxDropdownButtonItem label="Item 1" value="1"></IxDropdownButtonItem>
        <IxDropdownButtonItem label="Item 2" value="2"></IxDropdownButtonItem>
      </IxDropdownButton>
      <IxDropdownButton
        label="Dropdown"
        variant="Primary"
        ghost
        icon="checkboxes"
      >
        <IxDropdownButtonItem label="Item 1" value="1"></IxDropdownButtonItem>
        <IxDropdownButtonItem label="Item 2" value="2"></IxDropdownButtonItem>
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
