/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ElementRef, Injector, Directive, HostListener } from '@angular/core';
import { ValueAccessor } from './value-accessor';

@Directive()
export class TextValueAccessorBaseDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('input', ['$event.target'])
  @HostListener('valueChange', ['$event.target'])
  handleInputEvent(el: any): void {
    super.handleValueChange(el, el.value);
  }
}
