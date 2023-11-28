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

export type DateDropdownOption = {
  id: string;
  label: string;
  from: string;
  to: string;
};

export type DateRangeOption = {
  from: string;
  to: string;
};

export type DateRangeChangeEvent = {
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
  @Prop() from: string;

  /**
   * Picker date. If the picker is in range mode this property is the end date.
   * If the picker is not in range mode leave this value `null`
   *
   * Format is based on `format`
   */
  @Prop() to: string;

  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() minDate: string;

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() maxDate: string;

  /**
   * Used to set the initial select date range as well as the button name,
   * if not set or no according date range label is found, nothing will be selected
   */
  @Prop() initialSelectedDateRangeName: string;

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

  /**
   * Text for custom dropdown item. Will be used for translation.
   */
  @Prop() textCustomItem = 'Custom...';

  /**
   * Text for the done button. Will be used for translation.
   */
  @Prop() textDoneButton = 'Done';

  /**
   * Text for the done button. Will be used for translation.
   */
  @Prop() textNoRange = 'No range set';

  /**
   * EventEmitter for date range change events.
   *
   * This event is emitted when the date range changes within the component.
   * The event payload contains information about the selected date range.
   *
   * @event
   * @private
   */
  @Event() private dateRangeChange: EventEmitter<DateRangeChangeEvent>;

  /**
   * This event is emitted when the date range is confirmed within the component.
   * The event payload contains information about the selected date range.
   */
  @Event() private dateRangeSelect: EventEmitter<DateRangeChangeEvent>;

  @State() private hideDatePicker = true;
  @State() private currentlySelectedDateRangeId: string;
  @State() private associatedDateRangeValue: DateRangeChangeEvent;
  @State() private savedDateRangeId: string;
  @State() private datePickerRange: DateRangeChangeEvent;
  @State() private triggerRef: HTMLElement;

  @Element() hostElement: HTMLIxDateDropdownElement;

  constructor() {
    this.updateSelectedDateRange(this.initialSelectedDateRangeName);
  }

  @Watch('dateRangeOptions')
  @Watch('initialSelectedDateRangeName')
  public initialSelectedDateRangeNameChanged(): void {
    this.updateSelectedDateRange(this.initialSelectedDateRangeName);
    this.dateRangeSelect.emit(this.associatedDateRangeValue);
  }

  private updateSelectedDateRange(newDateRangeId: string): void {
    const dateRangeOption = this.dateRangeOptions.find(
      (option) => option.id === newDateRangeId
    );

    if (dateRangeOption) {
      this.setSelectedDateRange(
        newDateRangeId,
        dateRangeOption.from,
        dateRangeOption.to
      );
    }

    this.savedDateRangeId = newDateRangeId;
  }

  @Watch('associatedDateRangeValue')
  public associatedDateRangeValueChanged(): void {
    this.savedDateRangeId = this.currentlySelectedDateRangeId;

    this.dateRangeChange.emit(this.associatedDateRangeValue);
    this.closeDropdown();
  }

  /**
   * Retrieves the currently selected date range from the component.
   * This method returns the selected date range as a `DateChangeEvent` object.
   *
   * @returns {Promise<DateRangeChangeEvent>} The selected date range.
   */
  @Method()
  public async getDateRange(): Promise<DateRangeChangeEvent> {
    return this.associatedDateRangeValue;
  }

  private setSelectedDateRange(
    dateRangeId: string,
    from: string | undefined,
    to: string | undefined
  ): void {
    this.currentlySelectedDateRangeId = dateRangeId;

    if (dateRangeId !== 'custom') {
      this.associatedDateRangeValue = {
        from: from,
        to: to,
      };
    } else {
      this.hideDatePicker = false;
    }

    // this.dateRangeSelect.emit(this.associatedDateRangeValue);
  }

  closeDropdown(): void {
    this.hostElement.shadowRoot.querySelector('ix-dropdown').show = false;
  }

  reInitializeValuesOnDropdownOpen(e: CustomEvent<boolean>): void {
    if (this.savedDateRangeId !== 'custom') {
      this.hideDatePicker = true;
    }

    if (e.detail === true) {
      if (this.savedDateRangeId !== this.currentlySelectedDateRangeId) {
        this.currentlySelectedDateRangeId = this.savedDateRangeId;
      }
    }
  }

  private getButtonLabel() {
    if (this.savedDateRangeId === 'custom') {
      return (
        this.associatedDateRangeValue.from +
        ' — ' +
        this.associatedDateRangeValue.to
      );
    }

    if (!this.savedDateRangeId) {
      return this.textNoRange;
    }

    const option = this.dateRangeOptions.find(
      (option) => option.id === this.savedDateRangeId
    );

    if (!option) {
      console.error(
        `Cannot find range option with id ${this.savedDateRangeId}`
      );
      return this.textNoRange;
    }

    return option.label;
  }

  render() {
    return (
      <Host>
        <ix-button
          data-date-dropdown-trigger
          variant="primary"
          icon="history"
          ref={(ref) => (this.triggerRef = ref)}
          class="button-width"
        >
          {this.getButtonLabel()}
        </ix-button>
        <ix-dropdown
          data-date-dropdown
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
                    onClick={() => {
                      this.setSelectedDateRange(
                        dateRangeOption.id,
                        dateRangeOption.from,
                        dateRangeOption.to
                      );
                      this.dateRangeSelect.emit(this.associatedDateRangeValue);
                    }}
                    checked={
                      this.currentlySelectedDateRangeId === dateRangeOption.id
                    }
                  ></ix-dropdown-item>
                ))}
                <div hidden={!this.customRangeAllowed}>
                  <ix-dropdown-item
                    label={this.textCustomItem}
                    checked={this.currentlySelectedDateRangeId === 'custom'}
                    onClick={(e) => {
                      this.setSelectedDateRange('custom', undefined, undefined);
                      this.dateRangeSelect.emit(this.associatedDateRangeValue);
                      e.preventDefault();
                    }}
                  ></ix-dropdown-item>
                </div>
              </ix-col>
              <ix-col class="no-margin" hidden={this.hideDatePicker}>
                {!this.hideDatePicker && (
                  <Fragment>
                    <ix-date-picker-rework
                      standaloneAppearance={false}
                      onDateChange={(e) => (this.datePickerRange = e.detail)}
                      format={this.format}
                      range={this.range}
                      from={this.from}
                      to={this.to}
                      minDate={this.minDate}
                      maxDate={this.maxDate}
                    ></ix-date-picker-rework>
                    <div class="pull-right">
                      <ix-button
                        onClick={() => {
                          this.associatedDateRangeValue = this.datePickerRange;
                          this.dateRangeSelect.emit(
                            this.associatedDateRangeValue
                          );
                        }}
                      >
                        {this.textDoneButton}
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
