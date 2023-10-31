<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<template>
  <IxToggleButton outline icon="checkboxes"></IxToggleButton>
  <IxToggleButton outline icon="checkboxes"></IxToggleButton>
  <IxToggleButton outline disabled icon="checkboxes"></IxToggleButton>
  <IxToggleButton outline disabled loading icon="checkboxes"></IxToggleButton>

  <IxToggleButton outline size="16" icon="checkboxes"></IxToggleButton>
  <IxToggleButton outline size="16" pressed icon="checkboxes"></IxToggleButton>
  <IxToggleButton outline size="16" disabled loading icon="checkboxes"></IxToggleButton>

  <IxToggleButton outline size="12" icon="checkboxes"></IxToggleButton>
  <IxToggleButton outline size="12" pressed icon="checkboxes"></IxToggleButton>
  <IxToggleButton outline size="12" disabled loading icon="checkboxes"></IxToggleButton>
</template>
