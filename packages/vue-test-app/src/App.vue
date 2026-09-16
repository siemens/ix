<!--
  SPDX-FileCopyrightText: 2022 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { computed } from 'vue';

import { IxTypography } from '@siemens/ix-vue';

const props = withDefaults(defineProps<{ paths?: string[] }>(), {
  paths: () => [],
});

const sortedPaths = computed(() => [...props.paths].sort());
</script>

<template>
  <div class="index">
    <IxTypography format="h2">Vue preview examples</IxTypography>
    <ul>
      <li v-for="path in sortedPaths" :key="path">
        <a :href="path">{{ path.replace('/preview/', '') }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.index {
  padding: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
