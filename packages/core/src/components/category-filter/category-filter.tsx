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
  Mixin,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { A11yAttributes, a11yBoolean, a11yHostAttributes } from '../utils/a11y';
import {
  addDisposableEventListener,
  DisposableEventListener,
} from '../utils/disposable-event-listener';
import { makeRef } from '../utils/make-ref';
import { IX_FOCUS_VISIBLE_ACTIVE } from '../utils/focus/focus-utilities';
import {
  FocusProxy,
  PROXY_LIST_ID_SUFFIX,
  PROXY_LISTITEM_ID_SUFFIX,
  updateFocusProxyList,
} from '../utils/focus/focus-proxy';
import { DefaultMixins } from '../utils/internal/component';
import {
  AriaActiveDescendantMixin,
  AriaActiveDescendantMixinContract,
} from '../utils/internal/mixins/accessibility/aria-activedescendant.mixin';
import {
  ComponentIdMixin,
  ComponentIdMixinContract,
} from '../utils/internal/mixins/id.mixin';
import {
  removeVisibleFocus,
  setVisibleFocus,
} from '../utils/internal/mixins/setup.mixin';
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
const INPUT_MIN_WIDTH = 175;
const MORE_CHIP_WIDTH = 100;
const DEFAULT_CHIP_WIDTH = 140;
const CHIP_MARGIN = 16;

let categoryFilterId = 0;

