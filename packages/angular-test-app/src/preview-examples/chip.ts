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
        <ix-chip
          icon="print"
          variant="primary"
          closable
          aria-label="Primary category"
          aria-label-close-button="Remove primary category"
          >Primary</ix-chip
        >
        <ix-chip icon="print" variant="alarm" closable>Alarm</ix-chip>
        <ix-chip icon="print" variant="critical">Critical</ix-chip>
        <ix-chip icon="print" variant="warning">Warning</ix-chip>
        <ix-chip icon="print" variant="info">Info</ix-chip>
        <ix-chip icon="print" variant="success">Success</ix-chip>
        <ix-chip icon="print" variant="neutral">Neutral</ix-chip>
        <ix-chip
          icon="print"
          variant="custom"
          background="#5C3FD6"
          chip-color="#FFFFFF"
          closable
          aria-label="Custom chip"
          aria-label-close-button="Remove custom chip"
          >Custom</ix-chip
        >
        <ix-chip icon="print" variant="primary" closable
          >Chip with icon
        </ix-chip>
      </div>
      <div class="chip-column">
        <ix-chip icon="print" variant="primary" closable>Primary</ix-chip>
        <ix-chip
          icon="print"
          variant="alarm"
          closable
          aria-label-close-button="Remove alarm"
          >Alarm</ix-chip
        >
        <ix-chip icon="print" variant="critical">Critical</ix-chip>
        <ix-chip icon="print" variant="warning">Warning</ix-chip>
        <ix-chip icon="print" variant="info" aria-label="Information tag"
          >Info</ix-chip
        >
        <ix-chip icon="print" variant="success">Success</ix-chip>
        <ix-chip icon="print" variant="neutral">Neutral</ix-chip>
        <ix-chip
          variant="custom"
          background="#5C3FD6"
          chip-color="#FFFFFF"
          closable
          >Custom</ix-chip
        >
        <ix-chip variant="primary" closable>Chip without icon </ix-chip>
      </div>
    </div>
  `,
  styleUrls: ['./chip.css'],
})
export default class Chip {}
