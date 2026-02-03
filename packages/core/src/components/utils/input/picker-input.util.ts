/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { dropdownController } from '../../dropdown/dropdown-controller';

export async function openDropdown(dropdownElementRef: any) {
  const dropdownElement = await dropdownElementRef.waitForCurrent();
  const id = dropdownElement.dataset.ixDropdown;

  dropdownController.dismissAll();
  if (!id) {
    return;
  }

  const dropdown = dropdownController.getDropdownById(id);
  if (!dropdown) {
    return;
  }
  dropdownController.present(dropdown);
}

export async function closeDropdown(dropdownElementRef: any) {
  const dropdownElement = await dropdownElementRef.waitForCurrent();
  const id = dropdownElement.dataset.ixDropdown;

  if (!id) {
    return;
  }

  const dropdown = dropdownController.getDropdownById(id);
  if (!dropdown) {
    return;
  }
  dropdownController.dismiss(dropdown);
}

export function handleIconClick(
  event: Event,
  show: boolean,
  openDropdownFn: () => void,
  inputElementRef: any
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

export interface PickerInputMethods {
  getEventConfig: () => any;
  getCommonMethods: () => any;
  getDropdownMethods: () => any;
  handleInputKeyDown: (event: KeyboardEvent) => void;
  getValidityState: () => Promise<ValidityState>;
  hookValidationLifecycle: (results: any) => void;
  onInputValidationChange: () => Promise<void>;
}

export interface PickerComponentContext {
  show: boolean;
  touched: boolean;
  isInputInvalid: boolean;
  suppressValidation: boolean;
  required: boolean;
  value: string | undefined;
  suppressSubmitOnEnter: boolean;
  formInternals: ElementInternals;
  inputElementRef: any;
  dropdownElementRef: any;
  hostElement: HTMLElement;
  ixFocus: any;
  ixBlur: any;
  validityStateChange: any;
  invalidReason: string | undefined;
  setTouched: (touched: boolean) => void;
  setIsInvalid: (value: boolean) => void;
  setIsInfo: (value: boolean) => void;
  setIsValid: (value: boolean) => void;
  setIsWarning: (value: boolean) => void;
  syncValidationClasses: () => void;
  onInput: (value: string) => Promise<void>;
  openDropdown: () => Promise<void>;
}

export function createPickerMethodsGetter(
  context: PickerComponentContext,
  createInputMethods: any,
  createDropdownMethods: any,
  createEventConfig: any,
  createKeyDownHandler: any,
  handleValidationLifecycle: any
): () => PickerInputMethods {
  let cachedMethods: PickerInputMethods | null = null;

  return () => {
    if (cachedMethods) return cachedMethods;

    cachedMethods = createPickerInputMethods({
      component: null,
      show: context.show,
      touched: context.touched,
      isInputInvalid: context.isInputInvalid,
      suppressValidation: context.suppressValidation,
      required: context.required,
      value: context.value,
      suppressSubmitOnEnter: context.suppressSubmitOnEnter,
      formInternals: context.formInternals,
      inputElementRef: context.inputElementRef,
      dropdownElementRef: context.dropdownElementRef,
      hostElement: context.hostElement,
      openDropdown: context.openDropdown,
      ixFocus: context.ixFocus,
      ixBlur: context.ixBlur,
      syncValidationClasses: context.syncValidationClasses,
      onInput: context.onInput,
      setTouched: context.setTouched,
      setIsInvalid: context.setIsInvalid,
      setIsInfo: context.setIsInfo,
      setIsValid: context.setIsValid,
      setIsWarning: context.setIsWarning,
      validityStateChange: context.validityStateChange,
      invalidReason: context.invalidReason,
      createInputMethods,
      createDropdownMethods,
      createEventConfig,
      createKeyDownHandler,
      handleValidationLifecycle,
    });

    return cachedMethods;
  };
}

export interface RenderInputConfig {
  eventConfig: any;
  slotStartRef: any;
  slotEndRef: any;
  updatePaddings: () => void;
  isInputInvalid: boolean;
  textAlignment?: 'start' | 'end';
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  inputElementRef: any;
  value: string;
  placeholder?: string;
  name?: string;
  onInput: (config: any) => (event: Event) => void;
  onClick: (config: any) => (event: MouseEvent) => void;
  onFocus: (config: any) => (event: FocusEvent) => void;
  onBlur: (config: any) => (event: FocusEvent) => void;
  onKeyDown: (config: any) => (event: KeyboardEvent) => void;
  iconButton: any;
}

export function createRenderPickerInput(h: any, SlotStart: any, SlotEnd: any) {
  return (config: RenderInputConfig) => {
    return h(
      'div',
      { class: 'input-wrapper' },
      h(SlotStart, {
        slotStartRef: config.slotStartRef,
        onSlotChange: config.updatePaddings,
      }),
      h('input', {
        autoComplete: 'off',
        class: {
          'is-invalid': config.isInputInvalid,
        },
        style: {
          textAlign: config.textAlignment,
        },
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
        config.iconButton
      )
    );
  };
}

export function createPickerInputMethods<T>(config: {
  component: T;
  show: boolean;
  touched: boolean;
  isInputInvalid: boolean;
  suppressValidation: boolean;
  required: boolean;
  value: string | undefined;
  suppressSubmitOnEnter: boolean;
  formInternals: ElementInternals;
  inputElementRef: any;
  dropdownElementRef: any;
  hostElement: HTMLElement;
  openDropdown: () => Promise<void>;
  ixFocus: any;
  ixBlur: any;
  syncValidationClasses: () => void;
  onInput: (value: string) => Promise<void>;
  setTouched: (touched: boolean) => void;
  setIsInvalid: (value: boolean) => void;
  setIsInfo: (value: boolean) => void;
  setIsValid: (value: boolean) => void;
  setIsWarning: (value: boolean) => void;
  validityStateChange: any;
  invalidReason: string | undefined;
  createInputMethods: (params: any) => any;
  createDropdownMethods: (params: any) => any;
  createEventConfig: (params: any) => any;
  createKeyDownHandler: (suppressSubmitOnEnter: boolean, formInternals: ElementInternals) => (event: KeyboardEvent) => void;
  handleValidationLifecycle: (suppressValidation: boolean, shouldShowInvalid: boolean, results: any, setters: any) => void;
}): PickerInputMethods {
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
        handleInputKeyDown: (event: KeyboardEvent) =>
          config.createKeyDownHandler(config.suppressSubmitOnEnter, config.formInternals)(event),
        alwaysSetTouchedOnBlur: true,
      });
    },

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
        handleInputKeyDown: (event: KeyboardEvent) =>
          config.createKeyDownHandler(config.suppressSubmitOnEnter, config.formInternals)(event),
      });
    },

    handleInputKeyDown: (event: KeyboardEvent) => {
      return config.createKeyDownHandler(config.suppressSubmitOnEnter, config.formInternals)(event);
    },

    getValidityState: () => {
      return Promise.resolve(
        createValidityState(config.isInputInvalid, !!config.required, config.value)
      );
    },

    hookValidationLifecycle: (results: any) => {
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
      );
    },

    onInputValidationChange: async () => {
      const state = createValidityState(config.isInputInvalid, !!config.required, config.value);
      config.validityStateChange.emit({
        patternMismatch: state.patternMismatch,
        invalidReason: config.invalidReason,
      });
    },
  };
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
  inputRef: any;
  input: any;
  dropdown: any;
  testId: string;
  trigger: () => Promise<HTMLElement>;
  dropdownRef: any;
  enableTopLayer?: boolean;
  show: boolean;
  onShow: (event: any) => void;
}

