/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/actions';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxChatPromptAttachment;

function renderAttachment(args: Partial<Element>) {
  return (
    <ix-chat-prompt-attachment
      {...args}
      onAttachmentClick={() => action('attachmentClick')()}
      onRemoveClick={() => action('removeClick')()}
    ></ix-chat-prompt-attachment>
  );
}

const meta = {
  title: 'Example/Chat Prompt Attachment',
  tags: [],
  render: stencil((args) => renderAttachment(args)),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>(
    'ix-chat-prompt-attachment'
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11806-125191&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    fileName: 'file_01.txt',
  },
};

export const PreviewSupported: Story = {
  args: {
    fileName: 'file_01.pdf',
    previewSupported: true,
  },
};

export const Sent: Story = {
  args: {
    fileName: 'file_01.pdf',
    hideRemoveButton: true,
    previewSupported: true,
    variant: 'sent',
  },
};

export const Loading: Story = {
  args: {
    fileName: 'file_01.pdf',
    status: 'loading',
  },
};

export const Failed: Story = {
  args: {
    fileName: 'file_01.pdf',
    status: 'failed',
  },
};

export const LongFileName: Story = {
  args: {
    fileName: 'meeting_notes_summary_02_with_a_very_long_name.txt',
  },
};
