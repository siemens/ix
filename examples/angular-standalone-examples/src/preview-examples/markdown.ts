/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import type { MarkdownAction } from '@siemens/ix';
import {
  IxChat,
  IxChatAiMessage,
  IxMarkdown,
} from '@siemens/ix-angular/standalone';

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

@Component({
  selector: 'app-example',
  imports: [IxChat, IxChatAiMessage, IxMarkdown],
  templateUrl: './markdown.html',
})
export default class Markdown {
  markdown = markdown;

  onActionClick(event: CustomEvent<MarkdownAction>) {
    console.log('Markdown action', event.detail);
  }
}
