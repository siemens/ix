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

export interface BaseInputState {
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
}

export interface ValidationSyncMethods {
  syncValidationClasses: () => void;
}

export interface ValidationSetters {
  setIsInvalid: (value: boolean) => void;
  setIsInfo: (value: boolean) => void;
  setIsValid: (value: boolean) => void;
  setIsWarning: (value: boolean) => void;
}

export interface ValidationState {
  isInputInvalid: boolean;
  required: boolean;
  value: string | undefined;
  suppressValidation: boolean;
}

export interface PickerEventState extends ValidationSyncMethods {
  show: boolean;
  openDropdown: () => Promise<void>;
  ixFocus: EventEmitter<void>;
  ixBlur: EventEmitter<void>;
  onInput: (value: string) => Promise<void>;
}

export interface PickerRefs {
  inputElementRef: MakeRef<HTMLInputElement>;
  dropdownElementRef: MakeRef<HTMLIxDropdownElement>;
}

export interface PickerHostContext {
  hostElement: HTMLElement;
  touched: boolean;
}

export interface InputEventHandlers {
  onInput: (config: EventConfig) => (event: Event) => void;
  onClick: (config: EventConfig) => (event: MouseEvent) => void;
  onFocus: (config: EventConfig) => (event: FocusEvent) => Promise<void>;
  onBlur: (config: EventConfig) => (event?: FocusEvent) => void;
  onKeyDown: (config: EventConfig) => (event: KeyboardEvent) => void;
  iconButton: JSX.Element;
}

