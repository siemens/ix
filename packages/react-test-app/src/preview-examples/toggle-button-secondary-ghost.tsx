/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './toggle-button-secondary-ghost.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxToggleButton variant="tertiary">Normal</IxToggleButton>
      <IxToggleButton variant="tertiary" pressed>
        Pressed
      </IxToggleButton>
      <IxToggleButton variant="tertiary" disabled>
        Disabled
      </IxToggleButton>
      <IxToggleButton variant="tertiary" disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
