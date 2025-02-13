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
  Input,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive()
export class ValueAccessor
  implements ControlValueAccessor, AfterViewInit, OnDestroy
{
  public static readonly ANGULAR_CLASS_PREFIX = 'ng-';

  private onChange: (value: any) => void = () => {
    /**/
  };
  private onTouched: () => void = () => {
    /**/
  };
  protected lastValue: any;
  private statusChanges?: Subscription;

  @Input() suppressClassMapping = false;

  constructor(
    protected injector: Injector,
    protected elementRef: ElementRef,
    private checkRequiredValidator = false
  ) {}

  writeValue(value: any): void {
    this.elementRef.nativeElement.value = this.lastValue = value;
    this.setClasses();
  }

  handleValueChange(el: HTMLElement, value: any): void {
    if (el === this.elementRef.nativeElement) {
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.onChange(value);
      }
      this.setClasses();
    }
  }

  @HostListener('ixBlur', ['$event.target'])
  _handleBlurEvent(el: any): void {
    if (el === this.elementRef.nativeElement) {
      this.onTouched();
      this.setClasses();
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
    let ngControl = this.getAssignedNgControl();

    if (!ngControl) {
      return;
    }

    if (ngControl.statusChanges) {
      this.statusChanges = ngControl.statusChanges.subscribe(() => {
        this.setClasses();
      });
    }

    this.detourFormControlMethods(ngControl, this.elementRef);
  }

  getAssignedNgControl(): NgControl | null {
    let ngControl: NgControl | null = null;
    try {
      ngControl = this.injector.get<NgControl>(NgControl);
    } catch {
      /* No FormControl or ngModel binding */
    }

    return ngControl;
  }

  setClasses() {
    const ngControl = this.getAssignedNgControl();
    if (!ngControl) {
      return;
    }
    this.mapNgToIxClassNames(this.elementRef);
  }

  detourFormControlMethods(ngControl: NgControl, elementRef: ElementRef) {
    const formControl = ngControl.control;
    if (formControl) {
      const methodsToPatch = [
        'markAsTouched',
        'markAllAsTouched',
        'markAsUntouched',
        'markAsDirty',
        'markAsPristine',
      ] as const;
      methodsToPatch.forEach((method) => {
        if (typeof formControl[method] !== 'undefined') {
          const oldFn = formControl[method].bind(formControl);
          formControl[method] = (...params: any[]) => {
            oldFn(...params);
            this.mapNgToIxClassNames(elementRef);
          };
        }
      });
    }
  }

  async mapNgToIxClassNames(element: ElementRef): Promise<void> {
    if (this.suppressClassMapping) {
      return;
    }
    const input = element.nativeElement;

    setTimeout(async () => {
      const classes = this.getClasses(input);

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

      const ngControl = this.getAssignedNgControl();
      if (ngControl && this.checkRequiredValidator) {
        const { errors, touched } = ngControl;

        const hasOtherErrors = errors && Object.keys(errors).length > 1;
        const isRequiredButUntouched = errors?.required && !touched;

        if (hasOtherErrors === false && isRequiredButUntouched) {
          input.classList.remove('ix-invalid');
        }
      }
    });
  }

  getClasses(element: HTMLElement) {
    const classList = element.classList;
    const classes: string[] = [];
    for (let i = 0; i < classList.length; i++) {
      const item = classList.item(i);
      if (item?.startsWith(ValueAccessor.ANGULAR_CLASS_PREFIX)) {
        classes.push(`ix-${item.substring(3)}`);
      }
    }
    return classes;
  }
}
