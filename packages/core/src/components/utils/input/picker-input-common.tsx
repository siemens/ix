/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
import {
  syncValidationClasses as syncValidationClassesUtil,
  ValidationResults,
} from './validation';
import { handleSubmitOnEnterKeydown } from '../../input/input.util';
import { closeDropdown } from './picker-input.util';
import type {
  ValidationSetters,
  PickerInputMethods,
  PickerMethodsConfig,
  PickerRenderConfig,
  CreatePickerMethodsContext,
  SyncOptions,
  WatchConfig,
  EventConfig,
  DropdownMethodsContext,
} from './picker-input.types';

export function syncState<T = string | undefined>(
  options: SyncOptions<T>
): void {
  options.updateFormInternalValue(options.value);
  options.valueChange.emit(options.value);

  syncValidationClassesUtil({
    hostElement: options.hostElement,
    suppressValidation: options.suppressValidation,
    required: options.required,
    value: options.value as string | undefined,
    touched: options.touched,
    isInputInvalid: options.isInputInvalid,
  });
}

export function watchValue<T = string>(config: WatchConfig<T>): void {
  if (
    !config.isClearing &&
    !config.newValue &&
    config.required &&
    config.setTouched
  ) {
    config.setTouched(true);
  }

  config.onInput(config.newValue);
}

export function onInput(config: EventConfig) {
  return (event: Event) => {
    const target = event.target as HTMLInputElement;
    config.setTouched(true);
    config.onInput(target.value);
  };
}

export function onClick(config: EventConfig) {
  return (event: Event) => {
    if (config.show) {
      event.stopPropagation();
      event.preventDefault();
    }
  };
}

export function onFocus(config: EventConfig) {
  return async () => {
    config.openDropdown();
    config.ixFocus.emit();
  };
}

export function onBlur(config: EventConfig) {
  return () => {
    config.ixBlur.emit();
    if (config.alwaysSetTouchedOnBlur) {
      config.setTouched(true);
    }
    config.syncValidationClasses();
  };
}

export function onKeyDown(config: EventConfig) {
  return (event: KeyboardEvent) => {
    if (config.handleInputKeyDown) {
      config.handleInputKeyDown(event);
    }
  };
}

export function getNativeInput(inputElementRef: {
  waitForCurrent: () => Promise<HTMLInputElement>;
}): Promise<HTMLInputElement> {
  return inputElementRef.waitForCurrent();
}

export function handleValidationLifecycle(
  suppressValidation: boolean,
  isInputInvalid: boolean,
  results: ValidationResults,
  setters: ValidationSetters
) {
  const { isInfo, isInvalid, isInvalidByRequired, isValid, isWarning } =
    results;

  if (suppressValidation) {
    setters.setIsInvalid(false);
    setters.setIsInfo(false);
    setters.setIsValid(false);
    setters.setIsWarning(false);
    return;
  }

  const finalInvalid = isInvalid || isInvalidByRequired || isInputInvalid;
  setters.setIsInvalid(finalInvalid);
  setters.setIsInfo(isInfo);
  setters.setIsValid(isValid);
  setters.setIsWarning(isWarning);
}

function buildInputMethods(config: PickerMethodsConfig) {
  return {
    async focusInput(): Promise<void> {
      const input = await config.inputElementRef.waitForCurrent();
      return input.focus();
    },

    isTouched(): Promise<boolean> {
      return Promise.resolve(config.touched);
    },

    syncValidationClasses(): void {
      syncValidationClassesUtil({
        hostElement: config.hostElement,
        suppressValidation: config.suppressValidation,
        required: config.required,
        value: config.value,
        touched: config.touched,
        isInputInvalid: config.isInputInvalid,
      });
    },
  };
}

function buildDropdownMethods(config: PickerMethodsConfig) {
  return {
    openDropdown: config.openDropdown,
    closeDropdown: () => closeDropdown(config.dropdownElementRef),
    checkClassList: () => {
      return config.hostElement.classList.contains('ix-invalid');
    },
  };
}

function createOnInputValidationChange(
  config: PickerMethodsConfig,
  createValidityState: (
    isInputInvalid: boolean,
    required: boolean,
    value: string | undefined
  ) => ValidityState
): () => Promise<void> {
  return async () => {
    const state = createValidityState(
      config.isInputInvalid,
      !!config.required,
      config.value
    );
    config.validityStateChange.emit({
      patternMismatch: state.patternMismatch,
      valueMissing: state.valueMissing,
      invalidReason: config.invalidReason,
    });
  };
}

