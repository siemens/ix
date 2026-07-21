/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from '@siemens/ix';


@ProxyCmp({
  inputs: ['ariaLabelCard', 'ariaLabelIcon', 'heading', 'icon', 'passive', 'selected', 'subheading', 'variant']
})
@Component({
  selector: 'ix-action-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCard', 'ariaLabelIcon', 'heading', 'icon', 'passive', 'selected', 'subheading', 'variant'],
  standalone: false
})
export class IxActionCard {
  protected el: HTMLIxActionCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxActionCard extends Components.IxActionCard {}


@ProxyCmp({
  inputs: ['appSwitchConfig', 'breakpoints', 'colorSchema', 'forceBreakpoint', 'theme']
})
@Component({
  selector: 'ix-application',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appSwitchConfig', 'breakpoints', 'colorSchema', 'forceBreakpoint', 'theme'],
  standalone: false
})
export class IxApplication {
  protected el: HTMLIxApplicationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxApplication extends Components.IxApplication {}


@ProxyCmp({
  inputs: ['appIcon', 'appIconAlt', 'appIconOutline', 'ariaLabelAppSwitchIconButton', 'ariaLabelMoreMenuIconButton', 'companyLogo', 'companyLogoAlt', 'enableTopLayer', 'hideBottomBorder', 'name', 'nameSuffix', 'showMenu']
})
@Component({
  selector: 'ix-application-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appIcon', 'appIconAlt', 'appIconOutline', 'ariaLabelAppSwitchIconButton', 'ariaLabelMoreMenuIconButton', 'companyLogo', 'companyLogoAlt', 'enableTopLayer', 'hideBottomBorder', 'name', 'nameSuffix', 'showMenu'],
  outputs: ['menuToggle', 'openAppSwitch'],
  standalone: false
})
export class IxApplicationHeader {
  protected el: HTMLIxApplicationHeaderElement;
  @Output() menuToggle = new EventEmitter<IxApplicationHeaderCustomEvent<boolean>>();
  @Output() openAppSwitch = new EventEmitter<IxApplicationHeaderCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxApplicationHeaderCustomEvent } from '@siemens/ix';

export declare interface IxApplicationHeader extends Components.IxApplicationHeader {
  /**
   * Event emitted when the menu toggle button is clicked
   */
  menuToggle: EventEmitter<IxApplicationHeaderCustomEvent<boolean>>;
  /**
   * Event emitted when the app switch button is clicked @since 3.0.0
   */
  openAppSwitch: EventEmitter<IxApplicationHeaderCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['ariaLabelTooltip', 'extra', 'image', 'initials', 'tooltipText', 'username']
})
@Component({
  selector: 'ix-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelTooltip', 'extra', 'image', 'initials', 'tooltipText', 'username'],
  standalone: false
})
export class IxAvatar {
  protected el: HTMLIxAvatarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxAvatar extends Components.IxAvatar {}


@ProxyCmp({
  inputs: ['collapsed', 'icon', 'label', 'sublabel', 'variant']
})
@Component({
  selector: 'ix-blind',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsed', 'icon', 'label', 'sublabel', 'variant'],
  outputs: ['collapsedChange'],
  standalone: false
})
export class IxBlind {
  protected el: HTMLIxBlindElement;
  @Output() collapsedChange = new EventEmitter<IxBlindCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxBlindCustomEvent } from '@siemens/ix';

export declare interface IxBlind extends Components.IxBlind {
  /**
   * Collapsed state changed
   */
  collapsedChange: EventEmitter<IxBlindCustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['ariaLabelPreviousButton', 'enableTopLayer', 'nextItems', 'subtle', 'visibleItemCount']
})
@Component({
  selector: 'ix-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelPreviousButton', 'enableTopLayer', 'nextItems', 'subtle', 'visibleItemCount'],
  outputs: ['itemClick', 'nextClick'],
  standalone: false
})
export class IxBreadcrumb {
  protected el: HTMLIxBreadcrumbElement;
  @Output() itemClick = new EventEmitter<IxBreadcrumbCustomEvent<IIxBreadcrumbBreadcrumbClick>>();
  @Output() nextClick = new EventEmitter<IxBreadcrumbCustomEvent<{ event: UIEvent; item: IIxBreadcrumbBreadcrumbClick; }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxBreadcrumbCustomEvent } from '@siemens/ix';
import type { BreadcrumbClick as IIxBreadcrumbBreadcrumbClick } from '@siemens/ix';

export declare interface IxBreadcrumb extends Components.IxBreadcrumb {
  /**
   * Crumb item clicked event @since 5.0.0
   */
  itemClick: EventEmitter<IxBreadcrumbCustomEvent<IIxBreadcrumbBreadcrumbClick>>;
  /**
   * Next item clicked event @since 5.0.0
   */
  nextClick: EventEmitter<IxBreadcrumbCustomEvent<{ event: UIEvent; item: IIxBreadcrumbBreadcrumbClick; }>>;
}


@ProxyCmp({
  inputs: ['breadcrumbKey', 'href', 'icon', 'label', 'rel', 'target']
})
@Component({
  selector: 'ix-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [{ name: 'breadcrumbKey', required: true }, 'href', 'icon', 'label', 'rel', 'target'],
  standalone: false
})
export class IxBreadcrumbItem {
  protected el: HTMLIxBreadcrumbItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxBreadcrumbItem extends Components.IxBreadcrumbItem {}


@ProxyCmp({
  inputs: ['disabled', 'form', 'href', 'icon', 'iconRight', 'loading', 'rel', 'target', 'type', 'variant']
})
@Component({
  selector: 'ix-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'form', 'href', 'icon', 'iconRight', 'loading', 'rel', 'target', 'type', 'variant'],
  standalone: false
})
export class IxButton {
  protected el: HTMLIxButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxButton extends Components.IxButton {}


@ProxyCmp({
  inputs: ['passive', 'selected', 'variant']
})
@Component({
  selector: 'ix-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['passive', 'selected', 'variant'],
  standalone: false
})
export class IxCard {
  protected el: HTMLIxCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCard extends Components.IxCard {}


@ProxyCmp({
  inputs: ['ariaLabelExpandButton', 'collapse', 'variant']
})
@Component({
  selector: 'ix-card-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelExpandButton', 'collapse', 'variant'],
  standalone: false
})
export class IxCardAccordion {
  protected el: HTMLIxCardAccordionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCardAccordion extends Components.IxCardAccordion {}


@ProxyCmp({
})
@Component({
  selector: 'ix-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IxCardContent {
  protected el: HTMLIxCardContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCardContent extends Components.IxCardContent {}


@ProxyCmp({
  inputs: ['ariaLabelExpandButton', 'collapse', 'hideShowAll', 'i18nMoreCards', 'i18nShowAll', 'i18nShowLess', 'label', 'listStyle', 'showAllCount', 'suppressOverflowHandling']
})
@Component({
  selector: 'ix-card-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelExpandButton', 'collapse', 'hideShowAll', 'i18nMoreCards', 'i18nShowAll', 'i18nShowLess', 'label', 'listStyle', 'showAllCount', 'suppressOverflowHandling'],
  outputs: ['collapseChanged', 'showAllClick', 'showMoreCardClick'],
  standalone: false
})
export class IxCardList {
  protected el: HTMLIxCardListElement;
  @Output() collapseChanged = new EventEmitter<IxCardListCustomEvent<boolean>>();
  @Output() showAllClick = new EventEmitter<IxCardListCustomEvent<{ nativeEvent: MouseEvent; }>>();
  @Output() showMoreCardClick = new EventEmitter<IxCardListCustomEvent<{ nativeEvent: MouseEvent; }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxCardListCustomEvent } from '@siemens/ix';

export declare interface IxCardList extends Components.IxCardList {
  /**
   * Fire event when the collapse state is changed by the user
   */
  collapseChanged: EventEmitter<IxCardListCustomEvent<boolean>>;
  /**
   * Fire event when the collapse state is changed by the user
   */
  showAllClick: EventEmitter<IxCardListCustomEvent<{ nativeEvent: MouseEvent; }>>;
  /**
   * Fire event when the show more card is clicked.
   */
  showMoreCardClick: EventEmitter<IxCardListCustomEvent<{ nativeEvent: MouseEvent; }>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IxCardTitle {
  protected el: HTMLIxCardTitleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCardTitle extends Components.IxCardTitle {}


@ProxyCmp({
  inputs: ['ariaLabelFilterInput', 'ariaLabelOperatorButton', 'ariaLabelResetButton', 'categories', 'disabled', 'enableTopLayer', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'readonly', 'staticOperator', 'suggestions', 'uniqueCategories']
})
@Component({
  selector: 'ix-category-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelFilterInput', 'ariaLabelOperatorButton', 'ariaLabelResetButton', 'categories', 'disabled', 'enableTopLayer', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'readonly', 'staticOperator', 'suggestions', 'uniqueCategories'],
  outputs: ['categoryChanged', 'inputChanged', 'filterChanged', 'filterCleared'],
  standalone: false
})
export class IxCategoryFilter {
  protected el: HTMLIxCategoryFilterElement;
  @Output() categoryChanged = new EventEmitter<IxCategoryFilterCustomEvent<string>>();
  @Output() inputChanged = new EventEmitter<IxCategoryFilterCustomEvent<IIxCategoryFilterInputState>>();
  @Output() filterChanged = new EventEmitter<IxCategoryFilterCustomEvent<IIxCategoryFilterFilterState>>();
  @Output() filterCleared = new EventEmitter<IxCategoryFilterCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxCategoryFilterCustomEvent } from '@siemens/ix';
import type { InputState as IIxCategoryFilterInputState } from '@siemens/ix';
import type { FilterState as IIxCategoryFilterFilterState } from '@siemens/ix';

export declare interface IxCategoryFilter extends Components.IxCategoryFilter {
  /**
   * Event dispatched whenever a category gets selected in the dropdown
   */
  categoryChanged: EventEmitter<IxCategoryFilterCustomEvent<string>>;
  /**
   * Event dispatched whenever the text input changes.
   */
  inputChanged: EventEmitter<IxCategoryFilterCustomEvent<IIxCategoryFilterInputState>>;
  /**
   * Event dispatched whenever the filter state changes.
   */
  filterChanged: EventEmitter<IxCategoryFilterCustomEvent<IIxCategoryFilterFilterState>>;
  /**
   * Event dispatched whenever the filter gets cleared.
   */
  filterCleared: EventEmitter<IxCategoryFilterCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'name', 'required', 'value']
})
@Component({
  selector: 'ix-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'name', 'required', 'value'],
  outputs: ['checkedChange', 'valueChange', 'ixBlur'],
  standalone: false
})
export class IxCheckbox {
  protected el: HTMLIxCheckboxElement;
  @Output() checkedChange = new EventEmitter<IxCheckboxCustomEvent<boolean>>();
  @Output() valueChange = new EventEmitter<IxCheckboxCustomEvent<string>>();
  @Output() ixBlur = new EventEmitter<IxCheckboxCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxCheckboxCustomEvent } from '@siemens/ix';

export declare interface IxCheckbox extends Components.IxCheckbox {
  /**
   * Event emitted when the checked state of the checkbox changes
   */
  checkedChange: EventEmitter<IxCheckboxCustomEvent<boolean>>;
  /**
   * Event emitted when the value of the checkbox changes
   */
  valueChange: EventEmitter<IxCheckboxCustomEvent<string>>;
  /**
   * Event emitted when the checkbox is blurred
   */
  ixBlur: EventEmitter<IxCheckboxCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'warningText']
})
@Component({
  selector: 'ix-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'warningText'],
  standalone: false
})
export class IxCheckboxGroup {
  protected el: HTMLIxCheckboxGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCheckboxGroup extends Components.IxCheckboxGroup {}


@ProxyCmp({
  inputs: ['ariaLabelCloseButton', 'ariaLabelIcon', 'background', 'centerContent', 'chipColor', 'closable', 'icon', 'inactive', 'outline', 'tooltipText', 'variant']
})
@Component({
  selector: 'ix-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseButton', 'ariaLabelIcon', 'background', 'centerContent', 'chipColor', 'closable', 'icon', 'inactive', 'outline', 'tooltipText', 'variant'],
  outputs: ['closeChip'],
  standalone: false
})
export class IxChip {
  protected el: HTMLIxChipElement;
  @Output() closeChip = new EventEmitter<IxChipCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxChipCustomEvent } from '@siemens/ix';

export declare interface IxChip extends Components.IxChip {
  /**
   * Fire event if close button is clicked
   */
  closeChip: EventEmitter<IxChipCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm']
})
@Component({
  selector: 'ix-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm'],
  standalone: false
})
export class IxCol {
  protected el: HTMLIxColElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCol extends Components.IxCol {}


@ProxyCmp({
})
@Component({
  selector: 'ix-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IxContent {
  protected el: HTMLIxContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxContent extends Components.IxContent {}


@ProxyCmp({
  inputs: ['hasBackButton', 'headerSubtitle', 'headerTitle', 'variant']
})
@Component({
  selector: 'ix-content-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasBackButton', 'headerSubtitle', 'headerTitle', 'variant'],
  outputs: ['backButtonClick'],
  standalone: false
})
export class IxContentHeader {
  protected el: HTMLIxContentHeaderElement;
  @Output() backButtonClick = new EventEmitter<IxContentHeaderCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxContentHeaderCustomEvent } from '@siemens/ix';

export declare interface IxContentHeader extends Components.IxContentHeader {
  /**
   * Triggered when back button is clicked
   */
  backButtonClick: EventEmitter<IxContentHeaderCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['helperText', 'infoText', 'invalidText', 'label', 'required', 'showTextAsTooltip', 'validText', 'warningText']
})
@Component({
  selector: 'ix-custom-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helperText', 'infoText', 'invalidText', 'label', 'required', 'showTextAsTooltip', 'validText', 'warningText'],
  standalone: false
})
export class IxCustomField {
  protected el: HTMLIxCustomFieldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCustomField extends Components.IxCustomField {}


@ProxyCmp({
  inputs: ['dateRangeId', 'dateRangeOptions', 'disabled', 'enableTopLayer', 'format', 'from', 'i18nDone', 'i18nNoRange', 'loading', 'locale', 'maxDate', 'minDate', 'showWeekNumbers', 'singleSelection', 'to', 'variant', 'weekStartIndex'],
  methods: ['getDateRange']
})
@Component({
  selector: 'ix-date-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dateRangeId', 'dateRangeOptions', 'disabled', 'enableTopLayer', 'format', 'from', 'i18nDone', 'i18nNoRange', 'loading', 'locale', 'maxDate', 'minDate', 'showWeekNumbers', 'singleSelection', 'to', 'variant', 'weekStartIndex'],
  outputs: ['dateRangeChange'],
  standalone: false
})
export class IxDateDropdown {
  protected el: HTMLIxDateDropdownElement;
  @Output() dateRangeChange = new EventEmitter<IxDateDropdownCustomEvent<IIxDateDropdownDateRangeChangeEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxDateDropdownCustomEvent } from '@siemens/ix';
