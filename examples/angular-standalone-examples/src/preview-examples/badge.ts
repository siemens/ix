/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxBadge, IxButton, IxIconButton } from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconInfo, iconStar } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxBadge, IxButton, IxIconButton],
  templateUrl: './badge.html',
  styleUrls: ['./badge.css'],
})
export default class Badge {
  constructor() {
    addIcons({ iconInfo, iconStar });
  }
}
