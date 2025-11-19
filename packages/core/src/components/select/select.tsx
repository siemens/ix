/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconChevronDownSmall,
  iconChevronUpSmall,
  iconClear,
  iconPlus,
} from '@siemens/ix-icons/icons';
import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { configureKeyboardInteraction } from '../dropdown/dropdown-focus';
import { IxSelectItemLabelChangeEvent } from '../select-item/events';
import { a11yBoolean } from '../utils/a11y';
import {
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
} from '../utils/input';
import { makeRef } from '../utils/make-ref';
import {
  addFocusVisibleListener,
  FocusVisibleUtility,
} from '../utils/focus-visible-listener';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';

let selectId = 0;

/**
 * @form-ready
 */
@Component({
  tag: 'ix-select',
  styleUrl: 'select.scss',
  shadow: true,
  formAssociated: true,
})
export class Select implements IxInputFieldComponent<string | string[]> {
  @Element() hostElement!: HTMLIxSelectElement;
  @AttachInternals() formInternals!: ElementInternals;

  /**
   * A string that represents the element's name attribute,
   * containing a name that identifies the element when submitting the form.
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * A Boolean attribute indicating that an option with a non-empty string value must be selected
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Label for the select component
   */
  @Prop() label?: string;

  /**
   * ARIA label for the chevron down icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelChevronDownIconButton: string = 'Open select dropdown';

  /**
   * ARIA label for the clear icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelClearIconButton?: string;

  /**
   * ARIA label for the add item
   *
   * @since TODO: Define
   */
  @Prop() ariaLabelAddItem: string = 'Add item';

  /**
   * Warning text for the select component
   **/
  @Prop() warningText?: string;

  /**
   * Info text for the select component
   **/
  @Prop() infoText?: string;

  /**
   * Error text for the select component
   **/
  @Prop() invalidText?: string;

  /**
   * Valid text for the select component
   **/
  @Prop() validText?: string;

  /**
   * Helper text for the select component
   **/
  @Prop() helperText?: string;

  /**
   * Show helper, error, info, warning text as tooltip
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * Current selected value.
   * This corresponds to the value property of ix-select-items
   */
  @Prop({ mutable: true }) value: string | string[] = [];

  /**
   * Show clear button
   */
  @Prop() allowClear = false;

  /**
   * Selection mode
   */
  @Prop() mode: 'single' | 'multiple' = 'single';

  /**
   * Select is extendable
   */
  @Prop() editable = false;

  /**
   * If true the select will be in disabled state
   */
  @Prop() disabled = false;

  /**
   * If true the select will be in readonly mode
   */
  @Prop() readonly = false;

  /**
   * Input field placeholder
   */
  @Prop({ attribute: 'i18n-placeholder' }) i18nPlaceholder = 'Select an option';

  /**
   * Input field placeholder for editable select
   */
  @Prop({ attribute: 'i18n-placeholder-editable' }) i18nPlaceholderEditable =
    'Type of select option';

  /**
   * Select list header
   */
  @Prop({ attribute: 'i18n-select-list-header' }) i18nSelectListHeader =
    'Select an option';

  /**
   * Information inside of dropdown if no items where found with current filter text
   */
  @Prop({ attribute: 'i18n-no-matches' }) i18nNoMatches = 'No matches';

  /**
   * Chip label for all selected items in multiple mode.
   */
  @Prop({ attribute: 'i18n-all-selected' }) i18nAllSelected = 'All';

  /**
   * Hide list header
   */
  @Prop() hideListHeader = false;

  /**
   * The width of the dropdown element with value and unit (e.g. "200px" or "12.5rem").
   */
  @Prop() dropdownWidth?: string;

  /**
   * The maximum width of the dropdown element with value and unit (e.g. "200px" or "12.5rem").
   * By default the maximum width of the dropdown element is set to 100%.
   */
  @Prop() dropdownMaxWidth?: string;

