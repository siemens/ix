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

import { IxIconToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxIconToggleButton icon={iconCheckboxes}></IxIconToggleButton>
      <IxIconToggleButton pressed icon={iconCheckboxes}></IxIconToggleButton>
      <IxIconToggleButton disabled icon={iconCheckboxes}></IxIconToggleButton>
      <IxIconToggleButton
        disabled
        loading
        icon={iconCheckboxes}
      ></IxIconToggleButton>
    </>
  );
};
