/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { themeSwitcher } from '@siemens/ix';

export function resolveEChartThemeName() {
  const theme = themeSwitcher.getTheme();
  const mode = themeSwitcher.getMode();

  return `theme-${theme}-${mode}`;
}
