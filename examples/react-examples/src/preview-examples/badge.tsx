/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconInfo, iconStar } from '@siemens/ix-icons/icons';
import './badge.scoped.css';

import { IxBadge, IxButton, IxIconButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div className="row">
        <IxBadge type="counter" label="3" variant="danger">
          <IxButton aria-label="Review, 3 unread">Review</IxButton>
        </IxBadge>

        <IxBadge type="counter" label="1" variant="danger" enableAnimation>
          <IxIconButton
            icon={iconInfo}
            aria-label="What's new, 1 notification"
          ></IxIconButton>
        </IxBadge>

        <IxBadge
          type="counter"
          label="9"
          variant="success"
          position="bottom-after"
        >
          <IxButton aria-label="Bottom after, 9 items">Bottom after</IxButton>
        </IxBadge>

        <IxBadge type="dot" variant="danger">
          <IxButton aria-label="Messages, unread">Messages</IxButton>
        </IxBadge>

        <IxBadge type="status-icon" variant="warning">
          <IxButton aria-label="Device, warning">Device</IxButton>
        </IxBadge>
      </div>

      <div className="row">
        <IxBadge type="counter" label="12" variant="information"></IxBadge>
        <IxBadge type="counter" label="99" variant="warning"></IxBadge>
        <IxBadge type="counter" label="142" variant="accent"></IxBadge>
        <IxBadge type="counter" label="100" variant="danger"></IxBadge>
        <IxBadge type="counter" label="8" variant="accent" outline></IxBadge>
        <IxBadge type="counter" label="8" variant="accent" border></IxBadge>

        <IxBadge
          type="dot"
          variant="danger"
          role="img"
          aria-label="Unread"
        ></IxBadge>
        <IxBadge
          type="dot"
          variant="success"
          outline
          role="img"
          aria-label="Online"
        ></IxBadge>

        <IxBadge
          type="status-icon"
          variant="danger"
          role="img"
          aria-label="Danger"
        ></IxBadge>
        <IxBadge
          type="status-icon"
          variant="success"
          outline
          role="img"
          aria-label="Success"
        ></IxBadge>
      </div>

      <div className="row">
        <IxBadge
          type="label"
          label="Label"
          variant="danger"
          alignLeft
          icon={iconStar}
          className="styled"
          tooltipText
        ></IxBadge>
        <IxBadge
          type="label"
          label="Label"
          icon={iconStar}
          className="styled-ellipsis-4"
          tooltipText
        ></IxBadge>
        <IxBadge type="counter" label="12" variant="information" tooltipText></IxBadge>
        <IxBadge
          type="counter"
          label="12"
          variant="information"
          tooltipText="Twelve notifications"
        ></IxBadge>
        <IxBadge
          type="dot"
          variant="danger"
          role="img"
          aria-label="Unread"
          tooltipText
        ></IxBadge>
        <IxBadge
          type="dot"
          variant="danger"
          role="img"
          aria-label="Unread"
          tooltipText="Custom tooltip text"
        ></IxBadge>
        <IxBadge
          type="status-icon"
          variant="warning"
          role="img"
          aria-label="Warning"
          tooltipText
        ></IxBadge>
        <IxBadge
          type="status-icon"
          variant="warning"
          role="img"
          aria-label="Warning"
          tooltipText="Custom tooltip text"
        ></IxBadge>
      </div>
    </>
  );
};
