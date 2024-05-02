/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCard, IxCardContent, IxIcon, IxTypography } from '@siemens/ix-react';
import React from 'react';
import './styles/card.css';
import { IxCardTitle } from '@siemens/ix-react';

export default () => {
  return (
    <div className="card-example">
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
      <IxCard variant="insight" onClick={console.log}>
        <IxCardContent>
          <IxCardTitle>
            <IxIcon
              style={{ transform: 'scale(1.25)' }}
              name="bulb"
              size="32"
            ></IxIcon>
            <span style={{ fontSize: '2.5rem' }}>99</span>
          </IxCardTitle>
          <IxTypography color="std">Subheading</IxTypography>
        </IxCardContent>
      </IxCard>
    </div>
  );
};
