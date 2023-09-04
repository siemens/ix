/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCol, IxGrid, IxRow } from '@siemens/ix-react';
import React from 'react';
// Example styling for documentation
import './grid.css';

export default () => {
  return (
    <>
      <h4>Column 6 takes up more space to a max of 12 columns total</h4>
      <IxGrid>
        <IxRow>
          <IxCol>1</IxCol>
          <IxCol>2</IxCol>
          <IxCol>3</IxCol>
          <IxCol>4</IxCol>
          <IxCol>5</IxCol>
          <IxCol size="6">6</IxCol>
        </IxRow>
      </IxGrid>

      <h4>Stack columns on smaller screens</h4>
      <IxGrid>
        <IxRow>
          <IxCol size="12" size-md="3">
            1
          </IxCol>
          <IxCol size="12" size-md="3">
            2
          </IxCol>
          <IxCol size="12" size-md="3">
            3
          </IxCol>
          <IxCol size="12" size-md="3">
            4
          </IxCol>
        </IxRow>
      </IxGrid>
    </>
  );
};
