/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type {
  Components as IxIconsComponents,
  JSX as IxIconsJSX,
} from '@siemens/ix-icons';

export * from './components';
export * from './index';

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
