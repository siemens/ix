/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { EventEmitter, h, Host } from '@stencil/core';
import { syncValidationClasses } from './validation';
import { ValidationResults } from './validation';
import { handleSubmitOnEnterKeydown } from '../../input/input.util';
import { closeDropdown as closeDropdownUtil } from './picker-input.util';

export interface SyncOptions<T = string | undefined> {
  updateFormInternalValue: (value: T) => void;
  valueChange: EventEmitter<T>;
  value: T;

  hostElement: HTMLElement;
  suppressValidation: boolean;
  required?: boolean;
  touched: boolean;
  isInputInvalid: boolean;
}

export function syncState<T = string | undefined>(
  options: SyncOptions<T>
): void {
  options.updateFormInternalValue(options.value);
  options.valueChange.emit(options.value);

  syncValidationClasses({
    hostElement: options.hostElement,
    suppressValidation: options.suppressValidation,
    required: options.required,
    value: options.value as string | undefined,
    touched: options.touched,
    isInputInvalid: options.isInputInvalid,
  });
}

export interface WatchConfig<T = string> {
  newValue: T;
  isResetting: boolean;
  required?: boolean;
  initialValue?: T;
  onInput: (value: T) => void;
  setTouched?: (touched: boolean) => void;
  setDirty?: (dirty: boolean) => void;
}

export function watchValue<T = string>(config: WatchConfig<T>): void {
  if (config.isResetting) {
    config.onInput(config.newValue);
    return;
  }

  if (!config.newValue && config.required && config.setTouched) {
    config.setTouched(true);
  }

  if (config.setDirty && config.initialValue !== undefined) {
    config.setDirty(config.newValue !== config.initialValue);
  }

  config.onInput(config.newValue);
}

export interface EventConfig {
  isResetting: boolean;
  show: boolean;
  setTouched: (touched: boolean) => void;
  onInput: (value: string) => void;
  openDropdown: () => void;
  ixFocus: EventEmitter<void>;
  ixBlur: EventEmitter<void>;
  syncValidationClasses: () => void;
  handleInputKeyDown?: (event: KeyboardEvent) => void;
  alwaysSetTouchedOnBlur?: boolean;
}

export function onInput(config: EventConfig) {
  return (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (!config.isResetting) {
      config.setTouched(true);
    }
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
    await config.openDropdown();
    config.ixFocus.emit();
  };
}

export function onBlur(config: EventConfig) {
  return () => {
    config.ixBlur.emit();
    if (config.alwaysSetTouchedOnBlur || !config.isResetting) {
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

export interface ValidationOptions {
  hostElement: HTMLElement;
  suppressValidation: boolean;
  required?: boolean;
  value: string | undefined;
  touched: boolean;
  isInputInvalid: boolean;
}

export function syncValidation(options: ValidationOptions): void {
  syncValidationClasses({
    hostElement: options.hostElement,
    suppressValidation: options.suppressValidation,
    required: options.required,
    value: options.value as string | undefined,
    touched: options.touched,
    isInputInvalid: options.isInputInvalid,
  });
}

export function getNativeInput(inputElementRef: {
  waitForCurrent: () => Promise<HTMLInputElement>;
}): Promise<HTMLInputElement> {
  return inputElementRef.waitForCurrent();
}

export async function focusInput(inputElementRef: {
  waitForCurrent: () => Promise<HTMLInputElement>;
}): Promise<void> {
  return (await getNativeInput(inputElementRef)).focus();
}

export function getTouchedState(touched: boolean): Promise<boolean> {
  return Promise.resolve(touched);
}

export function getDirtyState(dirty: boolean): Promise<boolean> {
  return Promise.resolve(dirty);
}

export interface PickerFieldWrapperProps {
  host: HTMLElement;
  disabled?: boolean;
  readonly?: boolean;
  label?: string;
  helper?: string;
  invalid?: boolean;
  invalidText?: string | undefined;
  info?: string;
  isInfo?: boolean;
  warning?: boolean;
  warningText?: string;
  valid?: boolean;
  validText?: string;
  tooltip?: boolean;
  required?: boolean;
  inputRef: any;
  input: any;
  dropdown: any;
  testId: string;
  trigger: () => Promise<HTMLElement>;
  dropdownRef?: any;
  show?: boolean;
  onShow?: (event: any) => void;
}

export function renderFieldWrapper(props: PickerFieldWrapperProps) {
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
        suppressOverflowBehavior={true}
        show={props.show}
        onShowChanged={props.onShow}
      >
        {props.dropdown}
      </ix-dropdown>
    </Host>
  );
}

export interface PickerEventConfigOptions {
  isResetting: boolean;
  show: boolean;
  setTouched: (touched: boolean) => void;
  onInput: (value: string) => void;
  openDropdown: () => Promise<any>;
  ixFocus: EventEmitter<void>;
  ixBlur: EventEmitter<void>;
  syncValidationClasses: () => void;
  handleInputKeyDown?: (event: KeyboardEvent) => void;
  alwaysSetTouchedOnBlur?: boolean;
}

export function createEventConfig(
  options: PickerEventConfigOptions
): EventConfig {
  return {
    isResetting: options.isResetting,
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

export interface InputMethodsContext {
  inputElementRef: { waitForCurrent: () => Promise<HTMLInputElement> };
  touched: boolean;
  dirty: boolean;
  hostElement: HTMLElement;
  suppressValidation: boolean;
  required?: boolean;
  value: string | undefined;
  isInputInvalid: boolean;
}

export function createInputMethods(context: InputMethodsContext) {
  return {
    async focusInput(): Promise<void> {
      return focusInput(context.inputElementRef);
    },

    isTouched(): Promise<boolean> {
      return getTouchedState(context.touched);
    },

    isDirty(): Promise<boolean> {
      return getDirtyState(context.dirty);
    },

    syncValidationClasses(): void {
      syncValidation({
        hostElement: context.hostElement,
        suppressValidation: context.suppressValidation,
        required: context.required,
        value: context.value,
        touched: context.touched,
        isInputInvalid: context.isInputInvalid,
      });
    },
  };
}

export interface DropdownMethodsContext {
  dropdownElementRef: { current: HTMLIxDropdownElement | null };
  hostElement: HTMLElement;
  show: boolean;
  isResetting: boolean;
  touched: boolean;
  openDropdown: () => Promise<void>;
  ixFocus: EventEmitter<void>;
  ixBlur: EventEmitter<void>;
  syncValidationClasses: () => void;
  onInput: (value: string) => void;
  handleInputKeyDown: (event: KeyboardEvent) => void;
}

export function createDropdownMethods(context: DropdownMethodsContext) {
  return {
    openDropdown: context.openDropdown,
    closeDropdown: () => closeDropdownUtil(context.dropdownElementRef),
    getEventConfig: () => createEventConfig({
      isResetting: context.isResetting,
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
    }
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
  setters: {
    setIsInvalid: (value: boolean) => void;
    setIsInfo: (value: boolean) => void;
    setIsValid: (value: boolean) => void;
    setIsWarning: (value: boolean) => void;
  }
) {
  const { isInfo, isInvalid, isInvalidByRequired, isValid, isWarning } = results;

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
