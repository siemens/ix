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
import { h, type VNode } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxChatUserMessage;

function createAction(label: string, icon: string) {
  return (
    <ix-icon-button
      aria-label={label}
      icon={icon}
      size="16"
      slot="actions"
      variant="subtle-tertiary"
    ></ix-icon-button>
  );
}

function createAttachment(
  fileName: string,
  previewSupported = false,
  slot = 'attachments'
) {
  return (
    <ix-chat-prompt-attachment
      fileName={fileName}
      hideRemoveButton
      previewSupported={previewSupported}
      slot={slot}
      variant="sent"
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

function createAttachmentDropdownItem(fileName: string) {
  return (
    <ix-dropdown-item
      icon={getAttachmentIcon(fileName)}
      label={fileName}
      slot="attachment-overflow"
    ></ix-dropdown-item>
  );
}

function renderChatUserMessage(args: Partial<Element>, children: VNode[] = []) {
  return <ix-chat-user-message {...args}>{children}</ix-chat-user-message>;
}

const meta = {
  title: 'Example/Chat User Message',
  tags: [],
  render: stencil((args) => renderChatUserMessage(args)),
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
  render: stencil((args) =>
    renderChatUserMessage(args, [
      createAction('Copy message', iconCopy),
      createAction('Edit message', iconPen),
      createAction('Show more actions', iconMoreMenu),
    ])
  ),
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
  render: stencil((args) =>
    renderChatUserMessage(args, [
      createAttachment('file_01.pdf', true),
      createAttachment('file_02.csv'),
    ])
  ),
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
  render: stencil((args) =>
    renderChatUserMessage(
      args,
      [
        'File_01.jpg',
        'File_02.jpg',
        'File_03.jpg',
        'File_04.txt',
        'File_05.txt',
        'File_06.pdf',
        'File_07.pdf',
      ].map((fileName) => createAttachmentDropdownItem(fileName))
    )
  ),
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
