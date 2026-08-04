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
  IxTabPanel as IxTabPanelElement,
  defineCustomElement as defineIxTabPanel,
} from '@siemens/ix/components/ix-tab-panel.js';
import {
  createComponent,
  type StencilReactComponent,
} from '@stencil/react-output-target/runtime';
import React from 'react';

export type InternalIxTabPanelEvents = NonNullable<unknown>;
export type InternalIxTabPanelProps = React.PropsWithChildren<
  Components.IxTabPanel
>;

export const InternalIxTabPanel = /*@__PURE__*/ createComponent<
  IxTabPanelElement,
  InternalIxTabPanelEvents
>({
  tagName: 'ix-tab-panel',
  elementClass: IxTabPanelElement,
  react: React,
  events: {} as InternalIxTabPanelEvents,
  defineCustomElement: defineIxTabPanel,
}) as React.ForwardRefExoticComponent<
  InternalIxTabPanelProps & React.RefAttributes<HTMLIxTabPanelElement>
>;

export default InternalIxTabPanel;
