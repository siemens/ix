/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export * from './components/category-filter/filter-state';
export * from './components/category-filter/input-state';
export * from './components/category-filter/logical-filter-operator';
export { FlipTileState } from './components/flip-tile/flip-tile-state';
export * from './components/toast/toast-utils';
export * from './components/tree-item/default-tree-item';
export * from './components/tree/tree-model';
export * from './components/upload/upload-file-state';
export * from './components/utils/delegate';
export { ElementReference } from './components/utils/element-reference';
export * from './components/utils/modal';
export * from './components/utils/typed-event';
export { NotificationColor } from './components/utils/notification-color';
export {
  convertToAbbreviationString,
  convertToRemString,
} from './components/utils/rwd.util';
export * from './components/utils/theme-switcher';
export { handlePlatformHelpers, IxConfig } from './setup';

export async function applyPolyfills() {
  /**
   * Placeholder to not break existing applications
   * https://github.com/ionic-team/stencil/issues/5780
   */
}
