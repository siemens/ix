/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIconToggleButton } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxIconToggleButton outline></IxIconToggleButton>
      <IxIconToggleButton outline pressed></IxIconToggleButton>
      <IxIconToggleButton outline disabled></IxIconToggleButton>
      <IxIconToggleButton outline disabled loading></IxIconToggleButton>

      <IxIconToggleButton size="16" outline></IxIconToggleButton>
      <IxIconToggleButton size="16" pressed outline></IxIconToggleButton>
      <IxIconToggleButton size="16" disabled loading outline></IxIconToggleButton>

      <IxIconToggleButton size="12" outline></IxIconToggleButton>
      <IxIconToggleButton size="12" pressed outline></IxIconToggleButton>
      <IxIconToggleButton size="12" disabled loading outline></IxIconToggleButton>
    </>
  );
};