  /**
   * Show "all" chip when all items are selected in multiple mode
   */
  @Prop() collapseMultipleSelection = false;

  /**
   * Value changed
   */
  @Event() valueChange!: EventEmitter<string | string[]>;

  /**
   * Event dispatched whenever the text input changes.
   */
  @Event() inputChange!: EventEmitter<string>;

  /**
   * Item added to selection
   */
  @Event() addItem!: EventEmitter<string>;

  /**
   * Blur input
   */
  @Event() ixBlur!: EventEmitter<void>;

  @State() dropdownShow = false;
  @State() selectedLabels: (string | undefined)[] = [];
  @State() isDropdownEmpty = false;
  @State() inputFilterText = '';
  @State() inputValue = '';

  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;

  private readonly hostId = `ix-select-${selectId++}`;
  private readonly dropdownWrapperRef = makeRef<HTMLElement>();
  private readonly dropdownAnchorRef = makeRef<HTMLElement>();
  private readonly inputRef = makeRef<HTMLInputElement>();
  private readonly dropdownRef = makeRef<HTMLIxDropdownElement>();

  private inputElement?: HTMLInputElement;
  private keyboardNavigationCleanup?: () => void;

  private observeItemsMutation?: MutationObserver;
  private focusVisibleUtility?: FocusVisibleUtility;

  private touched = false;

