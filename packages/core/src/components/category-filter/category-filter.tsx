/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconClear, iconSearch } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { A11yAttributes, a11yHostAttributes } from '../utils/a11y';
import {
  addDisposableEventListener,
  DisposableEventListener,
} from '../utils/disposable-event-listener';
import { makeRef } from '../utils/make-ref';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import { FilterAndSearchValue } from './filter-and-search-value';
import { FilterCategory } from './filter-category';
import { FilterOperand } from './filter-operand';
import { FilterSelection } from './filter-selection';
import { InputState } from './input-state';
import { SearchQuery } from './search-query';

const MAX_LABEL_DISPLAY_LENGTH = 20;
const LABEL_DISPLAY_BUFFER = 3;
const MAX_STRING_DISPLAY_LENGTH = 15;

@Component({
  tag: 'ix-category-filter',
  styleUrl: 'category-filter.scss',
  shadow: true,
})
export class CategoryFilter {
  private focusInListener?: DisposableEventListener;
  private focusOutListener?: DisposableEventListener;
  private inputListener?: DisposableEventListener;

  private readonly textInput? = makeRef<HTMLInputElement>();
  private tokenContainerEl?: HTMLDivElement;
  private chipsResizeObserver?: ResizeObserver;
  private chipWidths: Map<number, number> = new Map();
  private a11yAttributes?: A11yAttributes;

  private readonly INPUT_MIN_WIDTH = 175;
  private readonly MORE_CHIP_WIDTH = 100;
  private readonly DEFAULT_CHIP_WIDTH = 140;
  private readonly CHIP_MARGIN = 16;

  @Element() hostElement!: HTMLIxCategoryFilterElement;

  @State() hasFocus = false;
  @State() inputValue: string = '';
  @State() selectedCategory: FilterCategory | null = null;
  @State() selectedOperand: FilterOperand | null = null;
  @State() selectedValue: string | null = null;
  @State() filterValues: FilterAndSearchValue[] = [];
  @State() filteredOperands: FilterOperand[] = [];
  @State() availableValuesForSelectedCategory: string[] = [];
  @State() categoriesAvailableForSelection: FilterCategory[] = [];
  @State() selectedIndex = -1;
  @State() isDropdownOpen = false;
  @State() visibleChipsCount = Infinity;
  @State() showRemainingFilterValuesDropdown = false;
  @State() placeholderState: string = '';

  /**
   * If true the filter will be in disabled state
   */
  @Prop() disabled = false;

  /**
   * If true the filter will be in readonly mode
   */
  @Prop() readonly = false;

  /**
   * A set of filter values to populate the component with.
   */
  @Prop() filterState?: FilterAndSearchValue[];

  /**
   * Placeholder text to be displayed in an empty input field.
   */
  @Prop() placeholder?: string;

  /**
   * Configuration array of available filter categories.
   * Each category has a key, label, and array of selectable values.
   */
  @Prop() categories?: FilterCategory[];

  /**
   * In certain use cases some categories may not be available for selection anymore.
   * To allow proper display of set filters with these categories this ID to label mapping can be populated.
   *
   * Configuration object hash used to supply labels to the filter chips in the input field.
   * Each key maps to a string representing the label to display.
   */
  @Prop() nonSelectableCategories?: {
    [id: string]: string;
  } = {};

  /**
   * A list of strings that will be supplied as type-ahead suggestions not tied to any categories.
   */
  @Prop() suggestions?: string[];

  /**
   * The icon next to the actual text input
   * Defaults to 'search'
   */
  @Prop() icon?: string;

  /**
   * Allows to hide the icon inside the text input.
   * Defaults to false
   */
  @Prop() hideIcon: boolean = false;

  /**
   * If set, the operand step will be skipped and the specified operand will be used automatically.
   * The value should match a `key` from the `operands` array.
   */
  @Prop() staticOperand?: string;

  /**
   * If set to true, prevents that a single category can be set more than once.
   * An already set category will not appear in the category dropdown if set to true.
   */
  @Prop() uniqueCategories = false;

