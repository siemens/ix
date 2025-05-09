/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './icon-toggle-button-secondary-outline.scoped.css';

import { IxIconToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxIconToggleButton outline icon="checkboxes"></IxIconToggleButton>
      <IxIconToggleButton
        outline
        pressed
        icon="checkboxes"
      ></IxIconToggleButton>
      <IxIconToggleButton
        outline
        disabled
        icon="checkboxes"
      ></IxIconToggleButton>
      <IxIconToggleButton
        outline
        disabled
        loading
        icon="checkboxes"
      ></IxIconToggleButton>

      <IxIconToggleButton
        size="16"
        outline
        icon="checkboxes"
      ></IxIconToggleButton>
      <IxIconToggleButton
        size="16"
        pressed
        outline
        icon="checkboxes"
      ></IxIconToggleButton>
      <IxIconToggleButton
        size="16"
        disabled
        loading
        outline
        icon="checkboxes"
      ></IxIconToggleButton>

      <IxIconToggleButton
        size="12"
        outline
        icon="checkboxes"
      ></IxIconToggleButton>
      <IxIconToggleButton
        size="12"
        pressed
        outline
        icon="checkboxes"
      ></IxIconToggleButton>
      <IxIconToggleButton
        size="12"
        disabled
        loading
        outline
        icon="checkboxes"
      ></IxIconToggleButton>
    </>
  );
};
