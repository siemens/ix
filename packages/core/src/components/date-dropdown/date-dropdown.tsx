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
  Fragment,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { DateTime } from 'luxon';
import { makeRef } from '../utils/make-ref';

export type DateDropdownOption = {
  id: string;
  label: string;
  from: string;
  to: string;
};

export type DateRangeChangeEvent = {
  id: string;
  from: string;
  to: string;
};

/**
 * @since 2.1.0
 */
@Component({
  tag: 'ix-date-dropdown',
  styleUrl: 'date-dropdown.scss',
  shadow: true,
})
export class DateDropdown {
  @Element() hostElement!: HTMLIxDateDropdownElement;

  /**
   * Disable the button that opens the dropdown containing the date picker.
   *
   * @since 2.3.0
   */
  @Prop() disabled = false;

  /**
   * Date format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   */
  @Prop() format = 'yyyy/LL/dd';

  /**
   * If true a range of dates can be selected.
   */
  @Prop() range = true;

  /**
   * Picker date. If the picker is in range mode this property is the start date.
   * If set to `null` no default start date will be pre-selected.
   *
   * Format is based on `format`
   */
  @Prop() from = '';

  /**
   * Picker date. If the picker is in range mode this property is the end date.
   * If the picker is not in range mode leave this value `null`
   *
   * Format is based on `format`
   */
  @Prop() to = '';

  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() minDate = '';

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() maxDate = '';

  /**
   * Used to set the initial select date range as well as the button name,
   * if not set or no according date range label is found, nothing will be selected
   */
  @Prop() dateRangeId = 'custom';
  @Watch('dateRangeId')
  @Watch('to')
  @Watch('from')
  onDateRangeIdChange() {
    this.onRangeListSelect(this.dateRangeId);
    this.updateCurrentDate();
    this.setDateRangeSelection(this.dateRangeId);

    if (!this.currentRangeValue) {
      return;
    }

    this.onDateSelect({
      from: this.currentRangeValue.from,
      to: this.currentRangeValue.to,
      id: this.currentRangeValue.id,
    });
  }

  /**
   * Controls whether the user is allowed to pick custom date ranges in the component.
   * When set to 'true', the user can select a custom date range using the date picker.
   * When set to 'false', only predefined time date ranges are available for selection.
   */
  @Prop() customRangeAllowed = true;

  /**
   * An array of predefined date range options for the date picker.
   * Each option is an object with a label describing the range and a function
   * that returns the start and end dates of the range as a DateRangeOption object.
   *
   * Example format:
   *   {
   *     id: 'some unique id',
   *     label: 'Name of the range',
   *     from: undefined, to: '2023/03/29'
   *   },
   *   // ... other predefined date range options ...
   */
  @Prop() dateRangeOptions: DateDropdownOption[] = [];
  @Watch('dateRangeOptions')
  onDateRangeOptionsChange() {
    this.initialize();
    this.onDateRangeIdChange();
  }

  /**
   * Text for custom dropdown item. Will be used for translation.
   */
  @Prop({ attribute: 'i18n-custom-item' }) i18nCustomItem = 'Custom...';

  /**
   * Text for the done button. Will be used for translation.
   */
  @Prop({ attribute: 'i18n-done' }) i18nDone = 'Done';

  /**
   * Text for the done button. Will be used for translation.
   */
  @Prop({ attribute: 'i18n-no-range' }) i18nNoRange = 'No range set';

  /** @internal */
  @Prop() today = DateTime.now().toISO();

  /**
   * EventEmitter for date range change events.
   *
   * This event is emitted when the date range changes within the component.
   * The event payload contains information about the selected date range.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Event()
  private readonly dateRangeChange!: EventEmitter<DateRangeChangeEvent>;

  @State() private selectedDateRangeId: string = 'custom';
  @State() private currentRangeValue?: {
    from: string;
    to: string;
    id: string;
  };
  private readonly triggerRef = makeRef<HTMLElement>();

  @Watch('disabled')
  onDisabledChange() {
    if (this.disabled) {
      this.closeDropdown();
    }
  }
  private datePickerTouched = false;

  componentWillLoad() {
    this.initialize();
    this.setDateRangeSelection(this.dateRangeId);
  }

  /**
   * Retrieves the currently selected date range from the component.
   * This method returns the selected date range as a `DateChangeEvent` object.
   */
  @Method()
  public async getDateRange(): Promise<DateRangeChangeEvent> {
    return this.currentRangeValue || { id: '', from: '', to: '' };
  }

  private initialize() {
    const isCustomRange =
      this.dateRangeId === 'custom' ||
      (!this.dateRangeId && !!this.from && !!this.to);

    if (isCustomRange && this.customRangeAllowed) {
      this.selectedDateRangeId = 'custom';
      this.updateCurrentDate();

      return;
    }
    const isValidConfiguration = !isCustomRange && !this.from;
    if (!isValidConfiguration) {
      console.warn(
        '"from" and "range-date-id" is provided this is an invalid combination. Using "custom".'
      );

      this.selectedDateRangeId = 'custom';
      this.updateCurrentDate();

      return;
    }
  }

