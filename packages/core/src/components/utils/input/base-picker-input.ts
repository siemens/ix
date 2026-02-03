/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Method } from '@stencil/core';
import { clearInputValue } from '../../input/input.util';
import { getNativeInput } from '../input';
import type { PickerInputMethods } from './picker-input.util';

/**
 * Base class for picker input components (date-input, time-input)
 * Provides common methods and properties to reduce code duplication
 */
export class BasePickerInput {
  /**
   * Reference to the input element
   */
  protected inputElementRef: any;

  /**
   * Getter for picker methods - must be implemented by derived class
   */
  protected get pickerMethods(): PickerInputMethods {
    throw new Error('pickerMethods getter must be implemented by derived class');
  }

  /**
   * Get common methods from pickerMethods
   */
  protected get commonMethods() {
    return this.pickerMethods.getCommonMethods();
  }

  /**
   * Get dropdown methods from pickerMethods
   */
  protected get dropdownMethods() {
    return this.pickerMethods.getDropdownMethods();
  }

  /**
   * Get validity state
   * @internal
   */
  @Method()
  async getValidityState(): Promise<ValidityState> {
    return this.pickerMethods.getValidityState();
  }

  /**
   * Get the native input element
   */
  @Method()
  async getNativeInputElement(): Promise<HTMLInputElement> {
    return getNativeInput(this.inputElementRef);
  }

  /**
   * Focuses the input field
   */
  @Method()
  async focusInput(): Promise<void> {
    return this.commonMethods.focusInput();
  }

  /**
   * Returns whether the text field has been touched.
   * @internal
   */
  @Method()
  isTouched(): Promise<boolean> {
    return this.commonMethods.isTouched();
  }

  /**
   * @internal
   */
  syncValidationClasses(): void {
    return this.commonMethods.syncValidationClasses();
  }

  /**
   * Clears the input field value and resets validation state.
   * Sets the value to empty and removes touched state to suppress validation.
   */
  @Method()
  async clear(): Promise<void> {
    return clearInputValue(this as any);
  }
}
