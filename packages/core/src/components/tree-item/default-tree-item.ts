/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { TreeItem, TreeItemContext, UpdateCallback } from '../tree/tree-model';

export interface DefaultTreeItemData {
  name: string;
}
export type DefaultTreeItem = TreeItem<DefaultTreeItemData>;

export function renderDefaultItem(
  item: DefaultTreeItem,
  context: TreeItemContext,
  update: (_: UpdateCallback) => void
) {
  const el = document.createElement('ix-tree-item');
  el.hasChildren = item.hasChildren;
  el.context = context;
  el.text = item.data.name;

  update((updateTreeItem) => {
    el.text = updateTreeItem.data.name;
  });
  return el;
}
