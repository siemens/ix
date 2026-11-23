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
    <IxBadge type="counter" label="8" variant="accent"></IxBadge>
    <IxBadge type="counter" label="8" variant="accent" outline></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="accent"
      enable-animation
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="accent"
      outline
      enable-animation
    ></IxBadge>

    <IxBadge type="counter" label="8" variant="danger"></IxBadge>
    <IxBadge type="counter" label="8" variant="danger" outline></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="danger"
      enable-animation
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="danger"
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

    <IxBadge type="counter" label="8" variant="information"></IxBadge>
    <IxBadge type="counter" label="8" variant="information" outline></IxBadge>
    <IxBadge type="counter" label="8" variant="information" enable-animation></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="information"
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
      background="var(--si-sys-color-data-categorical-9)"
      badge-color="var(--si-sys-color-text-inverse)"
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="custom"
      outline
      background="var(--si-sys-color-data-categorical-9)"
      badge-color="var(--si-sys-color-text-primary)"
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="custom"
      enable-animation
      background="var(--si-sys-color-data-categorical-9)"
      badge-color="var(--si-sys-color-text-inverse)"
    ></IxBadge>
    <IxBadge
      type="counter"
      label="8"
      variant="custom"
      outline
      enable-animation
      background="var(--si-sys-color-data-categorical-9)"
      badge-color="var(--si-sys-color-text-primary)"
    ></IxBadge>
  </div>
</template>
