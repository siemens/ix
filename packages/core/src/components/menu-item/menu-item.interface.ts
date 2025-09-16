/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { AnchorInterface } from '../button/button.interface';
export interface IxMenuItemBase extends AnchorInterface {
  // Annotate with @Prop to provide a tooltip
  tooltipText?: string;
}
