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
  templateUrl: './datepicker-locale.html',
})
export default class DatepickerLocale {
  locale: 'de' | 'en' | (string & {}) = 'de';

  setLocale(event: Event) {
    const { detail } = event as CustomEvent<string>;

    this.locale = detail;
  }
}
