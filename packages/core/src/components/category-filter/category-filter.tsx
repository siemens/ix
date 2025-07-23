/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
import { BaseButton, BaseButtonProps } from '../button/base-button';
import { FilterState } from './filter-state';
import { InputState } from './input-state';
import { LogicalFilterOperator } from './logical-filter-operator';
import { iconClear, iconSearch } from '@siemens/ix-icons/icons';
import { makeRef } from '../utils/make-ref';
import {
  addDisposableEventListener,
  DisposableEventListener,
} from '../utils/disposable-event-listener';
import { A11yAttributes, a11yHostAttributes } from '../utils/a11y';

@Component({
  tag: 'ix-category-filter',
  styleUrl: 'category-filter.scss',
  shadow: true,
})
export class CategoryFilter {
  private readonly ID_CUSTOM_FILTER_VALUE = 'CW_CUSTOM_FILTER_VALUE';

  private formKeyDownListener?: DisposableEventListener;
  private preventDefaultListener?: DisposableEventListener;
  private inputKeyDownListener?: DisposableEventListener;
  private focusInListener?: DisposableEventListener;
  private focusOutListener?: DisposableEventListener;
  private inputListener?: DisposableEventListener;

  private readonly textInput? = makeRef<HTMLInputElement>();
  private formElement?: HTMLFormElement;
  private isScrollStateDirty?: boolean;
  private a11yAttributes?: A11yAttributes;

  @Element() hostElement!: HTMLIxCategoryFilterElement;

  @State() showDropdown = false;
  @State() hasFocus = false;
  @State() categoryLogicalOperator = LogicalFilterOperator.EQUAL;
  @State() inputValue: string = '';
  @State() category: string = '';
  @State() filterTokens: Array<{
    id: string;
    value: string;
    operator: LogicalFilterOperator;
  }> = [];

  /**
   * If true the filter will be in disabled state
   */
  @Prop() disabled = false;

  /**
   * If true the filter will be in readonly mode
   */
  @Prop() readonly = false;

  /**
   * A set of search criteria to populate the component with.
   */
  @Prop() filterState?: FilterState;

  /**
   * Placeholder text to be displayed in an empty input field.
   */
  @Prop() placeholder?: string;

  /**
   * Configuration object hash used to populate the dropdown menu for type-ahead and quick selection functionality.
   * Each ID maps to an object with a label and an array of options to select from.
   */
  @Prop() categories?: {
    [id: string]: {
      label: string;
      options: string[];
    };
  };

  /**
   * In certain use cases some categories may not be available for selection anymore.
   * To allow proper display of set filters with these categories this ID to label mapping can be populated.
   *
   * Configuration object hash used to supply labels to the filter chips in the input field.
   * Each ID maps to a string representing the label to display.
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
   * If set categories will always be filtered via the respective logical operator.
   * Toggling of the operator will not be available to the user.
   */
  @Prop() staticOperator?: LogicalFilterOperator;

  /**
   * If set to true, allows that a single category can be set more than once.
   * An already set category will not appear in the category dropdown if set to false.
   *
   * Defaults to true
   */
  @Prop() repeatCategories = true;

  /**
   * @internal For debugging purposes only!
   */
  @Prop() tmpDisableScrollIntoView = true;

  /**
   * i18n
   */
  @Prop() labelCategories = 'Categories';

  /**
   * i18n
   */
  @Prop() i18nPlainText = 'Filter by text';

  /**
   * ARIA label for the reset button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelResetButton?: string;

  /**
   * ARIA label for the operator button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelOperatorButton?: string;

  /**
   * ARIA label for the filter input
   * Will be set as aria-label on the nested HTML input element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelFilterInput?: string;

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
  @Event() filterChanged!: EventEmitter<FilterState>;

  /**
   * Event dispatched whenever the filter gets cleared.
   */
  @Event() filterCleared!: EventEmitter<void>;

