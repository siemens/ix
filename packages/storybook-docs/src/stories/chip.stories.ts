/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components-vite';
import { html, type TemplateResult } from 'lit';
import { genericRender, makeArgTypes } from './utils/generic-render';

/** Matches former `/preview/chip-examples` matrix (test apps). */
const CHIP_MATRIX_ICON = 'print';

const CHIP_MATRIX_VARIANTS = [
  'primary',
  'alarm',
  'critical',
  'warning',
  'info',
  'neutral',
  'success',
  'custom',
] as const;

type ChipMatrixVariant = (typeof CHIP_MATRIX_VARIANTS)[number];

function chipMatrixLabel(variant: ChipMatrixVariant): string {
  return variant === 'custom'
    ? 'Custom'
    : variant.charAt(0).toUpperCase() + variant.slice(1);
}

/** Default chip styling (omit `variant`). */
function chipMatrixDefaultPair(
  closable: boolean,
  showIcon: boolean
): TemplateResult {
  const label = 'Default';

  if (showIcon) {
    return html`
      <ix-chip icon=${CHIP_MATRIX_ICON} ?closable=${closable}>${label}</ix-chip>
      <ix-chip icon=${CHIP_MATRIX_ICON} outline ?closable=${closable}
        >${label}</ix-chip
      >
    `;
  }

  return html`
    <ix-chip ?closable=${closable}>${label}</ix-chip>
    <ix-chip outline ?closable=${closable}>${label}</ix-chip>
  `;
}

function chipMatrixPair(
  variant: ChipMatrixVariant,
  closable: boolean,
  showIcon: boolean
): TemplateResult {
  const label = chipMatrixLabel(variant);

  if (variant === 'custom') {
    if (showIcon) {
      return html`
        <ix-chip
          icon=${CHIP_MATRIX_ICON}
          variant="custom"
          background="var(--theme-chart-11)"
          chip-color="var(--theme-color-inv-std-text)"
          ?closable=${closable}
          >${label}</ix-chip
        >
        <ix-chip
          icon=${CHIP_MATRIX_ICON}
          variant="custom"
          outline
          background="var(--theme-chart-11)"
          chip-color="var(--theme-chip-outline--color)"
          ?closable=${closable}
          >${label}</ix-chip
        >
      `;
    }
    return html`
      <ix-chip
        variant="custom"
        background="var(--theme-chart-11)"
        chip-color="var(--theme-color-inv-std-text)"
        ?closable=${closable}
        >${label}</ix-chip
      >
      <ix-chip
        variant="custom"
        outline
        background="var(--theme-chart-11)"
        chip-color="var(--theme-chip-outline--color)"
        ?closable=${closable}
        >${label}</ix-chip
      >
    `;
  }

  if (showIcon) {
    return html`
      <ix-chip icon=${CHIP_MATRIX_ICON} variant=${variant} ?closable=${closable}
        >${label}</ix-chip
      >
      <ix-chip
        icon=${CHIP_MATRIX_ICON}
        variant=${variant}
        outline
        ?closable=${closable}
        >${label}</ix-chip
      >
    `;
  }

  return html`
    <ix-chip variant=${variant} ?closable=${closable}>${label}</ix-chip>
    <ix-chip variant=${variant} outline ?closable=${closable}>${label}</ix-chip>
  `;
}

