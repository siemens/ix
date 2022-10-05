export declare type TreeItemId = string;
export declare type TreeContext = Record<string, TreeItemContext>;
export declare type TreeModel<T> = Record<TreeItemId, TreeItem<T>>;
export declare type UpdateCallback = (treeItem: TreeItem<any>, context: TreeContext) => void;
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
