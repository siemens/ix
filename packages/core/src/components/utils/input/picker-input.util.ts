/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { EventEmitter, FunctionalComponent, JSX } from '@stencil/core';
import { dropdownController } from '../../dropdown/dropdown-controller';
import type { MakeRef } from '../make-ref';
import type { ValidationResults } from './validation';
import type {
  EventConfig,
  InputMethodsContext,
  DropdownMethodsContext,
} from './picker-input-common';

type StencilHFn = <P>(
  tag: string | FunctionalComponent<P>,
  props: P | null,
  children?: JSX.Element[]
) => JSX.Element;

type InputRenderer = (config: RenderInputConfig) => JSX.Element;

type DropdownRef =
  | MakeRef<HTMLIxDropdownElement>
  | { current: HTMLIxDropdownElement | null };

type InputRef =
  | MakeRef<HTMLInputElement>
  | { current: HTMLInputElement | null };

type SlotStartProps = {
  slotStartRef: MakeRef<HTMLDivElement>;
  onSlotChange?: (event: Event) => void;
};

type SlotEndProps = {
  slotEndRef: MakeRef<HTMLDivElement>;
  onSlotChange?: (event: Event) => void;
};

export interface PickerValidityState {
  patternMismatch: boolean;
  invalidReason?: string;
}

export interface CommonInputMethods {
  focusInput: () => Promise<void>;
  isTouched: () => Promise<boolean>;
  syncValidationClasses: () => void;
}

export interface DropdownMethods {
  openDropdown: () => Promise<void>;
  closeDropdown: () => Promise<void>;
  getEventConfig: () => EventConfig;
  checkClassList: () => boolean;
}

export interface PickerInputMethods {
  getEventConfig: () => EventConfig;
  getCommonMethods: () => CommonInputMethods;
  getDropdownMethods: () => DropdownMethods;
  handleInputKeyDown: (event: KeyboardEvent) => void;
  getValidityState: () => Promise<ValidityState>;
  hookValidationLifecycle: (results: ValidationResults) => void;
  onInputValidationChange: () => Promise<void>;
}

export interface ValidationSetters {
  setIsInvalid: (value: boolean) => void;
  setIsInfo: (value: boolean) => void;
  setIsValid: (value: boolean) => void;
  setIsWarning: (value: boolean) => void;
}

export interface PickerEventConfigOptions {
  show: boolean;
  setTouched: (touched: boolean) => void;
  onInput: (value: string) => void | Promise<void>;
  openDropdown: () => Promise<void>;
  ixFocus: EventEmitter<void>;
  ixBlur: EventEmitter<void>;
  syncValidationClasses: () => void;
  handleInputKeyDown: (event: KeyboardEvent) => void;
  alwaysSetTouchedOnBlur?: boolean;
}

export interface PickerMethodsConfig<Component> {
  component: Component;
  show: boolean;
  touched: boolean;
  isInputInvalid: boolean;
  suppressValidation: boolean;
  required: boolean;
  value: string | undefined;
  suppressSubmitOnEnter: boolean;
  formInternals: ElementInternals;
  inputElementRef: MakeRef<HTMLInputElement>;
  dropdownElementRef: MakeRef<HTMLIxDropdownElement>;
  hostElement: HTMLElement;
  openDropdown: () => Promise<void>;
  ixFocus: EventEmitter<void>;
  ixBlur: EventEmitter<void>;
  syncValidationClasses: () => void;
  onInput: (value: string) => Promise<void>;
  setTouched: (touched: boolean) => void;
  setIsInvalid: (value: boolean) => void;
  setIsInfo: (value: boolean) => void;
  setIsValid: (value: boolean) => void;
  setIsWarning: (value: boolean) => void;
  validityStateChange: EventEmitter<PickerValidityState>;
  invalidReason: string | undefined;
  createInputMethods: (params: InputMethodsContext) => CommonInputMethods;
  createDropdownMethods: (params: DropdownMethodsContext) => DropdownMethods;
  createEventConfig: (params: PickerEventConfigOptions) => EventConfig;
  createKeyDownHandler: (
    suppressSubmitOnEnter: boolean,
    formInternals: ElementInternals
  ) => (event: KeyboardEvent) => void;
  handleValidationLifecycle: (
    suppressValidation: boolean,
    shouldShowInvalid: boolean,
    results: ValidationResults,
    setters: ValidationSetters
  ) => void;
}

