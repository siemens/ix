/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { EventEmitter, h, Host } from '@stencil/core';
import { syncValidationClasses, ValidationResults } from './validation';
import { handleSubmitOnEnterKeydown } from '../../input/input.util';
import { closeDropdown as closeDropdownUtil } from './picker-input.util';
import type {
  PickerRenderConfig,
  ValidationSetters,
} from './picker-input.util';

export interface ValidationContext {
  hostElement: HTMLElement;
  suppressValidation: boolean;
  required?: boolean;
  value: string | undefined;
  touched: boolean;
  isInputInvalid: boolean;
}

export interface EventHandlers {
  ixFocus: EventEmitter<void>;
  ixBlur: EventEmitter<void>;
  syncValidationClasses: () => void;
  onInput: (value: string) => void | Promise<void>;
  handleInputKeyDown: (event: KeyboardEvent) => void;
}

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

export interface WatchConfig<T = string> {
  newValue: T;
  required?: boolean;
  onInput: (value: T) => void;
  setTouched?: (touched: boolean) => void;
  isClearing?: boolean;
}

export interface EventConfig extends Omit<EventHandlers, 'handleInputKeyDown'> {
  show: boolean;
  setTouched: (touched: boolean) => void;
  openDropdown: () => void | Promise<void>;
  handleInputKeyDown?: (event: KeyboardEvent) => void;
  alwaysSetTouchedOnBlur?: boolean;
}

export interface ValidationOptions extends ValidationContext {}

export interface InputMethodsContext extends ValidationContext {
  inputElementRef: { waitForCurrent: () => Promise<HTMLInputElement> };
}

export interface DropdownMethodsContext extends EventHandlers {
  dropdownElementRef: { current: HTMLIxDropdownElement | null };
  hostElement: HTMLElement;
  show: boolean;
  touched: boolean;
  openDropdown: () => Promise<void>;
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

export function syncValidation(options: ValidationOptions): void {
  syncValidationClasses({
    hostElement: options.hostElement,
    suppressValidation: options.suppressValidation,
    required: options.required,
    value: options.value,
    touched: options.touched,
    isInputInvalid: options.isInputInvalid,
  });
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

export async function focusInput(inputElementRef: {
  waitForCurrent: () => Promise<HTMLInputElement>;
}): Promise<void> {
  const input = await inputElementRef.waitForCurrent();
  return input.focus();
}

export function getTouchedState(touched: boolean): Promise<boolean> {
  return Promise.resolve(touched);
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
      return focusInput(context.inputElementRef);
    },

    isTouched(): Promise<boolean> {
      return getTouchedState(context.touched);
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

export function createDropdownMethods(context: DropdownMethodsContext) {
  return {
    openDropdown: context.openDropdown,
    closeDropdown: () => closeDropdownUtil(context.dropdownElementRef),
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
