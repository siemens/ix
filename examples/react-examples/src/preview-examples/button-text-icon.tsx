/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconBulb, iconStar } from '@siemens/ix-icons/icons';
import './button-text-icon.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton icon={iconStar}>Button</IxButton>
      <IxButton icon={iconStar} iconRight={iconBulb}>
        Button
      </IxButton>
      <IxButton iconRight={iconBulb}>Button</IxButton>
      <IxButton variant="subtle-primary" icon={iconStar}>
        Button
      </IxButton>
      <IxButton variant="subtle-primary" icon={iconStar}>
        Button
      </IxButton>
      <IxButton variant="tertiary" icon={iconStar}>
        Button
      </IxButton>
    </>
  );
};
