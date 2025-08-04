/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxButton,
  IxContentHeader,
  IxPill,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconInfo } from '@siemens/ix-icons/icons';

addIcons({ iconInfo });

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxContentHeader, IxPill, IxButton],
  templateUrl: './content-header-with-slot.html',
})
export default class ContentHeaderWithSlot {}
