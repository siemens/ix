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
  CommonInputMethods,
  DropdownMethods,
  PickerInputMethods,
  PickerMethodsConfig,
  PickerComponent,
  PickerRenderConfig,
  CreatePickerMethodsContext,
  SyncOptions,
  WatchConfig,
  EventConfig,
  InputMethodsContext,
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

export function createEventConfig(options: EventConfig): EventConfig {
  return {
    show: options.show,
    setTouched: options.setTouched,
    onInput: options.onInput,
    openDropdown: options.openDropdown,
    ixFocus: options.ixFocus,
    ixBlur: options.ixBlur,
    syncValidationClasses: options.syncValidationClasses,
    handleInputKeyDown: options.handleInputKeyDown,
    alwaysSetTouchedOnBlur: options.alwaysSetTouchedOnBlur,
  };
}

export function createInputMethods(context: InputMethodsContext) {
  return {
    async focusInput(): Promise<void> {
      const input = await context.inputElementRef.waitForCurrent();
      return input.focus();
    },

    isTouched(): Promise<boolean> {
      return Promise.resolve(context.touched);
    },

    syncValidationClasses(): void {
      context.syncValidationClasses();
    },
  };
}

export function createDropdownMethods(context: DropdownMethodsContext) {
  return {
    openDropdown: context.openDropdown,
    closeDropdown: () => closeDropdown(context.dropdownElementRef),
    getEventConfig: () =>
      createEventConfig({
        show: context.show,
        setTouched: (touched: boolean) => (context.touched = touched),
        onInput: context.onInput,
        openDropdown: context.openDropdown,
        ixFocus: context.ixFocus,
        ixBlur: context.ixBlur,
        syncValidationClasses: context.syncValidationClasses,
        handleInputKeyDown: context.handleInputKeyDown,
      }),
    checkClassList: () => {
      return context.hostElement.classList.contains('ix-invalid');
    },
  };
}

export function createKeyDownHandler(
  suppressSubmitOnEnter: boolean,
  formInternals: ElementInternals
) {
  return (event: KeyboardEvent) => {
    handleSubmitOnEnterKeydown(
      event,
      suppressSubmitOnEnter,
      formInternals.form
    );
  };
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

  setters.setIsInvalid(isInvalid || isInvalidByRequired || isInputInvalid);
  setters.setIsInfo(isInfo);
  setters.setIsValid(isValid);
  setters.setIsWarning(isWarning);
}

function getKeyDownHandler<Component>(
  config: PickerMethodsConfig<Component>
): (event: KeyboardEvent) => void {
  return config.createKeyDownHandler(
    config.suppressSubmitOnEnter,
    config.formInternals
  );
}

function getEventConfig<Component>(
  config: PickerMethodsConfig<Component>,
  keyDownHandler: (event: KeyboardEvent) => void
): EventConfig {
  return config.createEventConfig({
    show: config.show,
    setTouched: config.setTouched,
    onInput: config.onInput,
    openDropdown: config.openDropdown,
    ixFocus: config.ixFocus,
    ixBlur: config.ixBlur,
    syncValidationClasses: config.syncValidationClasses,
    handleInputKeyDown: keyDownHandler,
    alwaysSetTouchedOnBlur: true,
  });
}

function getInputMethods<Component>(
  config: PickerMethodsConfig<Component>
): CommonInputMethods {
  return config.createInputMethods({
    inputElementRef: config.inputElementRef,
    touched: config.touched,
    hostElement: config.hostElement,
    suppressValidation: config.suppressValidation,
    required: config.required,
    value: config.value,
    isInputInvalid: config.isInputInvalid,
    syncValidationClasses: () => {
      syncValidationClassesUtil({
        hostElement: config.hostElement,
        suppressValidation: config.suppressValidation,
        required: config.required,
        value: config.value,
        touched: config.touched,
        isInputInvalid: config.isInputInvalid,
      });
    },
  });
}

function getDropdownMethods<Component>(
  config: PickerMethodsConfig<Component>,
  keyDownHandler: (event: KeyboardEvent) => void
): DropdownMethods {
  return config.createDropdownMethods({
    dropdownElementRef: config.dropdownElementRef,
    hostElement: config.hostElement,
    show: config.show,
    touched: config.touched,
    openDropdown: config.openDropdown,
    ixFocus: config.ixFocus,
    ixBlur: config.ixBlur,
    syncValidationClasses: config.syncValidationClasses,
    onInput: config.onInput,
    handleInputKeyDown: keyDownHandler,
  });
}

function getValidationSetters<Component>(
  config: PickerMethodsConfig<Component>
): ValidationSetters {
  return {
    setIsInvalid: config.setIsInvalid,
    setIsInfo: config.setIsInfo,
    setIsValid: config.setIsValid,
    setIsWarning: config.setIsWarning,
  };
}

function getValidityState<Component>(
  config: PickerMethodsConfig<Component>,
  createValidityState: (
    isInputInvalid: boolean,
    required: boolean,
    value: string | undefined
  ) => ValidityState
): () => Promise<ValidityState> {
  return () =>
    Promise.resolve(
      createValidityState(
        config.isInputInvalid,
        !!config.required,
        config.value
      )
    );
}

function getHookValidationLifecycle<Component>(
  config: PickerMethodsConfig<Component>
): (results: ValidationResults) => void {
  const setters = getValidationSetters(config);
  return (results: ValidationResults) =>
    config.handleValidationLifecycle(
      config.suppressValidation,
      config.isInputInvalid,
      results,
      setters
    );
}

function getOnInputValidationChange<Component>(
  config: PickerMethodsConfig<Component>,
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

export function createPickerMethods<Component>(
  config: PickerMethodsConfig<Component>,
  createValidityState: (
    isInputInvalid: boolean,
    required: boolean,
    value: string | undefined
  ) => ValidityState
): PickerInputMethods {
  const keyDownHandler = getKeyDownHandler(config);
  const eventConfig = getEventConfig(config, keyDownHandler);
  const inputMethods = getInputMethods(config);
  const dropdownMethods = getDropdownMethods(config, keyDownHandler);

  return {
    eventConfig,
    handleInputKeyDown: keyDownHandler,
    focusInput: inputMethods.focusInput,
    isTouched: inputMethods.isTouched,
    syncValidationClasses: inputMethods.syncValidationClasses,
    openDropdown: dropdownMethods.openDropdown,
    closeDropdown: dropdownMethods.closeDropdown,
    checkClassList: dropdownMethods.checkClassList,
    getValidityState: getValidityState(config, createValidityState),
    hookValidationLifecycle: getHookValidationLifecycle(config),
    onInputValidationChange: getOnInputValidationChange(
      config,
      createValidityState
    ),
  };
}

export function createPickerMethodsContext<Component>(
  params: CreatePickerMethodsContext<Component>,
  openDropdown: (
    dropdownElementRef: DropdownMethodsContext['dropdownElementRef']
  ) => Promise<void>
): PickerMethodsConfig<Component> {
  const comp = params.component as PickerComponent;

  return {
    component: params.component,
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
    createInputMethods: createInputMethods,
    createDropdownMethods: createDropdownMethods,
    createEventConfig: createEventConfig,
    createKeyDownHandler: createKeyDownHandler,
    handleValidationLifecycle: handleValidationLifecycle,
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
