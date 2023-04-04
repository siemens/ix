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

  @Watch('inputFilterText')
  watchInputText(newValue: string) {
    if (!this.editable) {
      return;
    }

    if (this.itemExists(newValue)) {
      return;
    }
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

    const test = document.createElement('ix-select-item');
    test.value = value;
    test.label = value;

    this.addItemRef.appendChild(test);

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

    if (event.detail) {
      this.inputRef.focus();
      this.inputRef.select();

      this.navigationItem = this.items[0];
      this.setHoverEffectForNavigatedSelectItem();
      this.removeHiddenFromItems();
    }
    this.hasFocus = event.detail;
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
    this.items.forEach((item: HTMLIxSelectItemElement) => {
      item.hover = item === this.navigationItem;
    });
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
    this.isDropdownEmpty = this.items.every((item) =>
      item.classList.contains('d-none')
    );
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
                  placeholder={
                    this.editable
                      ? this.i18nPlaceholderEditable
                      : this.i18nPlaceholder
                  }
                  value={this.inputValue}
                  ref={(ref) => (this.inputRef = ref)}
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
            'd-none':
              this.disabled ||
              this.readonly ||
              (this.isDropdownEmpty && !this.editable),
          }}
          anchor={this.dropdownAnchor}
          trigger={this.dropdownWrapperRef}
          onShowChanged={(e) => this.dropdownVisibilityChanged(e)}
          placement="auto-start"
          overwriteDropdownStyle={async () => {
            return {
              width: `${this.hostElement.clientWidth}px`,
            };
          }}
        >
          <div
            class={{
              'select-list-header': true,
              hidden: this.hideListHeader === true,
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
        </ix-dropdown>
      </Host>
    );
  }
}
