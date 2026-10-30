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

type PaneLayout = Components.IxPaneLayout;

type LayoutDemoArgs = PaneLayout & {
  /**
   * Wrap panes in `ix-application` so they consume the application layout context.
   */
  nestInApplication: boolean;
  /**
   * Application `forceBreakpoint`. Use `none` for viewport-driven nested layout.
   * Only applied when **nestInApplication** is enabled.
   */
  forceBreakpoint: 'none' | 'sm' | 'md' | 'lg';
};

const guidanceStyle = {
  margin: '0 0 0.75rem',
  padding: '0.75rem 1rem',
  borderLeft: '3px solid var(--theme-color-primary, #00feed)',
  background: 'var(--theme-color-ghost--hover, rgba(255,255,255,0.04))',
  fontSize: '0.875rem',
  lineHeight: '1.45',
};

function expectedBehaviour(
  args: Pick<LayoutDemoArgs, 'nestInApplication' | 'forceBreakpoint'>
) {
  if (!args.nestInApplication) {
    return 'Standalone: panes follow the browser width. Narrow → mobile overlays; wide → side panes.';
  }
  if (args.forceBreakpoint === 'none') {
    return 'Nested, no force: panes follow the browser width (same as standalone).';
  }
  if (args.forceBreakpoint === 'sm') {
    return 'forceBreakpoint=sm: panes stay in mobile layout even on a wide viewport.';
  }
  return `forceBreakpoint=${args.forceBreakpoint}: panes stay in desktop layout even when the viewport is narrow.`;
}

const paneLayoutChildren = (
  args: Pick<LayoutDemoArgs, 'nestInApplication' | 'forceBreakpoint'>
) => [
  <ix-pane heading="Navigation" slot="left" size="240px" expanded>
    Navigation pane
  </ix-pane>,
  <div slot="content">
    <div style={guidanceStyle}>
      <p style={{ margin: '0 0 0.5rem', fontWeight: '600' }}>
        How to check
      </p>
      <ol style={{ margin: '0 0 0.75rem', paddingLeft: '1.25rem' }}>
        <li>
          Open the <strong>Controls</strong> panel at the bottom of Storybook
          (toolbar “Controls”, or press <strong>C</strong>).
        </li>
        <li>
          Switch mode there:
          <ul style={{ margin: '0.35rem 0 0', paddingLeft: '1.25rem' }}>
            <li>
              <strong>nestInApplication</strong> — checkbox (on = inside
              ix-application, off = standalone pane layout).
            </li>
            <li>
              <strong>forceBreakpoint</strong> — dropdown{' '}
              <code>none</code> / <code>sm</code> / <code>md</code> /{' '}
              <code>lg</code> (only applies when nested).
            </li>
          </ul>
        </li>
        <li>
          Resize via the Storybook viewport toolbar or the browser window across
          the sm breakpoint (~48em / 768px).
        </li>
        <li>
          Compare pane chrome: desktop = side panes beside content; mobile =
          top/bottom overlays. The <strong>Expected</strong> line below updates
          with your Controls.
        </li>
      </ol>
      <p style={{ margin: '0' }}>
        <strong>Expected: </strong>
        {expectedBehaviour(args)}
      </p>
    </div>
  </div>,
  <ix-pane heading="Change log" slot="right" size="320px" expanded>
    Change log content
  </ix-pane>,
];

const meta = {
  title: 'Example/Pane',
  tags: [],
} satisfies Meta<LayoutDemoArgs>;

export default meta;
type Story = StoryObj<LayoutDemoArgs>;

/**
 * Demonstrates how panes follow application layout vs the viewport.
 * Use Controls to set nesting and forceBreakpoint, then resize the viewport.
 */
export const ApplicationLayout: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Shows how panes follow application layout versus the viewport. Open **Controls** (bottom panel): toggle **nestInApplication**, set **forceBreakpoint** (`none` / `sm` / `md` / `lg`), then resize the viewport. On-canvas guidance shows the expected behaviour for the current selection.',
      },
    },
  },
  args: {
    nestInApplication: true,
    forceBreakpoint: 'lg',
    variant: 'inline',
    layout: 'full-vertical',
  },
  argTypes: {
    ...makeArgTypes<Partial<ArgTypes<PaneLayout>>>('ix-pane-layout'),
    nestInApplication: {
      control: { type: 'boolean' },
      description:
        'Wrap panes in ix-application (nested layout context). Off = standalone.',
    },
    forceBreakpoint: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description:
        'ix-application forceBreakpoint. Ignored when nestInApplication is off.',
    },
  },
  render: stencil((args: LayoutDemoArgs) => {
    const { nestInApplication, forceBreakpoint, ...paneLayoutArgs } = args;
    const demoArgs = { nestInApplication, forceBreakpoint };
    const paneLayout = (
      <ix-pane-layout {...paneLayoutArgs} style={{ height: '20rem' }}>
        {paneLayoutChildren(demoArgs)}
      </ix-pane-layout>
    );

    if (!nestInApplication) {
      return <div style={{ height: '24rem' }}>{paneLayout}</div>;
    }

    const forced = forceBreakpoint === 'none' ? undefined : forceBreakpoint;

    return (
      <ix-application forceBreakpoint={forced} style={{ height: '32rem' }}>
        <ix-application-header
          name="Pane layout breakpoint"
          slot="application-header"
        ></ix-application-header>
        <ix-menu slot="menu">
          <ix-menu-item home icon="home" active>
            Home
          </ix-menu-item>
          <ix-menu-item icon="alarm-bell">Alarms</ix-menu-item>
        </ix-menu>
        <ix-content>
          <ix-content-header
            headerTitle={
              forced ? `forceBreakpoint=${forced}` : 'Nested, viewport-driven'
            }
            slot="header"
          ></ix-content-header>
          {paneLayout}
        </ix-content>
      </ix-application>
    );
  }),
};
