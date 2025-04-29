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
  TimeValueAccessorBaseDirective,
} from '@siemens/ix-angular/common';

/**
 * Value Accessor for ix-date-input
 */
@Directive({
  standalone: true,
  selector: 'ix-date-input',
  providers: [createValueAccessorProvider(IxTimeValueAccessorDirective)],
})
export class IxTimeValueAccessorDirective extends TimeValueAccessorBaseDirective {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }
}
