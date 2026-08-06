/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './badge-counter.scoped.css';

import { IxBadge } from '@siemens/ix-react';

const CUSTOM_BACKGROUND = 'var(--theme-chart-11)';
const CUSTOM_COLOR = 'var(--theme-color-inv-std-text)';
const CUSTOM_OUTLINE_COLOR = 'var(--theme-chip-outline--color)';

export default () => {
  return (
    <div className="container">
      <IxBadge type="counter" label="8" variant="primary"></IxBadge>
      <IxBadge type="counter" label="8" variant="primary" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="primary"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="primary"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="alarm"></IxBadge>
      <IxBadge type="counter" label="8" variant="alarm" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="alarm"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="alarm"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="critical"></IxBadge>
      <IxBadge type="counter" label="8" variant="critical" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="critical"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="critical"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="warning"></IxBadge>
      <IxBadge type="counter" label="8" variant="warning" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="warning"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="warning"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="info"></IxBadge>
      <IxBadge type="counter" label="8" variant="info" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="info"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="info"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="neutral"></IxBadge>
      <IxBadge type="counter" label="8" variant="neutral" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="neutral"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="neutral"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="success"></IxBadge>
      <IxBadge type="counter" label="8" variant="success" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="success"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="success"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge
        type="counter"
        label="8"
        variant="custom"
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_COLOR}
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="custom"
        outline
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_OUTLINE_COLOR}
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="custom"
        enableAnimation
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_COLOR}
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="custom"
        outline
        enableAnimation
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_OUTLINE_COLOR}
      ></IxBadge>
    </div>
  );
};
