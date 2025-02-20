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
export class BooleanValueAccessorBaseDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el, true);
  }

  override writeValue(value: boolean): void {
    this.elementRef.nativeElement.checked = this.lastValue = value;
    super.mapNgToIxClassNames(this.elementRef);
  }

  @HostListener('checkedChange', ['$event.target'])
  handleChangeEvent(el: any): void {
    super.handleValueChange(el, el.checked);
  }
}
