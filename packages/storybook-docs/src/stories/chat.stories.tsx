/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  iconAttach,
  iconCopy,
  iconGlobe,
  iconImage,
  iconMicrophone,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';
import type { Components } from '@siemens/ix/components';
import { h, type VNode } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxChat;
type IconButtonSize = '16' | '24' | '12';

function createIconButton(
  label: string,
  icon: string,
  slot?: string,
  size: IconButtonSize = '16'
) {
  return (
    <ix-icon-button
      aria-label={label}
      icon={icon}
      size={size}
      slot={slot}
      variant="subtle-tertiary"
    ></ix-icon-button>
  );
}

function createAiMessageContent(summary = true) {
  return [
    <h3>Text block example</h3>,
    <p>
      Effective asset performance management improves uptime, reduces
      maintenance costs, and ensures long-term equipment health.
    </p>,
    summary ? <p>Summary</p> : null,
  ];
}

function createAiMessage({
  actions = false,
  sources = false,
}: { actions?: boolean; sources?: boolean } = {}) {
  return (
    <ix-chat-ai-message>
      {createAiMessageContent()}
      {actions
        ? [
            createIconButton('Copy message', iconCopy, 'actions'),
            createIconButton('Helpful response', iconThumbUp, 'actions'),
            createIconButton('Not helpful response', iconThumbDown, 'actions'),
            createIconButton('Regenerate response', iconRefresh, 'actions'),
          ]
        : null}
      {sources ? createSources() : null}
    </ix-chat-ai-message>
  );
}

function createSources() {
  return (
    <ix-chip
      aria-label="Show sources"
      icon={iconGlobe}
      outline
      slot="sources"
      variant="neutral"
    >
      Sources
    </ix-chip>
  );
}

function createUserMessage(
  message: string,
  {
    actions = false,
    attachments = false,
    overflow = false,
  }: { actions?: boolean; attachments?: boolean; overflow?: boolean } = {}
) {
  return (
    <ix-chat-user-message
      attachmentCount={overflow ? 5 : undefined}
      message={message}
    >
      {actions
        ? [
            createIconButton('Copy message', iconCopy, 'actions'),
            createIconButton('Edit message', iconPen, 'actions'),
            createIconButton('Show more actions', iconMoreMenu, 'actions'),
          ]
        : null}
      {attachments
        ? [
            createSentAttachment('equipment_status.pdf', true),
            createSentAttachment('maintenance_notes.csv'),
          ]
        : null}
      {overflow
        ? [
            'File_01.jpg',
            'File_02.jpg',
            'File_03.txt',
            'File_04.pdf',
            'File_05.pdf',
          ].map((fileName) => createAttachmentDropdownItem(fileName))
        : null}
    </ix-chat-user-message>
  );
}

function createSentAttachment(fileName: string, previewSupported = false) {
  return (
    <ix-chat-prompt-attachment
      fileName={fileName}
      hideRemoveButton
      previewSupported={previewSupported}
      slot="attachments"
    ></ix-chat-prompt-attachment>
  );
}

function createPromptAttachment(
  fileName: string,
  status?: 'loading' | 'failed'
) {
  return (
    <ix-chat-prompt-attachment
      fileName={fileName}
      slot="attachments"
      status={status}
    ></ix-chat-prompt-attachment>
  );
}

function getAttachmentIcon(fileName: string) {
  if (fileName.endsWith('.pdf')) {
    return iconPdfDocument;
  }

  if (fileName.endsWith('.txt')) {
    return iconTxtDocument;
  }

  return iconImage;
}

function createAttachmentDropdownItem(
  fileName: string,
  slot = 'attachment-overflow'
) {
  return (
    <ix-dropdown-item
      icon={getAttachmentIcon(fileName)}
      label={fileName}
      slot={slot}
    ></ix-dropdown-item>
  );
}