  private updateCurrentDate() {
    this.currentRangeValue = {
      id: this.selectedDateRangeId,
      from: this.from,
      to: this.to,
    };
  }

  private onDateSelect(
    rangeValue: { from: string; to: string; id: string },
    preserveDropdown = true
  ) {
    this.dateRangeChange.emit(rangeValue);

    if (preserveDropdown) {
      this.closeDropdown();
    }

    this.datePickerTouched = false;
  }

  private onRangeListSelect(id: string) {
    if (this.setDateRangeSelection(id) && this.currentRangeValue) {
      this.onDateSelect(this.currentRangeValue);
    }
  }

  private setDateRangeSelection(id: string) {
    this.selectedDateRangeId = id;
    const option = this.dateRangeOptions.find((range) => range.id === id);

    if (option) {
      this.currentRangeValue = option;
    }

    return option;
  }

  private closeDropdown() {
    const dropdown = this.hostElement.shadowRoot!.querySelector('ix-dropdown');

    if (dropdown) {
      dropdown.show = false;
    }
  }

  private getButtonLabel() {
    if (this.selectedDateRangeId === 'custom' && this.currentRangeValue?.from) {
      let range = this.currentRangeValue.from;

      if (this.currentRangeValue.to) {
        range += ` - ${this.currentRangeValue.to}`;
      }

      return range;
    }

    if (!this.selectedDateRangeId) {
      return this.i18nNoRange;
    }

    if (!this.dateRangeOptions || this.dateRangeOptions?.length === 0) {
      return this.i18nNoRange;
    }

    const option = this.dateRangeOptions.find(
      (option) => option.id === this.selectedDateRangeId
    );

    if (!option) {
      console.error(
        `Cannot find range option with id ${this.selectedDateRangeId}`
      );
      return this.i18nNoRange;
    }

    return option.label;
  }

  render() {
    return (
      <Host>
        <ix-button
          data-testid="date-dropdown-trigger"
          data-date-dropdown-trigger
          variant="primary"
          icon="history"
          ref={this.triggerRef}
          disabled={this.disabled}
        >
          {this.getButtonLabel()}
        </ix-button>
        <ix-dropdown
          data-testid="date-dropdown"
          data-date-dropdown
          class="min-width max-height"
          trigger={this.triggerRef.waitForCurrent()}
          closeBehavior="outside"
          placement="bottom-start"
          onShowChanged={({ detail: show }) => {
            if (
              !show &&
              this.selectedDateRangeId === 'custom' &&
              this.datePickerTouched &&
              this.currentRangeValue
            ) {
              this.onDateSelect(this.currentRangeValue);
            }
          }}
        >
          <ix-layout-grid no-margin="true">
            <ix-row>
              {this.dateRangeOptions?.length > 1 && (
                <ix-col
                  class={{
                    'no-margin': true,
                    'border-right': this.selectedDateRangeId === 'custom',
                  }}
                >
                  {this.dateRangeOptions.map((dateRangeOption) => (
                    <ix-dropdown-item
                      label={dateRangeOption.label}
                      onClick={() => this.onRangeListSelect(dateRangeOption.id)}
                      checked={this.selectedDateRangeId === dateRangeOption.id}
                    ></ix-dropdown-item>
                  ))}
                  <div hidden={!this.customRangeAllowed}>
                    <ix-dropdown-item
                      label={this.i18nCustomItem}
                      checked={this.selectedDateRangeId === 'custom'}
                      onClick={() => this.onRangeListSelect('custom')}
                    ></ix-dropdown-item>
                  </div>
                </ix-col>
              )}
              <ix-col class="no-margin">
                {this.selectedDateRangeId === 'custom' && (
                  <Fragment>
                    <ix-date-picker
                      standaloneAppearance={false}
                      onDateChange={(e) => {
                        e.stopPropagation();
                        this.currentRangeValue = {
                          ...e.detail,
                          id: 'custom',
                        };
                        this.datePickerTouched = true;
                      }}
                      onDateRangeChange={(e) => e.stopPropagation()}
                      format={this.format}
                      range={this.range}
                      from={this.from || this.currentRangeValue?.from}
                      to={this.to || this.currentRangeValue?.to}
                      minDate={this.minDate}
                      maxDate={this.maxDate}
                      today={this.today}
                    ></ix-date-picker>
                    <div class="pull-right">
                      <ix-button
                        onClick={() => {
                          if (this.currentRangeValue) {
                            this.onDateSelect(this.currentRangeValue);
                          }
                        }}
                      >
                        {this.i18nDone}
                      </ix-button>
                    </div>
                  </Fragment>
                )}
              </ix-col>
            </ix-row>
          </ix-layout-grid>
        </ix-dropdown>
      </Host>
    );
  }
}
