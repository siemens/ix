/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'example-styles/dist/toggle-button.css';

import { IxToggleButton } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxToggleButton variant="primary" outline={false}>Normal</IxToggleButton>
      <IxToggleButton variant="primary" outline={false} pressed>
        Pressed
      </IxToggleButton>
      <IxToggleButton variant="primary" outline={false} disabled>
        Disabled
      </IxToggleButton>
      <IxToggleButton variant="primary" outline={false} disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