@Component({
  tag: 'ix-category-filter',
  styleUrl: 'category-filter.scss',
  shadow: true,
})
export class CategoryFilter
  extends Mixin(...DefaultMixins, ComponentIdMixin, AriaActiveDescendantMixin)
  implements AriaActiveDescendantMixinContract, ComponentIdMixinContract
{
  private focusInListener?: DisposableEventListener;
  private focusOutListener?: DisposableEventListener;
  private inputListener?: DisposableEventListener;
  private arrowKeyListener?: DisposableEventListener;

  private readonly hostId = `ix-category-filter-${categoryFilterId++}`;
  private readonly textInput? = makeRef<HTMLInputElement>();
  private tokenContainerEl?: HTMLDivElement;
  private chipsResizeObserver?: ResizeObserver;
  private chipWidths: Map<number, number> = new Map();
  private a11yAttributes?: A11yAttributes;

  @Element() override hostElement!: HTMLIxCategoryFilterElement;

  @State() hasFocus = false;
  @State() inputValue: string = '';
  @State() selectedCategory: FilterCategory | null = null;
  @State() selectedOperand: FilterOperand | null = null;
  @State() selectedValue: string | null = null;
  @State() filterValues: FilterAndSearchValue[] = [];
  @State() filteredOperands: FilterOperand[] = [];
  @State() availableValuesForSelectedCategory: string[] = [];
  @State() categoriesAvailableForSelection: FilterCategory[] = [];
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
   * i18n label for the header when all values of a category have been selected
   */
  @Prop() i18nAllValuesSelectedHeader =
    'All values of this category have already been selected';

  /**
   * i18n label for the subtext when all values of a category have been selected
   */
  @Prop() i18nAllValuesSelectedSubtext =
    'Remove a filter or select another category.';

  /**
   * i18n label for the button when all values of a category have been selected
   */
  @Prop() i18nAllValuesSelectedButton = 'See all categories';

  /**
   * i18n label for the header when all categories have been selected
   */
  @Prop() i18nAllCategoriesSelectedHeader = 'All categories have been selected';

  /**
   * i18n label for the subtext when all categories have been selected
   */
  @Prop() i18nAllCategoriesSelectedSubtext =
    'Remove a filter to free up a category.';

  /**
   * i18n label for the header when no category matches the input
   */
  @Prop() i18nNoCategoryMatchHeader =
    'The term you entered does not match with any category';

  /**
   * i18n label for the header when no operand matches the input
   */
  @Prop() i18nNoOperandMatchHeader =
    'The term you entered does not match with any operand';

  /**
   * i18n label for the header when no value matches the input
   */
  @Prop() i18nNoValueMatchHeader =
    'The term you entered does not match with any value';

  /**
   * i18n fallback label when no matches are found
   */
  @Prop() i18nNoMatchesFound = 'No matches found';

  /**
   * i18n label for the subtext prompting to remove a selected value
   */
  @Prop() i18nRemoveValueSubtext =
    'Remove a selected value or select another category.';

  /**
   * i18n label for the subtext prompting to remove input to see all options
   */
  @Prop() i18nRemoveInputSubtext = 'Remove your input to see all options.';

  /**
   * i18n label for the 'See all options' button
   */
  @Prop() i18nSeeAllOptions = 'See all options';

  /**
   * i18n label prefix for the close button on each filter chip.
   * The chip's full label will be appended, e.g. "Remove Status equals Active".
   *
   * @since 5.0.0
   */
  @Prop() ariaLabelRemoveChip = 'Remove';

  /**
   * If true, disables the free-text search functionality.
   * When disabled, the "Search for ..." option will not appear in the dropdown.
   */
  @Prop() disableFreeTextSearch = false;

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
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        this.handleEmptyStateButtonEnter();
      }
      return;
    }

    switch (e.code) {
      case 'ArrowDown':
      case 'ArrowUp':
        this.handleArrowNavigation(e);
        break;

      case 'Enter':
      case 'NumpadEnter':
        if (!this.handleEmptyStateButtonEnter()) {
          this.handleEnterKey();
        }
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

  private handleEmptyStateButtonEnter(): boolean {
    const focusedButton =
      this.hostElement.shadowRoot?.querySelector<HTMLElement>(
        `.empty-state ix-button.${IX_FOCUS_VISIBLE_ACTIVE}`
      );
    if (focusedButton) {
      focusedButton.click();
      return true;
    }
    return false;
  }

  private focusFirstDropdownItem(): void {
    requestAnimationFrameNoNgZone(() => {
      const first =
        this.hostElement.shadowRoot?.querySelector<HTMLIxDropdownItemElement>(
          'ix-dropdown-item'
        );
      if (first) {
        setVisibleFocus(first);
      }
    });
  }

  private clearAllDropdownVisualFocus(): void {
    removeVisibleFocus();
    this.hostElement.shadowRoot
      ?.querySelectorAll<HTMLElement>(`.${IX_FOCUS_VISIBLE_ACTIVE}`)
      .forEach((el) => el.classList.remove(IX_FOCUS_VISIBLE_ACTIVE));
  }

  private handleInputArrowKey(e: KeyboardEvent): void {
    if (e.code !== 'ArrowDown' && e.code !== 'ArrowUp') {
      return;
    }

    const emptyStateButton =
      this.hostElement.shadowRoot?.querySelector<HTMLElement>(
        '.empty-state ix-button'
      );
    if (!emptyStateButton) {
      return;
    }

    const dropdownItems = Array.from(
      this.hostElement.shadowRoot?.querySelectorAll<HTMLElement>(
        'ix-dropdown-item'
      ) ?? []
    );

    const buttonFocused = emptyStateButton.classList.contains(
      IX_FOCUS_VISIBLE_ACTIVE
    );
    const focusedIndex = dropdownItems.findIndex((item) =>
      item.classList.contains(IX_FOCUS_VISIBLE_ACTIVE)
    );
    const atLastItem =
      focusedIndex >= 0 && focusedIndex === dropdownItems.length - 1;

    if (e.code === 'ArrowDown' && (atLastItem || buttonFocused)) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (atLastItem) {
        this.clearAllDropdownVisualFocus();
        emptyStateButton.classList.add(IX_FOCUS_VISIBLE_ACTIVE);
      }
    } else if (e.code === 'ArrowUp' && buttonFocused) {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.clearAllDropdownVisualFocus();
      dropdownItems.at(-1)?.classList.add(IX_FOCUS_VISIBLE_ACTIVE);
    }
  }

  private focusFirstResultItem(): void {
    requestAnimationFrameNoNgZone(() => {
      const first =
        this.hostElement.shadowRoot?.querySelector<HTMLIxDropdownItemElement>(
          'ix-dropdown-item:not(.search-token-item)'
        );
      if (!first) {
        return;
      }
      setVisibleFocus(first);
    });
  }

  private getNavigableItems(): HTMLElement[] {
    const items = Array.from(
      this.hostElement.shadowRoot?.querySelectorAll<HTMLElement>(
        'ix-dropdown-item'
      ) ?? []
    );
    const emptyStateButton =
      this.hostElement.shadowRoot?.querySelector<HTMLElement>(
        '.empty-state ix-button'
      );
    if (emptyStateButton) {
      items.push(emptyStateButton);
    }
    return items;
  }

  private setNavigationFocus(item: HTMLElement): void {
    this.hostElement.shadowRoot
      ?.querySelectorAll<HTMLElement>(
        `ix-dropdown-item.${IX_FOCUS_VISIBLE_ACTIVE}, .empty-state ix-button.${IX_FOCUS_VISIBLE_ACTIVE}`
      )
      .forEach((el) => el.classList.remove(IX_FOCUS_VISIBLE_ACTIVE));

    if (item.tagName === 'IX-BUTTON') {
      removeVisibleFocus();
      item.classList.add(IX_FOCUS_VISIBLE_ACTIVE);
    } else {
      item.focus();
    }
  }

  private handleArrowNavigation(e: KeyboardEvent): void {
    const wasOpen = this.isDropdownOpen;
    if (!wasOpen) {
      if (!this.hasFocus) {
        return;
      }
      this.isDropdownOpen = true;
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    const navigate = () => {
      const items = this.getNavigableItems();
      if (!items.length) return;

      const path = wasOpen ? e.composedPath() : [];
      let currentIndex = items.findIndex((item) => path.includes(item));
      if (currentIndex < 0 && wasOpen) {
        currentIndex = items.findIndex((item) =>
          item.classList.contains(IX_FOCUS_VISIBLE_ACTIVE)
        );
      }
      const direction = e.code === 'ArrowDown' ? 1 : -1;
      const nextIndex =
        currentIndex < 0
          ? direction > 0
            ? 0
            : items.length - 1
          : currentIndex + direction;

      if (nextIndex < 0 || nextIndex >= items.length) {
        return;
      }

      this.setNavigationFocus(items[nextIndex]);
    };

    if (wasOpen) {
      navigate();
    } else {
      requestAnimationFrameNoNgZone(navigate);
    }
  }

  private handleEnterKey(): void {
    this.combineFilter();
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

    if (newValue) {
      this.focusFirstResultItem();
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
    this.inputValue = '';
    this.placeholderState = this.placeholder ?? '';
    this.categoriesAvailableForSelection = this.categories ?? [];

    if (this.textInput?.current) {
      this.textInput.current.value = '';
    }

    this.filterChanged.emit(this.filterValues);
    this.textInput?.current?.focus();
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
            {this.categoriesAvailableForSelection.map((category) => (
              <ix-dropdown-item
                onClick={() => this.selectCategory(category)}
                label={category.label}
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
    this.focusFirstDropdownItem();
    this.textInput?.current?.focus();
    this.placeholderState = '';
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
            {this.filteredOperands.map((operand) => (
              <ix-dropdown-item
                onClick={() => this.selectOperand(operand)}
                label={operand.label}
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
    this.focusFirstDropdownItem();
    this.textInput?.current?.focus();
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
            {this.availableValuesForSelectedCategory.map((value) => (
              <ix-dropdown-item
                onClick={() => this.selectValue(value)}
                label={value}
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
        {filtered.map((suggestion) => (
          <ix-dropdown-item
            label={suggestion}
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
    if (type === 'category' && this.isAllCategoriesSelectedCase()) {
      return 'allCategoriesSelected';
    }
    return 'default';
  }

  private isAllCategoriesSelectedCase(): boolean {
    return (
      this.uniqueCategories &&
      !!this.categories &&
      this.categories.length > 0 &&
      this.categories.every((cat) => this.isCategoryAlreadySet(cat.key))
    );
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
                {this.i18nAllValuesSelectedHeader}
              </ix-typography>
              <ix-typography format="body" class="light-text">
                {this.i18nAllValuesSelectedSubtext}
              </ix-typography>
            </div>
            <ix-button
              variant="secondary"
              onClick={() => this.resetCurrentSelection()}
            >
              {this.i18nAllValuesSelectedButton}
            </ix-button>
          </div>
        );
      case 'noValueMatches':
        return (
          <div class="empty-state">
            <div>
              <ix-typography format="body">
                {this.i18nNoValueMatchHeader}
              </ix-typography>
              <ix-typography format="body" class="light-text">
                {this.i18nRemoveValueSubtext}
              </ix-typography>
            </div>
            <ix-button
              variant="secondary"
              onClick={() => this.resetCurrentSelection()}
            >
              {this.i18nSeeAllOptions}
            </ix-button>
          </div>
        );
      case 'allCategoriesSelected':
        return (
          <div class="empty-state">
            <div>
              <ix-typography format="body">
                {this.i18nAllCategoriesSelectedHeader}
              </ix-typography>
              <ix-typography format="body" class="light-text">
                {this.i18nAllCategoriesSelectedSubtext}
              </ix-typography>
            </div>
          </div>
        );
      case 'noCategoryMatches':
        return (
          <div class="empty-state">
            <div>
              <ix-typography format="body">
                {this.i18nNoCategoryMatchHeader}
              </ix-typography>
              <ix-typography format="body" class="light-text">
                {this.i18nRemoveInputSubtext}
              </ix-typography>
            </div>
            <ix-button
              variant="secondary"
              onClick={() => this.resetCurrentSelection()}
            >
              {this.i18nSeeAllOptions}
            </ix-button>
          </div>
        );
      default: {
        const messageMap: Record<string, string> = {
          category: this.i18nNoCategoryMatchHeader,
          operand: this.i18nNoOperandMatchHeader,
          value: this.i18nNoValueMatchHeader,
        };
        const message = messageMap[type] || this.i18nNoMatchesFound;
        return (
          <div class="empty-state">
            <div>
              <ix-typography format="body">{message}</ix-typography>
              <ix-typography format="body" class="light-text">
                {this.i18nRemoveInputSubtext}
              </ix-typography>
            </div>
            <ix-button
              variant="secondary"
              onClick={() => this.resetCurrentSelection()}
            >
              {this.i18nSeeAllOptions}
            </ix-button>
          </div>
        );
      }
    }
  }

  private combineFilter() {
    if (!this.selectedCategory || !this.selectedOperand) {
      if (this.inputValue && !this.disableFreeTextSearch) {
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
      return value.value;
    }
    return `${this.getCategoryLabel(value.category)} ${value.operand.key} "${value.value}"`;
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
    this.isDropdownOpen = false;
  }

  private onInput() {
    this.inputValue = this.textInput?.current?.value ?? '';
    if (!this.isDropdownOpen) {
      this.isDropdownOpen = true;
    }
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
    if (this.disableFreeTextSearch || !this.inputValue) {
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
    const availableWidth = containerWidth - INPUT_MIN_WIDTH - MORE_CHIP_WIDTH;

    let visibleCount = 0;
    let usedWidth = 0;

    for (let i = 0; i < this.filterValues.length; i++) {
      const chipWidth = this.chipWidths.get(i) || DEFAULT_CHIP_WIDTH;
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
      const width = element.offsetWidth + CHIP_MARGIN;
      if (this.chipWidths.get(index) !== width) {
        this.chipWidths.set(index, width);
        this.calculateVisibleChips();
      }
    });
  }

  override componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
    this.placeholderState = this.placeholder ?? '';
    if (this.categories) {
      this.categoriesAvailableForSelection = [...this.categories];
    }
    this.filteredOperands = this.operands;
  }

  override componentDidLoad() {
    super.componentDidLoad();
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

      this.arrowKeyListener = addDisposableEventListener(
        this.textInput.current,
        'keydown',
        (e: Event) => this.handleInputArrowKey(e as KeyboardEvent)
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

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.focusInListener?.();
    this.focusOutListener?.();
    this.inputListener?.();
    this.arrowKeyListener?.();
    this.chipsResizeObserver?.disconnect();
  }

  override componentDidRender() {
    this.updateAriaProxyListbox();
  }

  override getControllingAriaElement():
    | Promise<HTMLElement>
    | HTMLElement
    | null {
    return this.textInput?.waitForCurrent() ?? null;
  }

  override isAriaActiveDescendantActive(): boolean {
    return this.isDropdownOpen;
  }

  override getAriaActiveDescendantProxyItemId(): string | boolean {
    return PROXY_LISTITEM_ID_SUFFIX;
  }

  private getProxyableDropdownItems(): HTMLIxDropdownItemElement[] {
    return Array.from(
      this.hostElement.shadowRoot?.querySelectorAll<HTMLIxDropdownItemElement>(
        'ix-dropdown-item'
      ) ?? []
    );
  }

  private getEmptyStateAnnouncementText(): string | null {
    if (!this.isDropdownOpen) {
      return null;
    }

    if (!this.categories) {
      return null;
    }

    if (!this.selectedCategory) {
      if (this.categoriesAvailableForSelection.length === 0) {
        return this.inputValue
          ? this.i18nNoCategoryMatchHeader
          : this.isAllCategoriesSelectedCase()
            ? this.i18nAllCategoriesSelectedHeader
            : null;
      }
      return null;
    }

    if (!this.selectedOperand) {
      return this.filteredOperands.length === 0
        ? this.i18nNoOperandMatchHeader
        : null;
    }

    if (this.availableValuesForSelectedCategory.length === 0) {
      return this.inputValue
        ? this.i18nNoValueMatchHeader
        : this.i18nAllValuesSelectedHeader;
    }

    return null;
  }

  private updateAriaProxyListbox() {
    const proxyList = this.hostElement.shadowRoot?.getElementById(
      `${this.hostId}-${PROXY_LIST_ID_SUFFIX}`
    );

    if (!proxyList) {
      return;
    }

    const items = this.getProxyableDropdownItems();
    if (items.length === 0) {
      proxyList.innerHTML = '';
      const message = this.getEmptyStateAnnouncementText();
      if (message) {
        const emptyStateItemId = `${this.hostId}-empty-state-option`;
        const li = document.createElement('li');

        li.id = emptyStateItemId;
        li.setAttribute('role', 'option');
        li.setAttribute('aria-disabled', 'true');
        li.textContent = message;
        proxyList.appendChild(li);

        this.textInput?.current?.setAttribute(
          'aria-activedescendant',
          emptyStateItemId
        );
      } else {
        this.textInput?.current?.removeAttribute('aria-activedescendant');
      }
      return;
    }

    this.textInput?.current?.removeAttribute('aria-activedescendant');

    updateFocusProxyList(proxyList, items, (item, proxyElement) => {
      proxyElement.setAttribute('role', 'option');
      const label = item.label ?? item.textContent?.trim() ?? '';

      proxyElement.textContent = label;
      proxyElement.setAttribute(
        'aria-label',
        item.getAttribute('aria-label') || label
      );
      proxyElement.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        item.click();
      });

      item.ariaHidden = 'true';
    });
  }

  @Watch('isDropdownOpen')
  watchDropdownOpen(open: boolean) {
    if (!open) {
      this.clearActiveDescendant();
    }
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
            onCloseClick={() => this.removeFilterValue(index)}
            data-tooltip={`filterValue-${index}`}
            ariaLabelCloseIconButton={`${this.ariaLabelRemoveChip} ${this.getTooltipText(value)}`}
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
          tabIndex={0}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={a11yBoolean(this.showRemainingFilterValuesDropdown)}
          onClick={(e: MouseEvent) => {
            e.stopPropagation();
            this.additionalFilterValuesClicked();
          }}
          onKeyDown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.additionalFilterValuesClicked();
            }
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
                  ariaLabelCloseIconButton={`${this.ariaLabelRemoveChip} ${this.getTooltipText(value)}`}
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

  private getDropdownAriaDescription(): string | undefined {
    if (!this.categories) {
      return undefined;
    }
    if (!this.selectedCategory) {
      return this.labelCategories;
    }
    if (!this.selectedOperand) {
      return this.labelOperands;
    }
    return this.labelValues;
  }

  override render() {
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
                id={`${this.hostId}-input`}
                class={{
                  'text-input': true,
                  'hide-placeholder':
                    this.readonly ||
                    this.disabled ||
                    this.selectedCategory !== null,
                }}
                autocomplete="off"
                name="category-filter-input"
                disabled={this.disabled}
                readonly={this.readonly}
                ref={this.textInput}
                type="text"
                role="combobox"
                aria-controls={`${this.hostId}-${PROXY_LIST_ID_SUFFIX}`}
                aria-expanded={a11yBoolean(this.isDropdownOpen)}
                aria-autocomplete="list"
                aria-haspopup="listbox"
                placeholder={this.placeholderState}
                onClick={() => (this.isDropdownOpen = true)}
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
              variant="subtle-tertiary"
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
            enableTopLayer={this.enableTopLayer}
            ariaDescription={this.getDropdownAriaDescription()}
            onShowChanged={(e: CustomEvent<boolean>) => {
              this.isDropdownOpen = e.detail;
            }}
          >
            {this.shouldShowSearchOption() ? (
              <div>
                <ix-dropdown-item
                  class="search-token-item"
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
            <FocusProxy
              hostId={this.hostId}
              otherProps={{
                'aria-hidden': a11yBoolean(!this.isDropdownOpen),
                hidden: this.disabled || this.readonly,
              }}
            ></FocusProxy>
          </ix-dropdown>
        )}
      </Host>
    );
  }
}
