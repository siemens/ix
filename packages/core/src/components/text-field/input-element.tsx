/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxFieldComponent } from '../utils/field';
import { h } from '@stencil/core';

/*
TODO
Build more generic input element. Does currently not cover all ix field components.
*/
export function InputElement(props: { field: IxFieldComponent; type: string }) {
  return (
    <input
      class={{
        'is-invalid': props.field.isInvalid,
      }}
      type={props.type}
      required={props.field.required}
      value={props.field.value}
      placeholder={props.field.placeholder}
      onChange={(changeEvent) => {
        const target = changeEvent.target as HTMLInputElement;
        props.field.valueChange.emit(target.value);
      }}
      onInput={(inputEvent) => {
        const target = inputEvent.target as HTMLInputElement;
        props.field.updateFormInternalValue(target.value);
      }}
    ></input>
  );
}
