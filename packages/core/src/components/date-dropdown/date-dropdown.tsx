/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconHistory } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  forceUpdate,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
  Mixin,
} from '@stencil/core';
import { DateTime } from 'luxon';
import {
  convertDateFormat,
  parseWithLocale,
  toISODate,
} from '../utils/datetime/date-time-locale';
import { ButtonVariant } from '../button/button';
import { IxButtonComponent } from '../button/button-component';
import { IxDatePickerComponent } from '../date-picker/date-picker-component';
import type { DateChangeEvent } from '../date-picker/date-picker.events';
import { DefaultMixins } from '../utils/internal/component';
import { makeRef } from '../utils/make-ref';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import { isSameStringOrUnset } from '../utils/condition-checks';
import { PendingSelection } from '../utils/datetime/pending-selection';
import type {
  DateDropdownOption,
  DateRangeChangeEvent,
} from './date-dropdown.types';
import { hasKeyboardMode } from '../utils/internal/mixins/setup.mixin';
import { BaseButton } from '../button/base-button';
import { A11yAttributes, a11yBoolean, a11yHostAttributes } from '../utils/a11y';
import { TRAP_FOCUS_EXCLUDE_ATTRIBUTE } from '../utils/focus/focus-trap';
import { isPartialRange } from '../utils/datetime/calendar.util';
import type { DateRange } from '../utils/datetime/date-time.types';
import { ConfirmationFooter } from '../utils/confirmation-footer/confirmation-footer.fc';

type DropdownRange = DateRange<string> & { id: string };

/**
 * Dropdown for selecting a date or a relative date range.
 *
 * @documentation https://ix.siemens.io//docs/components/date-dropdown/code.md
 * @figma-main-component-id 45886:27067
 */