export function createPickerMethods(
  config: PickerMethodsConfig,
  createValidityState: (
    isInputInvalid: boolean,
    required: boolean,
    value: string | undefined
  ) => ValidityState
): PickerInputMethods {
  const keyDownHandler = (event: KeyboardEvent) => {
    handleSubmitOnEnterKeydown(
      event,
      config.suppressSubmitOnEnter,
      config.formInternals.form
    );
  };

  const eventConfig: EventConfig = {
    show: config.show,
    setTouched: config.setTouched,
    onInput: config.onInput,
    openDropdown: config.openDropdown,
    ixFocus: config.ixFocus,
    ixBlur: config.ixBlur,
    syncValidationClasses: config.syncValidationClasses,
    handleInputKeyDown: keyDownHandler,
    alwaysSetTouchedOnBlur: true,
  };

  const inputMethods = buildInputMethods(config);
  const dropdownMethods = buildDropdownMethods(config);

  const validationSetters: ValidationSetters = {
    setIsInvalid: config.setIsInvalid,
    setIsInfo: config.setIsInfo,
    setIsValid: config.setIsValid,
    setIsWarning: config.setIsWarning,
  };

  return {
    eventConfig,
    handleInputKeyDown: keyDownHandler,
    focusInput: inputMethods.focusInput,
    isTouched: inputMethods.isTouched,
    syncValidationClasses: inputMethods.syncValidationClasses,
    openDropdown: dropdownMethods.openDropdown,
    closeDropdown: dropdownMethods.closeDropdown,
    checkClassList: dropdownMethods.checkClassList,
    getValidityState: () =>
      Promise.resolve(
        createValidityState(
          config.isInputInvalid,
          !!config.required,
          config.value
        )
      ),
    hookValidationLifecycle: (results: ValidationResults) =>
      handleValidationLifecycle(
        config.suppressValidation,
        config.isInputInvalid,
        results,
        validationSetters
      ),
    onInputValidationChange: createOnInputValidationChange(
      config,
      createValidityState
    ),
  };
}

export function createPickerMethodsContext(
  params: CreatePickerMethodsContext,
  openDropdown: (
    dropdownElementRef: DropdownMethodsContext['dropdownElementRef']
  ) => Promise<void>
): PickerMethodsConfig {
  const comp = params.component;

  return {
    component: comp,
    show: comp.show,
    touched: comp.touched,
    isInputInvalid: comp.isInputInvalid,
    suppressValidation: comp.suppressValidation,
    required: !!comp.required,
    value: comp.value,
    suppressSubmitOnEnter: comp.suppressSubmitOnEnter,
    formInternals: comp.formInternals,
    inputElementRef: comp.inputElementRef,
    dropdownElementRef: comp.dropdownElementRef,
    hostElement: comp.hostElement,
    ixFocus: comp.ixFocus,
    ixBlur: comp.ixBlur,
    validityStateChange: comp.validityStateChange,
    invalidReason: comp.invalidReason,
    setTouched: (touched: boolean) => (comp.touched = touched),
    setIsInvalid: (value: boolean) => (comp.isInvalid = value),
    setIsInfo: (value: boolean) => (comp.isInfo = value),
    setIsValid: (value: boolean) => (comp.isValid = value),
    setIsWarning: (value: boolean) => (comp.isWarning = value),
    syncValidationClasses: () => comp.syncValidationClasses(),
    onInput: (value: string) => comp.onInput(value),
    openDropdown: async () => {
      if (comp.beforeOpenDropdown) {
        await comp.beforeOpenDropdown();
      }
      return openDropdown(comp.dropdownElementRef);
    },
  };
}

export function renderFieldWrapper(props: PickerRenderConfig) {
  return (
    <Host
      class={{
        disabled: !!props.disabled,
        readonly: !!props.readonly,
      }}
    >
      <ix-field-wrapper
        label={props.label}
        helperText={props.helper}
        isInvalid={props.invalid}
        invalidText={props.invalidText}
        infoText={props.info}
        isInfo={props.isInfo}
        isWarning={props.warning}
        warningText={props.warningText}
        isValid={props.valid}
        validText={props.validText}
        showTextAsTooltip={props.tooltip}
        required={props.required}
        controlRef={props.inputRef}
        htmlForLabel={props.host.id}
      >
        {props.input}
      </ix-field-wrapper>
      <ix-dropdown
        data-testid={props.testId}
        trigger={props.trigger()}
        ref={props.dropdownRef}
        closeBehavior="outside"
        enableTopLayer={props.enableTopLayer}
        suppressOverflowBehavior={true}
        show={props.show}
        onShowChanged={props.onShow}
      >
        {props.dropdown}
      </ix-dropdown>
    </Host>
  );
}
