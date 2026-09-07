/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import type { Components } from '@siemens/ix/components';
import { h } from '@stencil/core';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxUpload;

const meta = {
  title: 'Example/Upload',
  tags: [],
  render: stencil((args) => <ix-upload {...args}></ix-upload>),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-upload'),
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    accept: '.csv,.pdf',
    i18nUploadFile: 'Upload a file',
  },
};
