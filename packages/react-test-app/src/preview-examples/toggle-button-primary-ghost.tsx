/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './toggle-button-primary-ghost.css';

import { IxToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxToggleButton variant="primary" ghost>
        Normal
      </IxToggleButton>
      <IxToggleButton variant="primary" ghost pressed>
        Pressed
      </IxToggleButton>
      <IxToggleButton variant="primary" ghost disabled>
        Disabled
      </IxToggleButton>
      <IxToggleButton variant="primary" ghost disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
