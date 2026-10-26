/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconAlarm,
  iconInfo,
  iconSuccess,
  iconWarning,
  iconWarningOctagon,
  iconWarningRhomb,
} from '@siemens/ix-icons/icons';
import type { StatusVariant } from '../utils/status.types';

/**
 * KPI status values (any status except `base`).
 *
 * @since 6.0.0
 */
export type KpiState = Exclude<StatusVariant, 'base'>;

/**
 * Status icons by state. States without an entry (`neutral`, `accent`) show no icon.
 */
export const KPI_STATE_ICONS: Partial<Record<KpiState, string>> = {
  warning: iconWarning,
  danger: iconAlarm,
  caution: iconWarningRhomb,
  success: iconSuccess,
  information: iconInfo,
  critical: iconWarningOctagon,
};
