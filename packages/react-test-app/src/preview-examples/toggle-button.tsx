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
      <IxToggleButton className="m-1">Normal</IxToggleButton>
      <IxToggleButton pressed className="m-1">
        Pressed
      </IxToggleButton>
      <IxToggleButton className="m-1" disabled>
        Disabled
      </IxToggleButton>
    </>
  );
};
