/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { JSX as IxIconsJSX } from '@siemens/ix-icons';
import {
  defineContainer,
  type StencilVueComponent,
} from '@stencil/vue-output-target/runtime';
import { defineCustomElement as defineIxIcon } from '@siemens/ix-icons/components/ix-icon.js';

export const IxIcon: StencilVueComponent<IxIconsJSX.IxIcon> =
  // eslint-disable-next-line no-inline-comments
  /*@__PURE__*/ defineContainer<IxIconsJSX.IxIcon>('ix-icon', defineIxIcon, [
    'size',
    'color',
    'name',
  ]);