function chipMatrixOverview(): TemplateResult {
  const colheads = html`
    <span class="chip-sb-matrix__colhead">Filled</span>
    <span class="chip-sb-matrix__colhead">Outline</span>
  `;

  const variantRows = (
    closable: boolean,
    showIcon: boolean
  ): TemplateResult => html`
    ${colheads}
    ${chipMatrixDefaultPair(closable, showIcon)}
    ${CHIP_MATRIX_VARIANTS.map((v) => chipMatrixPair(v, closable, showIcon))}
  `;

  const section = (
    title: string,
    description: string,
    body: TemplateResult
  ): TemplateResult => html`
    <section class="chip-sb-matrix__section">
      <h2 class="chip-sb-matrix__title">${title}</h2>
      <p class="chip-sb-matrix__desc">${description}</p>
      <div class="chip-sb-matrix__grid">${body}</div>
    </section>
  `;

  return html`
    <style>
      .chip-sb-matrix {
        box-sizing: border-box;
        max-width: 56rem;
        padding: 1rem 1.5rem 2.5rem;
        height: 100%;
        overflow: auto;
      }
      .chip-sb-matrix__page-title {
        margin: 0 0 0.5rem;
        font-size: 1.25rem;
        font-weight: 600;
      }
      .chip-sb-matrix__section {
        margin-bottom: 2.5rem;
      }
      .chip-sb-matrix__title {
        margin: 0 0 0.35rem;
        font-size: 1rem;
        font-weight: 600;
      }
      .chip-sb-matrix__desc {
        margin: 0 0 0.75rem;
        max-width: 48rem;
        font-size: 0.875rem;
        line-height: 1.45;
        color: var(--theme-color-std-text);
      }
      .chip-sb-matrix__grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 0.75rem 2rem;
        align-items: center;
      }
      .chip-sb-matrix__colhead {
        font-size: 0.8125rem;
        font-weight: 600;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid var(--theme-color-soft-bdr);
        margin-bottom: 0.25rem;
      }
      .chip-sb-matrix__narrow {
        min-width: 0;
        max-width: 20rem;
      }
    </style>
    <div class="chip-sb-matrix">
      <header>
        <h1 class="chip-sb-matrix__page-title">ix-chip · overview</h1>
      </header>
      ${section(
        'All variants — default (no close)',
        'Leading icon on every chip; closable is off.',
        variantRows(false, true)
      )}
      ${section(
        'All variants — closable',
        'Close affordance on the right; icon on all rows.',
        variantRows(true, true)
      )}
      ${section(
        'All variants — no leading icon (no close)',
        'Omit the icon attribute; same variants as above, label only.',
        variantRows(false, false)
      )}
      ${section(
        'All variants — no leading icon (closable)',
        'Label only with close control.',
        variantRows(true, false)
      )}
      ${section(
        'Tooltips',
        'tooltip-text as custom string; aria-label where the chip name should differ from visible text. Includes default styling (no `variant`).',
        html`
          ${colheads}
          <ix-chip
            icon=${CHIP_MATRIX_ICON}
            tooltip-text="Full details: status, owner, and last update."
            aria-label="Filter: in review"
            >In review</ix-chip
          >
          <ix-chip
            icon=${CHIP_MATRIX_ICON}
            outline
            tooltip-text="Full details: status, owner, and last update."
            aria-label="Filter: in review"
            >In review</ix-chip
          >
          <ix-chip
            icon=${CHIP_MATRIX_ICON}
            variant="info"
            tooltip-text="Full details: status, owner, and last update."
            aria-label="Filter: in review"
            >In review</ix-chip
          >
          <ix-chip
            icon=${CHIP_MATRIX_ICON}
            variant="info"
            outline
            tooltip-text="Full details: status, owner, and last update."
            aria-label="Filter: in review"
            >In review</ix-chip
          >
          <ix-chip
            icon=${CHIP_MATRIX_ICON}
            variant="primary"
            ?tooltip-text=${true}
            >Tooltip uses visible label</ix-chip
          >
          <ix-chip
            icon=${CHIP_MATRIX_ICON}
            variant="primary"
            outline
            ?tooltip-text=${true}
            >Tooltip uses visible label</ix-chip
          >
        `
      )}
      ${section(
        'More states (representative)',
        'Inactive, centered content, icon accessible name, custom close label, and long label.',
        html`
          ${colheads}
          <ix-chip icon=${CHIP_MATRIX_ICON} variant="warning" inactive closable
            >Inactive (no close)</ix-chip
          >
          <ix-chip
            icon=${CHIP_MATRIX_ICON}
            variant="warning"
            outline
            inactive
            closable
            >Inactive (no close)</ix-chip
          >
          <div class="chip-sb-matrix__narrow">
            <ix-chip icon=${CHIP_MATRIX_ICON} variant="primary" center-content
              >Centered in wide chip</ix-chip
            >
          </div>
          <div class="chip-sb-matrix__narrow">
            <ix-chip
              icon=${CHIP_MATRIX_ICON}
              variant="primary"
              outline
              center-content
              >Centered in wide chip</ix-chip
            >
          </div>
          <ix-chip
            variant="neutral"
            icon=${CHIP_MATRIX_ICON}
            aria-label-icon="Print"
            >Icon with accessible name</ix-chip
          >
          <ix-chip
            variant="neutral"
            outline
            icon=${CHIP_MATRIX_ICON}
            aria-label-icon="Print"
            >Icon with accessible name</ix-chip
          >
          <ix-chip
            variant="alarm"
            closable
            aria-label="Active filter: severity alarm"
            aria-label-close-button="Remove alarm filter"
            >Custom close label</ix-chip
          >
          <ix-chip
            variant="alarm"
            outline
            closable
            aria-label="Active filter: severity alarm"
            aria-label-close-button="Remove alarm filter"
            >Custom close label</ix-chip
          >
          <ix-chip icon=${CHIP_MATRIX_ICON} variant="neutral" closable
            >Very long label that may truncate when space is tight in dense
            UIs</ix-chip
          >
          <ix-chip icon=${CHIP_MATRIX_ICON} variant="neutral" outline closable
            >Very long label that may truncate when space is tight in dense
            UIs</ix-chip
          >
        `
      )}
    </div>
  `;
}