  get nonShadowItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-select-item'));
  }

  get shadowItems() {
    return Array.from(
      this.hostElement.shadowRoot!.querySelectorAll('ix-select-item')
    );
  }

  get focusableItems() {
    return Array.from(
      this.hostElement.querySelectorAll<
        HTMLIxSelectItemElement | HTMLIxDropdownItemElement
      >(
        'ix-select-item:not([disabled]):not([hidden]), ix-dropdown-item:not([disabled]):not([hidden])'
      )
    );
  }

  get allFocusableItems() {
    return Array.from(
      this.hostElement.querySelectorAll<
        HTMLIxSelectItemElement | HTMLIxDropdownItemElement
      >('ix-select-item, ix-dropdown-item')
    );
  }

  get items() {
    return [...this.nonShadowItems, ...this.shadowItems];
  }

  get selectedItems() {
    return this.items.filter((item) => item.selected);
  }

  get addItemElement() {
    return this.hostElement.querySelector<HTMLIxDropdownItemElement>(
      'ix-dropdown-item.add-item'
    );
  }

  get isSingleMode() {
    return this.mode === 'single';
  }

  get isMultipleMode() {
    return this.mode === 'multiple';
  }

  get isEveryDropdownItemHidden() {
    return this.items.every((item) => item.hidden === true);
  }

  connectedCallback(): void {
    this.observeItemsMutation = new MutationObserver(() => {
      this.updateItemIds();
    });

    this.observeItemsMutation.observe(this.hostElement, {
      subtree: true,
      childList: true,
      characterData: true,
    });
    this.updateItemIds();

    this.focusVisibleUtility = addFocusVisibleListener(this.hostElement);
  }

  disconnectedCallback(): void {
    this.observeItemsMutation?.disconnect();
    this.focusVisibleUtility?.destroy();
  }

  @Watch('value')
  watchValue(value: string | string[]) {
    this.value = value;
    this.updateSelection();
  }

  @Listen('itemClick')
  onItemClicked(event: CustomEvent<string>) {
    const newId = event.detail;
    this.itemClick(newId);
  }

  updateFormInternalValue(value: string | string[]) {
    if (Array.isArray(value)) {
      this.formInternals.setFormValue(value.join(','));
    } else {
      this.formInternals.setFormValue(value);
    }
  }

  /** @internal */
  @Method()
  async hasValidValue(): Promise<boolean> {
    return this.required && !!this.hasValue();
  }

  /**
   * Give every item an id if it doesn't have one yet
   * This is needed to handle aria-activedescendant properly
   */
  private updateItemIds() {
    for (const item of this.items) {
      if (!item.id) {
        item.id = `ix-select-item-for-${this.hostId}-${Math.random()
          .toString(36)
          .substr(2, 9)}`;
      }
    }
  }

  private hasValue() {
    if (Array.isArray(this.value)) {
      return !!this.value.length;
    }

    return !!this.value;
  }

  private itemClick(newId: string) {
    const oldValue = this.value;
    const value = this.toggleValue(newId);
    this.value = value;
    const defaultPrevented = this.emitValueChange(value);

    if (defaultPrevented) {
      this.value = oldValue;
      return;
    }
    this.updateSelection();
    if (this.isMultipleMode && this.inputFilterText) {
      this.clearInput();
      this.removeHiddenAttributeFromItems();
    }
  }

  private emitAddItem(value: string) {
    if (value === undefined || value.trim() === '') {
      return false;
    }

    const { defaultPrevented } = this.addItem.emit(value);
    if (defaultPrevented) {
      return true;
    }

    const newItem = document.createElement('ix-select-item');
    newItem.value = value;
    newItem.label = value;

    this.addItemElement?.before(newItem);

    this.clearInput();
    this.itemClick(value);

    return false;
  }

  private toggleValue(itemValue: string) {
    if (!this.isMultipleMode) {
      return itemValue;
    }

    if (!this.value) {
      return [itemValue];
    }

    let value = this.value;

    if (!Array.isArray(value)) {
      value = [value];
    }

    if (value.includes(itemValue)) {
      return value.filter((value) => value !== itemValue);
    } else {
      return [...value, itemValue];
    }
  }

  private updateSelection() {
    let ids: string[] = [];

    if (this.value) {
      ids = Array.isArray(this.value) ? [...this.value] : [this.value];
    }

    this.items.forEach((item) => {
      item.selected = ids.some((i) => {
        if (typeof i !== typeof item.value) {
          return i.toString() === item.value.toString();
        } else {
          return i === item.value;
        }
      });
    });

    this.selectedLabels = this.selectedItems.map(
      (item) => item.label ?? item.value
    );

    if (this.selectedLabels?.length && this.isSingleMode) {
      this.inputValue = this.selectedLabels[0] ?? '';
    } else {
      this.inputValue = '';
    }

    this.inputElement && (this.inputElement.value = this.inputValue);
  }

  private emitValueChange(value: string | string[]) {
    const { defaultPrevented } = this.valueChange.emit(value);

    if (defaultPrevented) {
      return true;
    }

    this.updateFormInternalValue(value);
    return false;
  }

  private createAddItemElement() {
    const onAddItemButtonClick = () => {
      this.emitAddItem(this.inputFilterText);
    };

    const createElement = () => {
      const addItemElement = document.createElement('ix-dropdown-item');
      addItemElement.hidden = true;
      addItemElement.setAttribute('data-testid', 'add-item');
      addItemElement.icon = iconPlus;
      addItemElement.classList.add('add-item');
      addItemElement.addEventListener('click', onAddItemButtonClick);
      addItemElement.style.order = Number.MAX_SAFE_INTEGER.toString();
      addItemElement.ariaLabel = this.ariaLabelAddItem ?? `Add item`;
      return addItemElement;
    };

    const isRendered = this.hostElement.querySelector(
      'ix-dropdown-item[slot="footer"].add-item'
    );
    if (!isRendered) {
      this.hostElement.appendChild(createElement());
    }
  }

  componentDidLoad() {
    this.inputElement?.addEventListener('input', () => {
      this.dropdownShow = true;
      this.inputChange.emit(this.inputElement?.value);
    });

    this.createAddItemElement();
  }

  componentWillLoad() {
    this.updateSelection();
    this.updateFormInternalValue(this.value);
  }

  @Listen('ix-select-item:valueChange')
  @Listen('ix-select-item:labelChange')
  onLabelChange(event: IxSelectItemLabelChangeEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.updateSelection();
  }

  private itemExists(item: string | undefined) {
    return this.items.find((i) => i.label === item);
  }

  private removeVisualFocusFromItems() {
    this.allFocusableItems.forEach((item) => {
      item.hasVisualFocus = false;
    });

    this.inputRef.current?.removeAttribute('aria-activedescendant');
  }

  private hasActiveVisualFocusItem() {
    return !!this.hostElement.querySelector(
      'ix-select-item[has-visual-focus], ix-dropdown-item[has-visual-focus]'
    );
  }

  private getActiveVisualFocusedItem() {
    const activeElement = this.hostElement.querySelector(
      'ix-select-item[has-visual-focus], ix-dropdown-item[has-visual-focus]'
    );

    if (activeElement) {
      return activeElement as HTMLElement;
    }

    return this.hostElement;
  }

  private dropdownVisibilityChanged(event: CustomEvent<boolean>) {
    this.dropdownShow = event.detail;

    if (event.detail) {
      this.inputElement?.focus();

      if (this.hasValue()) {
        this.inputElement?.select();
      }

      if (!this.inputFilterText) {
        this.removeHiddenAttributeFromItems();
      }

      this.isDropdownEmpty = this.isEveryDropdownItemHidden;

      this.keyboardNavigationCleanup = configureKeyboardInteraction(
        this.hostElement.shadowRoot!.querySelector('ix-dropdown')!,
        {
          getActiveElement: () => this.getActiveVisualFocusedItem(),
          setItemActive: (item: HTMLElement) => {
            const inputElement = this.inputRef.current;

            this.removeVisualFocusFromItems();

            (item as HTMLIxSelectItemElement).hasVisualFocus = true;
            inputElement?.setAttribute('aria-activedescendant', item.id!);
          },
          getEventListenerTarget: () => this.hostElement,
        }
      );
    } else {
      this.updateSelection();
      this.inputFilterText = '';
      this.keyboardNavigationCleanup?.();
      this.removeVisualFocusFromItems();
    }
  }

  private setItemFilter() {
    this.inputFilterText = this.inputElement?.value.trim() ?? '';

    if (this.inputFilterText) {
      this.items.forEach((item) => {
        item.hidden = false;
        if (
          !item.label
            ?.toLowerCase()
            .includes(this.inputFilterText.toLowerCase())
        ) {
          item.hidden = true;
        }
      });
    } else {
      this.removeHiddenAttributeFromItems();
    }

    this.isDropdownEmpty = this.isEveryDropdownItemHidden;
  }

  private removeHiddenAttributeFromItems() {
    console.trace();
    this.items.forEach((item) => {
      item.hidden = false;
    });
  }

  private clearInput() {
    if (this.inputElement) {
      this.inputElement.value = '';
    }
    this.inputFilterText = '';
  }

  private clear() {
    this.clearInput();
    this.selectedLabels = [];
    this.value = [];
    this.emitValueChange([]);
    this.dropdownShow = false;
  }

  private onInputBlur(event: Event) {
    this.ixBlur.emit();
    this.touched = true;

    if (this.editable) {
      return;
    }

    if (this.isSingleMode) {
      return;
    }

    const target = event.target as HTMLInputElement;

    if (!this.dropdownShow && this.mode !== 'multiple') {
      target.value = this.selectedLabels.toString();
    }
  }

  private placeholderValue() {
    if (this.disabled) {
      return '';
    }

    if (this.readonly) {
      return '';
    }

    if (this.editable) {
      return this.i18nPlaceholderEditable;
    }

    return this.i18nPlaceholder;
  }

  private isAddItemVisible() {
    return (
      !this.itemExists(this.inputFilterText) &&
      this.editable &&
      this.inputFilterText
    );
  }

  private shouldDisplayAllChip(): boolean {
    return (
      this.selectedItems.length === this.items.length &&
      this.collapseMultipleSelection
    );
  }

  private renderAllChip() {
    return (
      <ix-filter-chip
        disabled={this.disabled || this.readonly}
        ariaLabelCloseIconButton={this.i18nAllSelected}
        onCloseClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          this.clear();
        }}
      >
        {`${this.i18nAllSelected} (${this.selectedItems.length})`}
      </ix-filter-chip>
    );
  }

  private renderChip(item: HTMLIxSelectItemElement) {
    return (
      <ix-filter-chip
        disabled={this.disabled || this.readonly}
        key={item.value}
        onCloseClick={() => this.itemClick(item.value)}
      >
        {item.label}
      </ix-filter-chip>
    );
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      this.dropdownShow = false;
      return;
    }

    if (!this.dropdownShow) {
      return;
    }

    switch (event.key) {
      case 'Enter':
      case ' ':
        if (this.hasActiveVisualFocusItem()) {
          const item =
            this.getActiveVisualFocusedItem() as HTMLIxSelectItemElement;

          if (item.classList.contains('add-item')) {
            this.emitAddItem(this.inputFilterText);
          } else {
            this.itemClick(item.value);
            this.setItemFilter();
          }
        }

        this.dropdownShow = false;
        break;
    }
  }

  @HookValidationLifecycle()
  onValidationChange({
    isInvalid,
    isInvalidByRequired,
    isValid,
    isInfo,
    isWarning,
  }: ValidationResults) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isValid = isValid;
    this.isWarning = isWarning;
    this.isInfo = isInfo;
  }

  /** @internal */
  @Method()
  async getAssociatedFormElement(): Promise<HTMLFormElement | null> {
    return this.formInternals.form;
  }

  /**
   * Returns the native input element used in the component.
   */
  @Method()
  getNativeInputElement(): Promise<HTMLInputElement> {
    if (this.inputElement) {
      return Promise.resolve(this.inputElement);
    } else {
      return Promise.reject(new Error('Input element not found'));
    }
  }

  /**
   * Focuses the input field
   */
  @Method()
  async focusInput(): Promise<void> {
    const inputElement = await this.getNativeInputElement();
    if (inputElement) {
      inputElement.focus();
    }
  }

  /**
   * Check if the input field has been touched.
   * @internal
   * */
  @Method()
  isTouched(): Promise<boolean> {
    return Promise.resolve(this.touched);
  }

  render() {
    if (this.addItemElement) {
      this.addItemElement.hidden = !this.isAddItemVisible();
      this.addItemElement.label = this.inputFilterText;
      this.addItemElement.ariaLabel = this.ariaLabelAddItem;
    }

    return (
      <Host
        aria-disabled={a11yBoolean(this.disabled)}
        class={{
          disabled: this.disabled,
        }}
        onFocusout={() => this.focusVisibleUtility?.setFocus([])}
      >
        <ix-field-wrapper
          required={this.required}
          label={this.label}
          helperText={this.helperText}
          invalidText={this.invalidText}
          infoText={this.infoText}
          warningText={this.warningText}
          validText={this.validText}
          showTextAsTooltip={this.showTextAsTooltip}
          isInvalid={this.isInvalid}
          isValid={this.isValid}
          isInfo={this.isInfo}
          isWarning={this.isWarning}
          controlRef={this.inputRef}
        >
          <div
            class={{
              select: true,
              disabled: this.disabled,
              readonly: this.readonly,
            }}
            ref={(ref) => {
              this.dropdownAnchorRef(ref);
              this.dropdownWrapperRef(ref);
            }}
          >
            <div class="input-container">
              <div class="chips">
                {this.isMultipleMode &&
                  this.items.length !== 0 &&
                  (this.shouldDisplayAllChip()
                    ? this.renderAllChip()
                    : this.selectedItems?.map((item) => this.renderChip(item)))}
                <div class="trigger">
                  <input
                    id={`${this.hostId}-input`}
                    role="combobox"
                    aria-controls={`${this.hostId}-listbox`}
                    autocomplete="off"
                    data-testid="input"
                    disabled={this.disabled}
                    readOnly={this.readonly}
                    required={this.required}
                    type="text"
                    class={{
                      'allow-clear':
                        this.allowClear && !!this.selectedLabels?.length,
                    }}
                    placeholder={this.placeholderValue()}
                    value={this.inputValue ?? ''}
                    ref={(ref) => {
                      this.inputElement = ref;
                      this.inputRef(ref);
                    }}
                    onBlur={(e) => this.onInputBlur(e)}
                    onInput={() => this.setItemFilter()}
                    onKeyDown={(e) => this.onKeyDown(e)}
                  />
                  {this.allowClear &&
                  !this.disabled &&
                  !this.readonly &&
                  (this.selectedLabels?.length || this.inputFilterText) ? (
                    <ix-icon-button
                      key="clear"
                      class="clear"
                      icon={iconClear}
                      variant="subtle-tertiary"
                      oval
                      size="16"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.clear();
                      }}
                      aria-label={this.ariaLabelClearIconButton}
                    />
                  ) : null}
                  {this.disabled || this.readonly ? null : (
                    <ix-icon-button
                      tabindex={-1}
                      data-select-dropdown
                      key="dropdown"
                      class={{ 'dropdown-visible': this.dropdownShow }}
                      icon={
                        this.dropdownShow
                          ? iconChevronUpSmall
                          : iconChevronDownSmall
                      }
                      variant="subtle-tertiary"
                      aria-label={this.ariaLabelChevronDownIconButton}
                    ></ix-icon-button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ix-field-wrapper>
        <ix-dropdown
          onExperimentalRequestFocus={({ detail }) => {
            /**
             * Will be fired only after dropdown changed visibility to "true"
             */

            const hasItems = this.focusableItems.length !== 0;

            if (!hasItems) {
              return;
            }

            if (
              detail.keyEvent.key === 'ArrowDown' &&
              detail.keyEvent.altKey === false
            ) {
              this.removeVisualFocusFromItems();
              this.focusableItems[0].hasVisualFocus = true;
            }

            if (detail.keyEvent.key === 'ArrowUp') {
              this.removeVisualFocusFromItems();
              this.focusableItems[
                this.focusableItems.length - 1
              ].hasVisualFocus = true;
            }
          }}
          ref={this.dropdownRef}
          show={this.dropdownShow}
          closeBehavior={this.isMultipleMode ? 'outside' : 'both'}
          hidden={this.disabled || this.readonly}
          anchor={this.dropdownAnchorRef.waitForCurrent()}
          trigger={this.dropdownWrapperRef.waitForCurrent()}
          onShowChanged={(e) => this.dropdownVisibilityChanged(e)}
          placement="bottom-start"
          overwriteDropdownStyle={async () => {
            const styleOverwrites: Partial<CSSStyleDeclaration> = {};

            const minWidth = this.hostElement.shadowRoot
              ?.querySelector('.select')
              ?.getBoundingClientRect().width;

            if (minWidth) {
              styleOverwrites.minWidth = `${minWidth}px`;
            }

            if (this.dropdownWidth) {
              styleOverwrites.width = `min(${this.dropdownWidth}, 100%)`;
            }

            if (this.dropdownMaxWidth) {
              styleOverwrites.maxWidth = `min(${this.dropdownMaxWidth}, 100%)`;
            }

            return styleOverwrites;
          }}
          role="listbox"
          id={`${this.hostId}-listbox`}
          disableFocusHandling
        >
          <div
            class={{
              'select-list-header': true,
              hidden: this.hideListHeader || this.isDropdownEmpty,
            }}
            title={this.i18nSelectListHeader}
            onClick={(e) => e.preventDefault()}
          >
            {this.i18nSelectListHeader}
          </div>
          <slot
            onSlotchange={() => {
              this.updateSelection();
            }}
          ></slot>
          {this.isDropdownEmpty && !this.editable && (
            <div class="select-list-header">{this.i18nNoMatches}</div>
          )}
        </ix-dropdown>
      </Host>
    );
  }
}
