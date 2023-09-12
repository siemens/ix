import { Component, h, Host, Prop } from '@stencil/core';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';

@Component({
  tag: 'date-input',
  shadow: true,
})
export class DateInput {
  /**
   * Label for the input
   */
  @Prop() label: string = '';

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

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
