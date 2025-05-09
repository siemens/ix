/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconStar } from '@siemens/ix-icons/icons';
import './pill.scoped.css';

import { IxPill } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxPill variant="custom" color="white" background="purple">
        Label
      </IxPill>

      <IxPill tooltipText="Custom tooltip text">Label</IxPill>
      <IxPill tooltipText outline>
        Label
      </IxPill>
      <IxPill className="styled">Label</IxPill>

      <IxPill icon={iconStar}>Label</IxPill>
      <IxPill icon={iconStar}></IxPill>
      <IxPill icon={iconStar} className="styled">
        Label
      </IxPill>
      <IxPill outline alignLeft icon={iconStar} className="styled">
        Label
      </IxPill>

      <IxPill variant="alarm">Label</IxPill>
      <IxPill variant="alarm" outline>
        Label
      </IxPill>
      <IxPill variant="alarm" className="styled">
        Label
      </IxPill>

      <IxPill variant="alarm" icon={iconStar}>
        Label
      </IxPill>
      <IxPill variant="alarm" icon={iconStar} className="styled">
        Label
      </IxPill>
      <IxPill
        variant="alarm"
        outline
        alignLeft
        icon={iconStar}
        className="styled"
      >
        Label
      </IxPill>

      <IxPill icon={iconStar} className="styled-ellipsis-4">
        Label
      </IxPill>
      <IxPill outline icon={iconStar} className="styled-ellipsis-4">
        Label
      </IxPill>
      <IxPill className="styled-ellipsis-3">Label</IxPill>
      <IxPill outline className="styled-ellipsis-3">
        Label
      </IxPill>
    </>
  );
};
