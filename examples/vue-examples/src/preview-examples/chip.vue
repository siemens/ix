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
      <IxChip :icon="iconPrint" variant="danger" closable>Danger</IxChip>
      <IxChip :icon="iconPrint" variant="warning">Warning</IxChip>
      <IxChip :icon="iconPrint" variant="caution">Caution</IxChip>
      <IxChip
        :icon="iconPrint"
        variant="information"
        tooltip-text="Open details for this status"
        aria-label="In review"
      >
        Information
      </IxChip>
      <IxChip :icon="iconPrint" variant="accent" closable>Accent</IxChip>
      <IxChip :icon="iconPrint" variant="critical">Critical</IxChip>
      <IxChip :icon="iconPrint" variant="success">Success</IxChip>
      <IxChip :icon="iconPrint" variant="neutral">Neutral</IxChip>
      <IxChip
        :icon="iconPrint"
        variant="custom"
        background="var(--si-sys-color-data-categorical-9)"
        chip-color="var(--si-sys-color-text-inverse)"
        closable
      >
        Custom
      </IxChip>
      <IxChip :icon="iconPrint" variant="accent" closable>
        Chip with icon
      </IxChip>
    </div>
    <div class="chip-column">
      <IxChip :icon="iconPrint" variant="danger" outline closable>Danger</IxChip>
      <IxChip :icon="iconPrint" variant="warning" outline>Warning</IxChip>
      <IxChip :icon="iconPrint" variant="caution" outline>Caution</IxChip>
      <IxChip
        :icon="iconPrint"
        variant="information"
        outline
        tooltip-text="Open details for this status"
        aria-label="In review"
      >
        Information
      </IxChip>
      <IxChip :icon="iconPrint" variant="accent" outline closable>Accent</IxChip>
      <IxChip :icon="iconPrint" variant="critical" outline>Critical</IxChip>
      <IxChip :icon="iconPrint" variant="success" outline>Success</IxChip>
      <IxChip :icon="iconPrint" variant="neutral" outline>Neutral</IxChip>
      <IxChip
        :icon="iconPrint"
        variant="custom"
        background="var(--si-sys-color-data-categorical-9)"
        chip-color="var(--si-sys-color-text-primary)"
        outline
        closable
      >
        Custom
      </IxChip>
      <IxChip variant="accent" outline closable>Chip without icon</IxChip>
    </div>
  </div>
</template>
