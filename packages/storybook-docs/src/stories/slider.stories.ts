/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import {
  genericValidationRender,
  IxValidationComponent,
  makeArgTypes,
} from './utils/generic-render';

type Element = IxValidationComponent<Components.IxSlider>;

const meta = {
  title: 'Example/Slider',
  tags: [],
  render: (args) => {
    const container = genericValidationRender('ix-slider', args);

    const slider = container.querySelector('ix-slider') as HTMLIxSliderElement;
    slider.marker = args.marker;

    return container;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-slider', {
    marker: {
      control: 'object',
    },
    validation: {
      options: ['default', 'info', 'warning', 'invalid', 'valid'],
      control: { type: 'select' },
    },
  }),
  args: {
    value: 25,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=11015-14138&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const Reference: Story = {
  args: {
    traceReference: 50,
    trace: true,
  },
};

export const Marker: Story = {
  args: {
    marker: [0, 25, 50, 75, 100],
  },
};

export const MarkerWithReference: Story = {
  args: {
    value: 15,
    traceReference: 50,
    trace: true,
    marker: [0, 25, 50, 75, 100],
  },
};

export const LegacyError: Story = {
  args: {
    error: 'Some error message',
    value: 10,
    traceReference: 50,
    trace: true,
    marker: [0, 25, 50, 75, 100],
  },
};
