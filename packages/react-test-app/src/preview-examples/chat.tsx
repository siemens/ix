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
  IxChatAiMessage,
  IxChatInput,
  IxChatPromptAttachment,
  IxChatUserMessage,
  IxChip,
  IxIconButton,
} from '@siemens/ix-react';
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

export default () => {
  return (
    <IxChat className="chat-example__chat">
      <IxChatUserMessage message="Summarize the asset status and include the attached maintenance files.">
        <IxChatPromptAttachment
          slot="attachments"
          fileName="equipment_status.pdf"
          icon={iconPdfDocument}
          hideRemoveButton
        ></IxChatPromptAttachment>
        <IxChatPromptAttachment
          slot="attachments"
          fileName="maintenance_notes.txt"
          icon={iconTxtDocument}
          hideRemoveButton
        ></IxChatPromptAttachment>
        <IxIconButton
          slot="actions"
          aria-label="Copy message"
          icon={iconCopy}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="actions"
          aria-label="Edit message"
          icon={iconPen}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="actions"
          aria-label="Show more actions"
          icon={iconMoreMenu}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
      </IxChatUserMessage>

      <IxChatAiMessage>
        <h3>Asset performance summary</h3>
        <p>
          The compressor train is operating inside the expected range. Vibration
          increased slightly after the last shift change, but all values remain
          below the warning threshold.
        </p>
        <ul className="message-list">
          <li>Temperature trend is stable over the last 24 hours.</li>
          <li>Two alarms were acknowledged by the operator.</li>
          <li>Next service window is scheduled for Friday.</li>
        </ul>
        <IxIconButton
          slot="actions"
          aria-label="Copy response"
          icon={iconCopy}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="actions"
          aria-label="Helpful response"
          icon={iconThumbUp}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="actions"
          aria-label="Not helpful response"
          icon={iconThumbDown}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="actions"
          aria-label="Regenerate response"
          icon={iconRefresh}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxChip slot="sources" icon={iconGlobe} outline variant="neutral">
          Sources
        </IxChip>
      </IxChatAiMessage>

      <IxChatUserMessage message="Compare the current report with additional customer feedback.">
        <IxChatPromptAttachment
          slot="attachments"
          fileName="customer_feedback.pdf"
          icon={iconPdfDocument}
          hideRemoveButton
        ></IxChatPromptAttachment>
      </IxChatUserMessage>

      <IxChatAiMessage>
        <p>
          Customer feedback confirms the same maintenance priorities. The next
          step is to validate spare-part availability and confirm the planned
          downtime window.
        </p>
      </IxChatAiMessage>

      <IxChatInput
        slot="prompt"
        value="Create a concise follow-up plan for the service team."
      ></IxChatInput>
    </IxChat>
  );
};
