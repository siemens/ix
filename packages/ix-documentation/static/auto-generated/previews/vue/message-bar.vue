<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxMessageBar } from '@siemens/ix-vue';
</script>

<style scoped src="./message-bar.css"></style>

<template>
  <div class="message-bar">
    <IxMessageBar>Message text</IxMessageBar>
    <IxMessageBar type="warning">Message text</IxMessageBar>
    <IxMessageBar type="danger">
      <div className="d-flex align-items-center justify-content-between">
        Message text
        <IxButton>Action</IxButton>
      </div>
    </IxMessageBar>
  </div>
</template>