export interface RenderInputConfig {
  eventConfig: EventConfig;
  slotStartRef: MakeRef<HTMLDivElement>;
  slotEndRef: MakeRef<HTMLDivElement>;
  updatePaddings: () => void;
  isInputInvalid: boolean;
  textAlignment?: 'start' | 'end';
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  inputElementRef: MakeRef<HTMLInputElement>;
  value: string;
  placeholder?: string;
  name?: string;
  onInput: (config: EventConfig) => (event: Event) => void;
  onClick: (config: EventConfig) => (event: MouseEvent) => void;
  onFocus: (config: EventConfig) => (event: FocusEvent) => Promise<void>;
  onBlur: (config: EventConfig) => (event?: FocusEvent) => void;
  onKeyDown: (config: EventConfig) => (event: KeyboardEvent) => void;
  iconButton: JSX.Element;
}

export interface PickerRenderConfig {
  host: HTMLElement;
  disabled?: boolean;
  readonly?: boolean;
  label?: string;
  helper?: string;
  invalid: boolean;
  invalidText: string | undefined;
  info?: string;
  isInfo: boolean;
  warning: boolean;
  warningText?: string;
  valid: boolean;
  validText?: string;
  tooltip?: boolean;
  required?: boolean;
  inputRef: MakeRef<HTMLInputElement>;
  input: JSX.Element;
  dropdown: JSX.Element;
  testId: string;
  trigger: () => Promise<HTMLElement>;
  dropdownRef: MakeRef<HTMLIxDropdownElement>;
  enableTopLayer?: boolean;
  show: boolean;
  onShow: (event: CustomEvent<boolean>) => void;
}

export interface PickerComponent {
  hostElement: HTMLElement;
  disabled?: boolean;
  readonly?: boolean;
  label?: string;
  helperText?: string;
  isInvalid: boolean;
  infoText?: string;
  isInfo: boolean;
  isWarning: boolean;
  warningText?: string;
  isValid: boolean;
  validText?: string;
  showTextAsTooltip?: boolean;
  required?: boolean;
  inputElementRef: MakeRef<HTMLInputElement>;
  dropdownElementRef: MakeRef<HTMLIxDropdownElement>;
  enableTopLayer?: boolean;
  show: boolean;
}

export interface InputConfigComponent {
  slotStartRef: MakeRef<HTMLDivElement>;
  slotEndRef: MakeRef<HTMLDivElement>;
  updatePaddings: () => void;
  isInputInvalid: boolean;
  textAlignment?: 'start' | 'end';
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  inputElementRef: MakeRef<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  name?: string;
}

export interface PickerInputConfigParams<Component> {
  component: Component;
  getEventConfig: () => EventConfig;
  onInput: (config: EventConfig) => (event: Event) => void;
  onClick: (config: EventConfig) => (event: MouseEvent) => void;
  onFocus: (config: EventConfig) => (event?: FocusEvent) => Promise<void>;
  onBlur: (config: EventConfig) => () => void;
  onKeyDown: (config: EventConfig) => (event: KeyboardEvent) => void;
  iconButton: JSX.Element;
  value?: string;
}

async function getDropdownElement(ref: DropdownRef) {
  return 'waitForCurrent' in ref ? await ref.waitForCurrent() : ref.current;
}

export async function openDropdown(dropdownElementRef: DropdownRef) {
  const dropdownElement = await getDropdownElement(dropdownElementRef);
  if (!dropdownElement) {
    return;
  }

  const id = dropdownElement.dataset.ixDropdown;

  dropdownController.dismissAll();

  if (!id) {
    return;
  }

  const dropdown = dropdownController.getDropdownById(id);
  if (dropdown) {
    dropdownController.present(dropdown);
  }
}

export async function closeDropdown(dropdownElementRef: DropdownRef) {
  const dropdownElement = await getDropdownElement(dropdownElementRef);
  if (!dropdownElement) {
    return;
  }

  const id = dropdownElement.dataset.ixDropdown;
  if (!id) {
    return;
  }

  const dropdown = dropdownController.getDropdownById(id);
  if (dropdown) {
    dropdownController.dismiss(dropdown);
  }
}

export function handleIconClick(
  event: Event,
  show: boolean,
  openDropdownFn: () => void,
  inputElementRef: InputRef
) {
  if (!show) {
    event.stopPropagation();
    event.preventDefault();
    openDropdownFn();
  }

  if (inputElementRef.current) {
    inputElementRef.current.focus();
  }
}

export function createValidityState(
  isInputInvalid: boolean,
  required: boolean,
  value: string | undefined
): ValidityState {
  return {
    badInput: false,
    customError: false,
    patternMismatch: isInputInvalid,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: !isInputInvalid,
    valueMissing: !!required && !value,
  };
}

