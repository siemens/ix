/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Chip matrix preview: `/preview/chip-examples` in React, Vue, and Angular test apps (remove when UX review is done).
 */

import { iconPrint } from '@siemens/ix-icons/icons';
import { Fragment } from 'react';

import { IxChip } from '@siemens/ix-react';

import './chip.scoped.css';

const ICON = iconPrint;

const VARIANTS = [
  'primary',
  'alarm',
  'critical',
  'warning',
  'info',
  'neutral',
  'success',
  'custom',
] as const;

type ChipVariant = (typeof VARIANTS)[number];

function variantLabel(variant: ChipVariant): string {
  return variant === 'custom'
    ? 'Custom'
    : variant.charAt(0).toUpperCase() + variant.slice(1);
}

function ChipPair({
  variant,
  closable,
  showIcon = true,
}: {
  variant: ChipVariant;
  closable: boolean;
  /** When false, the `icon` prop is omitted (label only). */
  showIcon?: boolean;
}) {
  const label = variantLabel(variant);
  const common = {
    ...(showIcon ? { icon: ICON } : {}),
    closable,
    children: label,
  } as const;

  if (variant === 'custom') {
    return (
      <Fragment>
        <IxChip
          {...common}
          variant="custom"
          background="var(--theme-chart-11)"
          chipColor="var(--theme-color-inv-std-text)"
        />
        <IxChip
          {...common}
          variant="custom"
          outline
          background="var(--theme-chart-11)"
          chipColor="var(--theme-chip-outline--color)"
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <IxChip {...common} variant={variant} />
      <IxChip {...common} variant={variant} outline />
    </Fragment>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="chip-section">
      <h2 className="chip-section__title">{title}</h2>
      <p className="chip-section__description">{description}</p>
      <div className="chip-pair-grid">{children}</div>
    </section>
  );
}

export default function ChipExamplesPage() {
  return (
    <div className="chip-page">
      <header className="chip-page__header">
        <h1 className="chip-page__title">ix-chip · React examples</h1>
      </header>

      <Section
        title="All variants — default (no close)"
        description="Leading icon on every chip; closable is off."
      >
        <span className="chip-pair-grid__colhead">Filled</span>
        <span className="chip-pair-grid__colhead">Outline</span>
        {VARIANTS.map((v) => (
          <ChipPair key={v} variant={v} closable={false} />
        ))}
      </Section>

      <Section
        title="All variants — closable"
        description="Close affordance on the right; icon on all rows."
      >
        <span className="chip-pair-grid__colhead">Filled</span>
        <span className="chip-pair-grid__colhead">Outline</span>
        {VARIANTS.map((v) => (
          <ChipPair key={v} variant={v} closable />
        ))}
      </Section>

      <Section
        title="All variants — no leading icon (no close)"
        description="Omit the icon prop; same variants as above, label only."
      >
        <span className="chip-pair-grid__colhead">Filled</span>
        <span className="chip-pair-grid__colhead">Outline</span>
        {VARIANTS.map((v) => (
          <ChipPair key={v} variant={v} closable={false} showIcon={false} />
        ))}
      </Section>

      <Section
        title="All variants — no leading icon (closable)"
        description="Label only with close control."
      >
        <span className="chip-pair-grid__colhead">Filled</span>
        <span className="chip-pair-grid__colhead">Outline</span>
        {VARIANTS.map((v) => (
          <ChipPair
            key={`${v}-no-icon-closable`}
            variant={v}
            closable
            showIcon={false}
          />
        ))}
      </Section>

      <Section
        title="Tooltips"
        description="tooltipText as custom string; host aria-label where the chip name should differ from visible text."
      >
        <span className="chip-pair-grid__colhead">Filled</span>
        <span className="chip-pair-grid__colhead">Outline</span>
        <IxChip
          icon={ICON}
          variant="info"
          tooltipText="Full details: status, owner, and last update."
          aria-label="Filter: in review"
        >
          In review
        </IxChip>
        <IxChip
          icon={ICON}
          variant="info"
          outline
          tooltipText="Full details: status, owner, and last update."
          aria-label="Filter: in review"
        >
          In review
        </IxChip>
        <IxChip icon={ICON} variant="primary" tooltipText>
          Tooltip uses visible label
        </IxChip>
        <IxChip icon={ICON} variant="primary" outline tooltipText>
          Tooltip uses visible label
        </IxChip>
      </Section>

      <Section
        title="More states (representative)"
        description="Covers inactive, centered content, icon accessible name, custom close label, and long label."
      >
        <span className="chip-pair-grid__colhead">Filled</span>
        <span className="chip-pair-grid__colhead">Outline</span>
        <IxChip icon={ICON} variant="warning" inactive closable>
          Inactive (no close)
        </IxChip>
        <IxChip icon={ICON} variant="warning" outline inactive closable>
          Inactive (no close)
        </IxChip>
        <div className="chip-pair-grid__narrow">
          <IxChip icon={ICON} variant="primary" centerContent>
            Centered in wide chip
          </IxChip>
        </div>
        <div className="chip-pair-grid__narrow">
          <IxChip icon={ICON} variant="primary" outline centerContent>
            Centered in wide chip
          </IxChip>
        </div>
        <IxChip variant="neutral" icon={ICON} ariaLabelIcon="Print">
          Icon with accessible name
        </IxChip>
        <IxChip variant="neutral" outline icon={ICON} ariaLabelIcon="Print">
          Icon with accessible name
        </IxChip>
        <IxChip
          variant="alarm"
          closable
          aria-label="Active filter: severity alarm"
          ariaLabelCloseButton="Remove alarm filter"
        >
          Custom close label
        </IxChip>
        <IxChip
          variant="alarm"
          outline
          closable
          aria-label="Active filter: severity alarm"
          ariaLabelCloseButton="Remove alarm filter"
        >
          Custom close label
        </IxChip>
        <IxChip icon={ICON} variant="neutral" closable>
          Very long label that may truncate when space is tight in dense UIs
        </IxChip>
        <IxChip icon={ICON} variant="neutral" outline closable>
          Very long label that may truncate when space is tight in dense UIs
        </IxChip>
      </Section>
    </div>
  );
}
