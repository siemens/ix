/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles/icon-button.css';

import { IxIconButton } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <div>
        <IxIconButton icon="info" variant="primary"></IxIconButton>
        <IxIconButton icon="info"></IxIconButton>
        <IxIconButton icon="info" variant="danger"></IxIconButton>
        <IxIconButton icon="info" outline></IxIconButton>
        <IxIconButton icon="info" ghost></IxIconButton>
      </div>

      <div>
        <IxIconButton icon="info" oval variant="primary"></IxIconButton>
        <IxIconButton icon="info" oval></IxIconButton>
        <IxIconButton icon="info" oval variant="danger"></IxIconButton>
        <IxIconButton icon="info" oval outline></IxIconButton>
        <IxIconButton icon="info" oval ghost></IxIconButton>
      </div>

      <div>
        <IxIconButton icon="info" size="12"></IxIconButton>
        <IxIconButton icon="info" size="16"></IxIconButton>
        <IxIconButton icon="info" size="24"></IxIconButton>
        <IxIconButton icon="info" size="32"></IxIconButton>
      </div>
    </>
  );
};
