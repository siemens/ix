/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Method, State } from '@stencil/core';
import { clearInputValue } from '../../input/input.util';
import { getNativeInput } from '../input';
import { makeRef } from '../make-ref';
import type { PickerInputMethods } from './picker-input.util';

export class BasePickerInput {
  protected hostElement!: HTMLElement;

  protected readonly inputElementRef = makeRef<HTMLInputElement>();
  protected readonly dropdownElementRef = makeRef<HTMLIxDropdownElement>();
  protected readonly slotStartRef = makeRef<HTMLDivElement>();
  protected readonly slotEndRef = makeRef<HTMLDivElement>();

  @State() protected show = false;
  @State() protected suppressValidation = false;
  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() protected focus = false;

  protected invalidReason?: string;
  protected touched = false;
  protected isClearing = false;

  protected get pickerMethods(): PickerInputMethods {
    throw new Error(
      'pickerMethods getter must be implemented by derived class'
    );
  }

  protected get commonMethods() {
    return this.pickerMethods.getCommonMethods();
  }

  protected get dropdownMethods() {
    return this.pickerMethods.getDropdownMethods();
  }

  /** @internal */
  @Method()
  async getValidityState(): Promise<ValidityState> {
    return this.pickerMethods.getValidityState();
  }

  @Method()
  async getNativeInputElement(): Promise<HTMLInputElement> {
    return getNativeInput(this.inputElementRef);
  }

  @Method()
  async focusInput(): Promise<void> {
    return this.commonMethods.focusInput();
  }

  /** @internal */
  @Method()
  isTouched(): Promise<boolean> {
    return this.commonMethods.isTouched();
  }

  /** @internal */
  syncValidationClasses(): void {
    return this.commonMethods.syncValidationClasses();
  }

  @Method()
  async clear(): Promise<void> {
    return clearInputValue(this as any);
  }
}