import type { DateRangeChangeEvent as IIxDateDropdownDateRangeChangeEvent } from '@siemens/ix';

export declare interface IxDateDropdown extends Components.IxDateDropdown {
  /**
   * EventEmitter for date range change events.

This event is emitted when the date range changes within the component.
The event payload contains information about the selected date range.
   */
  dateRangeChange: EventEmitter<IxDateDropdownCustomEvent<IIxDateDropdownDateRangeChangeEvent>>;
}


@ProxyCmp({
  inputs: ['ariaLabelCalendarButton', 'ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'disabled', 'enableTopLayer', 'format', 'helperText', 'i18nErrorDateUnparsable', 'infoText', 'invalidText', 'label', 'locale', 'maxDate', 'minDate', 'name', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'showWeekNumbers', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText', 'weekStartIndex'],
  methods: ['getNativeInputElement', 'focusInput']
})
@Component({
  selector: 'ix-date-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCalendarButton', 'ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'disabled', 'enableTopLayer', 'format', 'helperText', 'i18nErrorDateUnparsable', 'infoText', 'invalidText', 'label', 'locale', 'maxDate', 'minDate', 'name', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'showWeekNumbers', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText', 'weekStartIndex'],
  outputs: ['valueChange', 'validityStateChange', 'ixChange'],
  standalone: false
})
export class IxDateInput {
  protected el: HTMLIxDateInputElement;
  @Output() valueChange = new EventEmitter<IxDateInputCustomEvent<string | undefined>>();
  @Output() validityStateChange = new EventEmitter<IxDateInputCustomEvent<IIxDateInputDateInputValidityState>>();
  @Output() ixChange = new EventEmitter<IxDateInputCustomEvent<string | undefined>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxDateInputCustomEvent } from '@siemens/ix';
import type { DateInputValidityState as IIxDateInputDateInputValidityState } from '@siemens/ix';

export declare interface IxDateInput extends Components.IxDateInput {
  /**
   * Value change event. Emitted when the input value changes.
   */
  valueChange: EventEmitter<IxDateInputCustomEvent<string | undefined>>;
  /**
   * Validation state change event. Emitted when the validation state changes.
   */
  validityStateChange: EventEmitter<IxDateInputCustomEvent<IIxDateInputDateInputValidityState>>;
  /**
   * Change event. Emitted when the date input loses focus and the value has changed. @since 4.4.0
   */
  ixChange: EventEmitter<IxDateInputCustomEvent<string | undefined>>;
}


@ProxyCmp({
  inputs: ['ariaLabelMonthSelection', 'ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'ariaLabelYearSelection', 'corners', 'enableTopLayer', 'format', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'showWeekNumbers', 'singleSelection', 'to', 'weekStartIndex'],
  methods: ['getCurrentDate']
})
@Component({
  selector: 'ix-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelMonthSelection', 'ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'ariaLabelYearSelection', 'corners', 'enableTopLayer', 'format', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'showWeekNumbers', 'singleSelection', 'to', 'weekStartIndex'],
  outputs: ['dateChange', 'dateRangeChange', 'dateSelect'],
  standalone: false
})
export class IxDatePicker {
  protected el: HTMLIxDatePickerElement;
  @Output() dateChange = new EventEmitter<IxDatePickerCustomEvent<IIxDatePickerDateChangeEvent>>();
  @Output() dateRangeChange = new EventEmitter<IxDatePickerCustomEvent<IIxDatePickerDateChangeEvent>>();
  @Output() dateSelect = new EventEmitter<IxDatePickerCustomEvent<IIxDatePickerDateChangeEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxDatePickerCustomEvent } from '@siemens/ix';
import type { DateChangeEvent as IIxDatePickerDateChangeEvent } from '@siemens/ix';

export declare interface IxDatePicker extends Components.IxDatePicker {
  /**
   * Emitted when the date selection changes. The `DateChangeEvent` contains `from` and `to` properties.
The property strings are formatted according to the `format` property and not affected by the `locale` property.
The locale applied is always `en-US`.
Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
   */
  dateChange: EventEmitter<IxDatePickerCustomEvent<IIxDatePickerDateChangeEvent>>;
  /**
   * Date range change event. Emitted when the date range selection changes and the component is in range mode. The `DateChangeEvent` contains `from` and `to` properties.
The property strings are formatted according to the `format` property and not affected by the `locale` property.
The locale applied is always `en-US`.
   */
  dateRangeChange: EventEmitter<IxDatePickerCustomEvent<IIxDatePickerDateChangeEvent>>;
  /**
   * Date selection event. Emitted when the selection is confirmed via the date select button. The `DateChangeEvent` contains `from` and `to` properties.
The property strings are formatted according to the `format` property and not affected by the `locale` property.
The locale applied is always `en-US`.
   */
  dateSelect: EventEmitter<IxDatePickerCustomEvent<IIxDatePickerDateChangeEvent>>;
}


@ProxyCmp({
  inputs: ['ariaLabelCalendarButton', 'ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'disabled', 'enableTopLayer', 'format', 'helperText', 'i18nDone', 'i18nErrorDateTimeUnparsable', 'i18nTime', 'infoText', 'invalidText', 'label', 'locale', 'maxDate', 'maxTime', 'minDate', 'minTime', 'name', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'showWeekNumbers', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText', 'weekStartIndex']
})
@Component({
  selector: 'ix-datetime-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCalendarButton', 'ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'disabled', 'enableTopLayer', 'format', 'helperText', 'i18nDone', 'i18nErrorDateTimeUnparsable', 'i18nTime', 'infoText', 'invalidText', 'label', 'locale', 'maxDate', 'maxTime', 'minDate', 'minTime', 'name', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'showWeekNumbers', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText', 'weekStartIndex'],
  outputs: ['valueChange', 'validityStateChange', 'ixFocus', 'ixBlur', 'ixChange'],
  standalone: false
})
export class IxDatetimeInput {
  protected el: HTMLIxDatetimeInputElement;
  @Output() valueChange = new EventEmitter<IxDatetimeInputCustomEvent<string | undefined>>();
  @Output() validityStateChange = new EventEmitter<IxDatetimeInputCustomEvent<IIxDatetimeInputDateTimeInputValidityState>>();
  @Output() ixFocus = new EventEmitter<IxDatetimeInputCustomEvent<void>>();
  @Output() ixBlur = new EventEmitter<IxDatetimeInputCustomEvent<void>>();
  @Output() ixChange = new EventEmitter<IxDatetimeInputCustomEvent<string | undefined>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxDatetimeInputCustomEvent } from '@siemens/ix';
