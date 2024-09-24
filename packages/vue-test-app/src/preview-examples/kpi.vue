<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxKpi } from '@siemens/ix-vue';
</script>

<style scoped src="./kpi.css"></style>

<template>
  <div class="kpi">
    <IxKpi label="Motor speed" value="Nominal"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" unit="rpm"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" state="alarm"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" state="warning"></IxKpi>

    <IxKpi label="Motor speed" value="Nominal" orientation="vertical"></IxKpi>
    <IxKpi
      label="Motor speed"
      value="122.6"
      unit="rpm"
      state="alarm"
      orientation="vertical"
    ></IxKpi>
  </div>
</template>
