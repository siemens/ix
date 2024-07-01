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
    <ix-progress-bar [value]="25"></ix-progress-bar>
    <ix-progress-bar [value]="50"></ix-progress-bar>
    <ix-progress-bar [value]="75"></ix-progress-bar>
  `,
})
export default class ProgressBar {}
