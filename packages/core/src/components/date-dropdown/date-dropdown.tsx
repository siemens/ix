import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const CUSTOM_RANGE_LABEL = 'Custom...';

export type DateDropdownOption = {
  label: string;
  getValue: () => DateRangeOption;
};

export type DateRangeOption = {
  from: dayjs.Dayjs;
  to: dayjs.Dayjs;
};

export type DateChangeEvent = {
  from: string;
  to: string;
};

@Component({
  tag: 'ix-date-dropdown',
  styleUrl: 'date-dropdown.scss',
  shadow: true,
})
export class DateDropdown {
  /**
   * Date format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   */
  @Prop() public format = 'YYYY-MM-DD';

  /**
   * If true a range of dates can be selected.
   */
  @Prop() range: boolean = true;

  /**
   * Picker date. If the picker is in range mode this property is the start date.
   * If set to `null` no default start date will be pre-selected.
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  @Prop() from: string | null = null;

  /**
   * Picker date. If the picker is in range mode this property is the end date.
   * If the picker is not in range mode leave this value `null`
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  @Prop() to: string | null = null;

  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   *
   * @since 1.1.0
   */
  @Prop() minDate: string;

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   *
   * @since 1.1.0
   */
  @Prop() maxDate: string;

  /**
   * Used to set the initial select date range as well as the button name,
   * if not set or no according date range label is found, nothing will be selected
   * @default ''
   */
  @Prop() public initialSelectedDateRangeName: string = '';

  /**
   * Controls whether the user is allowed to pick custom date ranges in the component.
   * When set to 'true', the user can select a custom date range using the date picker.
   * When set to 'false', only predefined time date range are available for selection.
   * @default ''
   */
  @Prop() public customRangeAllowed: boolean = true;

  /**
   * An array of predefined date range options for the date picker.
   * Each option is an object with a label describing the range and a function
   * that returns the start and end dates of the range as a DateRangeOption object.
   *
   * Example format:
   *   {
   *     label: 'No time limit',
   *     getValue: (): DateRangeOption => {
   *       // Calculate the date range here
   *       return { from: undefined, to: today };
   *     },
   *   },
   *   // ... other predefined date range options ...
   */
  @Prop() public dateRangeOptions: DateDropdownOption[] = [];

  @State() private hideDatePicker: boolean = true;
  @State() private currentlySelectedDateRangeName: string;
  @State() private associatedDateRangeValue: DateChangeEvent;
  @State() private savedDateRangeName: string;
  @State() private datePickerRange: DateChangeEvent;

  /**
   * EventEmitter for date range change events.
   *
   * This event is emitted when the date range changes within the component.
   * The event payload contains information about the selected date range.
   *
   * @event
   * @private
   */
  @Event() private dateRangeChange: EventEmitter<DateChangeEvent>;

  @State() private triggerRef: HTMLElement;

  @Element() hostElement: HTMLIxDateDropdownElement;

  constructor() {
    this.updateSelectedDateRange(this.initialSelectedDateRangeName);
  }

  @Watch('dateRangeOptions')
  @Watch('initialSelectedDateRangeName')
  public initialSelectedDateRangeNameChanged(): void {
    this.updateSelectedDateRange(this.initialSelectedDateRangeName);
  }

  private updateSelectedDateRange(newDateRangeName: string): void {
    const dateRangeOption = this.dateRangeOptions.find(
      (option) => option.label === newDateRangeName
    );

    const selectedDateRangeName = dateRangeOption
      ? newDateRangeName
      : 'No range set';

    if (dateRangeOption) {
      this.setSelectedDateRange(newDateRangeName, dateRangeOption.getValue);
    }

    this.savedDateRangeName = selectedDateRangeName;
  }

  @Watch('associatedDateRangeValue')
  public associatedDateRangeValueChanged(): void {
    this.savedDateRangeName = this.currentlySelectedDateRangeName;

    this.dateRangeChange.emit(this.associatedDateRangeValue);
    this.closeDropdown();
  }

