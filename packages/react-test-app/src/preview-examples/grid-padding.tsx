/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles-auto-gen/grid.css';

import { IxCol, IxLayoutGrid, IxRow, IxTypography } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <div className="grid">
      <h4>Grid with margin</h4>
      <IxLayoutGrid>
        <IxRow>
          <IxCol>
            <IxTypography format="display">1</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">2</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">3</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">4</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">5</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">6</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">7</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">8</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">9</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">10</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">11</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">12</IxTypography>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>

      <h4>Grid without margin</h4>
      <IxLayoutGrid noMargin>
        <IxRow>
          <IxCol>
            <IxTypography format="display">1</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">2</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">3</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">4</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">5</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">6</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">7</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">8</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">9</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">10</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">11</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">12</IxTypography>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>
    </div>
  );
};
