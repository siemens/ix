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
    <IxMessageBar :persistent type="alarm">Message text</IxMessageBar>
    <IxMessageBar :persistent>Message text</IxMessageBar>
    <IxMessageBar :persistent>
      <div class="message-bar-alarm">
        Message text
        <ix-button>Action</ix-button>
      </div>
    </IxMessageBar>
  </div>
</template>
