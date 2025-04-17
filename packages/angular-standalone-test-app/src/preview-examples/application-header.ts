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
  IxApplicationHeader,
  IxIconButton,
  IxDropdownButton,
  IxDropdownItem,
  IxAvatar,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [
    IxApplicationHeader,
    IxIconButton,
    IxDropdownButton,
    IxDropdownItem,
    IxAvatar,
  ],
  templateUrl: './application-header.html',
})
export default class ApplicationHeaderExample {}
