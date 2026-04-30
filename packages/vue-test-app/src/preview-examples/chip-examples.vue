<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconPrint } from '@siemens/ix-icons/icons';
import { IxChip } from '@siemens/ix-vue';

import './chip.css';

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
</script>

<template>
  <div class="chip-page">
    <header class="chip-page__header">
      <h1 class="chip-page__title">ix-chip · Vue examples</h1>
    </header>

    <section class="chip-section">
      <h2 class="chip-section__title">All variants — default (no close)</h2>
      <p class="chip-section__description">
        Leading icon on every chip; closable is off.
      </p>
      <div class="chip-pair-grid">
        <span class="chip-pair-grid__colhead">Filled</span>
        <span class="chip-pair-grid__colhead">Outline</span>
        <template v-for="v in VARIANTS" :key="v">
          <template v-if="v === 'custom'">
            <IxChip
              :icon="ICON"
              variant="custom"
              background="var(--theme-chart-11)"
              chip-color="var(--theme-color-inv-std-text)"
            >
              {{ variantLabel(v) }}
            </IxChip>
            <IxChip
              :icon="ICON"
              variant="custom"
              outline
              background="var(--theme-chart-11)"
              chip-color="var(--theme-chip-outline--color)"
            >
              {{ variantLabel(v) }}
            </IxChip>
          </template>
          <template v-else>
            <IxChip :icon="ICON" :variant="v">
              {{ variantLabel(v) }}
            </IxChip>
            <IxChip :icon="ICON" :variant="v" outline>
              {{ variantLabel(v) }}
            </IxChip>
          </template>
        </template>
      </div>
    </section>

    <section class="chip-section">
      <h2 class="chip-section__title">All variants — closable</h2>
      <p class="chip-section__description">
        Close affordance on the right; icon on all rows.
      </p>
      <div class="chip-pair-grid">
        <span class="chip-pair-grid__colhead">Filled</span>
        <span class="chip-pair-grid__colhead">Outline</span>
        <template v-for="v in VARIANTS" :key="v">
          <template v-if="v === 'custom'">
            <IxChip
              :icon="ICON"
              variant="custom"
              background="var(--theme-chart-11)"
              chip-color="var(--theme-color-inv-std-text)"
              closable
            >
              {{ variantLabel(v) }}
            </IxChip>
            <IxChip
              :icon="ICON"
              variant="custom"
              outline
              background="var(--theme-chart-11)"
              chip-color="var(--theme-chip-outline--color)"
              closable
            >
              {{ variantLabel(v) }}
            </IxChip>
          </template>
          <template v-else>
            <IxChip :icon="ICON" :variant="v" closable>
              {{ variantLabel(v) }}
            </IxChip>
            <IxChip :icon="ICON" :variant="v" outline closable>
              {{ variantLabel(v) }}
            </IxChip>
          </template>
        </template>
      </div>
    </section>

    <section class="chip-section">
      <h2 class="chip-section__title">All variants — no leading icon (no close)</h2>
      <p class="chip-section__description">
        Omit the icon prop; same variants as above, label only.
      </p>
      <div class="chip-pair-grid">
        <span class="chip-pair-grid__colhead">Filled</span>
        <span class="chip-pair-grid__colhead">Outline</span>
        <template v-for="v in VARIANTS" :key="v">
          <template v-if="v === 'custom'">
            <IxChip
              variant="custom"
              background="var(--theme-chart-11)"
              chip-color="var(--theme-color-inv-std-text)"
            >
              {{ variantLabel(v) }}
            </IxChip>
            <IxChip
              variant="custom"
              outline
              background="var(--theme-chart-11)"
              chip-color="var(--theme-chip-outline--color)"
            >
              {{ variantLabel(v) }}
            </IxChip>
          </template>
          <template v-else>
            <IxChip :variant="v">
              {{ variantLabel(v) }}
            </IxChip>
            <IxChip :variant="v" outline>
              {{ variantLabel(v) }}
            </IxChip>
          </template>
        </template>
      </div>
    </section>

    <section class="chip-section">
      <h2 class="chip-section__title">All variants — no leading icon (closable)</h2>
      <p class="chip-section__description">Label only with close control.</p>
      <div class="chip-pair-grid">
        <span class="chip-pair-grid__colhead">Filled</span>
        <span class="chip-pair-grid__colhead">Outline</span>
        <template v-for="v in VARIANTS" :key="`${v}-ni-c`">
          <template v-if="v === 'custom'">
            <IxChip
              variant="custom"
              background="var(--theme-chart-11)"
              chip-color="var(--theme-color-inv-std-text)"
              closable
            >
              {{ variantLabel(v) }}
            </IxChip>
            <IxChip
              variant="custom"
              outline
              background="var(--theme-chart-11)"
              chip-color="var(--theme-chip-outline--color)"
              closable
            >
              {{ variantLabel(v) }}
            </IxChip>
          </template>
          <template v-else>
            <IxChip :variant="v" closable>
              {{ variantLabel(v) }}
            </IxChip>
            <IxChip :variant="v" outline closable>
              {{ variantLabel(v) }}
            </IxChip>
          </template>
        </template>
      </div>
    </section>

    <section class="chip-section">
      <h2 class="chip-section__title">Tooltips</h2>
      <p class="chip-section__description">
        tooltip-text as custom string; host aria-label where the chip name should
        differ from visible text.
      </p>
      <div class="chip-pair-grid">
        <span class="chip-pair-grid__colhead">Filled</span>
        <span class="chip-pair-grid__colhead">Outline</span>
        <IxChip
          :icon="ICON"
          variant="info"
          tooltip-text="Full details: status, owner, and last update."
          aria-label="Filter: in review"
        >
          In review
        </IxChip>
        <IxChip
          :icon="ICON"
          variant="info"
          outline
          tooltip-text="Full details: status, owner, and last update."
          aria-label="Filter: in review"
        >
          In review
        </IxChip>
        <IxChip :icon="ICON" variant="primary" tooltip-text>
          Tooltip uses visible label
        </IxChip>
        <IxChip :icon="ICON" variant="primary" outline tooltip-text>
          Tooltip uses visible label
        </IxChip>
      </div>
    </section>

    <section class="chip-section">
      <h2 class="chip-section__title">More states (representative)</h2>
      <p class="chip-section__description">
        Covers inactive, centered content, icon accessible name, custom close
        label, and long label.
      </p>
      <div class="chip-pair-grid">
        <span class="chip-pair-grid__colhead">Filled</span>
        <span class="chip-pair-grid__colhead">Outline</span>
        <IxChip :icon="ICON" variant="warning" inactive closable>
          Inactive (no close)
        </IxChip>
        <IxChip :icon="ICON" variant="warning" outline inactive closable>
          Inactive (no close)
        </IxChip>
        <div class="chip-pair-grid__narrow">
          <IxChip :icon="ICON" variant="primary" center-content>
            Centered in wide chip
          </IxChip>
        </div>
        <div class="chip-pair-grid__narrow">
          <IxChip :icon="ICON" variant="primary" outline center-content>
            Centered in wide chip
          </IxChip>
        </div>
        <IxChip variant="neutral" :icon="ICON" aria-label-icon="Print">
          Icon with accessible name
        </IxChip>
        <IxChip variant="neutral" outline :icon="ICON" aria-label-icon="Print">
          Icon with accessible name
        </IxChip>
        <IxChip
          variant="alarm"
          closable
          aria-label="Active filter: severity alarm"
          aria-label-close-button="Remove alarm filter"
        >
          Custom close label
        </IxChip>
        <IxChip
          variant="alarm"
          outline
          closable
          aria-label="Active filter: severity alarm"
          aria-label-close-button="Remove alarm filter"
        >
          Custom close label
        </IxChip>
        <IxChip :icon="ICON" variant="neutral" closable>
          Very long label that may truncate when space is tight in dense UIs
        </IxChip>
        <IxChip :icon="ICON" variant="neutral" outline closable>
          Very long label that may truncate when space is tight in dense UIs
        </IxChip>
      </div>
    </section>
  </div>
</template>
