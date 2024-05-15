/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Directive, HostListener, ElementRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor, mapNgToIxClassNames } from './value-accessor';

@Directive({
  selector: 'ix-checkbox,ix-toggle',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxValueAccessorDirective,
      multi: true,
    },
  ],
})
export class CheckboxValueAccessorDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  writeValue(value: boolean): void {
    this.elementRef.nativeElement.checked = this.lastValue = value;
    mapNgToIxClassNames(this.elementRef);
  }

  @HostListener('checkedChange', ['$event.target'])
  handleChangeEvent(el: HTMLIxCheckboxElement): void {
    super.handleValueChange(el, el.checked);
  }
}
