/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconContextMenu,
  iconPen,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import { IxContentHeader, IxIconButton } from '@siemens/ix-react';

export default () => {
  return (
    <IxContentHeader
      variant="subtle-primary"
      header-title="Content title"
      header-subtitle="Subtitle"
    >
      <IxIconButton icon={iconPen} variant="tertiary">
        Button1
      </IxIconButton>
      <IxIconButton icon={iconTrashcan} variant="tertiary">
        Button2
      </IxIconButton>
      <IxIconButton icon={iconContextMenu} variant="tertiary">
        Button3
      </IxIconButton>
    </IxContentHeader>
  );
};
