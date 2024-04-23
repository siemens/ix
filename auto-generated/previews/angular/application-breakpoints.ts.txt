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
  selector: 'app-example',
  templateUrl: './application-breakpoints.html',
})
export default class ApplicationBreakpointExample {
  breakpoints: Breakpoint[] = ['md'];

  onCheckedChange(breakpoint: Breakpoint) {
    this.breakpoints = [breakpoint];
  }
}
