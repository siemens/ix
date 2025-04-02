/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconCheckboxes } from '@siemens/ix-icons/icons';
import './icon-toggle-button-secondary-outline.scoped.css';

import { IxIconToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxIconToggleButton outline icon={iconCheckboxes}></IxIconToggleButton>
      <IxIconToggleButton
        outline
        pressed
        icon={iconCheckboxes}
      ></IxIconToggleButton>
      <IxIconToggleButton
        outline
        disabled
        icon={iconCheckboxes}
      ></IxIconToggleButton>
      <IxIconToggleButton
        outline
        disabled
        loading
        icon={iconCheckboxes}
      ></IxIconToggleButton>

      <IxIconToggleButton
        size="16"
        outline
        icon={iconCheckboxes}
      ></IxIconToggleButton>
      <IxIconToggleButton
        size="16"
        pressed
        outline
        icon={iconCheckboxes}
      ></IxIconToggleButton>
      <IxIconToggleButton
        size="16"
        disabled
        loading
        outline
        icon={iconCheckboxes}
      ></IxIconToggleButton>

      <IxIconToggleButton
        size="12"
        outline
        icon={iconCheckboxes}
      ></IxIconToggleButton>
      <IxIconToggleButton
        size="12"
        pressed
        outline
        icon={iconCheckboxes}
      ></IxIconToggleButton>
      <IxIconToggleButton
        size="12"
        disabled
        loading
        outline
        icon={iconCheckboxes}
      ></IxIconToggleButton>
    </>
  );
};
