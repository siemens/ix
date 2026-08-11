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
  forceUpdate,
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
  FocusProxy,
  PROXY_LIST_ID_SUFFIX,
  PROXY_LISTITEM_ID_SUFFIX,
  updateFocusProxyList,
} from '../utils/focus/focus-proxy';
import {
  IX_FOCUS_VISIBLE_ACTIVE,
  queryElements,
} from '../utils/focus/focus-utilities';
import {
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
} from '../utils/input';
import { DefaultMixins } from '../utils/internal/component';
import {
  AriaActiveDescendantMixin,
  AriaActiveDescendantMixinContract,
} from '../utils/internal/mixins/accessibility/aria-activedescendant.mixin';
import {
  ComponentIdMixin,
  ComponentIdMixinContract,
} from '../utils/internal/mixins/id.mixin';
import { makeRef } from '../utils/make-ref';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';

let selectId = 0;

/**
 * @form-ready
 * @slot default - Select items.
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
   * Accessible label template for the overflow indicator chip shown in multiple
   * mode when not all selected chips fit on a single row. The `{count}`
   * placeholder is replaced with the number of hidden items (e.g. "3 more").
   *
   * @since 5.1.0
   */
  @Prop({ attribute: 'i18n-more-items' }) i18nMoreItems = '{count} more';

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
   * Prefix for the accessible name of the close control on a selected chip in multiple mode.
   * The chip label or value is appended (e.g. "Remove Item 1").
   *
   * @since 5.0.0
   */
  @Prop({ attribute: 'i18n-remove-selected-item' }) i18nRemoveSelectedItem =
    'Remove';

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
  @State() visibleChipValues: string[] | null = null;
  @State() hiddenChipValues: string[] = [];
  @State() overflowDropdownShow = false;

  @State() hasInputFocus = false;
  @State() dropdownItemsVisualFocused = false;

  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;

  private readonly hostId = `ix-select-${selectId++}`;
  private readonly dropdownWrapperRef = makeRef<HTMLElement>();
  private readonly dropdownAnchorRef = makeRef<HTMLElement>();
  private readonly inputRef = makeRef<HTMLInputElement>();
  private readonly dropdownRef = makeRef<HTMLIxDropdownElement>();
  private readonly chipElementRefs = new Map<string, HTMLElement>();
  private readonly chipWidths = new Map<string, number>();
  private readonly overflowChipRef = makeRef<HTMLElement>();
  private readonly chipsContainerRef = makeRef<HTMLElement>();
  private readonly clearButtonRef = makeRef<HTMLElement>();

  private readonly chipHorizontalMargin = 4;
  private readonly triggerMinWidth = 78;
  private readonly overflowChipFallbackWidth = 52;
  private overflowChipWidth = 0;
  private chipsResizeObserver?: ResizeObserver;
  private overflowDropdownOpenedByKeyboard = false;

  private proxyListObserver: MutationObserver | null = null;
  private inputElement?: HTMLInputElement;
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

  @Watch('value')
  watchValue(value: string | string[]) {
    this.value = value;
    this.updateSelection();
  }

  @Watch('disabled')
  @Watch('readonly')
  watchDisabledReadonly() {
    // Disabled/readonly hides the chip close button, changing chip widths, so
    // invalidate the measurement cache to force a re-measure on next render.
    this.chipWidths.clear();
    this.overflowChipWidth = 0;
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

    this.pruneChipWidthCache();

    if (this.dropdownShow && this.inputFilterText) {
      return;
    }

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

    const chipsContainer = this.chipsContainerRef.current;
    if (chipsContainer) {
      this.chipsResizeObserver = new ResizeObserver(() => {
        this.handleChipsContainerResize();
      });
      this.chipsResizeObserver.observe(chipsContainer);
    }
  }

  override componentWillLoad() {
    this.updateSelection();
    this.updateFormInternalValue(this.value);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();

    this.proxyListObserver?.disconnect();
    this.chipsResizeObserver?.disconnect();
  }

  @Listen('ix-select-item:valueChange')
  @Listen('ix-select-item:labelChange')
  onLabelChange(event: IxSelectItemLabelChangeEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    // A changed label/value alters the chip width, so drop the cache and let
    // the next render re-measure the affected chips.
    this.chipWidths.clear();
    this.updateSelection();
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

  private getRemoveChipAriaLabel(item: HTMLIxSelectItemElement): string {
    const name = (item.label ?? item.value)?.toString().trim();
    if (!name) {
      return this.i18nRemoveSelectedItem;
    }
    return `${this.i18nRemoveSelectedItem} ${name}`;
  }

  private renderAllChip() {
    return (
      <ix-filter-chip
        disabled={this.disabled || this.readonly}
        ariaLabelCloseIconButton={`${this.i18nRemoveSelectedItem} ${this.i18nAllSelected}`}
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

  private renderChip(item: HTMLIxSelectItemElement, measuring: boolean) {
    const value = item.value.toString();

    return (
      <ix-filter-chip
        class={{
          'chip-measuring': measuring,
        }}
        disabled={this.disabled || this.readonly}
        key={value}
        ariaLabelCloseIconButton={this.getRemoveChipAriaLabel(item)}
        ref={(ref) => {
          if (ref) {
            this.chipElementRefs.set(value, ref as unknown as HTMLElement);
            return;
          }

          this.chipElementRefs.delete(value);
        }}
        onCloseClick={() => {
          this.itemClick(item.value);
          this.inputElement?.focus();
        }}
      >
        {item.label}
      </ix-filter-chip>
    );
  }

  private renderHiddenChip(item: HTMLIxSelectItemElement) {
    return (
      <ix-filter-chip
        class="chip-hidden-item"
        disabled={this.disabled || this.readonly}
        key={`hidden-${item.value}`}
        ariaLabelCloseIconButton={this.getRemoveChipAriaLabel(item)}
        onCloseClick={() => {
          this.overflowDropdownShow = false;
          this.itemClick(item.value);
          this.inputElement?.focus();
        }}
      >
        {item.label}
      </ix-filter-chip>
    );
  }

  private renderOverflowChip() {
    const count = this.hiddenChipValues.length;
    const ariaLabel = this.i18nMoreItems.replace('{count}', count.toString());

    return (
      <ix-filter-chip
        key="overflow-chip"
        class="chip-overflow"
        hideCloseButton
        disabled={this.disabled || this.readonly}
        tabindex={this.disabled || this.readonly ? -1 : 0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={a11yBoolean(this.overflowDropdownShow)}
        aria-label={ariaLabel}
        ref={this.overflowChipRef}
        onClick={(event: Event) => {
          event.preventDefault();
          event.stopPropagation();
          this.toggleOverflowDropdown();
        }}
        onKeyDown={(event: KeyboardEvent) => {
          if (
            event.key === 'Enter' ||
            event.key === ' ' ||
            event.key === 'ArrowDown'
          ) {
            event.preventDefault();
            event.stopImmediatePropagation();
            this.overflowDropdownOpenedByKeyboard = true;
            this.overflowDropdownShow = true;
          }
        }}
      >
        {`+${count}`}
      </ix-filter-chip>
    );
  }

  private renderMultipleModeChips() {
    if (this.items.length === 0) {
      return null;
    }

    if (this.shouldDisplayAllChip()) {
      return this.renderAllChip();
    }

    const selected = this.selectedItems;
    if (selected.length === 0) {
      return null;
    }

    const visibleItems = selected.filter((item) => {
      const value = item.value.toString();
      if (!this.chipWidths.has(value)) {
        return false;
      }
      return (
        this.visibleChipValues === null ||
        this.visibleChipValues.includes(value)
      );
    });

    const unmeasuredItems = selected.filter(
      (item) => !this.chipWidths.has(item.value.toString())
    );

    return [
      ...visibleItems.map((item) => this.renderChip(item, false)),
      this.hiddenChipValues.length > 0 ? this.renderOverflowChip() : null,
      ...unmeasuredItems.map((item) => this.renderChip(item, true)),
    ];
  }

  private renderOverflowDropdown() {
    return (
      <ix-dropdown
        class="overflow-dropdown"
        show={this.overflowDropdownShow}
        anchor={this.overflowChipRef.waitForCurrent()}
        closeBehavior="outside"
        placement="bottom-start"
        onShowChanged={(event: CustomEvent<boolean>) => {
          this.overflowDropdownShow = event.detail;
          if (event.detail && this.overflowDropdownOpenedByKeyboard) {
            this.overflowDropdownOpenedByKeyboard = false;
            this.focusOverflowRemoveButton(0);
          }
        }}
      >
        <div class="overflow-dropdown-content">
          {this.hiddenChipValues.map((value) => {
            const item = this.selectedItems.find(
              (selectedItem) => selectedItem.value.toString() === value
            );
            return item ? this.renderHiddenChip(item) : null;
          })}
        </div>
      </ix-dropdown>
    );
  }

  private toggleOverflowDropdown() {
    if (this.disabled || this.readonly) {
      return;
    }
    this.overflowDropdownShow = !this.overflowDropdownShow;
  }

  private getOverflowRemoveButtons() {
    const dropdown = this.hostElement.shadowRoot?.querySelector(
      'ix-dropdown.overflow-dropdown'
    );

    if (!dropdown) {
      return [];
    }

    return Array.from(
      dropdown.querySelectorAll<HTMLIxFilterChipElement>(
        'ix-filter-chip.chip-hidden-item'
      )
    ).flatMap((chip) => {
      const iconButton =
        chip.shadowRoot?.querySelector<HTMLIxIconButtonElement>(
          'ix-icon-button'
        );
      const button =
        iconButton?.shadowRoot?.querySelector<HTMLButtonElement>('button');
      return button ? [button] : [];
    });
  }

  private focusOverflowRemoveButton(index: number) {
    requestAnimationFrameNoNgZone(() => {
      const buttons = this.getOverflowRemoveButtons();
      const button = buttons[index];

      if (!button) {
        return;
      }

      button.focus({ preventScroll: true });
      button.scrollIntoView({ block: 'nearest' });
    });
  }

  @Listen('keydown', { capture: true })
  onOverflowRemoveButtonKeyDown(event: KeyboardEvent) {
    if (!this.overflowDropdownShow) {
      return;
    }

    const buttons = this.getOverflowRemoveButtons();
    const currentIndex = buttons.findIndex((button) =>
      event.composedPath().includes(button)
    );

    if (currentIndex === -1) {
      return;
    }

    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.focusOverflowRemoveButton((currentIndex + 1) % buttons.length);
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.focusOverflowRemoveButton(
          (currentIndex - 1 + buttons.length) % buttons.length
        );
        break;
      }
      case 'Tab': {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.focusOverflowRemoveButton(
          event.shiftKey
            ? (currentIndex - 1 + buttons.length) % buttons.length
            : (currentIndex + 1) % buttons.length
        );
        break;
      }
      case 'Escape': {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.overflowDropdownShow = false;
        this.focusOverflowChip();
        break;
      }
      default:
        break;
    }
  }

  private focusOverflowChip() {
    requestAnimationFrameNoNgZone(() => {
      this.overflowChipRef.current?.focus({ preventScroll: true });
    });
  }

  private pruneChipWidthCache() {
    const validValues = new Set(
      this.selectedItems.map((item) => item.value.toString())
    );
    for (const value of this.chipWidths.keys()) {
      if (!validValues.has(value)) {
        this.chipWidths.delete(value);
      }
    }
  }

  private sameChipValues(a: string[] | null, b: string[] | null): boolean {
    if (a === b) {
      return true;
    }

    if (a === null || b === null) {
      return false;
    }

    if (a.length !== b.length) {
      return false;
    }

    return a.every((value, index) => value === b[index]);
  }

  private applyOverflowState(visible: string[] | null, hidden: string[]) {
    if (!this.sameChipValues(this.visibleChipValues, visible)) {
      this.visibleChipValues = visible;
    }

    if (!this.sameChipValues(this.hiddenChipValues, hidden)) {
      this.hiddenChipValues = hidden;
    }

    if (hidden.length === 0 && this.overflowDropdownShow) {
      this.overflowDropdownShow = false;
    }
  }

  private getChipWidthWithMargin(value: string) {
    return (this.chipWidths.get(value) ?? 0) + this.chipHorizontalMargin;
  }

  private getOverflowChipWidthWithMargin() {
    return (
      (this.overflowChipWidth || this.overflowChipFallbackWidth) +
      this.chipHorizontalMargin
    );
  }

  private canShowAllChips(values: string[], available: number) {
    const totalWidth = values.reduce(
      (width, value) => width + this.getChipWidthWithMargin(value),
      0
    );

    return totalWidth <= available;
  }

  private getOverflowChipValues(values: string[], available: number) {
    const [firstValue, ...remainingValues] = values;
    if (firstValue === undefined) {
      return { visible: [], hidden: [] };
    }

    const visible = [firstValue];
    const hidden: string[] = [];
    let usedWidth = this.getChipWidthWithMargin(firstValue);
    const overflowChipWidth = this.getOverflowChipWidthWithMargin();

    for (const [index, value] of remainingValues.entries()) {
      const width = this.getChipWidthWithMargin(value);

      if (usedWidth + width + overflowChipWidth <= available) {
        visible.push(value);
        usedWidth += width;
        continue;
      }

      hidden.push(...remainingValues.slice(index));
      break;
    }

    return { visible, hidden };
  }

  private hasUnmeasuredSelectedChips(values: string[]) {
    return values.some((value) => !this.chipWidths.has(value));
  }

  private getChipOverflowContext() {
    if (!this.isMultipleMode || this.shouldDisplayAllChip()) {
      this.applyOverflowState(null, []);
      return null;
    }

    const container = this.chipsContainerRef.current;
    if (!container) {
      return null;
    }

    const values = this.selectedItems.map((item) => item.value.toString());
    if (values.length === 0) {
      this.applyOverflowState(null, []);
      return null;
    }

    return { container, values };
  }

  private handleChipsContainerResize() {
    const context = this.getChipOverflowContext();
    if (!context) {
      return;
    }

    if (this.hasUnmeasuredSelectedChips(context.values)) {
      // If the select was initially hidden, widths can be 0 on first render.
      // A resize after becoming visible should trigger a re-measure pass.
      forceUpdate(this);
      return;
    }

    this.calculateChipOverflow(context);
  }

  private calculateChipOverflow(context = this.getChipOverflowContext()) {
    if (!context) {
      return;
    }

    const { container, values } = context;

    if (!values.every((value) => this.chipWidths.has(value))) {
      return;
    }

    const clearButtonWidth =
      this.allowClear && this.clearButtonRef.current
        ? this.clearButtonRef.current.offsetWidth
        : 0;
    const available =
      container.clientWidth - this.triggerMinWidth - clearButtonWidth;
    if (this.canShowAllChips(values, available)) {
      this.applyOverflowState(null, []);
      return;
    }

    const { visible, hidden } = this.getOverflowChipValues(values, available);
    this.applyOverflowState(visible, hidden);
  }

  private async waitForComponentReady(element?: HTMLElement) {
    const stencilComponent = element as
      | Partial<{ componentOnReady: () => Promise<unknown> }>
      | undefined;

    if (typeof stencilComponent?.componentOnReady === 'function') {
      await stencilComponent.componentOnReady();
    }
  }

  private waitForNextFrame() {
    return new Promise<void>((resolve) =>
      requestAnimationFrameNoNgZone(() => resolve())
    );
  }

  private async waitForChipLayout(elements: (HTMLElement | undefined)[]) {
    await Promise.all(
      elements.map((element) => this.waitForComponentReady(element))
    );
    await this.waitForNextFrame();
  }

  private async measureSelectedChipWidths(items: HTMLIxSelectItemElement[]) {
    const elements = items.map((item) =>
      this.chipElementRefs.get(item.value.toString())
    );

    await this.waitForChipLayout(elements);

    let measuredAny = false;
    for (const item of items) {
      const value = item.value.toString();
      const element = this.chipElementRefs.get(value);

      if (element && element.offsetWidth > 0) {
        this.chipWidths.set(value, element.offsetWidth);
        measuredAny = true;
      }
    }

    return measuredAny;
  }

  private async measureOverflowChipWidth() {
    if (this.hiddenChipValues.length === 0 || this.overflowChipWidth > 0) {
      return;
    }

    const overflowElement = await this.overflowChipRef.waitForCurrent();
    await this.waitForChipLayout([overflowElement]);

    if (overflowElement.offsetWidth > 0) {
      this.overflowChipWidth = overflowElement.offsetWidth;
    }
  }

  override async componentDidRender(): Promise<void> {
    if (!this.isMultipleMode || this.shouldDisplayAllChip()) {
      this.applyOverflowState(null, []);
      return;
    }

    const selected = this.selectedItems;
    if (selected.length === 0) {
      this.applyOverflowState(null, []);
      return;
    }

    const unmeasured = selected.filter(
      (item) => !this.chipWidths.has(item.value.toString())
    );

    if (unmeasured.length > 0) {
      const measuredAny = await this.measureSelectedChipWidths(unmeasured);

      if (measuredAny) {
        this.calculateChipOverflow();
        forceUpdate(this);
      }
      return;
    }

    await this.measureOverflowChipWidth();

    this.calculateChipOverflow();
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

    if (this.isMultipleMode && !this.shouldDisplayAllChip()) {
      const selected = this.selectedItems;
      const allMeasured =
        selected.length > 0 &&
        selected.every((item) => this.chipWidths.has(item.value.toString()));

      if (allMeasured) {
        this.calculateChipOverflow();
      }
    }
  }

  private updateAriaProxyListbox() {
    const ariaActiveDescendantHelper =
      this.hostElement.shadowRoot?.getElementById(
        `${this.hostId}-proxy-listbox`
      );
    if (this.focusableItems.length === 0 || !ariaActiveDescendantHelper) {
      return;
    }

    updateFocusProxyList(
      ariaActiveDescendantHelper,
      this.focusableItems,
      (item, proxyElement) => {
        const isSelectItem = item.tagName === 'IX-SELECT-ITEM';
        const ariaLabel =
          item.getAttribute('aria-label') ||
          item.label ||
          (isSelectItem ? (item as HTMLIxSelectItemElement).value : '') ||
          '';
        const selected = isSelectItem
          ? (item as HTMLIxSelectItemElement).selected
          : (item as HTMLIxDropdownItemElement).checked;

        proxyElement.role = 'option';
        proxyElement.innerText = item.label ?? '';
        proxyElement.ariaLabel = ariaLabel;
        proxyElement.ariaSelected = a11yBoolean(!!selected);
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
              <div class="chips" ref={this.chipsContainerRef}>
                {this.isMultipleMode && this.renderMultipleModeChips()}
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
                      ref={this.clearButtonRef}
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
                        this.dropdownShow
                          ? 'Close select dropdown'
                          : 'Open select dropdown'
                      }
                      aria-hidden="true"
                      tabindex={-1}
                      ref={(ref) => {
                        if (!ref) {
                          return;
                        }

                        const element = ref as unknown as HTMLButtonElement;
                        // VDOM issue if tabIndex is provided only via property <ix-icon-button tabIndex={-1}>
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
          onShowChange={(event) => {
            if ((this.disabled || this.readonly) && event.detail) {
              event.preventDefault();
            }
          }}
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
        {this.isMultipleMode &&
          !this.shouldDisplayAllChip() &&
          this.hiddenChipValues.length > 0 &&
          this.renderOverflowDropdown()}
      </Host>
    );
  }
}
