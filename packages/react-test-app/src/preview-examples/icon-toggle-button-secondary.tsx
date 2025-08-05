/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconCheckboxes } from '@siemens/ix-icons/icons';
import './icon-toggle-button-secondary.scoped.css';

import { IxIconToggleButton, IxLayoutGrid, IxRow } from '@siemens/ix-react';

export default () => {
  return (
    <IxLayoutGrid>
      <IxRow>
        <IxIconToggleButton icon={iconCheckboxes}></IxIconToggleButton>
        <IxIconToggleButton pressed icon={iconCheckboxes}></IxIconToggleButton>
        <IxIconToggleButton disabled icon={iconCheckboxes}></IxIconToggleButton>
        <IxIconToggleButton
          disabled
          loading
          icon={iconCheckboxes}
        ></IxIconToggleButton>
      </IxRow>
      <IxRow>
        <IxIconToggleButton icon={iconCheckboxes} oval></IxIconToggleButton>
        <IxIconToggleButton
          pressed
          icon={iconCheckboxes}
          oval
        ></IxIconToggleButton>
        <IxIconToggleButton
          disabled
          icon={iconCheckboxes}
          oval
        ></IxIconToggleButton>
        <IxIconToggleButton
          disabled
          loading
          icon={iconCheckboxes}
          oval
        ></IxIconToggleButton>
      </IxRow>
    </IxLayoutGrid>
  );
};