import type { DateTimeInputValidityState as IIxDatetimeInputDateTimeInputValidityState } from '@siemens/ix';

export declare interface IxDatetimeInput extends Components.IxDatetimeInput {
  /**
   * Emitted when the datetime value changes. Payload is display format or undefined
   */
  valueChange: EventEmitter<IxDatetimeInputCustomEvent<string | undefined>>;
  /**
   * Emitted when validation state changes
   */
  validityStateChange: EventEmitter<IxDatetimeInputCustomEvent<IIxDatetimeInputDateTimeInputValidityState>>;
  /**
   * Emitted when the input receives focus
   */
  ixFocus: EventEmitter<IxDatetimeInputCustomEvent<void>>;
  /**
   * Emitted when the input loses focus
   */
  ixBlur: EventEmitter<IxDatetimeInputCustomEvent<void>>;
  /**
   * Emitted when the date/time value changes via user interaction.

Fires in two scenarios:
- When the input loses focus (blur) and the value has changed
- When a new date/time is selected in the picker and confirmed

Does NOT fire when:
- The picker is opened/closed without confirming a change
- The input is blurred without modifying the value
- The value is changed programmatically via the value property
   */
  ixChange: EventEmitter<IxDatetimeInputCustomEvent<string | undefined>>;
}


@ProxyCmp({
  inputs: ['ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'dateFormat', 'from', 'i18nDone', 'i18nTime', 'locale', 'maxDate', 'maxTime', 'minDate', 'minTime', 'showTimeReference', 'showWeekNumbers', 'singleSelection', 'time', 'timeFormat', 'timeReference', 'to', 'weekStartIndex']
})
@Component({
  selector: 'ix-datetime-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'dateFormat', 'from', 'i18nDone', 'i18nTime', 'locale', 'maxDate', 'maxTime', 'minDate', 'minTime', 'showTimeReference', 'showWeekNumbers', 'singleSelection', 'time', 'timeFormat', 'timeReference', 'to', 'weekStartIndex'],
  outputs: ['timeChange', 'dateChange', 'dateSelect'],
  standalone: false
})
export class IxDatetimePicker {
  protected el: HTMLIxDatetimePickerElement;
  @Output() timeChange = new EventEmitter<IxDatetimePickerCustomEvent<string>>();
  @Output() dateChange = new EventEmitter<IxDatetimePickerCustomEvent<IIxDatetimePickerDateTimeDateChangeEvent>>();
  @Output() dateSelect = new EventEmitter<IxDatetimePickerCustomEvent<IIxDatetimePickerDateTimeSelectEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxDatetimePickerCustomEvent } from '@siemens/ix';
import type { DateTimeDateChangeEvent as IIxDatetimePickerDateTimeDateChangeEvent } from '@siemens/ix';
import type { DateTimeSelectEvent as IIxDatetimePickerDateTimeSelectEvent } from '@siemens/ix';

export declare interface IxDatetimePicker extends Components.IxDatetimePicker {
  /**
   * Time change event. Emitted when the time changes in the embedded time picker.
   */
  timeChange: EventEmitter<IxDatetimePickerCustomEvent<string>>;
  /**
   * Date change event. Emitted when the date changes in the embedded date picker.
   */
  dateChange: EventEmitter<IxDatetimePickerCustomEvent<IIxDatetimePickerDateTimeDateChangeEvent>>;
  /**
   * Datetime selection event. Emitted when the user confirms the selection.
   */
  dateSelect: EventEmitter<IxDatetimePickerCustomEvent<IIxDatetimePickerDateTimeSelectEvent>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IxDivider {
  protected el: HTMLIxDividerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDivider extends Components.IxDivider {}


@ProxyCmp({
  inputs: ['anchor', 'closeBehavior', 'disableFocusHandling', 'disableFocusTrap', 'enableTopLayer', 'focusCheckedItem', 'header', 'placement', 'positioningStrategy', 'show', 'suppressAutomaticPlacement', 'suppressTriggerVisibilityCheck', 'trigger'],
  methods: ['updatePosition']
})
@Component({
  selector: 'ix-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anchor', 'closeBehavior', 'disableFocusHandling', 'disableFocusTrap', 'enableTopLayer', 'focusCheckedItem', 'header', 'placement', 'positioningStrategy', 'show', 'suppressAutomaticPlacement', 'suppressTriggerVisibilityCheck', 'trigger'],
  outputs: ['showChange', 'showChanged'],
  standalone: false
})
export class IxDropdown {
  protected el: HTMLIxDropdownElement;
  @Output() showChange = new EventEmitter<IxDropdownCustomEvent<boolean>>();
  @Output() showChanged = new EventEmitter<IxDropdownCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxDropdownCustomEvent } from '@siemens/ix';

export declare interface IxDropdown extends Components.IxDropdown {
  /**
   * Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
   */
  showChange: EventEmitter<IxDropdownCustomEvent<boolean>>;
  /**
   * Fire event after visibility of dropdown has changed
   */
  showChanged: EventEmitter<IxDropdownCustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['ariaLabelDropdownButton', 'closeBehavior', 'disabled', 'enableTopLayer', 'focusCheckedItem', 'icon', 'label', 'placement', 'variant']
})
@Component({
  selector: 'ix-dropdown-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelDropdownButton', 'closeBehavior', 'disabled', 'enableTopLayer', 'focusCheckedItem', 'icon', 'label', 'placement', 'variant'],
  outputs: ['showChange', 'showChanged'],
  standalone: false
})
export class IxDropdownButton {
  protected el: HTMLIxDropdownButtonElement;
  @Output() showChange = new EventEmitter<IxDropdownButtonCustomEvent<boolean>>();
  @Output() showChanged = new EventEmitter<IxDropdownButtonCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxDropdownButtonCustomEvent } from '@siemens/ix';

export declare interface IxDropdownButton extends Components.IxDropdownButton {
  /**
   * Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
   */
  showChange: EventEmitter<IxDropdownButtonCustomEvent<boolean>>;
  /**
   * Fire event after visibility of dropdown has changed
   */
  showChanged: EventEmitter<IxDropdownButtonCustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['label']
})
@Component({
  selector: 'ix-dropdown-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
  standalone: false
})
export class IxDropdownHeader {
  protected el: HTMLIxDropdownHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDropdownHeader extends Components.IxDropdownHeader {}


@ProxyCmp({
  inputs: ['ariaLabelButton', 'ariaLabelIcon', 'checked', 'disabled', 'hover', 'icon', 'itemRole', 'label']
})
@Component({
  selector: 'ix-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'ariaLabelIcon', 'checked', 'disabled', 'hover', 'icon', 'itemRole', 'label'],
  standalone: false
})
export class IxDropdownItem {
  protected el: HTMLIxDropdownItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDropdownItem extends Components.IxDropdownItem {}


@ProxyCmp({
})
@Component({
  selector: 'ix-dropdown-quick-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IxDropdownQuickActions {
  protected el: HTMLIxDropdownQuickActionsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDropdownQuickActions extends Components.IxDropdownQuickActions {}


@ProxyCmp({
  inputs: ['action', 'ariaLabelEmptyStateIcon', 'header', 'icon', 'layout', 'subHeader']
})
@Component({
  selector: 'ix-empty-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'ariaLabelEmptyStateIcon', { name: 'header', required: true }, 'icon', 'layout', 'subHeader'],
  outputs: ['actionClick'],
  standalone: false
})
export class IxEmptyState {
  protected el: HTMLIxEmptyStateElement;
  @Output() actionClick = new EventEmitter<IxEmptyStateCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxEmptyStateCustomEvent } from '@siemens/ix';

export declare interface IxEmptyState extends Components.IxEmptyState {
  /**
   * Empty state action click event
   */
  actionClick: EventEmitter<IxEmptyStateCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['animated', 'chevron', 'compact', 'itemHeight']
})
@Component({
  selector: 'ix-event-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'chevron', 'compact', 'itemHeight'],
  standalone: false
})
export class IxEventList {
  protected el: HTMLIxEventListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxEventList extends Components.IxEventList {}


@ProxyCmp({
  inputs: ['chevron', 'disabled', 'itemColor', 'selected', 'variant']
})
@Component({
  selector: 'ix-event-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['chevron', 'disabled', 'itemColor', 'selected', 'variant'],
  outputs: ['itemClick'],
  standalone: false
})
export class IxEventListItem {
  protected el: HTMLIxEventListItemElement;
  @Output() itemClick = new EventEmitter<IxEventListItemCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxEventListItemCustomEvent } from '@siemens/ix';

export declare interface IxEventListItem extends Components.IxEventListItem {
  /**
   * Event list item click
   */
  itemClick: EventEmitter<IxEventListItemCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ariaLabelClearIconButton', 'ariaLabelSearchIconButton', 'ariaLabelSearchInput', 'fullWidth', 'icon', 'placeholder', 'value', 'variant']
})
@Component({
  selector: 'ix-expanding-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelClearIconButton', 'ariaLabelSearchIconButton', 'ariaLabelSearchInput', 'fullWidth', 'icon', 'placeholder', 'value', 'variant'],
  outputs: ['valueChange'],
  standalone: false
})
export class IxExpandingSearch {
  protected el: HTMLIxExpandingSearchElement;
  @Output() valueChange = new EventEmitter<IxExpandingSearchCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxExpandingSearchCustomEvent } from '@siemens/ix';

export declare interface IxExpandingSearch extends Components.IxExpandingSearch {
  /**
   * Value changed
   */
  valueChange: EventEmitter<IxExpandingSearchCustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['htmlFor', 'required']
})
@Component({
  selector: 'ix-field-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['htmlFor', 'required'],
  standalone: false
})
export class IxFieldLabel {
  protected el: HTMLIxFieldLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxFieldLabel extends Components.IxFieldLabel {}


@ProxyCmp({
  inputs: ['ariaLabelCloseIconButton', 'disabled', 'hideCloseButton', 'readonly']
})
@Component({
  selector: 'ix-filter-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseIconButton', 'disabled', 'hideCloseButton', 'readonly'],
  outputs: ['closeClick'],
  standalone: false
})
export class IxFilterChip {
  protected el: HTMLIxFilterChipElement;
  @Output() closeClick = new EventEmitter<IxFilterChipCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxFilterChipCustomEvent } from '@siemens/ix';

export declare interface IxFilterChip extends Components.IxFilterChip {
  /**
   * Close clicked
   */
  closeClick: EventEmitter<IxFilterChipCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['ariaLabelEyeIconButton', 'height', 'index', 'variant', 'width']
})
@Component({
  selector: 'ix-flip-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelEyeIconButton', 'height', 'index', 'variant', 'width'],
  outputs: ['toggle'],
  standalone: false
})
export class IxFlipTile {
  protected el: HTMLIxFlipTileElement;
  @Output() toggle = new EventEmitter<IxFlipTileCustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxFlipTileCustomEvent } from '@siemens/ix';

