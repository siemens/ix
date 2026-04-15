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
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
  Mixin,
} from '@stencil/core';
import { DateTime } from 'luxon';
import { ButtonVariant } from '../button/button';
import { IxButtonComponent } from '../button/button-component';
import { IxDatePickerComponent } from '../date-picker/date-picker-component';
import { DefaultMixins } from '../utils/internal/component';
import { makeRef } from '../utils/make-ref';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import { type LiteralStringUnion } from '../utils/type-helper';
import type {
  DateDropdownOption,
  DateRangeChangeEvent,
} from './date-dropdown.types';
import { hasKeyboardMode } from '../utils/internal/mixins/setup.mixin';
import { BaseButton } from '../button/base-button';
import { A11yAttributes, a11yBoolean, a11yHostAttributes } from '../utils/a11y';
import { TRAP_FOCUS_EXCLUDE_ATTRIBUTE } from '../utils/focus/focus-trap';

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
   * Locale identifier (e.g. 'en' or 'de').
   */
  @Prop() locale?: string;

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   */
  @Prop() weekStartIndex = 0;

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
   */
  @Event()
  private readonly dateRangeChange!: EventEmitter<DateRangeChangeEvent>;

  @State() private selectedDateRangeId: LiteralStringUnion<'custom'> = '';
  @State() private currentRangeValue?: {
    from?: string;
    to?: string;
    id: string;
  };
  @State() private show = false;

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
    this.initialize();
    this.setDateRangeSelection(this.dateRangeId);
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement);
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

    if (isCustomRange) {
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

  private onDateSelect(rangeValue: { from?: string; to?: string; id: string }) {
    this.dateRangeChange.emit(rangeValue);
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
      if (option.from && option?.from === this.currentRangeValue?.from) {
        // Show the correct month in the date picker if the same range is selected again
        const formattedDate = DateTime.fromFormat(option.from, this.format);
        this.datePickerRef.current?.updateSelectedYearMonth(formattedDate);
      } else {
        this.currentRangeValue = option;
      }
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
    if (this.currentRangeValue?.from) {
      let range = this.currentRangeValue.from;

      if (this.currentRangeValue.to === this.currentRangeValue.from) {
        return range;
      }

      if (this.currentRangeValue.to) {
        range += ` - ${this.currentRangeValue.to}`;
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
          onShowChanged={async ({ detail: show }) => {
            this.show = show;
            if (!show && this.currentRangeValue) {
              this.onDateSelect(this.currentRangeValue);
            }

            if (show && hasKeyboardMode()) {
              requestAnimationFrameNoNgZone(() => {
                const datePicker = this.datePickerRef.current;
                datePicker?.focus();
              });
            }
          }}
        >
          <div class="container">
            {this.dateRangeOptions?.length > 1 && (
              <div
                class={{
                  'quick-selection': true,
                  'border-right': this.selectedDateRangeId === 'custom',
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
                    onClick={() => this.onRangeListSelect(dateRangeOption.id)}
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
                  this.currentRangeValue = {
                    ...e.detail,
                    id: 'custom',
                  };
                }}
                onDateRangeChange={(e) => e.stopPropagation()}
                format={this.format}
                singleSelection={this.singleSelection}
                from={this.from || this.currentRangeValue?.from}
                to={this.to || this.currentRangeValue?.to}
                minDate={this.minDate}
                maxDate={this.maxDate}
                today={this.today}
                weekStartIndex={this.weekStartIndex}
                showWeekNumbers={this.showWeekNumbers}
              ></ix-date-picker>
              <div class="pull-right">
                <ix-button
                  onClick={() => {
                    if (this.currentRangeValue) {
                      this.onDateSelect(this.currentRangeValue);
                      this.closeDropdown();
                    }
                  }}
                >
                  {this.i18nDone}
                </ix-button>
              </div>
            </div>
          </div>
        </ix-dropdown>
      </Host>
    );
  }
}
