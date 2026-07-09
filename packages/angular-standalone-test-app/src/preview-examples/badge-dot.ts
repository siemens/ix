/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxBadge } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBadge],
  styleUrls: ['./badge-dot.css'],
  template: `
    <div class="container">
      <ix-badge type="dot" variant="primary" role="img" aria-label="Primary"></ix-badge>
      <ix-badge type="dot" variant="primary" outline role="img" aria-label="Primary outline"></ix-badge>
      <ix-badge type="dot" variant="primary" enable-animation role="img" aria-label="Primary pulse"></ix-badge>
      <ix-badge type="dot" variant="primary" outline enable-animation role="img" aria-label="Primary pulse outline"></ix-badge>

      <ix-badge type="dot" variant="alarm" role="img" aria-label="Alarm"></ix-badge>
      <ix-badge type="dot" variant="alarm" outline role="img" aria-label="Alarm outline"></ix-badge>
      <ix-badge type="dot" variant="alarm" enable-animation role="img" aria-label="Alarm pulse"></ix-badge>
      <ix-badge type="dot" variant="alarm" outline enable-animation role="img" aria-label="Alarm pulse outline"></ix-badge>

      <ix-badge type="dot" variant="critical" role="img" aria-label="Critical"></ix-badge>
      <ix-badge type="dot" variant="critical" outline role="img" aria-label="Critical outline"></ix-badge>
      <ix-badge type="dot" variant="critical" enable-animation role="img" aria-label="Critical pulse"></ix-badge>
      <ix-badge type="dot" variant="critical" outline enable-animation role="img" aria-label="Critical pulse outline"></ix-badge>

      <ix-badge type="dot" variant="warning" role="img" aria-label="Warning"></ix-badge>
      <ix-badge type="dot" variant="warning" outline role="img" aria-label="Warning outline"></ix-badge>
      <ix-badge type="dot" variant="warning" enable-animation role="img" aria-label="Warning pulse"></ix-badge>
      <ix-badge type="dot" variant="warning" outline enable-animation role="img" aria-label="Warning pulse outline"></ix-badge>

      <ix-badge type="dot" variant="info" role="img" aria-label="Info"></ix-badge>
      <ix-badge type="dot" variant="info" outline role="img" aria-label="Info outline"></ix-badge>
      <ix-badge type="dot" variant="info" enable-animation role="img" aria-label="Info pulse"></ix-badge>
      <ix-badge type="dot" variant="info" outline enable-animation role="img" aria-label="Info pulse outline"></ix-badge>

      <ix-badge type="dot" variant="neutral" role="img" aria-label="Neutral"></ix-badge>
      <ix-badge type="dot" variant="neutral" outline role="img" aria-label="Neutral outline"></ix-badge>
      <ix-badge type="dot" variant="neutral" enable-animation role="img" aria-label="Neutral pulse"></ix-badge>
      <ix-badge type="dot" variant="neutral" outline enable-animation role="img" aria-label="Neutral pulse outline"></ix-badge>

      <ix-badge type="dot" variant="success" role="img" aria-label="Success"></ix-badge>
      <ix-badge type="dot" variant="success" outline role="img" aria-label="Success outline"></ix-badge>
      <ix-badge type="dot" variant="success" enable-animation role="img" aria-label="Success pulse"></ix-badge>
      <ix-badge type="dot" variant="success" outline enable-animation role="img" aria-label="Success pulse outline"></ix-badge>

      <ix-badge type="dot" variant="custom" role="img" aria-label="Custom" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
      <ix-badge type="dot" variant="custom" outline role="img" aria-label="Custom outline" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></ix-badge>
      <ix-badge type="dot" variant="custom" enable-animation role="img" aria-label="Custom pulse" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
      <ix-badge type="dot" variant="custom" outline enable-animation role="img" aria-label="Custom pulse outline" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></ix-badge>

    </div>
  `,
})
export default class BadgeDot {}
