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
  IxList,
  IxListItem,
  IxTypography,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBadge, IxList, IxListItem, IxTypography],
  templateUrl: './generic-list-notification-icon.html',
  styleUrls: ['./generic-list-notification-icon.css'],
})
export default class GenericListNotificationIcon {}
