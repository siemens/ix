<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  iconContextMenu,
  iconPen,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import { IxContentHeader, IxIconButton } from '@siemens/ix-vue';
</script>

<template>
  <IxContentHeader
    variant="secondary"
    header-title="Content title"
    header-subtitle="Subtitle"
  >
    <IxIconButton :icon="iconPen" ghost variant="primary">
      Button1
    </IxIconButton>
    <IxIconButton :icon="iconTrashcan" ghost variant="primary">
      Button2
    </IxIconButton>
    <IxIconButton :icon="iconContextMenu" ghost variant="primary">
      Button3
    </IxIconButton>
  </IxContentHeader>
</template>
