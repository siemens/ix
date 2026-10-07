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
  IxIconButton,
  IxList,
  IxListItem,
  IxListItemSeparator,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxIconButton, IxList, IxListItem, IxListItemSeparator],
  templateUrl: './generic-list-additional-options.html',
})
export default class GenericListAdditionalOptions {
  selected = [false, false, false];

  constructor() {
    addIcons({ iconEditDocument, iconProject, iconTrashcan });
  }
}
