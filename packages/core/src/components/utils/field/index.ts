/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { EventEmitter } from '@stencil/core';
import { IxComponent } from '../internal';

export interface HelperTextWrapper {
  helperText: string;
  label: string;
}

/*
TODO
Missing to expose all native input attributes
*/
export interface IxFieldComponent<T = any>
  extends IxComponent,
    HelperTextWrapper {
  /**
   * Add `@Prop({ reflect: true })` to the `name` prop
   */
  name: string;

  /**
   * @Prop declaration to handle internal Attach element
   */
  placeholder: string;

  /**
   * @Prop declaration to handle internal Attach element
   */
  value: T;

  /**
   * @Prop declaration to handle internal Attach element
   */
  isInvalid: boolean;

  /**
   * @Prop declaration to handle internal Attach element
   */
  required: boolean;

  valueChanged: EventEmitter<T>;
  formInternals: ElementInternals;

  updateFormInternalValue(value: T): void;

  componentWillLoad(): void;
}
