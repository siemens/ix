<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxPane, IxPanes } from '@siemens/ix-vue';
import { ref } from 'vue';

const leftSidePane = ref<any>();

function handleButtonClick() {
  leftSidePane.value!.$el.expand = !leftSidePane.value!.$el.expand;
}
</script>

<template>
  <IxPanes behavior="floating" variant="full-height-left-right">
    <IxPane paneTitle="TOP" slot="top"></IxPane>
    <IxPane paneTitle="RIGHT" slot="right"></IxPane>
    <IxPane ref="leftSidePane" paneTitle="LEFT" slot="left"></IxPane>
    <IxPane paneTitle="BOTTOM" slot="bottom"></IxPane>
    <div slot="content">
      <IxButton @click="handleButtonClick"> Toggle left pane </IxButton>
    </div>
  </IxPanes>
</template>
