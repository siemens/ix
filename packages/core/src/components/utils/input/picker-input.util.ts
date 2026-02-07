/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FunctionalComponent, JSX } from '@stencil/core';
import { dropdownController } from '../../dropdown/dropdown-controller';
import type {
  DropdownRef,
  InputRef,
  SlotProps,
  InputConfigBase,
  RenderInputConfig,
  InputEventHandlers,
  PickerRenderConfig,
  PickerComponentForRenderConfig,
} from './picker-input.types';

type StencilHFn = <P>(
  tag: string | FunctionalComponent<P>,
  props: P | null,
  children?: JSX.Element[]
) => JSX.Element;

type InputRenderer = (
  config: RenderInputConfig,
  handlers: InputEventHandlers
) => JSX.Element;

async function getDropdownElement(
  ref: DropdownRef
): Promise<HTMLIxDropdownElement | null> {
  if (ref.current) {
    return ref.current;
  }

  return await ref.waitForCurrent();
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

export async function handleIconClick(
  event: Event,
  show: boolean,
  openDropdownFn: () => void | Promise<void>,
  inputElementRef: InputRef
) {
  if (show) {
    inputElementRef.current?.focus();
    return;
  }

  event.stopPropagation();
  event.preventDefault();
  try {
    await openDropdownFn();
  } finally {
    inputElementRef.current?.focus();
  }
}

export async function openDropdown(dropdownElementRef: DropdownRef) {
  const dropdownElement = await getDropdownElement(dropdownElementRef);
  const id = dropdownElement?.dataset.ixDropdown;
  if (!id) return;

  dropdownController.dismissAll();

  const dropdown = dropdownController.getDropdownById(id);
  if (dropdown) {
    dropdownController.present(dropdown);
  }
}

export async function closeDropdown(dropdownElementRef: DropdownRef) {
  const dropdownElement = await getDropdownElement(dropdownElementRef);
  const id = dropdownElement?.dataset.ixDropdown;
  if (!id) return;

  const dropdown = dropdownController.getDropdownById(id);
  if (dropdown) {
    dropdownController.dismiss(dropdown);
  }
}

export function createInputRenderer(
  h: StencilHFn,
  Slot: FunctionalComponent<SlotProps>
): InputRenderer {
  return (config: RenderInputConfig, handlers: InputEventHandlers) => {
    return h('div', { class: 'input-wrapper' }, [
      h(Slot, {
        slotRef: config.slotStartRef,
        position: 'start',
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
        ...handlers,
      }),
      h(
        Slot,
        {
          slotRef: config.slotEndRef,
          position: 'end',
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
  const picker = component as PickerComponentForRenderConfig;
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
  component: Component,
  iconButton: JSX.Element,
  value?: string
): RenderInputConfig {
  const inputComponent = component as InputConfigBase;
  return {
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
    iconButton,
  };
}
