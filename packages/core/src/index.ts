/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import '@siemens/ix-icons';
import type {
  Components as IxIconsComponents,
  JSX as IxIconsJSX,
} from '@siemens/ix-icons';
export * from './components';
export * from './components/category-filter/filter-state';
export * from './components/category-filter/input-state';
export * from './components/category-filter/logical-filter-operator';
export { FlipTileState } from './components/flip-tile/flip-tile-state';
export * from './components/modal/modal-utils';
export * from './components/toast/toast-utils';
export * from './components/tree-item/default-tree-item';
export * from './components/tree/tree-model';
export * from './components/upload/upload-file-state';
export { NotificationColor } from './components/utils/notification-color';
export {
  convertToAbbreviationString,
  convertToRemString,
} from './components/utils/rwd.util';
export * from './components/utils/theme-switcher';

declare module './components' {
  export namespace Components {
    export type IxIcon = IxIconsComponents.IxIcon;
  }
}

declare module './components' {
  export namespace JSX {
    export type IxIcon = IxIconsJSX.IxIcon;
  }
}
