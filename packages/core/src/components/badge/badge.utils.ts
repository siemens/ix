/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { BadgeAnatomyType } from './badge.types';

export const BADGE_OVERFLOW_THRESHOLD = 99;

const INTEGER_LABEL_PATTERN = /^-?\d+(\.\d+)?$/;
const OVERFLOW_LABEL = `${BADGE_OVERFLOW_THRESHOLD}+`;

/**
 * Formats badge label text for supported anatomy types.
 * Returns `null` when the type has no text or the value is invalid.
 * Counters truncate decimals and cap at `99+`.
 */
export function formatBadgeLabel(
  type: BadgeAnatomyType,
  label?: string | number | null
): string | null {
  switch (type) {
    case 'counter':
      return formatCounterLabel(label);
    case 'label':
      return formatTextLabel(label);
    case 'dot':
    case 'status-icon':
      return null;
  }
}

function coerceLabelText(label?: string | number | null): string {
  if (label === undefined || label === null) {
    return '';
  }

  return String(label).trim();
}

function formatTextLabel(label?: string | number | null): string | null {
  const trimmed = coerceLabelText(label);

  if (!trimmed) {
    return null;
  }

  return trimmed;
}

function formatCounterLabel(label?: string | number | null): string | null {
  const trimmed = coerceLabelText(label);

  if (!trimmed) {
    return null;
  }

  if (trimmed === OVERFLOW_LABEL) {
    return OVERFLOW_LABEL;
  }

  if (!INTEGER_LABEL_PATTERN.test(trimmed)) {
    return null;
  }

  const intValue = Math.trunc(Number(trimmed));

  if (intValue > BADGE_OVERFLOW_THRESHOLD) {
    return OVERFLOW_LABEL;
  }

  return String(intValue);
}
