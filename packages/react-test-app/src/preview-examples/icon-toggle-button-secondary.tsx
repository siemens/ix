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
      <IxIconToggleButton className="m-1" outline={false}></IxIconToggleButton>
      <IxIconToggleButton className="m-1" pressed outline={false}></IxIconToggleButton>
      <IxIconToggleButton className="m-1" disabled outline={false}></IxIconToggleButton>
      <IxIconToggleButton className="m-1" disabled loading outline={false}></IxIconToggleButton>
    </>
  );
};
