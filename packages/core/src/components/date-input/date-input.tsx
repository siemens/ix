import { Component, Fragment, h, Host, Prop } from '@stencil/core';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';

@Component({
  tag: 'ix-date-input',
  styleUrl: 'date-input.scss',
  shadow: true,
})
export class DateInput {
  /**
   * Label for the input
   */
  @Prop() label: string;

  /**
   * Date format string.
   * See @link https://day.js.org/docs/en/display/format for all available tokens.
   */
  @Prop() format: string = 'YYYY/MM/DD';

  /**
   * If true a date-range can be selected (from/to).
   */
  @Prop() range: boolean = true;

  /**
   * Corner style
   */
  @Prop() corners: DateTimeCardCorners = 'rounded';

  /**
   * The selected starting date. If the date-picker is not in range mode this is the selected date.
   * Format has to match the `format` property.
   *
   * @since 1.1.0
   */
  @Prop() from: string | undefined;

  /**
   * The selected end date. If the the date-picker is not in range mode this property has no impact.
   * Format has to match the `format` property.
   *
   * @since 1.1.0
   */
  @Prop() to: string | undefined;

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
   * Text of the button that confirms date selection.
   *
   * @since 1.1.0
   */
  @Prop() textSelectDate = 'Done';

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   *
   * @since 2.0.0
   */
  @Prop() weekStartIndex = 0;

  private focusedInput!: HTMLElement;
  private datePicker!: HTMLIxDatePickerElement;

  private onInputFocus = (event: FocusEvent) => {
    this.focusedInput = event.target as HTMLElement;
    this.datePicker.hidden = false;
  };

  private onInputBlur = (event: FocusEvent) => {
    const relatedElem = event.relatedTarget as HTMLElement;
    if (
      relatedElem?.tagName === 'IX-DATE-PICKER' ||
      relatedElem?.tagName === 'IX-DATETIME-PICKER'
    ) {
      this.focusedInput.focus();
      return;
    }

    this.datePicker.hidden = true;
  };

  renderRangeInput(): any {
    return (
      <Fragment>
        <div class="range-input">
          <input
            id="firstInput"
            type="text"
            class="form-control"
            placeholder={this.format}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            value={this.from}
          />
          <span class="icon">
            <ix-icon name="arrow-right"></ix-icon>
          </span>
          <input
            id="secondInput"
            type="text"
            class="form-control"
            placeholder={this.format}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            value={this.to}
          />
          <span class="dropdown-icon">
            <ix-icon name="chevron-down-small"></ix-icon>
          </span>
        </div>
      </Fragment>
    );
  }

  renderSingleInput(): any {
    return (
      <Fragment>
        <input
          type="text"
          class="form-control"
          placeholder={this.format}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this.from}
        />
      </Fragment>
    );
  }

  render() {
    return (
      <Host>
        <div class="date-input">
          {this.label ? <label htmlFor="#firstInput">{this.label}</label> : ''}
          {this.range ? this.renderRangeInput() : this.renderSingleInput()}
          <ix-date-picker
            class="picker"
            hidden={true}
            ref={(el) => (this.datePicker = el as HTMLIxDatePickerElement)}
            tabIndex={-1}
          ></ix-date-picker>
        </div>
        test
        {this.from}
        {this.to}
      </Host>
    );
  }
}
