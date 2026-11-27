<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxCodeBlock } from '@siemens/ix-vue';

const code = [
  'const limit = 6.5;',
  'export const isCritical = (value: number) => value > limit;',
].join('\n');
</script>

<template>
  <IxCodeBlock :code="code" language="ts" filename="check.ts"></IxCodeBlock>
</template>
