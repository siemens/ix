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
    <div class="chip-column">
      <IxChip
        :icon="iconPrint"
        variant="primary"
        outline
        closable
        aria-label="Primary category"
        aria-label-close-button="Remove primary category"
      >Primary</IxChip>
      <IxChip :icon="iconPrint" variant="alarm" outline closable aria-label-close-button="Remove alarm">Alarm</IxChip>
      <IxChip :icon="iconPrint" variant="critical" outline>Critical</IxChip>
      <IxChip :icon="iconPrint" variant="warning" outline>Warning</IxChip>
      <IxChip :icon="iconPrint" variant="info" outline tooltip-text="Click to edit" aria-label="Information tag">Info</IxChip>
      <IxChip :icon="iconPrint" variant="success" outline>Success</IxChip>
      <IxChip :icon="iconPrint" variant="neutral" outline>Neutral</IxChip>
      <IxChip
        :icon="iconPrint"
        variant="custom"
        outline
        background="#5C3FD6"
        chipColor="#FFFFFF"
        closable
        aria-label="Custom chip"
        aria-label-close-button="Remove custom chip"
      >
        Custom
      </IxChip>
      <IxChip :icon="iconPrint" variant="primary" outline closable>
        Chip with icon
      </IxChip>
    </div>
    <div class="chip-column">
      <IxChip :icon="iconPrint" variant="primary" closable>Primary</IxChip>
      <IxChip :icon="iconPrint" variant="alarm" closable aria-label-close-button="Remove alarm">Alarm</IxChip>
      <IxChip :icon="iconPrint" variant="critical">Critical</IxChip>
      <IxChip :icon="iconPrint" variant="warning">Warning</IxChip>
      <IxChip :icon="iconPrint" variant="info" tooltip-text="Click to edit" aria-label="Information tag">Info</IxChip>
      <IxChip :icon="iconPrint" variant="success">Success</IxChip>
      <IxChip :icon="iconPrint" variant="neutral">Neutral</IxChip>
      <IxChip
        variant="custom"
        background="#5C3FD6"
        chipColor="#FFFFFF"
        closable
        aria-label="Custom chip"
        aria-label-close-button="Remove custom chip"
      >
        Custom
      </IxChip>
      <IxChip variant="primary" closable>Chip without icon</IxChip>
    </div>
  </div>
</template>
