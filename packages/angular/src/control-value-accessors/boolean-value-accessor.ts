/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Directive, ElementRef, Injector } from '@angular/core';
import {
  BooleanValueAccessorBaseDirective,
  createValueAccessorProvider,
} from '@siemens/ix-angular/common';

@Directive({
  selector: 'ix-checkbox,ix-toggle',
  providers: [createValueAccessorProvider(BooleanValueAccessorDirective)],
})
export class BooleanValueAccessorDirective extends BooleanValueAccessorBaseDirective {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }
}
