<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxDateDropdown } from '@siemens/ix-vue';
</script>

<template>
  <IxDateDropdown />
  <IxDateDropdown from="2026/02/01" to="2026/02/08" display-format="dd.LL.yy" />
</template>
