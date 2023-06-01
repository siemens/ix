import { EventEmitter } from '../../stencil-public-runtime';
import { IxSelectItemLabelChangeEvent } from '../select-item/events';
export declare class Select {
  hostElement: HTMLIxSelectElement;
  /**
   * Indices of selected items
   */
  selectedIndices: string | string[];
  /**
   * Show clear button
   */
  allowClear: boolean;
  /**
   * Selection mode
   */
  mode: 'single' | 'multiple';
  /**
   * Select is extendable
   */
  editable: boolean;
  /**
   * If true the select will be in disabled state
   */
  disabled: boolean;
  /**
   * If true the select will be in readonly mode
   */
  readonly: boolean;
  /**
   * Input field placeholder
   */
  i18nPlaceholder: string;
  /**
   * Input field placeholder for editable select
   */
  i18nPlaceholderEditable: string;
  /**
   * Select list header
   */
  i18nSelectListHeader: string;
  /**
   * Item selection changed
   */
  itemSelectionChange: EventEmitter<string | string[]>;
  /**
   * Item added to selection
   */
  addItem: EventEmitter<string>;
  dropdownShow: boolean;
  value: string[];
  dropdownWrapperRef: HTMLElement;
  dropdownAnchor: HTMLElement;
  isDropdownEmpty: boolean;
  hasFocus: boolean;
  navigationItem: HTMLIxSelectItemElement;
  inputFilterText: string;
  inputValue: string;
  private inputRef;
  private dropdownRef;
  private addItemRef;
  private labelMutationObserver;
  get items(): HTMLIxSelectItemElement[];
  get selectedItems(): HTMLIxSelectItemElement[];
  get addItemButton(): Element;
  get isSingleMode(): boolean;
  get isMultipleMode(): boolean;
  watchSelectedIndices(newId: string | string[]): void;
  onItemClicked(event: CustomEvent<string>): void;
  watchInputText(newValue: string): void;
  private emitItemClick;
  private emitAddItem;
  private selectValue;
  componentWillLoad(): void;
  onLabelChange(event: IxSelectItemLabelChangeEvent): void;
  disconnectedCallback(): void;
  private itemExists;
  private dropdownVisibilityChanged;
  onKeyDown(event: KeyboardEvent): Promise<void>;
  private onEnterNavigation;
  private onArrowNavigation;
  private setHoverEffectForNavigatedSelectItem;
  private filterItemsWithTypeahead;
  private removeHiddenFromItems;
  private clearInput;
  private clear;
  render(): any;
}
