import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DateTime } from 'luxon';

dayjs.extend(customParseFormat);

let timeIntervalOptions = [
  {
    id: 'no-time-limit',
    text: 'No time limit',
    duration: undefined,
  },
  {
    id: 'today',
    text: 'Today',
    duration: 0,
  },
  {
    id: 'last-7-days',
    text: 'Last 7 days',
    duration: 7,
  },
  {
    id: 'last-14-days',
    text: 'Last 14 days',
    duration: 14,
  },
  {
    id: 'last-month',
    text: 'Last month',
    duration: 30,
  },
  {
    id: 'custom',
    text: 'Custom...',
    duration: undefined,
  },
];

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
  @Prop() public format = 'YYYY-MM-dd';

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
  @Prop() from: string | null = DateTime.now().toFormat(this.format);

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

  @State() private hideDatePicker: boolean = true;

  @State() private selectedIntervalId: string;
  @State() private selectedIntervalDuration: number;
  @State() private selectedIntervalButtonText: string;

  @State() private selectedDateRange: DateChangeEvent;
  @State() private selectedDatePickerRange: DateChangeEvent;

  @State() private triggerRef: HTMLElement;

  @Event() dateRangeChange: EventEmitter<DateChangeEvent>;

  constructor() {
    const initialSelectedValue = timeIntervalOptions[2];
    this.selectedIntervalButtonText = initialSelectedValue.text;
    this.selectedIntervalDuration = initialSelectedValue.duration;
    this.selectedIntervalId = initialSelectedValue.id;
  }

  private selectTimeInterval(
    intervalId: string,
    intervalDuration: number,
    intervalText: string
  ) {
    this.selectedIntervalButtonText = intervalText;
    this.selectedIntervalDuration = intervalDuration;
    this.selectedIntervalId = intervalId;
  }

  @Watch('selectedIntervalId')
  private handleTimeIntervalOptionChange() {
    this.hideDatePicker = true;
    const _from: dayjs.Dayjs = dayjs();
    const _to: dayjs.Dayjs = dayjs().add(this.selectedIntervalDuration, 'day');

    if (this.selectedIntervalId === 'no-time-limit') {
      //what to return here?
      return;
    } else if (this.selectedIntervalId === 'custom') {
      //open the dialog
      this.hideDatePicker = false;
    } else {
      const newDateRange: DateChangeEvent = {
        from: _from.format(this.format).toString(),
        to: _to.format(this.format).toString(),
      };

      this.setDateRange(newDateRange);
    }
  }

  @Watch('selectedDateRange')
  private emitTimeIntervalChange() {
    console.log(this.selectedDateRange);
    this.dateRangeChange.emit(this.selectedDateRange);
  }

  private setDateRange(newDateRange: DateChangeEvent) {
    this.selectedDateRange = newDateRange;

    if (this.selectedIntervalId === 'custom') {
      this.selectedIntervalButtonText =
        this.selectedDateRange.from + ' — ' + this.selectedDateRange.to;
    }
  }

  private setSelectedDatePickerRange(newDatePickerRange: DateChangeEvent) {
    this.selectedDatePickerRange = newDatePickerRange;
  }

  render() {
    return (
      <Host>
        <ix-dropdown-button
          label={this.selectedIntervalButtonText}
          variant="primary"
          icon="history"
          ref={(ref) => (this.triggerRef = ref)}
        ></ix-dropdown-button>
        <ix-dropdown
          class="min-width"
          trigger={this.triggerRef}
          close-behavior="outside"
          placement="bottom-start"
        >
          <ix-layout-grid no-margin="true">
            <ix-row>
              <ix-col class="no-margin border-right">
                {timeIntervalOptions.map((intervalOption) => (
                  <ix-dropdown-item
                    label={intervalOption.text}
                    onClick={() =>
                      this.selectTimeInterval(
                        intervalOption.id,
                        intervalOption.duration,
                        intervalOption.text
                      )
                    }
                    checked={this.selectedIntervalId === intervalOption.id}
                  ></ix-dropdown-item>
                ))}
              </ix-col>
              <ix-col class="no-margin" hidden={this.hideDatePicker}>
                <ix-date-picker
                  individual={false}
                  onDateRangeChange={(e) => {
                    this.setSelectedDatePickerRange({
                      from: e.detail.from,
                      to: e.detail.to,
                    });
                  }}
                  format={this.format}
                  range={this.range}
                  from={this.from}
                  to={this.to}
                  minDate={this.minDate}
                  maxDate={this.maxDate}
                ></ix-date-picker>
                <div class="pull-right">
                  <ix-button
                    onClick={() => {
                      this.setDateRange(this.selectedDatePickerRange);
                    }}
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
