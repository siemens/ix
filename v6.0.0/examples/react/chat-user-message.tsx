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
  IxChatAttachment,
  IxChatUserMessage,
  IxIconButton,
} from '@siemens/ix-react';
import {
  iconCopy,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxChat className="chat-example__chat">
      <IxChatUserMessage message="Summarize the attached shift report.">
        <IxChatAttachment
          slot="attachments"
          fileName="shift_report.pdf"
          icon={iconPdfDocument}
          hideRemoveButton
        ></IxChatAttachment>
        <IxChatAttachment
          slot="attachments"
          fileName="operator_notes.txt"
          icon={iconTxtDocument}
          hideRemoveButton
        ></IxChatAttachment>
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
    </IxChat>
  );
};
