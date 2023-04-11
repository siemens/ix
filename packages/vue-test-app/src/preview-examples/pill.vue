<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxPill } from '@siemens/ix-vue';

const styled = {
  width: '8rem',
};
</script>

<template>
  <IxPill variant="custom" color="white" background="purple"> Label </IxPill>

  <IxPill>Label</IxPill>
  <IxPill outline>Label</IxPill>
  <IxPill :style="styled">Label</IxPill>

  <IxPill icon="star">Label</IxPill>
  <IxPill icon="star" :style="styled"> Label </IxPill>
  <IxPill outline alignLeft icon="star" :style="styled"> Label </IxPill>

  <IxPill variant="alarm">Label</IxPill>
  <IxPill variant="alarm" outline> Label </IxPill>
  <IxPill variant="alarm" :style="styled"> Label </IxPill>

  <IxPill variant="alarm" icon="star"> Label </IxPill>
  <IxPill variant="alarm" icon="star" :style="styled"> Label </IxPill>
  <IxPill variant="alarm" outline alignLeft icon="star" :style="styled">
    Label
  </IxPill>
</template>
