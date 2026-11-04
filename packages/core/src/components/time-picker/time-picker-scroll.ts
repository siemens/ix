/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Offset used to center the selected element in a column list.
 * Base of 11px plus 4px because the element list padding grew by 2px per side
 * (focus-ring-offset + focus-ring-width) so the 2px focus outline is not clipped.
 */
export const ELEMENT_LIST_SCROLL_OFFSET = 15;
