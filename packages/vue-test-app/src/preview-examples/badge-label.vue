<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconInfo } from '@siemens/ix-icons/icons';
import { IxBadge } from '@siemens/ix-vue';
</script>

<style scoped src="./badge-label.css"></style>

<template>
  <div class="container">
    <IxBadge type="label" label="Primary" variant="primary" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Primary" variant="primary" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Primary" variant="primary" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Primary" variant="primary" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Alarm" variant="alarm" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Alarm" variant="alarm" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Alarm" variant="alarm" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Alarm" variant="alarm" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Critical" variant="critical" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Critical" variant="critical" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Critical" variant="critical" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Critical" variant="critical" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Warning" variant="warning" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Warning" variant="warning" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Warning" variant="warning" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Warning" variant="warning" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Info" variant="info" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Info" variant="info" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Info" variant="info" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Info" variant="info" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Neutral" variant="neutral" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Neutral" variant="neutral" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Neutral" variant="neutral" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Neutral" variant="neutral" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Success" variant="success" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Success" variant="success" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Success" variant="success" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Success" variant="success" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Custom" variant="custom" :icon="iconInfo" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></IxBadge>
    <IxBadge type="label" label="Custom" variant="custom" :icon="iconInfo" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)" outline></IxBadge>
    <IxBadge type="label" label="Custom" variant="custom" :icon="iconInfo" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)" enable-animation></IxBadge>
    <IxBadge type="label" label="Custom" variant="custom" :icon="iconInfo" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)" outline enable-animation></IxBadge>
  </div>
</template>
