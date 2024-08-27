/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles/pill.css';

import { IxPill } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxPill variant="custom" color="white" background="purple">
        Label
      </IxPill>

      <IxPill>Label</IxPill>
      <IxPill outline>Label</IxPill>
      <IxPill className="styled">Label</IxPill>

      <IxPill icon="star">Label</IxPill>
      <IxPill icon="star" className="styled">
        Label
      </IxPill>
      <IxPill outline alignLeft icon="star" className="styled">
        Label
      </IxPill>

      <IxPill variant="alarm">Label</IxPill>
      <IxPill variant="alarm" outline>
        Label
      </IxPill>
      <IxPill variant="alarm" className="styled">
        Label
      </IxPill>

      <IxPill variant="alarm" icon="star">
        Label
      </IxPill>
      <IxPill variant="alarm" icon="star" className="styled">
        Label
      </IxPill>
      <IxPill variant="alarm" outline alignLeft icon="star" className="styled">
        Label
      </IxPill>
    </>
  );
};
