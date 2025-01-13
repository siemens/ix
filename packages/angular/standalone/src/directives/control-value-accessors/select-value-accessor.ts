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
  SelectValueAccessorBaseDirective,
} from '@siemens/ix-angular/common';

@Directive({
  standalone: true,
  selector: 'ix-select',
  providers: [createValueAccessorProvider(SelectValueAccessorDirective)],
})
export class SelectValueAccessorDirective extends SelectValueAccessorBaseDirective {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }
}
