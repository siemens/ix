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
  return (
    <>
      <IxDropdownButton label="" variant="primary" icon="checkboxes">
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton label="" variant="primary" outline icon="checkboxes">
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton label="" variant="primary" ghost icon="checkboxes">
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label=""
        variant="primary"
        disabled
        icon="checkboxes"
      ></IxDropdownButton>
    </>
  );
};
