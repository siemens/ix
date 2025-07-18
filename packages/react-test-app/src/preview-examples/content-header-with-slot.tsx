/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxContentHeader, IxPill } from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import { iconInfo } from '@siemens/ix-icons/icons';

addIcons({ iconInfo });

export default () => {
  return (
    <IxContentHeader
      hasBackButton
      headerTitle="Content title"
      headerSubtitle="Subtitle"
    >
      <IxPill slot="header" icon="info">
        Label
      </IxPill>
      <IxButton ghost>Button1</IxButton>
      <IxButton ghost>Button2</IxButton>
      <IxButton ghost>Button3</IxButton>
    </IxContentHeader>
  );
};
