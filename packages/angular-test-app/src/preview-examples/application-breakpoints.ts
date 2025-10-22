/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from '@angular/core';
import { Breakpoint } from '@siemens/ix';

@Component({
  standalone: false,
  selector: 'app-example',
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
