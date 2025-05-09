<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxCard, IxCardContent, IxIcon, IxTypography } from '@siemens/ix-vue';

const onClick = (event: Event) => {
  console.log(event);
};
</script>

<style scoped src="./card.css"></style>

<template>
  <IxCard variant="insight" @click="onClick">
    <IxCardContent>
      <IxIcon name="capacity"></IxIcon>
      <IxTypography bold>Number of components</IxTypography>
      <IxTypography>
        Vanilla JavaScript<br />
        Angular<br />
        Blazor<br />
        React<br />
        Vue.js
      </IxTypography>
      <IxTypography format="h1">123</IxTypography>
    </IxCardContent>
  </IxCard>
</template>
