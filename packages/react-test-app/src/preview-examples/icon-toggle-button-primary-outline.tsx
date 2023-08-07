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
      <IxIconToggleButton variant="primary" outline></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        pressed
        outline
      ></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        disabled
        outline
      ></IxIconToggleButton>
      <IxIconToggleButton
        variant="primary"
        disabled
        loading
        outline
      ></IxIconToggleButton>
    </>
  );
};
