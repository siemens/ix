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
        <IxPill variant="primary" :icon="iconInfo">Primary</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="primary" outline :icon="iconInfo">Primary</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="alarm" :icon="iconInfo">Alarm</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="alarm" outline :icon="iconInfo">Alarm</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="critical" :icon="iconInfo">Critical</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="critical" outline :icon="iconInfo">Critical</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="warning" :icon="iconInfo">Warning</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="warning" outline :icon="iconInfo">Warning</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="info" :icon="iconInfo">Info</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="info" outline :icon="iconInfo">Info</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="neutral" :icon="iconInfo">Neutral</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="neutral" outline :icon="iconInfo">Neutral</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="success" :icon="iconInfo">Success</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="success" outline :icon="iconInfo">Success</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill
          variant="custom"
          pill-color="var(--theme-color-inv-std-text)"
          background="var(--theme-color-dynamic)"
          :icon="iconInfo"
        >
          Custom
        </IxPill>
      </IxCol>
      <IxCol>
        <IxPill
          variant="custom"
          outline
          pill-color="var(--theme-color-dynamic)"
          background="var(--theme-color-dynamic)"
          :icon="iconInfo"
        >
          Custom
        </IxPill>
      </IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>
