/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { EventEmitter, JSX } from '@stencil/core';
import type { ValidationResults } from './validation';
import type { MakeRef } from '../make-ref';

export interface CommonInputAttributes {
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
}

export type PickerInputValidityState = {
  patternMismatch: boolean;
  valueMissing: boolean;
  invalidReason?: string;
};

export interface PickerValidityStateTracker {
  lastEmittedPatternMismatch?: boolean;
  lastEmittedValueMissing?: boolean;
  lastEmittedInvalidReason?: string;
}

export interface PickerValidityContext {
  touched: boolean;
  invalidReason?: string;
  getValidityState: () => Promise<ValidityState>;
  emit: (state: PickerInputValidityState) => void;
}

export interface PickerInputComponent<T> {
  validityTracker: PickerValidityStateTracker;
  touched: boolean;
  invalidReason?: string;
  getValidityState(): Promise<ValidityState>;
  validityStateChange: { emit: (state: T) => void };
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

export interface PickerEventState {
  show: boolean;
  openDropdown: () => Promise<void>;
  ixFocus: EventEmitter<void>;
  ixBlur: EventEmitter<void>;
  onInput: (value: string) => Promise<void>;
  syncValidationClasses: () => void;
}

export interface PickerContext {
  inputElementRef: MakeRef<HTMLInputElement>;
  dropdownElementRef: MakeRef<HTMLIxDropdownElement>;
  hostElement: HTMLElement;
  touched: boolean;
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
  eventConfig: EventConfig;
  handleInputKeyDown: (event: KeyboardEvent) => void;

  focusInput: () => Promise<void>;
  isTouched: () => Promise<boolean>;
  syncValidationClasses: () => void;

  openDropdown: () => Promise<void>;
  closeDropdown: () => Promise<void>;
  checkClassList: () => boolean;

  getValidityState: () => Promise<ValidityState>;
  hookValidationLifecycle: (results: ValidationResults) => void;
  onInputValidationChange: () => Promise<void>;
}

export interface PickerMethodsConfig<Component>
  extends ValidationState,
    PickerEventState,
    PickerContext,
    ValidationSetters {
  component: Component;
  setTouched: (touched: boolean) => void;
  suppressSubmitOnEnter: boolean;
  formInternals: ElementInternals;
  validityStateChange: EventEmitter<PickerInputValidityState>;
  invalidReason: string | undefined;
  createInputMethods: (params: InputMethodsContext) => CommonInputMethods;
  createDropdownMethods: (params: DropdownMethodsContext) => DropdownMethods;
  createEventConfig: (params: EventConfig) => EventConfig;
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

export interface BasePickerState extends CommonInputAttributes {
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
    PickerContext,
    Omit<ValidationState, 'required'>,
    Omit<PickerEventState, 'onInput' | 'openDropdown'> {
  helperText?: string;
  isInvalid: boolean;
  infoText?: string;
  showTextAsTooltip?: boolean;
  suppressSubmitOnEnter: boolean;
  formInternals: ElementInternals;
  validityStateChange: EventEmitter<PickerInputValidityState>;
  invalidReason?: string;
  onInput: (value: string | undefined) => Promise<void>;
  beforeOpenDropdown?: () => void | Promise<void>;
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

export interface CreatePickerMethodsContext<Component> {
  component: Component;
}

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

export interface InputMethodsContext extends ValidationContext {
  inputElementRef: MakeRef<HTMLInputElement>;
  syncValidationClasses: () => void;
}

export interface DropdownMethodsContext extends EventHandlers {
  dropdownElementRef: MakeRef<HTMLIxDropdownElement>;
  hostElement: HTMLElement;
  show: boolean;
  touched: boolean;
  openDropdown: () => Promise<void>;
}

export type DropdownRef = MakeRef<HTMLIxDropdownElement>;
export type InputRef = MakeRef<HTMLInputElement>;

export type SlotProps = {
  slotRef: MakeRef<HTMLDivElement>;
  position: 'start' | 'end';
  onSlotChange?: (event: Event) => void;
};

export interface InputConfigBase extends CommonInputAttributes {
  slotStartRef: MakeRef<HTMLDivElement>;
  slotEndRef: MakeRef<HTMLDivElement>;
  updatePaddings: () => void;
  isInputInvalid: boolean;
  textAlignment?: 'start' | 'end';
  inputElementRef: MakeRef<HTMLInputElement>;
  placeholder?: string;
  name?: string;
  value?: string;
}

export interface RenderInputConfig extends InputConfigBase {
  value: string;
  iconButton: JSX.Element;
}

export interface InputEventHandlers {
  onInput: (event: Event) => void;
  onClick: (event: MouseEvent) => void;
  onFocus: (event: FocusEvent) => Promise<void>;
  onBlur: (event?: FocusEvent) => void;
  onKeyDown: (event: KeyboardEvent) => void;
}

export interface PickerComponentForRenderConfig {
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
  inputElementRef: InputRef;
  dropdownElementRef: DropdownRef;
  enableTopLayer?: boolean;
  show: boolean;
}
