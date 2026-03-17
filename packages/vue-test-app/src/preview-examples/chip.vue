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
        aria-label="Engineering"
        aria-label-close-button="Remove Engineering"
      >Engineering</IxChip>
      <IxChip :icon="iconPrint" variant="alarm" outline closable aria-label-close-button="Remove Urgent">Urgent</IxChip>
      <IxChip :icon="iconPrint" variant="critical" outline>Overdue</IxChip>
      <IxChip :icon="iconPrint" variant="warning" outline>Due soon</IxChip>
      <IxChip :icon="iconPrint" variant="info" outline tooltip-text="Click to edit" aria-label="In review">In review</IxChip>
      <IxChip :icon="iconPrint" variant="success" outline>Completed</IxChip>
      <IxChip :icon="iconPrint" variant="neutral" outline>Draft</IxChip>
      <IxChip
        :icon="iconPrint"
        variant="custom"
        outline
        background="#5C3FD6"
        chipColor="#FFFFFF"
        closable
        aria-label="Project Alpha"
        aria-label-close-button="Remove Project Alpha"
      >
        Project Alpha
      </IxChip>
      <IxChip
        :icon="iconPrint"
        variant="primary"
        outline
        closable
        aria-label-close-button="Remove Design"
      >Design</IxChip>
    </div>
    <div class="chip-column">
      <IxChip
        :icon="iconPrint"
        variant="primary"
        closable
        aria-label-close-button="Remove Engineering"
      >Engineering</IxChip>
      <IxChip :icon="iconPrint" variant="alarm" closable aria-label-close-button="Remove Urgent">Urgent</IxChip>
      <IxChip :icon="iconPrint" variant="critical">Overdue</IxChip>
      <IxChip :icon="iconPrint" variant="warning">Due soon</IxChip>
      <IxChip :icon="iconPrint" variant="info" tooltip-text="Click to edit" aria-label="In review">In review</IxChip>
      <IxChip :icon="iconPrint" variant="success">Completed</IxChip>
      <IxChip :icon="iconPrint" variant="neutral">Draft</IxChip>
      <IxChip
        variant="custom"
        background="#5C3FD6"
        chipColor="#FFFFFF"
        closable
        aria-label="Project Alpha"
        aria-label-close-button="Remove Project Alpha"
      >
        Project Alpha
      </IxChip>
      <IxChip variant="primary" closable aria-label-close-button="Remove Design">Design</IxChip>
    </div>
  </div>
</template>
