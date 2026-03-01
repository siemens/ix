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
    <ix-pill variant="custom" color="white" background="purple">Label</ix-pill>

    <ix-pill tooltip-text="Custom tooltip text">Label</ix-pill>
    <ix-pill variant="subtle-primary" tooltip-text>Label</ix-pill>
    <ix-pill class="styled">Label</ix-pill>

    <ix-pill icon="star">Label</ix-pill>
    <ix-pill icon="star" aria-label="Featured"></ix-pill>
    <ix-pill icon="star" class="styled">Label</ix-pill>
    <ix-pill variant="subtle-primary" alignLeft icon="star" class="styled">Label</ix-pill>

    <ix-pill variant="alarm">Label</ix-pill>
    <ix-pill variant="alarm">Label</ix-pill>
    <ix-pill variant="alarm" class="styled">Label</ix-pill>

    <ix-pill variant="alarm" icon="star">Label</ix-pill>
    <ix-pill variant="alarm" icon="star" class="styled">Label</ix-pill>
    <ix-pill variant="alarm" alignLeft icon="star" class="styled">
      Label
    </ix-pill>
    <ix-pill icon="star" class="styled-ellipsis-4">Label</ix-pill>
    <ix-pill variant="subtle-primary" icon="star" class="styled-ellipsis-4">Label</ix-pill>
    <ix-pill class="styled-ellipsis-3">Label</ix-pill>
    <ix-pill variant="subtle-primary" class="styled-ellipsis-3">Label</ix-pill>
  `,
})
export default class Pill {}
