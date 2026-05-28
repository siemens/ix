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
  IxChatPromptAttachment,
  IxChatUserMessage,
  IxChip,
  IxIconButton,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCopy,
  iconGlobe,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './chat.html',
  imports: [
    IxChat,
    IxChatAiMessage,
    IxChatInput,
    IxChatPromptAttachment,
    IxChatUserMessage,
    IxChip,
    IxIconButton,
  ],
})
export default class Chat {
  constructor() {
    addIcons({
      iconCopy,
      iconGlobe,
      iconMoreMenu,
      iconPdfDocument,
      iconPen,
      iconRefresh,
      iconThumbDown,
      iconThumbUp,
      iconTxtDocument,
    });
  }
}
