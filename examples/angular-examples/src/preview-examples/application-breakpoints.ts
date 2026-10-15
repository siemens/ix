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
  private readonly validBreakpoints = new Set<Breakpoint>(['sm', 'md', 'lg']);

  onCheckedChange(value: string) {
    const breakpoint = value as Breakpoint;
    if (this.validBreakpoints.has(breakpoint)) {
      this.breakpoints = [breakpoint];
    }
  }
}
