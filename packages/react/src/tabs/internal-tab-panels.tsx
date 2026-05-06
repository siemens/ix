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
  IxTabPanels as IxTabPanelsElement,
  defineCustomElement as defineIxTabPanels,
} from '@siemens/ix/components/ix-tab-panels.js';
import {
  createComponent,
  type StencilReactComponent,
} from '@stencil/react-output-target/runtime';
import React from 'react';

export type InternalIxTabPanelsEvents = NonNullable<unknown>;
export type InternalIxTabPanelsProps = React.PropsWithChildren<
  Components.IxTabPanels
>;

export const InternalIxTabPanels = /*@__PURE__*/ createComponent<
  IxTabPanelsElement,
  InternalIxTabPanelsEvents
>({
  tagName: 'ix-tab-panels',
  elementClass: IxTabPanelsElement,
  react: React,
  events: {} as InternalIxTabPanelsEvents,
  defineCustomElement: defineIxTabPanels,
}) as React.ForwardRefExoticComponent<
  InternalIxTabPanelsProps & React.RefAttributes<HTMLIxTabPanelsElement>
>;

export default InternalIxTabPanels;
