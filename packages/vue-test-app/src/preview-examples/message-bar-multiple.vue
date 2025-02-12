<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<template>
  <div class="message-bar">
    <ix-message-bar
      v-for="bar in messageBars"
      :key="bar.id"
      :type="bar.variant"
      @closeAnimationCompleted="() => handleCloseAnimationCompleted(bar.id)"
    >
      Message text
    </ix-message-bar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

type Variant = 'info' | 'warning' | 'danger';

interface MessageBar {
  id: number;
  variant: Variant;
}

const messageBars = ref<MessageBar[]>([
  { id: 1, variant: 'info' },
  { id: 2, variant: 'warning' },
  { id: 3, variant: 'danger' }
]);

const handleCloseAnimationCompleted = (id: number) => {
  messageBars.value = messageBars.value.filter((bar) => bar.id !== id);
};
</script>

<style scoped>
@import './message-bar.css';
</style>
