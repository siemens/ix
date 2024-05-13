/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  AfterViewInit,
  ElementRef,
  Injector,
  OnDestroy,
  Directive,
  HostListener,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive()
export class ValueAccessor
  implements ControlValueAccessor, AfterViewInit, OnDestroy
{
  public static readonly ANGULAR_CLASS_REFIX = 'ng-';

  private onChange: (value: any) => void = () => {
    /**/
  };
  private onTouched: () => void = () => {
    /**/
  };
  protected lastValue: any;
  private statusChanges?: Subscription;

  constructor(protected injector: Injector, protected elementRef: ElementRef) {}

  writeValue(value: any): void {
    this.elementRef.nativeElement.value = this.lastValue = value;
    mapNgToIxClassNames(this.elementRef);
  }

  handleValueChange(el: HTMLElement, value: any): void {
    if (el === this.elementRef.nativeElement) {
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.onChange(value);
      }
      mapNgToIxClassNames(this.elementRef);
    }
  }

  @HostListener('ixBlur', ['$event.target'])
  _handleBlurEvent(el: any): void {
    if (el === this.elementRef.nativeElement) {
      this.onTouched();
      mapNgToIxClassNames(this.elementRef);
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.elementRef.nativeElement.disabled = isDisabled;
  }

  ngOnDestroy(): void {
    if (this.statusChanges) {
      this.statusChanges.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    let ngControl;
    try {
      ngControl = this.injector.get<NgControl>(NgControl);
    } catch {
      /* No FormControl or ngModel binding */
    }

    if (!ngControl) {
      return;
    }

    if (ngControl.statusChanges) {
      this.statusChanges = ngControl.statusChanges.subscribe(() => {
        mapNgToIxClassNames(this.elementRef);
      });
    }

    detourFormControlMethods(ngControl, this.elementRef);
  }
}

const detourFormControlMethods = (
  ngControl: NgControl,
  elementRef: ElementRef
) => {
  const formControl = ngControl.control as any;
  if (formControl) {
    const methodsToPatch = [
      'markAsTouched',
      'markAllAsTouched',
      'markAsUntouched',
      'markAsDirty',
      'markAsPristine',
    ];
    methodsToPatch.forEach((method) => {
      if (typeof formControl[method] !== 'undefined') {
        const oldFn = formControl[method].bind(formControl);
        formControl[method] = (...params: any[]) => {
          oldFn(...params);
          mapNgToIxClassNames(elementRef);
        };
      }
    });
  }
};

const mapNgToIxClassNames = (element: ElementRef): void => {
  setTimeout(() => {
    const input = element.nativeElement as HTMLInputElement;
    const classes = getClasses(input);
    const classList = input.classList;
    classList.remove(
      'ix-valid',
      'ix-invalid',
      'ix-touched',
      'ix-untouched',
      'ix-dirty',
      'ix-pristine'
    );
    classList.add(...classes);
  });
};

const getClasses = (element: HTMLElement) => {
  const classList = element.classList;
  const classes: string[] = [];
  for (let i = 0; i < classList.length; i++) {
    const item = classList.item(i);
    if (item !== null && item.startsWith(ValueAccessor.ANGULAR_CLASS_REFIX)) {
      classes.push(`ix-${item.substring(3)}`);
    }
  }
  return classes;
};
