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
  IxChatInput,
  IxChatAttachment,
  IxIconButton,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconAttach,
  iconImage,
  iconMicrophone,
  iconPdfDocument,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './chat-input.html',
  imports: [IxChat, IxChatAttachment, IxChatInput, IxIconButton],
})
export default class ChatInput {
  constructor() {
    addIcons({
      iconAttach,
      iconImage,
      iconMicrophone,
      iconPdfDocument,
    });
  }
}
