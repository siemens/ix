<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxCol, IxLayoutGrid, IxRow, IxTypography } from '@siemens/ix-vue';
</script>

<style scoped src="./styles/grid.css"></style>

<template>
  <IxLayoutGrid className='example-grid'>
    <IxRow>
      <IxCol><IxTypography format="display">1</IxTypography></IxCol>
      <IxCol><IxTypography format="display">2</IxTypography></IxCol>
      <IxCol><IxTypography format="display">3</IxTypography></IxCol>
      <IxCol><IxTypography format="display">4</IxTypography></IxCol>
      <IxCol><IxTypography format="display">5</IxTypography></IxCol>
      <IxCol><IxTypography format="display">6</IxTypography></IxCol>
    </IxRow>
  </IxLayoutGrid>

  <IxLayoutGrid className='example-grid'>
    <IxRow>
      <IxCol><IxTypography format="display">1</IxTypography></IxCol>
      <IxCol><IxTypography format="display">2</IxTypography></IxCol>
      <IxCol><IxTypography format="display">3</IxTypography></IxCol>
      <IxCol><IxTypography format="display">4</IxTypography></IxCol>
      <IxCol><IxTypography format="display">5</IxTypography></IxCol>
      <IxCol><IxTypography format="display">6</IxTypography></IxCol>
      <IxCol><IxTypography format="display">7</IxTypography></IxCol>
      <IxCol><IxTypography format="display">8</IxTypography></IxCol>
      <IxCol><IxTypography format="display">9</IxTypography></IxCol>
      <IxCol><IxTypography format="display">10</IxTypography></IxCol>
      <IxCol><IxTypography format="display">11</IxTypography></IxCol>
      <IxCol><IxTypography format="display">12</IxTypography></IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>

