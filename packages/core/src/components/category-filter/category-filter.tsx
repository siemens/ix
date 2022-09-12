
import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Listen,
    Prop,
    State,
    Watch
} from '@stencil/core';
import { convertToRemString } from '../utils/rwd.util';
import { FilterState } from './filter-state';
import { InputState } from './input-state';
import { LogicalFilterOperator } from './logical-filter-operator';

@Component({
  tag: 'ix-category-filter',
  styleUrl: 'category-filter.scss',
  scoped: true,
})
export class CategoryFilter {
  private readonly ID_CUSTOM_FILTER_VALUE = 'CW_CUSTOM_FILTER_VALUE';

  private textInput?: HTMLInputElement;
  private formElement?: HTMLFormElement;
  private isScrollStateDirty: boolean;

  @Element() hostElement: HTMLIxCategoryFilterElement;

  @State() hasFocus: boolean;
  @State() showCategorySelection: boolean;
  @State() categoryLogicalOperator = LogicalFilterOperator.EQUAL;
  @State() inputValue: string;
  @State() category: string;
  @State() filterTokens: Array<{
    id: string;
    value: string;
    operator: LogicalFilterOperator;
  }> = [];
  @State() offsetDropdownX: string;
  @State() offsetDropdownY: string;
  @State() maxHeightDropdown: string;
  @State() maxWidthDropdown: string;

  /**
   * When set this will initially populate the component with the provided search criteria.
   * This will trigger all input events accordingly.
   * @deprecated will get removed with next major release (7.0.0). Use the member filterState instead.
   */
  @Prop() initialState: FilterState;

  /**
   * A set of search criteria to populate the component with.
   */
  @Prop() filterState: FilterState;

  /**
   * Placeholder text to be displayed in an empty input field.
   */
  @Prop() placeholder: string;

