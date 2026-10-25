/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxLayoutGrid,
  IxRow,
  IxCol,
  IxPill,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLayoutGrid, IxRow, IxCol, IxPill],
  styleUrls: ['./pill-variants.css'],
  template: `
    <ix-layout-grid>
      <ix-row>
        <ix-col>
          <ix-pill variant="danger" icon="info">Danger</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="danger" outline icon="info">Danger</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="warning" icon="info">Warning</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="warning" outline icon="info">Warning</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="caution" icon="info">Caution</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="caution" outline icon="info">Caution</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="information" icon="info">Information</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="information" outline icon="info"
            >Information</ix-pill
          >
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="accent" icon="info">Accent</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="accent" outline icon="info">Accent</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="critical" icon="info">Critical</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="critical" outline icon="info">Critical</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="success" icon="info">Success</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="success" outline icon="info">Success</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="neutral" icon="info">Neutral</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="neutral" outline icon="info">Neutral</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill
            variant="custom"
            pillColor="var(--si-sys-color-text-inverse)"
            background="var(--si-sys-color-background-accent-hover)"
            icon="info"
          >
            Custom
          </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill
            variant="custom"
            outline
            pillColor="var(--si-sys-color-text-accent-hover)"
            background="var(--si-sys-color-background-accent-hover)"
            icon="info"
          >
            Custom
          </ix-pill>
        </ix-col>
      </ix-row>
    </ix-layout-grid>
  `,
})
export default class PillVariants {}
