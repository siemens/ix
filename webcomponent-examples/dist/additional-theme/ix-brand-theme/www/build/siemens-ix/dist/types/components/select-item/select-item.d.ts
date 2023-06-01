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
   * @internal
   */
  hover: boolean;
  /**
   * Item clicked
   */
  itemClick: EventEmitter<string>;
  /**
   * @internal
   * @param event
   */
  onItemClick(event?: CustomEvent<HTMLIxDropdownItemElement>): Promise<void>;
  componentDidRender(): void;
  labelChange(newValue: string, oldValue: string): void;
  render(): any;
}
