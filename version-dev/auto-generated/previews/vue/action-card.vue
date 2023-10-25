<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxActionCard } from '@siemens/ix-vue';

const onClick = (event: Event) => {
  console.log(event);
};
</script>

<template>
  <IxActionCard
    icon="refresh"
    heading="Scan for new devices"
    subheading="Secondary text"
    variant="insight"
    @click="onClick"
  ></IxActionCard>
</template>
