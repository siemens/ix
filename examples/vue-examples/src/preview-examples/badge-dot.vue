<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxBadge } from '@siemens/ix-vue';
</script>

<style scoped src="./badge-dot.css"></style>

<template>
  <div class="container">
    <IxBadge type="dot" variant="primary" role="img" aria-label="Primary"></IxBadge>
    <IxBadge type="dot" variant="primary" outline role="img" aria-label="Primary outline"></IxBadge>
    <IxBadge type="dot" variant="primary" enable-animation role="img" aria-label="Primary pulse"></IxBadge>
    <IxBadge type="dot" variant="primary" outline enable-animation role="img" aria-label="Primary pulse outline"></IxBadge>

    <IxBadge type="dot" variant="alarm" role="img" aria-label="Alarm"></IxBadge>
    <IxBadge type="dot" variant="alarm" outline role="img" aria-label="Alarm outline"></IxBadge>
    <IxBadge type="dot" variant="alarm" enable-animation role="img" aria-label="Alarm pulse"></IxBadge>
    <IxBadge type="dot" variant="alarm" outline enable-animation role="img" aria-label="Alarm pulse outline"></IxBadge>

    <IxBadge type="dot" variant="critical" role="img" aria-label="Critical"></IxBadge>
    <IxBadge type="dot" variant="critical" outline role="img" aria-label="Critical outline"></IxBadge>
    <IxBadge type="dot" variant="critical" enable-animation role="img" aria-label="Critical pulse"></IxBadge>
    <IxBadge type="dot" variant="critical" outline enable-animation role="img" aria-label="Critical pulse outline"></IxBadge>

    <IxBadge type="dot" variant="warning" role="img" aria-label="Warning"></IxBadge>
    <IxBadge type="dot" variant="warning" outline role="img" aria-label="Warning outline"></IxBadge>
    <IxBadge type="dot" variant="warning" enable-animation role="img" aria-label="Warning pulse"></IxBadge>
    <IxBadge type="dot" variant="warning" outline enable-animation role="img" aria-label="Warning pulse outline"></IxBadge>

    <IxBadge type="dot" variant="info" role="img" aria-label="Info"></IxBadge>
    <IxBadge type="dot" variant="info" outline role="img" aria-label="Info outline"></IxBadge>
    <IxBadge type="dot" variant="info" enable-animation role="img" aria-label="Info pulse"></IxBadge>
    <IxBadge type="dot" variant="info" outline enable-animation role="img" aria-label="Info pulse outline"></IxBadge>

    <IxBadge type="dot" variant="neutral" role="img" aria-label="Neutral"></IxBadge>
    <IxBadge type="dot" variant="neutral" outline role="img" aria-label="Neutral outline"></IxBadge>
    <IxBadge type="dot" variant="neutral" enable-animation role="img" aria-label="Neutral pulse"></IxBadge>
    <IxBadge type="dot" variant="neutral" outline enable-animation role="img" aria-label="Neutral pulse outline"></IxBadge>

    <IxBadge type="dot" variant="success" role="img" aria-label="Success"></IxBadge>
    <IxBadge type="dot" variant="success" outline role="img" aria-label="Success outline"></IxBadge>
    <IxBadge type="dot" variant="success" enable-animation role="img" aria-label="Success pulse"></IxBadge>
    <IxBadge type="dot" variant="success" outline enable-animation role="img" aria-label="Success pulse outline"></IxBadge>

    <IxBadge type="dot" variant="custom" role="img" aria-label="Custom" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></IxBadge>
    <IxBadge type="dot" variant="custom" outline role="img" aria-label="Custom outline" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></IxBadge>
    <IxBadge type="dot" variant="custom" enable-animation role="img" aria-label="Custom pulse" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></IxBadge>
    <IxBadge type="dot" variant="custom" outline enable-animation role="img" aria-label="Custom pulse outline" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></IxBadge>

  </div>
</template>
