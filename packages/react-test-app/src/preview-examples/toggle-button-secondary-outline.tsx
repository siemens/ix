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
      <IxToggleButton variant="subtle-primary">Normal</IxToggleButton>
      <IxToggleButton variant="subtle-primary" pressed>
        Pressed
      </IxToggleButton>
      <IxToggleButton variant="subtle-primary" disabled>
        Disabled
      </IxToggleButton>
      <IxToggleButton variant="subtle-primary" disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
