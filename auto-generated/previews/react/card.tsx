/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './card.css';

import { IxCard, IxCardContent, IxIcon, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <IxCard variant="insight" onClick={console.log}>
      <IxCardContent>
        <IxIcon name="capacity"></IxIcon>
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
