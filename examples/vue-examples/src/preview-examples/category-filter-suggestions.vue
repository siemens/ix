<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxCategoryFilter } from '@siemens/ix-vue';
import { ref } from 'vue';

const suggestions = ref(['Item 1', 'Item 2']);
</script>

<template>
  <IxCategoryFilter
    placeholder="Filter by"
    :suggestions="suggestions"
  ></IxCategoryFilter>
</template>
