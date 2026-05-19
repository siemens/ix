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
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxChatShell;

function createShell(args: Partial<Element>) {
  const container = genericRender('ix-chat-shell', args);
  const shell = container.querySelector(
    'ix-chat-shell'
  ) as HTMLIxChatShellElement;

  shell.style.height = '40rem';

  return { container, shell };
}

function createIconButton(label: string, icon: string, slot?: string) {
  const action = document.createElement('ix-icon-button');
  action.icon = icon;
  action.size = '16';
  action.variant = 'subtle-tertiary';
  action.setAttribute('aria-label', label);

  if (slot) {
    action.slot = slot;
  }

  return action;
}

function appendAiMessageContent(
  message: HTMLIxChatAiMessageElement,
  summary = true
) {
  const title = document.createElement('h3');
  title.textContent = 'Text block example';

  const content = document.createElement('p');
  content.textContent =
    'Effective asset performance management improves uptime, reduces maintenance costs, and ensures long-term equipment health.';

  message.append(title, content);

  if (summary) {
    const summaryContent = document.createElement('p');
    summaryContent.textContent = 'Summary';
    message.append(summaryContent);
  }
}

function createAiMessage({
  actions = false,
  sources = false,
}: { actions?: boolean; sources?: boolean } = {}) {
  const message = document.createElement('ix-chat-ai-message');

  appendAiMessageContent(message);

  if (actions) {
    message.append(
      createIconButton('Copy message', iconCopy, 'actions'),
      createIconButton('Helpful response', iconThumbUp, 'actions'),
      createIconButton('Not helpful response', iconThumbDown, 'actions'),
      createIconButton('Regenerate response', iconRefresh, 'actions')
    );
  }

  if (sources) {
    message.append(createSources());
  }

  return message;
}

function createSources() {
  const sources = document.createElement('ix-pill');
  sources.slot = 'sources';
  sources.icon = iconGlobe;
  sources.outline = true;
  sources.variant = 'neutral';
  sources.textContent = 'Sources';
  sources.setAttribute('aria-label', 'Show sources');
  return sources;
}

function createUserMessage(
  message: string,
  {
    actions = false,
    attachments = false,
    overflow = false,
  }: { actions?: boolean; attachments?: boolean; overflow?: boolean } = {}
) {
  const userMessage = document.createElement('ix-chat-user-message');
  userMessage.message = message;

  if (actions) {
    userMessage.showActions = true;
    userMessage.append(
      createIconButton('Copy message', iconCopy, 'actions'),
      createIconButton('Edit message', iconPen, 'actions'),
      createIconButton('Show more actions', iconMoreMenu, 'actions')
    );
  }

  if (attachments) {
    userMessage.append(
      createSentAttachment('equipment_status.pdf', true),
      createSentAttachment('maintenance_notes.csv')
    );
  }

  if (overflow) {
    userMessage.attachmentCount = 5;
    [
      'File_01.jpg',
      'File_02.jpg',
      'File_03.txt',
      'File_04.pdf',
      'File_05.pdf',
    ].forEach((fileName) => {
      userMessage.append(createAttachmentDropdownItem(fileName));
    });
  }

  return userMessage;
}

function createSentAttachment(fileName: string, previewSupported = false) {
  const attachment = document.createElement('ix-chat-prompt-attachment');
  attachment.slot = 'attachments';
  attachment.fileName = fileName;
  attachment.hideRemoveButton = true;
  attachment.previewSupported = previewSupported;
  attachment.variant = 'sent';
  return attachment;
}

function createPromptAttachment(
  fileName: string,
  status?: 'loading' | 'failed'
) {
  const attachment = document.createElement('ix-chat-prompt-attachment');
  attachment.slot = 'attachments';
  attachment.fileName = fileName;

  if (status) {
    attachment.status = status;
  }

  return attachment;
}

function createAttachmentDropdownItem(
  fileName: string,
  slot = 'attachment-overflow'
) {
  const item = document.createElement('ix-dropdown-item');
  item.slot = slot;
  item.label = fileName;

  if (fileName.endsWith('.pdf')) {
    item.icon = iconPdfDocument;
  } else if (fileName.endsWith('.txt')) {
    item.icon = iconTxtDocument;
  } else {
    item.icon = iconImage;
  }

  return item;
}

