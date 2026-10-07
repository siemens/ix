/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxBadge,
  IxIcon,
  IxIconButton,
  IxList,
  IxListItem,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconAlarmBell, iconContextMenu } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxBadge, IxIcon, IxIconButton, IxList, IxListItem],
  templateUrl: './generic-list-custom-content.html',
  styleUrls: ['./generic-list-custom-content.css'],
})
export default class GenericListCustomContent {
  constructor() {
    addIcons({ iconAlarmBell, iconContextMenu });
  }
}
