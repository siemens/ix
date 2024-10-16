/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './icon-toggle-button-secondary.css';

import { IxIconToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxIconToggleButton icon="checkboxes"></IxIconToggleButton>
      <IxIconToggleButton pressed icon="checkboxes"></IxIconToggleButton>
      <IxIconToggleButton disabled icon="checkboxes"></IxIconToggleButton>
      <IxIconToggleButton
        disabled
        loading
        icon="checkboxes"
      ></IxIconToggleButton>
    </>
  );
};
