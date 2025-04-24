<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconInfo } from '@siemens/ix-icons/icons';
import { IxCol, IxLayoutGrid, IxPill, IxRow } from '@siemens/ix-vue';
</script>

<style scoped src="./pill-variants.css"></style>

<template>
  <IxLayoutGrid>
    <IxRow>
      <IxCol>
        <IxPill :icon="iconInfo"> Primary </IxPill>
      </IxCol>
      <IxCol>
        <IxPill :icon="iconInfo" outline> Primary </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="alarm" :icon="iconInfo"> Alarm </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="alarm" :icon="iconInfo" outline> Alarm </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="critical" :icon="iconInfo"> Critical </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="critical" :icon="iconInfo" outline> Critical </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="warning" :icon="iconInfo"> Warning </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="warning" :icon="iconInfo" outline> Warning </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="success" :icon="iconInfo"> Success </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="success" :icon="iconInfo" outline> Success </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="info" :icon="iconInfo"> Info </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="info" :icon="iconInfo" outline> Info </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="neutral" :icon="iconInfo"> Neutral </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="neutral" :icon="iconInfo" outline> Neutral </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill
          variant="custom"
          color="color-soft-text"
          background="purple"
          :icon="iconInfo"
        >
          Custom
        </IxPill>
      </IxCol>
      <IxCol>
        <IxPill
          variant="custom"
          color="color-soft-text"
          background="purple"
          :icon="iconInfo"
          outline
        >
          Custom
        </IxPill>
      </IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>
