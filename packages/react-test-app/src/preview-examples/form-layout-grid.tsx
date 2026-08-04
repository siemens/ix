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
  IxCol,
  IxFieldLabel,
  IxInput,
  IxLayoutGrid,
  IxRow,
  IxSelect,
} from '@siemens/ix-react';

import './form-layout-grid.scoped.css';

export default () => {
  return (
    <IxLayoutGrid className="layout-grid-example">
      <IxRow>
        <IxCol size="2" size-sm="12">
          <IxFieldLabel htmlFor="my-select-1">Example</IxFieldLabel>
        </IxCol>
        <IxCol>
          <IxSelect id="my-select-1"></IxSelect>
        </IxCol>
      </IxRow>
      <IxRow>
        <IxCol size="2" size-sm="12">
          <IxFieldLabel htmlFor="my-select-2">Example</IxFieldLabel>
        </IxCol>
        <IxCol>
          <IxInput id="my-select-2"></IxInput>
        </IxCol>
      </IxRow>
      <IxRow>
        <IxCol size="12" size-sm="12">
          <IxButton data-colspan="2">Submit</IxButton>
        </IxCol>
      </IxRow>
    </IxLayoutGrid>
  );
};
