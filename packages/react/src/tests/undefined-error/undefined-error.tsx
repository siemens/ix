/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  IxButton,
  IxDivider,
  IxDropdown,
  IxDropdownHeader,
  IxDropdownItem,
} from '../../components';

const Index = () => {
  // The following example is one of many ways to potentially trigger an undefined access on the OnListener decorator
  return (
    <>
      <IxButton id="triggerId">Open</IxButton>
      <IxDropdown trigger="triggerId">
        <IxDropdownHeader label="Category"></IxDropdownHeader>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
        <IxDropdownItem label="Item 3"></IxDropdownItem>
        <IxDivider></IxDivider>
        <IxDropdownItem label="Extra Item"></IxDropdownItem>
      </IxDropdown>
    </>
  );
};

export default Index;
