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

const CUSTOM_BACKGROUND = 'var(--si-sys-color-data-categorical-9)';
const CUSTOM_COLOR = 'var(--si-sys-color-text-inverse)';
const CUSTOM_OUTLINE_COLOR = 'var(--si-sys-color-text-primary)';

export default () => {
  return (
    <div className="container">
      <IxBadge
        type="dot"
        variant="accent"
        role="img"
        aria-label="Accent"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="accent"
        outline
        role="img"
        aria-label="Accent outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="accent"
        enableAnimation
        role="img"
        aria-label="Accent pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="accent"
        outline
        enableAnimation
        role="img"
        aria-label="Accent pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="danger"
        role="img"
        aria-label="Danger"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="danger"
        outline
        role="img"
        aria-label="Danger outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="danger"
        enableAnimation
        role="img"
        aria-label="Danger pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="danger"
        outline
        enableAnimation
        role="img"
        aria-label="Danger pulse outline"
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

      <IxBadge type="dot" variant="information" role="img" aria-label="Information"></IxBadge>
      <IxBadge
        type="dot"
        variant="information"
        outline
        role="img"
        aria-label="Information outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="information"
        enableAnimation
        role="img"
        aria-label="Information pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="information"
        outline
        enableAnimation
        role="img"
        aria-label="Information pulse outline"
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
