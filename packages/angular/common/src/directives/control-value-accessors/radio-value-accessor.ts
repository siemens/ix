/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Directive, HostListener, ElementRef, Injector } from '@angular/core';
import { ValueAccessor } from './value-accessor';

@Directive()
export class RadioValueAccessorBaseDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.handleRadioGroupValueChange();
  }

  private handleRadioGroupValueChange(): void {
    this.getAssignedNgControl()?.valueChanges?.subscribe((value: string) => {
      this.lastValue = value;
    });
  }

  override writeValue(value: string): void {
    this.lastValue = value;
    this.elementRef.nativeElement.checked =
      this.elementRef.nativeElement.value === value;
    super.mapNgToIxClassNames(this.elementRef);
  }

  @HostListener('checkedChange', ['$event.target'])
  handleChangeEvent(el: any): void {
    super.handleValueChange(el, el.value);
  }
}
