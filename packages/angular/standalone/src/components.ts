/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@siemens/ix/components';

import { defineCustomElement as defineIxActionCard } from '@siemens/ix/components/ix-action-card.js';
import { defineCustomElement as defineIxApplication } from '@siemens/ix/components/ix-application.js';
import { defineCustomElement as defineIxApplicationHeader } from '@siemens/ix/components/ix-application-header.js';
import { defineCustomElement as defineIxAvatar } from '@siemens/ix/components/ix-avatar.js';
import { defineCustomElement as defineIxBlind } from '@siemens/ix/components/ix-blind.js';
import { defineCustomElement as defineIxBreadcrumb } from '@siemens/ix/components/ix-breadcrumb.js';
import { defineCustomElement as defineIxBreadcrumbItem } from '@siemens/ix/components/ix-breadcrumb-item.js';
import { defineCustomElement as defineIxButton } from '@siemens/ix/components/ix-button.js';
import { defineCustomElement as defineIxCard } from '@siemens/ix/components/ix-card.js';
import { defineCustomElement as defineIxCardAccordion } from '@siemens/ix/components/ix-card-accordion.js';
import { defineCustomElement as defineIxCardContent } from '@siemens/ix/components/ix-card-content.js';
import { defineCustomElement as defineIxCardList } from '@siemens/ix/components/ix-card-list.js';
import { defineCustomElement as defineIxCardTitle } from '@siemens/ix/components/ix-card-title.js';
import { defineCustomElement as defineIxCategoryFilter } from '@siemens/ix/components/ix-category-filter.js';
import { defineCustomElement as defineIxCheckbox } from '@siemens/ix/components/ix-checkbox.js';
import { defineCustomElement as defineIxCheckboxGroup } from '@siemens/ix/components/ix-checkbox-group.js';
import { defineCustomElement as defineIxChip } from '@siemens/ix/components/ix-chip.js';
import { defineCustomElement as defineIxCol } from '@siemens/ix/components/ix-col.js';
import { defineCustomElement as defineIxContent } from '@siemens/ix/components/ix-content.js';
import { defineCustomElement as defineIxContentHeader } from '@siemens/ix/components/ix-content-header.js';
import { defineCustomElement as defineIxCustomField } from '@siemens/ix/components/ix-custom-field.js';
import { defineCustomElement as defineIxDateDropdown } from '@siemens/ix/components/ix-date-dropdown.js';
import { defineCustomElement as defineIxDateInput } from '@siemens/ix/components/ix-date-input.js';
import { defineCustomElement as defineIxDatePicker } from '@siemens/ix/components/ix-date-picker.js';
import { defineCustomElement as defineIxDatetimePicker } from '@siemens/ix/components/ix-datetime-picker.js';
import { defineCustomElement as defineIxDivider } from '@siemens/ix/components/ix-divider.js';
import { defineCustomElement as defineIxDrawer } from '@siemens/ix/components/ix-drawer.js';
import { defineCustomElement as defineIxDropdown } from '@siemens/ix/components/ix-dropdown.js';
import { defineCustomElement as defineIxDropdownButton } from '@siemens/ix/components/ix-dropdown-button.js';
import { defineCustomElement as defineIxDropdownHeader } from '@siemens/ix/components/ix-dropdown-header.js';
import { defineCustomElement as defineIxDropdownItem } from '@siemens/ix/components/ix-dropdown-item.js';
import { defineCustomElement as defineIxDropdownQuickActions } from '@siemens/ix/components/ix-dropdown-quick-actions.js';
import { defineCustomElement as defineIxEmptyState } from '@siemens/ix/components/ix-empty-state.js';
import { defineCustomElement as defineIxEventList } from '@siemens/ix/components/ix-event-list.js';
import { defineCustomElement as defineIxEventListItem } from '@siemens/ix/components/ix-event-list-item.js';
import { defineCustomElement as defineIxExpandingSearch } from '@siemens/ix/components/ix-expanding-search.js';
import { defineCustomElement as defineIxFieldLabel } from '@siemens/ix/components/ix-field-label.js';
import { defineCustomElement as defineIxFilterChip } from '@siemens/ix/components/ix-filter-chip.js';
import { defineCustomElement as defineIxFlipTile } from '@siemens/ix/components/ix-flip-tile.js';
import { defineCustomElement as defineIxFlipTileContent } from '@siemens/ix/components/ix-flip-tile-content.js';
import { defineCustomElement as defineIxGroup } from '@siemens/ix/components/ix-group.js';
import { defineCustomElement as defineIxGroupContextMenu } from '@siemens/ix/components/ix-group-context-menu.js';
import { defineCustomElement as defineIxGroupItem } from '@siemens/ix/components/ix-group-item.js';
import { defineCustomElement as defineIxHelperText } from '@siemens/ix/components/ix-helper-text.js';
import { defineCustomElement as defineIxIconButton } from '@siemens/ix/components/ix-icon-button.js';
import { defineCustomElement as defineIxIconToggleButton } from '@siemens/ix/components/ix-icon-toggle-button.js';
import { defineCustomElement as defineIxInput } from '@siemens/ix/components/ix-input.js';
import { defineCustomElement as defineIxInputGroup } from '@siemens/ix/components/ix-input-group.js';
import { defineCustomElement as defineIxKeyValue } from '@siemens/ix/components/ix-key-value.js';
import { defineCustomElement as defineIxKeyValueList } from '@siemens/ix/components/ix-key-value-list.js';
import { defineCustomElement as defineIxKpi } from '@siemens/ix/components/ix-kpi.js';
import { defineCustomElement as defineIxLayoutAuto } from '@siemens/ix/components/ix-layout-auto.js';
import { defineCustomElement as defineIxLayoutGrid } from '@siemens/ix/components/ix-layout-grid.js';
import { defineCustomElement as defineIxLinkButton } from '@siemens/ix/components/ix-link-button.js';
import { defineCustomElement as defineIxMenu } from '@siemens/ix/components/ix-menu.js';
import { defineCustomElement as defineIxMenuAbout } from '@siemens/ix/components/ix-menu-about.js';
import { defineCustomElement as defineIxMenuAboutItem } from '@siemens/ix/components/ix-menu-about-item.js';
import { defineCustomElement as defineIxMenuAboutNews } from '@siemens/ix/components/ix-menu-about-news.js';
import { defineCustomElement as defineIxMenuAvatar } from '@siemens/ix/components/ix-menu-avatar.js';
import { defineCustomElement as defineIxMenuAvatarItem } from '@siemens/ix/components/ix-menu-avatar-item.js';
import { defineCustomElement as defineIxMenuCategory } from '@siemens/ix/components/ix-menu-category.js';
import { defineCustomElement as defineIxMenuItem } from '@siemens/ix/components/ix-menu-item.js';
import { defineCustomElement as defineIxMenuSettings } from '@siemens/ix/components/ix-menu-settings.js';
import { defineCustomElement as defineIxMenuSettingsItem } from '@siemens/ix/components/ix-menu-settings-item.js';
import { defineCustomElement as defineIxMessageBar } from '@siemens/ix/components/ix-message-bar.js';
import { defineCustomElement as defineIxModal } from '@siemens/ix/components/ix-modal.js';
import { defineCustomElement as defineIxModalContent } from '@siemens/ix/components/ix-modal-content.js';
import { defineCustomElement as defineIxModalFooter } from '@siemens/ix/components/ix-modal-footer.js';
import { defineCustomElement as defineIxModalHeader } from '@siemens/ix/components/ix-modal-header.js';
import { defineCustomElement as defineIxNumberInput } from '@siemens/ix/components/ix-number-input.js';
import { defineCustomElement as defineIxPagination } from '@siemens/ix/components/ix-pagination.js';
import { defineCustomElement as defineIxPane } from '@siemens/ix/components/ix-pane.js';
import { defineCustomElement as defineIxPaneLayout } from '@siemens/ix/components/ix-pane-layout.js';
import { defineCustomElement as defineIxPill } from '@siemens/ix/components/ix-pill.js';
import { defineCustomElement as defineIxProgressIndicator } from '@siemens/ix/components/ix-progress-indicator.js';
import { defineCustomElement as defineIxPushCard } from '@siemens/ix/components/ix-push-card.js';
import { defineCustomElement as defineIxRadio } from '@siemens/ix/components/ix-radio.js';
import { defineCustomElement as defineIxRadioGroup } from '@siemens/ix/components/ix-radio-group.js';
import { defineCustomElement as defineIxRow } from '@siemens/ix/components/ix-row.js';
import { defineCustomElement as defineIxSelect } from '@siemens/ix/components/ix-select.js';
import { defineCustomElement as defineIxSelectItem } from '@siemens/ix/components/ix-select-item.js';
import { defineCustomElement as defineIxSlider } from '@siemens/ix/components/ix-slider.js';
import { defineCustomElement as defineIxSpinner } from '@siemens/ix/components/ix-spinner.js';
import { defineCustomElement as defineIxSplitButton } from '@siemens/ix/components/ix-split-button.js';
import { defineCustomElement as defineIxTabItem } from '@siemens/ix/components/ix-tab-item.js';
import { defineCustomElement as defineIxTabs } from '@siemens/ix/components/ix-tabs.js';
import { defineCustomElement as defineIxTextarea } from '@siemens/ix/components/ix-textarea.js';
import { defineCustomElement as defineIxTile } from '@siemens/ix/components/ix-tile.js';
import { defineCustomElement as defineIxTimeInput } from '@siemens/ix/components/ix-time-input.js';
import { defineCustomElement as defineIxTimePicker } from '@siemens/ix/components/ix-time-picker.js';
import { defineCustomElement as defineIxToast } from '@siemens/ix/components/ix-toast.js';
import { defineCustomElement as defineIxToastContainer } from '@siemens/ix/components/ix-toast-container.js';
import { defineCustomElement as defineIxToggle } from '@siemens/ix/components/ix-toggle.js';
import { defineCustomElement as defineIxToggleButton } from '@siemens/ix/components/ix-toggle-button.js';
import { defineCustomElement as defineIxTooltip } from '@siemens/ix/components/ix-tooltip.js';
import { defineCustomElement as defineIxTreeItem } from '@siemens/ix/components/ix-tree-item.js';
import { defineCustomElement as defineIxTypography } from '@siemens/ix/components/ix-typography.js';
import { defineCustomElement as defineIxUpload } from '@siemens/ix/components/ix-upload.js';
import { defineCustomElement as defineIxValidationTooltip } from '@siemens/ix/components/ix-validation-tooltip.js';
import { defineCustomElement as defineIxWorkflowStep } from '@siemens/ix/components/ix-workflow-step.js';
import { defineCustomElement as defineIxWorkflowSteps } from '@siemens/ix/components/ix-workflow-steps.js';
@ProxyCmp({
  defineCustomElementFn: defineIxActionCard,
  inputs: ['ariaLabelCard', 'ariaLabelIcon', 'heading', 'icon', 'selected', 'subheading', 'variant']
})
@Component({
  selector: 'ix-action-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCard', 'ariaLabelIcon', 'heading', 'icon', 'selected', 'subheading', 'variant'],
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
  defineCustomElementFn: defineIxApplication,
  inputs: ['appSwitchConfig', 'breakpoints', 'forceBreakpoint', 'theme', 'themeSystemAppearance']
})
@Component({
  selector: 'ix-application',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appSwitchConfig', 'breakpoints', 'forceBreakpoint', 'theme', 'themeSystemAppearance'],
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
  defineCustomElementFn: defineIxApplicationHeader,
  inputs: ['appIcon', 'appIconAlt', 'appIconOutline', 'ariaLabelAppSwitchIconButton', 'ariaLabelMenuExpandIconButton', 'ariaLabelMoreMenuIconButton', 'companyLogo', 'companyLogoAlt', 'hideBottomBorder', 'name', 'nameSuffix', 'showMenu']
})
@Component({
  selector: 'ix-application-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appIcon', 'appIconAlt', 'appIconOutline', 'ariaLabelAppSwitchIconButton', 'ariaLabelMenuExpandIconButton', 'ariaLabelMoreMenuIconButton', 'companyLogo', 'companyLogoAlt', 'hideBottomBorder', 'name', 'nameSuffix', 'showMenu'],
  outputs: ['menuToggle', 'openAppSwitch'],
})
export class IxApplicationHeader {
  protected el: HTMLIxApplicationHeaderElement;
  @Output() menuToggle = new EventEmitter<CustomEvent<boolean>>();
  @Output() openAppSwitch = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxApplicationHeader extends Components.IxApplicationHeader {
  /**
   * Event emitted when the menu toggle button is clicked
   */
  menuToggle: EventEmitter<CustomEvent<boolean>>;
  /**
   * Event emitted when the app switch button is clicked @since 3.0.0
   */
  openAppSwitch: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxAvatar,
  inputs: ['a11yLabel', 'ariaLabelTooltip', 'extra', 'image', 'initials', 'tooltipText', 'username']
})
@Component({
  selector: 'ix-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['a11yLabel', 'ariaLabelTooltip', 'extra', 'image', 'initials', 'tooltipText', 'username'],
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
  defineCustomElementFn: defineIxBlind,
  inputs: ['collapsed', 'icon', 'label', 'sublabel', 'variant']
})
@Component({
  selector: 'ix-blind',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsed', 'icon', 'label', 'sublabel', 'variant'],
  outputs: ['collapsedChange'],
})
export class IxBlind {
  protected el: HTMLIxBlindElement;
  @Output() collapsedChange = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxBlind extends Components.IxBlind {
  /**
   * Collapsed state changed
   */
  collapsedChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxBreadcrumb,
  inputs: ['ariaLabelPreviousButton', 'nextItems', 'subtle', 'visibleItemCount']
})
@Component({
  selector: 'ix-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelPreviousButton', 'nextItems', 'subtle', 'visibleItemCount'],
  outputs: ['itemClick', 'nextClick'],
})
export class IxBreadcrumb {
  protected el: HTMLIxBreadcrumbElement;
  @Output() itemClick = new EventEmitter<CustomEvent<string>>();
  @Output() nextClick = new EventEmitter<CustomEvent<{ event: UIEvent; item: string }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxBreadcrumb extends Components.IxBreadcrumb {
  /**
   * Crumb item clicked event
   */
  itemClick: EventEmitter<CustomEvent<string>>;
  /**
   * Next item clicked event
   */
  nextClick: EventEmitter<CustomEvent<{ event: UIEvent; item: string }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxBreadcrumbItem,
  inputs: ['ariaLabelButton', 'href', 'icon', 'label', 'rel', 'target']
})
@Component({
  selector: 'ix-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'href', 'icon', 'label', 'rel', 'target'],
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
  defineCustomElementFn: defineIxButton,
  inputs: ['ariaLabelButton', 'disabled', 'form', 'href', 'icon', 'iconRight', 'loading', 'rel', 'target', 'type', 'variant']
})
@Component({
  selector: 'ix-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'disabled', 'form', 'href', 'icon', 'iconRight', 'loading', 'rel', 'target', 'type', 'variant'],
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
  defineCustomElementFn: defineIxCard,
  inputs: ['selected', 'variant']
})
@Component({
  selector: 'ix-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selected', 'variant'],
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
  defineCustomElementFn: defineIxCardAccordion,
  inputs: ['ariaLabelExpandButton', 'collapse', 'variant']
})
@Component({
  selector: 'ix-card-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelExpandButton', 'collapse', 'variant'],
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
  defineCustomElementFn: defineIxCardContent
})
@Component({
  selector: 'ix-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineIxCardList,
  inputs: ['ariaLabelExpandButton', 'collapse', 'hideShowAll', 'i18nMoreCards', 'i18nShowAll', 'label', 'listStyle', 'showAllCount', 'suppressOverflowHandling']
})
@Component({
  selector: 'ix-card-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelExpandButton', 'collapse', 'hideShowAll', 'i18nMoreCards', 'i18nShowAll', 'label', 'listStyle', 'showAllCount', 'suppressOverflowHandling'],
  outputs: ['collapseChanged', 'showAllClick', 'showMoreCardClick'],
})
export class IxCardList {
  protected el: HTMLIxCardListElement;
  @Output() collapseChanged = new EventEmitter<CustomEvent<boolean>>();
  @Output() showAllClick = new EventEmitter<CustomEvent<{ nativeEvent: MouseEvent; }>>();
  @Output() showMoreCardClick = new EventEmitter<CustomEvent<{ nativeEvent: MouseEvent; }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCardList extends Components.IxCardList {
  /**
   * Fire event when the collapse state is changed by the user
   */
  collapseChanged: EventEmitter<CustomEvent<boolean>>;
  /**
   * Fire event when the collapse state is changed by the user
   */
  showAllClick: EventEmitter<CustomEvent<{ nativeEvent: MouseEvent; }>>;
  /**
   * Fire event when the show more card is clicked.
   */
  showMoreCardClick: EventEmitter<CustomEvent<{ nativeEvent: MouseEvent; }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxCardTitle
})
@Component({
  selector: 'ix-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineIxCategoryFilter,
  inputs: ['ariaLabelFilterInput', 'ariaLabelOperatorButton', 'ariaLabelResetButton', 'categories', 'disabled', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'readonly', 'staticOperator', 'suggestions', 'uniqueCategories']
})
@Component({
  selector: 'ix-category-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelFilterInput', 'ariaLabelOperatorButton', 'ariaLabelResetButton', 'categories', 'disabled', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'readonly', 'staticOperator', 'suggestions', 'uniqueCategories'],
  outputs: ['categoryChanged', 'inputChanged', 'filterChanged', 'filterCleared'],
})
export class IxCategoryFilter {
  protected el: HTMLIxCategoryFilterElement;
  @Output() categoryChanged = new EventEmitter<CustomEvent<string>>();
  @Output() inputChanged = new EventEmitter<CustomEvent<IIxCategoryFilterInputState>>();
  @Output() filterChanged = new EventEmitter<CustomEvent<IIxCategoryFilterFilterState>>();
  @Output() filterCleared = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { InputState as IIxCategoryFilterInputState } from '@siemens/ix/components';
import type { FilterState as IIxCategoryFilterFilterState } from '@siemens/ix/components';

export declare interface IxCategoryFilter extends Components.IxCategoryFilter {
  /**
   * Event dispatched whenever a category gets selected in the dropdown
   */
  categoryChanged: EventEmitter<CustomEvent<string>>;
  /**
   * Event dispatched whenever the text input changes.
   */
  inputChanged: EventEmitter<CustomEvent<IIxCategoryFilterInputState>>;
  /**
   * Event dispatched whenever the filter state changes.
   */
  filterChanged: EventEmitter<CustomEvent<IIxCategoryFilterFilterState>>;
  /**
   * Event dispatched whenever the filter gets cleared.
   */
  filterCleared: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxCheckbox,
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'name', 'required', 'value']
})
@Component({
  selector: 'ix-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'name', 'required', 'value'],
  outputs: ['checkedChange', 'valueChange', 'ixBlur'],
})
export class IxCheckbox {
  protected el: HTMLIxCheckboxElement;
  @Output() checkedChange = new EventEmitter<CustomEvent<boolean>>();
  @Output() valueChange = new EventEmitter<CustomEvent<string>>();
  @Output() ixBlur = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCheckbox extends Components.IxCheckbox {
  /**
   * Event emitted when the checked state of the checkbox changes
   */
  checkedChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * Event emitted when the value of the checkbox changes
   */
  valueChange: EventEmitter<CustomEvent<string>>;
  /**
   * Event emitted when the checkbox is blurred
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxCheckboxGroup,
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'warningText']
})
@Component({
  selector: 'ix-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'warningText'],
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
  defineCustomElementFn: defineIxChip,
  inputs: ['ariaLabelCloseButton', 'background', 'centerContent', 'chipColor', 'closable', 'icon', 'inactive', 'outline', 'tooltipText', 'variant']
})
@Component({
  selector: 'ix-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseButton', 'background', 'centerContent', 'chipColor', 'closable', 'icon', 'inactive', 'outline', 'tooltipText', 'variant'],
  outputs: ['closeChip'],
})
export class IxChip {
  protected el: HTMLIxChipElement;
  @Output() closeChip = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxChip extends Components.IxChip {
  /**
   * Fire event if close button is clicked
   */
  closeChip: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxCol,
  inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm']
})
@Component({
  selector: 'ix-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'sizeLg', 'sizeMd', 'sizeSm'],
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
  defineCustomElementFn: defineIxContent
})
@Component({
  selector: 'ix-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineIxContentHeader,
  inputs: ['hasBackButton', 'headerSubtitle', 'headerTitle', 'variant']
})
@Component({
  selector: 'ix-content-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasBackButton', 'headerSubtitle', 'headerTitle', 'variant'],
  outputs: ['backButtonClick'],
})
export class IxContentHeader {
  protected el: HTMLIxContentHeaderElement;
  @Output() backButtonClick = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxContentHeader extends Components.IxContentHeader {
  /**
   * Triggered when back button is clicked
   */
  backButtonClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxCustomField,
  inputs: ['helperText', 'infoText', 'invalidText', 'label', 'required', 'showTextAsTooltip', 'validText', 'warningText']
})
@Component({
  selector: 'ix-custom-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helperText', 'infoText', 'invalidText', 'label', 'required', 'showTextAsTooltip', 'validText', 'warningText'],
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
  defineCustomElementFn: defineIxDateDropdown,
  inputs: ['ariaLabelDropdownButton', 'customRangeDisabled', 'dateRangeId', 'dateRangeOptions', 'disabled', 'format', 'from', 'i18nCustomItem', 'i18nDone', 'i18nNoRange', 'loading', 'locale', 'maxDate', 'minDate', 'showWeekNumbers', 'singleSelection', 'to', 'variant', 'weekStartIndex'],
  methods: ['getDateRange']
})
@Component({
  selector: 'ix-date-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelDropdownButton', 'customRangeDisabled', 'dateRangeId', 'dateRangeOptions', 'disabled', 'format', 'from', 'i18nCustomItem', 'i18nDone', 'i18nNoRange', 'loading', 'locale', 'maxDate', 'minDate', 'showWeekNumbers', 'singleSelection', 'to', 'variant', 'weekStartIndex'],
  outputs: ['dateRangeChange'],
})
export class IxDateDropdown {
  protected el: HTMLIxDateDropdownElement;
  @Output() dateRangeChange = new EventEmitter<CustomEvent<IIxDateDropdownDateRangeChangeEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { DateRangeChangeEvent as IIxDateDropdownDateRangeChangeEvent } from '@siemens/ix/components';

export declare interface IxDateDropdown extends Components.IxDateDropdown {
  /**
   * EventEmitter for date range change events.

This event is emitted when the date range changes within the component.
The event payload contains information about the selected date range.
   */
  dateRangeChange: EventEmitter<CustomEvent<IIxDateDropdownDateRangeChangeEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxDateInput,
  inputs: ['ariaLabelCalendarButton', 'ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'disabled', 'format', 'helperText', 'i18nErrorDateUnparsable', 'infoText', 'invalidText', 'label', 'locale', 'maxDate', 'minDate', 'name', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'showWeekNumbers', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText', 'weekStartIndex'],
  methods: ['getNativeInputElement', 'focusInput', 'reset']
})
@Component({
  selector: 'ix-date-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCalendarButton', 'ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'disabled', 'format', 'helperText', 'i18nErrorDateUnparsable', 'infoText', 'invalidText', 'label', 'locale', 'maxDate', 'minDate', 'name', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'showWeekNumbers', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText', 'weekStartIndex'],
  outputs: ['valueChange', 'validityStateChange'],
})
export class IxDateInput {
  protected el: HTMLIxDateInputElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string | undefined>>();
  @Output() validityStateChange = new EventEmitter<CustomEvent<IIxDateInputDateInputValidityState>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { DateInputValidityState as IIxDateInputDateInputValidityState } from '@siemens/ix/components';

export declare interface IxDateInput extends Components.IxDateInput {
  /**
   * Input change event.
   */
  valueChange: EventEmitter<CustomEvent<string | undefined>>;
  /**
   * Validation state change event.
   */
  validityStateChange: EventEmitter<CustomEvent<IIxDateInputDateInputValidityState>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxDatePicker,
  inputs: ['ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'corners', 'format', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'showWeekNumbers', 'singleSelection', 'to', 'weekStartIndex'],
  methods: ['getCurrentDate']
})
@Component({
  selector: 'ix-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'corners', 'format', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'showWeekNumbers', 'singleSelection', 'to', 'weekStartIndex'],
  outputs: ['dateChange', 'dateRangeChange', 'dateSelect'],
})
export class IxDatePicker {
  protected el: HTMLIxDatePickerElement;
  @Output() dateChange = new EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>();
  @Output() dateRangeChange = new EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>();
  @Output() dateSelect = new EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { DateChangeEvent as IIxDatePickerDateChangeEvent } from '@siemens/ix/components';

export declare interface IxDatePicker extends Components.IxDatePicker {
  /**
   * Emitted when the date selection changes. The `DateChangeEvent` contains `from` and `to` properties.
The property strings are formatted according to the `format` property and not affected by the `locale` property.
The locale applied is always `en-US`.
Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
   */
  dateChange: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
  /**
   * Emitted when the date range selection changes and the component is in range mode. The `DateChangeEvent` contains `from` and `to` properties.
The property strings are formatted according to the `format` property and not affected by the `locale` property.
The locale applied is always `en-US`.
   */
  dateRangeChange: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
  /**
   * Emitted when the selection is confirmed via the date select button. The `DateChangeEvent` contains `from` and `to` properties.
The property strings are formatted according to the `format` property and not affected by the `locale` property.
The locale applied is always `en-US`.
   */
  dateSelect: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxDatetimePicker,
  inputs: ['ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'dateFormat', 'from', 'i18nDone', 'i18nTime', 'locale', 'maxDate', 'minDate', 'showTimeReference', 'showWeekNumbers', 'singleSelection', 'time', 'timeFormat', 'timeReference', 'to', 'weekStartIndex']
})
@Component({
  selector: 'ix-datetime-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelNextMonthButton', 'ariaLabelPreviousMonthButton', 'dateFormat', 'from', 'i18nDone', 'i18nTime', 'locale', 'maxDate', 'minDate', 'showTimeReference', 'showWeekNumbers', 'singleSelection', 'time', 'timeFormat', 'timeReference', 'to', 'weekStartIndex'],
  outputs: ['timeChange', 'dateChange', 'dateSelect'],
})
export class IxDatetimePicker {
  protected el: HTMLIxDatetimePickerElement;
  @Output() timeChange = new EventEmitter<CustomEvent<string>>();
  @Output() dateChange = new EventEmitter<CustomEvent<IIxDatetimePickerDateTimeDateChangeEvent>>();
  @Output() dateSelect = new EventEmitter<CustomEvent<IIxDatetimePickerDateTimeSelectEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { DateTimeDateChangeEvent as IIxDatetimePickerDateTimeDateChangeEvent } from '@siemens/ix/components';
import type { DateTimeSelectEvent as IIxDatetimePickerDateTimeSelectEvent } from '@siemens/ix/components';

export declare interface IxDatetimePicker extends Components.IxDatetimePicker {
  /**
   * Time change
   */
  timeChange: EventEmitter<CustomEvent<string>>;
  /**
   * Date change
   */
  dateChange: EventEmitter<CustomEvent<IIxDatetimePickerDateTimeDateChangeEvent>>;
  /**
   * Datetime selection event is fired after confirm button is pressed
   */
  dateSelect: EventEmitter<CustomEvent<IIxDatetimePickerDateTimeSelectEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxDivider
})
@Component({
  selector: 'ix-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineIxDrawer,
  inputs: ['ariaLabelCloseButton', 'closeOnClickOutside', 'fullHeight', 'maxWidth', 'minWidth', 'show', 'width'],
  methods: ['toggleDrawer']
})
@Component({
  selector: 'ix-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseButton', 'closeOnClickOutside', 'fullHeight', 'maxWidth', 'minWidth', 'show', 'width'],
  outputs: ['open', 'drawerClose'],
})
export class IxDrawer {
  protected el: HTMLIxDrawerElement;
  @Output() open = new EventEmitter<CustomEvent<any>>();
  @Output() drawerClose = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDrawer extends Components.IxDrawer {
  /**
   * Fire event after drawer is open
   */
  open: EventEmitter<CustomEvent<any>>;
  /**
   * Fire event after drawer is close
   */
  drawerClose: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxDropdown,
  inputs: ['anchor', 'closeBehavior', 'header', 'placement', 'positioningStrategy', 'show', 'suppressAutomaticPlacement', 'trigger'],
  methods: ['updatePosition']
})
@Component({
  selector: 'ix-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anchor', 'closeBehavior', 'header', 'placement', 'positioningStrategy', 'show', 'suppressAutomaticPlacement', 'trigger'],
  outputs: ['showChanged'],
})
export class IxDropdown {
  protected el: HTMLIxDropdownElement;
  @Output() showChanged = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDropdown extends Components.IxDropdown {
  /**
   * Fire event after visibility of dropdown has changed
   */
  showChanged: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxDropdownButton,
  inputs: ['ariaLabelDropdownButton', 'closeBehavior', 'disabled', 'icon', 'label', 'placement', 'variant']
})
@Component({
  selector: 'ix-dropdown-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelDropdownButton', 'closeBehavior', 'disabled', 'icon', 'label', 'placement', 'variant'],
})
export class IxDropdownButton {
  protected el: HTMLIxDropdownButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDropdownButton extends Components.IxDropdownButton {}


@ProxyCmp({
  defineCustomElementFn: defineIxDropdownHeader,
  inputs: ['label']
})
@Component({
  selector: 'ix-dropdown-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
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
  defineCustomElementFn: defineIxDropdownItem,
  inputs: ['ariaLabelButton', 'ariaLabelIcon', 'checked', 'disabled', 'hover', 'icon', 'label']
})
@Component({
  selector: 'ix-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'ariaLabelIcon', 'checked', 'disabled', 'hover', 'icon', 'label'],
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
  defineCustomElementFn: defineIxDropdownQuickActions
})
@Component({
  selector: 'ix-dropdown-quick-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineIxEmptyState,
  inputs: ['action', 'ariaLabelEmptyStateIcon', 'header', 'icon', 'layout', 'subHeader']
})
@Component({
  selector: 'ix-empty-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'ariaLabelEmptyStateIcon', { name: 'header', required: true }, 'icon', 'layout', 'subHeader'],
  outputs: ['actionClick'],
})
export class IxEmptyState {
  protected el: HTMLIxEmptyStateElement;
  @Output() actionClick = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxEmptyState extends Components.IxEmptyState {
  /**
   * Empty state action click event
   */
  actionClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxEventList,
  inputs: ['animated', 'chevron', 'compact', 'itemHeight']
})
@Component({
  selector: 'ix-event-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'chevron', 'compact', 'itemHeight'],
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
  defineCustomElementFn: defineIxEventListItem,
  inputs: ['chevron', 'disabled', 'itemColor', 'selected', 'variant']
})
@Component({
  selector: 'ix-event-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['chevron', 'disabled', 'itemColor', 'selected', 'variant'],
  outputs: ['itemClick'],
})
export class IxEventListItem {
  protected el: HTMLIxEventListItemElement;
  @Output() itemClick = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxEventListItem extends Components.IxEventListItem {
  /**
   * Event list item click
   */
  itemClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxExpandingSearch,
  inputs: ['ariaLabelClearIconButton', 'ariaLabelSearchIconButton', 'ariaLabelSearchInput', 'fullWidth', 'icon', 'placeholder', 'value', 'variant']
})
@Component({
  selector: 'ix-expanding-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelClearIconButton', 'ariaLabelSearchIconButton', 'ariaLabelSearchInput', 'fullWidth', 'icon', 'placeholder', 'value', 'variant'],
  outputs: ['valueChange'],
})
export class IxExpandingSearch {
  protected el: HTMLIxExpandingSearchElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxExpandingSearch extends Components.IxExpandingSearch {
  /**
   * Value changed
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxFieldLabel,
  inputs: ['htmlFor', 'required']
})
@Component({
  selector: 'ix-field-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['htmlFor', 'required'],
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
  defineCustomElementFn: defineIxFilterChip,
  inputs: ['ariaLabelCloseIconButton', 'disabled', 'readonly']
})
@Component({
  selector: 'ix-filter-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseIconButton', 'disabled', 'readonly'],
  outputs: ['closeClick'],
})
export class IxFilterChip {
  protected el: HTMLIxFilterChipElement;
  @Output() closeClick = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxFilterChip extends Components.IxFilterChip {
  /**
   * Close clicked
   */
  closeClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxFlipTile,
  inputs: ['ariaLabelEyeIconButton', 'height', 'index', 'variant', 'width']
})
@Component({
  selector: 'ix-flip-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelEyeIconButton', 'height', 'index', 'variant', 'width'],
  outputs: ['toggle'],
})
export class IxFlipTile {
  protected el: HTMLIxFlipTileElement;
  @Output() toggle = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxFlipTile extends Components.IxFlipTile {
  /**
   * Event emitted when the index changes @since 3.0.0
   */
  toggle: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxFlipTileContent
})
@Component({
  selector: 'ix-flip-tile-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineIxGroup,
  inputs: ['expandOnHeaderClick', 'expanded', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection']
})
@Component({
  selector: 'ix-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expandOnHeaderClick', 'expanded', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection'],
  outputs: ['selectGroup', 'selectItem', 'expandedChanged'],
})
export class IxGroup {
  protected el: HTMLIxGroupElement;
  @Output() selectGroup = new EventEmitter<CustomEvent<boolean>>();
  @Output() selectItem = new EventEmitter<CustomEvent<number>>();
  @Output() expandedChanged = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxGroup extends Components.IxGroup {
  /**
   * Emits when whole group gets selected.
   */
  selectGroup: EventEmitter<CustomEvent<boolean>>;
  /**
   * Emits when group item gets selected.
   */
  selectItem: EventEmitter<CustomEvent<number>>;
  /**
   * Group expanded
   */
  expandedChanged: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxGroupContextMenu
})
@Component({
  selector: 'ix-group-context-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineIxGroupItem,
  inputs: ['ariaLabelIcon', 'disabled', 'icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text']
})
@Component({
  selector: 'ix-group-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIcon', 'disabled', 'icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text'],
  outputs: ['selectedChanged'],
})
export class IxGroupItem {
  protected el: HTMLIxGroupItemElement;
  @Output() selectedChanged = new EventEmitter<CustomEvent<HTMLIxGroupItemElement>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxGroupItem extends Components.IxGroupItem {
  /**
   * Selection changed
   */
  selectedChanged: EventEmitter<CustomEvent<HTMLIxGroupItemElement>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxHelperText,
  inputs: ['helperText', 'htmlFor', 'infoText', 'invalidText', 'validText', 'warningText']
})
@Component({
  selector: 'ix-helper-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helperText', 'htmlFor', 'infoText', 'invalidText', 'validText', 'warningText'],
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
  defineCustomElementFn: defineIxIconButton,
  inputs: ['a11yLabel', 'disabled', 'icon', 'iconColor', 'loading', 'oval', 'size', 'type', 'variant']
})
@Component({
  selector: 'ix-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['a11yLabel', 'disabled', 'icon', 'iconColor', 'loading', 'oval', 'size', 'type', 'variant'],
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
  defineCustomElementFn: defineIxIconToggleButton,
  inputs: ['ariaLabelIconButton', 'disabled', 'ghost', 'icon', 'loading', 'outline', 'oval', 'pressed', 'size', 'variant']
})
@Component({
  selector: 'ix-icon-toggle-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIconButton', 'disabled', 'ghost', 'icon', 'loading', 'outline', 'oval', 'pressed', 'size', 'variant'],
  outputs: ['pressedChange'],
})
export class IxIconToggleButton {
  protected el: HTMLIxIconToggleButtonElement;
  @Output() pressedChange = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxIconToggleButton extends Components.IxIconToggleButton {
  /**
   * Pressed change event
   */
  pressedChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxInput,
  inputs: ['allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'suppressSubmitOnEnter', 'textAlignment', 'type', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'getValidityState', 'focusInput', 'reset']
})
@Component({
  selector: 'ix-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showTextAsTooltip', 'suppressSubmitOnEnter', 'textAlignment', 'type', 'validText', 'value', 'warningText'],
  outputs: ['valueChange', 'validityStateChange', 'ixBlur'],
})
export class IxInput {
  protected el: HTMLIxInputElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string>>();
  @Output() validityStateChange = new EventEmitter<CustomEvent<ValidityState>>();
  @Output() ixBlur = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxInput extends Components.IxInput {
  /**
   * Event emitted when the value of the text field changes.
   */
  valueChange: EventEmitter<CustomEvent<string>>;
  /**
   * Event emitted when the validity state of the text field changes.
   */
  validityStateChange: EventEmitter<CustomEvent<ValidityState>>;
  /**
   * Event emitted when the text field loses focus.
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxInputGroup
})
@Component({
  selector: 'ix-input-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class IxInputGroup {
  protected el: HTMLIxInputGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxInputGroup extends Components.IxInputGroup {}


@ProxyCmp({
  defineCustomElementFn: defineIxKeyValue,
  inputs: ['ariaLabelIcon', 'icon', 'label', 'labelPosition', 'value']
})
@Component({
  selector: 'ix-key-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIcon', 'icon', { name: 'label', required: true }, 'labelPosition', 'value'],
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
  defineCustomElementFn: defineIxKeyValueList,
  inputs: ['striped']
})
@Component({
  selector: 'ix-key-value-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['striped'],
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
  defineCustomElementFn: defineIxKpi,
  inputs: ['ariaLabelAlarmIcon', 'ariaLabelWarningIcon', 'label', 'orientation', 'state', 'unit', 'value']
})
@Component({
  selector: 'ix-kpi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelAlarmIcon', 'ariaLabelWarningIcon', 'label', 'orientation', 'state', 'unit', 'value'],
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
  defineCustomElementFn: defineIxLayoutAuto,
  inputs: ['layout']
})
@Component({
  selector: 'ix-layout-auto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['layout'],
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
  defineCustomElementFn: defineIxLayoutGrid,
  inputs: ['columns', 'gap', 'noMargin']
})
@Component({
  selector: 'ix-layout-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['columns', 'gap', 'noMargin'],
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
  defineCustomElementFn: defineIxLinkButton,
  inputs: ['disabled', 'target', 'url']
})
@Component({
  selector: 'ix-link-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'target', 'url'],
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
  defineCustomElementFn: defineIxMenu,
  inputs: ['applicationDescription', 'applicationName', 'enableToggleTheme', 'expand', 'i18nCollapse', 'i18nExpand', 'i18nExpandSidebar', 'i18nLegal', 'i18nSettings', 'i18nToggleTheme', 'pinned', 'showAbout', 'showSettings', 'startExpanded'],
  methods: ['toggleMapExpand', 'toggleMenu', 'toggleSettings', 'toggleAbout']
})
@Component({
  selector: 'ix-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationDescription', 'applicationName', 'enableToggleTheme', 'expand', 'i18nCollapse', 'i18nExpand', 'i18nExpandSidebar', 'i18nLegal', 'i18nSettings', 'i18nToggleTheme', 'pinned', 'showAbout', 'showSettings', 'startExpanded'],
  outputs: ['expandChange', 'mapExpandChange', 'openAppSwitch', 'openSettings', 'openAbout'],
})
export class IxMenu {
  protected el: HTMLIxMenuElement;
  @Output() expandChange = new EventEmitter<CustomEvent<boolean>>();
  @Output() mapExpandChange = new EventEmitter<CustomEvent<boolean>>();
  @Output() openAppSwitch = new EventEmitter<CustomEvent<void>>();
  @Output() openSettings = new EventEmitter<CustomEvent<void>>();
  @Output() openAbout = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMenu extends Components.IxMenu {
  /**
   * Menu expanded
   */
  expandChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * Map Sidebar expanded
   */
  mapExpandChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * Event emitted when the app switch button is clicked @since 3.0.0
   */
  openAppSwitch: EventEmitter<CustomEvent<void>>;
  /**
   * Event emitted when the settings button is clicked @since 3.0.0
   */
  openSettings: EventEmitter<CustomEvent<void>>;
  /**
   * Event emitted when the about button is clicked @since 3.0.0
   */
  openAbout: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxMenuAbout,
  inputs: ['activeTabLabel', 'label']
})
@Component({
  selector: 'ix-menu-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabLabel', 'label'],
  outputs: ['tabChange', 'close'],
})
export class IxMenuAbout {
  protected el: HTMLIxMenuAboutElement;
  @Output() tabChange = new EventEmitter<CustomEvent<string>>();
  @Output() close = new EventEmitter<CustomEvent<IIxMenuAboutCustomCloseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CustomCloseEvent as IIxMenuAboutCustomCloseEvent } from '@siemens/ix/components';