function createChatInput({
  attachments = false,
  customActions = false,
  characterLimit = false,
  followUp = false,
  scrollableAttachments = false,
}: {
  attachments?: boolean;
  customActions?: boolean;
  characterLimit?: boolean;
  followUp?: boolean;
  scrollableAttachments?: boolean;
} = {}) {
  return (
    <ix-chat-input
      attachmentLayout={scrollableAttachments ? 'scroll' : undefined}
      attachmentOverflowCount={
        attachments && !scrollableAttachments ? 3 : undefined
      }
      characterLimit={characterLimit ? 120 : undefined}
      placeholder="Enter a command, question or topic..."
      slot="prompt"
      value={
        characterLimit
          ? 'Summarize the uploaded maintenance reports'
          : undefined
      }
    >
      {followUp
        ? [
            createIconButton(
              'Refresh follow-up prompts',
              iconRefresh,
              'follow-up',
              '24'
            ),
            createFollowUpPrompt(
              'What are the risks if this insight is ignored?'
            ),
            createFollowUpPrompt(
              'Show related insights from similar customer events.'
            ),
            createFollowUpPrompt(
              'Summarize this insight in 2 bullet points for presentation.'
            ),
          ]
        : null}
      {attachments
        ? [
            createPromptAttachment('equipment_status.pdf'),
            createPromptAttachment('alarm_export.txt'),
            createPromptAttachment('uploading_report.pdf', 'loading'),
            createPromptAttachment('failed_upload.csv', 'failed'),
            !scrollableAttachments
              ? [
                  createAttachmentDropdownItem('maintenance_notes_01.txt'),
                  createAttachmentDropdownItem('maintenance_notes_02.txt'),
                  createAttachmentDropdownItem('maintenance_notes_03.pdf'),
                ]
              : null,
          ]
        : null}
      {customActions
        ? [
            createIconButton('Attach file', iconAttach, 'start'),
            createIconButton('Record voice input', iconMicrophone, 'end', '24'),
          ]
        : null}
    </ix-chat-input>
  );
}

function createFollowUpPrompt(label: string) {
  return (
    <ix-button slot="follow-up" variant="secondary">
      {label}
    </ix-button>
  );
}

function createChat(args: Partial<Element>, children: VNode[]) {
  return (
    <ix-chat {...args} style={{ height: '40rem' }}>
      {children}
    </ix-chat>
  );
}

function renderChat(args: Partial<Element>) {
  return createChat(args, [
    createUserMessage(
      'Summarize the detailed discussion held with the customer'
    ),
    createAiMessage(),
    createChatInput(),
  ]);
}

const meta = {
  title: 'Example/Chat',
  tags: [],
  render: stencil((args) => renderChat(args)),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chat'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};

export const WithAiActionsAndSources: Story = {
  render: stencil((args) =>
    createChat(args, [
      createUserMessage('Summarize the current asset performance status'),
      createAiMessage({ actions: true, sources: true }),
      createChatInput(),
    ])
  ),
};

export const WithUserMessageAttachments: Story = {
  render: stencil((args) =>
    createChat(args, [
      createUserMessage('Analyze these files and highlight the key risks', {
        actions: true,
        attachments: true,
        overflow: true,
      }),
      createAiMessage({ actions: true }),
      createChatInput(),
    ])
  ),
};

export const WithPromptAttachments: Story = {
  render: stencil((args) =>
    createChat(args, [
      createUserMessage('Compare the uploaded reports'),
      createAiMessage({ sources: true }),
      createChatInput({
        attachments: true,
        characterLimit: true,
        customActions: true,
        followUp: true,
      }),
    ])
  ),
};

export const WithScrollablePromptAttachments: Story = {
  render: stencil((args) =>
    createChat(args, [
      createUserMessage('Create a summary from all uploaded files'),
      createAiMessage(),
      createChatInput({
        attachments: true,
        customActions: true,
        scrollableAttachments: true,
      }),
    ])
  ),
};

export const FullFeaturedConversation: Story = {
  render: stencil((args) =>
    createChat(args, [
      createUserMessage(
        'Summarize the detailed discussion held with the customer',
        {
          actions: true,
        }
      ),
      createAiMessage({ actions: true, sources: true }),
      createUserMessage(
        'Use the attached service reports as additional context',
        {
          attachments: true,
          overflow: true,
        }
      ),
      createAiMessage({ actions: true, sources: true }),
      createChatInput({
        attachments: true,
        characterLimit: true,
        customActions: true,
      }),
    ])
  ),
};
