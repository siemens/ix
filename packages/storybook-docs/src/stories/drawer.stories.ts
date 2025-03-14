import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { makeArgTypes } from './utils/generic-render';

type Element = Components.IxDrawer;

const meta = {
  title: 'Example/Drawer',
  tags: [],
  render: (args) => {
    // Create a state handler function
    const toggleDrawer = () => {
      args.show = !args.show;
      // Force a re-render of the component
      const drawer = document.querySelector('ix-drawer');
      if (drawer) {
        drawer.show = args.show;
      }
    };

    return html` <ix-drawer
        .closeOnClickOutside=${args.closeOnClickOutside}
        ?fullHeight=${true}
        .show=${args.show}
        @drawerClose=${() => {
          args.show = false;
          const drawer = document.querySelector('ix-drawer');
          if (drawer) {
            drawer.show = false;
          }
        }}
      >
        <div>
          <div>
            <ix-icon
              slot="input-start"
              name="success"
              color="color-success"
              size="16"
            />
            <span>dasda</span>
          </div>
        </div>
      </ix-drawer>
      <ix-button @click=${toggleDrawer}>Toggle</ix-button>`;
  },
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-drawer'),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=8033-151366&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Default: Story = {
  args: {
    closeOnClickOutside: true,
    show: true,
  },
};
