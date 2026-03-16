/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Method, MixedInCtor } from '@stencil/core';
import { StencilLifecycle } from '../../component';
import { MakeRef } from './../../../../utils/make-ref';
import { dropdownController } from './../../../../dropdown/dropdown-controller';

export interface InputPickerMixinContract {
  getPickerElement(): MakeRef<HTMLIxDropdownElement> | null;
  openPicker?(): Promise<void>;
}

export const InputPickerMixin = <B extends MixedInCtor<StencilLifecycle>>(
  Base: B
) => {
  abstract class InputPickerMixinCtor
    extends Base
    implements InputPickerMixinContract
  {
    abstract getPickerElement(): MakeRef<HTMLIxDropdownElement> | null;

    @Method()
    async openPicker(): Promise<void> {
      const pickerRef = this.getPickerElement();
      const pickerElement = await pickerRef?.waitForCurrent();

      if (!pickerElement) {
        return;
      }

      dropdownController.dismissAll();

      requestAnimationFrame(() => {
        pickerElement.show = true;
      });
    }
  }

  return InputPickerMixinCtor;
};
