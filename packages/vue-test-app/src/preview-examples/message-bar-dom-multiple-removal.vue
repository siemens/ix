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
      <ix-message-bar
        v-for="bar in messageBars"
        :key="bar.id"
        :type="bar.variant"
        @closeAnimationCompleted="handleCloseAnimationCompleted(bar.id)"
      >
        Message text
      </ix-message-bar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Variant = 'info' | 'warning' | 'danger';

const messageBars = ref<{ id: number; variant: Variant }[]>([]);
const variants: Variant[] = ['info', 'warning', 'danger'];

const handleCloseAnimationCompleted = (id: number) => {
  messageBars.value = messageBars.value.filter((bar) => bar.id !== id);
};

const handleShowMessageBar = () => {
  const randomVariant = variants[Math.floor(Math.random() * variants.length)];
  messageBars.value.push({ id: Date.now(), variant: randomVariant });
};
</script>
