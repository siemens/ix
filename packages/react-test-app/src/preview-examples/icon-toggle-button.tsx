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
      <IxIconToggleButton className="m-1"></IxIconToggleButton>
      <IxIconToggleButton className="m-1" pressed></IxIconToggleButton>
      <IxIconToggleButton className="m-1" disabled></IxIconToggleButton>

      <IxIconToggleButton className="m-1" size="16"></IxIconToggleButton>
      <IxIconToggleButton className="m-1" size="16" pressed></IxIconToggleButton>
      <IxIconToggleButton className="m-1" size="16" disabled></IxIconToggleButton>

      <IxIconToggleButton className="m-1" size="12"></IxIconToggleButton>
      <IxIconToggleButton className="m-1" size="12" pressed></IxIconToggleButton>
      <IxIconToggleButton className="m-1" size="12" disabled></IxIconToggleButton>

    </>
  );
};
