/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { ProgressIndicatorStatus } from './progress-indicator.types';

export function LinearBar({
  value,
  status,
}: Readonly<{
  value: number;
  status: ProgressIndicatorStatus;
}>) {
  return (
    <div class={`linear-progress-container ${status}`}>
      <div
        class="progress"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          class={{
            'progress-bar': true,
          }}
          style={{ width: `${value}%` }}
          data-value={value}
        ></div>
      </div>
    </div>
  );
}
