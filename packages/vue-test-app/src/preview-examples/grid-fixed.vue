<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxCol, IxGrid, IxRow } from '@siemens/ix-react';
// Example styling for documentation
import './grid.css';
</script>

<template>
  <h5>fixed: sm</h5>
  <IxGrid fixed="fixed-sm">
    <IxRow>
      <IxCol>1</IxCol>
      <IxCol>2</IxCol>
      <IxCol>3</IxCol>
      <IxCol>4</IxCol>
      <IxCol>5</IxCol>
      <IxCol>6</IxCol>
    </IxRow>
  </IxGrid>

  <h5>fixed</h5>
  <IxGrid fixed>
    <IxRow>
      <IxCol>1</IxCol>
      <IxCol>2</IxCol>
      <IxCol>3</IxCol>
      <IxCol>4</IxCol>
      <IxCol>5</IxCol>
      <IxCol>6</IxCol>
    </IxRow>
  </IxGrid>

  <h5>fixed: md</h5>
  <IxGrid fixed="fixed-md">
    <IxRow>
      <IxCol>1</IxCol>
      <IxCol>2</IxCol>
      <IxCol>3</IxCol>
      <IxCol>4</IxCol>
      <IxCol>5</IxCol>
      <IxCol>6</IxCol>
    </IxRow>
  </IxGrid>

  <h5>fixed: lg</h5>
  <IxGrid fixed="fixed-lg">
    <IxRow>
      <IxCol>1</IxCol>
      <IxCol>2</IxCol>
      <IxCol>3</IxCol>
      <IxCol>4</IxCol>
      <IxCol>5</IxCol>
      <IxCol>6</IxCol>
    </IxRow>
  </IxGrid>
</template>

