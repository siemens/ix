/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIconButton, IxList, IxListItem } from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

export default function GenericListActionOnHover() {
  addIcons({ iconEditDocument, iconProject, iconTrashcan });

  return (
    <IxList actionOnHover>
      <IxListItem icon="project" label="Item 1">
        <div slot="action">
          <IxIconButton
            icon="edit-document"
            variant="subtle-tertiary"
          ></IxIconButton>
          <IxIconButton
            icon="trashcan"
            variant="subtle-tertiary"
          ></IxIconButton>
        </div>
      </IxListItem>
      <IxListItem icon="project" label="Item 2">
        <div slot="action">
          <IxIconButton
            icon="edit-document"
            variant="subtle-tertiary"
          ></IxIconButton>
          <IxIconButton
            icon="trashcan"
            variant="subtle-tertiary"
          ></IxIconButton>
        </div>
      </IxListItem>
      <IxListItem icon="project" label="Item 3">
        <div slot="action">
          <IxIconButton
            icon="edit-document"
            variant="subtle-tertiary"
          ></IxIconButton>
          <IxIconButton
            icon="trashcan"
            variant="subtle-tertiary"
          ></IxIconButton>
        </div>
      </IxListItem>
    </IxList>
  );
}