  /**
   * List of available operands for filtering.
   */
  @Prop() operands: FilterOperand[] = [
    { key: 'equals', label: 'equals (=)', symbol: '=' },
    { key: 'does not equal', label: 'does not equal (≠)', symbol: '≠' },
    { key: 'contains', label: 'contains (∋)', symbol: '∋' },
    { key: 'does not contain', label: 'does not contain (∌)', symbol: '∌' },
    { key: 'starts with', label: 'starts with (⊦)', symbol: '⊦' },
    { key: 'ends with', label: 'ends with (⊤)', symbol: '⊤' },
    { key: 'is greater than', label: 'greater than (>)', symbol: '>' },
    { key: 'is less than', label: 'less than (<)', symbol: '<' },
    {
      key: 'is greater than or equal to',
      label: 'greater or equal (≥)',
      symbol: '≥',
    },
    {
      key: 'is less than or equal to',
      label: 'less or equal (≤)',
      symbol: '≤',
    },
  ];

  /**
   * i18n
   */
  @Prop() labelCategories = 'Select a category';

  /**
   * Label for the operand selection dropdown header.
   */
  @Prop() labelOperands = 'Select an operator';

  /**
   * Label for the value selection dropdown header.
   */
  @Prop() labelValues = 'Select a value';

  /**
   * i18n label for 'Filter by text'
   */
  @Prop({ attribute: 'i18n-plain-text' }) i18nPlainText = 'Filter by text';

  /**
   * If true, disables the free-text search functionality.
   * When disabled, the "Search for ..." option will not appear in the dropdown.
   */
  @Prop() disableSearch = false;

  /**
   * If true, shows a loading spinner inside the dropdown.
   */
  @Prop() isLoading = false;

  /**
   * If true, shows an error state inside the dropdown.
   */
  @Prop() hasError = false;

  /**
   * ARIA label for the reset button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelResetButton?: string;

  /**
   * ARIA label for the filter input
   * Will be set as aria-label on the nested HTML input element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelFilterInput?: string;

  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  @Prop() enableTopLayer: boolean = false;

  /**
   * Event dispatched whenever a category gets selected in the dropdown
   */
  @Event() categoryChanged!: EventEmitter<string>;

  /**
   * Event dispatched whenever the text input changes.
   */
  @Event() inputChanged!: EventEmitter<InputState>;

  /**
   * Event dispatched whenever the filter state changes.
   */
  @Event() filterChanged!: EventEmitter<FilterAndSearchValue[]>;

  /**
   * Event dispatched whenever the filter gets cleared.
   */
  @Event() filterCleared!: EventEmitter<void>;

  @Watch('inputValue')
  watchInputValue(newValue: string) {
    this.handleFilterBehaviour(newValue);

    const categoryKey = this.selectedCategory?.key ?? '';
    const inputState = new InputState(newValue, categoryKey);
    this.inputChanged.emit(inputState);
  }

  @Watch('filterValues')
  watchFilterValues() {
    this.chipWidths = new Map();
    requestAnimationFrameNoNgZone(() => this.calculateVisibleChips());
  }

  @Watch('filterState')
  watchFilterState(newValue: FilterAndSearchValue[]) {
    if (newValue) {
      this.filterValues = [...newValue];
    }
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.defaultPrevented) {
      return;
    }

