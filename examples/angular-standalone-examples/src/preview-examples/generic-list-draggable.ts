/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxList, IxListItem } from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconProject } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxList, IxListItem],
  templateUrl: './generic-list-draggable.html',
})
export default class GenericListDraggable {
  constructor() {
    addIcons({ iconProject });
  }
}
