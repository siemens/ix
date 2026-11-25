/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { StatusVariant } from '../utils/status.types';

/**
 * Message bar status values (emphasis set plus Figma `error`; no `base`).
 * Order in demos follows Figma: error, danger, warning, caution, success, information, neutral, accent, critical.
 *
 * @since 6.0.0
 */
export type MessageBarType = Exclude<StatusVariant, 'base'> | 'error';
