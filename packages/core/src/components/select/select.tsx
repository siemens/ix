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

@Component({
  tag: 'ix-select',
  styleUrl: 'select.scss',
  scoped: true,
})
export class Select {
  @Element() hostElement!: HTMLIxSelectElement;

  /**
   * Indices of selected items
   * This corresponds to the value property of ix-select-items and therefor not neccessarily the indices of the items in the list.
   */
  @Prop({ mutable: true }) selectedIndices: string | string[] = [];

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
   */
  @Prop() i18nNoMatches = 'No matches';

  /**
   * Hide list header
   *
   * @since 1.5.0
   @
   */
  @Prop() hideListHeader = false;

  /**
   * Item selection changed
   */
  @Event() itemSelectionChange: EventEmitter<string | string[]>;

  /**
   * Item added to selection
   */
  @Event() addItem: EventEmitter<string>;

  @State() dropdownShow = false;
  @State() value: string[];
  @State() dropdownWrapperRef!: HTMLElement;
  @State() dropdownAnchor!: HTMLElement;
  @State() isDropdownEmpty = false;
  @State() hasFocus = false;
  @State() navigationItem: HTMLIxSelectItemElement;
  @State() inputFilterText: string;
  @State() inputValue: string;

  private inputRef!: HTMLInputElement;
  private dropdownRef!: HTMLIxDropdownElement;
  private addItemRef!: HTMLDivElement;

  private labelMutationObserver: MutationObserver;

  get items() {
    return Array.from(this.hostElement.querySelectorAll('ix-select-item'));
  }

  get selectedItems() {
    return this.items.filter((item) => item.selected);
  }