export interface CommonInputMethods extends ValidationSyncMethods {
  focusInput: () => Promise<void>;
  isTouched: () => Promise<boolean>;
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

export interface ValidationMethodsConfig
  extends ValidationState,
    ValidationSetters {
  validityStateChange: EventEmitter<PickerValidityState>;
  invalidReason: string | undefined;
  handleValidationLifecycle: (
    suppressValidation: boolean,
    shouldShowInvalid: boolean,
    results: ValidationResults,
    setters: ValidationSetters
  ) => void;
}

export interface EventHandlersConfig extends PickerEventState {
  setTouched: (touched: boolean) => void;
  createEventConfig: (params: EventConfig) => EventConfig;
  suppressSubmitOnEnter: boolean;
  formInternals: ElementInternals;
  createKeyDownHandler: (
    suppressSubmitOnEnter: boolean,
    formInternals: ElementInternals
  ) => (event: KeyboardEvent) => void;
}

export interface InputDropdownMethodsConfig
  extends ValidationState,
    PickerEventState,
    PickerRefs,
    PickerHostContext {
  createInputMethods: (params: InputMethodsContext) => CommonInputMethods;
  createDropdownMethods: (params: DropdownMethodsContext) => DropdownMethods;
}

export interface PickerMethodsConfig<Component>
  extends ValidationMethodsConfig,
    EventHandlersConfig,
    InputDropdownMethodsConfig {
  component: Component;
}

export interface BasePickerState extends BaseInputState {
  label?: string;
  isInfo: boolean;
  isWarning: boolean;
  warningText?: string;
  isValid: boolean;
  validText?: string;
  enableTopLayer?: boolean;
  show: boolean;
}

export interface PickerComponent
  extends BasePickerState,
    PickerRefs,
    PickerHostContext,
    Omit<ValidationState, 'required'>,
    Omit<PickerEventState, 'onInput' | 'openDropdown'> {
  helperText?: string;
  isInvalid: boolean;
  infoText?: string;
  showTextAsTooltip?: boolean;
  suppressSubmitOnEnter: boolean;
  formInternals: ElementInternals;
  validityStateChange: EventEmitter<PickerValidityState>;
  invalidReason?: string;
  onInput: (value: string | undefined) => Promise<void>;
}

export interface InputConfigComponent extends BaseInputState {
  slotStartRef: MakeRef<HTMLDivElement>;
  slotEndRef: MakeRef<HTMLDivElement>;
  updatePaddings: () => void;
  isInputInvalid: boolean;
  textAlignment?: 'start' | 'end';
  inputElementRef: MakeRef<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  name?: string;
}

export interface RenderInputConfig extends InputEventHandlers, BaseInputState {
  eventConfig: EventConfig;
  slotStartRef: MakeRef<HTMLDivElement>;
  slotEndRef: MakeRef<HTMLDivElement>;
  updatePaddings: () => void;
  isInputInvalid: boolean;
  textAlignment?: 'start' | 'end';
  inputElementRef: MakeRef<HTMLInputElement>;
  value: string;
  placeholder?: string;
  name?: string;
}

export interface PickerRenderConfig extends BasePickerState {
  host: HTMLElement;
  helper?: string;
  invalid?: boolean;
  invalidText?: string;
  info?: string;
  warning?: boolean;
  valid?: boolean;
  tooltip?: boolean;
  inputRef: MakeRef<HTMLInputElement>;
  dropdownRef?: MakeRef<HTMLIxDropdownElement>;
  input: JSX.Element;
  dropdown: JSX.Element;
  testId: string;
  trigger: () => Promise<HTMLElement>;
  onShow?: (event: CustomEvent<boolean>) => void;
}

export interface PickerInputConfigParams<Component> extends InputEventHandlers {
  component: Component;
  getEventConfig: () => EventConfig;
  value?: string;
}

export interface CreatePickerMethodsContext<Component> {
  component: Component;
  openDropdown: () => Promise<void>;
  createInputMethods: (params: InputMethodsContext) => CommonInputMethods;
  createDropdownMethods: (params: DropdownMethodsContext) => DropdownMethods;
  createEventConfig: (params: EventConfig) => EventConfig;
  createKeyDownHandler: (
    suppressSubmitOnEnter: boolean,
    formInternals: ElementInternals
  ) => (event: KeyboardEvent) => void;
  handleValidationLifecycle: (
    suppressValidation: boolean,
    isInputInvalid: boolean,
    results: ValidationResults,
    setters: ValidationSetters
  ) => void;
}

async function getDropdownElement(ref: DropdownRef) {
  return 'waitForCurrent' in ref ? await ref.waitForCurrent() : ref.current;
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

export function createInputRenderer(
  h: StencilHFn,
  SlotStart: FunctionalComponent<SlotStartProps>,
  SlotEnd: FunctionalComponent<SlotEndProps>
): InputRenderer {
  return (config: RenderInputConfig) => {
    return h('div', { class: 'input-wrapper' }, [
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
    isWarning: picker.isWarning,
    warning: picker.isWarning,
    warningText: picker.warningText,
    isValid: picker.isValid,
    valid: picker.isValid,
    validText: picker.validText,
    tooltip: picker.showTextAsTooltip,
    required: picker.required,
    inputRef: picker.inputElementRef,
    input,
    dropdown,
    testId,
    trigger: () => {
      return picker.inputElementRef.waitForCurrent();
    },
    dropdownRef: picker.dropdownElementRef,
    enableTopLayer: picker.enableTopLayer,
    show: picker.show,
    onShow: (event) => {
      picker.show = event.detail;
    },
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

function createValidationMethods(config: ValidationMethodsConfig) {
  return {
    getValidityState: () => {
      return Promise.resolve(
        createValidityState(
          config.isInputInvalid,
          !!config.required,
          config.value
        )
      );
    },

    hookValidationLifecycle: (results: ValidationResults) => {
      return config.handleValidationLifecycle(
        config.suppressValidation,
        config.isInputInvalid,
        results,
        {
          setIsInvalid: config.setIsInvalid,
          setIsInfo: config.setIsInfo,
          setIsValid: config.setIsValid,
          setIsWarning: config.setIsWarning,
        }
      );
    },

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

function createEventHandlers(config: EventHandlersConfig) {
  const keyDownHandler = (event: KeyboardEvent) => {
    return config.createKeyDownHandler(
      config.suppressSubmitOnEnter,
      config.formInternals
    )(event);
  };

  return {
    getEventConfig: () => {
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
    },

    handleInputKeyDown: keyDownHandler,
  };
}

function createInputAndDropdownMethods(
  config: InputDropdownMethodsConfig,
  keyDownHandler: (event: KeyboardEvent) => void
) {
  return {
    getCommonMethods: () => {
      return config.createInputMethods({
        inputElementRef: config.inputElementRef,
        touched: config.touched,
        hostElement: config.hostElement,
        suppressValidation: config.suppressValidation,
        required: config.required,
        value: config.value,
        isInputInvalid: config.isInputInvalid,
      });
    },

    getDropdownMethods: () => {
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
    },
  };
}

export function createPickerMethods<Component>(
  config: PickerMethodsConfig<Component>
): PickerInputMethods {
  const eventHandlers = createEventHandlers(config);
  const validationMethods = createValidationMethods(config);
  const inputDropdownMethods = createInputAndDropdownMethods(
    config,
    eventHandlers.handleInputKeyDown
  );

  return {
    ...eventHandlers,
    ...validationMethods,
    ...inputDropdownMethods,
  };
}

export function createPickerMethodsContext<Component>(
  params: CreatePickerMethodsContext<Component>
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
    openDropdown: params.openDropdown,
    createInputMethods: params.createInputMethods,
    createDropdownMethods: params.createDropdownMethods,
    createEventConfig: params.createEventConfig,
    createKeyDownHandler: params.createKeyDownHandler,
    handleValidationLifecycle: params.handleValidationLifecycle,
  };
}
