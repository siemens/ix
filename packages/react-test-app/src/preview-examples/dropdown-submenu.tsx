/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxDropdown, IxDropdownItem } from '@siemens/ix-react';


export default () => {
  return (
    <>
      <IxButton id="iconTriggerId">Open</IxButton>
      <IxDropdown trigger="iconTriggerId">
        <IxDropdownItem id="submenuTrigger" label="Submenu"></IxDropdownItem>
        <IxDropdownItem icon="star" label="Item 1"></IxDropdownItem>
        <IxDropdownItem icon="document" label="Item 2"></IxDropdownItem>
        <IxDropdownItem icon="bulb" label="Item 3"></IxDropdownItem>
      </IxDropdown>
      <IxDropdown trigger="submenuTrigger" placement="right-start">
        <IxDropdownItem icon="star" label="Item 1"></IxDropdownItem>
        <IxDropdownItem icon="document" label="Item 2"></IxDropdownItem>
      </IxDropdown>
    </>
  );
};
