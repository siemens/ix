/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ixDropdownTrigger]',
})
export class IxDropdownTriggerDirective {
  @Input() ixDropdownTrigger!: any;

  constructor(private element: ElementRef) {}

  protected ngOnChanges() {
    this.element.nativeElement.trigger = this.ixDropdownTrigger.el;
  }
}
