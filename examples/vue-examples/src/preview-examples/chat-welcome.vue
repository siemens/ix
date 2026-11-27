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
  IxChatPromptSuggestion,
  IxChatUserMessage,
  IxChatWelcome,
} from '@siemens/ix-vue';
import { ref } from 'vue';

const suggestions = [
  'Summarize the open alarms',
  'Which assets need maintenance first?',
  'Draft a status update for the plant manager',
];

const messages = ref<string[]>([]);
</script>

<template>
  <IxChat class="chat-example__chat" style="height: 30rem">
    <IxChatWelcome slot="welcome" heading="How can I help you today?">
      <p>
        Ask about asset status, alarms or maintenance plans, or start with one
        of the suggestions below.
      </p>
      <IxChatPromptSuggestion
        v-for="suggestion in suggestions"
        :key="suggestion"
        slot="suggestions"
        @suggestionSelect="messages.push($event.detail)"
      >
        {{ suggestion }}
      </IxChatPromptSuggestion>
    </IxChatWelcome>
    <IxChatUserMessage
      v-for="(message, index) in messages"
      :key="index"
      :message="message"
    ></IxChatUserMessage>
    <IxChatInput slot="prompt"></IxChatInput>
  </IxChat>
</template>
