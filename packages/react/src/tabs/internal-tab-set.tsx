'use client';
/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable */
import { type Components } from '@siemens/ix';
import {
  IxTabSet as IxTabSetElement,
  defineCustomElement as defineIxTabSet,
} from '@siemens/ix/components/ix-tab-set.js';
import {
  createComponent,
  type StencilReactComponent,
} from '@stencil/react-output-target/runtime';
import React from 'react';

export type InternalIxTabSetEvents = NonNullable<unknown>;
export type InternalIxTabSetProps = React.PropsWithChildren<
  Components.IxTabSet
>;

export const InternalIxTabSet = /*@__PURE__*/ createComponent<
  IxTabSetElement,
  InternalIxTabSetEvents
>({
  tagName: 'ix-tab-set',
  elementClass: IxTabSetElement,
  react: React,
  events: {} as InternalIxTabSetEvents,
  defineCustomElement: defineIxTabSet,
}) as React.ForwardRefExoticComponent<
  InternalIxTabSetProps & React.RefAttributes<HTMLIxTabSetElement>
>;

export default InternalIxTabSet;
