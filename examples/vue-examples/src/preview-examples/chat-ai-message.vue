<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxChat, IxChatAiMessage, IxChip, IxIconButton } from '@siemens/ix-vue';
import {
  iconCopy,
  iconGlobe,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
} from '@siemens/ix-icons/icons';
</script>

<template>
  <IxChat class="chat-example__chat">
    <IxChatAiMessage>
      <h3>Recommended maintenance actions</h3>
      <p>
        The compressor is operating within the expected range. Schedule the next
        inspection during the Friday service window and keep monitoring the
        vibration trend.
      </p>
      <ul>
        <li>Review the acknowledged alarms from the last shift.</li>
        <li>
          Confirm that spare parts are available before the service window.
        </li>
        <li>Share the summary with the maintenance lead.</li>
      </ul>
      <IxIconButton
        slot="actions"
        aria-label="Copy response"
        :icon="iconCopy"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Helpful response"
        :icon="iconThumbUp"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Not helpful response"
        :icon="iconThumbDown"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Regenerate response"
        :icon="iconRefresh"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxChip slot="sources" :icon="iconGlobe" outline variant="neutral">
        Sources
      </IxChip>
    </IxChatAiMessage>
  </IxChat>
</template>
