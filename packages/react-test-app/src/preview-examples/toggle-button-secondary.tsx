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
      <IxToggleButton outline={false}>Normal</IxToggleButton>
      <IxToggleButton outline={false} pressed>
        Pressed
      </IxToggleButton>
      <IxToggleButton outline={false} disabled>
        Disabled
      </IxToggleButton>
      <IxToggleButton outline={false} disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
