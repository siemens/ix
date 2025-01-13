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
  createValueAccessorProvider,
  RadioValueAccessorBaseDirective,
} from '@siemens/ix-angular/common';

@Directive({
  selector: 'ix-radio',
  providers: [createValueAccessorProvider(RadioValueAccessorDirective)],
})
export class RadioValueAccessorDirective extends RadioValueAccessorBaseDirective {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }
}
