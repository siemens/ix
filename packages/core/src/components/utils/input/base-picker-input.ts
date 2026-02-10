/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { EventEmitter, Method } from '@stencil/core';
import {
  adjustPaddingForStartAndEnd,
  clearInputValue,
  DisposableChangesAndVisibilityObservers,
  addDisposableChangesAndVisibilityObservers,
} from '../../input/input.util';
import {
  getNativeInput,
  syncState,
  SyncOptions,
  createClassMutationObserver,
  ClassMutationObserver,
  EventConfig,
  createPickerMethods,
  createPickerMethodsContext,
} from '../input';
import { openDropdown, createValidityState } from './picker-input.util';
import { makeRef } from '../make-ref';
import type { PickerInputMethods } from '../input';

export class BasePickerInput {
  protected hostElement!: HTMLElement;

  protected readonly inputElementRef = makeRef<HTMLInputElement>();
  protected readonly dropdownElementRef = makeRef<HTMLIxDropdownElement>();
  protected readonly slotStartRef = makeRef<HTMLDivElement>();
  protected readonly slotEndRef = makeRef<HTMLDivElement>();

  /**
   * Note: @State() decorators in base classes are not reactive in Stencil.
   * Derived component classes must redeclare these properties with @State()
   * for reactivity to work.
   * These declarations provide shared property definitions and initial values.
   */
  protected show = false;
  protected suppressValidation = false;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  protected focus = false;
  isInputInvalid = false;

  /** @internal */
  public invalidReason?: string;
  /** @internal */
  public touched = false;
  protected isClearing = false;

  protected classObserver?: ClassMutationObserver;
  protected disposableChangesAndVisibilityObservers?: DisposableChangesAndVisibilityObservers;

  protected get pickerMethods(): PickerInputMethods {
    return createPickerMethods(
      createPickerMethodsContext(
        {
          component: this,
        },
        openDropdown
      ),
      createValidityState
    );
  }

  protected get commonMethods() {
    return {
      focusInput: this.pickerMethods.focusInput,
      isTouched: this.pickerMethods.isTouched,
      syncValidationClasses: this.pickerMethods.syncValidationClasses,
    };
  }

  protected get dropdownMethods() {
    return {
      openDropdown: this.pickerMethods.openDropdown,
      closeDropdown: this.pickerMethods.closeDropdown,
      checkClassList: this.pickerMethods.checkClassList,
    };
  }

  protected initializeObservers(): void {
    this.classObserver = createClassMutationObserver(this.hostElement, () => {
      this.isInvalid = this.dropdownMethods.checkClassList();
    });

    this.disposableChangesAndVisibilityObservers =
      addDisposableChangesAndVisibilityObservers(
        this.hostElement,
        this.updatePaddings.bind(this)
      );
  }

  protected destroyObservers(): void {
    this.classObserver?.destroy();
    this.disposableChangesAndVisibilityObservers?.();
  }

  protected updatePaddings(): void {
    adjustPaddingForStartAndEnd(
      this.slotStartRef.current,
      this.slotEndRef.current,
      this.inputElementRef.current
    );
  }

  getEventConfig(): EventConfig {
    return this.pickerMethods.eventConfig;
  }

  protected emitChangesAndSync<T = string | undefined>(
    value: T,
    valueChange: EventEmitter<T>,
    updateFormValue: (val: T) => void,
    required?: boolean
  ): void {
    const options: SyncOptions<T> = {
      updateFormInternalValue: updateFormValue,
      valueChange,
      value,
      hostElement: this.hostElement,
      suppressValidation: this.suppressValidation,
      required,
      touched: this.touched,
      isInputInvalid: this.isInputInvalid,
    };
    syncState(options);
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
