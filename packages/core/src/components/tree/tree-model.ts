/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type TreeItemId = string;
export type TreeContext = Record<string, TreeItemContext>;
export type TreeModel<T> = Record<TreeItemId, TreeItem<T>>;

export type UpdateCallback = (
  treeItem: TreeItem<any>,
  context: TreeContext
) => void;

export interface TreeItem<T> {
  id: TreeItemId;
  data: T;
  hasChildren: boolean;
  children: TreeItemId[];
}

export interface TreeItemVisual<T> extends TreeItem<T> {
  level: number;
}

export interface TreeItemContext {
  isExpanded: boolean;
  isSelected: boolean;
}
