/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import type { ToastConfig } from '@siemens/ix';
import { toast } from '@siemens/ix';

type Element = ToastConfig;

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
    type: 'info',
    autoClose: true,
    autoCloseDelay: 5000,
  },
};
