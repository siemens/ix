/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconPrint } from '@siemens/ix-icons/icons';
import './chip.scoped.css';

import { IxChip } from '@siemens/ix-react';

export default () => {
  return (
    <div className="chip">
      <div className="chip-column">
        <IxChip icon={iconPrint} variant="subtle-primary" closable>
          Primary
        </IxChip>
        <IxChip icon={iconPrint} variant="alarm" closable>
          Alarm
        </IxChip>
        <IxChip icon={iconPrint} variant="critical">
          Critical
        </IxChip>
        <IxChip icon={iconPrint} variant="warning">
          Warning
        </IxChip>
        <IxChip icon={iconPrint} variant="info">
          Info
        </IxChip>
        <IxChip icon={iconPrint} variant="success">
          Success
        </IxChip>
        <IxChip icon={iconPrint} variant="neutral">
          Neutral
        </IxChip>
        <IxChip icon={iconPrint} variant="custom" background="#FF00FF" closable>
          Custom
        </IxChip>
        <IxChip icon={iconPrint} variant="subtle-primary" closable>
          Chip with icon
        </IxChip>
      </div>
      <div className="chip-column">
        <IxChip icon={iconPrint} variant="primary" closable>
          Primary
        </IxChip>
        <IxChip icon={iconPrint} variant="alarm" closable>
          Alarm
        </IxChip>
        <IxChip icon={iconPrint} variant="critical">
          Critical
        </IxChip>
        <IxChip icon={iconPrint} variant="warning">
          Warning
        </IxChip>
        <IxChip icon={iconPrint} variant="info">
          Info
        </IxChip>
        <IxChip icon={iconPrint} variant="success">
          Success
        </IxChip>
        <IxChip icon={iconPrint} variant="neutral">
          Neutral
        </IxChip>
        <IxChip
          variant="custom"
          background="#FF00FF"
          chipColor="black"
          closable
        >
          Custom
        </IxChip>
        <IxChip variant="subtle-primary" closable>
          Chip without icon
        </IxChip>
      </div>
    </div>
  );
};
