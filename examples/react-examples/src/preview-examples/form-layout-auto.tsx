/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  IxButton,
  IxFieldLabel,
  IxInput,
  IxLayoutAuto,
  IxSelect,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxLayoutAuto>
      <IxFieldLabel htmlFor="my-select-1">Example</IxFieldLabel>
      <IxSelect id="my-select-1"></IxSelect>
      <IxFieldLabel htmlFor="my-select-2">Example</IxFieldLabel>
      <IxInput id="my-select-2"></IxInput>
      <IxButton data-colspan="2">Submit</IxButton>
    </IxLayoutAuto>
  );
};
