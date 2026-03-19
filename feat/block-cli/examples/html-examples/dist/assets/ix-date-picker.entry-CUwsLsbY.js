import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, F as Fragment, H as Host } from "./global-C_dy4gBz.js";
import { D as iconChevronLeftSmall, j as iconChevronRightSmall } from "./index-DFdo1y_u-D_8X33yw.js";
import { D as DateTime, I as Info } from "./datetime-D1WplX1z-grPSvmS5.js";
import { q as queryElements } from "./focus-utilities-Cft9zvbS-CmL7xuFI.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-YJmg0LbX-Cdi_gd8D.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./shadow-dom-T30VMB2R-DtdN3xF2.js";
const datePickerCss = () => `:host{display:block;position:relative;max-width:21rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .header{display:flex;align-items:center;justify-content:space-between}:host .disabled-item{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default}:host .selector{flex-basis:100%;display:flex;align-items:center;justify-content:center;padding:0 1rem}:host .selector .dropdown{color:var(--theme-menu-item--color);font-size:14px;line-height:20px}:host .selector .arrowYear{display:flex;position:relative;padding:0.75rem 2rem;align-items:center;cursor:pointer}:host .selector .arrowYear:hover{background-color:var(--theme-select-list-item--background--hover)}:host .selector .arrowYear.selected{background-color:var(--theme-select-list-item--background--selected)}:host .selector .arrowYear .arrowPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 6px)}:host .selector .arrowYear .checkPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 8px)}:host .selector .arrowYear .monthMargin{margin-left:10px}:host .grid{display:grid;grid-template-columns:repeat(7, 40px);grid-template-rows:repeat(7, 40px);align-items:center;justify-items:center;justify-content:center;color:var(--theme-datepicker-today--color)}:host .grid--show-week-numbers{grid-template-columns:24px repeat(7, 40px)}:host .grid .calendar-item{position:relative;display:flex;justify-content:center;align-items:center;background-color:var(--theme-datepicker-day--background);border:1px solid var(--theme-datepicker-day--background);width:40px;height:40px;cursor:pointer}:host .grid .calendar-item:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .grid .calendar-item.today{border:1px solid var(--theme-datepicker-today--border-color)}:host .grid .calendar-item.today:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item.today:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.today.selected{box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.today.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.today.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);border:1px solid var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.today.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range);border:1px solid var(--theme-datepicker-today--border-color--range);box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.range:hover{background-color:var(--theme-datepicker-day--background--range-hover);border:1px solid var(--theme-datepicker-today--border-color--range-hover)}:host .grid .calendar-item.today.range:active{background-color:var(--theme-datepicker-day--background--range-active);border:1px solid var(--theme-datepicker-today--border-color--range-active)}:host .grid .calendar-item.today.range.disabled{background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled);border:1px solid var(--theme-datepicker-today--border-color--range-disabled)}:host .grid .calendar-item.today.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default}:host .grid .calendar-item:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.selected{background-color:var(--theme-datepicker-day--background--selected);color:var(--theme-datepicker-day--color--selected);border:1px solid var(--theme-datepicker-day--background--selected);font-weight:var(--theme-font-weight-bold)}:host .grid .calendar-item.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range)}:host .grid .calendar-item.range:hover{background-color:var(--theme-datepicker-day--background--range-hover)}:host .grid .calendar-item.range:active{background-color:var(--theme-datepicker-day--background--range-active)}:host .grid .calendar-item.range.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled)}:host .grid .calendar-item.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled)}:host .grid .calendar-item.week-day{color:var(--theme-datepicker-weekday--color);font-size:var(--theme-ms-0);line-height:143%;border:none;background:none;cursor:initial}:host .grid .calendar-item.week-day .overflow{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .grid .calendar-item.empty-day{border:none;background:none;cursor:initial}:host .grid .calendar-item.week-number{font-size:10px;line-height:14px;color:var(--theme-datepicker-weekday--color);border:none;background:none;cursor:initial;width:1.5rem}:host .button{display:flex;justify-content:flex-end;margin-top:1rem}:host .hidden{display:none}:host .infinite-scrolling-spacer:first-of-type{position:relative;padding-bottom:4rem}:host .infinite-scrolling-spacer:first-of-type .sentinel{position:absolute;bottom:0;height:1px;width:50px}:host .infinite-scrolling-spacer:last-of-type{position:relative;padding-top:4rem}:host .infinite-scrolling-spacer:last-of-type .sentinel{position:absolute;top:0;height:1px;width:50px}`;
const DatePicker = class extends Mixin(...DefaultMixins) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  format = "yyyy/LL/dd";
  /**
   * If true disables date range selection (from/to).
   */
  singleSelection = false;
  /**
   * Corner style
   */
  corners = "rounded";
  /**
   * The selected starting date. If the date-picker-rework is not in range mode this is the selected date.
   * Format has to match the `format` property.
   */
  from;
  watchFromPropHandler(newValue) {
    if (!newValue) {
      this.currFromDate = void 0;
      return;
    }
    const date = this.parseDateString(newValue);
    if (date) {
      this.currFromDate = date;
      this.updateSelectedYearMonth(date);
    }
  }
  /**
   * The selected end date. If the the date-picker-rework is not in range mode this property has no impact.
   * Format has to match the `format` property.
   */
  to;
  watchToPropHandler(newValue) {
    if (!newValue) {
      this.currToDate = void 0;
      return;
    }
    const date = this.parseDateString(newValue);
    if (date) {
      this.currToDate = date;
      this.updateSelectedYearMonth(date);
    }
  }
  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  minDate = "";
  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  maxDate = "";
  /**
   * Text of date select button
   */
  i18nDone = "Done";
  /**
   * ARIA label for the previous month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelPreviousMonthButton = "Change calendar view to previous month";
  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelNextMonthButton = "Change calendar view to next month";
  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 5.0.0
   */
  ariaLabelMonthSelection = "Select month";
  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 5.0.0
   */
  ariaLabelYearSelection = "Select year";
  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   */
  weekStartIndex = 0;
  /**
   * Locale identifier (e.g. 'en' or 'de').
   * The locale is used to translate the labels for weekdays and months.
   * It also determines the default order of weekdays based on the locale's conventions.
   * When the locale changes, the weekday labels are rotated according to the `weekStartIndex`.
   * It does not affect the values returned by methods and events.
   */
  locale;
  onLocaleChange() {
    this.setTranslations();
  }
  /**
   * Shows week numbers displayed on the left side of the date picker
   *
   * @since 3.0.0
   */
  showWeekNumbers = false;
  /** @internal */
  embedded = false;
  /** @internal */
  today = DateTime.now().toISO();
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Emitted when the date selection changes. The `DateChangeEvent` contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   * Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
   */
  dateChange;
  /**
   * Emitted when the date range selection changes and the component is in range mode. The `DateChangeEvent` contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   */
  dateRangeChange;
  /**
   * Emitted when the selection is confirmed via the date select button. The `DateChangeEvent` contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   */
  dateSelect;
  /**
   * Get the currently selected date or range. The object returned contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   */
  async getCurrentDate() {
    const _from = this.currFromDate?.isValid ? this.currFromDate?.toFormat(this.format) : void 0;
    const _to = this.currToDate?.isValid ? this.currToDate?.toFormat(this.format) : void 0;
    if (!this.singleSelection) {
      return {
        from: _from,
        to: _to
      };
    }
    return {
      from: _from,
      to: void 0
    };
  }
  currFromDate;
  currToDate;
  selectedYear = 0;
  tempYear = 0;
  startYear = 0;
  endYear = 0;
  selectedMonth = 0;
  tempMonth = 0;
  yearDropdownButtonRef = makeRef();
  yearMonthSelectionDropdownRef = makeRef();
  dayNames;
  monthNames;
  focusedDay = 1;
  isDayFocus = false;
  monthChangedFromFocus = false;
  DAYS_IN_WEEK = 7;
  calendar = [];
  onKeyDown(event) {
    if (!this.isDayFocus) {
      return;
    }
    if (this.yearMonthSelectionDropdownRef.current?.show) {
      return;
    }
    if (["PageUp", "PageDown", "Home", "End"].includes(event.key)) {
      switch (event.key) {
        case "PageUp":
          this.navigateCalendar(-1, event.shiftKey);
          break;
        case "PageDown":
          this.navigateCalendar(1, event.shiftKey);
          break;
        case "Home":
          this.focusFirstDayOfCurrentWeek();
          break;
        case "End":
          this.focusLastDayOfCurrentWeek();
          break;
      }
      return;
    }
    let _focusedDay = this.focusedDay;
    switch (event.key) {
      case "ArrowLeft":
        _focusedDay--;
        break;
      case "ArrowRight":
        _focusedDay++;
        break;
      case "ArrowUp":
        _focusedDay = _focusedDay - 7;
        break;
      case "ArrowDown":
        _focusedDay = _focusedDay + 7;
        break;
      default:
        return;
    }
    event.preventDefault();
    this.setFocusedDay(_focusedDay);
  }
  setFocusedDay(day = 0) {
    if (day > this.getDaysInCurrentMonth()) {
      day = day - this.getDaysInCurrentMonth();
      this.changeCalendarView(1);
      this.monthChangedFromFocus = true;
    } else if (day < 1) {
      this.changeCalendarView(-1);
      day = day + this.getDaysInCurrentMonth();
      this.monthChangedFromFocus = true;
    }
    this.focusedDay = day;
  }
  getDaysInCurrentMonth() {
    return DateTime.utc(this.selectedYear, this.selectedMonth + 1).daysInMonth || 0;
  }
  getFirstDayOfWeek(day) {
    const week = this.calendar.find((w) => w.dayNumbers.includes(day));
    if (!week) {
      return day;
    }
    const firstDay = week.dayNumbers.find((d) => d !== void 0);
    return firstDay ?? day;
  }
  getLastDayOfWeek(day) {
    const week = this.calendar.find((w) => w.dayNumbers.includes(day));
    if (!week) {
      return day;
    }
    const lastDay = [...week.dayNumbers].reverse().find((d) => d !== void 0);
    return lastDay ?? day;
  }
  getDateTimeNow() {
    return DateTime.fromISO(this.today);
  }
  parseDateString(dateString) {
    const date = DateTime.fromFormat(dateString, this.format);
    if (!date.isValid) {
      console.error(date.invalidExplanation);
      return void 0;
    }
    return date;
  }
  /**
   * @internal
   */
  async updateSelectedYearMonth(date) {
    this.selectedYear = date.year;
    this.selectedMonth = date.month - 1;
  }
  onDayBlur() {
    this.isDayFocus = false;
  }
  onDayFocus() {
    this.isDayFocus = true;
  }
  componentWillLoad() {
    this.setTranslations();
    this.currFromDate = this.from ? DateTime.fromFormat(this.from, this.format) : void 0;
    this.currToDate = this.to ? DateTime.fromFormat(this.to, this.format) : void 0;
    const year = this.currFromDate?.year ?? this.getDateTimeNow().year;
    this.startYear = year - 101;
    this.endYear = year + 101;
    this.selectedMonth = (this.currFromDate?.month ?? this.getDateTimeNow().month) - 1;
    this.selectedYear = year;
    this.tempMonth = this.selectedMonth;
    this.tempYear = this.selectedYear;
  }
  keyboardNavigationYearSelection;
  keyboardNavigationMonthSelection;
  disconnectedCallback() {
    this.keyboardNavigationYearSelection?.();
    this.keyboardNavigationMonthSelection?.();
  }
  componentDidLoad() {
    super.componentDidLoad?.();
  }
  componentWillRender() {
    this.calculateCalendar();
  }
  componentDidRender() {
    if (!this.monthChangedFromFocus && !this.isDayFocus) {
      return;
    }
    const dayElem = this.hostElement.shadowRoot.querySelector(`[id=day-cell-${this.focusedDay}]`);
    dayElem?.focus();
    this.monthChangedFromFocus = false;
  }
  /** @internal */
  async navigateCalendar(direction, byYear) {
    this.navigateByMonthOrYear(byYear ? "year" : "month", direction);
  }
  /** @internal */
  async focusFirstDayOfCurrentWeek() {
    this.focusedDay = this.getFirstDayOfWeek(this.focusedDay);
  }
  /** @internal */
  async focusLastDayOfCurrentWeek() {
    this.focusedDay = this.getLastDayOfWeek(this.focusedDay);
  }
  /** @internal */
  async isCalendarDayFocused() {
    return this.isDayFocus && !this.yearMonthSelectionDropdownRef.current?.show;
  }
  /** @internal */
  async focusActiveDay() {
    const shadowRoot = this.hostElement.shadowRoot;
    const dayElement = shadowRoot.querySelector(".calendar-item.selected") ?? shadowRoot.querySelector(".calendar-item.today") ?? shadowRoot.querySelector(".calendar-item.first-day");
    if (!dayElement) {
      return;
    }
    const day = dayElement.dataset.calendarDay;
    if (day) {
      this.focusedDay = parseInt(day, 10);
    }
    dayElement.focus();
  }
  setTranslations() {
    this.dayNames = this.rotateWeekDayNames(Info.weekdays("long", {
      locale: this.locale
    }), this.weekStartIndex);
    this.monthNames = Info.months("long", {
      locale: this.locale
    });
  }
  /**
   * Rotate the WeekdayNames array.
   * Based on the position that should be the new 0-index.
   */
  rotateWeekDayNames(weekdays, index) {
    const clone = [...weekdays];
    if (index === 0) {
      return clone;
    }
    index = -index;
    const len = weekdays.length;
    clone.push(...clone.splice(0, (-index % len + len) % len));
    return clone;
  }
  async onDone() {
    const date = await this.getCurrentDate();
    this.dateSelect.emit(date);
  }
  calculateCalendar() {
    const calendar = [];
    const month = DateTime.utc(this.selectedYear, this.selectedMonth + 1);
    const monthStart = month.startOf("month");
    const monthEnd = month.endOf("month");
    let startWeek = monthStart.weekNumber;
    let endWeek = monthEnd.weekNumber;
    let monthStartWeekDayIndex = monthStart.weekday - 1;
    let monthEndWeekDayIndex = monthEnd.weekday - 1;
    if (this.weekStartIndex !== 0) {
      const weekdays = Info.weekdays();
      const monthStartWeekDayName = weekdays[monthStart.weekday];
      monthStartWeekDayIndex = this.dayNames.findIndex((d) => d === monthStartWeekDayName);
      const monthEndWeekDayName = weekdays[monthEnd.weekday];
      monthEndWeekDayIndex = this.dayNames.findIndex((d) => d === monthEndWeekDayName);
    }
    let correctLastWeek = false;
    if (endWeek === 1) {
      endWeek = monthEnd.weeksInWeekYear + 1;
      correctLastWeek = true;
    }
    let correctFirstWeek = false;
    if (startWeek === monthStart.weeksInWeekYear) {
      startWeek = 1;
      endWeek++;
      correctFirstWeek = true;
    }
    let currDayNumber = 1;
    for (let weekIndex = startWeek; weekIndex <= endWeek && currDayNumber <= 31; weekIndex++) {
      const daysArr = [];
      for (let j = 0; j < this.DAYS_IN_WEEK && currDayNumber <= 31; j++) {
        if (weekIndex === startWeek && j < monthStartWeekDayIndex || weekIndex === endWeek && j > monthEndWeekDayIndex) {
          daysArr.push(void 0);
        } else {
          daysArr.push(currDayNumber++);
        }
      }
      if (correctFirstWeek || correctLastWeek) {
        if (weekIndex === 1) {
          calendar.push({
            weekNumber: monthStart.weeksInWeekYear,
            dayNumbers: daysArr
          });
        } else if (weekIndex === monthEnd.weekNumber) {
          calendar.push({
            weekNumber: 1,
            dayNumbers: daysArr
          });
        } else {
          calendar.push({
            weekNumber: weekIndex - 1,
            dayNumbers: daysArr
          });
        }
        continue;
      }
      calendar.push({
        weekNumber: weekIndex,
        dayNumbers: daysArr
      });
    }
    this.calendar = calendar;
  }
  selectMonth(month) {
    this.selectedMonth = month;
    this.selectedYear = this.tempYear;
    this.tempMonth = month;
  }
  changeCalendarView(number) {
    if (this.selectedMonth + number < 0) {
      this.selectedYear--;
      this.selectedMonth = 11;
    } else if (this.selectedMonth + number > 11) {
      this.selectedYear++;
      this.selectedMonth = 0;
    } else {
      this.selectedMonth += number;
    }
    this.tempMonth = this.selectedMonth;
    this.tempYear = this.selectedYear;
  }
  navigateByMonthOrYear(unit, direction) {
    let targetYear = this.selectedYear;
    let targetMonth = this.selectedMonth;
    if (unit === "year") {
      targetYear += direction;
    } else {
      targetMonth += direction;
      if (targetMonth < 0) {
        targetMonth = 11;
        targetYear--;
      } else if (targetMonth > 11) {
        targetMonth = 0;
        targetYear++;
      }
    }
    const daysInTargetMonth = DateTime.utc(targetYear, targetMonth + 1).daysInMonth || 0;
    this.focusedDay = Math.min(this.focusedDay, daysInTargetMonth);
    this.selectedYear = targetYear;
    this.selectedMonth = targetMonth;
    this.tempYear = targetYear;
    this.tempMonth = targetMonth;
    this.monthChangedFromFocus = true;
  }
  selectDay(selectedDay, target) {
    if (target.classList.contains("disabled")) {
      return;
    }
    const date = DateTime.fromJSDate(new Date(this.selectedYear, this.selectedMonth, selectedDay));
    if (this.singleSelection || this.currFromDate === void 0) {
      this.currFromDate = date;
      this.onDateChange();
      return;
    }
    if (this.currToDate !== void 0) {
      this.currFromDate = date;
      this.currToDate = void 0;
      this.onDateChange();
      return;
    }
    if (date < this.currFromDate) {
      this.currToDate = this.currFromDate;
      this.currFromDate = date;
      this.onDateChange();
      return;
    }
    this.currToDate = date;
    this.onDateChange();
  }
  onDateChange() {
    this.getCurrentDate().then((date) => {
      this.dateChange.emit(date);
      if (!this.singleSelection) {
        this.dateRangeChange.emit(date);
      }
    });
  }
  getUtilitiesBasedOnDay(day) {
    const todayObj = this.getDateTimeNow();
    const selectedDayObj = DateTime.fromJSDate(new Date(this.selectedYear, this.selectedMonth, day));
    return {
      isFirstDay: () => day === 1,
      isToday: () => todayObj.hasSame(selectedDayObj, "day"),
      isSelected: () => !!(this.currFromDate?.hasSame(selectedDayObj, "day") || this.currToDate?.hasSame(selectedDayObj, "day")),
      isRange: () => !!(this.currFromDate && selectedDayObj.startOf("day") > this.currFromDate.startOf("day") && this.currToDate !== void 0 && selectedDayObj.startOf("day") < this.currToDate?.startOf("day"))
    };
  }
  getDayClasses(day) {
    const selectedDayObj = DateTime.fromJSDate(new Date(this.selectedYear, this.selectedMonth, day));
    const util = this.getUtilitiesBasedOnDay(day);
    return {
      "calendar-item": true,
      "empty-day": day === void 0,
      "first-day": util.isFirstDay(),
      today: util.isToday(),
      selected: util.isSelected(),
      range: util.isRange(),
      disabled: !this.isWithinMinMaxDate(selectedDayObj)
    };
  }
  isWithinMinMaxYear(year) {
    const minDateYear = this.minDate ? DateTime.fromFormat(this.minDate, this.format).year : void 0;
    const maxDateYear = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format).year : void 0;
    const isBefore = minDateYear ? year < minDateYear : false;
    const isAfter = maxDateYear ? year > maxDateYear : false;
    return !isBefore && !isAfter;
  }
  isWithinMinMaxMonth(month) {
    const minDateObj = this.minDate ? DateTime.fromFormat(this.minDate, this.format) : void 0;
    const maxDateObj = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format) : void 0;
    const minDateMonth = minDateObj?.month;
    const maxDateMonth = maxDateObj?.month;
    const isBefore = minDateMonth ? this.tempYear === minDateObj.year && month < minDateMonth : false;
    const isAfter = maxDateMonth ? this.tempYear === maxDateObj.year && month > maxDateMonth : false;
    return !isBefore && !isAfter;
  }
  isWithinMinMaxDate(date) {
    const _minDate = this.minDate ? DateTime.fromFormat(this.minDate, this.format) : void 0;
    const _maxDate = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format) : void 0;
    const isBefore = _minDate ? date.startOf("day") < _minDate.startOf("day") : false;
    const isAfter = _maxDate ? date.startOf("day") > _maxDate.startOf("day") : false;
    return !isBefore && !isAfter;
  }
  renderMonths() {
    return this.monthNames.map((month, index) => {
      const selected = this.tempYear === this.selectedYear && this.tempMonth === index;
      return h("ix-dropdown-item", { checked: selected, key: month, class: {
        "month-dropdown-item": true,
        "disabled-item": !this.isWithinMinMaxMonth(index)
      }, onClick: () => {
        this.selectMonth(index);
      } }, h("span", { class: "capitalize monthMargin" }, `${month}`));
    });
  }
  renderYears() {
    const rows = [];
    for (let year = this.startYear; year <= this.endYear; year++) {
      const selected = this.tempYear === year;
      rows.push(h("ix-dropdown-item", { key: year, checked: selected, class: {
        "month-dropdown-item": true,
        "disabled-item": !this.isWithinMinMaxYear(year)
      }, onClick: () => {
        this.tempYear = year;
        this.selectedYear = this.tempYear;
      } }, h("div", { style: { "min-width": "max-content" } }, `${year}`)));
    }
    return rows;
  }
  changeFocusedDay() {
    if (this.monthChangedFromFocus) {
      return;
    }
    requestAnimationFrameNoNgZone(() => {
      const shadowRoot = this.hostElement.shadowRoot;
      const selectedDayElement = shadowRoot.querySelector(".calendar-item.selected");
      const todayElement = shadowRoot.querySelector(".calendar-item.today");
      let dayElement = selectedDayElement ?? todayElement;
      if (!dayElement) {
        dayElement = shadowRoot.querySelector(".calendar-item.first-day");
      }
      if (!dayElement) {
        return;
      }
      const currentDay = dayElement.dataset.calendarDay;
      if (currentDay) {
        this.focusedDay = parseInt(currentDay, 10);
      }
    });
  }
  async intersect(entries) {
    const container = await this.yearDropdownButtonRef.current.getDropdownReference();
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        if (target.dataset.sentinel === "top") {
          this.startYear -= 5;
          if (!this.skipFirstScrollOffset) {
            requestAnimationFrameNoNgZone(() => {
              const first = queryElements(container, "ix-dropdown-item")[0];
              container.scrollTo(0, first.offsetTop);
            });
          }
          this.skipFirstScrollOffset = false;
        } else {
          this.endYear += 5;
        }
      }
    });
  }
  skipFirstScrollOffset = true;
  intersectStart = new IntersectionObserver((entries) => this.intersect(entries), { threshold: 0.5 });
  intersectEnd = new IntersectionObserver((entries) => this.intersect(entries), { threshold: 0.5 });
  render() {
    return h(Host, { key: "c16db9901de5cc5fa4cf2c64275e4b67e9b9d77f", onKeyDown: (event) => this.onKeyDown(event), onFocusin: () => {
      if (hasKeyboardMode()) {
        this.changeFocusedDay();
      }
    } }, h("ix-date-time-card", { key: "be1e214db21db5f25732d67b508cbb4b02654f4d", corners: this.corners, embedded: this.embedded }, h("div", { key: "3951214994c0a8dc1e55aa67e0a7bc12cfcb2cff", class: "header", slot: "header" }, h("ix-icon-button", { key: "45ffabcfe2d9f91c5d048311cc6a4852518c54ae", onClick: () => this.changeCalendarView(-1), icon: iconChevronLeftSmall, variant: "tertiary", class: "arrows", "aria-label": this.ariaLabelPreviousMonthButton }), h("div", { key: "f52f547df100a70b9f5caa37ef144c935741e136", class: "selector" }, h("ix-dropdown-button", { key: "fa0bec8e336fc9d1a7db16950e083555b638fe45", focusCheckedItem: true, "aria-label": this.ariaLabelMonthSelection, variant: "tertiary", label: null, onShowChanged: (event) => {
      event.stopPropagation();
    } }, h("ix-typography", { key: "588a6619cf65556ff1d3b1b0da71be40753de9f8", bold: true, class: "capitalize", slot: "button-label" }, this.monthNames[this.selectedMonth]), this.renderMonths()), h("ix-dropdown-button", { key: "fb727494c3c1f96c8f5075ee26e52d6d889ff043", focusCheckedItem: true, "aria-label": this.ariaLabelYearSelection, ref: this.yearDropdownButtonRef, variant: "tertiary", label: null, onShowChanged: (event) => {
      event.stopPropagation();
      if (event.detail) {
        requestAnimationFrameNoNgZone(() => {
          this.intersectStart.observe(this.hostElement.shadowRoot.querySelector('[data-sentinel="top"]'));
          this.intersectEnd.observe(this.hostElement.shadowRoot.querySelector('[data-sentinel="bottom"]'));
          const selectedYearItem = this.yearDropdownButtonRef.current.querySelector("ix-dropdown-item[checked]");
          if (!selectedYearItem) {
            return;
          }
          requestAnimationFrameNoNgZone(() => {
            selectedYearItem.scrollIntoView({
              block: "center"
            });
          });
        });
      } else {
        this.intersectStart.disconnect();
        this.intersectEnd.disconnect();
      }
    } }, h("div", { key: "163f095e97cb93d833d119c413f45852e8e2de0e", class: "infinite-scrolling-spacer" }, h("div", { key: "15df4fb552b8cdf80edd60dcc0e886f09edb669d", class: "sentinel", "data-sentinel": "top" })), h("ix-typography", { key: "1f7bd89bd70def9b52e663246c3e114bcd5c8be1", bold: true, class: "capitalize", slot: "button-label" }, this.selectedYear), this.renderYears(), h("div", { key: "e8700869e3279f109432a53ced12df80e94b054e", class: "infinite-scrolling-spacer" }, h("div", { key: "71197a183c22e27f0d405af2d8dacdb13e21576c", class: "sentinel", "data-sentinel": "bottom" })))), h("ix-icon-button", { key: "b46859ab5698b695167453d63362fa0cad5ae1f4", onClick: () => this.changeCalendarView(1), icon: iconChevronRightSmall, variant: "tertiary", class: "arrows", "aria-label": this.ariaLabelNextMonthButton })), h("div", { key: "93dcb9c1fb538df3e4a4068ee1941ca73b26cd3e", class: {
      grid: true,
      "grid--show-week-numbers": this.showWeekNumbers
    } }, this.showWeekNumbers && h("div", { key: "10d8decfb11277a71a45d6536b9ee8d0713b3550", class: "calendar-item week-day" }), this.dayNames.map((name) => h("div", { key: name, class: "calendar-item week-day" }, h("div", { class: "overflow" }, name.slice(0, 3)))), this.calendar.map((week) => {
      return h(Fragment, null, this.showWeekNumbers && h("div", { class: "calendar-item week-number" }, week.weekNumber), week.dayNumbers.map((day) => {
        return day ? h("div", { role: "button", key: day, id: `day-cell-${day}`, "data-calendar-day": day, "data-date-value": `${week.weekNumber}-${day}`, class: this.getDayClasses(day), onClick: (e) => {
          const target = e.currentTarget;
          this.selectDay(day, target);
        }, onKeyDown: (e) => {
          const target = e.currentTarget;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.selectDay(day, target);
          }
        }, tabIndex: day === this.focusedDay ? 0 : -1, autofocus: this.getUtilitiesBasedOnDay(day).isToday(), onFocus: () => this.onDayFocus(), onBlur: () => this.onDayBlur(), "aria-label": `${day} ${Info.months()[this.selectedMonth]} ${this.selectedYear}` }, day) : h("div", null);
      }));
    })), h("div", { key: "9536425bedb0357224584e361f3947af8caec179", class: {
      button: true,
      hidden: this.singleSelection || this.embedded
    } }, h("ix-button", { key: "5f36caa1d95a7f88911b6820ec0112e9be589919", hidden: this.singleSelection || this.embedded, onClick: () => this.onDone() }, this.i18nDone))));
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "from": [{
        "watchFromPropHandler": 0
      }],
      "to": [{
        "watchToPropHandler": 0
      }],
      "locale": [{
        "onLocaleChange": 0
      }]
    };
  }
};
DatePicker.style = datePickerCss();
export {
  DatePicker as ix_date_picker
};
