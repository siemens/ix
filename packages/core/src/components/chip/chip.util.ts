/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function determineTooltip(
  tooltipText: string | undefined,
  hostElementTextContent: string | null
): string | null {
  if (tooltipText && tooltipText.length > 0) {
    if (tooltipText === 'none') {
      return null;
    }
    return tooltipText;
  }
  return hostElementTextContent;
}
