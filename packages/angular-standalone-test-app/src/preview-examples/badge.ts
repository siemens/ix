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
import { iconInfo, iconStar } from '@siemens/ix-icons/icons';
import { IxBadge, IxButton, IxIconButton } from '@siemens/ix-angular/standalone';

addIcons({ iconInfo, iconStar });

@Component({
  selector: 'app-example',
  imports: [IxBadge, IxButton, IxIconButton],
  styleUrls: ['./badge.css'],
  template: `
    <div class="row">
      <ix-badge type="counter" label="3" variant="alarm"><ix-button>Review</ix-button></ix-badge>
      <ix-badge type="counter" label="1" variant="alarm" enable-animation><ix-icon-button icon="info" aria-label="What's new"></ix-icon-button></ix-badge>
      <ix-badge type="counter" label="9" variant="success" position="bottom-after"><ix-button>Bottom after</ix-button></ix-badge>
      <ix-badge type="dot" variant="alarm"><ix-button>Messages</ix-button></ix-badge>
      <ix-badge type="status-icon" variant="warning"><ix-button>Device</ix-button></ix-badge>
    </div>

    <div class="row">
      <ix-badge type="counter" label="12" variant="info"></ix-badge>
      <ix-badge type="counter" label="99" variant="warning"></ix-badge>
      <ix-badge type="counter" label="142" variant="primary"></ix-badge>
      <ix-badge type="counter" label="99+" variant="alarm"></ix-badge>
      <ix-badge type="counter" label="8" variant="primary" outline></ix-badge>
      <ix-badge type="counter" label="8" variant="primary" border></ix-badge>
      <ix-badge type="dot" variant="alarm" role="img" aria-label="Unread"></ix-badge>
      <ix-badge type="dot" variant="success" outline role="img" aria-label="Online"></ix-badge>
      <ix-badge type="status-icon" variant="alarm" role="img" aria-label="Alarm"></ix-badge>
      <ix-badge type="status-icon" variant="success" outline role="img" aria-label="Success"></ix-badge>
    </div>

    <div class="row">
      <ix-badge type="label" label="Label" variant="alarm" align-left icon="star" class="styled" tooltip-text></ix-badge>
      <ix-badge type="label" label="Label" icon="star" class="styled-ellipsis-4" tooltip-text></ix-badge>
      <ix-badge type="counter" label="12" variant="info" tooltip-text></ix-badge>
      <ix-badge type="counter" label="12" variant="info" tooltip-text="Twelve notifications"></ix-badge>
      <ix-badge type="dot" variant="alarm" role="img" aria-label="Unread" tooltip-text></ix-badge>
      <ix-badge type="dot" variant="alarm" role="img" aria-label="Unread" tooltip-text="Custom tooltip text"></ix-badge>
      <ix-badge type="status-icon" variant="warning" role="img" aria-label="Warning" tooltip-text></ix-badge>
      <ix-badge type="status-icon" variant="warning" role="img" aria-label="Warning" tooltip-text="Custom tooltip text"></ix-badge>
    </div>
  `,
})
export default class Badge {}