    switch (e.code) {
      case 'ArrowDown':
      case 'ArrowUp':
        this.handleArrowNavigation(e);
        break;

      case 'Enter':
      case 'NumpadEnter':
        this.handleEnterKey(e);
        break;

      case 'Backspace':
        this.handleBackspace(e);
        break;

      case 'Escape':
        this.isDropdownOpen = false;
        this.showRemainingFilterValuesDropdown = false;
        break;
    }
  }

  private handleArrowNavigation(e: KeyboardEvent): void {
    this.isDropdownOpen = true;
    const itemCount = this.getDropdownItemCount();
    if (itemCount === 0) {
      return;
    }

    e.preventDefault();
    const direction = e.code === 'ArrowDown' ? 1 : -1;
    this.selectedIndex =
      direction > 0
        ? Math.min(this.selectedIndex + 1, itemCount - 1)
        : Math.max(this.selectedIndex - 1, 0);
  }

  private handleEnterKey(e: KeyboardEvent): void {
    if (this.selectedIndex >= 0 && this.isDropdownOpen) {
      this.selectDropdownItem(this.selectedIndex);
      e.preventDefault();
    } else {
      this.combineFilter();
    }
  }

  private handleBackspace(e: KeyboardEvent): void {
    if (this.textInput?.current?.value) {
      return;
    }

    e.preventDefault();

    if (!this.selectedCategory && this.filterValues.length) {
      this.removeFilterValue(this.filterValues.length - 1);
      return;
    }

    if (this.selectedCategory && !this.selectedOperand) {
      this.selectedCategory = null;
      return;
    }

    if (this.selectedCategory && this.selectedOperand && !this.selectedValue) {
      this.selectedOperand = null;
      return;
    }

    this.selectedValue = null;
  }

  private handleFilterBehaviour(newValue: string) {
    if (!this.categories) {
      return;
    }

    if (newValue === '') {
      this.filteredOperands = this.operands;
      this.updateAvailableCategories();
      this.availableValuesForSelectedCategory = this.selectedCategory
        ? this.selectedCategory.values
        : [];
    }

    if (!this.selectedCategory) {
      this.categoriesAvailableForSelection = this.categories.filter(
        (category) =>
          category.label.toLowerCase().includes(newValue.toLowerCase())
      );
      if (this.uniqueCategories) {
        this.categoriesAvailableForSelection =
          this.categoriesAvailableForSelection.filter(
            (cat) => !this.isCategoryAlreadySet(cat.key)
          );
      }
    }
    if (this.selectedCategory && !this.selectedOperand) {
      this.filteredOperands = this.operands.filter((operand) =>
        operand.label.toLowerCase().includes(newValue.toLowerCase())
      );
    }
    if (this.selectedCategory && this.selectedOperand && !this.selectedValue) {
      this.availableValuesForSelectedCategory =
        this.selectedCategory.values.filter((value) =>
          value.toLowerCase().includes(newValue.toLowerCase())
        );
    }
  }

  private isCategoryAlreadySet(categoryKey: string): boolean {
    return this.filterValues.some(
      (v): v is FilterSelection =>
        v.type === 'filter' && v.category === categoryKey
    );
  }

  private readonly resetFilter = (e?: Event) => {
    const { defaultPrevented } = this.filterCleared.emit();
    if (defaultPrevented) {
      return;
    }

    e?.stopPropagation();
    this.selectedCategory = null;
    this.selectedOperand = null;
    this.selectedValue = null;
    this.filterValues = [];
    this.isDropdownOpen = false;
    this.showRemainingFilterValuesDropdown = false;
    if (this.textInput?.current) {
      this.textInput.current.value = '';
    }
    this.inputValue = '';
    this.placeholderState = this.placeholder ?? '';
    this.filterChanged.emit(this.filterValues);
  };

  private resetCurrentSelection() {
    if (this.textInput?.current) {
      this.textInput.current.value = '';
    }
    this.inputValue = '';
    this.textInput?.current?.focus();

    if (!this.selectedCategory) {
      this.updateAvailableCategories();
    } else if (!this.selectedOperand) {
      this.filteredOperands = this.operands;
      if (
        this.categoriesAvailableForSelection.length === 0 &&
        this.uniqueCategories
      ) {
        this.selectedCategory = null;
        this.updateAvailableCategories();
      }
    } else {
      this.availableValuesForSelectedCategory = this.filterExistingValues();
      if (this.availableValuesForSelectedCategory.length === 0) {
        this.selectedOperand = null;
        this.selectedCategory = null;
        this.filteredOperands = this.operands;
      }
    }
  }

  private renderDropdownContent() {
    if (!this.categories) {
      return this.renderPlainSuggestions();
    }

    if (!this.selectedCategory) {
      return this.renderCategorySelection();
    }
    return this.selectedOperand
      ? this.renderValueSelection()
      : this.renderOperandSelection();
  }

  private renderCategorySelection() {
    return (
      <div>
        {this.categoriesAvailableForSelection.length ? (
          <div>
            <ix-dropdown-header
              label={this.labelCategories}
            ></ix-dropdown-header>
            {this.categoriesAvailableForSelection.map((category, index) => (
              <ix-dropdown-item
                onClick={() => this.selectCategory(category)}
                label={category.label}
                hover={index === this.selectedIndex}
              ></ix-dropdown-item>
            ))}
          </div>
        ) : (
          this.renderEmptyState('category')
        )}
      </div>
    );
  }

  private selectCategory(category: FilterCategory) {
    this.selectedCategory = category;
    this.availableValuesForSelectedCategory = category.values;
    this.inputValue = '';
    if (this.textInput?.current) {
      this.textInput.current.value = '';
    }
    this.textInput?.current?.focus();
    this.placeholderState = '';
    this.selectedIndex = -1;
    this.categoryChanged.emit(category.key);

    // If staticOperand is set, skip operand selection
    if (this.staticOperand) {
      const operand = this.operands.find((op) => op.key === this.staticOperand);
      if (operand) {
        this.selectedOperand = operand;
        this.availableValuesForSelectedCategory = this.filterExistingValues();
      }
    }
  }

  private renderOperandSelection() {
    return (
      <div>
        {this.filteredOperands.length ? (
          <div>
            <ix-dropdown-header label={this.labelOperands}></ix-dropdown-header>
            {this.filteredOperands.map((operand, index) => (
              <ix-dropdown-item
                onClick={() => this.selectOperand(operand)}
                label={operand.label}
                hover={index === this.selectedIndex}
              ></ix-dropdown-item>
            ))}
          </div>
        ) : (
          this.renderEmptyState('operand')
        )}
      </div>
    );
  }

  private selectOperand(operand: FilterOperand) {
    this.selectedOperand = operand;
    this.inputValue = '';
    if (this.textInput?.current) {
      this.textInput.current.value = '';
    }
    this.textInput?.current?.focus();
    this.selectedIndex = -1;
    this.availableValuesForSelectedCategory = this.filterExistingValues();
  }

  private filterExistingValues(): string[] {
    if (!this.selectedCategory || !this.selectedOperand) {
      return this.availableValuesForSelectedCategory;
    }

    const existingValues = this.filterValues
      .filter(
        (filter): filter is FilterSelection =>
          filter.type === 'filter' &&
          filter.category === this.selectedCategory!.key &&
          filter.operand.key === this.selectedOperand!.key
      )
      .map((filter) => filter.value);

    return this.selectedCategory.values.filter(
      (value) => !existingValues.includes(value)
    );
  }

  private renderValueSelection() {
    return (
      <div>
        {this.availableValuesForSelectedCategory.length ? (
          <div>
            <ix-dropdown-header label={this.labelValues}></ix-dropdown-header>
            {this.availableValuesForSelectedCategory.map((value, index) => (
              <ix-dropdown-item
                onClick={() => this.selectValue(value)}
                label={value}
                hover={index === this.selectedIndex}
              ></ix-dropdown-item>
            ))}
          </div>
        ) : (
          this.renderEmptyState('value')
        )}
      </div>
    );
  }

  private selectValue(value: string) {
    this.selectedValue = value;
    if (
      !this.selectedCategory ||
      !this.selectedOperand ||
      !this.selectedValue
    ) {
      return;
    }
    this.combineFilter();
  }

  private renderPlainSuggestions() {
    if (!this.suggestions?.length) {
      return '';
    }

    const filtered = this.suggestions
      .filter((s) => this.filterByInput(s))
      .filter((s) => this.filterDuplicateTokens(s));

    return (
      <div>
        {filtered.map((suggestion, index) => (
          <ix-dropdown-item
            label={suggestion}
            hover={index === this.selectedIndex}
            onClick={() => {
              this.addSearchToken(suggestion);
              this.textInput?.current?.focus();
            }}
          ></ix-dropdown-item>
        ))}
      </div>
    );
  }

  private filterByInput(value: string): boolean {
    if (!this.inputValue) {
      return true;
    }
    return value.toLowerCase().includes(this.inputValue.toLowerCase());
  }

  private filterDuplicateTokens(value: string): boolean {
    return !this.filterValues.some((v) => v.value === value);
  }

  private renderEmptyState(type: string) {
    const emptyStateType = this.determineEmptyStateType(type);
    return this.renderSpecificEmptyState(emptyStateType, type);
  }

  private determineEmptyStateType(type: string): string {
    if (this.isAllValuesSelectedCase(type)) {
      return 'allValuesSelected';
    }
    if (this.isNoValueMatchesCase(type)) {
      return 'noValueMatches';
    }
    if (type === 'category' && this.inputValue) {
      return 'noCategoryMatches';
    }
    return 'default';
  }

  private isAllValuesSelectedCase(type: string): boolean {
    if (type !== 'value' || !this.selectedCategory || !this.selectedOperand) {
      return false;
    }
    const availableValues = this.filterExistingValues();
    return (
      availableValues.length === 0 &&
      this.selectedCategory.values.length > 0 &&
      this.inputValue === ''
    );
  }

  private isNoValueMatchesCase(type: string): boolean {
    if (
      type !== 'value' ||
      !this.selectedCategory ||
      !this.selectedOperand ||
      !this.inputValue
    ) {
      return false;
    }
    return !this.selectedCategory.values.some((val) =>
      val.toLowerCase().includes(this.inputValue.toLowerCase())
    );
  }

  private renderSpecificEmptyState(emptyStateType: string, type: string) {
    switch (emptyStateType) {
      case 'allValuesSelected':
        return (
          <div class="empty-state">
            <div>
              <ix-typography format="body">
                All values of this category have already been selected
              </ix-typography>
              <ix-typography format="body" class="light-text">
                Remove a filter or select another category.
              </ix-typography>
            </div>
            <ix-button
              variant="secondary"
              onClick={() => this.resetCurrentSelection()}
            >
              See all categories
            </ix-button>
          </div>
        );
      case 'noValueMatches':
        return (
          <div class="empty-state">
            <div>
              <ix-typography format="body">
                The term you entered does not match with any value
              </ix-typography>
              <ix-typography format="body" class="light-text">
                Remove a selected value or select another category.
              </ix-typography>
            </div>
            <ix-button
              variant="secondary"
              onClick={() => this.resetCurrentSelection()}
            >
              See all options
            </ix-button>
          </div>
        );
      case 'noCategoryMatches':
        return (
          <div class="empty-state">
            <div>
              <ix-typography format="body">
                The term you entered does not match with any category
              </ix-typography>
              <ix-typography format="body" class="light-text">
                Remove your input to see all options.
              </ix-typography>
            </div>
            <ix-button
              variant="secondary"
              onClick={() => this.resetCurrentSelection()}
            >
              See all options
            </ix-button>
          </div>
        );
      default: {
        const messageMap: Record<string, string> = {
          category: 'The term you entered does not match with any category',
          operand: 'The term you entered does not match with any operand',
          value: 'The term you entered does not match with any value',
        };
        const message = messageMap[type] || 'No matches found';
        return (
          <div class="empty-state">
            <div>
              <ix-typography format="body">{message}</ix-typography>
              <ix-typography format="body" class="light-text">
                Remove your input to see all options.
              </ix-typography>
            </div>
            <ix-button
              variant="secondary"
              onClick={() => this.resetCurrentSelection()}
            >
              See all options
            </ix-button>
          </div>
        );
      }
    }
  }

  private combineFilter() {
    if (!this.selectedCategory || !this.selectedOperand) {
      if (this.inputValue && !this.disableSearch) {
        this.addSearchToken(this.inputValue);
        return;
      }
      return;
    }

    const value = this.selectedValue ?? this.textInput?.current?.value ?? '';
    if (!value.trim()) {
      return;
    }

    this.filterValues = [
      ...this.filterValues,
      {
        type: 'filter',
        category: this.selectedCategory.key,
        operand: this.selectedOperand,
        value: value,
      },
    ];

    this.filterChanged.emit(this.filterValues);
    this.updateAvailableCategories();
    this.clearLastSelection();
    this.textInput?.current?.focus();
  }

  private addSearchToken(value: string) {
    if (!value || this.filterValues.some((chip) => chip.value === value)) {
      return;
    }

    this.filterValues = [...this.filterValues, { type: 'search', value }];
    this.filterChanged.emit(this.filterValues);
    this.isDropdownOpen = false;
    this.showRemainingFilterValuesDropdown = false;
    if (this.textInput?.current) {
      this.textInput.current.value = '';
    }
    this.inputValue = '';
    this.textInput?.current?.focus();
  }

  private getFilterChipLabel(value: FilterSelection): string {
    const categoryLabel =
      this.getCategoryLabel(value.category) ?? value.category;
    const truncatedValue = this.truncateMiddle(
      value.value,
      MAX_LABEL_DISPLAY_LENGTH
    );
    return `${categoryLabel} ${value.operand.symbol} ${truncatedValue}`;
  }

  private getCategoryLabel(categoryKey: string): string | undefined {
    const cat = this.categories?.find((c) => c.key === categoryKey);
    if (cat) {
      return cat.label;
    }
    return this.nonSelectableCategories?.[categoryKey];
  }

  private truncateMiddle(text: string, maxLength: number): string {
    if (!text || text.length <= maxLength) {
      return text;
    }
    const charsToShow = Math.floor((maxLength - LABEL_DISPLAY_BUFFER) / 2);
    const start = text.substring(0, charsToShow);
    const end = text.substring(text.length - charsToShow);
    return `${start}...${end}`;
  }

  private removeFilterValue(index: number) {
    this.filterValues = this.filterValues.filter((_, i) => i !== index);
    this.filterChanged.emit(this.filterValues);
    this.updateAvailableCategories();
    requestAnimationFrameNoNgZone(() => this.calculateVisibleChips());
  }

  private getPreviewText(): string {
    const categoryLabel = this.selectedCategory?.label;
    const truncatedCategoryLabel =
      categoryLabel && categoryLabel.length > MAX_LABEL_DISPLAY_LENGTH
        ? this.truncateMiddle(categoryLabel, MAX_LABEL_DISPLAY_LENGTH)
        : categoryLabel;

    const parts = [
      truncatedCategoryLabel,
      this.selectedOperand?.label,
      this.selectedValue,
    ].filter(Boolean);
    return parts.join(' ');
  }

  private getTooltipText(value: FilterSelection | SearchQuery): string {
    if (value.type === 'search') {
      return this.getSearchInformationText(value.value);
    }
    return `${value.category} ${value.operand.key} "${value.value}"`;
  }

  private getSearchInformationText(
    inputString?: string,
    plainText?: boolean
  ): string {
    const stringToTruncate = inputString ? inputString : this.inputValue;
    const truncatedValue =
      stringToTruncate.length > MAX_STRING_DISPLAY_LENGTH
        ? stringToTruncate.substring(0, MAX_STRING_DISPLAY_LENGTH) + '...'
        : stringToTruncate;
    if (plainText) {
      return truncatedValue;
    }
    return `Search for "${truncatedValue}"`;
  }

  private getIconColor() {
    if (this.disabled) {
      return 'color-component-1';
    }
    if (this.readonly) {
      return 'color-std-txt';
    }
    return 'color-primary';
  }

  private onFocusIn() {
    this.hasFocus = true;
  }

  private onFocusOut() {
    this.hasFocus = false;
  }

  private onInput() {
    this.inputValue = this.textInput?.current?.value ?? '';
    if (!this.isDropdownOpen) {
      this.isDropdownOpen = true;
    }
  }

  private getDropdownItemCount(): number {
    if (!this.categories) {
      return this.getFilteredSuggestionCount();
    }

    if (!this.selectedCategory) {
      return this.categoriesAvailableForSelection.length;
    }
    if (!this.selectedOperand) {
      return this.filteredOperands.length;
    }
    return this.availableValuesForSelectedCategory.length;
  }

  private getFilteredSuggestionCount(): number {
    if (!this.suggestions?.length) {
      return 0;
    }
    return this.suggestions
      .filter((s) => this.filterByInput(s))
      .filter((s) => this.filterDuplicateTokens(s)).length;
  }

  private selectDropdownItem(index: number) {
    if (!this.categories) {
      // Plain suggestions mode
      const filtered = this.suggestions
        ?.filter((s) => this.filterByInput(s))
        .filter((s) => this.filterDuplicateTokens(s));
      if (filtered && filtered[index]) {
        this.addSearchToken(filtered[index]);
        this.textInput?.current?.focus();
      }
    } else if (!this.selectedCategory) {
      if (this.categoriesAvailableForSelection[index]) {
        this.selectCategory(this.categoriesAvailableForSelection[index]);
      }
    } else if (!this.selectedOperand) {
      if (this.filteredOperands[index]) {
        this.selectOperand(this.filteredOperands[index]);
      }
    } else {
      if (this.availableValuesForSelectedCategory[index]) {
        this.selectValue(this.availableValuesForSelectedCategory[index]);
      }
    }

    this.selectedIndex = -1;
    this.isDropdownOpen = true;
    this.showRemainingFilterValuesDropdown = false;
  }

  private clearLastSelection() {
    this.selectedCategory = null;
    this.selectedOperand = null;
    this.selectedValue = null;
    if (this.textInput?.current) {
      this.textInput.current.value = '';
    }
    this.inputValue = '';
    this.placeholderState = this.placeholder ?? '';
  }

  private updateAvailableCategories(): void {
    if (!this.categories) {
      return;
    }

    if (!this.uniqueCategories) {
      this.categoriesAvailableForSelection = [...this.categories];
    } else {
      this.categoriesAvailableForSelection = this.categories.filter(
        (category) => !this.isCategoryAlreadySet(category.key)
      );
    }
  }

  private shouldShowSearchOption(): boolean {
    if (this.disableSearch || !this.inputValue) {
      return false;
    }
    const noCategorySelected = !this.selectedCategory;
    const hasCategoryAndOperand =
      this.selectedCategory !== null && this.selectedOperand !== null;
    return noCategorySelected || hasCategoryAndOperand;
  }

  private additionalFilterValuesClicked(): void {
    this.showRemainingFilterValuesDropdown =
      !this.showRemainingFilterValuesDropdown;
  }

  // Chip overflow
  private calculateVisibleChips() {
    if (!this.tokenContainerEl || this.filterValues.length === 0) {
      this.visibleChipsCount = Infinity;
      return;
    }

    const containerWidth = this.tokenContainerEl.clientWidth;
    const availableWidth =
      containerWidth - this.INPUT_MIN_WIDTH - this.MORE_CHIP_WIDTH;

    let visibleCount = 0;
    let usedWidth = 0;

    for (let i = 0; i < this.filterValues.length; i++) {
      const chipWidth = this.chipWidths.get(i) || this.DEFAULT_CHIP_WIDTH;
      if (usedWidth + chipWidth > availableWidth) {
        break;
      }
      visibleCount++;
      usedWidth += chipWidth;
    }

    if (visibleCount === this.filterValues.length) {
      this.visibleChipsCount = visibleCount;
      return;
    }

    this.visibleChipsCount = Math.max(1, visibleCount);
  }

  private measureChip(index: number, element: HTMLElement | undefined) {
    if (!element) {
      return;
    }
    requestAnimationFrameNoNgZone(() => {
      const width = element.offsetWidth + this.CHIP_MARGIN;
      if (this.chipWidths.get(index) !== width) {
        this.chipWidths.set(index, width);
        this.calculateVisibleChips();
      }
    });
  }

  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
    this.placeholderState = this.placeholder ?? '';
    if (this.categories) {
      this.categoriesAvailableForSelection = [...this.categories];
    }
    this.filteredOperands = this.operands;
  }

  componentDidLoad() {
    if (this.filterState !== undefined) {
      this.filterValues = [...this.filterState];
    }

    if (this.textInput?.current) {
      this.focusInListener = addDisposableEventListener(
        this.textInput.current,
        'focusin',
        () => this.onFocusIn()
      );

      this.focusOutListener = addDisposableEventListener(
        this.textInput.current,
        'focusout',
        () => this.onFocusOut()
      );

      this.inputListener = addDisposableEventListener(
        this.textInput.current,
        'input',
        () => this.onInput()
      );
    }

    this.chipsResizeObserver = new ResizeObserver(() => {
      this.chipWidths = new Map();
      this.calculateVisibleChips();
    });

    if (this.tokenContainerEl) {
      this.chipsResizeObserver.observe(this.tokenContainerEl);
    }
  }

  disconnectedCallback() {
    this.focusInListener?.();
    this.focusOutListener?.();
    this.inputListener?.();
    this.chipsResizeObserver?.disconnect();
  }

  private renderChips() {
    const visibleCount = Math.min(
      this.visibleChipsCount,
      this.filterValues.length
    );
    const visibleItems = this.filterValues.slice(0, visibleCount);
    const overflowCount = this.filterValues.length - visibleCount;

    return [
      ...visibleItems.map((value, index) => (
        <div ref={(el) => this.measureChip(index, el)}>
          <ix-filter-chip
            disabled={this.disabled}
            readonly={this.readonly}
            hideNativeTooltip={true}
            onClick={(e) => {
              e.stopPropagation();
              if (!this.readonly && !this.disabled) {
                this.removeFilterValue(index);
              }
            }}
            onCloseClick={() => this.removeFilterValue(index)}
            data-tooltip={`filterValue-${index}`}
          >
            {value.type === 'filter'
              ? this.getFilterChipLabel(value)
              : this.getSearchInformationText(value.value, true)}
          </ix-filter-chip>
          <ix-tooltip for={`[data-tooltip=filterValue-${index}]`}>
            {this.getTooltipText(value)}
          </ix-tooltip>
        </div>
      )),
      overflowCount > 0 ? this.renderOverflowChip(overflowCount) : null,
    ];
  }

  private renderOverflowChip(overflowCount: number) {
    return (
      <div>
        <ix-filter-chip
          readonly={true}
          onClick={(e) => {
            e.stopPropagation();
            this.additionalFilterValuesClicked();
          }}
        >
          {`+${overflowCount}`}
        </ix-filter-chip>
        <ix-dropdown
          show={this.showRemainingFilterValuesDropdown}
          closeBehavior="outside"
        >
          <div class="additionalValuesList">
            {this.filterValues
              .slice(this.visibleChipsCount)
              .map((value, index) => (
                <ix-filter-chip
                  onCloseClick={() =>
                    this.removeFilterValue(index + this.visibleChipsCount)
                  }
                >
                  {value.type === 'filter'
                    ? this.getFilterChipLabel(value)
                    : value.value}
                </ix-filter-chip>
              ))}
          </div>
        </ix-dropdown>
      </div>
    );
  }

  private hasActiveFilterOrCategory(): boolean {
    return this.filterValues.length > 0 || this.selectedCategory !== null;
  }

  render() {
    return (
      <Host onKeyDown={(e: KeyboardEvent) => this.handleKeyDown(e)}>
        <div
          read-only={this.readonly}
          class={{
            'input-container': true,
            disabled: this.disabled,
            focus: this.hasFocus,
            readonly: this.readonly,
            'no-icon': this.hideIcon,
          }}
        >
          <ix-icon
            color={this.getIconColor()}
            class={{ 'display-none': this.hideIcon }}
            name={this.icon ?? iconSearch}
            size="16"
          ></ix-icon>
          <div
            class="token-container"
            ref={(el) => (this.tokenContainerEl = el)}
          >
            <div class="list-unstyled">
              {this.renderChips()}
              {this.categories !== undefined ? (
                <span
                  class={{
                    'category-preview': true,
                    'display-none': this.selectedCategory === null,
                  }}
                >
                  {this.getPreviewText()}
                </span>
              ) : (
                ''
              )}
              <input
                class={{
                  'text-input': true,
                  'hide-placeholder':
                    this.readonly ||
                    this.disabled ||
                    this.selectedCategory !== null,
                  'input-spacing': this.filterValues.length > 0,
                }}
                autocomplete="off"
                name="category-filter-input"
                disabled={this.disabled}
                readonly={this.readonly}
                ref={this.textInput}
                type="text"
                placeholder={this.placeholderState}
                {...this.a11yAttributes}
                aria-label={this.ariaLabelFilterInput}
              ></input>
            </div>
          </div>
          {!this.readonly && !this.disabled && (
            <ix-icon-button
              onClick={(e) => this.resetFilter(e)}
              class={{
                'reset-button': true,
                'hide-reset-button': !this.hasActiveFilterOrCategory(),
              }}
              variant="tertiary"
              oval
              icon={iconClear}
              iconColor="color-soft-text"
              size="16"
              aria-label={this.ariaLabelResetButton}
            ></ix-icon-button>
          )}
        </div>

        {this.disabled || this.readonly ? (
          ''
        ) : (
          <ix-dropdown
            show={this.isDropdownOpen}
            closeBehavior="outside"
            anchor={this.textInput?.waitForCurrent()}
            trigger={this.hostElement}
            enableTopLayer={this.enableTopLayer}
          >
            {this.shouldShowSearchOption() ? (
              <div>
                <ix-dropdown-item
                  onClick={() => this.addSearchToken(this.inputValue)}
                >
                  {this.getSearchInformationText()}
                </ix-dropdown-item>
                <ix-divider></ix-divider>
              </div>
            ) : (
              ''
            )}
            {this.renderDropdownContent()}
            {this.isLoading ? (
              <ix-dropdown-item disabled={true}>
                <div class="loading-container">
                  <ix-spinner size="small"></ix-spinner>
                  <span>Loading options...</span>
                </div>
              </ix-dropdown-item>
            ) : (
              ''
            )}
            {this.hasError ? (
              <div class="error-container">
                <ix-icon name="warning"></ix-icon>
                <div class="text-container">
                  <ix-typography format="body" text-color="std">
                    Fetching failed
                  </ix-typography>
                  <ix-typography format="body" text-color="soft">
                    Use free text search.
                  </ix-typography>
                </div>
              </div>
            ) : (
              ''
            )}
          </ix-dropdown>
        )}
      </Host>
    );
  }
}
