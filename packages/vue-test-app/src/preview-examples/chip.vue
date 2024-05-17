<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxChip } from '@siemens/ix-vue';
</script>

<style scoped src="example-styles/dist/chip.css"></style>

<template>
  <div class="chip">
    <IxChip closable outline> Primary </IxChip>
    <IxChip icon="print">Primary with icon</IxChip>
    <IxChip icon="print" closable> Primary </IxChip>

    <IxChip variant="critical" closable outline> Alarm </IxChip>
    <IxChip variant="alarm" icon="print"> Alarm with icon </IxChip>
    <IxChip variant="alarm" icon="print" closable> Alarm </IxChip>
    <IxChip variant="warning" icon="print" closable> Alarm </IxChip>
    <IxChip
      background="purple"
      color="green"
      variant="custom"
      icon="print"
      closable
    >
      Custom
    </IxChip>
  </div>
</template>
