<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxIconButton } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      variant="primary"
    ></IxIconButton>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      variant="secondary"
    ></IxIconButton>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      variant="danger"
    ></IxIconButton>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      outline
    ></IxIconButton>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      ghost
    ></IxIconButton>
  </div>

  <div>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      oval
      variant="primary"
    ></IxIconButton>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      oval
      variant="secondary"
    ></IxIconButton>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      oval
      variant="danger"
    ></IxIconButton>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      oval
      outline
    ></IxIconButton>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      oval
      ghost
    ></IxIconButton>
  </div>

  <div>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      size="12"
    ></IxIconButton>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      size="16"
    ></IxIconButton>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      size="24"
    ></IxIconButton>
    <IxIconButton
      :style="{ margin: '0.25rem' }"
      icon="info"
      size="32"
    ></IxIconButton>
  </div>
</template>
