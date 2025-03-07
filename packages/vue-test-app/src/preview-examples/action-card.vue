<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxActionCard } from '@siemens/ix-vue';
import { iconRefresh } from '@siemens/ix-icons/icons';

const onClick = (event: Event) => {
  console.log(event);
};
</script>

<template>
  <IxActionCard
    :icon="iconRefresh"
    heading="Scan for new devices"
    subheading="Secondary text"
    variant="outline"
    @click="onClick"
  ></IxActionCard>
</template>
