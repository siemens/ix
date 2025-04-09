<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconPrint } from '@siemens/ix-icons/icons';
import { IxChip } from '@siemens/ix-vue';
</script>

<style scoped src="./chip.css"></style>

<template>
  <div class="chip">
    <IxChip closable outline>Primary</IxChip>
    <IxChip :icon="iconPrint" tooltip-text="Custom tooltip text">
      Primary with icon
    </IxChip>
    <IxChip :icon="iconPrint" tooltip-text closable>Primary</IxChip>

    <IxChip variant="critical" closable outline>Alarm</IxChip>
    <IxChip variant="alarm" :icon="iconPrint">Alarm with icon</IxChip>
    <IxChip variant="alarm" :icon="iconPrint" closable>Alarm</IxChip>
    <IxChip variant="warning" :icon="iconPrint" closable>Alarm</IxChip>
    <IxChip
      background="purple"
      chip-color="green"
      variant="custom"
      :icon="iconPrint"
      closable
    >
      Custom
    </IxChip>
  </div>
</template>
