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
  IxChatAttachment,
  IxChatUserMessage,
  IxIconButton,
} from '@siemens/ix-vue';
import {
  iconCopy,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';
</script>

<template>
  <IxChat class="chat-example__chat">
    <IxChatUserMessage message="Summarize the attached shift report.">
      <IxChatAttachment
        slot="attachments"
        file-name="shift_report.pdf"
        :icon="iconPdfDocument"
        hide-remove-button
      ></IxChatAttachment>
      <IxChatAttachment
        slot="attachments"
        file-name="operator_notes.txt"
        :icon="iconTxtDocument"
        hide-remove-button
      ></IxChatAttachment>
      <IxIconButton
        slot="actions"
        aria-label="Copy message"
        :icon="iconCopy"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Edit message"
        :icon="iconPen"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Show more actions"
        :icon="iconMoreMenu"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
    </IxChatUserMessage>
  </IxChat>
</template>
