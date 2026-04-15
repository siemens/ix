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
  DatetimeValueAccessorBaseDirective,
} from '@siemens/ix-angular/common';

/**
 * Value Accessor for ix-datetime-input
 */
@Directive({
  selector: 'ix-datetime-input',
  providers: [createValueAccessorProvider(IxDatetimeValueAccessorDirective)],
})
export class IxDatetimeValueAccessorDirective extends DatetimeValueAccessorBaseDirective {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }
}
