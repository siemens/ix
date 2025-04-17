<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconStar } from '@siemens/ix-icons/icons';
import { IxPill } from '@siemens/ix-vue';
</script>

<style scoped src="./pill.css"></style>

<template>
  <IxPill variant="custom" color="white" background="purple">Label</IxPill>

  <IxPill tooltip-text="Custom tooltip text">Label</IxPill>
  <IxPill tooltip-text outline>Label</IxPill>
  <IxPill class="styled">Label</IxPill>

  <IxPill :icon="iconStar">Label</IxPill>
  <IxPill :icon="iconStar"></IxPill>
  <IxPill :icon="iconStar" class="styled">Label</IxPill>
  <IxPill outline alignLeft :icon="iconStar" class="styled">Label</IxPill>

  <IxPill variant="alarm">Label</IxPill>
  <IxPill variant="alarm" outline>Label</IxPill>
  <IxPill variant="alarm" class="styled">Label</IxPill>

  <IxPill variant="alarm" :icon="iconStar">Label</IxPill>
  <IxPill variant="alarm" :icon="iconStar" class="styled">Label</IxPill>
  <IxPill variant="alarm" outline alignLeft :icon="iconStar" class="styled">
    Label
  </IxPill>
  <IxPill :icon="iconStar" class="styled-ellipsis-4">Label</IxPill>
  <IxPill outline :icon="iconStar" class="styled-ellipsis-4">Label</IxPill>
  <IxPill class="styled-ellipsis-3">Label</IxPill>
  <IxPill outline class="styled-ellipsis-3">Label</IxPill>
</template>
