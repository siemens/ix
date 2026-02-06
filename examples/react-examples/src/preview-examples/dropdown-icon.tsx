/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconBulb, iconDocument, iconStar } from '@siemens/ix-icons/icons';
import { IxButton, IxDropdown, IxDropdownItem } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton id="triggerId">Open</IxButton>
      <IxDropdown trigger="triggerId">
        <IxDropdownItem label="Item 1" icon={iconStar}></IxDropdownItem>
        <IxDropdownItem label="Item 2" icon={iconDocument}></IxDropdownItem>
        <IxDropdownItem label="Item 3" icon={iconBulb}></IxDropdownItem>
      </IxDropdown>
    </>
  );
};
