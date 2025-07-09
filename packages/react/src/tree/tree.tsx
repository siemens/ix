'use client';
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Components,
  type TreeContext,
  UpdateCallback,
  type IxTreeCustomEvent,
} from '@siemens/ix';
import React, { useCallback, useRef } from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import InternalIxTree from './internal-tree';

export type IxTreeProps = Omit<
  Components.IxTree,
  'renderItem' | 'markItemAsDirty' | 'refreshTree'
> & {
  renderItem?: (data: any) => React.ReactNode;
  onContextChange?: (event: IxTreeCustomEvent<TreeContext>) => void;
  onNodeToggled?: (
    event: CustomEvent<{ id: string; isExpaned: boolean }>
  ) => void;
  onNodeClicked?: (event: CustomEvent<string>) => void;
  onNodeRemoved?: (event: CustomEvent<any>) => void;
};

export const IxTree = React.forwardRef(
  (props: IxTreeProps, ref: React.ForwardedRef<Components.IxTree>) => {
    const cachedRootNodes = useRef<Map<HTMLElement, Root>>(new Map());

    const renderItem = useCallback(
      (
        _: number,
        data: any,
        __: any[],
        context: TreeContext,
        update: (callback: UpdateCallback) => void
      ) => {
        const treeItem = document.createElement('ix-tree-item');
        const rootNode = ReactDOM.createRoot(treeItem);
        treeItem.hasChildren = data.hasChildren;
        treeItem.context = context[data.id];

        if (props.renderItem) {
          rootNode.render(props.renderItem(data.data));
        }

        update((itemData, newContext) => {
          treeItem.context = newContext[itemData.id];
          treeItem.hasChildren = itemData.hasChildren;

          if (props.renderItem) {
            rootNode.render(props.renderItem(itemData.data));
          }
        });

        cachedRootNodes.current.set(treeItem, rootNode);
        return treeItem;
      },
      []
    );

    return (
      <InternalIxTree
        //@ts-expect-error ref exposed by the StencilComponent type
        ref={ref}
        {...props}
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
  }
);

export default IxTree;