export function createInputRenderer(
  h: StencilHFn,
  SlotStart: FunctionalComponent<SlotStartProps>,
  SlotEnd: FunctionalComponent<SlotEndProps>
): InputRenderer {
  return (config: RenderInputConfig) =>
    h('div', { class: 'input-wrapper' }, [
      h(SlotStart, {
        slotStartRef: config.slotStartRef,
        onSlotChange: config.updatePaddings,
      }),
      h('input', {
        autoComplete: 'off',
        class: { 'is-invalid': config.isInputInvalid },
        style: { textAlign: config.textAlignment },
        disabled: config.disabled,
        readOnly: config.readonly,
        required: config.required,
        ref: config.inputElementRef,
        type: 'text',
        value: config.value,
        placeholder: config.placeholder,
        name: config.name,
        onInput: config.onInput(config.eventConfig),
        onClick: config.onClick(config.eventConfig),
        onFocus: config.onFocus(config.eventConfig),
        onBlur: config.onBlur(config.eventConfig),
        onKeyDown: config.onKeyDown(config.eventConfig),
      }),
      h(
        SlotEnd,
        {
          slotEndRef: config.slotEndRef,
          onSlotChange: config.updatePaddings,
        },
        [config.iconButton]
      ),
    ]);
}

export function createPickerMethods<Component>(
  config: PickerMethodsConfig<Component>
): PickerInputMethods {
  const keyDownHandler = (event: KeyboardEvent) =>
    config.createKeyDownHandler(
      config.suppressSubmitOnEnter,
      config.formInternals
    )(event);

  return {
    getEventConfig: () =>
      config.createEventConfig({
        show: config.show,
        setTouched: config.setTouched,
        onInput: config.onInput,
        openDropdown: config.openDropdown,
        ixFocus: config.ixFocus,
        ixBlur: config.ixBlur,
        syncValidationClasses: config.syncValidationClasses,
        handleInputKeyDown: keyDownHandler,
        alwaysSetTouchedOnBlur: true,
      }),

    getCommonMethods: () =>
      config.createInputMethods({
        inputElementRef: config.inputElementRef,
        touched: config.touched,
        hostElement: config.hostElement,
        suppressValidation: config.suppressValidation,
        required: config.required,
        value: config.value,
        isInputInvalid: config.isInputInvalid,
      }),

    getDropdownMethods: () =>
      config.createDropdownMethods({
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
      }),

    handleInputKeyDown: keyDownHandler,

    getValidityState: () =>
      Promise.resolve(
        createValidityState(
          config.isInputInvalid,
          !!config.required,
          config.value
        )
      ),

    hookValidationLifecycle: (results: ValidationResults) =>
      config.handleValidationLifecycle(
        config.suppressValidation,
        config.isInputInvalid,
        results,
        {
          setIsInvalid: config.setIsInvalid,
          setIsInfo: config.setIsInfo,
          setIsValid: config.setIsValid,
          setIsWarning: config.setIsWarning,
        }
      ),

    onInputValidationChange: async () => {
      const state = createValidityState(
        config.isInputInvalid,
        !!config.required,
        config.value
      );
      config.validityStateChange.emit({
        patternMismatch: state.patternMismatch,
        invalidReason: config.invalidReason,
      });
    },
  };
}

export function createRenderConfig<Component>(
  component: Component,
  input: JSX.Element,
  dropdown: JSX.Element,
  testId: string
): PickerRenderConfig {
  const picker = component as PickerComponent;
  return {
    host: picker.hostElement,
    disabled: picker.disabled,
    readonly: picker.readonly,
    label: picker.label,
    helper: picker.helperText,
    invalid: picker.isInvalid,
    invalidText: '',
    info: picker.infoText,
    isInfo: picker.isInfo,
    warning: picker.isWarning,
    warningText: picker.warningText,
    valid: picker.isValid,
    validText: picker.validText,
    tooltip: picker.showTextAsTooltip,
    required: picker.required,
    inputRef: picker.inputElementRef,
    input,
    dropdown,
    testId,
    trigger: () => picker.inputElementRef.waitForCurrent(),
    dropdownRef: picker.dropdownElementRef,
    enableTopLayer: picker.enableTopLayer,
    show: picker.show,
    onShow: (event) => (picker.show = event.detail),
  };
}

export function createInputConfig<Component>(
  params: PickerInputConfigParams<Component>
): RenderInputConfig {
  const { component, getEventConfig, value, ...handlers } = params;
  const inputComponent = component as InputConfigComponent;
  return {
    eventConfig: getEventConfig(),
    slotStartRef: inputComponent.slotStartRef,
    slotEndRef: inputComponent.slotEndRef,
    updatePaddings: () => inputComponent.updatePaddings(),
    isInputInvalid: inputComponent.isInputInvalid,
    textAlignment: inputComponent.textAlignment,
    disabled: inputComponent.disabled,
    readonly: inputComponent.readonly,
    required: inputComponent.required,
    inputElementRef: inputComponent.inputElementRef,
    value: value ?? inputComponent.value ?? '',
    placeholder: inputComponent.placeholder,
    name: inputComponent.name,
    ...handlers,
  };
}
