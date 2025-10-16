/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconCar,
  iconCogwheelFilled,
  iconDashboard,
  iconDetails,
  iconJigsaw,
} from '@siemens/ix-icons/icons';
import { IxButton } from '@siemens/ix-react';

export default () => (
  <div className="ix-button-group">
    <IxButton variant="subtle-secondary" icon={iconCar}>
      A
    </IxButton>
    <IxButton icon={iconJigsaw}>B</IxButton>
    <IxButton variant="subtle-secondary" icon={iconDashboard}>
      C
    </IxButton>
    <IxButton variant="subtle-secondary" icon={iconDetails}>
      D
    </IxButton>
    <IxButton variant="subtle-secondary" icon={iconCogwheelFilled}>
      E
    </IxButton>
  </div>
);
