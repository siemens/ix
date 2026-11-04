/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import type { Components } from '@siemens/ix/components';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxFlipTile & {
  footerSlot: string;
};

const meta = {
  title: 'Example/FlipTile',
  tags: [],
  render: (args) => {
    const container = genericRender('ix-flip-tile', args, ['footerSlot']);

    const flipTile = container.querySelector(
      'ix-flip-tile'
    ) as HTMLIxFlipTileElement;

    const content1 = document.createElement('ix-flip-tile-content');
    content1.textContent = ' Page 1 ';
    flipTile.appendChild(content1);

    const content2 = document.createElement('ix-flip-tile-content');
    content2.textContent = ' Page 2 ';
    flipTile.appendChild(content2);

    const content3 = document.createElement('ix-flip-tile-content');
    content3.textContent = ' Page 3 ';
    flipTile.appendChild(content3);

    if (args.footerSlot) {
      const footer = document.createElement('div');
      footer.slot = 'footer';
      footer.textContent = args.footerSlot;
      flipTile.appendChild(footer);
    }

    return container;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>(
    'ix-flip-tile',
    {
      index: {
        control: {
          type: 'number',
          min: 0,
          max: 2,
        },
      },
    },
    true
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=602-8519&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    index: 1,
    variant: 'filled',
  },
};

export const Footer: Story = {
  args: {
    index: 1,
    variant: 'filled',
    footerSlot: 'Test',
  },
};

export const Outline: Story = {
  args: {
    index: 1,
    variant: 'outline',
    footerSlot: 'Test',
  },
};

export const Accent: Story = {
  args: {
    index: 1,
    variant: 'accent',
    footerSlot: 'Test',
  },
};

export const Neutral: Story = {
  args: {
    index: 1,
    variant: 'neutral',
    footerSlot: 'Test',
  },
};

export const Information: Story = {
  args: {
    index: 1,
    variant: 'information',
    footerSlot: 'Test',
  },
};

export const Success: Story = {
  args: {
    index: 1,
    variant: 'success',
    footerSlot: 'Test',
  },
};

export const Caution: Story = {
  args: {
    index: 1,
    variant: 'caution',
    footerSlot: 'Test',
  },
};

export const Warning: Story = {
  args: {
    index: 1,
    variant: 'warning',
    footerSlot: 'Test',
  },
};

export const Danger: Story = {
  args: {
    index: 1,
    variant: 'danger',
    footerSlot: 'Test',
  },
};

export const Critical: Story = {
  args: {
    index: 1,
    variant: 'critical',
    footerSlot: 'Test',
  },
};
