/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxButton,
  IxDivider,
  IxDropdown,
  IxDropdownItem,
  IxDropdownQuickActions,
  IxIconButton,
} from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxButton id="iconTriggerId">Open</IxButton>
      <IxDropdown trigger="iconTriggerId">
        <IxDropdownQuickActions>
          <IxIconButton icon="cut" ghost></IxIconButton>
          <IxIconButton icon="bulb" outline></IxIconButton>
          <IxIconButton icon="trashcan"></IxIconButton>
        </IxDropdownQuickActions>

        <IxDivider></IxDivider>

        <IxDropdownItem icon="star" label="Item 1"></IxDropdownItem>
        <IxDropdownItem icon="document" label="Item 2"></IxDropdownItem>
        <IxDropdownItem icon="bulb" label="Item 3"></IxDropdownItem>
      </IxDropdown>
    </>
  );
};
