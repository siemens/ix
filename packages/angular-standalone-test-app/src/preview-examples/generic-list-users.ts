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
  IxAvatar,
  IxIconButton,
  IxList,
  IxListItem,
  IxTypography,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCheckbox,
  iconFolder,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxAvatar, IxIconButton, IxList, IxListItem, IxTypography],
  templateUrl: './generic-list-users.html',
  styleUrls: ['./generic-list-users.css'],
})
export default class GenericListUsers {
  constructor() {
    addIcons({ iconCheckbox, iconFolder, iconTrashcan });
  }
}
