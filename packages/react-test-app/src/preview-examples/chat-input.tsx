/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxChat,
  IxChatInput,
  IxChatPromptAttachment,
  IxIconButton,
} from '@siemens/ix-react';
import {
  iconAttach,
  iconImage,
  iconMicrophone,
  iconPdfDocument,
} from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxChat className="chat-example__chat">
      <IxChatInput
        slot="prompt"
        value="Check open alarms and suggest the next maintenance step."
        placeholder="Ask about asset status..."
        textareaLabel="Service assistant prompt"
        maxLength={180}
        characterLimit={180}
      >
        <IxChatPromptAttachment
          slot="attachments"
          fileName="shift_report.pdf"
          icon={iconPdfDocument}
        ></IxChatPromptAttachment>
        <IxIconButton
          slot="start"
          aria-label="Attach file"
          icon={iconAttach}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="end"
          aria-label="Add image"
          icon={iconImage}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="end"
          aria-label="Record voice input"
          icon={iconMicrophone}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
      </IxChatInput>
    </IxChat>
  );
};
