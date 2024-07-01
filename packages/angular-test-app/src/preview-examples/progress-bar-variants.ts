/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-progress-bar [value]="50" variant="primary"></ix-progress-bar>
    <ix-progress-bar [value]="50" variant="alarm"></ix-progress-bar>
    <ix-progress-bar [value]="50" variant="critical"></ix-progress-bar>
    <ix-progress-bar [value]="50" variant="warning"></ix-progress-bar>
    <ix-progress-bar [value]="50" variant="info"></ix-progress-bar>
    <ix-progress-bar [value]="50" variant="neutral"></ix-progress-bar>
    <ix-progress-bar [value]="50" variant="success"></ix-progress-bar>
  `,
})
export default class ProgressBarVariants {}
