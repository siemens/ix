// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { IxPill } from '@siemens/ix-react';
import React, { CSSProperties } from 'react';

export const Pill: React.FC = () => {
  const styled: CSSProperties = {
    width: '8rem',
  };

  return (
    <>
      <IxPill variant="custom" color="white" background="purple">
        Label
      </IxPill>

      <IxPill>Label</IxPill>
      <IxPill outline>Label</IxPill>
      <IxPill style={styled}>Label</IxPill>

      <IxPill icon="star">Label</IxPill>
      <IxPill icon="star" style={styled}>
        Label
      </IxPill>
      <IxPill outline alignLeft icon="star" style={styled}>
        Label
      </IxPill>

      <IxPill variant="alarm">Label</IxPill>
      <IxPill variant="alarm" outline>
        Label
      </IxPill>
      <IxPill variant="alarm" style={styled}>
        Label
      </IxPill>

      <IxPill variant="alarm" icon="star">
        Label
      </IxPill>
      <IxPill variant="alarm" icon="star" style={styled}>
        Label
      </IxPill>
      <IxPill variant="alarm" outline alignLeft icon="star" style={styled}>
        Label
      </IxPill>
    </>
  );
};