export declare interface IxFlipTile extends Components.IxFlipTile {
  /**
   * Event emitted when the index changes @since 3.0.0
   */
  toggle: EventEmitter<IxFlipTileCustomEvent<number>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-flip-tile-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IxFlipTileContent {
  protected el: HTMLIxFlipTileContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxFlipTileContent extends Components.IxFlipTileContent {}


@ProxyCmp({
  inputs: ['expandOnHeaderClick', 'expanded', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection']
})
@Component({
  selector: 'ix-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expandOnHeaderClick', 'expanded', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection'],
  outputs: ['selectGroup', 'selectItem', 'expandedChanged'],
  standalone: false
})
export class IxGroup {
  protected el: HTMLIxGroupElement;
  @Output() selectGroup = new EventEmitter<IxGroupCustomEvent<boolean>>();
  @Output() selectItem = new EventEmitter<IxGroupCustomEvent<number>>();
  @Output() expandedChanged = new EventEmitter<IxGroupCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxGroupCustomEvent } from '@siemens/ix';

export declare interface IxGroup extends Components.IxGroup {
  /**
   * Emits when whole group gets selected.
   */
  selectGroup: EventEmitter<IxGroupCustomEvent<boolean>>;
  /**
   * Emits when group item gets selected.
   */
  selectItem: EventEmitter<IxGroupCustomEvent<number>>;
  /**
   * Group expanded
   */
  expandedChanged: EventEmitter<IxGroupCustomEvent<boolean>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-group-context-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IxGroupContextMenu {
  protected el: HTMLIxGroupContextMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxGroupContextMenu extends Components.IxGroupContextMenu {}


@ProxyCmp({
  inputs: ['ariaLabelIcon', 'disabled', 'icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text']
})
@Component({
  selector: 'ix-group-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIcon', 'disabled', 'icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text'],
  outputs: ['selectedChanged'],
  standalone: false
})
export class IxGroupItem {
  protected el: HTMLIxGroupItemElement;
  @Output() selectedChanged = new EventEmitter<IxGroupItemCustomEvent<HTMLIxGroupItemElement>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxGroupItemCustomEvent } from '@siemens/ix';

export declare interface IxGroupItem extends Components.IxGroupItem {
  /**
   * Selection changed
   */
  selectedChanged: EventEmitter<IxGroupItemCustomEvent<HTMLIxGroupItemElement>>;
}


@ProxyCmp({
  inputs: ['helperText', 'htmlFor', 'infoText', 'invalidText', 'validText', 'warningText']
})
@Component({
  selector: 'ix-helper-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helperText', 'htmlFor', 'infoText', 'invalidText', 'validText', 'warningText'],
  standalone: false
})
export class IxHelperText {
  protected el: HTMLIxHelperTextElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxHelperText extends Components.IxHelperText {}


@ProxyCmp({
  inputs: ['disabled', 'icon', 'iconColor', 'loading', 'oval', 'size', 'type', 'variant']
})
@Component({
  selector: 'ix-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'icon', 'iconColor', 'loading', 'oval', 'size', 'type', 'variant'],
  standalone: false
})
export class IxIconButton {
  protected el: HTMLIxIconButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxIconButton extends Components.IxIconButton {}


@ProxyCmp({
  inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'oval', 'pressed', 'size', 'variant']
})
@Component({
  selector: 'ix-icon-toggle-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'oval', 'pressed', 'size', 'variant'],
  outputs: ['pressedChange'],
  standalone: false
})
export class IxIconToggleButton {
  protected el: HTMLIxIconToggleButtonElement;
  @Output() pressedChange = new EventEmitter<IxIconToggleButtonCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxIconToggleButtonCustomEvent } from '@siemens/ix';

export declare interface IxIconToggleButton extends Components.IxIconToggleButton {
  /**
   * Pressed change event
   */
  pressedChange: EventEmitter<IxIconToggleButtonCustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'suppressSubmitOnEnter', 'textAlignment', 'type', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'getValidityState', 'focusInput']
})
@Component({
  selector: 'ix-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'suppressSubmitOnEnter', 'textAlignment', 'type', 'validText', 'value', 'warningText'],
  outputs: ['valueChange', 'validityStateChange', 'ixBlur', 'ixChange'],
  standalone: false
})
export class IxInput {
  protected el: HTMLIxInputElement;
  @Output() valueChange = new EventEmitter<IxInputCustomEvent<string>>();
  @Output() validityStateChange = new EventEmitter<IxInputCustomEvent<ValidityState>>();
  @Output() ixBlur = new EventEmitter<IxInputCustomEvent<void>>();
  @Output() ixChange = new EventEmitter<IxInputCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxInputCustomEvent } from '@siemens/ix';

export declare interface IxInput extends Components.IxInput {
  /**
   * Event emitted when the value of the text field changes.
   */
  valueChange: EventEmitter<IxInputCustomEvent<string>>;
  /**
   * Event emitted when the validity state of the text field changes.
   */
  validityStateChange: EventEmitter<IxInputCustomEvent<ValidityState>>;
  /**
   * Event emitted when the text field loses focus.
   */
  ixBlur: EventEmitter<IxInputCustomEvent<void>>;
  /**
   * Event emitted when the text field loses focus and the value has changed. @since 4.4.0
   */
  ixChange: EventEmitter<IxInputCustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['ariaLabelIcon', 'icon', 'label', 'labelPosition', 'value']
})
@Component({
  selector: 'ix-key-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIcon', 'icon', { name: 'label', required: true }, 'labelPosition', 'value'],
  standalone: false
})
export class IxKeyValue {
  protected el: HTMLIxKeyValueElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxKeyValue extends Components.IxKeyValue {}


@ProxyCmp({
  inputs: ['striped']
})
@Component({
  selector: 'ix-key-value-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['striped'],
  standalone: false
})
export class IxKeyValueList {
  protected el: HTMLIxKeyValueListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxKeyValueList extends Components.IxKeyValueList {}


@ProxyCmp({
  inputs: ['ariaLabelAlarmIcon', 'ariaLabelWarningIcon', 'label', 'orientation', 'state', 'unit', 'value']
})
@Component({
  selector: 'ix-kpi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelAlarmIcon', 'ariaLabelWarningIcon', 'label', 'orientation', 'state', 'unit', 'value'],
  standalone: false
})
export class IxKpi {
  protected el: HTMLIxKpiElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxKpi extends Components.IxKpi {}


@ProxyCmp({
  inputs: ['layout']
})
@Component({
  selector: 'ix-layout-auto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['layout'],
  standalone: false
})
export class IxLayoutAuto {
  protected el: HTMLIxLayoutAutoElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxLayoutAuto extends Components.IxLayoutAuto {}


@ProxyCmp({
  inputs: ['columns', 'gap', 'noMargin']
})
@Component({
  selector: 'ix-layout-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['columns', 'gap', 'noMargin'],
  standalone: false
})
export class IxLayoutGrid {
  protected el: HTMLIxLayoutGridElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxLayoutGrid extends Components.IxLayoutGrid {}


@ProxyCmp({
  inputs: ['disabled', 'target', 'url']
})
@Component({
  selector: 'ix-link-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'target', 'url'],
  standalone: false
})
export class IxLinkButton {
  protected el: HTMLIxLinkButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxLinkButton extends Components.IxLinkButton {}


@ProxyCmp({
  inputs: ['applicationDescription', 'applicationName', 'enableToggleTheme', 'expand', 'i18nAriaLabelMenu', 'i18nCollapse', 'i18nExpand', 'i18nLegal', 'i18nNavigationHint', 'i18nSettings', 'i18nToggleTheme', 'pinned', 'showAbout', 'showSettings', 'startExpanded'],
  methods: ['toggleMapExpand', 'toggleMenu', 'toggleSettings', 'toggleAbout']
})
@Component({
  selector: 'ix-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationDescription', 'applicationName', 'enableToggleTheme', 'expand', 'i18nAriaLabelMenu', 'i18nCollapse', 'i18nExpand', 'i18nLegal', 'i18nNavigationHint', 'i18nSettings', 'i18nToggleTheme', 'pinned', 'showAbout', 'showSettings', 'startExpanded'],
  outputs: ['expandChange', 'mapExpandChange', 'openAppSwitch', 'openSettings', 'openAbout'],
  standalone: false
})
export class IxMenu {
  protected el: HTMLIxMenuElement;
  @Output() expandChange = new EventEmitter<IxMenuCustomEvent<boolean>>();
  @Output() mapExpandChange = new EventEmitter<IxMenuCustomEvent<boolean>>();
  @Output() openAppSwitch = new EventEmitter<IxMenuCustomEvent<void>>();
  @Output() openSettings = new EventEmitter<IxMenuCustomEvent<void>>();
  @Output() openAbout = new EventEmitter<IxMenuCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxMenuCustomEvent } from '@siemens/ix';

export declare interface IxMenu extends Components.IxMenu {
  /**
   * Menu expanded
   */
  expandChange: EventEmitter<IxMenuCustomEvent<boolean>>;
  /**
   * Map Sidebar expanded
   */
  mapExpandChange: EventEmitter<IxMenuCustomEvent<boolean>>;
  /**
   * Event emitted when the app switch button is clicked @since 3.0.0
   */
  openAppSwitch: EventEmitter<IxMenuCustomEvent<void>>;
  /**
   * Event emitted when the settings button is clicked @since 3.0.0
   */
  openSettings: EventEmitter<IxMenuCustomEvent<void>>;
  /**
   * Event emitted when the about button is clicked @since 3.0.0
   */
  openAbout: EventEmitter<IxMenuCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['activeTabKey', 'ariaLabelCloseButton', 'label', 'suppressLegacyTabs']
})
@Component({
  selector: 'ix-menu-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabKey', 'ariaLabelCloseButton', 'label', 'suppressLegacyTabs'],
  outputs: ['tabChange', 'close'],
  standalone: false
})
export class IxMenuAbout {
  protected el: HTMLIxMenuAboutElement;
  @Output() tabChange = new EventEmitter<IxMenuAboutCustomEvent<string>>();
  @Output() close = new EventEmitter<IxMenuAboutCustomEvent<IIxMenuAboutCustomCloseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxMenuAboutCustomEvent } from '@siemens/ix';
import type { CustomCloseEvent as IIxMenuAboutCustomCloseEvent } from '@siemens/ix';

export declare interface IxMenuAbout extends Components.IxMenuAbout {
  /**
   * Active tab changed @since 3.0.0
   */
  tabChange: EventEmitter<IxMenuAboutCustomEvent<string>>;
  /**
   * About and Legal closed
   */
  close: EventEmitter<IxMenuAboutCustomEvent<IIxMenuAboutCustomCloseEvent>>;
}


@ProxyCmp({
  inputs: ['label', 'tabKey']
})
@Component({
  selector: 'ix-menu-about-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', { name: 'tabKey', required: true }],
  outputs: ['labelChange'],
  standalone: false
})
export class IxMenuAboutItem {
  protected el: HTMLIxMenuAboutItemElement;
  @Output() labelChange = new EventEmitter<IxMenuAboutItemCustomEvent<IIxMenuAboutItemCustomLabelChangeEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxMenuAboutItemCustomEvent } from '@siemens/ix';
import type { CustomLabelChangeEvent as IIxMenuAboutItemCustomLabelChangeEvent } from '@siemens/ix';

export declare interface IxMenuAboutItem extends Components.IxMenuAboutItem {
  /**
   * Label changed
   */
  labelChange: EventEmitter<IxMenuAboutItemCustomEvent<IIxMenuAboutItemCustomLabelChangeEvent>>;
}


@ProxyCmp({
  inputs: ['aboutItemLabel', 'activeAboutTabKey', 'i18nShowMore', 'label', 'show']
})
@Component({
  selector: 'ix-menu-about-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aboutItemLabel', 'activeAboutTabKey', 'i18nShowMore', 'label', 'show'],
  outputs: ['showMore', 'closePopover'],
  standalone: false
})
export class IxMenuAboutNews {
  protected el: HTMLIxMenuAboutNewsElement;
  @Output() showMore = new EventEmitter<IxMenuAboutNewsCustomEvent<MouseEvent>>();
  @Output() closePopover = new EventEmitter<IxMenuAboutNewsCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxMenuAboutNewsCustomEvent } from '@siemens/ix';

