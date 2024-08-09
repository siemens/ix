/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCol, IxLayoutGrid, IxPill, IxRow } from '@siemens/ix-react';
import { CSSProperties } from 'react';

export default () => {
  const styled: CSSProperties = {
    minWidth: '7rem',
  };

  return (
    <>
      <IxLayoutGrid>
        <IxRow>
          <IxCol>
            <IxPill variant="primary" icon="info" style={styled}>
              Primary
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="primary" icon="info" outline style={styled}>
              Primary
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="alarm" icon="info" style={styled}>
              Alarm
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="alarm" icon="info" outline style={styled}>
              Alarm
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="critical" icon="info" style={styled}>
              Critical
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="critical" icon="info" outline style={styled}>
              Critical
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="warning" icon="info" style={styled}>
              Warning
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="warning" icon="info" outline style={styled}>
              Warning
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="success" icon="info" style={styled}>
              Success
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="success" icon="info" outline style={styled}>
              Success
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="info" icon="info" style={styled}>
              Info
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="info" icon="info" outline style={styled}>
              Info
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="neutral" icon="info" style={styled}>
              Neutral
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="neutral" icon="info" outline style={styled}>
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
              style={styled}
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
              style={styled}
            >
              Custom
            </IxPill>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>
    </>
  );
};
