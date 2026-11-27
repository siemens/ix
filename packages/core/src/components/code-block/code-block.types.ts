/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Turns code into highlighted DOM. Must return a DOM node, never an HTML string.
 */
export type CodeBlockHighlight = (code: string, language?: string) => Node;
