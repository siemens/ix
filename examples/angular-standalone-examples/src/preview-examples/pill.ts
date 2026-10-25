/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxPill } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxPill],
  styleUrls: ['./pill.css'],
  template: `
    <ix-pill
      variant="custom"
      pillColor="var(--si-sys-color-text-inverse)"
      background="var(--si-sys-color-background-accent-hover)"
      >Label</ix-pill
    >

    <ix-pill tooltipText="Custom tooltip text">Label</ix-pill>
    <ix-pill class="styled">Label</ix-pill>

    <ix-pill icon="star">Label</ix-pill>
    <ix-pill icon="star" aria-label="Featured"></ix-pill>
    <ix-pill icon="star" class="styled">Label</ix-pill>
    <ix-pill variant="accent" outline alignLeft icon="star" class="styled"
      >Label</ix-pill
    >

    <ix-pill variant="danger">Label</ix-pill>
    <ix-pill variant="danger" class="styled">Label</ix-pill>

    <ix-pill variant="danger" icon="star">Label</ix-pill>
    <ix-pill variant="danger" icon="star" class="styled">Label</ix-pill>
    <ix-pill variant="danger" alignLeft icon="star" class="styled">
      Label
    </ix-pill>
    <ix-pill icon="star" class="styled-ellipsis-4">Label</ix-pill>
    <ix-pill variant="accent" outline icon="star" class="styled-ellipsis-4"
      >Label</ix-pill
    >
    <ix-pill class="styled-ellipsis-3">Label</ix-pill>
    <ix-pill variant="accent" outline class="styled-ellipsis-3">Label</ix-pill>
  `,
})
export default class Pill {}
