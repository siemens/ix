'use client';
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { type TreeContext, UpdateCallback } from '@siemens/ix';
import React, { useCallback, useRef } from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import InternalIxTree from './internal-tree';

type ExtractProps<TComponentOrTProps> =
  TComponentOrTProps extends React.ComponentType<infer TProps>
    ? TProps
    : TComponentOrTProps;

type IxTreeProps = ExtractProps<typeof InternalIxTree> & {
  renderItem?: (data: any) => React.ReactNode;
};

export const IxTree = (props: IxTreeProps) => {
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
};

export default IxTree;
