/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconInfo } from '@siemens/ix-icons/icons';
import { IxBadge } from '@siemens/ix-angular/standalone';

addIcons({ iconInfo });

@Component({
  selector: 'app-example',
  imports: [IxBadge],
  styleUrls: ['./badge-label.css'],
  template: `
    <div class="container">
      <ix-badge type="label" label="Primary" variant="primary" icon="info"></ix-badge>
      <ix-badge type="label" label="Primary" variant="primary" icon="info" outline></ix-badge>
      <ix-badge type="label" label="Primary" variant="primary" icon="info" enable-animation></ix-badge>
      <ix-badge type="label" label="Primary" variant="primary" icon="info" outline enable-animation></ix-badge>
      <ix-badge type="label" label="Alarm" variant="alarm" icon="info"></ix-badge>
      <ix-badge type="label" label="Alarm" variant="alarm" icon="info" outline></ix-badge>
      <ix-badge type="label" label="Alarm" variant="alarm" icon="info" enable-animation></ix-badge>
      <ix-badge type="label" label="Alarm" variant="alarm" icon="info" outline enable-animation></ix-badge>
      <ix-badge type="label" label="Critical" variant="critical" icon="info"></ix-badge>
      <ix-badge type="label" label="Critical" variant="critical" icon="info" outline></ix-badge>
      <ix-badge type="label" label="Critical" variant="critical" icon="info" enable-animation></ix-badge>
      <ix-badge type="label" label="Critical" variant="critical" icon="info" outline enable-animation></ix-badge>
      <ix-badge type="label" label="Warning" variant="warning" icon="info"></ix-badge>
      <ix-badge type="label" label="Warning" variant="warning" icon="info" outline></ix-badge>
      <ix-badge type="label" label="Warning" variant="warning" icon="info" enable-animation></ix-badge>
      <ix-badge type="label" label="Warning" variant="warning" icon="info" outline enable-animation></ix-badge>
      <ix-badge type="label" label="Info" variant="info" icon="info"></ix-badge>
      <ix-badge type="label" label="Info" variant="info" icon="info" outline></ix-badge>
      <ix-badge type="label" label="Info" variant="info" icon="info" enable-animation></ix-badge>
      <ix-badge type="label" label="Info" variant="info" icon="info" outline enable-animation></ix-badge>
      <ix-badge type="label" label="Neutral" variant="neutral" icon="info"></ix-badge>
      <ix-badge type="label" label="Neutral" variant="neutral" icon="info" outline></ix-badge>
      <ix-badge type="label" label="Neutral" variant="neutral" icon="info" enable-animation></ix-badge>
      <ix-badge type="label" label="Neutral" variant="neutral" icon="info" outline enable-animation></ix-badge>
      <ix-badge type="label" label="Success" variant="success" icon="info"></ix-badge>
      <ix-badge type="label" label="Success" variant="success" icon="info" outline></ix-badge>
      <ix-badge type="label" label="Success" variant="success" icon="info" enable-animation></ix-badge>
      <ix-badge type="label" label="Success" variant="success" icon="info" outline enable-animation></ix-badge>
      <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
      <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)" outline></ix-badge>
      <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)" enable-animation></ix-badge>
      <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)" outline enable-animation></ix-badge>
    </div>
  `,
})
export default class BadgeLabel {}
