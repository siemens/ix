/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
export type TreeItemId = string;
export type TreeContext = Record<string, TreeItemContext>;
export type TreeModel<T> = Record<TreeItemId, TreeItem<T>>;

export type UpdateCallback = (treeItem: TreeItem<any>, context: TreeContext) => void;

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
