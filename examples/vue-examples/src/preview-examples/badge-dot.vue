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
    <IxBadge
      type="dot"
      variant="accent"
      role="img"
      aria-label="Accent"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="accent"
      outline
      role="img"
      aria-label="Accent outline"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="accent"
      enable-animation
      role="img"
      aria-label="Accent pulse"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="accent"
      outline
      enable-animation
      role="img"
      aria-label="Accent pulse outline"
    ></IxBadge>

    <IxBadge type="dot" variant="danger" role="img" aria-label="Danger"></IxBadge>
    <IxBadge
      type="dot"
      variant="danger"
      outline
      role="img"
      aria-label="Danger outline"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="danger"
      enable-animation
      role="img"
      aria-label="Danger pulse"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="danger"
      outline
      enable-animation
      role="img"
      aria-label="Danger pulse outline"
    ></IxBadge>

    <IxBadge
      type="dot"
      variant="critical"
      role="img"
      aria-label="Critical"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="critical"
      outline
      role="img"
      aria-label="Critical outline"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="critical"
      enable-animation
      role="img"
      aria-label="Critical pulse"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="critical"
      outline
      enable-animation
      role="img"
      aria-label="Critical pulse outline"
    ></IxBadge>

    <IxBadge
      type="dot"
      variant="warning"
      role="img"
      aria-label="Warning"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="warning"
      outline
      role="img"
      aria-label="Warning outline"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="warning"
      enable-animation
      role="img"
      aria-label="Warning pulse"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="warning"
      outline
      enable-animation
      role="img"
      aria-label="Warning pulse outline"
    ></IxBadge>

    <IxBadge type="dot" variant="information" role="img" aria-label="Information"></IxBadge>
    <IxBadge
      type="dot"
      variant="information"
      outline
      role="img"
      aria-label="Information outline"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="information"
      enable-animation
      role="img"
      aria-label="Information pulse"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="information"
      outline
      enable-animation
      role="img"
      aria-label="Information pulse outline"
    ></IxBadge>

    <IxBadge
      type="dot"
      variant="neutral"
      role="img"
      aria-label="Neutral"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="neutral"
      outline
      role="img"
      aria-label="Neutral outline"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="neutral"
      enable-animation
      role="img"
      aria-label="Neutral pulse"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="neutral"
      outline
      enable-animation
      role="img"
      aria-label="Neutral pulse outline"
    ></IxBadge>

    <IxBadge
      type="dot"
      variant="success"
      role="img"
      aria-label="Success"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="success"
      outline
      role="img"
      aria-label="Success outline"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="success"
      enable-animation
      role="img"
      aria-label="Success pulse"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="success"
      outline
      enable-animation
      role="img"
      aria-label="Success pulse outline"
    ></IxBadge>

    <IxBadge
      type="dot"
      variant="custom"
      role="img"
      aria-label="Custom"
      background="var(--si-sys-color-data-categorical-9)"
      badge-color="var(--si-sys-color-text-inverse)"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="custom"
      outline
      role="img"
      aria-label="Custom outline"
      background="var(--si-sys-color-data-categorical-9)"
      badge-color="var(--si-sys-color-text-primary)"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="custom"
      enable-animation
      role="img"
      aria-label="Custom pulse"
      background="var(--si-sys-color-data-categorical-9)"
      badge-color="var(--si-sys-color-text-inverse)"
    ></IxBadge>
    <IxBadge
      type="dot"
      variant="custom"
      outline
      enable-animation
      role="img"
      aria-label="Custom pulse outline"
      background="var(--si-sys-color-data-categorical-9)"
      badge-color="var(--si-sys-color-text-primary)"
    ></IxBadge>
  </div>
</template>
