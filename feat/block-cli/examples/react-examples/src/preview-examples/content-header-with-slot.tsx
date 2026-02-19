/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxContentHeader, IxPill } from '@siemens/ix-react';
import { iconInfo } from '@siemens/ix-icons/icons';
import './content-header-with-slot.scoped.css';

export default () => {
  return (
    <IxContentHeader
      hasBackButton
      headerTitle="Content title"
      headerSubtitle="Subtitle"
    >
      <IxPill slot="header" icon={iconInfo} className="margin-top">
        Label
      </IxPill>
      <IxButton ghost>Button1</IxButton>
      <IxButton ghost>Button2</IxButton>
      <IxButton ghost>Button3</IxButton>
    </IxContentHeader>
  );
};
