/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconCheckboxes } from '@siemens/ix-icons/icons';
import './icon-toggle-button-primary-outline.scoped.css';

import { IxIconToggleButton, IxLayoutGrid, IxRow } from '@siemens/ix-react';

export default () => {
  return (
    <IxLayoutGrid>
      <IxRow>
        <IxIconToggleButton variant="subtle-primary" icon={iconCheckboxes}></IxIconToggleButton>
        <IxIconToggleButton variant="subtle-primary" pressed icon={iconCheckboxes}></IxIconToggleButton>
        <IxIconToggleButton variant="subtle-primary" disabled icon={iconCheckboxes}></IxIconToggleButton>
        <IxIconToggleButton variant="subtle-primary" disabled loading icon={iconCheckboxes}></IxIconToggleButton>
      </IxRow>
      <IxRow>
        <IxIconToggleButton variant="subtle-primary" icon={iconCheckboxes} oval></IxIconToggleButton>
        <IxIconToggleButton variant="subtle-primary" pressed icon={iconCheckboxes} oval></IxIconToggleButton>
        <IxIconToggleButton variant="subtle-primary" disabled icon={iconCheckboxes} oval></IxIconToggleButton>
        <IxIconToggleButton variant="subtle-primary" disabled loading icon={iconCheckboxes} oval></IxIconToggleButton>
      </IxRow>
    </IxLayoutGrid>
  );
};
