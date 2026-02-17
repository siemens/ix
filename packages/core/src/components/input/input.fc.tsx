/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FunctionalComponent, h } from '@stencil/core';
import { A11yAttributes } from '../utils/a11y';
import { handleSubmitOnEnterKeydown } from './input.util';
import { MakeRef } from '../utils/make-ref';

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
    onFocus?: () => void;
    valueChange: (value: string) => void;
    updateFormInternalValue: (value: string) => void;
    onBlur: () => void;
    ariaAttributes?: A11yAttributes;
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
      onFocus={() => props.onFocus?.()}
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
    textAlignment?: 'start' | 'end';
    inputRef: (el: HTMLInputElement | undefined) => void;
    onKeyPress: (event: KeyboardEvent) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    onBeforeInput?: (event: InputEvent) => void;
    onPaste?: (event: ClipboardEvent) => void;
    onFocus?: () => void;
    onEnterKeyChange?: (event: KeyboardEvent) => void;
    valueChange: (value: string) => void;
    updateFormInternalValue: (value: string) => void;
    onBlur: () => void;
    ariaAttributes?: A11yAttributes;
    form?: HTMLFormElement;
    suppressSubmitOnEnter?: boolean;
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
      style={{
        textAlign: props.textAlignment,
      }}
      required={props.required}
      value={props.value}
      placeholder={props.placeholder}
      onKeyPress={(event) => props.onKeyPress(event)}
      onKeyDown={(e) => {
        props.onKeyDown?.(e);
        props.onEnterKeyChange?.(e);
        handleSubmitOnEnterKeydown(
          e,
          !!props.suppressSubmitOnEnter,
          props.form
        );
      }}
      {...({
        onBeforeInput: (event: InputEvent) => props.onBeforeInput?.(event),
      } as any)}
      onPaste={(event) => props.onPaste?.(event)}
      onFocus={() => props.onFocus?.()}
      onInput={(inputEvent) => {
        const target = inputEvent.target as HTMLInputElement;
        props.updateFormInternalValue(target.value);
        props.valueChange(target.value);
      }}
      onBlur={() => props.onBlur()}
      {...props.ariaAttributes}
    ></input>
  );
}

export const Slot: FunctionalComponent<{
  slotRef: MakeRef<HTMLDivElement>;
  position: 'start' | 'end';
  onSlotChange?: (e: Event) => void;
}> = (props, children) => {
  const className =
    props.position === 'start' ? 'start-container' : 'end-container';
  const slotName = props.position;

  return (
    <div class={className} ref={props.slotRef}>
      <slot name={slotName} onSlotchange={props.onSlotChange}></slot>
      {children}
    </div>
  );
};
