/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIconButton } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <div>
        <IxIconButton class="m-1" icon="info" variant="primary"></IxIconButton>
        <IxIconButton
          class="m-1"
          icon="info"
          variant="secondary"
        ></IxIconButton>
        <IxIconButton class="m-1" icon="info" outline></IxIconButton>
        <IxIconButton class="m-1" icon="info" ghost></IxIconButton>
      </div>

      <div>
        <IxIconButton
          class="m-1"
          icon="info"
          oval
          variant="primary"
        ></IxIconButton>
        <IxIconButton
          class="m-1"
          icon="info"
          oval
          variant="secondary"
        ></IxIconButton>
        <IxIconButton class="m-1" icon="info" oval outline></IxIconButton>
        <IxIconButton class="m-1" icon="info" oval ghost></IxIconButton>
      </div>

      <div>
        <IxIconButton class="m-1" icon="info" size="12"></IxIconButton>
        <IxIconButton class="m-1" icon="info" size="16"></IxIconButton>
        <IxIconButton class="m-1" icon="info" size="24"></IxIconButton>
        <IxIconButton class="m-1" icon="info" size="32"></IxIconButton>
      </div>
    </>
  );
};
