/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxTimePicker } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxTimePicker],
  template: `
    <ix-time-picker format="hh:mm:ss.SSS" time="01:01:01.100"></ix-time-picker>
  `,
})
export default class TimepickerFormatAdjusted {}
