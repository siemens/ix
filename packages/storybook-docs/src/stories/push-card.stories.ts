import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import type { Components } from '@siemens/ix/components';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxPushCard & { defaultSlot: string };

const meta = {
  title: 'Example/PushCard',
  tags: [],
  render: (args) => genericRender('ix-push-card', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-push-card', {
    defaultSlot: {
      control: 'text',
    },
  }),
  args: {
    defaultSlot: '',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=6396-139080&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    defaultSlot: ``,
    icon: 'bulb',
    notification: '99',
    heading: 'Heading content',
    subheading: 'Subheading',
    variant: 'insight',
  },
};
