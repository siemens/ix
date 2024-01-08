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
  IxButton,
  IxSidePane,
  IxSidePaneContentArea,
  IxSidePaneGroup,
} from '@siemens/ix-vue';
import { HTMLRefElement } from '@siemens/ix-vue';
import { ref } from 'vue';

const leftSidePane = ref<HTMLRefElement<HTMLIxSidePaneElement>>();

function handleButtonClick() {
  leftSidePane.value!.$el.expandPane = !leftSidePane.value!.$el.expandPane;
}
</script>

<template>
  <IxSidePaneGroup floating variant="1">
    <IxSidePane paneTitle="TOP" slot="top"></IxSidePane>
    <IxSidePane paneTitle="RIGHT" slot="right"></IxSidePane>
    <IxSidePane ref="leftSidePane" paneTitle="LEFT" slot="left"></IxSidePane>
    <IxSidePane paneTitle="BOTTOM" slot="bottom"></IxSidePane>
    <IxSidePaneContentArea slot="content">
      <p>This is a text content.</p>
    </IxSidePaneContentArea>
  </IxSidePaneGroup>
</template>
