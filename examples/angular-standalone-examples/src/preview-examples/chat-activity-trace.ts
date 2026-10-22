/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxChat,
  IxChatActivityTrace,
  IxChatAiMessage,
  IxChatTraceItem,
  IxChatTraceItemSection,
  IxPill,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCogwheel,
  iconDocument,
  iconSearch,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './chat-activity-trace.html',
  imports: [
    IxChat,
    IxChatActivityTrace,
    IxChatAiMessage,
    IxChatTraceItem,
    IxChatTraceItemSection,
    IxPill,
  ],
})
export default class ChatActivityTrace {
  expanded = true;

  constructor() {
    addIcons({
      iconCogwheel,
      iconDocument,
      iconSearch,
    });
  }
}
