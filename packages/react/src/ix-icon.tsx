/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  IxIcon as IxIconElement,
  defineCustomElement as defineIxIcon,
} from '@siemens/ix-icons/components/ix-icon.js';
import {
  createComponent,
  StencilReactComponent,
} from '@stencil/react-output-target/runtime';
import React from 'react';

export const IxIcon: StencilReactComponent<IxIconElement> =
  /*@__PURE__*/ createComponent<IxIconElement>({
    tagName: 'ix-icon',
    elementClass: IxIconElement,
    react: React,
    defineCustomElement: defineIxIcon,
  });
