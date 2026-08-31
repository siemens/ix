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

<style scoped src="./badge-counter.css"></style>

<template>
  <div class="container">
    <IxBadge type="counter" label="8" variant="primary"></IxBadge>
    <IxBadge type="counter" label="8" variant="primary" outline></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="primary"
      enable-animation
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="primary"
      outline
      enable-animation
    ></IxBadge>

    <IxBadge type="counter" label="8" variant="alarm"></IxBadge>
    <IxBadge type="counter" label="8" variant="alarm" outline></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="alarm"
      enable-animation
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="alarm"
      outline
      enable-animation
    ></IxBadge>

    <IxBadge type="counter" label="8" variant="critical"></IxBadge>
    <IxBadge type="counter" label="8" variant="critical" outline></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="critical"
      enable-animation
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="critical"
      outline
      enable-animation
    ></IxBadge>

    <IxBadge type="counter" label="8" variant="warning"></IxBadge>
    <IxBadge type="counter" label="8" variant="warning" outline></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="warning"
      enable-animation
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="warning"
      outline
      enable-animation
    ></IxBadge>

    <IxBadge type="counter" label="8" variant="info"></IxBadge>
    <IxBadge type="counter" label="8" variant="info" outline></IxBadge>
    <IxBadge type="counter" label="8" variant="info" enable-animation></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="info"
      outline
      enable-animation
    ></IxBadge>

    <IxBadge type="counter" label="8" variant="neutral"></IxBadge>
    <IxBadge type="counter" label="8" variant="neutral" outline></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="neutral"
      enable-animation
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="neutral"
      outline
      enable-animation
    ></IxBadge>

    <IxBadge type="counter" label="8" variant="success"></IxBadge>
    <IxBadge type="counter" label="8" variant="success" outline></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="success"
      enable-animation
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="success"
      outline
      enable-animation
    ></IxBadge>

    <IxBadge
      type="counter"
      label="8"
      variant="custom"
      background="var(--si-sys-data-categorical-9)"
      badge-color="var(--si-sys-text-inverse)"
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="custom"
      outline
      background="var(--si-sys-data-categorical-9)"
      badge-color="var(--si-sys-text-primary)"
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="custom"
      enable-animation
      background="var(--si-sys-data-categorical-9)"
      badge-color="var(--si-sys-text-inverse)"
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="custom"
      outline
      enable-animation
      background="var(--si-sys-data-categorical-9)"
      badge-color="var(--si-sys-text-primary)"
    ></IxBadge>
  </div>
</template>
