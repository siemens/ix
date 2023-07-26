/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
      <IxIconToggleButton className="m-1" outline></IxIconToggleButton>
      <IxIconToggleButton className="m-1" outline pressed></IxIconToggleButton>
      <IxIconToggleButton className="m-1" outline disabled></IxIconToggleButton>
      <IxIconToggleButton className="m-1" outline disabled loading></IxIconToggleButton>

      <IxIconToggleButton className="m-1" size="16" outline></IxIconToggleButton>
      <IxIconToggleButton className="m-1" size="16" pressed outline></IxIconToggleButton>
      <IxIconToggleButton className="m-1" size="16" disabled loading outline></IxIconToggleButton>

      <IxIconToggleButton className="m-1" size="12" outline></IxIconToggleButton>
      <IxIconToggleButton className="m-1" size="12" pressed outline></IxIconToggleButton>
      <IxIconToggleButton className="m-1" size="12" disabled loading outline></IxIconToggleButton>
    </>
  );
};
