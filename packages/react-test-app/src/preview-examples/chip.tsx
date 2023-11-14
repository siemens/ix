/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxChip } from '@siemens/ix-react';
import React, { CSSProperties } from 'react';

export default () => {
  const example: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    maxWidth: '20rem',
  };
  const ixChip: CSSProperties = {
    marginBottom: '0.5rem',
  };
  return (
    <div style={example}>
      <IxChip style={ixChip} closable outline>
        Primary
      </IxChip>
      <IxChip icon="print" style={ixChip}>
        Primary with icon
      </IxChip>
      <IxChip icon="print" style={{ width: '10rem', ...ixChip }} closable>
        Primary
      </IxChip>

      <IxChip variant="critical" style={ixChip} closable outline>
        Alarm
      </IxChip>
      <IxChip variant="alarm" icon="print" style={ixChip}>
        Alarm with icon
      </IxChip>
      <IxChip
        variant="alarm"
        icon="print"
        style={{ width: '10rem', ...ixChip }}
        closable
      >
        Alarm
      </IxChip>
      <IxChip
        variant="warning"
        icon="print"
        style={{ width: '10rem', ...ixChip }}
        closable
      >
        Alarm
      </IxChip>
      <IxChip
        background="purple"
        color="green"
        variant="custom"
        icon="print"
        style={{ width: '10rem', ...ixChip }}
        closable
      >
        Custom
      </IxChip>
    </div>
  );
};
