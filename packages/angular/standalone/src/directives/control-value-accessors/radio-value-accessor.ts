/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Directive, ElementRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioValueAccessorBaseDirective } from '@siemens/ix-angular/common';

@Directive({
  standalone: true,
  selector: 'ix-radio',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioValueAccessorDirective,
      multi: true,
    },
  ],
})
export class RadioValueAccessorDirective extends RadioValueAccessorBaseDirective {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }
}
