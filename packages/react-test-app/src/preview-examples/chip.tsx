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
        <IxChip
          icon={iconPrint}
          variant="primary"
          outline
          closable
          aria-label="Engineering"
          ariaLabelCloseButton="Remove Engineering"
        >
          Engineering
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="alarm"
          outline
          closable
          ariaLabelCloseButton="Remove Urgent"
        >
          Urgent
        </IxChip>
        <IxChip icon={iconPrint} variant="critical" outline>
          Overdue
        </IxChip>
        <IxChip icon={iconPrint} variant="warning" outline>
          Due soon
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="info"
          outline
          tooltipText="Click to edit"
          aria-label="In review"
        >
          In review
        </IxChip>
        <IxChip icon={iconPrint} variant="success" outline>
          Completed
        </IxChip>
        <IxChip icon={iconPrint} variant="neutral" outline>
          Draft
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="custom"
          outline
          background="#5C3FD6"
          chipColor="#FFFFFF"
          closable
          aria-label="Project Alpha"
          ariaLabelCloseButton="Remove Project Alpha"
        >
          Project Alpha
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="primary"
          outline
          closable
          ariaLabelCloseButton="Remove Design"
        >
          Design
        </IxChip>
      </div>
      <div className="chip-column">
        <IxChip
          icon={iconPrint}
          variant="primary"
          closable
          ariaLabelCloseButton="Remove Engineering"
        >
          Engineering
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="alarm"
          closable
          ariaLabelCloseButton="Remove Urgent"
        >
          Urgent
        </IxChip>
        <IxChip icon={iconPrint} variant="critical">
          Overdue
        </IxChip>
        <IxChip icon={iconPrint} variant="warning">
          Due soon
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="info"
          tooltipText="Click to edit"
          aria-label="In review"
        >
          In review
        </IxChip>
        <IxChip icon={iconPrint} variant="success">
          Completed
        </IxChip>
        <IxChip icon={iconPrint} variant="neutral">
          Draft
        </IxChip>
        <IxChip
          variant="custom"
          background="#5C3FD6"
          chipColor="#FFFFFF"
          closable
          aria-label="Project Alpha"
          ariaLabelCloseButton="Remove Project Alpha"
        >
          Project Alpha
        </IxChip>
        <IxChip
          variant="primary"
          closable
          ariaLabelCloseButton="Remove Design"
        >
          Design
        </IxChip>
      </div>
    </div>
  );
};
