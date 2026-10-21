/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
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

@Component({
  selector: 'app-example',
  imports: [IxContentHeader, IxPill, IxButton],
  templateUrl: './content-header-with-slot.html',
  styleUrls: ['./content-header-with-slot.css'],
})
export default class ContentHeaderWithSlot {}
