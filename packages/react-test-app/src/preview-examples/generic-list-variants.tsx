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

export default function GenericListVariants() {
  addIcons({ iconProject });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <IxList hasDivider itemGap={0} variant="ghost">
        <IxListItem icon="project" label="Item 1"></IxListItem>
        <IxListItem icon="project" label="Item 2"></IxListItem>
        <IxListItem
          icon="project"
          label="Item 3"
          hasDivider={false}
        ></IxListItem>
      </IxList>
      <IxList variant="outline" itemGap={4}>
        <IxListItem icon="project" label="Item 1"></IxListItem>
        <IxListItem icon="project" label="Item 2"></IxListItem>
        <IxListItem icon="project" label="Item 3"></IxListItem>
      </IxList>
      <IxList variant="filled">
        <IxListItem icon="project" label="Item 1"></IxListItem>
        <IxListItem icon="project" label="Item 2"></IxListItem>
        <IxListItem icon="project" label="Item 3"></IxListItem>
      </IxList>
    </div>
  );
}
