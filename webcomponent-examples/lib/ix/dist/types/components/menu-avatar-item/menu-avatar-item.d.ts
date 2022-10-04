import { EventEmitter } from '../../stencil-public-runtime';
export declare class MenuAvatarItem {
  /**
   * Avatar dropdown icon
   */
  icon: string;
  /**
   * Avatar dropdown label
   */
  label: string;
  /**
   * Avatar dropdown item clicked
   */
  itemClick: EventEmitter<MouseEvent>;
  hostElement: HTMLIxMenuAvatarItemElement;
  render(): any;
}
