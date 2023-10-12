<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { TestComponent } from '@siemens/ix-vue';
import { ClickEvent, TestComponentCustomEvent } from '@siemens/ix';

const onButtonClicked = (event: TestComponentCustomEvent<ClickEvent>) => {
  console.log('Button clicked count:', event.detail.clicks);
};
</script>

<template>
  <TestComponent @button-clicked="onButtonClicked">Test</TestComponent>
</template>
