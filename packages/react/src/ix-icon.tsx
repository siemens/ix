/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { JSX as IxIconsJSX } from '@siemens/ix-icons';
import { createReactComponent } from './react-component-lib';

import { defineCustomElement } from '@siemens/ix-icons/components/ix-icon.js';

// eslint-disable-next-line no-inline-comments
export const IxIcon = /*@__PURE__*/ createReactComponent<
  IxIconsJSX.IxIcon,
  HTMLIxIconElement
>('ix-icon', undefined, undefined, defineCustomElement);
