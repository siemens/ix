/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ElementRef, Injector, Directive } from '@angular/core';
import {
  createValueAccessorProvider,
  TextValueAccessorBaseDirective,
} from '@siemens/ix-angular/common';

@Directive({
  selector: 'ix-input,ix-number-input,ix-textarea',
  providers: [createValueAccessorProvider(IxTextValueAccessorDirective)],
})
export class IxTextValueAccessorDirective extends TextValueAccessorBaseDirective {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }
}
