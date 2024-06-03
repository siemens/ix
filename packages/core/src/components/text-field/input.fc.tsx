/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { MakeRef } from '../utils/make-ref';

export function TextareaElement(props: {
  disabled: boolean;
  readonly: boolean;
  maxLength?: number;
  minLength?: number;
  isInvalid: boolean;
  required: boolean;
  value: string;
  placeholder: string;
  textAreaRef: (el: HTMLTextAreaElement) => void;
  valueChange: (value: string) => void;
  updateFormInternalValue: (value: string) => void;
  onBlur: () => void;
}) {
  return (
    <textarea
      readOnly={props.readonly}
      disabled={props.disabled}
      maxLength={props.maxLength}
      minLength={props.minLength}
      ref={props.textAreaRef}
      class={{
        'is-invalid': props.isInvalid,
      }}
      required={props.required}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(changeEvent) => {
        const target = changeEvent.target as HTMLInputElement;
        props.valueChange(target.value);
      }}
      onInput={(inputEvent) => {
        const target = inputEvent.target as HTMLInputElement;
        props.updateFormInternalValue(target.value);
      }}
      onBlur={() => props.onBlur()}
    ></textarea>
  );
}

export function InputElement(props: {
  disabled: boolean;
  readonly: boolean;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  pattern: string;
  type: string;
  isInvalid: boolean;
  required: boolean;
  value: string;
  placeholder: string;
  inputRef: (el: HTMLInputElement) => void;
  onKeyPress: (event: KeyboardEvent) => void;
  valueChange: (value: string) => void;
  updateFormInternalValue: (value: string) => void;
  onBlur: () => void;
}) {
  return (
    <input
      readOnly={props.readonly}
      disabled={props.disabled}
      min={props.min}
      max={props.max}
      maxLength={props.maxLength}
      minLength={props.minLength}
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
      onChange={(changeEvent) => {
        const target = changeEvent.target as HTMLInputElement;
        props.valueChange(target.value);
      }}
      onInput={(inputEvent) => {
        const target = inputEvent.target as HTMLInputElement;
        props.updateFormInternalValue(target.value);
      }}
      onBlur={() => props.onBlur()}
    ></input>
  );
}

export function PostfixSlot(
  props: { postfixRef: MakeRef<HTMLDivElement> },
  children
) {
  return (
    <div class="postfix-container" ref={props.postfixRef}>
      <slot name="postfix"></slot>
      {children}
    </div>
  );
}

export function PrefixSlot(props: { prefixRef: MakeRef<HTMLDivElement> }) {
  return (
    <div class="prefix-container" ref={props.prefixRef}>
      <slot name="prefix"></slot>
    </div>
  );
}
