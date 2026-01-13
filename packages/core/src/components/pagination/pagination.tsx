/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
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
} from '@stencil/core';
import { BaseButton, BaseButtonProps } from '../button/base-button';
import { a11yBoolean } from '../utils/a11y';
import {
  iconChevronLeftSmall,
  iconChevronRightSmall,
} from '@siemens/ix-icons/icons';

@Component({
  tag: 'ix-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})
export class Pagination {
  private readonly baseButtonConfig: BaseButtonProps = {
    variant: 'subtle-tertiary',
    iconOnly: true,
    iconOval: false,
    disabled: false,
    icon: '',
    loading: false,
    selected: false,
    type: 'button',
  };

  private readonly maxCountPages = 7;
  private readonly defaultItemCountOptions = [10, 15, 20, 40, 100];

  @Element() hostElement!: HTMLIxPaginationElement;

  /**
   * Advanced mode
   */
  @Prop() advanced = false;

  /**
   * Number of items shown at once.
   * Can only be changed in advaced mode.
   */
  @Prop() itemCount = 15;

  /**
   * Hide item count in advanced mode
   */
  @Prop() hideItemCount = false;

  /**
   * Custom item count options for advanced mode.
   * Provide an array of numbers to display in the items per page dropdown.
   * If not provided or empty, defaults to [10, 15, 20, 40, 100].
   * Only positive numbers greater than 0 are valid.
   *
   * @example [5, 10, 25, 50, 100]
   */
  @Prop() itemCountOptions?: number[];

  /**
   * Total number of pages
   */
  @Prop() count: number = 0;

  /**
   * Zero based index of currently selected page
   */
  @Prop({ mutable: true }) selectedPage = 0;

  /**
   * i18n label for 'Page'
   */
  @Prop({ attribute: 'i18n-page' }) i18nPage = 'Page';

  /**
   * i18n label for 'of'
   */
  @Prop({ attribute: 'i18n-of' }) i18nOf = 'of';

  /**
   * i18n label for 'Items'
   */
  @Prop({ attribute: 'i18n-items' }) i18nItems = 'Items';

  /**
   * ARIA label for the chevron left icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelChevronLeftIconButton?: string;

  /**
   * ARIA label for the chevron right icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelChevronRightIconButton?: string;

  /**
   * ARIA label for the page selection input
   * Will be set as aria-label on the nested HTML input element
   *
   * @since 4.1.0
   */
  @Prop() ariaLabelPageSelection = 'Page selection input';
  /**
   * Page selection event
   */
  @Event() pageSelected!: EventEmitter<number>;

  /**
   * Item count change event
   */
  @Event() itemCountChanged!: EventEmitter<number>;

  componentWillLoad() {
    if (
      this.advanced &&
      this.itemCountOptions !== undefined &&
      this.itemCountOptions.length === 0
    ) {
      console.warn(
        '[ix-pagination] itemCountOptions is an empty array. Falling back to default options: [10, 15, 20, 40, 100]'
      );
    }
    if (this.advanced && !this.hideItemCount && this.itemCountOptions?.length) {
      const validOptions = this.itemCountOptions
        .filter((option) => option > 0)
        .sort((a, b) => a - b);

      if (validOptions.length > 0 && !validOptions.includes(this.itemCount)) {
        console.warn(
          `[ix-pagination] Configuration mismatch: itemCount value "${
            this.itemCount
          }" is not present in itemCountOptions [${validOptions.join(
            ', '
          )}]. ` +
            `This will result in an invalid dropdown state. Please either add ${this.itemCount} to itemCountOptions or set itemCount to one of the available options.`
        );
      }
    }
  }

  private selectPage(index: number) {
    const oldIndex = this.selectedPage;

    if (index < 0) {
      this.selectedPage = 0;
    } else if (index > this.count - 1) {
      this.selectedPage = this.count - 1;
    } else {
      this.selectedPage = index;
    }

    const { defaultPrevented } = this.pageSelected.emit(this.selectedPage);

    if (defaultPrevented) {
      this.selectedPage = oldIndex;
    }
  }

  private increase() {
    if (this.selectedPage === this.count - 1) {
      return;
    }

    this.selectPage(this.selectedPage + 1);
  }

  private decrease() {
    if (this.selectedPage === 0) {
      return;
    }

    this.selectPage(this.selectedPage - 1);
  }

  private getPageButton(index: number) {
    const baseButtonProps: BaseButtonProps = {
      ...this.baseButtonConfig,
      onClick: () => this.selectPage(index),
      selected: this.selectedPage === index,
      ariaAttributes: {
        'aria-pressed': a11yBoolean(this.selectedPage === index),
      },
    };

    return <BaseButton {...baseButtonProps}>{index + 1}</BaseButton>;
  }

  private renderPageButtons() {
    const pagesBeforeOverflow = Math.floor(this.maxCountPages / 2);
    const hasOverflow = this.count > this.maxCountPages;
    const hasOverflowStart =
      hasOverflow && this.selectedPage > pagesBeforeOverflow;
    const hasOverflowEnd =
      hasOverflow && this.selectedPage < this.count - pagesBeforeOverflow - 1;
    const pageButtons = [];

    let start = 0;
    let end = Math.min(this.count, this.maxCountPages);
    let pageCount = Math.floor((this.maxCountPages - 4) / 2);

    if (hasOverflowStart) {
      const baseButtonProps = {
        ...this.baseButtonConfig,
        onClick: () => {
          if (hasOverflowEnd) {
            this.selectPage(this.selectedPage - Math.max(0, 2 * pageCount + 1));
          } else {
            this.selectPage(this.count - this.maxCountPages);
          }
        },
      };
      pageButtons.push(this.getPageButton(0));
      pageButtons.push(<BaseButton {...baseButtonProps}>...</BaseButton>);

      if (hasOverflowEnd) {
        start = this.count - this.maxCountPages + 2;
      } else {
        start = this.count - this.maxCountPages + 2;
        end = this.count;
      }
    }

    if (hasOverflowEnd) {
      if (hasOverflowStart) {
        start = this.selectedPage - pageCount;
        end = this.selectedPage + pageCount + 1;
      } else {
        end = this.maxCountPages - 2;
      }
    }

    for (let i = start; i < end; i++) {
      pageButtons.push(this.getPageButton(i));
    }

    if (hasOverflowEnd) {
      const baseButtonProps = {
        ...this.baseButtonConfig,
        onClick: () => {
          if (hasOverflowStart) {
            this.selectPage(this.selectedPage + Math.max(0, 2 * pageCount + 1));
          } else {
            this.selectPage(this.maxCountPages - 1);
          }
        },
      };
      pageButtons.push(<BaseButton {...baseButtonProps}>...</BaseButton>);
      pageButtons.push(this.getPageButton(this.count - 1));
    }

    return <span class="page-buttons">{pageButtons}</span>;
  }

  private handlePageInput(inputValue: string) {
    const value = Number.parseInt(inputValue, 10);
    if (!Number.isNaN(value)) {
      const clampedValue = Math.max(1, Math.min(value, this.count));
      this.selectPage(clampedValue - 1);
    }
  }

  render() {
    return (
      <Host>
        <ix-icon-button
          disabled={!this.count || this.selectedPage === 0}
          variant="subtle-tertiary"
          icon={iconChevronLeftSmall}
          onClick={() => this.decrease()}
          aria-label={this.ariaLabelChevronLeftIconButton}
        ></ix-icon-button>

        {this.advanced ? (
          <div class="advanced-pagination">
            <ix-typography format="body">{this.i18nPage}</ix-typography>
            <input
              aria-label={this.ariaLabelPageSelection}
              class="ix-form-control page-selection"
              type="number"
              min="1"
              max={this.count}
              value={this.selectedPage + 1}
              onChange={(event: Event) => {
                const inputElement = event.target as HTMLInputElement;
                this.handlePageInput(inputElement.value);
              }}
              onKeyDown={(event: KeyboardEvent) => {
                if (['e', 'E', '+', '-', '.'].includes(event.key))
                  event.preventDefault();
                if (event.key === 'Enter') {
                  const inputElement = event.target as HTMLInputElement;
                  this.handlePageInput(inputElement.value);
                  inputElement.blur();
                }
              }}
              onBlur={(e: Event) => {
                const inputElement = e.target as HTMLInputElement;
                inputElement.value = (this.selectedPage + 1).toString();
              }}
            />
            <span class="total-count">
              <ix-typography format="body">
                {this.i18nOf} {this.count}
              </ix-typography>
            </span>
          </div>
        ) : (
          <span class="basic-pagination">{this.renderPageButtons()} </span>
        )}

        <ix-icon-button
          disabled={!this.count || this.selectedPage === this.count - 1}
          variant="subtle-tertiary"
          icon={iconChevronRightSmall}
          onClick={() => this.increase()}
          aria-label={this.ariaLabelChevronRightIconButton}
        ></ix-icon-button>

        {this.advanced && !this.hideItemCount && (
          <span class="item-count">
            <ix-typography format="body">{this.i18nItems}</ix-typography>
            <ix-select
              hideListHeader
              i18nPlaceholder=""
              i18nSelectListHeader=""
              value={`${this.itemCount}`}
              onValueChange={(e) => {
                const count = Number.parseInt(
                  Array.isArray(e.detail) ? e.detail[0] : e.detail
                );

                this.itemCountChanged.emit(count);
              }}
            >
              {(this.itemCountOptions?.length
                ? this.itemCountOptions
                : this.defaultItemCountOptions
              )
                .filter((option) => option > 0)
                .sort((a, b) => a - b)
                .map((option) => (
                  <ix-select-item
                    label={`${option}`}
                    value={`${option}`}
                  ></ix-select-item>
                ))}
            </ix-select>
          </span>
        )}
      </Host>
    );
  }
}
