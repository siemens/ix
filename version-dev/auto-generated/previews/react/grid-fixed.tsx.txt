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
      <h5>fixed: sm</h5>
      <IxGrid fixed="fixed-sm" className={'ExampleGrid'}>
        <IxRow>
          <IxCol>1</IxCol>
          <IxCol>2</IxCol>
          <IxCol>3</IxCol>
          <IxCol>4</IxCol>
          <IxCol>5</IxCol>
          <IxCol>6</IxCol>
        </IxRow>
      </IxGrid>

      <h5>fixed</h5>
      <IxGrid fixed className={'ExampleGrid'}>
        <IxRow>
          <IxCol>1</IxCol>
          <IxCol>2</IxCol>
          <IxCol>3</IxCol>
          <IxCol>4</IxCol>
          <IxCol>5</IxCol>
          <IxCol>6</IxCol>
        </IxRow>
      </IxGrid>

      <h5>fixed: md</h5>
      <IxGrid fixed="fixed-md" className={'ExampleGrid'}>
        <IxRow>
          <IxCol>1</IxCol>
          <IxCol>2</IxCol>
          <IxCol>3</IxCol>
          <IxCol>4</IxCol>
          <IxCol>5</IxCol>
          <IxCol>6</IxCol>
        </IxRow>
      </IxGrid>

      <h5>fixed: lg</h5>
      <IxGrid fixed="fixed-lg" className={'ExampleGrid'}>
        <IxRow>
          <IxCol>1</IxCol>
          <IxCol>2</IxCol>
          <IxCol>3</IxCol>
          <IxCol>4</IxCol>
          <IxCol>5</IxCol>
          <IxCol>6</IxCol>
        </IxRow>
      </IxGrid>
    </>
  );
};
