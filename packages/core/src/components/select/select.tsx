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
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { IxSelectItemLabelChangeEvent } from '../select-item/events';
import { ArrowFocusController } from '../utils/focus';
import { OnListener } from '../utils/listener';
import { createMutationObserver } from '../utils/mutation-observer';
import { DropdownItemWrapper } from '../dropdown/dropdown-controller';

@Component({
  tag: 'ix-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class Select {
  @Element() hostElement!: HTMLIxSelectElement;

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
  @Prop({ mutable: true }) value?: string | string[];

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
  @Prop() i18nSelectListHeader = 'Please select an option';

  /**
   * Hint inside of dropdown if no items where found with current filter text
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
  @Event() valueChange: EventEmitter<string | string[]>;

  /**
   * Item selection changed
   * @deprecated since 2.0.0. Use `valueChange` instead.
   */
  @Event() itemSelectionChange: EventEmitter<string[]>;

  /**
   * Event dispatched whenever the text input changes.
   *
   * @since 2.0.0
   */
  @Event() inputChange: EventEmitter<string>;

  /**
   * Item added to selection
   */
  @Event() addItem: EventEmitter<string>;

  @State() dropdownShow = false;
  @State() selectedLabels: string[];
  @State() dropdownWrapperRef!: HTMLElement;
  @State() dropdownAnchor!: HTMLElement;
  @State() isDropdownEmpty = false;
  @State() navigationItem: DropdownItemWrapper;
  @State() inputFilterText: string;
  @State() inputValue: string;

  private inputRef!: HTMLInputElement;
  private dropdownRef!: HTMLIxDropdownElement;
  private customItemsContainerRef!: HTMLDivElement;
  private addItemRef!: HTMLIxDropdownItemElement;

  private itemMutationObserver: MutationObserver;

  private arrowFocusController: ArrowFocusController;
  private focusControllerCallbackBind = this.focusDropdownItem.bind(this);

  private itemObserver = createMutationObserver(() => {
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
      this.hostElement.shadowRoot.querySelectorAll('ix-select-item')
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
    return this.hostElement.shadowRoot.querySelector('.add-item');
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
      this.arrowFocusController = undefined;
      this.itemObserver.disconnect();
    }
  }

  @Listen('itemClick')
  onItemClicked(event: CustomEvent<string>) {
    const newId = event.detail;
    this.itemClick(newId);
  }

  private focusDropdownItem(index: number) {
    this.navigationItem = undefined;

    if (index < this.visibleNonShadowItems.length) {
      const nestedDropdownItem =
        this.visibleNonShadowItems[index]?.shadowRoot.querySelector(
          'ix-dropdown-item'
        );

      requestAnimationFrame(() => {
        nestedDropdownItem.shadowRoot.querySelector('button').focus();
      });
    }
  }

  private itemClick(newId: string) {
    this.value = this.toggleValue(newId);
    this.updateSelection();
    this.emitValueChange();
  }

  private emitAddItem(value: string) {
    if (value === undefined || value.trim() === '') {
      return;
    }

    const newItem = document.createElement('ix-select-item');
    newItem.value = value;
    newItem.label = value;

    this.customItemsContainerRef.appendChild(newItem);

    this.clearInput();
    this.itemClick(value);
    this.addItem.emit(value);
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
    let ids = [];

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

    if (this.isSingleMode && this.selectedLabels?.length) {
      this.inputValue = this.selectedLabels[0];
      this.inputRef && (this.inputRef.value = this.inputValue);
      return;
    }

    this.inputValue = null;
  }

  private emitValueChange() {
    this.valueChange.emit(this.value);

    if (!this.value) {
      this.itemSelectionChange.emit(null);
    } else {
      this.itemSelectionChange.emit(
        Array.isArray(this.value) ? this.value : [this.value]
      );
    }
  }

  componentDidLoad() {
    this.inputRef.addEventListener('input', () => {
      this.dropdownShow = true;
      this.inputChange.emit(this.inputRef.value);
    });
  }

  componentWillLoad() {
    if (this.selectedIndices && !this.value) {
      this.value = this.selectedIndices;
    }

    if (typeof this.items[0]?.value !== 'string') {
      console.warn(
        'Non string data types not supported and and will be removed in 3.0'
      );
    }

    this.updateSelection();
  }

  @Listen('ix-select-item:labelChange')
  onLabelChange(event: IxSelectItemLabelChangeEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.updateSelection();
  }

  disconnectedCallback() {
    if (this.itemMutationObserver) {
      this.itemMutationObserver.disconnect();
    }
  }

  private itemExists(item: string) {
    return this.items.find((i) => i.label === item);
  }

  private dropdownVisibilityChanged(event: CustomEvent<boolean>) {
    this.dropdownShow = event.detail;

    if (event.detail) {
      this.inputRef.focus();
      this.inputRef.select();

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
      await this.onEnterNavigation();
    }

    if (event.code === 'Escape') {
      this.dropdownShow = false;
    }
  }

  private async onEnterNavigation() {
    if (this.isMultipleMode) {
      return;
    }

    let item: HTMLIxSelectItemElement;

    if (this.editable && !this.itemExists(this.inputFilterText)) {
      this.emitAddItem(this.inputFilterText);
      item = this.items[this.items.length - 1];
    }

    if (item) {
      item.onItemClick();
    }

    await this.dropdownRef?.updatePosition();

    if (this.isSingleMode && !this.editable) {
      this.dropdownShow = false;
    }
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
    const indexNonShadow = this.visibleNonShadowItems.indexOf(
      document.activeElement as any
    );

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
      this.navigationItem as any
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

  private applyFocusTo(element: HTMLIxSelectItemElement) {
    if (!element) {
      return;
    }

    this.navigationItem = element;

    setTimeout(() => {
      element.shadowRoot
        .querySelector('ix-dropdown-item')
        .shadowRoot.querySelector('button')
        .focus();
    });
  }

  private focusAddItemButton() {
    if (this.addItemButton) {
      this.addItemButton.shadowRoot.querySelector('button').focus();
      this.navigationItem = this.addItemRef;
    }
  }

  private filterItemsWithTypeahead() {
    this.inputFilterText = this.inputRef.value;

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
    this.inputRef.value = '';
    this.inputFilterText = '';
  }

  private clear() {
    this.clearInput();
    this.selectedLabels = [];
    this.value = [];
    this.valueChange.emit(null);
    this.dropdownShow = false;
  }

  private onInputBlur(e) {
    if (this.editable) {
      return;
    }

    if (this.isSingleMode) {
      return;
    }

    if (!this.dropdownShow && this.mode !== 'multiple') {
      e.target['value'] = this.selectedLabels;
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

  render() {
    return (
      <Host>
        <div
          class={{
            select: true,
            disabled: this.disabled,
            readonly: this.readonly,
          }}
          ref={(ref) => {
            this.dropdownAnchor = ref;
            if (!this.editable) this.dropdownWrapperRef = ref;
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
                  type="text"
                  class={{
                    'allow-clear':
                      this.allowClear && !!this.selectedLabels?.length,
                  }}
                  placeholder={this.placeholderValue()}
                  value={this.inputValue}
                  ref={(ref) => (this.inputRef = ref)}
                  onBlur={(e) => this.onInputBlur(e)}
                  onFocus={() => {
                    this.navigationItem = undefined;
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
                      if (this.editable) this.dropdownWrapperRef = ref;
                    }}
                  ></ix-icon-button>
                )}
              </div>
            </div>
          </div>
        </div>
        <ix-dropdown
          ref={(ref) => (this.dropdownRef = ref)}
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
            return {
              minWidth: `${this.hostElement.clientWidth}px`,
            };
          }}
        >
          <div
            class={{
              'select-list-header': true,
              hidden: this.hideListHeader || this.isDropdownEmpty,
            }}
            title={this.i18nSelectListHeader}
          >
            {this.i18nSelectListHeader}
          </div>
          <slot></slot>
          <div
            ref={(ref) => (this.customItemsContainerRef = ref)}
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
                this.addItemRef = ref;
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
