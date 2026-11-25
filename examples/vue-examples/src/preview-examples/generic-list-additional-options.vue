<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxIconButton,
  IxList,
  IxListItem,
  IxListItemSeparator,
} from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import { ref } from 'vue';

addIcons({ iconEditDocument, iconProject, iconTrashcan });

const selected = ref([false, false, false]);
</script>

<template>
  <IxList checkbox>
    <IxListItem
      icon="project"
      label="Item 1"
      description="Some description 1"
      :selected="selected[0]"
      @selectedChange="selected[0] = $event.detail"
    >
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
    <IxListItemSeparator></IxListItemSeparator>
    <IxListItem
      icon="project"
      label="Item 2"
      description="Some description 2"
      :selected="selected[1]"
      @selectedChange="selected[1] = $event.detail"
    >
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
    <IxListItem
      icon="project"
      label="Item 3"
      description="Some description 3"
      :selected="selected[2]"
      @selectedChange="selected[2] = $event.detail"
    >
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