export declare interface IxMenuAboutNews extends Components.IxMenuAboutNews {
  /**
   * Show More button is pressed
   */
  showMore: EventEmitter<IxMenuAboutNewsCustomEvent<MouseEvent>>;
  /**
   * Popover closed
   */
  closePopover: EventEmitter<IxMenuAboutNewsCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['ariaLabelTooltip', 'bottom', 'enableTopLayer', 'hideLogoutButton', 'i18nLogout', 'image', 'initials', 'tooltipText', 'top']
})
@Component({
  selector: 'ix-menu-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelTooltip', 'bottom', 'enableTopLayer', 'hideLogoutButton', 'i18nLogout', 'image', 'initials', 'tooltipText', 'top'],
  outputs: ['logoutClick'],
  standalone: false
})
export class IxMenuAvatar {
  protected el: HTMLIxMenuAvatarElement;
  @Output() logoutClick = new EventEmitter<IxMenuAvatarCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxMenuAvatarCustomEvent } from '@siemens/ix';

export declare interface IxMenuAvatar extends Components.IxMenuAvatar {
  /**
   * Logout click
   */
  logoutClick: EventEmitter<IxMenuAvatarCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['icon', 'label']
})
@Component({
  selector: 'ix-menu-avatar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'label'],
  outputs: ['itemClick'],
  standalone: false
})
export class IxMenuAvatarItem {
  protected el: HTMLIxMenuAvatarItemElement;
  @Output() itemClick = new EventEmitter<IxMenuAvatarItemCustomEvent<MouseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxMenuAvatarItemCustomEvent } from '@siemens/ix';

export declare interface IxMenuAvatarItem extends Components.IxMenuAvatarItem {
  /**
   * Avatar dropdown item clicked
   */
  itemClick: EventEmitter<IxMenuAvatarItemCustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['icon', 'label', 'notifications', 'tooltipText']
})
@Component({
  selector: 'ix-menu-category',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'label', 'notifications', 'tooltipText'],
  standalone: false
})
export class IxMenuCategory {
  protected el: HTMLIxMenuCategoryElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMenuCategory extends Components.IxMenuCategory {}


@ProxyCmp({
  inputs: ['active', 'bottom', 'disabled', 'home', 'href', 'icon', 'label', 'notifications', 'rel', 'target', 'tooltipText']
})
@Component({
  selector: 'ix-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'bottom', 'disabled', 'home', 'href', 'icon', 'label', 'notifications', 'rel', 'target', 'tooltipText'],
  standalone: false
})
export class IxMenuItem {
  protected el: HTMLIxMenuItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMenuItem extends Components.IxMenuItem {}


@ProxyCmp({
  inputs: ['activeTabKey', 'ariaLabelCloseButton', 'label', 'suppressLegacyTabs']
})
@Component({
  selector: 'ix-menu-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabKey', 'ariaLabelCloseButton', 'label', 'suppressLegacyTabs'],
  outputs: ['tabChange', 'close'],
  standalone: false
})
export class IxMenuSettings {
  protected el: HTMLIxMenuSettingsElement;
  @Output() tabChange = new EventEmitter<IxMenuSettingsCustomEvent<string>>();
  @Output() close = new EventEmitter<IxMenuSettingsCustomEvent<IIxMenuSettingsCustomCloseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxMenuSettingsCustomEvent } from '@siemens/ix';
import type { CustomCloseEvent as IIxMenuSettingsCustomCloseEvent } from '@siemens/ix';

export declare interface IxMenuSettings extends Components.IxMenuSettings {
  /**
   * Active tab changed @since 3.0.0
   */
  tabChange: EventEmitter<IxMenuSettingsCustomEvent<string>>;
  /**
   * Popover closed
   */
  close: EventEmitter<IxMenuSettingsCustomEvent<IIxMenuSettingsCustomCloseEvent>>;
}


@ProxyCmp({
  inputs: ['label', 'tabKey']
})
@Component({
  selector: 'ix-menu-settings-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', { name: 'tabKey', required: true }],
  standalone: false
})
export class IxMenuSettingsItem {
  protected el: HTMLIxMenuSettingsItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMenuSettingsItem extends Components.IxMenuSettingsItem {}


@ProxyCmp({
  inputs: ['persistent', 'type']
})
@Component({
  selector: 'ix-message-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['persistent', 'type'],
  outputs: ['closedChange', 'closeAnimationCompleted'],
  standalone: false
})
export class IxMessageBar {
  protected el: HTMLIxMessageBarElement;
  @Output() closedChange = new EventEmitter<IxMessageBarCustomEvent<any>>();
  @Output() closeAnimationCompleted = new EventEmitter<IxMessageBarCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxMessageBarCustomEvent } from '@siemens/ix';

export declare interface IxMessageBar extends Components.IxMessageBar {
  /**
   * An event emitted when the close button is clicked
   */
  closedChange: EventEmitter<IxMessageBarCustomEvent<any>>;
  /**
   * An event emitted when the close animation is completed
   */
  closeAnimationCompleted: EventEmitter<IxMessageBarCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['beforeDismiss', 'centered', 'closeOnBackdropClick', 'disableAnimation', 'hideBackdrop', 'isNonBlocking', 'size'],
  methods: ['showModal', 'dismissModal', 'closeModal']
})
@Component({
  selector: 'ix-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['beforeDismiss', 'centered', 'closeOnBackdropClick', 'disableAnimation', 'hideBackdrop', 'isNonBlocking', 'size'],
  outputs: ['dialogClose', 'dialogDismiss'],
  standalone: false
})
export class IxModal {
  protected el: HTMLIxModalElement;
  @Output() dialogClose = new EventEmitter<IxModalCustomEvent<any>>();
  @Output() dialogDismiss = new EventEmitter<IxModalCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxModalCustomEvent } from '@siemens/ix';

