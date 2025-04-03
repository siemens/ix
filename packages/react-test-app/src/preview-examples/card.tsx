/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './card.scoped.css';

import { IxCard, IxCardContent, IxIcon, IxTypography } from '@siemens/ix-react';
import { iconCapacity } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxCard variant="outline" onClick={console.log}>
      <IxCardContent>
        <IxIcon name={iconCapacity}></IxIcon>
        <IxTypography bold>Number of components</IxTypography>
        <IxTypography>
          Vanilla JavaScript
          <br />
          Angular
          <br />
          Blazor
          <br />
          React
          <br />
          Vue.js
        </IxTypography>
        <IxTypography format="h1">123</IxTypography>
      </IxCardContent>
    </IxCard>
  );
};
