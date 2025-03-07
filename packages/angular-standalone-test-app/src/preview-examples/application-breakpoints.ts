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
  IxDropdownButton,
  IxDropdownItem,
  IxAvatar,
  IxMenu,
  IxMenuItem,
  IxContent,
  IxContentHeader,
} from '@siemens/ix-angular/standalone';

import { Breakpoint } from '@siemens/ix';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxDropdownButton,
    IxDropdownItem,
    IxAvatar,
    IxMenu,
    IxMenuItem,
    IxContent,
    IxContentHeader,
  ],
  templateUrl: './application-breakpoints.html',
})
export default class ApplicationBreakpointExample {
  breakpoints: Breakpoint[] = ['md'];

  onCheckedChange(breakpoint: Breakpoint) {
    this.breakpoints = [breakpoint];
  }
}
