/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { createContext } from '../utils/context';

/**
 * Delivers the active tab value to the tab context.
 * This context is used by the `ix-tab-panel` to determine which panel to display.
 * It is automatically set by the `ix-tab-context` component.
 */
export const TabContext = createContext<{
  activeTab?: string;
}>('tab-context', {});
