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
  IxPanes,
  IxPane, HTMLRefElement,
} from '@siemens/ix-vue';
import {ref} from "vue";


</script>

<template>
  <IxPanes variant="full-height-left-right">
    <IxPane paneTitle="TOP" slot="top"></IxPane>
    <IxPane paneTitle="RIGHT" slot="right"></IxPane>
    <IxPane ref="leftSidePane" paneTitle="LEFT" slot="left"></IxPane>
    <IxPane paneTitle="BOTTOM" slot="bottom"></IxPane>

  </IxPanes>
</template>