export declare interface IxMenuAbout extends Components.IxMenuAbout {
  /**
   * Active tab changed @since 3.0.0
   */
  tabChange: EventEmitter<CustomEvent<string>>;
  /**
   * About and Legal closed
   */
  close: EventEmitter<CustomEvent<IIxMenuAboutCustomCloseEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxMenuAboutItem,
  inputs: ['label']
})
@Component({
  selector: 'ix-menu-about-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
  outputs: ['labelChange'],
})
export class IxMenuAboutItem {
  protected el: HTMLIxMenuAboutItemElement;
  @Output() labelChange = new EventEmitter<CustomEvent<IIxMenuAboutItemCustomLabelChangeEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CustomLabelChangeEvent as IIxMenuAboutItemCustomLabelChangeEvent } from '@siemens/ix/components';

export declare interface IxMenuAboutItem extends Components.IxMenuAboutItem {
  /**
   * Label changed
   */
  labelChange: EventEmitter<CustomEvent<IIxMenuAboutItemCustomLabelChangeEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxMenuAboutNews,
  inputs: ['aboutItemLabel', 'i18nShowMore', 'label', 'show']
})
@Component({
  selector: 'ix-menu-about-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aboutItemLabel', 'i18nShowMore', 'label', 'show'],
  outputs: ['showMore', 'closePopover'],
})
export class IxMenuAboutNews {
  protected el: HTMLIxMenuAboutNewsElement;
  @Output() showMore = new EventEmitter<CustomEvent<MouseEvent>>();
  @Output() closePopover = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMenuAboutNews extends Components.IxMenuAboutNews {
  /**
   * Show More button is pressed
   */
  showMore: EventEmitter<CustomEvent<MouseEvent>>;
  /**
   * Popover closed
   */
  closePopover: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxMenuAvatar,
  inputs: ['bottom', 'hideLogoutButton', 'i18nLogout', 'image', 'initials', 'top']
})
@Component({
  selector: 'ix-menu-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bottom', 'hideLogoutButton', 'i18nLogout', 'image', 'initials', 'top'],
  outputs: ['logoutClick'],
})
export class IxMenuAvatar {
  protected el: HTMLIxMenuAvatarElement;
  @Output() logoutClick = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMenuAvatar extends Components.IxMenuAvatar {
  /**
   * Logout click
   */
  logoutClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxMenuAvatarItem,
  inputs: ['icon', 'label']
})
@Component({
  selector: 'ix-menu-avatar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'label'],
  outputs: ['itemClick'],
})
export class IxMenuAvatarItem {
  protected el: HTMLIxMenuAvatarItemElement;
  @Output() itemClick = new EventEmitter<CustomEvent<MouseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMenuAvatarItem extends Components.IxMenuAvatarItem {
  /**
   * Avatar dropdown item clicked
   */
  itemClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxMenuCategory,
  inputs: ['icon', 'label', 'notifications', 'tooltipText']
})
@Component({
  selector: 'ix-menu-category',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'label', 'notifications', 'tooltipText'],
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
  defineCustomElementFn: defineIxMenuItem,
  inputs: ['active', 'bottom', 'disabled', 'home', 'href', 'icon', 'label', 'notifications', 'rel', 'target', 'tooltipText']
})
@Component({
  selector: 'ix-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'bottom', 'disabled', 'home', 'href', 'icon', 'label', 'notifications', 'rel', 'target', 'tooltipText'],
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
  defineCustomElementFn: defineIxMenuSettings,
  inputs: ['activeTabLabel', 'label']
})
@Component({
  selector: 'ix-menu-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabLabel', 'label'],
  outputs: ['tabChange', 'close'],
})
export class IxMenuSettings {
  protected el: HTMLIxMenuSettingsElement;
  @Output() tabChange = new EventEmitter<CustomEvent<string>>();
  @Output() close = new EventEmitter<CustomEvent<IIxMenuSettingsCustomCloseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CustomCloseEvent as IIxMenuSettingsCustomCloseEvent } from '@siemens/ix/components';

