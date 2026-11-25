/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="chip">
      <div class="chip-column">
        <ix-chip icon="print" variant="danger" closable>Danger</ix-chip>
        <ix-chip icon="print" variant="warning">Warning</ix-chip>
        <ix-chip icon="print" variant="caution">Caution</ix-chip>
        <ix-chip
          icon="print"
          variant="information"
          tooltipText="Open details for this status"
          aria-label="In review"
          >Information</ix-chip
        >
        <ix-chip icon="print" variant="accent" closable>Accent</ix-chip>
        <ix-chip icon="print" variant="critical">Critical</ix-chip>
        <ix-chip icon="print" variant="success">Success</ix-chip>
        <ix-chip icon="print" variant="neutral">Neutral</ix-chip>
        <ix-chip
          icon="print"
          variant="custom"
          background="var(--si-sys-color-data-categorical-9)"
          chipColor="var(--si-sys-color-text-inverse)"
          closable
          >Custom</ix-chip
        >
        <ix-chip icon="print" variant="accent" closable
          >Chip with icon
        </ix-chip>
      </div>
      <div class="chip-column">
        <ix-chip icon="print" variant="danger" outline closable>Danger</ix-chip>
        <ix-chip icon="print" variant="warning" outline>Warning</ix-chip>
        <ix-chip icon="print" variant="caution" outline>Caution</ix-chip>
        <ix-chip
          icon="print"
          variant="information"
          outline
          tooltipText="Open details for this status"
          aria-label="In review"
          >Information</ix-chip
        >
        <ix-chip icon="print" variant="accent" outline closable
          >Accent</ix-chip
        >
        <ix-chip icon="print" variant="critical" outline>Critical</ix-chip>
        <ix-chip icon="print" variant="success" outline>Success</ix-chip>
        <ix-chip icon="print" variant="neutral" outline>Neutral</ix-chip>
        <ix-chip
          icon="print"
          variant="custom"
          background="var(--si-sys-color-data-categorical-9)"
          chipColor="var(--si-sys-color-text-primary)"
          outline
          closable
          >Custom</ix-chip
        >
        <ix-chip variant="accent" outline closable>Chip without icon</ix-chip>
      </div>
    </div>
  `,
  styleUrls: ['./chip.css'],
})
export default class Chip {}
