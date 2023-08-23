<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxCol, IxGrid, IxRow } from '@siemens/ix-vue';
// Example styling for documentation
import './grid.css';
</script>

<template>
  <h4>Column 6 takes all space until reached column 12</h4>
  <IxGrid>
    <IxRow>
      <IxCol>1</IxCol>
      <IxCol>2</IxCol>
      <IxCol>3</IxCol>
      <IxCol>4</IxCol>
      <IxCol>5</IxCol>
      <IxCol size="6">6</IxCol>
    </IxRow>
  </IxGrid>

  <h4>Stack on smaller screens as md</h4>
  <IxGrid>
    <IxRow>
      <IxCol size="12" size-md="3">
        1
      </IxCol>
      <IxCol size="12" size-md="3">
        2
      </IxCol>
      <IxCol size="12" size-md="3">
        3
      </IxCol>
      <IxCol size="12" size-md="3">
        4
      </IxCol>
    </IxRow>
  </IxGrid>
</template>