export declare interface IxModal extends Components.IxModal {
  /**
   * Dialog close
   */
  dialogClose: EventEmitter<IxModalCustomEvent<any>>;
  /**
   * Dialog cancel
   */
  dialogDismiss: EventEmitter<IxModalCustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-modal-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IxModalContent {
  protected el: HTMLIxModalContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxModalContent extends Components.IxModalContent {}


@ProxyCmp({
})
@Component({
  selector: 'ix-modal-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IxModalFooter {
  protected el: HTMLIxModalFooterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxModalFooter extends Components.IxModalFooter {}


@ProxyCmp({
  inputs: ['ariaLabelCloseIconButton', 'ariaLabelIcon', 'hideClose', 'icon', 'iconColor']
})
@Component({
  selector: 'ix-modal-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseIconButton', 'ariaLabelIcon', 'hideClose', 'icon', 'iconColor'],
  outputs: ['closeClick'],
  standalone: false
})
export class IxModalHeader {
  protected el: HTMLIxModalHeaderElement;
  @Output() closeClick = new EventEmitter<IxModalHeaderCustomEvent<MouseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxModalHeaderCustomEvent } from '@siemens/ix';

export declare interface IxModalHeader extends Components.IxModalHeader {
  /**
   * Emits when the close icon is clicked and closes the modal
Can be prevented, in which case only the event is triggered, and the modal remains open
   */
  closeClick: EventEmitter<IxModalHeaderCustomEvent<MouseEvent>>;
}


@ProxyCmp({
})
@Component({
  selector: 'ix-modal-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IxModalLoading {
  protected el: HTMLIxModalLoadingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxModalLoading extends Components.IxModalLoading {}


@ProxyCmp({
  inputs: ['allowEmptyValueChange', 'allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'max', 'min', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showStepperButtons', 'showTextAsTooltip', 'step', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'focusInput']
})
@Component({
  selector: 'ix-number-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowEmptyValueChange', 'allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'max', 'min', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showStepperButtons', 'showTextAsTooltip', 'step', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText'],
  outputs: ['valueChange', 'validityStateChange', 'ixBlur', 'ixChange'],
  standalone: false
})
export class IxNumberInput {
  protected el: HTMLIxNumberInputElement;
  @Output() valueChange = new EventEmitter<IxNumberInputCustomEvent<number>>();
  @Output() validityStateChange = new EventEmitter<IxNumberInputCustomEvent<ValidityState>>();
  @Output() ixBlur = new EventEmitter<IxNumberInputCustomEvent<void>>();
  @Output() ixChange = new EventEmitter<IxNumberInputCustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxNumberInputCustomEvent } from '@siemens/ix';

export declare interface IxNumberInput extends Components.IxNumberInput {
  /**
   * Event emitted when the value of the input field changes
   */
  valueChange: EventEmitter<IxNumberInputCustomEvent<number>>;
  /**
   * Event emitted when the validity state of the input field changes
   */
  validityStateChange: EventEmitter<IxNumberInputCustomEvent<ValidityState>>;
  /**
   * Event emitted when the input field loses focus
   */
  ixBlur: EventEmitter<IxNumberInputCustomEvent<void>>;
  /**
   * Event emitted when the input field loses focus and the value has changed @since 4.4.0
   */
  ixChange: EventEmitter<IxNumberInputCustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['advanced', 'ariaLabelChevronLeftIconButton', 'ariaLabelChevronRightIconButton', 'ariaLabelPageSelection', 'count', 'hideItemCount', 'i18nItems', 'i18nOf', 'i18nPage', 'itemCount', 'itemCountOptions', 'selectedPage']
})
@Component({
  selector: 'ix-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['advanced', 'ariaLabelChevronLeftIconButton', 'ariaLabelChevronRightIconButton', 'ariaLabelPageSelection', 'count', 'hideItemCount', 'i18nItems', 'i18nOf', 'i18nPage', 'itemCount', 'itemCountOptions', 'selectedPage'],
  outputs: ['pageSelected', 'itemCountChanged'],
  standalone: false
})
export class IxPagination {
  protected el: HTMLIxPaginationElement;
  @Output() pageSelected = new EventEmitter<IxPaginationCustomEvent<number>>();
  @Output() itemCountChanged = new EventEmitter<IxPaginationCustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxPaginationCustomEvent } from '@siemens/ix';

export declare interface IxPagination extends Components.IxPagination {
  /**
   * Page selection event
   */
  pageSelected: EventEmitter<IxPaginationCustomEvent<number>>;
  /**
   * Item count change event
   */
  itemCountChanged: EventEmitter<IxPaginationCustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['ariaLabelCollapseCloseButton', 'ariaLabelIcon', 'borderless', 'closeOnClickOutside', 'composition', 'expanded', 'heading', 'hideOnCollapse', 'icon', 'noPadding', 'size', 'variant']
})
@Component({
  selector: 'ix-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCollapseCloseButton', 'ariaLabelIcon', 'borderless', 'closeOnClickOutside', 'composition', 'expanded', 'heading', 'hideOnCollapse', 'icon', 'noPadding', 'size', 'variant'],
  outputs: ['expandedChanged', 'variantChanged', 'borderlessChanged'],
  standalone: false
})
export class IxPane {
  protected el: HTMLIxPaneElement;
  @Output() expandedChanged = new EventEmitter<IxPaneCustomEvent<IIxPaneExpandedChangedEvent>>();
  @Output() variantChanged = new EventEmitter<IxPaneCustomEvent<IIxPaneVariantChangedEvent>>();
  @Output() borderlessChanged = new EventEmitter<IxPaneCustomEvent<IIxPaneBorderlessChangedEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxPaneCustomEvent } from '@siemens/ix';
import type { ExpandedChangedEvent as IIxPaneExpandedChangedEvent } from '@siemens/ix';
import type { VariantChangedEvent as IIxPaneVariantChangedEvent } from '@siemens/ix';
import type { BorderlessChangedEvent as IIxPaneBorderlessChangedEvent } from '@siemens/ix';

export declare interface IxPane extends Components.IxPane {
  /**
   * This event is triggered when the pane either expands or contracts
   */
  expandedChanged: EventEmitter<IxPaneCustomEvent<IIxPaneExpandedChangedEvent>>;
  /**
   * This event is triggered when the variant of the pane is changed
   */
  variantChanged: EventEmitter<IxPaneCustomEvent<IIxPaneVariantChangedEvent>>;
  /**
   * This event is triggered when the variant of the pane is changed
   */
  borderlessChanged: EventEmitter<IxPaneCustomEvent<IIxPaneBorderlessChangedEvent>>;
}


@ProxyCmp({
  inputs: ['borderless', 'layout', 'variant']
})
@Component({
  selector: 'ix-pane-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['borderless', 'layout', 'variant'],
  standalone: false
})
export class IxPaneLayout {
  protected el: HTMLIxPaneLayoutElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPaneLayout extends Components.IxPaneLayout {}


@ProxyCmp({
  inputs: ['alignLeft', 'ariaLabelIcon', 'background', 'icon', 'outline', 'pillColor', 'tooltipText', 'variant']
})
@Component({
  selector: 'ix-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignLeft', 'ariaLabelIcon', 'background', 'icon', 'outline', 'pillColor', 'tooltipText', 'variant'],
  standalone: false
})
export class IxPill {
  protected el: HTMLIxPillElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPill extends Components.IxPill {}


@ProxyCmp({
  inputs: ['closeOnClickOutside', 'hasSpike', 'placement', 'show', 'trigger', 'triggerMode'],
  methods: ['showPopover', 'hidePopover']
})
@Component({
  selector: 'ix-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeOnClickOutside', 'hasSpike', 'placement', 'show', 'trigger', 'triggerMode'],
  outputs: ['showChange', 'showChanged'],
  standalone: false
})
export class IxPopover {
  protected el: HTMLIxPopoverElement;
  @Output() showChange = new EventEmitter<IxPopoverCustomEvent<boolean>>();
  @Output() showChanged = new EventEmitter<IxPopoverCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxPopoverCustomEvent } from '@siemens/ix';

export declare interface IxPopover extends Components.IxPopover {
  /**
   * Fires before visibility changes. Cancel to prevent. @since 5.1.0
   */
  showChange: EventEmitter<IxPopoverCustomEvent<boolean>>;
  /**
   * Fires after visibility has changed @since 5.1.0
   */
  showChanged: EventEmitter<IxPopoverCustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['noPadding']
})
@Component({
  selector: 'ix-popover-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['noPadding'],
  standalone: false
})
export class IxPopoverContent {
  protected el: HTMLIxPopoverContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPopoverContent extends Components.IxPopoverContent {}


@ProxyCmp({
  inputs: ['alignment']
})
@Component({
  selector: 'ix-popover-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment'],
  standalone: false
})
export class IxPopoverFooter {
  protected el: HTMLIxPopoverFooterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPopoverFooter extends Components.IxPopoverFooter {}


@ProxyCmp({
  inputs: ['ariaLabelCloseIconButton', 'hideClose', 'icon', 'iconColor']
})
@Component({
  selector: 'ix-popover-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseIconButton', 'hideClose', 'icon', 'iconColor'],
  outputs: ['closeClick'],
  standalone: false
})
export class IxPopoverHeader {
  protected el: HTMLIxPopoverHeaderElement;
  @Output() closeClick = new EventEmitter<IxPopoverHeaderCustomEvent<MouseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxPopoverHeaderCustomEvent } from '@siemens/ix';

export declare interface IxPopoverHeader extends Components.IxPopoverHeader {
  /**
   * Fires when close button is clicked.
Cancel to prevent closing. @since 5.1.0
   */
  closeClick: EventEmitter<IxPopoverHeaderCustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['image', 'imageAlt']
})
@Component({
  selector: 'ix-popover-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['image', 'imageAlt'],
  standalone: false
})
export class IxPopoverImage {
  protected el: HTMLIxPopoverImageElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPopoverImage extends Components.IxPopoverImage {}


@ProxyCmp({
  inputs: ['helperText', 'label', 'max', 'min', 'showTextAsTooltip', 'size', 'status', 'textAlignment', 'type', 'value']
})
@Component({
  selector: 'ix-progress-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helperText', 'label', 'max', 'min', 'showTextAsTooltip', 'size', 'status', 'textAlignment', 'type', 'value'],
  standalone: false
})
export class IxProgressIndicator {
  protected el: HTMLIxProgressIndicatorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxProgressIndicator extends Components.IxProgressIndicator {}


@ProxyCmp({
  inputs: ['ariaLabelIcon', 'expanded', 'heading', 'icon', 'notification', 'passive', 'subheading', 'variant']
})
@Component({
  selector: 'ix-push-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIcon', 'expanded', 'heading', 'icon', 'notification', 'passive', 'subheading', 'variant'],
  standalone: false
})
export class IxPushCard {
  protected el: HTMLIxPushCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPushCard extends Components.IxPushCard {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'label', 'name', 'required', 'value']
})
@Component({
  selector: 'ix-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'label', 'name', 'required', 'value'],
  outputs: ['checkedChange', 'valueChange', 'ixBlur'],
  standalone: false
})
export class IxRadio {
  protected el: HTMLIxRadioElement;
  @Output() checkedChange = new EventEmitter<IxRadioCustomEvent<boolean>>();
  @Output() valueChange = new EventEmitter<IxRadioCustomEvent<string>>();
  @Output() ixBlur = new EventEmitter<IxRadioCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxRadioCustomEvent } from '@siemens/ix';

