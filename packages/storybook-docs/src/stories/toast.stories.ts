/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import type { ToastConfig } from '@siemens/ix';
import { toast } from '@siemens/ix';

type Element = ToastConfig;

const toastTypes: NonNullable<ToastConfig['type']>[] = [
  'danger',
  'warning',
  'caution',
  'information',
  'critical',
  'success',
  'error',
];

const meta = {
  title: 'Example/Toast',
  tags: [],
  render: (args) => {
    function showToast() {
      toast(args);
    }

    const triggerToast = document.createElement('ix-button');
    triggerToast.innerText = 'Show Toast';
    triggerToast.addEventListener('click', showToast);

    setTimeout(showToast, 500);
    return triggerToast;
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: toastTypes,
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=6396-139860&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    title: 'Default Toast',
    message: 'This is a default toast message.',
    type: 'information',
    autoClose: true,
    autoCloseDelay: 5000,
  },
};

export const Danger: Story = {
  args: {
    ...Default.args,
    title: 'Danger Toast',
    message: 'This is a danger toast message.',
    type: 'danger',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    title: 'Warning Toast',
    message: 'This is a warning toast message.',
    type: 'warning',
  },
};

export const Caution: Story = {
  args: {
    ...Default.args,
    title: 'Caution Toast',
    message: 'This is a caution toast message.',
    type: 'caution',
  },
};

export const Critical: Story = {
  args: {
    ...Default.args,
    title: 'Critical Toast',
    message: 'This is a critical toast message.',
    type: 'critical',
  },
};
