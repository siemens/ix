/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxDropdownButton, IxDropdownItem } from '@siemens/ix-react';
import React from 'react';

export default () => {
  const dropdownButtonStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    maxWidth: '20rem',
  };

  const dropdownItemStyle = {
    marginBottom: '0.5rem',
  };

  return (
    <>
      <IxDropdownButton
        label="Dropdown"
        icon="checkboxes"
        style={dropdownButtonStyle}
      >
        <IxDropdownItem label="Item 1" style={dropdownItemStyle}></IxDropdownItem>
        <IxDropdownItem label="Item 2" style={dropdownItemStyle}></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label="Dropdown"
        outline
        icon="checkboxes"
        style={dropdownButtonStyle}
      >
        <IxDropdownItem label="Item 1" style={dropdownItemStyle}></IxDropdownItem>
        <IxDropdownItem label="Item 2" style={dropdownItemStyle}></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label="Dropdown"
        ghost
        icon="checkboxes"
        style={dropdownButtonStyle}
      >
        <IxDropdownItem label="Item 1" style={dropdownItemStyle}></IxDropdownItem>
        <IxDropdownItem label="Item 2" style={dropdownItemStyle}></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label="Dropdown"
        disabled
        icon="checkboxes"
        style={dropdownButtonStyle}
      ></IxDropdownButton>
    </>
  );
};

