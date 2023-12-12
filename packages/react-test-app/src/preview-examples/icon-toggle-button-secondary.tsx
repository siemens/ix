/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '../../../documentation/static/styles/icon-toggle-button.css';

import { IxIconToggleButton } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxIconToggleButton icon="checkboxes"></IxIconToggleButton>
      <IxIconToggleButton pressed icon="checkboxes"></IxIconToggleButton>
      <IxIconToggleButton disabled icon="checkboxes"></IxIconToggleButton>
      <IxIconToggleButton disabled loading icon="checkboxes"></IxIconToggleButton>
    </>
  );
};
