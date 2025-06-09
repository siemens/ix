/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxChip } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxChip],
  template: `
    <div class="chip">
      <div class="chip-column">
        <ix-chip icon="print" variant="primary" outline closable
          >Primary</ix-chip
        >
        <ix-chip icon="print" variant="alarm" outline closable>Alarm</ix-chip>
        <ix-chip icon="print" variant="critical" outline>Critical</ix-chip>
        <ix-chip icon="print" variant="warning" outline>Warning</ix-chip>
        <ix-chip icon="print" variant="info" outline>Info</ix-chip>
        <ix-chip icon="print" variant="success" outline>Success</ix-chip>
        <ix-chip icon="print" variant="neutral" outline>Neutral</ix-chip>
        <ix-chip
          icon="print"
          variant="custom"
          background="#FF00FF"
          outline
          closable
          >Custom</ix-chip
        >
        <ix-chip icon="print" variant="primary" outline closable
          >Chip with icon
        </ix-chip>
      </div>
      <div class="chip-column">
        <ix-chip icon="print" variant="primary" closable>Primary</ix-chip>
        <ix-chip icon="print" variant="alarm" closable>Alarm</ix-chip>
        <ix-chip icon="print" variant="critical">Critical</ix-chip>
        <ix-chip icon="print" variant="warning">Warning</ix-chip>
        <ix-chip icon="print" variant="info">Info</ix-chip>
        <ix-chip icon="print" variant="success">Success</ix-chip>
        <ix-chip icon="print" variant="neutral">Neutral</ix-chip>
        <ix-chip
          variant="custom"
          background="#FF00FF"
          Chip-color="black"
          closable
          >Custom</ix-chip
        >
        <ix-chip variant="primary" outline closable>Chip without icon </ix-chip>
      </div>
    </div>
  `,
  styleUrls: ['./chip.css'],
})
export default class Chip {}
