'use client';
/* eslint-disable */

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { type IxTreeCustomEvent, type TreeContext } from '@siemens/ix';
import {
  IxTree as IxTreeElement,
  defineCustomElement as defineIxTree,
} from '@siemens/ix/components/ix-tree.js';
import {
  createComponent,
  type EventName,
  type StencilReactComponent,
} from '@stencil/react-output-target/runtime';
import React from 'react';

type IxTreeEvents = {
  onContextChange: EventName<IxTreeCustomEvent<TreeContext>>;
  onNodeToggled: EventName<CustomEvent<{ id: string; isExpaned: boolean }>>;
  onNodeClicked: EventName<CustomEvent<string>>;
  onNodeRemoved: EventName<CustomEvent<any>>;
};

const InternalIxTree: StencilReactComponent<IxTreeElement, IxTreeEvents> =
  /*@__PURE__*/ createComponent<IxTreeElement, IxTreeEvents>({
    tagName: 'ix-tree',
    elementClass: IxTreeElement,
    react: React,
    events: {
      onContextChange: 'contextChange',
      onNodeToggled: 'nodeToggled',
      onNodeClicked: 'nodeClicked',
      onNodeRemoved: 'nodeRemoved',
    } as IxTreeEvents,
    defineCustomElement: defineIxTree,
  });

export default InternalIxTree;
