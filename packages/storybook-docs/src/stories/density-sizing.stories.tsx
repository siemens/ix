/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import { h } from '@stencil/core';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { stencil } from '@utils/stencil-render';

type Density = 'default' | 'compact';
type Sizing = 'rem' | 'px';

type Args = {
  htmlDensity: Density;
  htmlSizing: Sizing;
};

const probes = [
  '--si-sys-sizing-size-80',
  '--si-sys-sizing-spacing-x-40',
  '--si-sys-sizing-icon-md',
] as const;

const scopeStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  padding: '1rem',
  border: '1px dashed var(--si-sys-color-border-neutral)',
  borderRadius: '4px',
};

function Probes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      {probes.map((token) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            class="probe"
            data-token={token}
            style={{
              width: `var(${token})`,
              height: '0.5rem',
              background: 'var(--si-sys-color-background-accent)',
            }}
          ></div>
          <ix-typography format="code" class="probe-label">
            {token}
          </ix-typography>
        </div>
      ))}
    </div>
  );
}

function Sample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ix-button>Button</ix-button>
        <ix-button variant="secondary" icon="plus">
          Add
        </ix-button>
        <ix-icon-button icon="cogwheel" aria-label="Settings"></ix-icon-button>
        <ix-avatar initials="IX"></ix-avatar>
      </div>
      <ix-input label="Input" placeholder="Placeholder"></ix-input>
      <ix-checkbox label="Checkbox"></ix-checkbox>
      <Probes />
    </div>
  );
}

function Scope(
  props: {
    title: string;
    density?: Density;
    sizing?: 'px';
  },
  children: unknown
) {
  return (
    <div
      style={scopeStyle}
      data-ix-density={props.density}
      data-ix-sizing={props.sizing}
    >
      <ix-typography format="h5" bold>
        {props.title}
      </ix-typography>
      {children}
    </div>
  );
}

/**
 * Measures the resolved token values, so the rendered pixel size is visible
 * next to each token name.
 */
function withMeasurements(render: (args: Args) => HTMLElement) {
  return (args: Args) => {
    const root = render(args);
    requestAnimationFrame(() => {
      root.querySelectorAll<HTMLElement>('.probe').forEach((probe) => {
        const label = probe.nextElementSibling;
        if (label) {
          const width = probe.getBoundingClientRect().width;
          label.textContent = `${probe.dataset.token}: ${width}px`;
        }
      });
    });
    return root;
  };
}

const meta = {
  title: 'Example/Density and Sizing',
  tags: [],
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<Args>;

/**
 * `data-ix-density` can be set on any element. All descendants use the
 * density tokens of the closest `data-ix-density` ancestor.
 */
export const ScopedDensity: Story = {
  render: withMeasurements(
    stencil(() => (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <Scope title='data-ix-density="default"' density="default">
          <Sample />
        </Scope>
        <Scope title='data-ix-density="compact"' density="compact">
          <Sample />
        </Scope>
      </div>
    ))
  ),
};

/**
 * Density scopes can be nested. The closest `data-ix-density` wins.
 */
export const NestedDensity: Story = {
  render: withMeasurements(
    stencil(() => (
      <Scope title='data-ix-density="compact"' density="compact">
        <Sample />
        <Scope title='data-ix-density="default" (nested)' density="default">
          <Sample />
          <Scope title='data-ix-density="compact" (nested)' density="compact">
            <Sample />
          </Scope>
        </Scope>
      </Scope>
    ))
  ),
};

/**
 * `data-ix-sizing="px"` switches the size, spacing, icon and avatar tokens
 * from `rem` to `px`. Change the base font size in the toolbar to see that
 * only the `rem` scope scales with the root font size.
 */
export const PxSizing: Story = {
  argTypes: {
    htmlDensity: { table: { disable: true } },
    htmlSizing: { table: { disable: true } },
  },
  render: withMeasurements((args) => {
    return stencil(() => (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <Scope title="rem (default)">
          <Sample />
        </Scope>
        <Scope title='data-ix-sizing="px"' sizing="px">
          <Sample />
        </Scope>
        <Scope
          title='data-ix-sizing="px" + data-ix-density="compact"'
          sizing="px"
          density="compact"
        >
          <Sample />
        </Scope>
      </div>
    ))(args);
  }),
};

/**
 * Density and sizing set on the `<html>` element apply to the whole page.
 * Nested elements can still override the density. A nested density inside
 * a `data-ix-sizing="px"` scope keeps `px` sizing.
 */
export const HtmlLevel: Story = {
  args: {
    htmlDensity: 'compact',
    htmlSizing: 'px',
  },
  argTypes: {
    htmlDensity: {
      name: '<html> data-ix-density',
      control: { type: 'inline-radio' },
      options: ['default', 'compact'],
    },
    htmlSizing: {
      name: '<html> data-ix-sizing',
      control: { type: 'inline-radio' },
      options: ['rem', 'px'],
    },
  },
  render: withMeasurements((args) => {
    const html = document.documentElement;
    html.setAttribute('data-ix-density', args.htmlDensity);
    if (args.htmlSizing === 'px') {
      html.setAttribute('data-ix-sizing', 'px');
    } else {
      html.removeAttribute('data-ix-sizing');
    }

    return stencil(() => (
      <div style={scopeStyle}>
        <ix-typography format="h5" bold>
          {`<html data-ix-density="${args.htmlDensity}"${
            args.htmlSizing === 'px' ? ' data-ix-sizing="px"' : ''
          }>`}
        </ix-typography>
        <Sample />
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <Scope title='data-ix-density="default" (nested)' density="default">
            <Sample />
          </Scope>
          <Scope title='data-ix-density="compact" (nested)' density="compact">
            <Sample />
          </Scope>
          <Scope title='data-ix-sizing="px" (nested)' sizing="px">
            <Sample />
          </Scope>
        </div>
      </div>
    ))(args);
  }),
};
