/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, FunctionalComponent } from '@stencil/core';
import { MakeRef } from '../utils/make-ref';
import { A11yAttributes } from '../utils/a11y';

export function TextareaElement(
  props: Readonly<{
    resizeBehavior: 'both' | 'horizontal' | 'vertical' | 'none';
    textareaHeight?: string;
    textareaWidth?: string;
    textareaRows?: number;
    textareaCols?: number;
    disabled: boolean;
    readonly: boolean;
    maxLength?: number;
    minLength?: number;
    isInvalid: boolean;
    required: boolean;
    value: string;
    placeholder?: string;
    textAreaRef: (el: HTMLTextAreaElement | undefined) => void;
    valueChange: (value: string) => void;
    updateFormInternalValue: (value: string) => void;
    onBlur: () => void;
    ariaAttributes?: A11yAttributes;
    onChange: () => void;
  }>
) {
  return (
    <textarea
      readOnly={props.readonly}
      disabled={props.disabled}
      maxLength={props.maxLength}
      minLength={props.minLength}
      cols={props.textareaCols}
      rows={props.textareaRows}
      ref={props.textAreaRef}
      class={{
        'is-invalid': props.isInvalid,
      }}
      required={props.required}
      value={props.value}
      placeholder={props.placeholder}
      onInput={(inputEvent) => {
        const target = inputEvent.target as HTMLInputElement;
        props.updateFormInternalValue(target.value);
        props.valueChange(target.value);
      }}
      onBlur={() => props.onBlur()}
      style={{
        resize: props.resizeBehavior,
        height: props.textareaHeight,
        width: props.textareaWidth,
      }}
      {...props.ariaAttributes}
      onChange={() => props.onChange()}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          props.onChange();
        }
      }}
    ></textarea>
  );
}

export function InputElement(
  props: Readonly<{
    id: string;
    disabled: boolean;
    readonly: boolean;
    maxLength?: string | number;
    minLength?: string | number;
    max?: string | number;
    min?: string | number;
    step?: string | number;
    pattern?: string;
    type: string;
    isInvalid: boolean;
    required: boolean;
    value: string | number;
    placeholder?: string;
    inputRef: (el: HTMLInputElement | undefined) => void;
    onKeyPress: (event: KeyboardEvent) => void;
    valueChange: (value: string) => void;
    updateFormInternalValue: (value: string) => void;
    onBlur: () => void;
    ariaAttributes?: A11yAttributes;
    onChange: () => void;
  }>
) {
  return (
    <input
      id={props.id}
      autoComplete="off"
      readOnly={props.readonly}
      disabled={props.disabled}
      step={props.step}
      min={props.min}
      max={props.max}
      maxLength={props.maxLength ? Number(props.maxLength) : undefined}
      minLength={props.minLength ? Number(props.minLength) : undefined}
      ref={props.inputRef}
      pattern={props.pattern}
      type={props.type}
      class={{
        'is-invalid': props.isInvalid,
      }}
      required={props.required}
      value={props.value}
      placeholder={props.placeholder}
      onKeyPress={(event) => props.onKeyPress(event)}
      onInput={(inputEvent) => {
        const target = inputEvent.target as HTMLInputElement;
        props.updateFormInternalValue(target.value);
        props.valueChange(target.value);
      }}
      onBlur={() => props.onBlur()}
      {...props.ariaAttributes}
      onChange={() => props.onChange()}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          props.onChange();
        }
      }}
    ></input>
  );
}

export const SlotEnd: FunctionalComponent<{
  slotEndRef: MakeRef<HTMLDivElement>;
  onSlotChange?: (e: Event) => void;
}> = (props, children) => {
  return (
    <div class="end-container" ref={props.slotEndRef}>
      <slot name="end" onSlotchange={props.onSlotChange}></slot>
      {children}
    </div>
  );
};

export const SlotStart: FunctionalComponent<{
  slotStartRef: MakeRef<HTMLDivElement>;
  onSlotChange?: (e: Event) => void;
}> = (props) => {
  return (
    <div class="start-container" ref={props.slotStartRef}>
      <slot name="start" onSlotchange={props.onSlotChange}></slot>
    </div>
  );
};
