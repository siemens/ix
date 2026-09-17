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
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
  IxRadio,
  IxRadioGroup,
} from '@siemens/ix-angular/standalone';

import { Breakpoint } from '@siemens/ix';

@Component({
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
    IxRadioGroup,
    IxRadio,
  ],
  templateUrl: './application-breakpoints.html',
})
export default class ApplicationBreakpointExample {
  breakpoints: Breakpoint[] = ['md'];
  private readonly validBreakpoints = new Set<Breakpoint>(['sm', 'md', 'lg']);

  onCheckedChange(value: string) {
    const breakpoint = value as Breakpoint;
    if (this.validBreakpoints.has(breakpoint)) {
      this.breakpoints = [breakpoint];
    }
  }
}
