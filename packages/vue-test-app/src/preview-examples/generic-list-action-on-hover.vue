<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxIconButton, IxList, IxListItem } from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

addIcons({ iconEditDocument, iconProject, iconTrashcan });
</script>

<template>
  <IxList action-on-hover>
    <IxListItem icon="project" label="Item 1">
      <div slot="action">
        <IxIconButton
          icon="edit-document"
          variant="subtle-tertiary"
          aria-label="Edit Item 1"
        ></IxIconButton>
        <IxIconButton
          icon="trashcan"
          variant="subtle-tertiary"
          aria-label="Delete Item 1"
        ></IxIconButton>
      </div>
    </IxListItem>
    <IxListItem icon="project" label="Item 2">
      <div slot="action">
        <IxIconButton
          icon="edit-document"
          variant="subtle-tertiary"
          aria-label="Edit Item 2"
        ></IxIconButton>
        <IxIconButton
          icon="trashcan"
          variant="subtle-tertiary"
          aria-label="Delete Item 2"
        ></IxIconButton>
      </div>
    </IxListItem>
    <IxListItem icon="project" label="Item 3">
      <div slot="action">
        <IxIconButton
          icon="edit-document"
          variant="subtle-tertiary"
          aria-label="Edit Item 3"
        ></IxIconButton>
        <IxIconButton
          icon="trashcan"
          variant="subtle-tertiary"
          aria-label="Delete Item 3"
        ></IxIconButton>
      </div>
    </IxListItem>
  </IxList>
</template>
