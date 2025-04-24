/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './toggle-button-secondary-outline.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxToggleButton outline>Normal</IxToggleButton>
      <IxToggleButton outline pressed>
        Pressed
      </IxToggleButton>
      <IxToggleButton outline disabled>
        Disabled
      </IxToggleButton>
      <IxToggleButton outline disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
