/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ElementRef, Injector, Directive, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';

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
export class DateValueAccessorDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('valueChange', ['$event.target'])
  handleInputEvent(el: any): void {
    super.handleValueChange(el, el.value);
  }
}
