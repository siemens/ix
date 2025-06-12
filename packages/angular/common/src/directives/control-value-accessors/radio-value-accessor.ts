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
export class RadioValueAccessorBaseDirective extends ValueAccessor {

  private readonly MAX_PARENT_LEVELS = 10;
  private readonly PARENT_TAG = 'ix-radio-group';

  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  override ngAfterViewInit() {
    super.ngAfterViewInit();
    this.handleRadioGroupValueChange()
  }

  private handleRadioGroupValueChange(): void {
    const currentElement = this.elementRef.nativeElement;
    const parentElement = this.findRadioGroup(currentElement);

    if (parentElement) {
      parentElement.addEventListener('valueChange', (event: Event) => {
        const customEvent = event as CustomEvent;
        this.lastValue = customEvent.detail;
      });
    } else {
      console.warn('Expected parent element not found');
    }
  }

  private findRadioGroup(currentElement: HTMLElement | null): HTMLElement | null {
    let ancestorLevel = 0;

    while (currentElement && ancestorLevel < this.MAX_PARENT_LEVELS) {
      if (currentElement.tagName.toLowerCase() === this.PARENT_TAG) {
        return currentElement;
      }
      currentElement = currentElement.parentElement;
      ancestorLevel++;
    }

    if (ancestorLevel >= this.MAX_PARENT_LEVELS) {
      console.error(`Radio button must be placed within ix-radio-group element`);
    }
    return null;
  }

  override writeValue(value: string): void {
    this.lastValue = value;
    this.elementRef.nativeElement.checked =
      this.elementRef.nativeElement.value === value;
    super.mapNgToIxClassNames(this.elementRef);
  }

  @HostListener('checkedChange', ['$event.target'])
  handleChangeEvent(el: any): void {
    super.handleValueChange(el, el.value);
  }
}
