/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  iconCopy,
  iconImage,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxChatUserMessage;

function createAction(label: string, icon: string) {
  const action = document.createElement('ix-icon-button');
  action.slot = 'actions';
  action.icon = icon;
  action.size = '16';
  action.variant = 'subtle-tertiary';
  action.setAttribute('aria-label', label);
  return action;
}

function createAttachment(
  fileName: string,
  previewSupported = false,
  slot = 'attachments'
) {
  const attachment = document.createElement('ix-chat-prompt-attachment');
  attachment.slot = slot;
  attachment.fileName = fileName;
  attachment.hideRemoveButton = true;
  attachment.previewSupported = previewSupported;
  attachment.variant = 'sent';
  return attachment;
}

function createAttachmentDropdownItem(fileName: string) {
  const item = document.createElement('ix-dropdown-item');
  item.slot = 'attachment-overflow';
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

function renderChatUserMessage(args: Partial<Element>) {
  return genericRender('ix-chat-user-message', args);
}

const meta = {
  title: 'Example/Chat User Message',
  tags: [],
  render: (args) => renderChatUserMessage(args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chat-user-message'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-149729&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    message: 'Summarize the detailed discussion held with the customer',
  },
};

export const WithActions: Story = {
  render: (args) => {
    const container = renderChatUserMessage(args);
    const message = container.querySelector(
      'ix-chat-user-message'
    ) as HTMLIxChatUserMessageElement;

    message.append(
      createAction('Copy message', iconCopy),
      createAction('Edit message', iconPen),
      createAction('Show more actions', iconMoreMenu)
    );

    return container;
  },
  args: {
    message: 'Summarize the detailed discussion held with the customer',
    showActions: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-151011&m=dev',
    },
  },
};

export const LongMessage: Story = {
  args: {
    message:
      'Summarize the detailed discussion held with the customer and highlight the most important next steps for the service team.',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-151262&m=dev',
    },
  },
};

export const WithAttachments: Story = {
  render: (args) => {
    const container = renderChatUserMessage(args);
    const message = container.querySelector(
      'ix-chat-user-message'
    ) as HTMLIxChatUserMessageElement;

    message.append(
      createAttachment('file_01.pdf', true),
      createAttachment('file_02.csv')
    );

    return container;
  },
  args: {
    message: 'Summarize the detailed discussion held with the customer',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-151929&m=dev',
    },
  },
};

export const WithAttachmentOverflow: Story = {
  render: (args) => {
    const container = renderChatUserMessage(args);
    const message = container.querySelector(
      'ix-chat-user-message'
    ) as HTMLIxChatUserMessageElement;

    [
      'File_01.jpg',
      'File_02.jpg',
      'File_03.jpg',
      'File_04.txt',
      'File_05.txt',
      'File_06.pdf',
      'File_07.pdf',
    ].forEach((fileName) => {
      message.append(createAttachmentDropdownItem(fileName));
    });

    return container;
  },
  args: {
    attachmentCount: 7,
    message: 'Summarize the detailed discussion held with the customer',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-151929&m=dev',
    },
  },
};