function createPromptInput({
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
  const promptInput = document.createElement('ix-prompt-input');
  promptInput.slot = 'prompt';
  promptInput.placeholder = 'Enter a command, question or topic...';

  if (characterLimit) {
    promptInput.characterLimit = 120;
    promptInput.characterLimitMode = 'soft';
    promptInput.value = 'Summarize the uploaded maintenance reports';
  }

  if (scrollableAttachments) {
    promptInput.attachmentLayout = 'scroll';
  }

  if (followUp) {
    promptInput.append(
      createIconButton('Refresh follow-up prompts', iconRefresh, 'follow-up'),
      createFollowUpPrompt('What are the risks if this insight is ignored?'),
      createFollowUpPrompt(
        'Show related insights from similar customer events.'
      ),
      createFollowUpPrompt(
        'Summarize this insight in 2 bullet points for presentation.'
      )
    );
  }

  if (attachments) {
    promptInput.append(
      createPromptAttachment('equipment_status.pdf'),
      createPromptAttachment('alarm_export.txt'),
      createPromptAttachment('uploading_report.pdf', 'loading'),
      createPromptAttachment('failed_upload.csv', 'failed')
    );

    if (!scrollableAttachments) {
      promptInput.attachmentOverflowCount = 3;
      promptInput.append(
        createAttachmentDropdownItem('maintenance_notes_01.txt'),
        createAttachmentDropdownItem('maintenance_notes_02.txt'),
        createAttachmentDropdownItem('maintenance_notes_03.pdf')
      );
    }
  }

  if (customActions) {
    promptInput.append(
      createIconButton('Attach file', iconAttach, 'start'),
      createIconButton('Record voice input', iconMicrophone, 'end')
    );
  }

  return promptInput;
}

function createFollowUpPrompt(label: string) {
  const prompt = document.createElement('ix-button');
  prompt.slot = 'follow-up';
  prompt.variant = 'secondary';
  prompt.textContent = label;
  return prompt;
}

function renderChatShell(args: Partial<Element>) {
  const { container, shell } = createShell(args);

  shell.append(
    createUserMessage(
      'Summarize the detailed discussion held with the customer'
    ),
    createAiMessage(),
    createPromptInput()
  );

  return container;
}

const meta = {
  title: 'Example/Chat Shell',
  tags: [],
  render: (args) => renderChatShell(args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chat-shell'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {};

export const WithAiActionsAndSources: Story = {
  render: (args) => {
    const { container, shell } = createShell(args);

    shell.append(
      createUserMessage('Summarize the current asset performance status'),
      createAiMessage({ actions: true, sources: true }),
      createPromptInput()
    );

    return container;
  },
};

export const WithUserMessageAttachments: Story = {
  render: (args) => {
    const { container, shell } = createShell(args);

    shell.append(
      createUserMessage('Analyze these files and highlight the key risks', {
        actions: true,
        attachments: true,
        overflow: true,
      }),
      createAiMessage({ actions: true }),
      createPromptInput()
    );

    return container;
  },
};

export const WithPromptAttachments: Story = {
  render: (args) => {
    const { container, shell } = createShell(args);

    shell.append(
      createUserMessage('Compare the uploaded reports'),
      createAiMessage({ sources: true }),
      createPromptInput({
        attachments: true,
        characterLimit: true,
        customActions: true,
        followUp: true,
      })
    );

    return container;
  },
};

export const WithScrollablePromptAttachments: Story = {
  render: (args) => {
    const { container, shell } = createShell(args);

    shell.append(
      createUserMessage('Create a summary from all uploaded files'),
      createAiMessage(),
      createPromptInput({
        attachments: true,
        customActions: true,
        scrollableAttachments: true,
      })
    );

    return container;
  },
};

export const FullFeaturedConversation: Story = {
  render: (args) => {
    const { container, shell } = createShell(args);

    shell.append(
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
      createPromptInput({
        attachments: true,
        characterLimit: true,
        customActions: true,
      })
    );

    return container;
  },
};
