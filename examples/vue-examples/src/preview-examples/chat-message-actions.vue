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
  IxChatAiMessage,
  IxChatInput,
  IxChatPromptSuggestion,
  IxChatUserMessage,
  IxDropdown,
  IxDropdownItem,
  IxIconButton,
} from '@siemens/ix-vue';
import {
  iconContextMenu,
  iconCopy,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
} from '@siemens/ix-icons/icons';
</script>

<template>
  <IxChat class="chat-example__chat">
    <IxChatUserMessage message="Which assets need maintenance first?">
      <IxIconButton
        slot="actions"
        aria-label="Copy"
        :icon="iconCopy"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
    </IxChatUserMessage>

    <IxChatAiMessage>
      <p>
        Compressor C-12 should be serviced first. Its vibration increased over
        the last week, and the next service window is on Friday.
      </p>
      <IxIconButton
        slot="actions"
        aria-label="Copy"
        :icon="iconCopy"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Regenerate"
        :icon="iconRefresh"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Good response"
        :icon="iconThumbUp"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Bad response"
        :icon="iconThumbDown"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        id="moreActionsTrigger"
        slot="actions"
        aria-label="More actions"
        :icon="iconContextMenu"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
    </IxChatAiMessage>

    <IxChatInput slot="prompt">
      <IxChatPromptSuggestion slot="follow-up">
        Show the vibration trend of C-12
      </IxChatPromptSuggestion>
      <IxChatPromptSuggestion slot="follow-up">
        Create a work order for Friday
      </IxChatPromptSuggestion>
    </IxChatInput>
  </IxChat>

  <IxDropdown trigger="moreActionsTrigger">
    <IxDropdownItem label="Share"></IxDropdownItem>
    <IxDropdownItem label="Report"></IxDropdownItem>
  </IxDropdown>
</template>
