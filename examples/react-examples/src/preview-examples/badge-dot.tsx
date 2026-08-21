/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './badge-dot.scoped.css';

import { IxBadge } from '@siemens/ix-react';

const CUSTOM_BACKGROUND = 'var(--theme-chart-11)';
const CUSTOM_COLOR = 'var(--theme-color-inv-std-text)';
const CUSTOM_OUTLINE_COLOR = 'var(--theme-chip-outline--color)';

export default () => {
  return (
    <div className="container">
      <IxBadge
        type="dot"
        variant="primary"
        role="img"
        aria-label="Primary"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="primary"
        outline
        role="img"
        aria-label="Primary outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="primary"
        enableAnimation
        role="img"
        aria-label="Primary pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="primary"
        outline
        enableAnimation
        role="img"
        aria-label="Primary pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="alarm"
        role="img"
        aria-label="Alarm"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="alarm"
        outline
        role="img"
        aria-label="Alarm outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="alarm"
        enableAnimation
        role="img"
        aria-label="Alarm pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="alarm"
        outline
        enableAnimation
        role="img"
        aria-label="Alarm pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="critical"
        role="img"
        aria-label="Critical"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="critical"
        outline
        role="img"
        aria-label="Critical outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="critical"
        enableAnimation
        role="img"
        aria-label="Critical pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="critical"
        outline
        enableAnimation
        role="img"
        aria-label="Critical pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="warning"
        role="img"
        aria-label="Warning"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="warning"
        outline
        role="img"
        aria-label="Warning outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="warning"
        enableAnimation
        role="img"
        aria-label="Warning pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="warning"
        outline
        enableAnimation
        role="img"
        aria-label="Warning pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="info"
        role="img"
        aria-label="Info"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="info"
        outline
        role="img"
        aria-label="Info outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="info"
        enableAnimation
        role="img"
        aria-label="Info pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="info"
        outline
        enableAnimation
        role="img"
        aria-label="Info pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="neutral"
        role="img"
        aria-label="Neutral"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="neutral"
        outline
        role="img"
        aria-label="Neutral outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="neutral"
        enableAnimation
        role="img"
        aria-label="Neutral pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="neutral"
        outline
        enableAnimation
        role="img"
        aria-label="Neutral pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="success"
        role="img"
        aria-label="Success"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="success"
        outline
        role="img"
        aria-label="Success outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="success"
        enableAnimation
        role="img"
        aria-label="Success pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="success"
        outline
        enableAnimation
        role="img"
        aria-label="Success pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="custom"
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_COLOR}
        role="img"
        aria-label="Custom"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="custom"
        outline
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_OUTLINE_COLOR}
        role="img"
        aria-label="Custom outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="custom"
        enableAnimation
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_COLOR}
        role="img"
        aria-label="Custom pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="custom"
        outline
        enableAnimation
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_OUTLINE_COLOR}
        role="img"
        aria-label="Custom pulse outline"
      ></IxBadge>
    </div>
  );
};
