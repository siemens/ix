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
  Mixin,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { IxSelectItemLabelChangeEvent } from '../select-item/events';
import { a11yBoolean } from '../utils/a11y';
import {
  IX_FOCUS_VISIBLE_ACTIVE,
  queryElements,
} from '../utils/focus/focus-utilities';
import {
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
} from '../utils/input';
import { makeRef } from '../utils/make-ref';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import { DefaultMixins } from '../utils/internal/component';
import {
  AriaActiveDescendantMixinContract,
  AriaActiveDescendantMixin,
} from '../utils/internal/mixins/accessibility/aria-activedescendant.mixin';
import {
  ComponentIdMixin,
  ComponentIdMixinContract,
} from '../utils/internal/mixins/id.mixin';
import {
  FocusProxy,
  PROXY_LIST_ID_SUFFIX,
  PROXY_LISTITEM_ID_SUFFIX,
  updateFocusProxyList,
} from '../utils/focus/focus-proxy';

let selectId = 0;

/**
 * @form-ready
 */
@Component({
  tag: 'ix-select',
  styleUrl: 'select.scss',
  shadow: {
    delegatesFocus: true,
  },
  formAssociated: true,
})
export class Select
  extends Mixin(...DefaultMixins, ComponentIdMixin, AriaActiveDescendantMixin)
  implements
    IxInputFieldComponent<string | string[]>,
    AriaActiveDescendantMixinContract,
    ComponentIdMixinContract
{
  @Element() override hostElement!: HTMLIxSelectElement;
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
   * @deprecated 4.4.0 Button to expand/collapse the dropdown is hidden inside the AOM
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
  @State() inputFilterText = '';
  @State() inputValue = '';

  @State() hasInputFocus = false;
  @State() dropdownItemsVisualFocused = false;

  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() pendingChipValue: string | null = null;
  @State() visibleChipValues: Set<string> | null = null;

  private readonly hostId = `ix-select-${selectId++}`;
  private readonly dropdownWrapperRef = makeRef<HTMLElement>();
  private readonly dropdownAnchorRef = makeRef<HTMLElement>();
  private readonly inputRef = makeRef<HTMLInputElement>();
  private readonly dropdownRef = makeRef<HTMLIxDropdownElement>();

  private proxyListObserver: MutationObserver | null = null;
  private inputElement?: HTMLInputElement;
  private touched = false;
  private chipsEl: HTMLDivElement | undefined;
  private clearButtonEl: HTMLIxIconButtonElement | undefined;
  private chevronButtonEl: HTMLIxIconButtonElement | undefined;
  private chipsResizeObserver?: ResizeObserver;
  private overflowChipEl: HTMLElement | undefined;

  private readonly chipWidths = new Map<string, number>();
  private readonly chipElementRefs = new Map<string, HTMLElement>();

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

  @Watch('value')
  watchValue(value: string | string[]) {
    this.value = value;
    this.updateSelection();
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

    requestAnimationFrameNoNgZone(() => {
      this.clearInput();
      this.itemClick(value);
    });

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

    if (this.dropdownShow && this.inputFilterText) {
      return;
    }

    if (this.selectedLabels?.length && this.isSingleMode) {
      this.inputValue = this.selectedLabels[0] ?? '';
    } else {
      this.inputValue = '';
    }

    this.inputElement && (this.inputElement.value = this.inputValue);

    this.handleUpdateSelectionMutlipleMode();
  }

  private handleUpdateSelectionMutlipleMode() {
    if (!this.isMultipleMode) {
      return;
    }

    const currentValues = new Set(this.selectedItems.map((i) => i.value));
    for (const key of this.chipWidths.keys()) {
      if (!currentValues.has(key)) this.chipWidths.delete(key);
    }
    if (this.pendingChipValue === null) {
      this.calculateOverflow();
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
      addItemElement.ariaHidden = 'true';
      addItemElement.role = 'presentation';
      return addItemElement;
    };

    const isRendered = this.hostElement.querySelector('.add-item');
    if (!isRendered) {
      this.hostElement.appendChild(createElement());
    }
  }

  override componentDidLoad() {
    this.inputElement?.addEventListener('input', () => {
      this.dropdownShow = true;
      this.inputChange.emit(this.inputElement?.value);
    });

    // Handle overflow
    this.chipsResizeObserver = new ResizeObserver(() => {
      this.calculateOverflow();
    });

    if (this.chipsEl) {
      this.chipsResizeObserver.observe(this.chipsEl);
    }

    this.calculateOverflow();

    // Handle ARIA
    this.createAddItemElement();

    this.proxyListObserver = new MutationObserver(() => {
      this.updateAriaProxyListbox();
    });
    this.proxyListObserver.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ['aria-selected'],
      subtree: true,
      childList: true,
    });
  }

  override componentWillLoad() {
    this.updateSelection();
    this.updateFormInternalValue(this.value);
  }

  override componentDidRender(): void {
    this.handleChipsOverflow();
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

  override disconnectedCallback() {
    super.disconnectedCallback();

    this.proxyListObserver?.disconnect();
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

    const computeVisibleItems = (extraReservedWidth: number) => {
      const availableWidth =
        this.chipsEl!.clientWidth -
        chevronWidth -
        clearWidth -
        reservedInputSpace -
        extraReservedWidth;
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

      return visibleItems;
    };

    // Check without +N chip first
    let visibleItems = computeVisibleItems(0);

    if (visibleItems.size < this.selectedItems.length) {
      const overflowChipWidth = this.overflowChipEl
        ? this.overflowChipEl.offsetWidth + chipGap
        : 54;

      // Also take +N chip into account if overflow occurs
      visibleItems = computeVisibleItems(overflowChipWidth);
    }

    this.visibleChipValues =
      visibleItems.size >= this.selectedItems.length ? null : visibleItems;
  }

  private itemExists(item: string | undefined) {
    return this.items.find((i) => i.label === item);
  }

  private getActiveVisualFocusedItem(): HTMLIxSelectItemElement | null {
    const elements = queryElements(
      this.hostElement,
      `.${IX_FOCUS_VISIBLE_ACTIVE}`
    );

    if (elements.length > 0) {
      return elements[0] as HTMLIxSelectItemElement;
    }

    return null;
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
      this.checkVisibilityOfProxyList();
    } else {
      this.updateSelection();
      this.inputFilterText = '';
      this.dropdownItemsVisualFocused = false;
      this.inputElement?.setAttribute('aria-activedescendant', '');
    }
  }

  private setItemFilter() {
    this.inputFilterText = this.inputElement?.value.trim() ?? '';

    if (this.inputFilterText) {
      this.items.forEach((item) => {
        const proxyItem = this.hostElement.shadowRoot?.getElementById(
          `${item.id}-${PROXY_LISTITEM_ID_SUFFIX}`
        );
        item.hidden = false;

        if (proxyItem) {
          proxyItem.hidden = false;
          proxyItem.setAttribute('aria-hidden', 'false');
        }

        if (
          !item.label
            ?.toLowerCase()
            .includes(this.inputFilterText.toLowerCase())
        ) {
          item.hidden = true;
          if (proxyItem) {
            proxyItem.hidden = true;
            proxyItem.setAttribute('aria-hidden', 'true');
          }
        }
      });
    } else {
      this.removeHiddenAttributeFromItems();
    }

    this.isDropdownEmpty = this.isEveryDropdownItemHidden;
    this.checkVisibilityOfProxyList();
  }

  private checkVisibilityOfProxyList() {
    const proxyList = this.hostElement?.shadowRoot?.getElementById(
      `${this.hostId}-${PROXY_LIST_ID_SUFFIX}`
    );

    if (!proxyList) {
      return;
    }

    proxyList.hidden = this.isDropdownEmpty;
  }

  private removeHiddenAttributeFromItems() {
    this.items.forEach((item) => {
      item.hidden = false;

      const proxyItem = this.hostElement.shadowRoot?.getElementById(
        `${item.id}-${PROXY_LISTITEM_ID_SUFFIX}`
      );
      if (proxyItem) {
        proxyItem.hidden = false;
        proxyItem.setAttribute('aria-hidden', 'false');
      }
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
    this.hasInputFocus = false;

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

  onInputFocus() {
    this.hasInputFocus = true;
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
            this.inputElement?.focus();
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
        <ix-filter-chip
          readonly={true}
          key="overflow"
          ref={(el) => (this.overflowChipEl = (el as HTMLElement) ?? undefined)}
        >
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

  override getControllingAriaElement():
    | Promise<HTMLElement>
    | HTMLElement
    | null {
    return this.inputRef.waitForCurrent();
  }

  override isAriaActiveDescendantActive(): boolean {
    return this.dropdownShow;
  }

  override getAriaActiveDescendantProxyItemId(): string | boolean {
    return 'proxy-listbox-item';
  }

  override componentWillRender(): Promise<void> | void {
    if (this.addItemElement) {
      this.addItemElement.hidden = !this.isAddItemVisible();
      this.addItemElement.label = this.inputFilterText;
    }
    this.updateAriaProxyListbox();
  }

  private updateAriaProxyListbox() {
    const ariaActiveDescendantHelper =
      this.hostElement.shadowRoot?.getElementById(
        `${this.hostId}-proxy-listbox`
      );
    if (this.focusableItems.length === 0) {
      return;
    }

    updateFocusProxyList(
      ariaActiveDescendantHelper!,
      this.focusableItems,
      (item, proxyElement) => {
        proxyElement.role = 'option';
        proxyElement.innerText = item.label ?? '';
        proxyElement.ariaLabel =
          item.getAttribute('aria-label') || item.label || '';
        proxyElement.ariaSelected =
          item.getAttribute('aria-selected') || 'false';
        proxyElement.ariaChecked = item.getAttribute('aria-checked') || 'false';
        // Forward clicks from the proxy element to the actual dropdown item
        proxyElement.addEventListener('click', (event) => {
          event.stopPropagation();
          event.preventDefault();
          item.click();
        });
        if (this.addItemElement === item) {
          proxyElement.ariaLabel = `${this.ariaLabelAddItem}: ${item.label}`;
        }
        // Bad for building playwright selectors but necessary to ensure that assistive technologies
        // can announce the items in the dropdown with their respective aria-labels
        item.ariaHidden = 'true';
      }
    );
  }

  override render() {
    return (
      <Host
        id={this.getHostElementId()}
        class={{
          readonly: this.readonly,
          disabled: this.disabled,
          'show-focus-outline':
            this.hasInputFocus && !this.dropdownItemsVisualFocused,
        }}
        tabIndex={this.disabled ? -1 : 0}
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
                    id={`${this.hostId}-input`}
                    role="combobox"
                    aria-controls={`${this.hostId}-proxy-listbox`}
                    aria-expanded={a11yBoolean(this.dropdownShow)}
                    aria-autocomplete="list"
                    aria-disabled={a11yBoolean(this.disabled)}
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
                    onFocus={() => this.onInputFocus()}
                    onBlur={(e) => this.onInputBlur(e)}
                    onInput={() => this.setItemFilter()}
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
                      aria-label={
                        this.ariaLabelChevronDownIconButton ??
                        (this.dropdownShow
                          ? 'Close select dropdown'
                          : 'Open select dropdown')
                      }
                      aria-hidden="true"
                      ref={(ref) => {
                        this.chevronButtonEl = ref!;
                        const element = ref as unknown as HTMLButtonElement;
                        // VDOM issue if tabIndex is provided via property <ix-icon-button tabIndex={-1}>
                        // the tabindex will be '0' after expanding the dropdown
                        element.tabIndex = -1;
                        element.ariaHidden = 'true';
                      }}
                      data-select-dropdown
                      key="dropdown"
                      class={{ 'dropdown-visible': this.dropdownShow }}
                      icon={
                        this.dropdownShow
                          ? iconChevronUpSmall
                          : iconChevronDownSmall
                      }
                      variant="subtle-tertiary"
                    ></ix-icon-button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ix-field-wrapper>
        <ix-dropdown
          id={`${this.hostId}-listbox`}
          keyboardActivationKeys={['ArrowUp', 'ArrowDown']}
          keyboardItemTriggerKeys={['Enter']}
          disableFocusTrap
          focusHost={this.hostElement}
          ref={this.dropdownRef}
          show={this.dropdownShow}
          closeBehavior={this.isMultipleMode ? 'outside' : 'both'}
          hidden={this.disabled || this.readonly}
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
          onClick={(event) => {
            const target = event.target as HTMLElement;
            const isTargetElement =
              target.tagName === 'IX-DROPDOWN-ITEM' ||
              target.tagName === 'IX-SELECT-ITEM';

            if (!isTargetElement) {
              return;
            }

            const activeVisualFocusedItem = this.getActiveVisualFocusedItem();

            const item =
              activeVisualFocusedItem ?? (target as HTMLIxSelectItemElement);

            if (!item) {
              return;
            }

            event.stopPropagation();

            if (!item.classList.contains('add-item')) {
              this.itemClick(item.value);
              this.setItemFilter();
            }

            if (this.isSingleMode) {
              this.dropdownShow = false;
            }
          }}
        >
          <div
            aria-hidden="true"
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
          <FocusProxy
            hostId={this.hostId}
            otherProps={{
              'aria-hidden': a11yBoolean(!this.dropdownShow),
              'aria-multiselectable': a11yBoolean(this.isMultipleMode),
              hidden: this.disabled || this.readonly,
            }}
          ></FocusProxy>
          {this.isDropdownEmpty && !this.editable && (
            <div class="select-list-header">{this.i18nNoMatches}</div>
          )}
        </ix-dropdown>
      </Host>
    );
  }
}
