<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxPaneLayout,
  IxPane,
} from '@siemens/ix-vue';
</script>

<template>
  <IxPaneLayout variant="inline">
    <IxPane heading="TOP" slot="top"></IxPane>
    <IxPane heading="RIGHT" slot="right"></IxPane>
    <IxPane heading="LEFT" slot="left"></IxPane>
    <IxPane heading="BOTTOM" slot="bottom"></IxPane>
    <div slot="content">
      <p>This is a text content.</p>
    </div>
  </IxPaneLayout>
</template>