export declare interface IxRadio extends Components.IxRadio {
  /**
   * Event emitted when the checked state of the radio changes
   */
  checkedChange: EventEmitter<IxRadioCustomEvent<boolean>>;
  /**
   * Event emitted when the value of the radio changes
   */
  valueChange: EventEmitter<IxRadioCustomEvent<string>>;
  /**
   * Event emitted when the radio is blurred
   */
  ixBlur: EventEmitter<IxRadioCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'value', 'warningText']
})
@Component({
  selector: 'ix-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'value', 'warningText'],
  outputs: ['valueChange'],
  standalone: false
})
export class IxRadioGroup {
  protected el: HTMLIxRadioGroupElement;
  @Output() valueChange = new EventEmitter<IxRadioGroupCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxRadioGroupCustomEvent } from '@siemens/ix';

export declare interface IxRadioGroup extends Components.IxRadioGroup {
  /**
   * Event emitted when the value of the radiobutton group changes
   */
  valueChange: EventEmitter<IxRadioGroupCustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['hideArrow', 'type']
})
@Component({
  selector: 'ix-range-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hideArrow', 'type'],
  standalone: false
})
export class IxRangeField {
  protected el: HTMLIxRangeFieldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxRangeField extends Components.IxRangeField {}


@ProxyCmp({
})
@Component({
  selector: 'ix-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class IxRow {
  protected el: HTMLIxRowElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxRow extends Components.IxRow {}


@ProxyCmp({
  inputs: ['allowClear', 'ariaLabelAddItem', 'ariaLabelClearIconButton', 'collapseMultipleSelection', 'disabled', 'dropdownMaxWidth', 'dropdownWidth', 'editable', 'enableTopLayer', 'helperText', 'hideListHeader', 'i18nAllSelected', 'i18nMoreItems', 'i18nNoMatches', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nRemoveSelectedItem', 'i18nSelectListHeader', 'infoText', 'invalidText', 'label', 'mode', 'name', 'readonly', 'required', 'showTextAsTooltip', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'focusInput']
})
@Component({
  selector: 'ix-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowClear', 'ariaLabelAddItem', 'ariaLabelClearIconButton', 'collapseMultipleSelection', 'disabled', 'dropdownMaxWidth', 'dropdownWidth', 'editable', 'enableTopLayer', 'helperText', 'hideListHeader', 'i18nAllSelected', 'i18nMoreItems', 'i18nNoMatches', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nRemoveSelectedItem', 'i18nSelectListHeader', 'infoText', 'invalidText', 'label', 'mode', 'name', 'readonly', 'required', 'showTextAsTooltip', 'validText', 'value', 'warningText'],
  outputs: ['valueChange', 'inputChange', 'addItem', 'ixBlur'],
  standalone: false
})
export class IxSelect {
  protected el: HTMLIxSelectElement;
  @Output() valueChange = new EventEmitter<IxSelectCustomEvent<string | string[]>>();
  @Output() inputChange = new EventEmitter<IxSelectCustomEvent<string>>();
  @Output() addItem = new EventEmitter<IxSelectCustomEvent<string>>();
  @Output() ixBlur = new EventEmitter<IxSelectCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxSelectCustomEvent } from '@siemens/ix';

export declare interface IxSelect extends Components.IxSelect {
  /**
   * Value changed
   */
  valueChange: EventEmitter<IxSelectCustomEvent<string | string[]>>;
  /**
   * Event dispatched whenever the text input changes.
   */
  inputChange: EventEmitter<IxSelectCustomEvent<string>>;
  /**
   * Item added to selection
   */
  addItem: EventEmitter<IxSelectCustomEvent<string>>;
  /**
   * Blur input
   */
  ixBlur: EventEmitter<IxSelectCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'selected', 'value']
})
@Component({
  selector: 'ix-select-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'selected', { name: 'value', required: true }],
  outputs: ['itemClick'],
  standalone: false
})
export class IxSelectItem {
  protected el: HTMLIxSelectItemElement;
  @Output() itemClick = new EventEmitter<IxSelectItemCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxSelectItemCustomEvent } from '@siemens/ix';

export declare interface IxSelectItem extends Components.IxSelectItem {
  /**
   * Item clicked
   */
  itemClick: EventEmitter<IxSelectItemCustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['disabled', 'helperText', 'infoText', 'invalidText', 'label', 'marker', 'max', 'min', 'showTextAsTooltip', 'step', 'trace', 'traceReference', 'validText', 'value', 'warningText']
})
@Component({
  selector: 'ix-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'helperText', 'infoText', 'invalidText', 'label', 'marker', 'max', 'min', 'showTextAsTooltip', 'step', 'trace', 'traceReference', 'validText', 'value', 'warningText'],
  outputs: ['valueChange'],
  standalone: false
})
export class IxSlider {
  protected el: HTMLIxSliderElement;
  @Output() valueChange = new EventEmitter<IxSliderCustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxSliderCustomEvent } from '@siemens/ix';

export declare interface IxSlider extends Components.IxSlider {
  /**
   * Will emit the value when it changes
   */
  valueChange: EventEmitter<IxSliderCustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['size', 'variant']
})
@Component({
  selector: 'ix-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'variant'],
  standalone: false
})
export class IxSpinner {
  protected el: HTMLIxSpinnerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxSpinner extends Components.IxSpinner {}


@ProxyCmp({
  inputs: ['ariaLabelButton', 'ariaLabelSplitIconButton', 'closeBehavior', 'disableButton', 'disableDropdownButton', 'disabled', 'enableTopLayer', 'icon', 'label', 'splitIcon', 'variant']
})
@Component({
  selector: 'ix-split-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'ariaLabelSplitIconButton', 'closeBehavior', 'disableButton', 'disableDropdownButton', 'disabled', 'enableTopLayer', 'icon', 'label', 'splitIcon', 'variant'],
  outputs: ['buttonClick'],
  standalone: false
})
export class IxSplitButton {
  protected el: HTMLIxSplitButtonElement;
  @Output() buttonClick = new EventEmitter<IxSplitButtonCustomEvent<MouseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxSplitButtonCustomEvent } from '@siemens/ix';

export declare interface IxSplitButton extends Components.IxSplitButton {
  /**
   * Button clicked
   */
  buttonClick: EventEmitter<IxSplitButtonCustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['ariaLabelCloseButton', 'closable', 'counter', 'disabled', 'icon', 'label', 'selected', 'tabKey']
})
@Component({
  selector: 'ix-tab-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseButton', 'closable', 'counter', 'disabled', 'icon', 'label', 'selected', { name: 'tabKey', required: true }],
  outputs: ['tabClick', 'tabClose'],
  standalone: false
})
export class IxTabItem {
  protected el: HTMLIxTabItemElement;
  @Output() tabClick = new EventEmitter<IxTabItemCustomEvent<IIxTabItemTabClickDetail>>();
  @Output() tabClose = new EventEmitter<IxTabItemCustomEvent<IIxTabItemTabClickDetail>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxTabItemCustomEvent } from '@siemens/ix';
import type { TabClickDetail as IIxTabItemTabClickDetail } from '@siemens/ix';

export declare interface IxTabItem extends Components.IxTabItem {
  /**
   * Emitted when the tab is clicked.
   */
  tabClick: EventEmitter<IxTabItemCustomEvent<IIxTabItemTabClickDetail>>;
  /**
   * Emitted when the tab's close button is clicked.
   */
  tabClose: EventEmitter<IxTabItemCustomEvent<IIxTabItemTabClickDetail>>;
}


@ProxyCmp({
  inputs: ['activeTabKey', 'ariaLabelMoreTabs', 'keyboardNavigation', 'layout', 'placement', 'rounded', 'small']
})
@Component({
  selector: 'ix-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabKey', 'ariaLabelMoreTabs', 'keyboardNavigation', 'layout', 'placement', 'rounded', 'small'],
  outputs: ['tabChange', 'tabClose'],
  standalone: false
})
export class IxTabs {
  protected el: HTMLIxTabsElement;
  @Output() tabChange = new EventEmitter<IxTabsCustomEvent<string | undefined>>();
  @Output() tabClose = new EventEmitter<IxTabsCustomEvent<string | undefined>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxTabsCustomEvent } from '@siemens/ix';

export declare interface IxTabs extends Components.IxTabs {
  /**
   * Tab selection event. Event detail contains the new active tab key. @since 5.0.0
   */
  tabChange: EventEmitter<IxTabsCustomEvent<string | undefined>>;
  /**
   * Tab close event. Event detail contains the closed tab key. @since 5.0.0
   */
  tabClose: EventEmitter<IxTabsCustomEvent<string | undefined>>;
}


