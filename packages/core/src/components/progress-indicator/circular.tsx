/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, type FunctionalComponent } from '@stencil/core';
import type { ProgressIndicatorSize } from './progress-indicator.types';

function getCircularSize(size: ProgressIndicatorSize) {
  switch (size) {
    case 'xs':
      return 16;
    case 'sm':
      return 24;
    case 'md':
      return 32;
    case 'lg':
      return 48;
    case 'xl':
      return 64;
    default:
      return 32;
  }
}

export type CircularProgressProps = {
  value: number;
  size: ProgressIndicatorSize;
};

export const CircularProgress: FunctionalComponent<CircularProgressProps> = (
  props: Readonly<CircularProgressProps>,
  children
) => {
  const { value, size } = props;
  const sizeInPixel = getCircularSize(size);
  const radius = sizeInPixel / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.round(circumference * ((100 - value) / 100));

  const slotInsideCircular = size === 'lg' || size === 'xl';

  return (
    <div class="circular-progress-container">
      <svg
        width={sizeInPixel}
        height={sizeInPixel}
        viewBox={`-${sizeInPixel * 0.125} -${sizeInPixel * 0.125} ${
          sizeInPixel * 1.25
        } ${sizeInPixel * 1.25}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          r={radius}
          cx={radius}
          cy={radius}
          fill="transparent"
          stroke="var(--theme-color-component-4)"
          stroke-width={`3px`}
        ></circle>
        {percentage > 0 && (
          <circle
            r={radius}
            cx={radius}
            cy={radius}
            stroke="var(--ix-progress-indicator-color)"
            stroke-width="3px"
            stroke-linecap="round"
            stroke-dashoffset={`${percentage}px`}
            fill="transparent"
            stroke-dasharray={`${circumference}px`}
          ></circle>
        )}
        <foreignObject
          x={`0px`}
          y={`0px`}
          width={`${sizeInPixel}px`}
          height={`${sizeInPixel}px`}
          style={{
            transform: `rotate(90deg) translate(0px, -${sizeInPixel}px)`,
          }}
        >
          {slotInsideCircular && (
            <div class="slotted-container slotted-container-inside">
              {children}
            </div>
          )}
        </foreignObject>
      </svg>
      {!slotInsideCircular && <div class="slotted-container">{children}</div>}
    </div>
  );
};
