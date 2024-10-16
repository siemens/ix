/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {
  IxTreeCustomEvent,
  JSX,
  TreeContext,
  UpdateCallback,
} from '@siemens/ix';
import React, { useCallback, useRef } from 'react';
import ReactDOM from 'react-dom/client';

import {
  defineCustomElement as defineIxTree,
  IxTree as IxTreeElement,
} from '@siemens/ix/components/ix-tree.js';
import {
  createComponent,
  EventName,
  StencilReactComponent,
} from '@stencil/react-output-target/runtime';

type IxTreeEvents = {
  onContextChange: EventName<IxTreeCustomEvent<TreeContext>>;
  onNodeToggled: EventName<CustomEvent<{ id: string; isExpaned: boolean }>>;
  onNodeClicked: EventName<CustomEvent<string>>;
  onNodeRemoved: EventName<CustomEvent<any>>;
};

export const InternalIxTree: StencilReactComponent<
  IxTreeElement,
  IxTreeEvents
> = /*@__PURE__*/ createComponent<IxTreeElement, IxTreeEvents>({
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

export const IxTree = (
  props: Omit<JSX.IxTree, 'renderItem'> &
    Omit<React.HTMLAttributes<HTMLIxTreeElement>, 'style'> & {
      className?: string;
      style?: { [key: string]: any };
    } & React.RefAttributes<HTMLIxTreeElement> & {
      renderItem?: (data: any) => React.ReactNode;
    }
) => {
  const cachedRootNodes = useRef<Map<HTMLElement, ReactDOM.Root>>(new Map());

  const renderItem = useCallback(
    (
      _: number,
      data: any,
      __: any[],
      context: TreeContext,
      update: (callback: UpdateCallback) => void
    ) => {
      const treeItem = document.createElement('ix-tree-item');
      treeItem.hasChildren = data.hasChildren;
      treeItem.context = context[data.id];

      update((itemData, context) => {
        treeItem.context = context[itemData.id];
        treeItem.hasChildren = itemData.hasChildren;
      });

      const container = document.createElement('DIV');
      const rootNode = ReactDOM.createRoot(container);
      if (props.renderItem) {
        rootNode.render(props.renderItem(data.data));
      }

      treeItem.appendChild(container);
      cachedRootNodes.current.set(treeItem, rootNode);

      return treeItem;
    },
    []
  );

  return (
    <InternalIxTree
      {...(props as any)}
      renderItem={props.renderItem ? renderItem : undefined}
      onNodeRemoved={(removed: CustomEvent<any[]>) => {
        const { detail } = removed;

        detail.forEach((removedItemElement) => {
          if (cachedRootNodes.current.has(removedItemElement)) {
            cachedRootNodes.current.get(removedItemElement)?.unmount();
            cachedRootNodes.current.delete(removedItemElement);
          }
        });
      }}
    ></InternalIxTree>
  );
};