@ProxyCmp({
  inputs: ['disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'resizeBehavior', 'showTextAsTooltip', 'textareaCols', 'textareaHeight', 'textareaRows', 'textareaWidth', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'focusInput']
})
@Component({
  selector: 'ix-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'resizeBehavior', 'showTextAsTooltip', 'textareaCols', 'textareaHeight', 'textareaRows', 'textareaWidth', 'validText', 'value', 'warningText'],
  outputs: ['valueChange', 'validityStateChange', 'ixBlur', 'ixChange'],
  standalone: false
})
export class IxTextarea {
  protected el: HTMLIxTextareaElement;
  @Output() valueChange = new EventEmitter<IxTextareaCustomEvent<string>>();
  @Output() validityStateChange = new EventEmitter<IxTextareaCustomEvent<ValidityState>>();
  @Output() ixBlur = new EventEmitter<IxTextareaCustomEvent<void>>();
  @Output() ixChange = new EventEmitter<IxTextareaCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxTextareaCustomEvent } from '@siemens/ix';

export declare interface IxTextarea extends Components.IxTextarea {
  /**
   * Event emitted when the value of the textarea field changes.
   */
  valueChange: EventEmitter<IxTextareaCustomEvent<string>>;
  /**
   * Event emitted when the validity state of the textarea field changes.
   */
  validityStateChange: EventEmitter<IxTextareaCustomEvent<ValidityState>>;
  /**
   * Event emitted when the textarea field loses focus.
   */
  ixBlur: EventEmitter<IxTextareaCustomEvent<void>>;
  /**
   * Event emitted when the textarea field loses focus and the value has changed. @since 4.4.0
   */
  ixChange: EventEmitter<IxTextareaCustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'ix-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
  standalone: false
})
export class IxTile {
  protected el: HTMLIxTileElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTile extends Components.IxTile {}


@ProxyCmp({
  inputs: ['ariaLabelTimeToggleButton', 'disabled', 'enableTopLayer', 'format', 'helperText', 'hideHeader', 'hourInterval', 'i18nErrorTimeUnparsable', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'i18nSelectTime', 'i18nTime', 'infoText', 'invalidText', 'label', 'maxTime', 'millisecondInterval', 'minTime', 'minuteInterval', 'name', 'placeholder', 'readonly', 'required', 'secondInterval', 'showTextAsTooltip', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'focusInput']
})
@Component({
  selector: 'ix-time-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelTimeToggleButton', 'disabled', 'enableTopLayer', 'format', 'helperText', 'hideHeader', 'hourInterval', 'i18nErrorTimeUnparsable', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'i18nSelectTime', 'i18nTime', 'infoText', 'invalidText', 'label', 'maxTime', 'millisecondInterval', 'minTime', 'minuteInterval', 'name', 'placeholder', 'readonly', 'required', 'secondInterval', 'showTextAsTooltip', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText'],
  outputs: ['valueChange', 'validityStateChange', 'ixChange'],
  standalone: false
})
export class IxTimeInput {
  protected el: HTMLIxTimeInputElement;
  @Output() valueChange = new EventEmitter<IxTimeInputCustomEvent<string>>();
  @Output() validityStateChange = new EventEmitter<IxTimeInputCustomEvent<IIxTimeInputTimeInputValidityState>>();
  @Output() ixChange = new EventEmitter<IxTimeInputCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxTimeInputCustomEvent } from '@siemens/ix';
import type { TimeInputValidityState as IIxTimeInputTimeInputValidityState } from '@siemens/ix';

export declare interface IxTimeInput extends Components.IxTimeInput {
  /**
   * Value change event. Emitted when the input value changes.
   */
  valueChange: EventEmitter<IxTimeInputCustomEvent<string>>;
  /**
   * Validation state change event. Emitted when the validation state changes.
   */
  validityStateChange: EventEmitter<IxTimeInputCustomEvent<IIxTimeInputTimeInputValidityState>>;
  /**
   * Change event. Emitted when the time input loses focus and the value has changed. @since 4.4.0
   */
  ixChange: EventEmitter<IxTimeInputCustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['corners', 'embedded', 'format', 'hideHeader', 'hourInterval', 'i18nConfirmTime', 'i18nHeader', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'maxTime', 'millisecondInterval', 'minTime', 'minuteInterval', 'secondInterval', 'time'],
  methods: ['getCurrentTime']
})
@Component({
  selector: 'ix-time-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['corners', 'embedded', 'format', 'hideHeader', 'hourInterval', 'i18nConfirmTime', 'i18nHeader', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'maxTime', 'millisecondInterval', 'minTime', 'minuteInterval', 'secondInterval', 'time'],
  outputs: ['timeSelect', 'timeChange'],
  standalone: false
})
export class IxTimePicker {
  protected el: HTMLIxTimePickerElement;
  @Output() timeSelect = new EventEmitter<IxTimePickerCustomEvent<string>>();
  @Output() timeChange = new EventEmitter<IxTimePickerCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxTimePickerCustomEvent } from '@siemens/ix';

export declare interface IxTimePicker extends Components.IxTimePicker {
  /**
   * Time event. Emitted when the user confirms the selected time.
   */
  timeSelect: EventEmitter<IxTimePickerCustomEvent<string>>;
  /**
   * Time change event. Emitted when the selected time changes while interacting with the picker.
   */
  timeChange: EventEmitter<IxTimePickerCustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['ariaLabelCloseIconButton', 'autoCloseDelay', 'hideIcon', 'icon', 'iconColor', 'preventAutoClose', 'toastTitle', 'type'],
  methods: ['pause', 'resume', 'isPaused']
})
@Component({
  selector: 'ix-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseIconButton', 'autoCloseDelay', 'hideIcon', 'icon', 'iconColor', 'preventAutoClose', 'toastTitle', 'type'],
  outputs: ['closeToast'],
  standalone: false
})
export class IxToast {
  protected el: HTMLIxToastElement;
  @Output() closeToast = new EventEmitter<IxToastCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxToastCustomEvent } from '@siemens/ix';

export declare interface IxToast extends Components.IxToast {
  /**
   * Toast closed
   */
  closeToast: EventEmitter<IxToastCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['position'],
  methods: ['showToast']
})
@Component({
  selector: 'ix-toast-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['position'],
  standalone: false
})
export class IxToastContainer {
  protected el: HTMLIxToastContainerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxToastContainer extends Components.IxToastContainer {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'hideText', 'indeterminate', 'name', 'required', 'textIndeterminate', 'textOff', 'textOn', 'value']
})
@Component({
  selector: 'ix-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'hideText', 'indeterminate', 'name', 'required', 'textIndeterminate', 'textOff', 'textOn', 'value'],
  outputs: ['checkedChange', 'ixBlur'],
  standalone: false
})
export class IxToggle {
  protected el: HTMLIxToggleElement;
  @Output() checkedChange = new EventEmitter<IxToggleCustomEvent<boolean>>();
  @Output() ixBlur = new EventEmitter<IxToggleCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxToggleCustomEvent } from '@siemens/ix';

export declare interface IxToggle extends Components.IxToggle {
  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  checkedChange: EventEmitter<IxToggleCustomEvent<boolean>>;
  /**
   * An event will be dispatched each time the toggle is blurred.
   */
  ixBlur: EventEmitter<IxToggleCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'icon', 'iconRight', 'loading', 'pressed', 'variant']
})
@Component({
  selector: 'ix-toggle-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'icon', 'iconRight', 'loading', 'pressed', 'variant'],
  outputs: ['pressedChange'],
  standalone: false
})
export class IxToggleButton {
  protected el: HTMLIxToggleButtonElement;
  @Output() pressedChange = new EventEmitter<IxToggleButtonCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxToggleButtonCustomEvent } from '@siemens/ix';

export declare interface IxToggleButton extends Components.IxToggleButton {
  /**
   * Pressed change event
   */
  pressedChange: EventEmitter<IxToggleButtonCustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['for', 'interactive', 'placement', 'titleContent']
})
@Component({
  selector: 'ix-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['for', 'interactive', 'placement', 'titleContent'],
  standalone: false
})
export class IxTooltip {
  protected el: HTMLIxTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTooltip extends Components.IxTooltip {}


@ProxyCmp({
  inputs: ['ariaLabelChevronIcon', 'context', 'disabled', 'hasChildren', 'text']
})
@Component({
  selector: 'ix-tree-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelChevronIcon', 'context', 'disabled', 'hasChildren', 'text'],
  outputs: ['toggle', 'itemClick'],
  standalone: false
})
export class IxTreeItem {
  protected el: HTMLIxTreeItemElement;
  @Output() toggle = new EventEmitter<IxTreeItemCustomEvent<void>>();
  @Output() itemClick = new EventEmitter<IxTreeItemCustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxTreeItemCustomEvent } from '@siemens/ix';

export declare interface IxTreeItem extends Components.IxTreeItem {
  /**
   * Expand/Collapsed toggled
   */
  toggle: EventEmitter<IxTreeItemCustomEvent<void>>;
  /**
   * Click on item not on the expand/collapse icon
   */
  itemClick: EventEmitter<IxTreeItemCustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['bold', 'format', 'textColor', 'textDecoration']
})
@Component({
  selector: 'ix-typography',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bold', 'format', 'textColor', 'textDecoration'],
  standalone: false
})
export class IxTypography {
  protected el: HTMLIxTypographyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTypography extends Components.IxTypography {}


@ProxyCmp({
  inputs: ['accept', 'directoryUpload', 'disabled', 'i18nUploadDisabled', 'i18nUploadFile', 'loadingText', 'multiline', 'multiple', 'selectFileText', 'state', 'uploadFailedText', 'uploadSuccessText'],
  methods: ['setFilesToUpload']
})
@Component({
  selector: 'ix-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'directoryUpload', 'disabled', 'i18nUploadDisabled', 'i18nUploadFile', 'loadingText', 'multiline', 'multiple', 'selectFileText', 'state', 'uploadFailedText', 'uploadSuccessText'],
  outputs: ['filesChanged'],
  standalone: false
})
export class IxUpload {
  protected el: HTMLIxUploadElement;
  @Output() filesChanged = new EventEmitter<IxUploadCustomEvent<Array<File>>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxUploadCustomEvent } from '@siemens/ix';

export declare interface IxUpload extends Components.IxUpload {
  /**
   * You get an array of Files after drop-action or browse action is finished
   */
  filesChanged: EventEmitter<IxUploadCustomEvent<Array<File>>>;
}


@ProxyCmp({
  inputs: ['clickable', 'disabled', 'selected', 'status', 'vertical']
})
@Component({
  selector: 'ix-workflow-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickable', 'disabled', 'selected', 'status', 'vertical'],
  standalone: false
})
export class IxWorkflowStep {
  protected el: HTMLIxWorkflowStepElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxWorkflowStep extends Components.IxWorkflowStep {}


@ProxyCmp({
  inputs: ['clickable', 'selectedIndex', 'vertical']
})
@Component({
  selector: 'ix-workflow-steps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickable', 'selectedIndex', 'vertical'],
  outputs: ['stepSelected'],
  standalone: false
})
export class IxWorkflowSteps {
  protected el: HTMLIxWorkflowStepsElement;
  @Output() stepSelected = new EventEmitter<IxWorkflowStepsCustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { IxWorkflowStepsCustomEvent } from '@siemens/ix';

export declare interface IxWorkflowSteps extends Components.IxWorkflowSteps {
  /**
   * On step selected event
   */
  stepSelected: EventEmitter<IxWorkflowStepsCustomEvent<number>>;
}


