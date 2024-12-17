/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Maskito, maskitoInitialCalibrationPlugin } from '@maskito/core';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import type { Components } from '@siemens/ix/components';
import type { Meta, StoryObj } from '@storybook/web-components';

type Element = Components.IxInput & {
  maskito?: Maskito;
};

const meta = {
  title: 'Example/Input/Mask',
  tags: [],
  render: (args, ctx) => {
    const input = document.createElement('ix-input');
    input.value = args.value;

    const maskito = new Maskito(input as any, {
      ...maskitoNumberOptionsGenerator({
        decimalSeparator: ',',
        thousandSeparator: '.',
        precision: 2,
      }),
      plugins: [maskitoInitialCalibrationPlugin()],
    });

    ctx.args.maskito = maskito;

    return input;
  },
  beforeEach: (ctx) => {
    return () => {
      ctx.args.maskito?.destroy();
    };
  },
  args: {
    value: '10000',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Separators: Story = {
  args: {
    value: '1000001',
  },
};

export const Precision: Story = {
  render: (args, ctx) => {
    const input = document.createElement('ix-input');
    input.value = args.value;

    const maskito = new Maskito(input as any, {
      ...maskitoNumberOptionsGenerator({
        precision: 2,
        min: 0,
      }),
      plugins: [maskitoInitialCalibrationPlugin()],
    });

    ctx.args.maskito = maskito;

    return input;
  },
  args: {
    value: '123.456',
  },
};
