/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxToggleButton } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxToggleButton>Normal</IxToggleButton>
      <IxToggleButton pressed>Pressed</IxToggleButton>
      <IxToggleButton disabled>Disabled</IxToggleButton>
      <IxToggleButton disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
