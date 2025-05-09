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
        <IxIconToggleButton
          variant="primary"
          outline
          icon={iconCheckboxes}
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          pressed
          outline
          icon={iconCheckboxes}
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          disabled
          outline
          icon={iconCheckboxes}
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          disabled
          loading
          outline
          icon={iconCheckboxes}
        ></IxIconToggleButton>
      </IxRow>
      <IxRow>
        <IxIconToggleButton
          variant="primary"
          outline
          icon={iconCheckboxes}
          oval
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          pressed
          outline
          icon={iconCheckboxes}
          oval
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          disabled
          outline
          icon={iconCheckboxes}
          oval
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          disabled
          loading
          outline
          icon={iconCheckboxes}
          oval
        ></IxIconToggleButton>
      </IxRow>
    </IxLayoutGrid>
  );
};
