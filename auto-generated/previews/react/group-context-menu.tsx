/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxDropdown,
  IxDropdownItem,
  IxGroup,
  IxGroupItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxGroup header="Header text" subHeader="Subheader text">
      <IxDropdown slot="dropdown">
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdown>
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem text="Example text 3"></IxGroupItem>
    </IxGroup>
  );
};
