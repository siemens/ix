<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxChat,
  IxChatInput,
  IxChatAttachment,
  IxIconButton,
} from '@siemens/ix-vue';
import {
  iconImage,
  iconMicrophone,
  iconPdfDocument,
  iconPlus,
} from '@siemens/ix-icons/icons';
</script>

<template>
  <IxChat class="chat-example__chat">
    <IxChatInput
      slot="prompt"
      value="Check open alarms and suggest the next maintenance step."
      placeholder="Ask about asset status..."
      textarea-label="Service assistant prompt"
      :max-length="180"
      :character-limit="180"
    >
      <IxChatAttachment
        slot="attachments"
        file-name="shift_report.pdf"
        :icon="iconPdfDocument"
      ></IxChatAttachment>
      <IxIconButton
        slot="start"
        aria-label="Attach file"
        :icon="iconPlus"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="end"
        aria-label="Add image"
        :icon="iconImage"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="end"
        aria-label="Record voice input"
        :icon="iconMicrophone"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
    </IxChatInput>
  </IxChat>
</template>
