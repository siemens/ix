import { TreeItem, TreeItemContext, UpdateCallback } from '../tree/tree-model';
export interface DefaultTreeItemData {
  name: string;
}
export declare type DefaultTreeItem = TreeItem<DefaultTreeItemData>;
export declare function renderDefaultItem(item: DefaultTreeItem, context: TreeItemContext, update: (_: UpdateCallback) => void): HTMLIxTreeItemElement;