@Component({
  tag: 'ix-date-dropdown',
  styleUrl: 'date-dropdown.scss',
  shadow: true,
})
export class DateDropdown
  extends Mixin(...DefaultMixins)
  implements
    Omit<IxDatePickerComponent, 'corners'>,
    Omit<IxButtonComponent, 'type' | 'icon'>
{
  @Element() override hostElement!: HTMLIxDateDropdownElement;

  /**
   * Disable the button that opens the dropdown containing the date picker.
   */
  @Prop() disabled = false;

  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  @Prop() format = 'yyyy/LL/dd';

  /**
   * Date format used to display the selected dates in the dropdown button.
   * `from`, `to`, `minDate`, `maxDate` and emitted values keep using `format`.
   * Defaults to `format`.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   *
   * @since 6.0.0
   */
  @Prop() displayFormat?: string;

  /**
   * If true disables date range selection (from/to).
   */
  @Prop() singleSelection = false;

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

  /**
   * Button variant
   */
  @Prop() variant: ButtonVariant = 'primary';

  /**
   * Loading button
   */
  @Prop() loading: boolean = false;

  /**
   * Shows week numbers displayed on the left side of the date picker
   *
   * @since 3.0.0
   */
  @Prop() showWeekNumbers = false;

  @Watch('dateRangeId')
  onDateRangeIdChange(id: string) {
    if (this.selection.isEcho('id', id)) {
      return;
    }

    // An id without a predefined range selects `from` and `to`
    this.applyPropChange(this.selection.reset(this.rangeFromProps()));
  }

  @Watch('from')
  onFromChange(from: string) {
    this.onDatePropChange('from', from);
  }

  @Watch('to')
  onToChange(to: string) {
    this.onDatePropChange('to', to);
  }

  /** Dates set by props no longer match a predefined range. */
  private onDatePropChange(key: 'from' | 'to', value: string) {
    const selection = this.selection.withPropChange(key, value);
    if (selection === this.selection) {
      return;
    }

    this.applyPropChange(
      selection.reset({ ...selection.committed, id: 'custom' })
    );
  }

  /**
   * Applies a prop change unless it echoes the displayed range back (e.g.
   * two-way binding to `dateRangeChange`), so a pending range stays pending.
   */
  private applyPropChange(selection: PendingSelection<DropdownRange>) {
    if (selection === this.selection) {
      return;
    }

    this.selection = selection;
    this.showMonthOf(selection.committed);
    this.emitRangeChange(selection.committed);
  }

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
    this.warnOnInvalidConfiguration();
    this.applyPropChange(this.selection.reset(this.rangeFromProps()));
  }

  /**
   * Locale identifier (e.g. 'en' or 'de').
   */
  @Prop() locale?: string;

  /**
   * The index of the day the week starts on, as a 0-based index into Luxon's
   * `Info.weekdays()` array. That array is always ordered Monday-first
   * regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday.
   * E.g. weekStartIndex = 6 results in starting the week on Sunday.
   */
  @Prop() weekStartIndex = 0;

  /**
   * Text for the done button. Will be used for translation.
   *
   * @deprecated The done button was removed. Without `requireConfirmation`
   * the dropdown closes once a complete date or range is selected.
   */
  @Prop({ attribute: 'i18n-done' }) i18nDone = 'Done';

  /**
   * Text for the done button. Will be used for translation.
   */
  @Prop({ attribute: 'i18n-no-range' }) i18nNoRange = 'No range set';

  /**
   * If true, a date range picked in the dropdown is only applied after the
   * user confirms it with the confirm button, which emits `dateSelect`. The
   * trigger label keeps the applied range until then, while `dateRangeChange`
   * still reports every pick. The cancel button, pressing Escape or clicking
   * outside the dropdown discards the pending selection.
   *
   * @since 6.0.0
   */
  @Prop() requireConfirmation = false;

  /**
   * Text of the confirm button shown when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  @Prop({ attribute: 'i18n-confirm' }) i18nConfirm = 'Confirm';

  /**
   * Text of the cancel button shown when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  @Prop({ attribute: 'i18n-cancel' }) i18nCancel = 'Cancel';

  /** @internal */
  @Prop() today = DateTime.now().toISO();

  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  @Prop() enableTopLayer: boolean = false;

  /**
   * EventEmitter for date range change events.
   *
   * This event is emitted when the date range changes within the component.
   * The event payload contains information about the selected date range.
   * When a pending selection is discarded, it is emitted with the applied
   * range again.
   *
   * Use `dateSelect` to only receive applied ranges.
   */
  @Event()
  private readonly dateRangeChange!: EventEmitter<DateRangeChangeEvent>;

  /**
   * Emitted when the user applies a changed range: on confirm with
   * `requireConfirmation`, otherwise when a complete range or a predefined
   * range is picked.
   * It is not emitted for programmatic prop input changes.
   *
   * @since 6.0.0
   */
  @Event() dateSelect!: EventEmitter<DateRangeChangeEvent>;

  /**
   * The applied range and a range that is not applied yet: any unconfirmed
   * range with `requireConfirmation`, otherwise a range with only a start
   * date.
   */
  @State() private selection = PendingSelection.create<DropdownRange>(
    { id: 'custom' },
    (a, b) =>
      a.id === b.id &&
      isSameStringOrUnset(a.from, b.from) &&
      isSameStringOrUnset(a.to, b.to)
  );
  @State() private show = false;

  /** Month the date picker is moved to after the next render. */
  private monthToShow?: DateTime;

  private readonly triggerRef = makeRef<HTMLElement>();

  @Watch('disabled')
  onDisabledChange() {
    if (this.disabled) {
      this.closeDropdown();
    }
  }

  private readonly datePickerRef = makeRef<HTMLIxDatePickerElement>();

  private inheritAriaAttributes: A11yAttributes = {};

  override componentWillLoad() {
    this.warnOnInvalidConfiguration();
    this.selection = this.selection.reset(this.rangeFromProps());
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement);
  }

  override componentDidRender() {
    if (this.monthToShow) {
      this.datePickerRef.current?.updateSelectedYearMonth(this.monthToShow);
      this.monthToShow = undefined;
    }
  }

  /**
   * Retrieves the applied date range from the component.
   * This method returns the applied date range as a `DateChangeEvent` object.
   *
   * With `requireConfirmation`, a pending selection is not returned until it is
   * confirmed. Listen to `dateRangeChange` to get every pick.
   */
  @Method()
  public async getDateRange(): Promise<DateRangeChangeEvent> {
    return this.toEvent(this.selection.committed);
  }

  private warnOnInvalidConfiguration() {
    if (this.from && this.dateRangeId && this.dateRangeId !== 'custom') {
      console.warn(
        '"from" and "range-date-id" is provided this is an invalid combination. Using "custom".'
      );
    }
  }

  /** The range set by props: a predefined range, else `from` and `to`. */
  private rangeFromProps(): DropdownRange {
    const option = this.findRangeOption(this.dateRangeId);
    if (option) {
      return this.toRange(option);
    }

    return { id: 'custom', from: this.from, to: this.to };
  }

  /**
   * The event payload for `range`, with `isoFrom` and `isoTo` derived from
   * its `from` and `to`, and the label of a predefined range.
   */
  private toEvent(range: DropdownRange): DateRangeChangeEvent {
    const toIso = (value?: string) =>
      toISODate(parseWithLocale(value ?? '', this.format, this.locale));

    return {
      ...this.findRangeOption(range.id),
      ...range,
      isoFrom: toIso(range.from),
      isoTo: toIso(range.to),
    };
  }

  /** Reports a picked or restored range that is not necessarily applied. */
  private emitRangeChange(range: DropdownRange) {
    this.dateRangeChange.emit(this.toEvent(range));
  }

  private onRangeOptionClick(id: string) {
    const option = this.findRangeOption(id);
    if (!option) {
      return;
    }

    this.showMonthOf(option);
    this.pick(this.toRange(option));
  }

  /**
   * Picks `range` and reports it. Without `requireConfirmation`, a complete
   * range is applied and the dropdown closes.
   */
  private pick(range: DropdownRange) {
    // Picked before emitting, so a prop echo of the pick is recognized
    this.selection = this.selection.select(range);
    this.emitRangeChange(range);

    // A range with only a start date stays pending until the end date is picked
    if (this.requireConfirmation || this.isIncomplete(range)) {
      return;
    }

    this.commitSelection();
    this.closeDropdown();
  }

  private findRangeOption(id: string) {
    return this.dateRangeOptions.find((range) => range.id === id);
  }

  private toRange({ id, from, to }: DateDropdownOption): DropdownRange {
    return { id, from, to };
  }

  private isIncomplete(range: DropdownRange): boolean {
    return !this.singleSelection && isPartialRange(range);
  }

  private isConfirmDisabled(): boolean {
    const { pending } = this.selection;

    return pending === undefined || this.isIncomplete(pending);
  }

  /**
   * Shows the month `range` starts in once the date picker has applied the
   * new `from`/`to`, which would otherwise show the month of `to`.
   */
  private showMonthOf(range: DateRange<string>) {
    if (!range.from) {
      return;
    }

    this.monthToShow = parseWithLocale(range.from, this.format, this.locale);
    // Re-selecting the shown range changes no state, but the month must still move
    forceUpdate(this);
  }

  private onConfirm() {
    this.commitSelection();
    this.closeDropdown();
  }

  /**
   * Applies the pending range and emits `dateSelect`. The range was already
   * reported with `dateRangeChange` when it was picked.
   */
  private commitSelection() {
    if (!this.selection.hasPending) {
      return;
    }

    this.selection = this.selection.commit();
    this.dateSelect.emit(this.toEvent(this.selection.committed));
  }

  private onPickerDateChange({ from, to }: DateChangeEvent) {
    this.pick({ id: 'custom', from, to });
  }

  private onDropdownShowChanged(show: boolean) {
    this.show = show;

    const hadPendingSelection = this.selection.hasPending;
    this.selection = this.selection.discard();

    // The pending selection was emitted, so report the restored range
    if (!show && hadPendingSelection) {
      this.emitRangeChange(this.selection.committed);
    }

    if (show && hasKeyboardMode()) {
      requestAnimationFrameNoNgZone(() => {
        const datePicker = this.datePickerRef.current;
        datePicker?.focus();
      });
    }
  }

  private closeDropdown() {
    const dropdown = this.hostElement.shadowRoot!.querySelector('ix-dropdown');

    if (dropdown) {
      dropdown.show = false;
    }
  }

  private toDisplayDate(value: string): string {
    return convertDateFormat(
      value,
      this.format,
      this.displayFormat ?? this.format,
      this.locale
    );
  }

  private getButtonLabel() {
    // Without requireConfirmation the label also shows a pending start date
    const rangeValue = this.requireConfirmation
      ? this.selection.committed
      : this.selection.displayed;

    if (rangeValue?.from) {
      let range = this.toDisplayDate(rangeValue.from);

      if (rangeValue.to === rangeValue.from) {
        return range;
      }

      if (rangeValue.to) {
        range += ` - ${this.toDisplayDate(rangeValue.to)}`;
      } else if (
        rangeValue === this.selection.pending &&
        this.isIncomplete(rangeValue)
      ) {
        // A trailing separator tells the user to pick the end date
        range += ' - ';
      }

      return range;
    }

    return this.i18nNoRange;
  }

  override render() {
    const ariaLabel =
      this.inheritAriaAttributes['aria-label'] || this.getButtonLabel();

    return (
      <Host
        onFocusout={(event: FocusEvent) => {
          const relatedTarget = event.relatedTarget as HTMLElement | null;

          if (!relatedTarget) {
            return;
          }

          this.closeDropdown();
        }}
        role="presentation"
      >
        <ix-button
          data-testid="date-dropdown-trigger"
          data-date-dropdown-trigger
          class={{ active: this.show }}
          variant={this.variant}
          loading={this.loading}
          icon={iconHistory}
          ref={this.triggerRef}
          disabled={this.disabled}
          {...this.inheritAriaAttributes}
          aria-haspopup="true"
          aria-expanded={a11yBoolean(this.show)}
          aria-controls="date-dropdown"
          aria-label={ariaLabel}
          {...{ [TRAP_FOCUS_EXCLUDE_ATTRIBUTE]: true }}
        >
          {this.getButtonLabel()}
        </ix-button>
        <ix-dropdown
          focusTrapOptions={{
            excludeElements: true,
            trapFocusInShadowDom: true,
          }}
          focusHost={this.hostElement}
          id="date-dropdown"
          data-testid="date-dropdown"
          data-date-dropdown
          class="min-width max-height"
          trigger={this.triggerRef.waitForCurrent()}
          closeBehavior="outside"
          placement="bottom-start"
          enableTopLayer={this.enableTopLayer}
          suppressOverflowBehavior
          onShowChanged={({ detail: show }) => this.onDropdownShowChanged(show)}
        >
          <div
            class={{
              container: true,
              'has-footer': this.requireConfirmation,
            }}
          >
            {this.dateRangeOptions?.length > 1 && (
              <div
                class={{
                  'quick-selection': true,
                  'border-right': this.selection.displayed.id === 'custom',
                }}
              >
                {this.dateRangeOptions.map((dateRangeOption) => (
                  <BaseButton
                    disabled={false}
                    iconOnly={false}
                    iconOval={false}
                    selected={false}
                    loading={false}
                    type="button"
                    variant="subtle-tertiary"
                    onClick={() => this.onRangeOptionClick(dateRangeOption.id)}
                    ariaAttributes={{
                      'aria-label': `${dateRangeOption.label}: ${dateRangeOption.from} to ${dateRangeOption.to}`,
                    }}
                  >
                    {dateRangeOption.label}
                  </BaseButton>
                ))}
              </div>
            )}
            <div class="picker-wrapper">
              <ix-date-picker
                ref={this.datePickerRef}
                embedded
                locale={this.locale}
                onDateChange={(e) => {
                  e.stopPropagation();
                  this.onPickerDateChange(e.detail);
                }}
                onDateRangeChange={(e) => e.stopPropagation()}
                format={this.format}
                singleSelection={this.singleSelection}
                from={this.selection.displayed.from}
                to={this.selection.displayed.to}
                minDate={this.minDate}
                maxDate={this.maxDate}
                today={this.today}
                weekStartIndex={this.weekStartIndex}
                showWeekNumbers={this.showWeekNumbers}
              ></ix-date-picker>
              {this.requireConfirmation && (
                <ConfirmationFooter
                  class="pull-right"
                  requireConfirmation
                  i18nConfirm={this.i18nConfirm}
                  i18nCancel={this.i18nCancel}
                  primaryActionDisabled={this.isConfirmDisabled()}
                  onConfirm={() => this.onConfirm()}
                  onCancel={() => this.closeDropdown()}
                />
              )}
            </div>
          </div>
        </ix-dropdown>
      </Host>
    );
  }
}
