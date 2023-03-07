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
    <ix-date-picker
      [range]="isRange"
      [from]="fromDate"
      [to]="toDate"
    ></ix-date-picker>
  `,
})
export default class DatepickerRange {
  isRange = true;

  fromDate = '2022/12/15';
  toDate = '2022/12/24';
}
