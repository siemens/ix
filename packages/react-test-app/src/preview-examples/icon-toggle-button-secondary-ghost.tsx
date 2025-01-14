/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './icon-toggle-button-secondary-ghost.scoped.css';

import { IxIconToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxIconToggleButton ghost icon="checkboxes"></IxIconToggleButton>
      <IxIconToggleButton pressed ghost icon="checkboxes"></IxIconToggleButton>
      <IxIconToggleButton disabled ghost icon="checkboxes"></IxIconToggleButton>
      <IxIconToggleButton
        disabled
        loading
        ghost
        icon="checkboxes"
      ></IxIconToggleButton>
    </>
  );
};