  get dropdown() {
    return this.hostElement.shadowRoot!.querySelector('ix-dropdown');
  }

  @Watch('filterState')
  watchFilterState(newValue: FilterState) {
    this.setFilterState(newValue);
  }

  private preventDefault(e: Event) {
    e.preventDefault();
  }

  private onFocusIn() {
    this.hasFocus = true;
  }

  private onFocusOut() {
    this.hasFocus = false;
  }

  private onInput() {
    this.inputValue = this.textInput?.current?.value ?? '';
    const inputState = new InputState(this.inputValue, this.category);
    this.inputChanged.emit(inputState);

    if (!this.dropdown?.show) {
      this.openDropdown();
    }
  }

  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
  }

  componentDidLoad() {
    setTimeout(() => {
      if (this.filterState !== undefined) {
        this.setFilterState(this.filterState);
      }
    });

    if (this.formElement !== undefined) {
      this.formKeyDownListener = addDisposableEventListener(
        this.formElement,
        'keydown',
        ((e: KeyboardEvent) =>
          this.handleFormElementKeyDown(e)) as EventListener
      );

      this.preventDefaultListener = addDisposableEventListener(
        this.formElement,
        'submit',
        this.preventDefault
      );
    }

    if (this.textInput?.current == null) {
      console.warn(
        'ix-category-filter - unable to add event listeners to native input element'
      );
      return;
    }

    this.inputKeyDownListener = addDisposableEventListener(
      this.textInput.current,
      'keydown',
      ((e: KeyboardEvent) => this.handleInputElementKeyDown(e)) as EventListener
    );

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

  private setFilterState(state: FilterState) {
    this.filterTokens = [];

    for (const token of state.tokens) {
      this.addToken(
        token,
        this.ID_CUSTOM_FILTER_VALUE,
        this.categoryLogicalOperator,
        false
      );
    }

    for (const category of state.categories) {
      this.addToken(category.value, category.id, category.operator, false);
    }

    this.emitFilterEvent();
  }

  private closeDropdown() {
    if (this.disabled || this.readonly) {
      return;
    }

    if (this.dropdown) {
      this.dropdown.show = false;
    }
  }

  private openDropdown() {
    if (this.disabled || this.readonly) {
      return;
    }

    if (this.dropdown) {
      this.dropdown.show = true;
    }
  }

  private handleFormElementKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case 'Enter':
      case 'NumpadEnter':
        if (!document.activeElement?.classList.contains('dropdown-item')) {
          return;
        }

        const token = document.activeElement.getAttribute('data-id');

        if (token === null) {
          break;
        }

        if (this.hasCategorySelection()) {
          if (this.category !== '') {
            this.addToken(token, this.category);
          } else if (
            document.activeElement.classList.contains('category-item-id')
          ) {
            this.selectCategory(token);
          }
        } else {
          this.addToken(token);
        }

        e.preventDefault();
        break;

      case 'ArrowUp':
        this.focusPreviousItem();
        e.preventDefault();
        break;

      case 'ArrowDown':
        this.showDropdown = true;
        this.focusNextItem();
        e.preventDefault();
        break;

      case 'Escape':
        this.closeDropdown();
        break;
    }
  }

  private focusPreviousItem() {
    const sibling = document.activeElement?.previousSibling;
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }

  private focusNextItem() {
    const sibling = document.activeElement?.nextSibling;
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }

  private focusElement(selector: string): boolean {
    const item = this.hostElement.shadowRoot!.querySelector(selector);
    if (item instanceof HTMLElement) {
      item.focus();
      return true;
    }
    return false;
  }

  private onArrowDown(e: KeyboardEvent) {
    const baseSelector = `.category-item-${
      this.category !== '' ? 'value' : 'id'
    }`;
    const fallbackSelector = '.category-item';

    if (this.focusElement(baseSelector)) {
      e.stopPropagation();
      return;
    }

    if (this.suggestions?.length && this.focusElement(fallbackSelector)) {
      e.stopPropagation();
    }
  }

  private handleInputElementKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case 'ArrowDown': {
        this.onArrowDown(e);
        break;
      }

      case 'Backspace':
        if (this.textInput?.current?.value !== '') {
          return;
        }

        if (this.category !== '') {
          this.category = '';
          return;
        }

        const tokenCount = this.filterTokens.length;
        if (tokenCount > 0) {
          this.removeToken(tokenCount - 1);
        }
        break;

      case 'Enter':
      case 'NumpadEnter':
        this.addToken(
          this.inputValue,
          this.category || this.ID_CUSTOM_FILTER_VALUE
        );
        e.preventDefault();
        break;
    }
  }

  private emitFilterEvent() {
    const tokens = this.filterTokens
      .filter((item) => item.id === this.ID_CUSTOM_FILTER_VALUE)
      .map((item) => item.value);
    const categories = this.filterTokens.filter(
      (item) => item.id !== this.ID_CUSTOM_FILTER_VALUE
    );
    const filterState: FilterState = {
      tokens,
      categories,
    };

    this.filterChanged.emit(filterState);
  }

  private addToken(
    token: string,
    category: string = this.ID_CUSTOM_FILTER_VALUE,
    operator = this.categoryLogicalOperator,
    emitEvent = true
  ) {
    if (token === undefined || token === null) {
      return;
    }

    const newToken = token.trim();

    if (newToken === '') {
      return;
    }

    if (this.hasToken(newToken)) {
      return;
    }

    const pair = { id: category, value: newToken, operator };
    this.filterTokens = [...this.filterTokens, pair];
    if (this.textInput?.current) {
      this.textInput.current.value = '';
    }
    this.inputValue = '';
    this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;

    if (this.category !== '') {
      this.category = '';
    }

    this.isScrollStateDirty = true;

    this.textInput?.current?.focus();

    if (emitEvent) {
      this.emitFilterEvent();
    }
  }

  private removeToken(index: number) {
    this.filterTokens = this.filterTokens.filter((_, i) => i !== index);
    this.emitFilterEvent();
  }

  private getCategoryIds() {
    const ids = [];
    for (const id in this.categories) {
      if (Object.prototype.hasOwnProperty.call(this.categories, id)) {
        ids.push(id);
      }
    }

    return ids;
  }

  private selectCategory(category: string) {
    this.category = category;
    if (this.textInput?.current) {
      this.textInput.current.value = '';
    }
    this.inputValue = '';
    this.textInput?.current?.focus();
    this.categoryChanged.emit(category);
  }

  private resetFilter(e: Event) {
    const { defaultPrevented } = this.filterCleared.emit();

    if (defaultPrevented) {
      return;
    }

    e.stopPropagation();
    this.closeDropdown();
    this.filterTokens = [];
    if (this.category) {
      this.category = '';
      this.categoryChanged.emit(undefined);
    }

    this.emitFilterEvent();
  }

  private filterMultiples(value: string) {
    if (this.repeatCategories) {
      return true;
    }

    const isCategoryAlreadySet = this.filterTokens.find(
      (token) => token.id === value
    );

    return !isCategoryAlreadySet;
  }

  private hasToken(token: string) {
    return this.filterTokens.some((filterToken) => {
      const hasSameValue = filterToken.value === token;

      if (!hasSameValue) {
        return false;
      }

      if (this.category !== '') {
        return this.category === filterToken.id;
      }

      if (filterToken.id) {
        return filterToken.id === this.ID_CUSTOM_FILTER_VALUE;
      }

      return hasSameValue;
    });
  }

  private filterDuplicateTokens(value: string) {
    return !this.hasToken(value);
  }

  private filterByInput(value: string) {
    if (this.inputValue === undefined || this.inputValue === '') {
      return true;
    }

    return value.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1;
  }

  private toggleCategoryOperator() {
    switch (this.categoryLogicalOperator) {
      case LogicalFilterOperator.EQUAL:
        this.categoryLogicalOperator = LogicalFilterOperator.NOT_EQUAL;
        break;

      case LogicalFilterOperator.NOT_EQUAL:
        this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
        break;
    }
  }

  private getFilterChipLabel(value: {
    id: string;
    value: string;
    operator: LogicalFilterOperator;
  }): string {
    if (value.id === this.ID_CUSTOM_FILTER_VALUE) {
      return value.value;
    }

    const operatorString =
      value.operator === LogicalFilterOperator.EQUAL ? '=' : '!=';
    const label =
      this.categories?.[value.id]?.label ??
      this.nonSelectableCategories?.[value.id] ??
      value.id;

    return `${label} ${operatorString} ${value.value}`;
  }

  private getFilteredSuggestions() {
    if (!this.suggestions?.length) {
      return [];
    }

    return this.suggestions
      ?.filter((value) => this.filterByInput(value))
      .filter((value) => this.filterDuplicateTokens(value));
  }

  private hasCategorySelection() {
    return this.categories !== undefined;
  }

  private renderPlainSuggestions() {
    return (
      <div class="dropdown-item-container">
        {this.getFilteredSuggestions().map((suggestion) => (
          <button
            class="dropdown-item"
            data-id={suggestion}
            onClick={() => this.addToken(suggestion)}
            key={suggestion}
            title={suggestion}
          >
            {suggestion}
          </button>
        ))}
      </div>
    );
  }

  private renderOperatorButton() {
    if (this.staticOperator) {
      return '';
    }

    const params: BaseButtonProps = {
      type: 'button',
      variant: 'secondary',
      outline: false,
      ghost: true,
      iconOnly: true,
      iconOval: false,
      selected: false,
      disabled: this.disabled || this.staticOperator !== undefined,
      loading: false,
      icon: '',
      onClick: (e: Event) => {
        e.stopPropagation();
        this.toggleCategoryOperator();
      },
      extraClasses: {
        'btn-icon-32': true,
        'btn-toggle-operator': true,
      },
      ariaAttributes: { 'aria-label': this.ariaLabelOperatorButton },
    };

    return (
      <BaseButton {...params}>
        {this.categoryLogicalOperator === LogicalFilterOperator.NOT_EQUAL
          ? '='
          : '!='}
      </BaseButton>
    );
  }

  private getFilterOperatorString() {
    let operator: LogicalFilterOperator;
    if (this.staticOperator !== undefined) {
      operator = this.staticOperator;
    } else {
      operator = this.categoryLogicalOperator;
    }
    return `${operator === LogicalFilterOperator.EQUAL ? '=' : '!='} `;
  }

  private renderCategoryValues() {
    if (this.categories === undefined) {
      return;
    }

    return (
      <div class="dropdown-item-container">
        {this.renderOperatorButton()}
        <div class="dropdown-header">
          {this.categories[this.category]?.label}
        </div>
        {this.categories[this.category]?.options
          .filter((value) => this.filterByInput(value))
          .filter((value) => this.filterDuplicateTokens(value))
          .map((id) => (
            <button
              class="dropdown-item category-item-value"
              data-id={id}
              title={id}
              key={id}
              onClick={(e) => {
                e.preventDefault();
                this.addToken(id, this.category);
              }}
            >
              {`${this.getFilterOperatorString()} ${id}`}
            </button>
          ))}
      </div>
    );
  }

  private renderDropdownContent() {
    if (this.hasCategorySelection()) {
      if (this.category !== '') {
        return this.renderCategoryValues();
      } else {
        return this.renderCategorySelection();
      }
    } else return this.renderPlainSuggestions();
  }

  private renderCategorySelection() {
    return (
      <div class="dropdown-item-container">
        {this.getCategoryIds()
          ?.filter(
            (id) =>
              this.categories && this.filterByInput(this.categories[id].label)
          )
          .filter((id) => this.filterMultiples(id))
          .map((id) => (
            <button
              class="dropdown-item category-item category-item-id"
              data-id={id}
              title={this.categories?.[id]?.label}
              key={id}
              onClick={(e) => {
                e.preventDefault();
                this.selectCategory(id);
              }}
              tabindex="0"
            >
              {this.categories?.[id]?.label}
            </button>
          ))}
      </div>
    );
  }

  private getDropdownHeader() {
    if (this.categories !== undefined) {
      if (this.category !== '') {
        return undefined;
      } else {
        return this.labelCategories;
      }
    }

    return this.i18nPlainText;
  }

  componentDidRender() {
    if (this.isScrollStateDirty) {
      if (!this.tmpDisableScrollIntoView) {
        this.textInput?.current?.scrollIntoView();
      }
      this.isScrollStateDirty = false;
    }
  }

  disconnectedCallback() {
    if (this.preventDefaultListener) {
      this.preventDefaultListener();
    }
    if (this.formKeyDownListener) {
      this.formKeyDownListener();
    }
    if (this.inputKeyDownListener) {
      this.inputKeyDownListener?.();
    }
    if (this.focusInListener) {
      this.focusInListener();
    }
    if (this.focusOutListener) {
      this.focusOutListener();
    }
    if (this.inputListener) {
      this.inputListener();
    }
  }

  private getResetButton() {
    return (
      <ix-icon-button
        onClick={(e) => this.resetFilter(e)}
        class={{
          'reset-button': true,
          'hide-reset-button':
            !this.filterTokens.length && this.category === '',
        }}
        ghost
        oval
        icon={iconClear}
        size="16"
        aria-label={this.ariaLabelResetButton}
      ></ix-icon-button>
    );
  }

  private getIconColor() {
    if (this.disabled) {
      return 'color-componentn-1';
    }

    if (this.readonly) {
      return 'color-std-txt';
    }

    return 'color-primary';
  }

  render() {
    return (
      <Host>
        <form ref={(el) => (this.formElement = el)}>
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
            <div class="token-container">
              <div class="list-unstyled">
                {this.filterTokens.map((value, index) => (
                  <span
                    key={value.toString()}
                    class={{
                      animate__animated: true,
                      animate__fadein: true,
                    }}
                  >
                    <ix-filter-chip
                      disabled={this.disabled}
                      readonly={this.readonly}
                      onClick={(e) => e.stopPropagation()}
                      onCloseClick={() => this.removeToken(index)}
                    >
                      {this.getFilterChipLabel(value)}
                    </ix-filter-chip>
                  </span>
                ))}
                {this.categories === undefined ? (
                  ''
                ) : (
                  <span
                    class={{
                      'category-preview': true,
                      'display-none': this.category === '',
                    }}
                  >
                    {this.categories[this.category]?.label}
                  </span>
                )}
                <input
                  class={{
                    'text-input': true,
                    'hide-placeholder':
                      this.readonly || this.disabled || this.category !== '',
                  }}
                  autocomplete="off"
                  name="category-filter-input"
                  disabled={this.disabled}
                  readonly={this.readonly}
                  ref={this.textInput}
                  type="text"
                  placeholder={this.placeholder}
                  {...this.a11yAttributes}
                  aria-label={this.ariaLabelFilterInput}
                ></input>
              </div>
            </div>
            {!this.readonly && !this.disabled && this.getResetButton()}
          </div>
        </form>

        {this.disabled || this.readonly ? (
          ''
        ) : (
          <ix-dropdown
            show={this.showDropdown}
            closeBehavior="outside"
            offset={{ mainAxis: 2 }}
            anchor={this.textInput?.waitForCurrent()}
            trigger={this.hostElement}
            header={this.getDropdownHeader()}
          >
            {this.renderDropdownContent()}
          </ix-dropdown>
        )}
      </Host>
    );
  }
}