export declare interface IxMenuSettings extends Components.IxMenuSettings {
  /**
   * Active tab changed @since 3.0.0
   */
  tabChange: EventEmitter<CustomEvent<string>>;
  /**
   * Popover closed
   */
  close: EventEmitter<CustomEvent<IIxMenuSettingsCustomCloseEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxMenuSettingsItem,
  inputs: ['label']
})
@Component({
  selector: 'ix-menu-settings-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
  outputs: ['labelChange'],
})
export class IxMenuSettingsItem {
  protected el: HTMLIxMenuSettingsItemElement;
  @Output() labelChange = new EventEmitter<CustomEvent<IIxMenuSettingsItemCustomLabelChangeEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CustomLabelChangeEvent as IIxMenuSettingsItemCustomLabelChangeEvent } from '@siemens/ix/components';

export declare interface IxMenuSettingsItem extends Components.IxMenuSettingsItem {
  /**
   * Label changed
   */
  labelChange: EventEmitter<CustomEvent<IIxMenuSettingsItemCustomLabelChangeEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxMessageBar,
  inputs: ['persistent', 'type']
})
@Component({
  selector: 'ix-message-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['persistent', 'type'],
  outputs: ['closedChange', 'closeAnimationCompleted'],
})
export class IxMessageBar {
  protected el: HTMLIxMessageBarElement;
  @Output() closedChange = new EventEmitter<CustomEvent<any>>();
  @Output() closeAnimationCompleted = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMessageBar extends Components.IxMessageBar {
  /**
   * An event emitted when the close button is clicked
   */
  closedChange: EventEmitter<CustomEvent<any>>;
  /**
   * An event emitted when the close animation is completed
   */
  closeAnimationCompleted: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxModal,
  inputs: ['beforeDismiss', 'centered', 'closeOnBackdropClick', 'disableAnimation', 'disableEscapeClose', 'hideBackdrop', 'size'],
  methods: ['showModal', 'dismissModal', 'closeModal']
})
@Component({
  selector: 'ix-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['beforeDismiss', 'centered', 'closeOnBackdropClick', 'disableAnimation', 'disableEscapeClose', 'hideBackdrop', 'size'],
  outputs: ['dialogClose', 'dialogDismiss'],
})
export class IxModal {
  protected el: HTMLIxModalElement;
  @Output() dialogClose = new EventEmitter<CustomEvent<any>>();
  @Output() dialogDismiss = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxModal extends Components.IxModal {
  /**
   * Dialog close
   */
  dialogClose: EventEmitter<CustomEvent<any>>;
  /**
   * Dialog cancel
   */
  dialogDismiss: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxModalContent
})
@Component({
  selector: 'ix-modal-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineIxModalFooter
})
@Component({
  selector: 'ix-modal-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineIxModalHeader,
  inputs: ['ariaLabelCloseIconButton', 'ariaLabelIcon', 'hideClose', 'icon', 'iconColor']
})
@Component({
  selector: 'ix-modal-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseIconButton', 'ariaLabelIcon', 'hideClose', 'icon', 'iconColor'],
  outputs: ['closeClick'],
})
export class IxModalHeader {
  protected el: HTMLIxModalHeaderElement;
  @Output() closeClick = new EventEmitter<CustomEvent<MouseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxModalHeader extends Components.IxModalHeader {
  /**
   * Emits when close icon is clicked and closes the modal
Can be prevented, in which case only the event is triggered, and the modal remains open
   */
  closeClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxNumberInput,
  inputs: ['allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'max', 'min', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showStepperButtons', 'showTextAsTooltip', 'step', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'getValidityState', 'focusInput', 'reset']
})
@Component({
  selector: 'ix-number-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowedCharactersPattern', 'disabled', 'helperText', 'infoText', 'invalidText', 'label', 'max', 'min', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'showStepperButtons', 'showTextAsTooltip', 'step', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText'],
  outputs: ['valueChange', 'validityStateChange', 'ixBlur'],
})
export class IxNumberInput {
  protected el: HTMLIxNumberInputElement;
  @Output() valueChange = new EventEmitter<CustomEvent<number>>();
  @Output() validityStateChange = new EventEmitter<CustomEvent<ValidityState>>();
  @Output() ixBlur = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxNumberInput extends Components.IxNumberInput {
  /**
   * Event emitted when the value of the input field changes
   */
  valueChange: EventEmitter<CustomEvent<number>>;
  /**
   * Event emitted when the validity state of the input field changes
   */
  validityStateChange: EventEmitter<CustomEvent<ValidityState>>;
  /**
   * Event emitted when the input field loses focus
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxPagination,
  inputs: ['advanced', 'ariaLabelChevronLeftIconButton', 'ariaLabelChevronRightIconButton', 'count', 'hideItemCount', 'i18nItems', 'i18nOf', 'i18nPage', 'itemCount', 'selectedPage']
})
@Component({
  selector: 'ix-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['advanced', 'ariaLabelChevronLeftIconButton', 'ariaLabelChevronRightIconButton', 'count', 'hideItemCount', 'i18nItems', 'i18nOf', 'i18nPage', 'itemCount', 'selectedPage'],
  outputs: ['pageSelected', 'itemCountChanged'],
})
export class IxPagination {
  protected el: HTMLIxPaginationElement;
  @Output() pageSelected = new EventEmitter<CustomEvent<number>>();
  @Output() itemCountChanged = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPagination extends Components.IxPagination {
  /**
   * Page selection event
   */
  pageSelected: EventEmitter<CustomEvent<number>>;
  /**
   * Item count change event
   */
  itemCountChanged: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxPane,
  inputs: ['ariaLabelCollapseCloseButton', 'ariaLabelIcon', 'borderless', 'closeOnClickOutside', 'composition', 'expanded', 'heading', 'hideOnCollapse', 'icon', 'size', 'variant']
})
@Component({
  selector: 'ix-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCollapseCloseButton', 'ariaLabelIcon', 'borderless', 'closeOnClickOutside', 'composition', 'expanded', 'heading', 'hideOnCollapse', 'icon', 'size', 'variant'],
  outputs: ['expandedChanged', 'variantChanged', 'borderlessChanged'],
})
export class IxPane {
  protected el: HTMLIxPaneElement;
  @Output() expandedChanged = new EventEmitter<CustomEvent<IIxPaneExpandedChangedEvent>>();
  @Output() variantChanged = new EventEmitter<CustomEvent<IIxPaneVariantChangedEvent>>();
  @Output() borderlessChanged = new EventEmitter<CustomEvent<IIxPaneBorderlessChangedEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { ExpandedChangedEvent as IIxPaneExpandedChangedEvent } from '@siemens/ix/components';
import type { VariantChangedEvent as IIxPaneVariantChangedEvent } from '@siemens/ix/components';
import type { BorderlessChangedEvent as IIxPaneBorderlessChangedEvent } from '@siemens/ix/components';

export declare interface IxPane extends Components.IxPane {
  /**
   * This event is triggered when the pane either expands or contracts
   */
  expandedChanged: EventEmitter<CustomEvent<IIxPaneExpandedChangedEvent>>;
  /**
   * This event is triggered when the variant of the pane is changed
   */
  variantChanged: EventEmitter<CustomEvent<IIxPaneVariantChangedEvent>>;
  /**
   * This event is triggered when the variant of the pane is changed
   */
  borderlessChanged: EventEmitter<CustomEvent<IIxPaneBorderlessChangedEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxPaneLayout,
  inputs: ['borderless', 'layout', 'variant']
})
@Component({
  selector: 'ix-pane-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['borderless', 'layout', 'variant'],
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
  defineCustomElementFn: defineIxPill,
  inputs: ['alignLeft', 'ariaLabelIcon', 'background', 'icon', 'outline', 'pillColor', 'tooltipText', 'variant']
})
@Component({
  selector: 'ix-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignLeft', 'ariaLabelIcon', 'background', 'icon', 'outline', 'pillColor', 'tooltipText', 'variant'],
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
  defineCustomElementFn: defineIxProgressIndicator,
  inputs: ['helperText', 'label', 'max', 'min', 'showTextAsTooltip', 'size', 'status', 'textAlignment', 'type', 'value']
})
@Component({
  selector: 'ix-progress-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helperText', 'label', 'max', 'min', 'showTextAsTooltip', 'size', 'status', 'textAlignment', 'type', 'value'],
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
  defineCustomElementFn: defineIxPushCard,
  inputs: ['ariaLabelIcon', 'expanded', 'heading', 'icon', 'notification', 'subheading', 'variant']
})
@Component({
  selector: 'ix-push-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelIcon', 'expanded', 'heading', 'icon', 'notification', 'subheading', 'variant'],
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
  defineCustomElementFn: defineIxRadio,
  inputs: ['checked', 'disabled', 'label', 'name', 'required', 'value']
})
@Component({
  selector: 'ix-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'label', 'name', 'required', 'value'],
  outputs: ['checkedChange', 'valueChange', 'ixBlur'],
})
export class IxRadio {
  protected el: HTMLIxRadioElement;
  @Output() checkedChange = new EventEmitter<CustomEvent<boolean>>();
  @Output() valueChange = new EventEmitter<CustomEvent<string>>();
  @Output() ixBlur = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxRadio extends Components.IxRadio {
  /**
   * Event emitted when the checked state of the radio changes
   */
  checkedChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * Event emitted when the value of the radio changes
   */
  valueChange: EventEmitter<CustomEvent<string>>;
  /**
   * Event emitted when the radio is blurred
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxRadioGroup,
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'value', 'warningText']
})
@Component({
  selector: 'ix-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'helperText', 'infoText', 'invalidText', 'label', 'showTextAsTooltip', 'validText', 'value', 'warningText'],
  outputs: ['valueChange'],
})
export class IxRadioGroup {
  protected el: HTMLIxRadioGroupElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxRadioGroup extends Components.IxRadioGroup {
  /**
   * Event emitted when the value of the radiobutton group changes
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxRow
})
@Component({
  selector: 'ix-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
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
  defineCustomElementFn: defineIxSelect,
  inputs: ['allowClear', 'ariaLabelChevronDownIconButton', 'ariaLabelClearIconButton', 'disabled', 'dropdownMaxWidth', 'dropdownWidth', 'editable', 'helperText', 'hideListHeader', 'i18nNoMatches', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nSelectListHeader', 'infoText', 'invalidText', 'label', 'mode', 'name', 'readonly', 'required', 'showTextAsTooltip', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'focusInput']
})
@Component({
  selector: 'ix-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowClear', 'ariaLabelChevronDownIconButton', 'ariaLabelClearIconButton', 'disabled', 'dropdownMaxWidth', 'dropdownWidth', 'editable', 'helperText', 'hideListHeader', 'i18nNoMatches', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nSelectListHeader', 'infoText', 'invalidText', 'label', 'mode', 'name', 'readonly', 'required', 'showTextAsTooltip', 'validText', 'value', 'warningText'],
  outputs: ['valueChange', 'inputChange', 'addItem', 'ixBlur'],
})
export class IxSelect {
  protected el: HTMLIxSelectElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string | string[]>>();
  @Output() inputChange = new EventEmitter<CustomEvent<string>>();
  @Output() addItem = new EventEmitter<CustomEvent<string>>();
  @Output() ixBlur = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxSelect extends Components.IxSelect {
  /**
   * Value changed
   */
  valueChange: EventEmitter<CustomEvent<string | string[]>>;
  /**
   * Event dispatched whenever the text input changes.
   */
  inputChange: EventEmitter<CustomEvent<string>>;
  /**
   * Item added to selection
   */
  addItem: EventEmitter<CustomEvent<string>>;
  /**
   * Blur input
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxSelectItem,
  inputs: ['label', 'selected', 'value']
})
@Component({
  selector: 'ix-select-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'selected', { name: 'value', required: true }],
  outputs: ['itemClick'],
})
export class IxSelectItem {
  protected el: HTMLIxSelectItemElement;
  @Output() itemClick = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxSelectItem extends Components.IxSelectItem {
  /**
   * Item clicked
   */
  itemClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxSlider,
  inputs: ['disabled', 'error', 'marker', 'max', 'min', 'step', 'trace', 'traceReference', 'value']
})
@Component({
  selector: 'ix-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'marker', 'max', 'min', 'step', 'trace', 'traceReference', 'value'],
  outputs: ['valueChange'],
})
export class IxSlider {
  protected el: HTMLIxSliderElement;
  @Output() valueChange = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxSlider extends Components.IxSlider {

  valueChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxSpinner,
  inputs: ['size', 'variant']
})
@Component({
  selector: 'ix-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'variant'],
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
  defineCustomElementFn: defineIxSplitButton,
  inputs: ['ariaLabelButton', 'ariaLabelSplitIconButton', 'closeBehavior', 'disabled', 'icon', 'label', 'placement', 'splitIcon', 'variant']
})
@Component({
  selector: 'ix-split-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'ariaLabelSplitIconButton', 'closeBehavior', 'disabled', 'icon', 'label', 'placement', 'splitIcon', 'variant'],
  outputs: ['buttonClick'],
})
export class IxSplitButton {
  protected el: HTMLIxSplitButtonElement;
  @Output() buttonClick = new EventEmitter<CustomEvent<MouseEvent>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxSplitButton extends Components.IxSplitButton {
  /**
   * Button clicked
   */
  buttonClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxTabItem,
  inputs: ['counter', 'disabled', 'icon', 'layout', 'placement', 'rounded', 'selected', 'small']
})
@Component({
  selector: 'ix-tab-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['counter', 'disabled', 'icon', 'layout', 'placement', 'rounded', 'selected', 'small'],
  outputs: ['tabClick'],
})
export class IxTabItem {
  protected el: HTMLIxTabItemElement;
  @Output() tabClick = new EventEmitter<CustomEvent<IIxTabItemTabClickDetail>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { TabClickDetail as IIxTabItemTabClickDetail } from '@siemens/ix/components';

export declare interface IxTabItem extends Components.IxTabItem {
  /**
   * Emitted when the tab is clicked.
   */
  tabClick: EventEmitter<CustomEvent<IIxTabItemTabClickDetail>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxTabs,
  inputs: ['ariaLabelChevronLeftIconButton', 'ariaLabelChevronRightIconButton', 'layout', 'placement', 'rounded', 'selected', 'small']
})
@Component({
  selector: 'ix-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelChevronLeftIconButton', 'ariaLabelChevronRightIconButton', 'layout', 'placement', 'rounded', 'selected', 'small'],
  outputs: ['selectedChange'],
})
export class IxTabs {
  protected el: HTMLIxTabsElement;
  @Output() selectedChange = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTabs extends Components.IxTabs {
  /**
   * `selected` property changed
   */
  selectedChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxTextarea,
  inputs: ['disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'resizeBehavior', 'showTextAsTooltip', 'textareaCols', 'textareaHeight', 'textareaRows', 'textareaWidth', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'focusInput', 'getValidityState', 'reset']
})
@Component({
  selector: 'ix-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'helperText', 'infoText', 'invalidText', 'label', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'resizeBehavior', 'showTextAsTooltip', 'textareaCols', 'textareaHeight', 'textareaRows', 'textareaWidth', 'validText', 'value', 'warningText'],
  outputs: ['valueChange', 'validityStateChange', 'ixBlur'],
})
export class IxTextarea {
  protected el: HTMLIxTextareaElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string>>();
  @Output() validityStateChange = new EventEmitter<CustomEvent<ValidityState>>();
  @Output() ixBlur = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTextarea extends Components.IxTextarea {
  /**
   * Event emitted when the value of the textarea field changes.
   */
  valueChange: EventEmitter<CustomEvent<string>>;
  /**
   * Event emitted when the validity state of the textarea field changes.
   */
  validityStateChange: EventEmitter<CustomEvent<ValidityState>>;
  /**
   * Event emitted when the textarea field loses focus.
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxTile,
  inputs: ['size']
})
@Component({
  selector: 'ix-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
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
  defineCustomElementFn: defineIxTimeInput,
  inputs: ['disabled', 'format', 'helperText', 'hideHeader', 'hourInterval', 'i18nErrorTimeUnparsable', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'i18nSelectTime', 'i18nTime', 'infoText', 'invalidText', 'label', 'millisecondInterval', 'minuteInterval', 'name', 'placeholder', 'readonly', 'required', 'secondInterval', 'showTextAsTooltip', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText'],
  methods: ['getNativeInputElement', 'focusInput', 'reset']
})
@Component({
  selector: 'ix-time-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'format', 'helperText', 'hideHeader', 'hourInterval', 'i18nErrorTimeUnparsable', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'i18nSelectTime', 'i18nTime', 'infoText', 'invalidText', 'label', 'millisecondInterval', 'minuteInterval', 'name', 'placeholder', 'readonly', 'required', 'secondInterval', 'showTextAsTooltip', 'suppressSubmitOnEnter', 'textAlignment', 'validText', 'value', 'warningText'],
  outputs: ['valueChange', 'validityStateChange'],
})
export class IxTimeInput {
  protected el: HTMLIxTimeInputElement;
  @Output() valueChange = new EventEmitter<CustomEvent<string>>();
  @Output() validityStateChange = new EventEmitter<CustomEvent<IIxTimeInputTimeInputValidityState>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { TimeInputValidityState as IIxTimeInputTimeInputValidityState } from '@siemens/ix/components';

export declare interface IxTimeInput extends Components.IxTimeInput {
  /**
   * Input change event.
   */
  valueChange: EventEmitter<CustomEvent<string>>;
  /**
   * Validation state change event.
   */
  validityStateChange: EventEmitter<CustomEvent<IIxTimeInputTimeInputValidityState>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxTimePicker,
  inputs: ['corners', 'embedded', 'format', 'hideHeader', 'hourInterval', 'i18nConfirmTime', 'i18nHeader', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'millisecondInterval', 'minuteInterval', 'secondInterval', 'time'],
  methods: ['getCurrentTime']
})
@Component({
  selector: 'ix-time-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['corners', 'embedded', 'format', 'hideHeader', 'hourInterval', 'i18nConfirmTime', 'i18nHeader', 'i18nHourColumnHeader', 'i18nMillisecondColumnHeader', 'i18nMinuteColumnHeader', 'i18nSecondColumnHeader', 'millisecondInterval', 'minuteInterval', 'secondInterval', 'time'],
  outputs: ['timeSelect', 'timeChange'],
})
export class IxTimePicker {
  protected el: HTMLIxTimePickerElement;
  @Output() timeSelect = new EventEmitter<CustomEvent<string>>();
  @Output() timeChange = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTimePicker extends Components.IxTimePicker {
  /**
   * Time event
   */
  timeSelect: EventEmitter<CustomEvent<string>>;
  /**
   * Time change event
   */
  timeChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxToast,
  inputs: ['ariaLabelCloseIconButton', 'autoCloseDelay', 'icon', 'iconColor', 'preventAutoClose', 'toastTitle', 'type'],
  methods: ['pause', 'resume', 'isPaused']
})
@Component({
  selector: 'ix-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelCloseIconButton', 'autoCloseDelay', 'icon', 'iconColor', 'preventAutoClose', 'toastTitle', 'type'],
  outputs: ['closeToast'],
})
export class IxToast {
  protected el: HTMLIxToastElement;
  @Output() closeToast = new EventEmitter<CustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxToast extends Components.IxToast {
  /**
   * Toast closed
   */
  closeToast: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxToastContainer,
  inputs: ['containerClass', 'containerId', 'position'],
  methods: ['showToast']
})
@Component({
  selector: 'ix-toast-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['containerClass', 'containerId', 'position'],
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
  defineCustomElementFn: defineIxToggle,
  inputs: ['checked', 'disabled', 'hideText', 'indeterminate', 'name', 'required', 'textIndeterminate', 'textOff', 'textOn', 'value']
})
@Component({
  selector: 'ix-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'hideText', 'indeterminate', 'name', 'required', 'textIndeterminate', 'textOff', 'textOn', 'value'],
  outputs: ['checkedChange', 'ixBlur'],
})
export class IxToggle {
  protected el: HTMLIxToggleElement;
  @Output() checkedChange = new EventEmitter<CustomEvent<boolean>>();
  @Output() ixBlur = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxToggle extends Components.IxToggle {
  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  checkedChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * An event will be dispatched each time the toggle is blurred.
   */
  ixBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxToggleButton,
  inputs: ['ariaLabelButton', 'disabled', 'icon', 'iconRight', 'loading', 'pressed', 'variant']
})
@Component({
  selector: 'ix-toggle-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelButton', 'disabled', 'icon', 'iconRight', 'loading', 'pressed', 'variant'],
  outputs: ['pressedChange'],
})
export class IxToggleButton {
  protected el: HTMLIxToggleButtonElement;
  @Output() pressedChange = new EventEmitter<CustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxToggleButton extends Components.IxToggleButton {
  /**
   * Pressed change event
   */
  pressedChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxTooltip,
  inputs: ['for', 'interactive', 'placement', 'titleContent']
})
@Component({
  selector: 'ix-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['for', 'interactive', 'placement', 'titleContent'],
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
  defineCustomElementFn: defineIxTreeItem,
  inputs: ['ariaLabelChevronIcon', 'context', 'hasChildren', 'text']
})
@Component({
  selector: 'ix-tree-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelChevronIcon', 'context', 'hasChildren', 'text'],
  outputs: ['toggle', 'itemClick'],
})
export class IxTreeItem {
  protected el: HTMLIxTreeItemElement;
  @Output() toggle = new EventEmitter<CustomEvent<void>>();
  @Output() itemClick = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTreeItem extends Components.IxTreeItem {
  /**
   * Expand/Collapsed toggled
   */
  toggle: EventEmitter<CustomEvent<void>>;
  /**
   * Click on item not on the expand/collapse icon
   */
  itemClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxTypography,
  inputs: ['bold', 'format', 'textColor', 'textDecoration']
})
@Component({
  selector: 'ix-typography',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bold', 'format', 'textColor', 'textDecoration'],
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
  defineCustomElementFn: defineIxUpload,
  inputs: ['accept', 'disabled', 'i18nUploadDisabled', 'i18nUploadFile', 'loadingText', 'multiline', 'multiple', 'selectFileText', 'state', 'uploadFailedText', 'uploadSuccessText'],
  methods: ['setFilesToUpload']
})
@Component({
  selector: 'ix-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'disabled', 'i18nUploadDisabled', 'i18nUploadFile', 'loadingText', 'multiline', 'multiple', 'selectFileText', 'state', 'uploadFailedText', 'uploadSuccessText'],
  outputs: ['filesChanged'],
})
export class IxUpload {
  protected el: HTMLIxUploadElement;
  @Output() filesChanged = new EventEmitter<CustomEvent<Array<File>>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxUpload extends Components.IxUpload {
  /**
   * You get an array of Files after drop-action or browse action is finished
   */
  filesChanged: EventEmitter<CustomEvent<Array<File>>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxValidationTooltip,
  inputs: ['message', 'placement', 'suppressAutomaticPlacement']
})
@Component({
  selector: 'ix-validation-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['message', 'placement', 'suppressAutomaticPlacement'],
})
export class IxValidationTooltip {
  protected el: HTMLIxValidationTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxValidationTooltip extends Components.IxValidationTooltip {}


@ProxyCmp({
  defineCustomElementFn: defineIxWorkflowStep,
  inputs: ['clickable', 'disabled', 'selected', 'status', 'vertical']
})
@Component({
  selector: 'ix-workflow-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickable', 'disabled', 'selected', 'status', 'vertical'],
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
  defineCustomElementFn: defineIxWorkflowSteps,
  inputs: ['clickable', 'selectedIndex', 'vertical']
})
@Component({
  selector: 'ix-workflow-steps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickable', 'selectedIndex', 'vertical'],
  outputs: ['stepSelected'],
})
export class IxWorkflowSteps {
  protected el: HTMLIxWorkflowStepsElement;
  @Output() stepSelected = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxWorkflowSteps extends Components.IxWorkflowSteps {
  /**
   * On step selected event
   */
  stepSelected: EventEmitter<CustomEvent<number>>;
}


