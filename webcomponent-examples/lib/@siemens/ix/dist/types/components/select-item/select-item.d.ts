import { EventEmitter } from '../../stencil-public-runtime';
export declare class SelectItem {
  hostElement: HTMLIxSelectItemElement;
  /**
   * Displayed name of the item
   */
  label: string;
  /**
   * Item value
   */
  value: any;
  /**
   * Whether the item is selected.
   */
  selected: boolean;
  /**
   * ***Internal***
   */
  hover: boolean;
  /**
   * Item clicked
   */
  itemClick: EventEmitter<string>;
  /**
   * Internal
   * @param event
   */
  onItemClick(event?: CustomEvent<HTMLIxDropdownItemElement>): Promise<void>;
  componentDidRender(): void;
  render(): any;
}
