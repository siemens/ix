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
    <IxMessageBar :dismissible="false">Message text</IxMessageBar>
    <IxMessageBar :dismissible="false" type="warning">Message text</IxMessageBar>
    <IxMessageBar :dismissible="false" type="danger">
      <div className="message-bar-danger">
        Message text
        <ix-button>Action</ix-button>
      </div>
    </IxMessageBar>
  </div>
</template>
