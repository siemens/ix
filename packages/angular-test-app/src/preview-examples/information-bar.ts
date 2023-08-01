/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
    <ix-information-bar [bar]="[{count: 10, stripped: 2, color: 'alarm', icon: 'alarm'},
    {count: 5, stripped: 2, color: 'critical', icon: 'warning-rhomb'},
    {count: 11, stripped: 2, color: 'warning', icon: 'warning'},
    {count: 2, stripped: 2, color: 'info', icon: 'info'},
    {count: 4, stripped: 2, color: 'unassigned', icon: 'question'}]"></ix-information-bar>
  `,
})
export default class InformationBar {}
