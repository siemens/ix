/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './badge-status-icon.scoped.css';

import { IxBadge } from '@siemens/ix-react';

export default () => {
  return (
    <div className="container">
      <IxBadge
        type="status-icon"
        variant="alarm"
        role="img"
        aria-label="Alarm"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="alarm"
        outline
        role="img"
        aria-label="Alarm outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="alarm"
        enableAnimation
        role="img"
        aria-label="Alarm pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="alarm"
        outline
        enableAnimation
        role="img"
        aria-label="Alarm pulse outline"
      ></IxBadge>

      <IxBadge
        type="status-icon"
        variant="error"
        role="img"
        aria-label="Error"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="error"
        outline
        role="img"
        aria-label="Error outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="error"
        enableAnimation
        role="img"
        aria-label="Error pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="error"
        outline
        enableAnimation
        role="img"
        aria-label="Error pulse outline"
      ></IxBadge>

      <IxBadge
        type="status-icon"
        variant="critical"
        role="img"
        aria-label="Critical"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="critical"
        outline
        role="img"
        aria-label="Critical outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="critical"
        enableAnimation
        role="img"
        aria-label="Critical pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="critical"
        outline
        enableAnimation
        role="img"
        aria-label="Critical pulse outline"
      ></IxBadge>

      <IxBadge
        type="status-icon"
        variant="warning"
        role="img"
        aria-label="Warning"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="warning"
        outline
        role="img"
        aria-label="Warning outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="warning"
        enableAnimation
        role="img"
        aria-label="Warning pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="warning"
        outline
        enableAnimation
        role="img"
        aria-label="Warning pulse outline"
      ></IxBadge>

      <IxBadge
        type="status-icon"
        variant="success"
        role="img"
        aria-label="Success"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="success"
        outline
        role="img"
        aria-label="Success outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="success"
        enableAnimation
        role="img"
        aria-label="Success pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="success"
        outline
        enableAnimation
        role="img"
        aria-label="Success pulse outline"
      ></IxBadge>

      <IxBadge
        type="status-icon"
        variant="info"
        role="img"
        aria-label="Info"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="info"
        outline
        role="img"
        aria-label="Info outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="info"
        enableAnimation
        role="img"
        aria-label="Info pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="info"
        outline
        enableAnimation
        role="img"
        aria-label="Info pulse outline"
      ></IxBadge>
    </div>
  );
};
