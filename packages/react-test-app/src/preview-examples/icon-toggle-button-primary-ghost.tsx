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
      <IxIconToggleButton
        className="m-1"
        variant="primary"
        outline={false}
        ghost
      ></IxIconToggleButton>
      <IxIconToggleButton
        className="m-1"
        variant="primary"
        pressed
        outline={false}
        ghost
      ></IxIconToggleButton>
      <IxIconToggleButton
        className="m-1"
        variant="primary"
        disabled
        outline={false}
        ghost
      ></IxIconToggleButton>
      <IxIconToggleButton
        className="m-1"
        variant="primary"
        disabled
        loading
        outline={false}
        ghost
      ></IxIconToggleButton>
    </>
  );
};
