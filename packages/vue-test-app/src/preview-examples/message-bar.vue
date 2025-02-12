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
      v-if="showMessageBar"
      @closeAnimationCompleted="handleCloseAnimationCompleted"
    >
      Message text
    </ix-message-bar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

const showMessageBar = ref(true);

const handleCloseAnimationCompleted = () => {
  showMessageBar.value = false;
};
</script>

<style scoped>
@import './message-bar.css';
</style>
