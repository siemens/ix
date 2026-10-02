/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export type ContentHeaderVariant = 'primary' | 'secondary';

/**
 * Controls how content header titles and subtitles handle limited horizontal space.
 * `'wrap'` is the default. Use `'ellipsis'` for explicit single-line truncation.
 * Ellipsis visually truncates the text without adding a tooltip.
 *
 * @since 6.0.0
 */
export type ContentHeaderTextOverflow = 'wrap' | 'ellipsis';
