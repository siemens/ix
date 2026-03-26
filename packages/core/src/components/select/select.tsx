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
import { DropdownItemWrapper } from '../dropdown/dropdown-controller';
import { IxSelectItemLabelChangeEvent } from '../select-item/events';
import { a11yBoolean } from '../utils/a11y';
import { ArrowFocusController } from '../utils/focus';
import {
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
} from '../utils/input';
import { OnListener } from '../utils/listener';
import { makeRef } from '../utils/make-ref';
import { createMutationObserver } from '../utils/mutation-observer';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';

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
  @Prop() ariaLabelChevronDownIconButton?: string;

  /**
   * ARIA label for the clear icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelClearIconButton?: string = 'Clear selection';

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
  @Prop({ mutable: true }) value: string | string[] = '';

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
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  @Prop() enableTopLayer: boolean = false;

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
  @State() navigationItem?: DropdownItemWrapper;
  @State() inputFilterText = '';
  @State() inputValue = '';

  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() pendingChipValue: string | null = null;
  @State() visibleChipValues: Set<string> | null = null;

  private readonly dropdownWrapperRef = makeRef<HTMLElement>();
  private readonly dropdownAnchorRef = makeRef<HTMLElement>();
  private readonly inputRef = makeRef<HTMLInputElement>();

  private inputElement?: HTMLInputElement;
  private dropdownElement?: HTMLIxDropdownElement;
  private customItemsContainerElement?: HTMLDivElement;
  private addItemElement?: HTMLIxDropdownItemElement;
  private arrowFocusController?: ArrowFocusController;

  private touched = false;
  private chipsEl: HTMLDivElement | undefined;
  private clearButtonEl: HTMLIxIconButtonElement | undefined;
  private chevronButtonEl: HTMLIxIconButtonElement | undefined;
  private chipsResizeObserver?: ResizeObserver;

  private readonly chipWidths = new Map<string, number>();
  private readonly chipElementRefs = new Map<string, HTMLElement>();

  private readonly itemObserver = createMutationObserver(() => {
    if (!this.arrowFocusController) {
      return;
    }
    this.arrowFocusController.items = this.visibleNonShadowItems;
  });

  private readonly focusControllerCallbackBind =
    this.focusDropdownItem.bind(this);

  get nonShadowItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-select-item'));
  }

  get visibleNonShadowItems() {
    return this.nonShadowItems.filter(
      (item) => !item.classList.contains('display-none')
    );
  }

  get shadowItems() {
    return Array.from(
      this.hostElement.shadowRoot!.querySelectorAll('ix-select-item')
    );
  }

  get visibleShadowItems() {
    return this.shadowItems.filter(
      (item) => !item.classList.contains('display-none')
    );
  }

  get items() {
    return [...this.nonShadowItems, ...this.shadowItems];
  }

  get visibleItems() {
    return this.items.filter(
      (item) => !item.classList.contains('display-none')
    );
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
    return this.items.every((item) => item.classList.contains('display-none'));
  }

  @Watch('value')
  watchValue(value: string | string[]) {
    this.value = value;
    this.updateSelection();
  }

  @Watch('dropdownShow')
  watchDropdownShow(show: boolean) {
    if (show && this.dropdownElement) {
      this.itemObserver.observe(this.dropdownElement, {
        childList: true,
        subtree: true,
      });
    } else {
      this.cleanupResources();
    }
  }

  private cleanupResources() {
    this.arrowFocusController?.disconnect();
    this.arrowFocusController = undefined;
    this.itemObserver?.disconnect();
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

  private hasValue() {
    if (Array.isArray(this.value)) {
      return !!this.value.length;
    }

    return !!this.value;
  }

  private focusDropdownItem(index: number) {
    this.navigationItem = undefined;

    if (index < this.visibleNonShadowItems.length) {
      const nestedDropdownItem =
        this.visibleNonShadowItems[index]?.shadowRoot?.querySelector(
          'ix-dropdown-item'
        );

      if (!nestedDropdownItem) {
        return;
      }

      requestAnimationFrameNoNgZone(() => {
        nestedDropdownItem?.shadowRoot?.querySelector('button')?.focus();
      });
    }
  }

  private itemClick(newId: string) {
    const oldValue = this.value;
    const value = this.toggleValue(newId);

    if (this.isMultipleMode && Array.isArray(value) && value.includes(newId)) {
      this.pendingChipValue = newId;
    }

    this.value = value;
    const defaultPrevented = this.emitValueChange(value);

    if (defaultPrevented) {
      this.value = oldValue;
      this.pendingChipValue = null;
      return;
    }
    this.updateSelection();
    if (this.isMultipleMode && this.inputFilterText) {
      this.clearInput();
      this.removeHiddenFromItems();
      if (this.arrowFocusController) {
        this.arrowFocusController.items = this.visibleNonShadowItems;
      }
      this.navigationItem = undefined;
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

    this.customItemsContainerElement?.appendChild(newItem);

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

    if (this.dropdownShow && this.inputFilterText) {
      return;
    }

    if (this.selectedLabels?.length && this.isSingleMode) {
      this.inputValue = this.selectedLabels[0] ?? '';
    } else {
      this.inputValue = '';
    }

    this.inputElement && (this.inputElement.value = this.inputValue);

    if (this.isMultipleMode) {
      const currentValues = new Set(this.selectedItems.map((i) => i.value));
      for (const key of this.chipWidths.keys()) {
        if (!currentValues.has(key)) this.chipWidths.delete(key);
      }
      if (this.pendingChipValue === null) {
        this.calculateOverflow();
      }
    }
  }

  private emitValueChange(value: string | string[]) {
    const { defaultPrevented } = this.valueChange.emit(value);

    if (defaultPrevented) {
      return true;
    }

    this.updateFormInternalValue(value);
    return false;
  }

  componentDidLoad() {
    this.inputElement?.addEventListener('input', () => {
      this.dropdownShow = true;
      this.inputChange.emit(this.inputElement?.value);
    });

    this.chipsResizeObserver = new ResizeObserver(() => {
      this.calculateOverflow();
    });

    if (this.chipsEl) {
      this.chipsResizeObserver.observe(this.chipsEl);
    }

    this.calculateOverflow();
  }

  componentWillLoad() {
    this.updateSelection();
    this.updateFormInternalValue(this.value);
  }

  componentDidRender(): void {
    this.setupArrowFocusController();
    this.handleChipsOverflow();
  }

  private setupArrowFocusController() {
    if (
      !this.dropdownShow ||
      this.arrowFocusController ||
      !this.dropdownElement
    ) {
      return;
    }

    this.arrowFocusController = new ArrowFocusController(
      this.visibleNonShadowItems,
      this.dropdownElement,
      this.focusControllerCallbackBind
    );

    this.arrowFocusController.wrap =
      !this.isAddItemVisible() && !this.visibleShadowItems.length;
  }

  private handleChipsOverflow() {
    if (!this.isMultipleMode) {
      return;
    }

    if (this.pendingChipValue !== null) {
      const pendingValue = this.pendingChipValue;
      const pendingEl = this.chipElementRefs.get(pendingValue);

      if (pendingEl) {
        requestAnimationFrameNoNgZone(() => {
          this.chipWidths.set(pendingValue, pendingEl.offsetWidth);
          this.calculateOverflow();
          this.pendingChipValue = null;
        });
      }
    } else {
      for (const [value, el] of this.chipElementRefs) {
        const isOverflow =
          this.visibleChipValues !== null && !this.visibleChipValues.has(value);

        if (!isOverflow) {
          this.chipWidths.set(value, el.offsetWidth);
        }
      }
    }
  }

  @Listen('ix-select-item:valueChange')
  @Listen('ix-select-item:labelChange')
  onLabelChange(event: IxSelectItemLabelChangeEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.updateSelection();
  }

  disconnectedCallback() {
    this.cleanupResources();
    this.chipsResizeObserver?.disconnect();
  }

  private calculateOverflow() {
    if (!this.chipsEl || this.selectedItems.length === 0) {
      this.visibleChipValues = null;
      return;
    }

    const chevronWidth = this.chevronButtonEl?.offsetWidth ?? 0;
    const clearWidth = this.clearButtonEl?.offsetWidth ?? 0;
    const chipGap = 4;
    const reservedInputSpace = 40;
    const availableWidth =
      this.chipsEl.clientWidth - chevronWidth - clearWidth - reservedInputSpace;
    const visibleItems = new Set<string>();
    let usedWidth = 0;

    for (const item of this.selectedItems) {
      const width = (this.chipWidths.get(item.value) ?? 60) + chipGap;

      if (usedWidth + width <= availableWidth) {
        usedWidth += width;
        visibleItems.add(item.value);
      }
    }

    if (visibleItems.size === 0) {
      visibleItems.add(this.selectedItems[0].value);
    }

    this.visibleChipValues =
      visibleItems.size >= this.selectedItems.length ? null : visibleItems;
  }

  private itemExists(item: string | undefined) {
    return this.items.find((i) => i.label === item);
  }

  private dropdownVisibilityChanged(event: CustomEvent<boolean>) {
    this.dropdownShow = event.detail;

    if (event.detail) {
      this.inputElement?.focus();
      this.inputElement?.select();

      this.removeHiddenFromItems();
      this.isDropdownEmpty = this.isEveryDropdownItemHidden;
    } else {
      this.navigationItem = undefined;
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
    const itemLabel = (el as HTMLIxSelectItemElement)?.label;
    const item = this.itemExists(this.inputFilterText);

    if (item) {
      this.itemClick(item.value);
    } else if (this.editable && !this.itemExists(itemLabel)) {
      const defaultPrevented = this.emitAddItem(this.inputFilterText);
      if (defaultPrevented) {
        return;
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
      this.addItemElement?.contains(
        await this.navigationItem.getDropdownItemElement()
      )
    ) {
      if (moveUp) {
        this.applyFocusTo(this.visibleItems.pop());
      } else if (this.visibleItems.length) {
        this.applyFocusTo(this.visibleItems.shift());
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
      element.shadowRoot
        ?.querySelector('ix-dropdown-item')
        ?.shadowRoot?.querySelector('button')
        ?.focus();
    });
  }

  private focusAddItemButton() {
    if (this.addItemButton) {
      this.addItemButton.shadowRoot?.querySelector('button')?.focus();
      this.navigationItem = this.addItemElement;
    }
  }

  private filterItemsWithTypeahead() {
    this.inputFilterText = this.inputElement?.value.trim() ?? '';

    if (this.inputFilterText) {
      this.items.forEach((item) => {
        item.classList.remove('display-none');
        if (
          !item.label
            ?.toLowerCase()
            .includes(this.inputFilterText.toLowerCase())
        ) {
          item.classList.add('display-none');
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
      item.classList.remove('display-none');
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
    const emptyValue = this.isSingleMode ? '' : [];
    this.value = emptyValue;
    this.emitValueChange(emptyValue);
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

    if (this.selectedLabels?.length) {
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
    const isPending = item.value === this.pendingChipValue;
    const isOverflow =
      !isPending &&
      this.visibleChipValues !== null &&
      !this.visibleChipValues.has(item.value);
    return (
      <div
        key={item.value}
        style={{
          visibility: isPending ? 'hidden' : undefined,
          display: isOverflow ? 'none' : undefined,
        }}
        ref={(el) => {
          if (el) {
            this.chipElementRefs.set(item.value, el as HTMLElement);
          } else {
            this.chipElementRefs.delete(item.value);
          }
        }}
      >
        <ix-filter-chip
          disabled={this.disabled || this.readonly}
          onCloseClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            this.itemClick(item.value);
          }}
        >
          {item.label}
        </ix-filter-chip>
      </div>
    );
  }

  private renderChips() {
    const chips = this.selectedItems.map((item) => this.renderChip(item));
    const overflowCount =
      this.pendingChipValue === null && this.visibleChipValues !== null
        ? this.selectedItems.length - this.visibleChipValues.size
        : 0;
    return [
      ...chips,
      overflowCount > 0 ? (
        <ix-filter-chip readonly={true} key="overflow">
          {`+${overflowCount}`}
        </ix-filter-chip>
      ) : null,
    ];
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
    return (
      <Host
        aria-disabled={a11yBoolean(this.disabled)}
        class={{
          readonly: this.readonly,
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
              if (!this.editable) this.dropdownWrapperRef(ref);
            }}
          >
            <div class="input-container">
              <div
                class="chips"
                ref={(el) => (this.chipsEl = el as HTMLDivElement)}
              >
                {this.isMultipleMode &&
                  this.items.length !== 0 &&
                  (this.shouldDisplayAllChip()
                    ? this.renderAllChip()
                    : this.renderChips())}
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
                      this.inputElement = ref;
                      this.inputRef(ref);
                    }}
                    onBlur={(e) => this.onInputBlur(e)}
                    onFocus={() => {
                      this.navigationItem = undefined;
                    }}
                    onInput={() => this.filterItemsWithTypeahead()}
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
                      ref={(ref) => (this.clearButtonEl = ref ?? undefined)}
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
                      data-select-dropdown
                      key="dropdown"
                      class={{ 'dropdown-visible': this.dropdownShow }}
                      icon={
                        this.dropdownShow
                          ? iconChevronUpSmall
                          : iconChevronDownSmall
                      }
                      variant="subtle-tertiary"
                      ref={(ref) => {
                        this.chevronButtonEl = ref!;
                        if (this.editable) this.dropdownWrapperRef(ref);
                      }}
                      aria-label={
                        this.ariaLabelChevronDownIconButton ??
                        (this.dropdownShow
                          ? 'Close select dropdown'
                          : 'Open select dropdown')
                      }
                    ></ix-icon-button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ix-field-wrapper>
        <ix-dropdown
          ref={(ref) => (this.dropdownElement = ref!)}
          show={this.dropdownShow}
          closeBehavior={this.isMultipleMode ? 'outside' : 'both'}
          class={{
            'display-none': this.disabled || this.readonly,
          }}
          anchor={this.dropdownAnchorRef.waitForCurrent()}
          trigger={this.dropdownWrapperRef.waitForCurrent()}
          onShowChanged={(e) => this.dropdownVisibilityChanged(e)}
          placement="bottom-start"
          enableTopLayer={this.enableTopLayer}
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
          <div ref={(ref) => (this.customItemsContainerElement = ref!)}></div>
          {this.isAddItemVisible() ? (
            <ix-dropdown-item
              data-testid="add-item"
              icon={iconPlus}
              class={{
                'add-item': true,
              }}
              label={this.inputFilterText}
              onItemClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                this.emitAddItem(this.inputFilterText);
              }}
              onFocus={() => (this.navigationItem = this.addItemElement)}
              ref={(ref) => {
                this.addItemElement = ref!;
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
