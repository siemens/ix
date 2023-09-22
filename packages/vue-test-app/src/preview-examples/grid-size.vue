<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxCol, IxLayoutGrid, IxRow } from '@siemens/ix-vue';
</script>

<style scoped>
ix-layout-grid {
  margin-bottom: 1rem;
}

ix-col {
  background-color: var(--theme-color-primary);
  border: var(--theme-std-bdr-2);
  text-align: center;
  color: var(--theme-color-inv-contrast-text);
}

.example-parent {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-info-40);
}
</style>

<template>
  <h4>Column 6 takes up more space to a max of 12 columns total</h4>
  <IxLayoutGrid>
    <IxRow>
      <IxCol>1</IxCol>
      <IxCol>2</IxCol>
      <IxCol>3</IxCol>
      <IxCol>4</IxCol>
      <IxCol>5</IxCol>
      <IxCol size="6">6</IxCol>
    </IxRow>
  </IxLayoutGrid>

  <h4>Stack columns on smaller screens</h4>
  <IxLayoutGrid>
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
  </IxLayoutGrid>
</template>