  get addItemButton() {
    return this.hostElement.querySelector('.add-item');
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
  watchSelectedIndices(newId: string | string[]) {
    if (!newId) {
      this.selectValue([]);
      return;
    }

    if (Array.isArray(newId)) {
      this.selectValue([...newId]);
      return;
    }

    this.selectValue([newId]);
  }

  @Listen('itemClick')
  onItemClicked(event: CustomEvent<string>) {
    const newId = event.detail;
    this.emitItemClick(newId);
  }

  private emitItemClick(newId: string) {
    if (this.isMultipleMode && Array.isArray(this.selectedIndices)) {
      if (this.selectedIndices.includes(newId)) {
        this.selectedIndices = this.selectedIndices.filter((i) => i !== newId);
      } else {
        this.selectedIndices = [...this.selectedIndices, newId];
      }
    } else {
      this.selectedIndices = [newId];
    }

    this.selectValue(this.selectedIndices);
    this.itemSelectionChange.emit(this.selectedIndices);
  }

  private emitAddItem(value: string) {
    if (value.trim() === '') {
      return;
    }

    const newItem = document.createElement('ix-select-item');
    newItem.value = value;
    newItem.label = value;

    this.addItemRef.appendChild(newItem);

    this.clearInput();
    this.emitItemClick(value);
    this.addItem.emit(value);
  }

  private selectValue(ids: string[]) {
    this.items.forEach((item) => {
      item.selected = ids.some((i) => i === item.value);
    });

    this.value = this.selectedItems.map((item) => item.label);

    if (this.isSingleMode) {
      this.inputValue = this.value?.length ? this.value[0] : null;
      return;
    }

    this.inputValue = null;
  }

  componentWillLoad() {
    if (this.selectedIndices) {
      this.selectValue(
        Array.isArray(this.selectedIndices)
          ? this.selectedIndices
          : [this.selectedIndices]
      );
    }
  }

  @Listen('ix-select-item:labelChange')
  onLabelChange(event: IxSelectItemLabelChangeEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.selectValue(
      Array.isArray(this.selectedIndices)
        ? this.selectedIndices
        : [this.selectedIndices]
    );
  }

  disconnectedCallback() {
    if (this.labelMutationObserver) {
      this.labelMutationObserver.disconnect();
    }
  }

  private itemExists(item: string) {
    return this.items.find((i) => i.label === item);
  }

  private dropdownVisibilityChanged(event: CustomEvent<boolean>) {
    this.dropdownShow = event.detail;
    this.hasFocus = event.detail;

    if (event.detail) {
      this.inputRef.focus();
      this.inputRef.select();

      this.removeHiddenFromItems();
      this.isDropdownEmpty = this.isEveryDropdownItemHidden;
    } else {
      this.navigationItem = undefined;
    }
  }

  @Listen('keydown', {
    target: 'window',
  })
  async onKeyDown(event: KeyboardEvent) {
    if (!this.dropdownShow) {
      return;
    }

    if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
      this.onArrowNavigation(event);
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

    if (this.editable && !this.itemExists(this.inputFilterText)) {
      this.emitAddItem(this.inputFilterText);
      this.navigationItem = this.items[this.items.length - 1];
    }

    this.navigationItem?.onItemClick();
    await this.dropdownRef?.updatePosition();

    if (this.isSingleMode && !this.editable) {
      this.dropdownShow = false;
    }
  }

  private onArrowNavigation(event: KeyboardEvent) {
    event.stopPropagation();
    event.preventDefault();

    const focusItem = this.items.find(
      (item) => document.activeElement === item.querySelector('button')
    );
    this.navigationItem = focusItem;

    const selectItems = this.items.filter(
      (i) => !i.classList.contains('d-none')
    );

    const index = selectItems.indexOf(this.navigationItem);

    if (event.code === 'ArrowDown' && index < selectItems.length - 1) {
      this.navigationItem = selectItems[index + 1];
    } else if (event.code === 'ArrowUp' && index > 0) {
      this.navigationItem = selectItems[index - 1];
    }

    this.setHoverEffectForNavigatedSelectItem();
  }

  private setHoverEffectForNavigatedSelectItem() {
    this.navigationItem?.querySelector('button').focus();
  }

  private filterItemsWithTypeahead() {
    this.inputFilterText = this.inputRef.value;

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
    this.value = [];
    this.selectedIndices = [];
    this.itemSelectionChange.emit(null);
    this.dropdownShow = false;
  }

  private onInputBlur(e) {
    if (this.editable) {
      return;
    }

    if (this.isSingleMode) {
      if (this.dropdownShow && this.isDropdownEmpty) {
        this.dropdownShow = false;
      }
    }

    if (!this.dropdownShow && this.mode !== 'multiple') {
      e.target['value'] = this.value;
    }
  }

  private placeholderValue() {
    if (this.editable) {
      return this.i18nPlaceholderEditable;
    }

    if (this.readonly) {
      return '';
    }

    return this.i18nPlaceholder;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'form-control': true,
            select: true,
            focus: this.hasFocus,
            editable: this.editable,
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
                        this.emitItemClick(item.value);
                      }}
                    >
                      {item.label}
                    </ix-filter-chip>
                  ))
                : ''}
              <div class="trigger">
                <input
                  data-testid="input"
                  disabled={this.disabled}
                  readOnly={this.readonly}
                  type="text"
                  class={{
                    'allow-clear': this.allowClear && !!this.value?.length,
                  }}
                  placeholder={this.placeholderValue()}
                  value={this.inputValue}
                  ref={(ref) => (this.inputRef = ref)}
                  onBlur={(e) => this.onInputBlur(e)}
                  onInput={() => this.filterItemsWithTypeahead()}
                />
                {this.allowClear &&
                (this.value?.length || this.inputFilterText) ? (
                  <ix-icon-button
                    class="clear"
                    icon="clear"
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
                  <div
                    class="chevron-down-container"
                    ref={(ref) => {
                      if (this.editable) this.dropdownWrapperRef = ref;
                    }}
                  >
                    <ix-icon class="chevron" name="chevron-down-small" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <ix-dropdown
          ref={(ref) => (this.dropdownRef = ref)}
          show={this.dropdownShow}
          class={{
            'd-none': this.disabled || this.readonly,
          }}
          anchor={this.dropdownAnchor}
          trigger={this.dropdownWrapperRef}
          onShowChanged={(e) => this.dropdownVisibilityChanged(e)}
          placement="auto-start"
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
          <div ref={(ref) => (this.addItemRef = ref)} class="d-contents"></div>
          {this.itemExists(this.inputFilterText) ? (
            ''
          ) : (
            <ix-dropdown-item
              data-testid="add-item"
              icon="plus"
              class={{
                'add-item': true,
                'd-none': !(this.editable && this.inputFilterText),
              }}
              label={this.inputFilterText}
              onItemClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                this.emitAddItem(this.inputFilterText);
              }}
            ></ix-dropdown-item>
          )}
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
