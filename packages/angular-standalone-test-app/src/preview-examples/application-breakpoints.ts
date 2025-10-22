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
  private readonly validBreakpoints: Breakpoint[] = ['sm', 'md', 'lg'];

  onCheckedChange(event: CustomEvent<string>) {
    const breakpoint = event.detail as Breakpoint;
    if (this.validBreakpoints.includes(breakpoint)) {
      this.breakpoints = [breakpoint];
    } else {
      console.warn(
        `Invalid breakpoint value: ${breakpoint}. Expected one of: ${this.validBreakpoints.join(
          ', '
        )}`
      );
    }
  }
}