type Element = Components.IxChip & {
  defaultSlot: string;
  previewWidth?: string;
};

const meta = {
  title: 'Example/Chip',
  tags: [],
  render: (args) => genericRender('ix-chip', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-chip', {
    previewWidth: {
      control: { type: 'text' },
    },
  }),
  parameters: {},
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const With_Icon_and_Text: Story = {
  args: {
    icon: 'info',
    defaultSlot: 'Example Text',
  },
};

export const With_Icon_only: Story = {
  args: {
    icon: 'info',
  },
};

export const With_Text_only: Story = {
  args: {
    defaultSlot: 'Example Text',
  },
};

export const With_Icon_and_Text_Ellipsis: Story = {
  args: {
    icon: 'info',
    defaultSlot: 'Example Text',
  },
  render: (args) => {
    const container = genericRender('ix-chip', args);
    const ixChip = container.querySelector('ix-chip')!;
    ixChip.style.width = '5rem';

    return container;
  },
};

export const With_Text_only_Ellipsis: Story = {
  args: {
    defaultSlot: 'Example Text',
  },
  render: (args) => {
    const container = genericRender('ix-chip', args);
    const ixChip = container.querySelector('ix-chip')!;
    ixChip.style.width = '5rem';

    return container;
  },
};

export const With_Icon_and_Element: Story = {
  render: ({ icon }) => {
    return html`<ix-chip icon=${icon}
      ><div style="display: flex;">
        <ix-icon name="${icon}" size="16"></ix-icon></div
    ></ix-chip>`;
  },
  args: {
    icon: 'info',
  },
};

/** Full variant matrix for UX / QA */
export const Overview_design_reference: Story = {
  name: 'Overview · design reference (all variants)',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Default chip (no `variant`), all predefined variants (filled + outline), closable and icon combinations, tooltips, inactive, centered layout, accessible icon name, custom close label, and long label. Replaces the temporary chip-examples preview routes.',
      },
    },
  },
  args: {
    icon: CHIP_MATRIX_ICON,
    defaultSlot: ' ',
  },
  render: () => chipMatrixOverview(),
};
