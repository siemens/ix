/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export type BaseButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type BaseButtonStyle = 'subtle' | 'danger';

/**
 * Glyph size for `ix-button` icons and `ix-icon-button` `size`.
 * `20` and `24` both use a 32×32 icon-button host.
 */
export type ButtonIconSize = '12' | '16' | '20' | '24';

/**
 * Default glyph size for `ix-button` icons and omitted `ix-icon-button` `size`.
 */
export const DEFAULT_BUTTON_ICON_SIZE: ButtonIconSize = '20';
