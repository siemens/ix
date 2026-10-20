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
        <IxChip icon={iconPrint} variant="danger" closable>
          Danger
        </IxChip>
        <IxChip icon={iconPrint} variant="warning">
          Warning
        </IxChip>
        <IxChip icon={iconPrint} variant="caution">
          Caution
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="information"
          tooltipText="Open details for this status"
          aria-label="In review"
        >
          Information
        </IxChip>
        <IxChip icon={iconPrint} variant="accent" closable>
          Accent
        </IxChip>
        <IxChip icon={iconPrint} variant="critical">
          Critical
        </IxChip>
        <IxChip icon={iconPrint} variant="success">
          Success
        </IxChip>
        <IxChip icon={iconPrint} variant="neutral">
          Neutral
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="custom"
          background="var(--si-sys-color-data-categorical-9)"
          chipColor="var(--si-sys-color-text-inverse)"
          closable
        >
          Custom
        </IxChip>
        <IxChip icon={iconPrint} variant="accent" closable>
          Chip with icon
        </IxChip>
      </div>
      <div className="chip-column">
        <IxChip icon={iconPrint} variant="danger" outline closable>
          Danger
        </IxChip>
        <IxChip icon={iconPrint} variant="warning" outline>
          Warning
        </IxChip>
        <IxChip icon={iconPrint} variant="caution" outline>
          Caution
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="information"
          outline
          tooltipText="Open details for this status"
          aria-label="In review"
        >
          Information
        </IxChip>
        <IxChip icon={iconPrint} variant="accent" outline closable>
          Accent
        </IxChip>
        <IxChip icon={iconPrint} variant="critical" outline>
          Critical
        </IxChip>
        <IxChip icon={iconPrint} variant="success" outline>
          Success
        </IxChip>
        <IxChip icon={iconPrint} variant="neutral" outline>
          Neutral
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="custom"
          background="var(--si-sys-color-data-categorical-9)"
          chipColor="var(--si-sys-color-text-primary)"
          outline
          closable
        >
          Custom
        </IxChip>
        <IxChip variant="accent" outline closable>
          Chip without icon
        </IxChip>
      </div>
    </div>
  );
};
