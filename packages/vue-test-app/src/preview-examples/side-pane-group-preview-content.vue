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
  IxSidePane,
  IxSidePaneContentArea,
  IxSidePaneGroup,
} from '@siemens/ix-vue';
</script>

<template>
  <IxSidePaneGroup inline variant="1">
    <IxSidePane paneTitle="TOP" slot="top"></IxSidePane>
    <IxSidePane
      paneTitle="RIGHT"
      slot="right"
      showPreviewContent="true"
    ></IxSidePane>
    <IxSidePane ref="leftSidePane" paneTitle="LEFT" slot="left"></IxSidePane>
    <IxSidePane paneTitle="BOTTOM" slot="bottom"></IxSidePane>
    <IxSidePaneContentArea slot="content">
      <p>This is a text content.</p>
    </IxSidePaneContentArea>
  </IxSidePaneGroup>
</template>
