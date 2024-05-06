/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'example-styles/dist/pill-variants.css';

import { IxCol, IxLayoutGrid, IxPill, IxRow } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxLayoutGrid>
        <IxRow>
          <IxCol>
            <IxPill variant="primary" icon="info">
              Primary
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="primary" icon="info" outline>
              Primary
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="alarm" icon="info">
              Alarm
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="alarm" icon="info" outline>
              Alarm
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="critical" icon="info">
              Critical
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="critical" icon="info" outline>
              Critical
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="warning" icon="info">
              Warning
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="warning" icon="info" outline>
              Warning
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="success" icon="info">
              Success
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="success" icon="info" outline>
              Success
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="info" icon="info">
              Info
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="info" icon="info" outline>
              Info
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="neutral" icon="info">
              Neutral
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="neutral" icon="info" outline>
              Neutral
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill
              variant="custom"
              color="color-soft-text"
              background="purple"
              icon="info"
            >
              Custom
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill
              variant="custom"
              color="color-soft-text"
              background="purple"
              icon="info"
              outline
            >
              Custom
            </IxPill>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>
    </>
  );
};
