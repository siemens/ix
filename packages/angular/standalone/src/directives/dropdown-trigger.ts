/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { DropdownTriggerBaseDirective } from '@siemens/ix-angular/common';

@Directive({
  standalone: true,
  selector: '[ixDropdownTrigger]',
})
export class IxDropdownTriggerDirective extends DropdownTriggerBaseDirective {
  @Input() ixDropdownTrigger: any = undefined;

  constructor(element: ElementRef) {
    super(element);
  }

  protected ngOnChanges() {
    super.ngOnChanges();
  }
}
