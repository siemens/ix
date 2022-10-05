import { EventEmitter } from '../../stencil-public-runtime';
import { TreeItemContext } from '../tree/tree-model';
export declare class TreeItem {
  /**
   * Text
   */
  text: string;
  /**
   * Has tree item children
   */
  hasChildren: boolean;
  /**
   * Context
   */
  context: TreeItemContext;
  /**
   * Expand/Collapsed toggled
   */
  toggle: EventEmitter<void>;
  /**
   * Clicked
   */
  itemClick: EventEmitter<void>;
  render(): any;
}
