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
    <ix-time-picker
      format="hh:mm:ss a"
      time="01:15:10 AM"
      hourInterval="2"
      minuteInterval="15"
      secondInterval="10"
    ></ix-time-picker>
  `,
})
export default class Timepicker {}