  /**
   * Retrieves the currently selected date range from the component.
   * This method returns the selected date range as a `DateChangeEvent` object.
   *
   * @returns {Promise<DateChangeEvent>} The selected date range.
   */
  @Method()
  public async getDateRange(): Promise<DateChangeEvent> {
    return this.associatedDateRangeValue;
  }

  private setSelectedDateRange(
    dateRangeName: string,
    getDateRange: () => DateRangeOption
  ): void {
    this.currentlySelectedDateRangeName = dateRangeName;

    if (dateRangeName !== CUSTOM_RANGE_LABEL) {
      const associatedDateRangeValue = getDateRange();

      this.associatedDateRangeValue = {
        from: associatedDateRangeValue.from.format(this.format),
        to: associatedDateRangeValue.to.format(this.format),
      };
    } else {
      this.hideDatePicker = false;
    }
  }

  closeDropdown(): void {
    this.hostElement.shadowRoot.querySelector('ix-dropdown').show = false;
  }

  reInitializeValuesOnDropdownOpen(e: any): void {
    if (this.savedDateRangeName !== CUSTOM_RANGE_LABEL) {
      this.hideDatePicker = true;
    }

    if (e.detail === true) {
      if (this.savedDateRangeName != this.currentlySelectedDateRangeName) {
        this.currentlySelectedDateRangeName = this.savedDateRangeName;
      }
    }
  }

  render() {
    return (
      <Host>
        <ix-dropdown-button
          label={
            this.savedDateRangeName === CUSTOM_RANGE_LABEL
              ? this.associatedDateRangeValue.from +
                ' — ' +
                this.associatedDateRangeValue.to
              : this.savedDateRangeName
          }
          variant="primary"
          icon="history"
          ref={(ref) => (this.triggerRef = ref)}
          class="button-width"
        ></ix-dropdown-button>
        <ix-dropdown
          class="min-width max-height"
          trigger={this.triggerRef}
          close-behavior="outside"
          placement="bottom-start"
          onShowChanged={(e) => this.reInitializeValuesOnDropdownOpen(e)}
        >
          <ix-layout-grid no-margin="true">
            <ix-row>
              <ix-col class="no-margin border-right">
                {this.dateRangeOptions.map((dateRangeOption) => (
                  <ix-dropdown-item
                    label={dateRangeOption.label}
                    onClick={() =>
                      this.setSelectedDateRange(
                        dateRangeOption.label,
                        dateRangeOption.getValue
                      )
                    }
                    checked={
                      this.currentlySelectedDateRangeName ===
                      dateRangeOption.label
                    }
                  ></ix-dropdown-item>
                ))}
                <div hidden={!this.customRangeAllowed}>
                  <ix-dropdown-item
                    label={CUSTOM_RANGE_LABEL}
                    checked={
                      this.currentlySelectedDateRangeName === CUSTOM_RANGE_LABEL
                    }
                    onClick={() =>
                      this.setSelectedDateRange(CUSTOM_RANGE_LABEL, undefined)
                    }
                  ></ix-dropdown-item>
                </div>
              </ix-col>
              <ix-col class="no-margin" hidden={this.hideDatePicker}>
                <ix-date-picker
                  individual={false}
                  onDateRangeChange={(e) => (this.datePickerRange = e.detail)}
                  format={this.format}
                  range={this.range}
                  from={this.from}
                  to={this.to}
                  minDate={this.minDate}
                  maxDate={this.maxDate}
                ></ix-date-picker>
                <div class="pull-right">
                  <ix-button
                    onClick={() =>
                      (this.associatedDateRangeValue = this.datePickerRange)
                    }
                  >
                    Done
                  </ix-button>
                </div>
              </ix-col>
            </ix-row>
          </ix-layout-grid>
        </ix-dropdown>
      </Host>
    );
  }
}