  /**
   * Configuration object hash used to populate the dropwdown menu for typeahead and quick selection functionality.
   * Each ID maps to an object with a label and an array of options to select from.
   */
  @Prop() categories: {
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
  @Prop() nonSelectableCategories?: {
    [id: string]: string;
  } = {};

  /**
   * A list of strings that will be supplied as typeahead suggestions not tied to any categories.
   */
  @Prop() suggestions: string[];

  /**
   * The icon next to the actual text input
   * Defaults to 'search'
   */
  @Prop() icon = 'search';

  /**
   * Allows to hide the icon inside the text input.
   * Defaults to false
   */
  @Prop() hideIcon: boolean;

  /**
   * If set to true allows that a single category can be set more than once.
   * An already set category will not appear in the category dropdown if set to false.
   *
   * Defaults to true
   */
  @Prop() repeatCategories = true;

  /**
   * @deprecated For debugging purposes only!
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
   * Event dispatched whenever the text input changes.
   */
  @Event() inputChanged: EventEmitter<InputState>;

  /**
   * Event dispatched whenever the filter state changes.
   */
  @Event() filterChanged: EventEmitter<FilterState>;

  private readonly documentClickCallback = this.handleDocumentClick.bind(this);

  @Watch('filterState')
  watchFilterState(newValue) {
    this.setFilterState(newValue);
  }

  @Watch('showCategorySelection')
  watchShowCategorySelection(newValue) {
    if (newValue) {
      document.addEventListener('click', this.documentClickCallback);
    } else {
      document.removeEventListener('click', this.documentClickCallback);
    }
  }

  @Listen('resize', { target: 'window' })
  setDropdownOffset() {
    const height = this.calculateDropdownHeight();
    this.maxHeightDropdown = convertToRemString(height);
  }

  componentDidLoad() {
    if (this.initialState !== undefined) {
      this.setFilterState(this.initialState);
    } else if (this.filterState !== undefined) {
      this.setFilterState(this.filterState);
    }

    this.hostElement?.addEventListener(
      'keydown',
      this.handleFormElementKeyDown.bind(this)
    );

    this.formElement?.addEventListener('submit', (e) => e.preventDefault());

    if (this.textInput == null) {
      console.warn(
        'Core UI category filter - unable to add event listeners to native input element'
      );
      return;
    }

    this.textInput.addEventListener(
      'click',
      () => (this.showCategorySelection = true)
    );
    this.textInput.addEventListener('focusin', () => {
      this.hasFocus = true;
    });
    this.textInput.addEventListener('focusout', () => (this.hasFocus = false));
    this.textInput.addEventListener('input', () => {
      this.inputValue = this.textInput.value;
      const inputState = new InputState(this.inputValue, this.category);
      this.inputChanged.emit(inputState);
      this.showCategorySelection = true;
    });
    this.textInput.addEventListener(
      'keydown',
      this.handleInputElementKeyDown.bind(this)
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

  private handleDocumentClick(ev: MouseEvent) {
    const target = ev.target as HTMLElement;

    if (!this.hostElement.contains(target)) {
      this.closeDropdown();
    }
  }

  private closeDropdown() {
    this.showCategorySelection = false;
    this.category = undefined;
  }

  private handleFormElementKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case 'Enter':
      case 'NumpadEnter':
        if (
          this.category ||
          document.activeElement.classList.contains('plain-text-suggestion')
        ) {
          const token = document.activeElement.getAttribute('data-id');

          this.addToken(token, this.category);
        } else if (
          document.activeElement.classList.contains('category-item-id')
        ) {
          this.selectCategory(document.activeElement.getAttribute('data-id'));
        }
        e.preventDefault();
        break;

      case 'ArrowUp':
        this.focusPreviousItem();
        e.preventDefault();
        break;

      case 'ArrowDown':
        this.focusNextItem();
        e.preventDefault();
        break;

      case 'Escape':
        this.closeDropdown();
        break;
    }
  }

  private focusPreviousItem() {
    const sibling = document.activeElement.previousSibling;
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }

  private focusNextItem() {
    const sibling = document.activeElement.nextSibling;
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }

  private handleInputElementKeyDown(e: KeyboardEvent) {
    switch (e.code) {
      case 'ArrowDown':
        const selector = `.category-item-${this.category ? 'value' : 'id'}`;
        let item = this.hostElement.querySelector(selector);

        if (item instanceof HTMLElement) {
          item.focus();
          e.stopPropagation();
        } else if (this.suggestions?.length) {
          item = this.hostElement.querySelector('.category-item');
          if (item instanceof HTMLElement) {
            item.focus();
            e.stopPropagation();
          }
        }
        break;

      case 'Backspace':
        if (this.textInput.value !== '') {
          return;
        }

        if (this.category) {
          this.category = undefined;
          return;
        }

        const tokenCount = this.filterTokens.length;
        if (tokenCount > 0) {
          this.removeToken(tokenCount - 1);
        }
        break;

      case 'Enter':
      case 'NumpadEnter':
        this.addToken(this.inputValue, this.category);
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

    if (this.filterTokens.find((value) => value?.value === newToken)) {
      return;
    }

    const pair = { id: category, value: newToken, operator };
    this.filterTokens = [...this.filterTokens, pair];
    this.textInput.value = '';
    this.inputValue = '';
    this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;

    this.isScrollStateDirty = true;

    this.textInput.focus();

    if (emitEvent) {
      this.emitFilterEvent();
    }

    this.closeDropdown();
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

  private getCategoryLables() {
    return this.getCategoryIds().map((id) => this.categories[id].label);
  }

  private selectCategory(category: string) {
    this.category = category;
    this.textInput.value = '';
    this.inputValue = '';
    this.textInput.focus();
  }

  private openCategorySelection() {
    this.showCategorySelection = true;
  }

  private resetFilter() {
    this.closeDropdown();
    this.filterTokens = [];
    this.emitFilterEvent();
  }

  private calculateDropdownX(): number {
    if (!this.textInput) {
      return 0;
    }

    const xInput = this.textInput.getBoundingClientRect().x;
    const xFrom = this.formElement?.getBoundingClientRect().x;

    return xInput - xFrom;
  }

  private calculateDropdownY(): number {
    if (!this.textInput) {
      return 32;
    }

    return this.hostElement.getBoundingClientRect().height;
  }

  private calculateDropdownHeight(top = 32): number {
    const hostTop = this.hostElement.getBoundingClientRect().top;
    const offset = hostTop + top;
    return window.innerHeight - offset;
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

  private filterDuplicateTokens(value: string) {
    const isTokenAlreadySet = this.filterTokens.some(
      (token) => token.value === value
    );
    return !isTokenAlreadySet;
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
      this.categories[value.id]?.label ??
      this.nonSelectableCategories[value.id] ??
      value.id;

    return `${label} ${operatorString} ${value.value}`;
  }

  componentDidRender() {
    const newOffsetX = this.calculateDropdownX();
    const newOffsetY = this.calculateDropdownY();
    const newOffsetXRem = convertToRemString(newOffsetX);
    const newOffsetYRem = convertToRemString(newOffsetY);
    const maxWidthDropdown =
      this.hostElement.getBoundingClientRect().width - newOffsetX;
    const maxHeightDropdown = this.calculateDropdownHeight(newOffsetY);
    this.maxWidthDropdown = convertToRemString(maxWidthDropdown);
    this.maxHeightDropdown = convertToRemString(maxHeightDropdown);

    // This will throw a warning
    if (newOffsetXRem !== this.offsetDropdownX) {
      this.offsetDropdownX = newOffsetXRem;
    }

    // This will throw a warning
    if (newOffsetYRem !== this.offsetDropdownY) {
      this.offsetDropdownY = newOffsetYRem;
    }

    if (this.isScrollStateDirty) {
      if (!this.tmpDisableScrollIntoView) {
        this.textInput.scrollIntoView();
      }
      this.isScrollStateDirty = false;
    }
  }

  render() {
    return (
      <Host>
        <form ref={(el) => (this.formElement = el)}>
          <div
            class={{
              'form-control': true,
              'input-container': true,
              focus: this.hasFocus,
              'no-icon': this.hideIcon,
            }}
          >
            <ix-icon
              class={{ 'd-none': this.hideIcon }}
              name={this.icon}
              size="16"
            ></ix-icon>
            <div class="token-container">
              <ul class="list-unstyled">
                {this.filterTokens.map((value, index) => (
                  <li
                    class={{
                      animate__animated: true,
                      animate__fadein: true,
                    }}
                  >
                    <ix-filter-chip
                      onCloseClick={() => this.removeToken(index)}
                    >
                      {this.getFilterChipLabel(value)}
                    </ix-filter-chip>
                  </li>
                ))}
                {this.categories === undefined ? (
                  ''
                ) : (
                  <li
                    class={{
                      'category-preview': true,
                      'd-none': !this.category,
                    }}
                  >
                    {this.categories[this.category]?.label}
                  </li>
                )}
                <input
                  class={{
                    'text-input': true,
                    'hide-placeholder': this.category !== undefined,
                  }}
                  ref={(el) => (this.textInput = el)}
                  type="text"
                  placeholder={this.placeholder}
                  onFocus={() => this.openCategorySelection()}
                ></input>
              </ul>
            </div>
            <button
              class={{
                btn: true,
                'btn-invisible-secondary': true,
                'btn-oval': true,
                'btn-close': true,
                'd-none': !this.filterTokens.length && !this.category,
              }}
              onClick={() => this.resetFilter()}
              tabindex="1"
            >
              <span class="glyph glyph-error glyph-16"></span>
            </button>
          </div>
        </form>

        <div
          class={{
            'category-selection-container': true,
            'd-none':
              !this.showCategorySelection && this.category === undefined,
          }}
          style={{
            left: this.offsetDropdownX,
            top: this.offsetDropdownY,
            'max-width': this.maxWidthDropdown,
            'max-height': this.maxHeightDropdown,
          }}
        >
          <div
            class={{
              'd-none':
                !this.showCategorySelection || this.category !== undefined,
            }}
          >
            <div
              class={{
                'category-item-header': true,
                'd-none':
                  this.getCategoryLables().filter((value) =>
                    this.filterByInput(value)
                  ).length === 0,
              }}
            >
              {this.labelCategories}
            </div>
            {this.getCategoryIds()
              ?.filter((id) => this.filterByInput(this.categories[id].label))
              .filter((id) => this.filterMultiples(id))
              .map((id) => (
                <div
                  data-id={id}
                  title={id}
                  class="category-item category-item-id"
                  onClick={() => this.selectCategory(id)}
                  tabindex="0"
                >
                  {this.categories[id]?.label}
                </div>
              ))}
          </div>

          <div
            class={{
              'd-none': this.category === undefined,
            }}
          >
            <button
              class="btn btn-invisible-secondary btn-icon"
              onClick={() => this.toggleCategoryOperator()}
              tabindex="-1"
            >
              {this.categoryLogicalOperator === LogicalFilterOperator.NOT_EQUAL
                ? '='
                : '!='}
            </button>
            {this.categories === undefined ? (
              ''
            ) : (
              <div class="category-item-header">
                {this.categories[this.category]?.label}
              </div>
            )}
            {this.categories === undefined
              ? ''
              : this.categories[this.category]?.options
                  .filter((value) => this.filterByInput(value))
                  .filter((value) => this.filterDuplicateTokens(value))
                  .map((id) => (
                    <div
                      data-id={id}
                      title={id}
                      class="category-item category-item-value"
                      onClick={() => this.addToken(id, this.category)}
                      tabindex="0"
                    >
                      {`${
                        this.categoryLogicalOperator ===
                        LogicalFilterOperator.EQUAL
                          ? '='
                          : '!='
                      } ${id}`}
                    </div>
                  ))}
          </div>

          <div
            class={{
              'category-item-header': true,
              'd-none':
                this.category !== undefined ||
                this.getCategoryIds().filter((value) =>
                  this.filterByInput(value)
                ).length > 0,
            }}
          >
            {this.i18nPlainText}
          </div>
          <div
            class={{
              'd-none':
                !this.suggestions?.length || this.category !== undefined,
            }}
          >
            {this.suggestions
              ?.filter((value) => this.filterByInput(value))
              .filter((value) => this.filterDuplicateTokens(value))
              .map((suggestion) => (
                <div
                  data-id={suggestion}
                  class="category-item plain-text-suggestion"
                  onClick={() => this.addToken(suggestion)}
                  tabindex="0"
                >
                  {suggestion}
                </div>
              ))}
          </div>
        </div>
      </Host>
    );
  }
}
