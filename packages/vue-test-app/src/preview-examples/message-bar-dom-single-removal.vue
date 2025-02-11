<!--
SPDX-FileCopyrightText: 2024 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<template>
  <div>
    <ix-button @click="handleShowMessageBar">Show Message Bar</ix-button>
    <div class="message-bar">
      <ix-message-bar v-if="showMessageBar" @closeAnimationCompleted="handleCloseAnimationCompleted">
        Message text
      </ix-message-bar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showMessageBar = ref(false);

const handleCloseAnimationCompleted = () => {
  showMessageBar.value = false;
};

const handleShowMessageBar = () => {
  showMessageBar.value = true;
};
</script>
