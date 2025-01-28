/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxSelect,
  IxSelectItem,
  IxDatePicker,
  IxSelectValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

type Locale = 'de' | 'en';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [
    IxSelect,
    IxSelectItem,
    IxDatePicker,
    IxSelectValueAccessorDirective,
  ],
  templateUrl: './datepicker-locale.html',
})
export default class DatepickerLocale {
  locale: Locale = 'de';

  setLocale(event: Event) {
    const { detail } = event as CustomEvent<string>;

    this.locale = detail as Locale;
  }
}
