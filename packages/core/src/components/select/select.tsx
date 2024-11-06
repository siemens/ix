/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
import { IxSelectItemLabelChangeEvent } from '../select-item/events';
import { ArrowFocusController } from '../utils/focus';
import { OnListener } from '../utils/listener';
import { createMutationObserver } from '../utils/mutation-observer';
import { DropdownItemWrapper } from '../dropdown/dropdown-controller';
import {
  HookValidationLifecycle,
  ValidationResults,
  IxInputFieldComponent,
} from '../utils/input';
import { MakeRef, makeRef } from '../utils/make-ref';
import { a11yBoolean } from '../utils/a11y';

/**
 * @form-ready 2.6.0
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
   *
   * @since 2.6.0
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * A Boolean attribute indicating that an option with a non-empty string value must be selected
   *
   * @since 2.6.0
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Label for the select component
   *
   * @since 2.6.0
   */
  @Prop() label?: string;

  /**
   * Warning text for the select component
   *
   * @since 2.6.0
   **/
  @Prop() warningText?: string;

  /**
   * Info text for the select component
   *
   * @since 2.6.0
   **/
  @Prop() infoText?: string;

  /**
   * Error text for the select component
   *
   * @since 2.6.0
   **/
  @Prop() invalidText?: string;

  /**
   * Valid text for the select component
   *
   * @since 2.6.0
   **/
  @Prop() validText?: string;

  /**
   * Helper text for the select component
   *
   * @since 2.6.0
   **/
  @Prop() helperText?: string;

  /**
   * Show helper, error, info, warning text as tooltip
   *
   * @since 2.6.0
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * Indices of selected items.
   * This corresponds to the value property of ix-select-items and therefor not necessarily the indices of the items in the list.
   * @deprecated since 2.0.0. Use the `value` property instead.
   */
  @Prop({ mutable: true }) selectedIndices?: string | string[];

  /**
   * Current selected value.
   * This corresponds to the value property of ix-select-items
   * @since 2.0.0
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
  @Prop() i18nPlaceholder = 'Select an option';

  /**
   * Input field placeholder for editable select
   */
  @Prop() i18nPlaceholderEditable = 'Type of select option';

  /**
   * Select list header
   */
  @Prop() i18nSelectListHeader = 'Select an option';

  /**
   * Information inside of dropdown if no items where found with current filter text
   *
   * @since 1.5.0
   */
  @Prop() i18nNoMatches = 'No matches';

  /**
   * Hide list header
   *
   * @since 1.5.0
   */
  @Prop() hideListHeader = false;

  /**
   * Value changed
   * @since 2.0.0
   */
  @Event() valueChange!: EventEmitter<string | string[]>;

  /**
   * Item selection changed
   * @deprecated since 2.0.0. Use `valueChange` instead.
   */
  @Event() itemSelectionChange!: EventEmitter<string[]>;

  /**
   * Event dispatched whenever the text input changes.
   *
   * @since 2.0.0
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
  @State() selectedLabels: string[] = [];
  @State() dropdownWrapperRef!: HTMLElement;
  @State() dropdownAnchor!: HTMLElement;
  @State() isDropdownEmpty = false;
  @State() navigationItem: DropdownItemWrapper | null = null;
  @State() inputFilterText: string = '';
  @State() inputValue: string | null = null;

  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;

  private input!: HTMLInputElement;
  private readonly inputRef = makeRef<HTMLInputElement>();
  private dropdownRef!: HTMLIxDropdownElement;
  private customItemsContainerRef!: HTMLDivElement;
  private addItemRef!: HTMLIxDropdownItemElement;

  private arrowFocusController!: ArrowFocusController;
  private readonly focusControllerCallbackBind =
    this.focusDropdownItem.bind(this);

  private readonly itemObserver = createMutationObserver(() => {
    this.arrowFocusController.items = this.visibleNonShadowItems;
  });

  get nonShadowItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-select-item'));
  }

  get visibleNonShadowItems() {
    return this.nonShadowItems.filter(
      (item) => !item.classList.contains('d-none')
    );
  }

  get shadowItems() {
    return Array.from(
      this.hostElement.shadowRoot!.querySelectorAll('ix-select-item')
    );
  }

  get visibleShadowItems() {
    return this.shadowItems.filter(
      (item) => !item.classList.contains('d-none')
    );
  }

  get items() {
    return [...this.nonShadowItems, ...this.shadowItems];
  }

  get visibleItems() {
    return this.items.filter((item) => !item.classList.contains('d-none'));
  }

  get selectedItems() {
    return this.items.filter((item) => item.selected);
  }

  get addItemButton() {
    return this.hostElement.shadowRoot!.querySelector('.add-item');
  }

  get isSingleMode() {
    return this.mode === 'single';
  }

  get isMultipleMode() {
    return this.mode === 'multiple';
  }

  get isEveryDropdownItemHidden() {
    return this.items.every((item) => item.classList.contains('d-none'));
  }

  @Watch('selectedIndices')
  watchSelectedIndices(value: string | string[]) {
    this.value = value;
    this.updateSelection();
  }

  @Watch('value')
  watchValue(value: string | string[]) {
    this.selectedIndices = value;
    this.updateSelection();
  }

  @Watch('dropdownShow')
  watchDropdownShow(show: boolean) {
    if (show) {
      this.arrowFocusController = new ArrowFocusController(
        this.visibleNonShadowItems,
        this.dropdownRef,
        this.focusControllerCallbackBind
      );

      this.arrowFocusController.wrap = !this.editable;

      this.itemObserver.observe(this.dropdownRef, {
        childList: true,
        subtree: true,
      });
    } else {
      this.arrowFocusController.disconnect();
      this.itemObserver.disconnect();
    }
  }

  @Listen('itemClick')
  onItemClicked(event: CustomEvent<string>) {
    const newId = event.detail;
    this.itemClick(newId);
  }

  async updateFormInternalValue(value: string | string[]) {
    if (Array.isArray(value)) {
      this.formInternals.setFormValue(value.join(','));
      return;
    }

    this.formInternals.setFormValue(value);
  }

  /** @internal */
  @Method()
  async hasValidValue(): Promise<boolean> {
    return this.required && !!this.hasValue();
  }

  private hasValue() {
    if (Array.isArray(this.value)) {
      return !!this.value.length;
    }

    return !!this.value;
  }

  private focusDropdownItem(index: number) {
    this.navigationItem = null;

    if (index < this.visibleNonShadowItems.length) {
      const nestedDropdownItem =
        this.visibleNonShadowItems[index]?.shadowRoot?.querySelector(
          'ix-dropdown-item'
        );

      if (!nestedDropdownItem) {
        return;
      }

      requestAnimationFrame(() => {
        nestedDropdownItem.shadowRoot?.querySelector('button')?.focus();
      });
    }
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

    this.customItemsContainerRef.appendChild(newItem);

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

    this.selectedLabels = this.selectedItems.map((item) => item.label);

    if (this.selectedLabels?.length && this.isSingleMode) {
      this.inputValue = this.selectedLabels[0];
    } else {
      this.inputValue = '';
    }

    if (this.inputRef?.current) {
      this.inputRef.current.value = this.inputValue;
    }
  }

  private emitValueChange(value: string | string[]) {
    const { defaultPrevented } = this.valueChange.emit(value);

    if (defaultPrevented) {
      return true;
    }

    if (!value) {
      this.itemSelectionChange.emit(null);
    } else {
      this.itemSelectionChange.emit(Array.isArray(value) ? value : [value]);
    }

    this.updateFormInternalValue(value);
    return false;
  }

  componentDidLoad() {
    this.input.addEventListener('input', () => {
      this.dropdownShow = true;
      this.inputChange.emit(this.input.value);
    });
  }

  componentWillLoad() {
    if (this.selectedIndices && !this.value) {
      this.value = this.selectedIndices;
    }

    this.updateSelection();
    this.updateFormInternalValue(this.value);
  }

  @Listen('ix-select-item:labelChange')
  onLabelChange(event: IxSelectItemLabelChangeEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.updateSelection();
  }

  private itemExists(item: string) {
    return this.items.find((i) => i.label === item);
  }

  private dropdownVisibilityChanged(event: CustomEvent<boolean>) {
    this.dropdownShow = event.detail;

    if (event.detail) {
      this.input.focus();
      this.input.select();

      this.removeHiddenFromItems();
      this.isDropdownEmpty = this.isEveryDropdownItemHidden;
    } else {
      this.navigationItem = null;
      this.updateSelection();
      this.inputFilterText = '';
    }
  }

  @OnListener<Select>('keydown', (self) => self.dropdownShow)
  async onKeyDown(event: KeyboardEvent) {
    if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
      await this.onArrowNavigation(event, event.code);
    }

    if (!this.dropdownShow) {
      return;
    }

    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      await this.onEnterNavigation(event.target as HTMLIxSelectItemElement);
    }

    if (event.code === 'Escape') {
      this.dropdownShow = false;
    }
  }

  private async onEnterNavigation(
    el: HTMLIxSelectItemElement | HTMLInputElement
  ) {
    if (this.isMultipleMode) {
      return;
    }

    if (
      !this.itemExists(this.inputFilterText.trim()) &&
      !this.itemExists((el as HTMLIxSelectItemElement)?.label)
    ) {
      if (this.editable) {
        const defaultPrevented = this.emitAddItem(this.inputFilterText.trim());
        if (defaultPrevented) {
          return;
        }
      }
    }

    this.dropdownShow = false;
    this.updateSelection();
  }

  private async onArrowNavigation(
    event: KeyboardEvent,
    key: 'ArrowDown' | 'ArrowUp'
  ) {
    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.dropdownShow = true;

    if (!this.navigationItem && document.activeElement === this.hostElement) {
      if (this.visibleItems.length) {
        this.applyFocusTo(this.visibleItems.shift());
      } else if (this.isAddItemVisible()) {
        this.focusAddItemButton();
      }
      return;
    }

    const moveUp = key === 'ArrowUp';
    const indexNonShadow = document.activeElement
      ? this.visibleNonShadowItems.indexOf(
          document.activeElement as HTMLIxSelectItemElement
        )
      : -1;

    // Slotted select items
    if (indexNonShadow === 0) {
      if (!this.visibleShadowItems.length && this.isAddItemVisible()) {
        this.focusAddItemButton();
      } else {
        this.applyFocusTo(this.visibleShadowItems.pop());
      }
      return;
    } else if (
      indexNonShadow !== -1 &&
      indexNonShadow === this.visibleNonShadowItems.length - 1
    ) {
      if (this.visibleShadowItems.length) {
        this.applyFocusTo(this.visibleShadowItems.shift());
      } else if (this.isAddItemVisible()) {
        this.focusAddItemButton();
      }
      return;
    }

    if (!this.navigationItem) {
      return;
    }

    if (
      this.isAddItemVisible() &&
      this.addItemRef.contains(
        await this.navigationItem.getDropdownItemElement()
      )
    ) {
      if (moveUp) {
        this.applyFocusTo(this.visibleItems.pop());
      } else {
        if (this.visibleItems.length) {
          this.applyFocusTo(this.visibleItems.shift());
        }
      }
      return;
    }

    // Custom select items
    const indexShadow = this.visibleShadowItems.indexOf(
      this.navigationItem as HTMLIxSelectItemElement
    );

    if (moveUp) {
      if (indexShadow === 0) {
        if (this.visibleNonShadowItems.length) {
          this.applyFocusTo(this.visibleNonShadowItems.pop());
        } else if (this.isAddItemVisible()) {
          this.focusAddItemButton();
        }
      } else {
        this.applyFocusTo(this.visibleShadowItems[indexShadow - 1]);
      }
    } else {
      if (indexShadow === this.visibleShadowItems.length - 1) {
        if (this.isAddItemVisible()) {
          this.focusAddItemButton();
        } else {
          this.applyFocusTo(this.visibleItems.shift());
        }
      } else {
        this.applyFocusTo(this.visibleShadowItems[indexShadow + 1]);
      }
    }
  }

  private applyFocusTo(element?: HTMLIxSelectItemElement) {
    if (!element) {
      return;
    }

    this.navigationItem = element;

    setTimeout(() => {
      const item = element.shadowRoot?.querySelector('ix-dropdown-item');

      if (item) {
        item.shadowRoot?.querySelector('button')?.focus();
      }
    });
  }

  private focusAddItemButton() {
    if (this.addItemButton) {
      this.addItemButton.shadowRoot?.querySelector('button')?.focus();
      this.navigationItem = this.addItemRef;
    }
  }

  private filterItemsWithTypeahead() {
    this.inputFilterText = this.input.value;

    if (this.isSingleMode && this.inputFilterText === this.selectedLabels[0]) {
      return;
    }

    if (this.inputFilterText) {
      this.items.forEach((item) => {
        item.classList.remove('d-none');
        if (
          !item.label.toLowerCase().includes(this.inputFilterText.toLowerCase())
        ) {
          item.classList.add('d-none');
        }
      });
    } else {
      this.removeHiddenFromItems();
    }

    if (this.arrowFocusController) {
      this.arrowFocusController.items = this.visibleNonShadowItems;
    }

    this.isDropdownEmpty = this.isEveryDropdownItemHidden;
  }

  private removeHiddenFromItems() {
    this.items.forEach((item) => {
      item.classList.remove('d-none');
    });
  }

  private clearInput() {
    this.input.value = '';
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
    return Promise.resolve(this.input);
  }

  /**
   * Focuses the input field
   */
  @Method()
  async focusInput(): Promise<void> {
    return (await this.getNativeInputElement()).focus();
  }

  render() {
    return (
      <Host
        aria-disabled={a11yBoolean(this.disabled)}
        class={{
          disabled: this.disabled,
        }}
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
          controlRef={this.inputRef as unknown as MakeRef<HTMLElement>}
        >
          <div
            class={{
              select: true,
              disabled: this.disabled,
              readonly: this.readonly,
            }}
            ref={(ref) => {
              this.dropdownAnchor = ref!;
              if (!this.editable) this.dropdownWrapperRef = ref!;
            }}
          >
            <div class="input-container">
              <div class="chips">
                {this.isMultipleMode
                  ? this.selectedItems?.map((item) => (
                      <ix-filter-chip
                        disabled={this.disabled || this.readonly}
                        key={item.value}
                        onCloseClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          this.itemClick(item.value);
                        }}
                      >
                        {item.label}
                      </ix-filter-chip>
                    ))
                  : ''}
                <div class="trigger">
                  <input
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
                      this.input = ref!;
                      this.inputRef(this.input);
                    }}
                    onBlur={(e) => this.onInputBlur(e)}
                    onFocus={() => {
                      this.navigationItem = null;
                    }}
                    onInput={() => this.filterItemsWithTypeahead()}
                    onKeyDown={(e) => this.onKeyDown(e)}
                  />
                  {this.allowClear &&
                  (this.selectedLabels?.length || this.inputFilterText) ? (
                    <ix-icon-button
                      class="clear"
                      icon={'clear'}
                      ghost
                      oval
                      size="16"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.clear();
                      }}
                    />
                  ) : null}
                  {this.disabled || this.readonly ? null : (
                    <ix-icon-button
                      data-select-dropdown
                      class={{ 'dropdown-visible': this.dropdownShow }}
                      icon="chevron-down-small"
                      ghost
                      ref={(ref) => {
                        if (this.editable) this.dropdownWrapperRef = ref!;
                      }}
                    ></ix-icon-button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ix-field-wrapper>
        <ix-dropdown
          ref={(ref) => (this.dropdownRef = ref!)}
          show={this.dropdownShow}
          closeBehavior={this.isMultipleMode ? 'outside' : 'both'}
          class={{
            'd-none': this.disabled || this.readonly,
          }}
          anchor={this.dropdownAnchor}
          trigger={this.dropdownWrapperRef}
          onShowChanged={(e) => this.dropdownVisibilityChanged(e)}
          placement="bottom-start"
          overwriteDropdownStyle={async () => {
            const minWidth = this.hostElement.shadowRoot
              ?.querySelector('.select')
              ?.getBoundingClientRect().width;

            return {
              minWidth: `${minWidth}px`,
            };
          }}
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
          <slot></slot>
          <div
            ref={(ref) => (this.customItemsContainerRef = ref!)}
            class="d-contents"
          ></div>
          {this.isAddItemVisible() ? (
            <ix-dropdown-item
              data-testid="add-item"
              icon={'plus'}
              class={{
                'add-item': true,
              }}
              label={this.inputFilterText}
              onItemClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                this.emitAddItem(this.inputFilterText);
              }}
              onFocus={() => (this.navigationItem = this.addItemRef)}
              ref={(ref) => {
                this.addItemRef = ref!;
              }}
            ></ix-dropdown-item>
          ) : null}
          {this.isDropdownEmpty && !this.editable ? (
            <div class="select-list-header">{this.i18nNoMatches}</div>
          ) : (
            ''
          )}
        </ix-dropdown>
      </Host>
    );
  }
}