export function createPickerRenderConfig(
  component: any,
  input: any,
  dropdown: any,
  testId: string
): PickerRenderConfig {
  return {
    host: component.hostElement,
    disabled: component.disabled,
    readonly: component.readonly,
    label: component.label,
    helper: component.helperText,
    invalid: component.isInvalid,
    invalidText: '', // Set by caller
    info: component.infoText,
    isInfo: component.isInfo,
    warning: component.isWarning,
    warningText: component.warningText,
    valid: component.isValid,
    validText: component.validText,
    tooltip: component.showTextAsTooltip,
    required: component.required,
    inputRef: component.inputElementRef,
    input,
    dropdown,
    testId,
    trigger: () => component.inputElementRef.waitForCurrent(),
    dropdownRef: component.dropdownElementRef,
    enableTopLayer: component.enableTopLayer,
    show: component.show,
    onShow: (event) => {
      component.show = event.detail;
    },
  };
}

export interface PickerInputConfigParams {
  component: any;
  getEventConfig: () => any;
  onInput: any;
  onClick: any;
  onFocus: any;
  onBlur: any;
  onKeyDown: any;
  iconButton: any;
  value?: string;
}

export function createPickerInputConfig(
  params: PickerInputConfigParams
): RenderInputConfig {
  const { component, getEventConfig, onInput, onClick, onFocus, onBlur, onKeyDown, iconButton, value } = params;
  return {
    eventConfig: getEventConfig(),
    slotStartRef: component.slotStartRef,
    slotEndRef: component.slotEndRef,
    updatePaddings: () => component.updatePaddings(),
    isInputInvalid: component.isInputInvalid,
    textAlignment: component.textAlignment,
    disabled: component.disabled,
    readonly: component.readonly,
    required: component.required,
    inputElementRef: component.inputElementRef,
    value: value ?? component.value ?? '',
    placeholder: component.placeholder,
    name: component.name,
    onInput,
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    iconButton,
  };
}
