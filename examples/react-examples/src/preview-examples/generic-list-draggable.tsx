/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxList, IxListItem } from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import { iconProject } from '@siemens/ix-icons/icons';

export default function GenericListDraggable() {
  addIcons({ iconProject });

  return (
    <IxList draggable>
      <IxListItem icon="project" label="Item 1"></IxListItem>
      <IxListItem icon="project" label="Item 2"></IxListItem>
      <IxListItem icon="project" label="Item 3"></IxListItem>
    </IxList>
  );
}
