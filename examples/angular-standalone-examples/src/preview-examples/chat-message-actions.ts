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
  IxChatAiMessage,
  IxChatInput,
  IxChatPromptSuggestion,
  IxChatUserMessage,
  IxDropdown,
  IxDropdownItem,
  IxIconButton,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconContextMenu,
  iconCopy,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './chat-message-actions.html',
  imports: [
    IxChat,
    IxChatAiMessage,
    IxChatInput,
    IxChatPromptSuggestion,
    IxChatUserMessage,
    IxDropdown,
    IxDropdownItem,
    IxIconButton,
  ],
})
export default class ChatMessageActions {
  constructor() {
    addIcons({
      iconContextMenu,
      iconCopy,
      iconRefresh,
      iconThumbDown,
      iconThumbUp,
    });
  }
}
