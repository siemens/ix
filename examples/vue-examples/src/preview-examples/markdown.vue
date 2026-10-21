<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import type { MarkdownAction } from '@siemens/ix';
import { IxChat, IxChatAiMessage, IxMarkdown } from '@siemens/ix-vue';

const markdown = [
  '## Maintenance summary',
  '',
  'Pump P-102 shows **elevated vibration** since the last service.',
  '',
  '- [x] Collect sensor data',
  '- [ ] Schedule the maintenance window',
  '',
  '| Asset | Status | Vibration (mm/s) |',
  '| :---- | :----- | ---------------: |',
  '| P-102 | Warning | 7.4 |',
  '| P-103 | Normal | 2.1 |',
  '',
  '```ts [check.ts]',
  'const limit = 6.5;',
  'export const isCritical = (value: number) => value > limit;',
  '```',
  '',
  ':::callout{type=warning heading="Heads up"}',
  'Vibration above 6.5 mm/s requires an inspection within 24 hours.',
  ':::',
  '',
  ':button[Create work order]{action=create-order}',
].join('\n');

const onActionClick = (event: CustomEvent<MarkdownAction>) => {
  console.log('Markdown action', event.detail);
};
</script>

<template>
  <IxChat class="chat-example__chat">
    <IxChatAiMessage>
      <IxMarkdown
        :markdown="markdown"
        @actionClick="onActionClick"
      ></IxMarkdown>
    </IxChatAiMessage>
  </IxChat>
</template>
