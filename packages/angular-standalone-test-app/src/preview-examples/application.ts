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
  IxApplication,
  IxApplicationHeader,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxMenu,
    IxMenuItem,
    IxContent,
    IxContentHeader,
  ],
  templateUrl: './application.html',
})
export default class ApplicationExample {}
