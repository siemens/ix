/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxContentHeader, IxIconButton } from '@siemens/ix-react';

import React from 'react';

export default () => {
  return (
    <IxContentHeader
      variant="secondary"
      header-title="content title"
      header-subtitle="subtitle content"
    >
      <IxIconButton icon="pen" ghost variant="primary">
        Button1
      </IxIconButton>
      <IxIconButton icon="trashcan" ghost variant="primary">
        Button2
      </IxIconButton>
      <IxIconButton icon="context-menu" ghost variant="primary">
        Button3
      </IxIconButton>
    </IxContentHeader>
  );
};
