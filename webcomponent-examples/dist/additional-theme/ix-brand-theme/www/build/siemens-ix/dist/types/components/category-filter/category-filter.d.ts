import { EventEmitter } from '../../stencil-public-runtime';
import { FilterState } from './filter-state';
import { InputState } from './input-state';
import { LogicalFilterOperator } from './logical-filter-operator';
export declare class CategoryFilter {
  private readonly ID_CUSTOM_FILTER_VALUE;
  private textInput?;
  private formElement?;
  private isScrollStateDirty;
  hostElement: HTMLIxCategoryFilterElement;
  hasFocus: boolean;
  showCategorySelection: boolean;
  categoryLogicalOperator: LogicalFilterOperator;
  inputValue: string;
  category: string;
  filterTokens: Array<{
    id: string;
    value: string;
    operator: LogicalFilterOperator;
  }>;
  offsetDropdownX: string;
  offsetDropdownY: string;
  maxHeightDropdown: string;
  maxWidthDropdown: string;
  /**
   * When set this will initially populate the component with the provided search criteria.
   * This will trigger all input events accordingly.
   * @deprecated Will be removed with 2.0.0. Use the member filterState instead.
   */
  initialState: FilterState;
  /**
   * A set of search criteria to populate the component with.
   */
  filterState: FilterState;
  /**
   * Placeholder text to be displayed in an empty input field.
   */
  placeholder: string;
  /**
   * Configuration object hash used to populate the dropwdown menu for typeahead and quick selection functionality.
   * Each ID maps to an object with a label and an array of options to select from.
   */
  categories: {
    [id: string]: {
      label: string;
      options: string[];
    };
  };
  /**
   * In certain use cases some categories are not available for selection any more.
   * To allow proper display of set filters with these categories this ID to label mapping can be populated.
   * Configuration object hash used to supply labels to the filter chips in the input field.
   * Each ID maps to a string representing the label to display.
   */
  nonSelectableCategories?: {
    [id: string]: string;
  };
  /**
   * A list of strings that will be supplied as typeahead suggestions not tied to any categories.
   */
  suggestions: string[];
  /**
   * The icon next to the actual text input
   * Defaults to 'search'
   */
  icon: string;
  /**
   * Allows to hide the icon inside the text input.
   * Defaults to false
   */
  hideIcon: boolean;
  /**
   * If set to true allows that a single category can be set more than once.
   * An already set category will not appear in the category dropdown if set to false.
   *
   * Defaults to true
   */
  repeatCategories: boolean;
  /**
   * @internal For debugging purposes only!
   */
  tmpDisableScrollIntoView: boolean;
  /**
   * i18n
   */
  labelCategories: string;
  /**
   * i18n
   */
  i18nPlainText: string;
  /**
   * Event dispatched whenever the text input changes.
   */
  inputChanged: EventEmitter<InputState>;
  /**
   * Event dispatched whenever the filter state changes.
   */
  filterChanged: EventEmitter<FilterState>;
  private readonly documentClickCallback;
  watchFilterState(newValue: any): void;
  watchShowCategorySelection(newValue: any): void;
  setDropdownOffset(): void;
  componentDidLoad(): void;
  private setFilterState;
  private handleDocumentClick;
  private closeDropdown;
  private handleFormElementKeyDown;
  private focusPreviousItem;
  private focusNextItem;
  private handleInputElementKeyDown;
  private emitFilterEvent;
  private addToken;
  private removeToken;
  private getCategoryIds;
  private getCategoryLables;
  private selectCategory;
  private openCategorySelection;
  private resetFilter;
  private calculateDropdownX;
  private calculateDropdownY;
  private calculateDropdownHeight;
  private filterMultiples;
  private filterDuplicateTokens;
  private filterByInput;
  private toggleCategoryOperator;
  private getFilterChipLabel;
  componentDidRender(): void;
  private getResetButton;
  render(): any;
}
