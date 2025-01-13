/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ElementRef, Injector, Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateValueAccessorBaseDirective } from '@siemens/ix-angular/common';

@Directive({
  selector: 'ix-date-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateValueAccessorDirective,
      multi: true,
    },
  ],
})
export class DateValueAccessorDirective extends DateValueAccessorBaseDirective {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }
}
