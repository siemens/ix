/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@siemens/ix/components';

import { defineCustomElement as defineIxActionCard } from '@siemens/ix/components/ix-action-card.js';
import { defineCustomElement as defineIxApplication } from '@siemens/ix/components/ix-application.js';
import { defineCustomElement as defineIxApplicationHeader } from '@siemens/ix/components/ix-application-header.js';
import { defineCustomElement as defineIxAvatar } from '@siemens/ix/components/ix-avatar.js';
import { defineCustomElement as defineIxBasicNavigation } from '@siemens/ix/components/ix-basic-navigation.js';
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
import { defineCustomElement as defineIxChip } from '@siemens/ix/components/ix-chip.js';
import { defineCustomElement as defineIxCol } from '@siemens/ix/components/ix-col.js';
import { defineCustomElement as defineIxContent } from '@siemens/ix/components/ix-content.js';
import { defineCustomElement as defineIxContentHeader } from '@siemens/ix/components/ix-content-header.js';
import { defineCustomElement as defineIxDateDropdown } from '@siemens/ix/components/ix-date-dropdown.js';
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
import { defineCustomElement as defineIxFilterChip } from '@siemens/ix/components/ix-filter-chip.js';
import { defineCustomElement as defineIxFlipTile } from '@siemens/ix/components/ix-flip-tile.js';
import { defineCustomElement as defineIxFlipTileContent } from '@siemens/ix/components/ix-flip-tile-content.js';
import { defineCustomElement as defineIxFormField } from '@siemens/ix/components/ix-form-field.js';
import { defineCustomElement as defineIxGroup } from '@siemens/ix/components/ix-group.js';
import { defineCustomElement as defineIxGroupContextMenu } from '@siemens/ix/components/ix-group-context-menu.js';
import { defineCustomElement as defineIxGroupItem } from '@siemens/ix/components/ix-group-item.js';
import { defineCustomElement as defineIxIconButton } from '@siemens/ix/components/ix-icon-button.js';
import { defineCustomElement as defineIxIconToggleButton } from '@siemens/ix/components/ix-icon-toggle-button.js';
import { defineCustomElement as defineIxInputGroup } from '@siemens/ix/components/ix-input-group.js';
import { defineCustomElement as defineIxKeyValue } from '@siemens/ix/components/ix-key-value.js';
import { defineCustomElement as defineIxKeyValueList } from '@siemens/ix/components/ix-key-value-list.js';
import { defineCustomElement as defineIxKpi } from '@siemens/ix/components/ix-kpi.js';
import { defineCustomElement as defineIxLayoutGrid } from '@siemens/ix/components/ix-layout-grid.js';
import { defineCustomElement as defineIxLinkButton } from '@siemens/ix/components/ix-link-button.js';
import { defineCustomElement as defineIxMapNavigation } from '@siemens/ix/components/ix-map-navigation.js';
import { defineCustomElement as defineIxMapNavigationOverlay } from '@siemens/ix/components/ix-map-navigation-overlay.js';
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
import { defineCustomElement as defineIxModalExample } from '@siemens/ix/components/ix-modal-example.js';
import { defineCustomElement as defineIxModalFooter } from '@siemens/ix/components/ix-modal-footer.js';
import { defineCustomElement as defineIxModalHeader } from '@siemens/ix/components/ix-modal-header.js';
import { defineCustomElement as defineIxPagination } from '@siemens/ix/components/ix-pagination.js';
import { defineCustomElement as defineIxPane } from '@siemens/ix/components/ix-pane.js';
import { defineCustomElement as defineIxPaneLayout } from '@siemens/ix/components/ix-pane-layout.js';
import { defineCustomElement as defineIxPill } from '@siemens/ix/components/ix-pill.js';
import { defineCustomElement as defineIxPushCard } from '@siemens/ix/components/ix-push-card.js';
import { defineCustomElement as defineIxRow } from '@siemens/ix/components/ix-row.js';
import { defineCustomElement as defineIxSelect } from '@siemens/ix/components/ix-select.js';
import { defineCustomElement as defineIxSelectItem } from '@siemens/ix/components/ix-select-item.js';
import { defineCustomElement as defineIxSlider } from '@siemens/ix/components/ix-slider.js';
import { defineCustomElement as defineIxSpinner } from '@siemens/ix/components/ix-spinner.js';
import { defineCustomElement as defineIxSplitButton } from '@siemens/ix/components/ix-split-button.js';
import { defineCustomElement as defineIxSplitButtonItem } from '@siemens/ix/components/ix-split-button-item.js';
import { defineCustomElement as defineIxTabItem } from '@siemens/ix/components/ix-tab-item.js';
import { defineCustomElement as defineIxTabs } from '@siemens/ix/components/ix-tabs.js';
import { defineCustomElement as defineIxTile } from '@siemens/ix/components/ix-tile.js';
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
  inputs: ['heading', 'icon', 'selected', 'subheading', 'variant']
})
@Component({
  selector: 'ix-action-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['heading', 'icon', 'selected', 'subheading', 'variant'],
  standalone: true
})
export class IxActionCard {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxApplication {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxApplication extends Components.IxApplication {}


@ProxyCmp({
  defineCustomElementFn: defineIxApplicationHeader,
  inputs: ['name']
})
@Component({
  selector: 'ix-application-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name'],
  standalone: true
})
export class IxApplicationHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxApplicationHeader extends Components.IxApplicationHeader {}


@ProxyCmp({
  defineCustomElementFn: defineIxAvatar,
  inputs: ['extra', 'image', 'initials', 'username']
})
@Component({
  selector: 'ix-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['extra', 'image', 'initials', 'username'],
  standalone: true
})
export class IxAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxAvatar extends Components.IxAvatar {}


@ProxyCmp({
  defineCustomElementFn: defineIxBasicNavigation,
  inputs: ['applicationName', 'breakpoints', 'forceBreakpoint', 'hideHeader']
})
@Component({
  selector: 'ix-basic-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationName', 'breakpoints', 'forceBreakpoint', 'hideHeader'],
  standalone: true
})
export class IxBasicNavigation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxBasicNavigation extends Components.IxBasicNavigation {}


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
  standalone: true
})
export class IxBlind {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['collapsedChange']);
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
  inputs: ['ariaLabelPreviousButton', 'ghost', 'nextItems', 'visibleItemCount']
})
@Component({
  selector: 'ix-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ariaLabelPreviousButton', 'ghost', 'nextItems', 'visibleItemCount'],
  standalone: true
})
export class IxBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick', 'nextClick']);
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
  inputs: ['icon', 'label']
})
@Component({
  selector: 'ix-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'label'],
  standalone: true
})
export class IxBreadcrumbItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxBreadcrumbItem extends Components.IxBreadcrumbItem {}


@ProxyCmp({
  defineCustomElementFn: defineIxButton,
  inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'type', 'variant']
})
@Component({
  selector: 'ix-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'type', 'variant'],
  standalone: true
})
export class IxButton {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCard extends Components.IxCard {}


@ProxyCmp({
  defineCustomElementFn: defineIxCardAccordion,
  inputs: ['collapse']
})
@Component({
  selector: 'ix-card-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapse'],
  standalone: true
})
export class IxCardAccordion {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCardContent extends Components.IxCardContent {}


@ProxyCmp({
  defineCustomElementFn: defineIxCardList,
  inputs: ['collapse', 'hideShowAll', 'i18nMoreCards', 'i18nShowAll', 'label', 'listStyle', 'showAllCount', 'suppressOverflowHandling']
})
@Component({
  selector: 'ix-card-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapse', 'hideShowAll', 'i18nMoreCards', 'i18nShowAll', 'label', 'listStyle', 'showAllCount', 'suppressOverflowHandling'],
  standalone: true
})
export class IxCardList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['collapseChanged', 'showAllClick', 'showMoreCardClick']);
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
  standalone: true
})
export class IxCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxCardTitle extends Components.IxCardTitle {}


@ProxyCmp({
  defineCustomElementFn: defineIxCategoryFilter,
  inputs: ['categories', 'disabled', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'readonly', 'repeatCategories', 'staticOperator', 'suggestions']
})
@Component({
  selector: 'ix-category-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['categories', 'disabled', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'readonly', 'repeatCategories', 'staticOperator', 'suggestions'],
  standalone: true
})
export class IxCategoryFilter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['categoryChanged', 'inputChanged', 'filterChanged']);
  }
}


import type { InputState as IIxCategoryFilterInputState } from '@siemens/ix/components';
import type { FilterState as IIxCategoryFilterFilterState } from '@siemens/ix/components';

export declare interface IxCategoryFilter extends Components.IxCategoryFilter {
  /**
   * Event dispatched whenever the a category gets selected in the dropdown
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
}


@ProxyCmp({
  defineCustomElementFn: defineIxChip,
  inputs: ['active', 'background', 'chipColor', 'closable', 'color', 'icon', 'outline', 'variant']
})
@Component({
  selector: 'ix-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'background', 'chipColor', 'closable', 'color', 'icon', 'outline', 'variant'],
  standalone: true
})
export class IxChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeChip']);
  }
}


export declare interface IxChip extends Components.IxChip {
  /**
   * Fire event if close button is clicked @since 1.5.0
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
  standalone: true
})
export class IxCol {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxContent {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxContentHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['backButtonClick']);
  }
}


export declare interface IxContentHeader extends Components.IxContentHeader {
  /**
   * Triggered when back button is clicked
   */
  backButtonClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxDateDropdown,
  inputs: ['customRangeAllowed', 'dateRangeId', 'dateRangeOptions', 'disabled', 'format', 'from', 'i18nCustomItem', 'i18nDone', 'i18nNoRange', 'maxDate', 'minDate', 'range', 'to'],
  methods: ['getDateRange']
})
@Component({
  selector: 'ix-date-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['customRangeAllowed', 'dateRangeId', 'dateRangeOptions', 'disabled', 'format', 'from', 'i18nCustomItem', 'i18nDone', 'i18nNoRange', 'maxDate', 'minDate', 'range', 'to'],
  standalone: true
})
export class IxDateDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dateRangeChange']);
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
  defineCustomElementFn: defineIxDatePicker,
  inputs: ['corners', 'eventDelimiter', 'format', 'from', 'i18nDone', 'individual', 'locale', 'maxDate', 'minDate', 'range', 'textSelectDate', 'to', 'weekStartIndex'],
  methods: ['getCurrentDate']
})
@Component({
  selector: 'ix-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['corners', 'eventDelimiter', 'format', 'from', 'i18nDone', 'individual', 'locale', 'maxDate', 'minDate', 'range', 'textSelectDate', 'to', 'weekStartIndex'],
  standalone: true
})
export class IxDatePicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dateChange', 'dateRangeChange', 'dateSelect', 'done']);
  }
}


import type { DateChangeEvent as IIxDatePickerDateChangeEvent } from '@siemens/ix/components';

export declare interface IxDatePicker extends Components.IxDatePicker {
  /**
   * Triggers if the date selection changes.
Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string` @since 2.1.0
   */
  dateChange: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
  /**
   * Triggers if the date selection changes.
Only triggered if date-picker-rework is in range mode. @since 2.1.0
   */
  dateRangeChange: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
  /**
   * Date selection confirmed via button action @since 1.1.0
   */
  dateSelect: EventEmitter<CustomEvent<IIxDatePickerDateChangeEvent>>;
  /**
   * Date selection confirmed via button action @deprecated NOT getting dispatched after 2.0.0. Use `dateSelect`.
   */
  done: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxDatetimePicker,
  inputs: ['dateFormat', 'eventDelimiter', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'range', 'showHour', 'showMinutes', 'showSeconds', 'showTimeReference', 'textSelectDate', 'time', 'timeFormat', 'timeReference', 'to', 'weekStartIndex']
})
@Component({
  selector: 'ix-datetime-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dateFormat', 'eventDelimiter', 'from', 'i18nDone', 'locale', 'maxDate', 'minDate', 'range', 'showHour', 'showMinutes', 'showSeconds', 'showTimeReference', 'textSelectDate', 'time', 'timeFormat', 'timeReference', 'to', 'weekStartIndex'],
  standalone: true
})
export class IxDatetimePicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['done', 'timeChange', 'dateChange', 'dateSelect']);
  }
}


import type { DateTimeDateChangeEvent as IIxDatetimePickerDateTimeDateChangeEvent } from '@siemens/ix/components';
import type { DateTimeSelectEvent as IIxDatetimePickerDateTimeSelectEvent } from '@siemens/ix/components';

export declare interface IxDatetimePicker extends Components.IxDatetimePicker {
  /**
   * Done event

Set `doneEventDelimiter` to null or undefine to get the typed event @deprecated Use `this.dateChange`
   */
  done: EventEmitter<CustomEvent<string>>;
  /**
   * Time change @since 1.1.0
   */
  timeChange: EventEmitter<CustomEvent<string>>;
  /**
   * Date change @since 1.1.0
   */
  dateChange: EventEmitter<CustomEvent<IIxDatetimePickerDateTimeDateChangeEvent>>;
  /**
   * Datetime selection event is fired after confirm button is pressed @since 1.1.0
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
  standalone: true
})
export class IxDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDivider extends Components.IxDivider {}


@ProxyCmp({
  defineCustomElementFn: defineIxDrawer,
  inputs: ['closeOnClickOutside', 'fullHeight', 'maxWidth', 'minWidth', 'show', 'width'],
  methods: ['toggleDrawer']
})
@Component({
  selector: 'ix-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeOnClickOutside', 'fullHeight', 'maxWidth', 'minWidth', 'show', 'width'],
  standalone: true
})
export class IxDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['open', 'drawerClose']);
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
  standalone: true
})
export class IxDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['showChanged']);
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
  inputs: ['closeBehavior', 'disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'variant']
})
@Component({
  selector: 'ix-dropdown-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeBehavior', 'disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'variant'],
  standalone: true
})
export class IxDropdownButton {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxDropdownHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDropdownHeader extends Components.IxDropdownHeader {}


@ProxyCmp({
  defineCustomElementFn: defineIxDropdownItem,
  inputs: ['checked', 'disabled', 'hover', 'icon', 'label'],
  methods: ['emitItemClick']
})
@Component({
  selector: 'ix-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'hover', 'icon', 'label'],
  standalone: true
})
export class IxDropdownItem {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxDropdownQuickActions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxDropdownQuickActions extends Components.IxDropdownQuickActions {}


@ProxyCmp({
  defineCustomElementFn: defineIxEmptyState,
  inputs: ['action', 'header', 'icon', 'layout', 'subHeader']
})
@Component({
  selector: 'ix-empty-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'header', 'icon', 'layout', 'subHeader'],
  standalone: true
})
export class IxEmptyState {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['actionClick']);
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
  standalone: true
})
export class IxEventList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxEventList extends Components.IxEventList {}


@ProxyCmp({
  defineCustomElementFn: defineIxEventListItem,
  inputs: ['chevron', 'color', 'disabled', 'itemColor', 'selected']
})
@Component({
  selector: 'ix-event-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['chevron', 'color', 'disabled', 'itemColor', 'selected'],
  standalone: true
})
export class IxEventListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
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
  inputs: ['fullWidth', 'icon', 'placeholder', 'value']
})
@Component({
  selector: 'ix-expanding-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fullWidth', 'icon', 'placeholder', 'value'],
  standalone: true
})
export class IxExpandingSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface IxExpandingSearch extends Components.IxExpandingSearch {
  /**
   * Value changed
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxFilterChip,
  inputs: ['disabled', 'readonly']
})
@Component({
  selector: 'ix-filter-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'readonly'],
  standalone: true
})
export class IxFilterChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeClick']);
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
  inputs: ['height', 'state', 'width']
})
@Component({
  selector: 'ix-flip-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['height', 'state', 'width'],
  standalone: true
})
export class IxFlipTile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxFlipTile extends Components.IxFlipTile {}


@ProxyCmp({
  defineCustomElementFn: defineIxFlipTileContent
})
@Component({
  selector: 'ix-flip-tile-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class IxFlipTileContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxFlipTileContent extends Components.IxFlipTileContent {}


@ProxyCmp({
  defineCustomElementFn: defineIxFormField,
  inputs: ['label']
})
@Component({
  selector: 'ix-form-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
  standalone: true
})
export class IxFormField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxFormField extends Components.IxFormField {}


@ProxyCmp({
  defineCustomElementFn: defineIxGroup,
  inputs: ['collapsed', 'expandOnHeaderClick', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection']
})
@Component({
  selector: 'ix-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsed', 'expandOnHeaderClick', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection'],
  standalone: true
})
export class IxGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectGroup', 'selectItem', 'collapsedChanged']);
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
   * Group collapsed
   */
  collapsedChanged: EventEmitter<CustomEvent<boolean>>;
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
  standalone: true
})
export class IxGroupContextMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxGroupContextMenu extends Components.IxGroupContextMenu {}


@ProxyCmp({
  defineCustomElementFn: defineIxGroupItem,
  inputs: ['focusable', 'icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text']
})
@Component({
  selector: 'ix-group-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['focusable', 'icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text'],
  standalone: true
})
export class IxGroupItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectedChanged']);
  }
}


export declare interface IxGroupItem extends Components.IxGroupItem {
  /**
   * Selection changed
   */
  selectedChanged: EventEmitter<CustomEvent<HTMLIxGroupItemElement>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxIconButton,
  inputs: ['a11yLabel', 'color', 'disabled', 'ghost', 'icon', 'iconColor', 'loading', 'outline', 'oval', 'size', 'type', 'variant']
})
@Component({
  selector: 'ix-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['a11yLabel', 'color', 'disabled', 'ghost', 'icon', 'iconColor', 'loading', 'outline', 'oval', 'size', 'type', 'variant'],
  standalone: true
})
export class IxIconButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxIconButton extends Components.IxIconButton {}


@ProxyCmp({
  defineCustomElementFn: defineIxIconToggleButton,
  inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'pressed', 'size', 'variant']
})
@Component({
  selector: 'ix-icon-toggle-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'pressed', 'size', 'variant'],
  standalone: true
})
export class IxIconToggleButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pressedChange']);
  }
}


export declare interface IxIconToggleButton extends Components.IxIconToggleButton {
  /**
   * Pressed change event
   */
  pressedChange: EventEmitter<CustomEvent<boolean>>;
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
  standalone: true
})
export class IxInputGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxInputGroup extends Components.IxInputGroup {}


@ProxyCmp({
  defineCustomElementFn: defineIxKeyValue,
  inputs: ['icon', 'label', 'labelPosition', 'value']
})
@Component({
  selector: 'ix-key-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'label', 'labelPosition', 'value'],
  standalone: true
})
export class IxKeyValue {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxKeyValueList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxKeyValueList extends Components.IxKeyValueList {}


@ProxyCmp({
  defineCustomElementFn: defineIxKpi,
  inputs: ['label', 'orientation', 'state', 'unit', 'value']
})
@Component({
  selector: 'ix-kpi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'orientation', 'state', 'unit', 'value'],
  standalone: true
})
export class IxKpi {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxKpi extends Components.IxKpi {}


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
  standalone: true
})
export class IxLayoutGrid {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxLinkButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxLinkButton extends Components.IxLinkButton {}


@ProxyCmp({
  defineCustomElementFn: defineIxMapNavigation,
  inputs: ['applicationName', 'hideContextMenu', 'navigationTitle'],
  methods: ['toggleSidebar', 'openOverlay', 'closeOverlay']
})
@Component({
  selector: 'ix-map-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationName', 'hideContextMenu', 'navigationTitle'],
  standalone: true
})
export class IxMapNavigation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['navigationToggled', 'contextMenuClick']);
  }
}


export declare interface IxMapNavigation extends Components.IxMapNavigation {
  /**
   * Navigation toggled
   */
  navigationToggled: EventEmitter<CustomEvent<boolean>>;
  /**
   * Context menu clicked
   */
  contextMenuClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxMapNavigationOverlay,
  inputs: ['color', 'icon', 'iconColor', 'name']
})
@Component({
  selector: 'ix-map-navigation-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'icon', 'iconColor', 'name'],
  standalone: true
})
export class IxMapNavigationOverlay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeClick']);
  }
}


export declare interface IxMapNavigationOverlay extends Components.IxMapNavigationOverlay {
  /**
   * Event closed
   */
  closeClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxMenu,
  inputs: ['applicationDescription', 'applicationName', 'enableMapExpand', 'enableSettings', 'enableToggleTheme', 'expand', 'i18nCollapse', 'i18nExpand', 'i18nExpandSidebar', 'i18nLegal', 'i18nSettings', 'i18nToggleTheme', 'maxVisibleMenuItems', 'pinned', 'showAbout', 'showSettings', 'startExpanded'],
  methods: ['toggleMapExpand', 'toggleMenu', 'toggleSettings', 'toggleAbout']
})
@Component({
  selector: 'ix-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['applicationDescription', 'applicationName', 'enableMapExpand', 'enableSettings', 'enableToggleTheme', 'expand', 'i18nCollapse', 'i18nExpand', 'i18nExpandSidebar', 'i18nLegal', 'i18nSettings', 'i18nToggleTheme', 'maxVisibleMenuItems', 'pinned', 'showAbout', 'showSettings', 'startExpanded'],
  standalone: true
})
export class IxMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandChange', 'mapExpandChange']);
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
}


@ProxyCmp({
  defineCustomElementFn: defineIxMenuAbout,
  inputs: ['activeTabLabel', 'label', 'show']
})
@Component({
  selector: 'ix-menu-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabLabel', 'label', 'show'],
  standalone: true
})
export class IxMenuAbout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close']);
  }
}


import type { CustomCloseEvent as IIxMenuAboutCustomCloseEvent } from '@siemens/ix/components';

export declare interface IxMenuAbout extends Components.IxMenuAbout {
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
  standalone: true
})
export class IxMenuAboutItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['labelChange']);
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
  inputs: ['aboutItemLabel', 'expanded', 'i18nShowMore', 'label', 'offsetBottom', 'show']
})
@Component({
  selector: 'ix-menu-about-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aboutItemLabel', 'expanded', 'i18nShowMore', 'label', 'offsetBottom', 'show'],
  standalone: true
})
export class IxMenuAboutNews {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['showMore', 'closePopover']);
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
  inputs: ['bottom', 'i18nLogout', 'image', 'initials', 'showLogoutButton', 'top']
})
@Component({
  selector: 'ix-menu-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bottom', 'i18nLogout', 'image', 'initials', 'showLogoutButton', 'top'],
  standalone: true
})
export class IxMenuAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['logoutClick']);
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
  standalone: true
})
export class IxMenuAvatarItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
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
  inputs: ['icon', 'label', 'notifications']
})
@Component({
  selector: 'ix-menu-category',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'label', 'notifications'],
  standalone: true
})
export class IxMenuCategory {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMenuCategory extends Components.IxMenuCategory {}


@ProxyCmp({
  defineCustomElementFn: defineIxMenuItem,
  inputs: ['active', 'bottom', 'disabled', 'home', 'icon', 'label', 'notifications', 'tabIcon']
})
@Component({
  selector: 'ix-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'bottom', 'disabled', 'home', 'icon', 'label', 'notifications', 'tabIcon'],
  standalone: true
})
export class IxMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxMenuItem extends Components.IxMenuItem {}


@ProxyCmp({
  defineCustomElementFn: defineIxMenuSettings,
  inputs: ['activeTabLabel', 'label', 'show']
})
@Component({
  selector: 'ix-menu-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTabLabel', 'label', 'show'],
  standalone: true
})
export class IxMenuSettings {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close']);
  }
}


import type { CustomCloseEvent as IIxMenuSettingsCustomCloseEvent } from '@siemens/ix/components';

export declare interface IxMenuSettings extends Components.IxMenuSettings {
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
  standalone: true
})
export class IxMenuSettingsItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['labelChange']);
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
  inputs: ['dismissible', 'type']
})
@Component({
  selector: 'ix-message-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dismissible', 'type'],
  standalone: true
})
export class IxMessageBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closedChange']);
  }
}


export declare interface IxMessageBar extends Components.IxMessageBar {
  /**
   * An event emitted when the close button is clicked
   */
  closedChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxModal,
  inputs: ['animation', 'backdrop', 'beforeDismiss', 'centered', 'closeOnBackdropClick', 'closeOnEscape', 'keyboard', 'size'],
  methods: ['showModal', 'dismissModal', 'closeModal']
})
@Component({
  selector: 'ix-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animation', 'backdrop', 'beforeDismiss', 'centered', 'closeOnBackdropClick', 'closeOnEscape', 'keyboard', 'size'],
  standalone: true
})
export class IxModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dialogClose', 'dialogDismiss']);
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
  standalone: true
})
export class IxModalContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxModalContent extends Components.IxModalContent {}


@ProxyCmp({
  defineCustomElementFn: defineIxModalExample
})
@Component({
  selector: 'ix-modal-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class IxModalExample {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxModalExample extends Components.IxModalExample {}


@ProxyCmp({
  defineCustomElementFn: defineIxModalFooter
})
@Component({
  selector: 'ix-modal-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class IxModalFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxModalFooter extends Components.IxModalFooter {}


@ProxyCmp({
  defineCustomElementFn: defineIxModalHeader,
  inputs: ['hideClose', 'icon', 'iconColor']
})
@Component({
  selector: 'ix-modal-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hideClose', 'icon', 'iconColor'],
  standalone: true
})
export class IxModalHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeClick']);
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
  defineCustomElementFn: defineIxPagination,
  inputs: ['advanced', 'count', 'i18nItems', 'i18nOf', 'i18nPage', 'itemCount', 'selectedPage', 'showItemCount']
})
@Component({
  selector: 'ix-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['advanced', 'count', 'i18nItems', 'i18nOf', 'i18nPage', 'itemCount', 'selectedPage', 'showItemCount'],
  standalone: true
})
export class IxPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pageSelected', 'itemCountChanged']);
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
  inputs: ['borderless', 'composition', 'expanded', 'heading', 'hideOnCollapse', 'icon', 'size', 'variant']
})
@Component({
  selector: 'ix-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['borderless', 'composition', 'expanded', 'heading', 'hideOnCollapse', 'icon', 'size', 'variant'],
  standalone: true
})
export class IxPane {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandedChanged', 'variantChanged', 'borderlessChanged']);
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
  standalone: true
})
export class IxPaneLayout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPaneLayout extends Components.IxPaneLayout {}


@ProxyCmp({
  defineCustomElementFn: defineIxPill,
  inputs: ['alignLeft', 'background', 'color', 'icon', 'outline', 'pillColor', 'variant']
})
@Component({
  selector: 'ix-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignLeft', 'background', 'color', 'icon', 'outline', 'pillColor', 'variant'],
  standalone: true
})
export class IxPill {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPill extends Components.IxPill {}


@ProxyCmp({
  defineCustomElementFn: defineIxPushCard,
  inputs: ['collapse', 'heading', 'icon', 'notification', 'subheading', 'variant']
})
@Component({
  selector: 'ix-push-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapse', 'heading', 'icon', 'notification', 'subheading', 'variant'],
  standalone: true
})
export class IxPushCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxPushCard extends Components.IxPushCard {}


@ProxyCmp({
  defineCustomElementFn: defineIxRow
})
@Component({
  selector: 'ix-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class IxRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxRow extends Components.IxRow {}


@ProxyCmp({
  defineCustomElementFn: defineIxSelect,
  inputs: ['allowClear', 'disabled', 'editable', 'hideListHeader', 'i18nNoMatches', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nSelectListHeader', 'mode', 'readonly', 'selectedIndices', 'value']
})
@Component({
  selector: 'ix-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowClear', 'disabled', 'editable', 'hideListHeader', 'i18nNoMatches', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nSelectListHeader', 'mode', 'readonly', 'selectedIndices', 'value'],
  standalone: true
})
export class IxSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'itemSelectionChange', 'inputChange', 'addItem']);
  }
}


export declare interface IxSelect extends Components.IxSelect {
  /**
   * Value changed @since 2.0.0
   */
  valueChange: EventEmitter<CustomEvent<string | string[]>>;
  /**
   * Item selection changed @deprecated since 2.0.0. Use `valueChange` instead.
   */
  itemSelectionChange: EventEmitter<CustomEvent<string[]>>;
  /**
   * Event dispatched whenever the text input changes. @since 2.0.0
   */
  inputChange: EventEmitter<CustomEvent<string>>;
  /**
   * Item added to selection
   */
  addItem: EventEmitter<CustomEvent<string>>;
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
  inputs: ['label', 'selected', 'value'],
  standalone: true
})
export class IxSelectItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
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
  standalone: true
})
export class IxSlider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
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
  standalone: true
})
export class IxSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxSpinner extends Components.IxSpinner {}


@ProxyCmp({
  defineCustomElementFn: defineIxSplitButton,
  inputs: ['closeBehavior', 'disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'splitIcon', 'variant']
})
@Component({
  selector: 'ix-split-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeBehavior', 'disabled', 'ghost', 'icon', 'label', 'outline', 'placement', 'splitIcon', 'variant'],
  standalone: true
})
export class IxSplitButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClick']);
  }
}


export declare interface IxSplitButton extends Components.IxSplitButton {
  /**
   * Button clicked
   */
  buttonClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxSplitButtonItem,
  inputs: ['icon', 'label']
})
@Component({
  selector: 'ix-split-button-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', 'label'],
  standalone: true
})
export class IxSplitButtonItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface IxSplitButtonItem extends Components.IxSplitButtonItem {
  /**
   * Dropdown item clicked
   */
  itemClick: EventEmitter<CustomEvent<MouseEvent>>;
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
  standalone: true
})
export class IxTabItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabClick']);
  }
}


import type { TabClickDetail as IIxTabItemTabClickDetail } from '@siemens/ix/components';

export declare interface IxTabItem extends Components.IxTabItem {
  /**
   * Emitted when the tab is clicked. @since 2.0.0
   */
  tabClick: EventEmitter<CustomEvent<IIxTabItemTabClickDetail>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxTabs,
  inputs: ['layout', 'placement', 'rounded', 'selected', 'small']
})
@Component({
  selector: 'ix-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['layout', 'placement', 'rounded', 'selected', 'small'],
  standalone: true
})
export class IxTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectedChange']);
  }
}


export declare interface IxTabs extends Components.IxTabs {
  /**
   * `selected` property changed @since 2.0.0
   */
  selectedChange: EventEmitter<CustomEvent<number>>;
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
  standalone: true
})
export class IxTile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTile extends Components.IxTile {}


@ProxyCmp({
  defineCustomElementFn: defineIxTimePicker,
  inputs: ['corners', 'format', 'individual', 'showHour', 'showMinutes', 'showSeconds', 'showTimeReference', 'standaloneAppearance', 'textSelectTime', 'textTime', 'time', 'timeReference'],
  methods: ['getCurrentTime']
})
@Component({
  selector: 'ix-time-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['corners', 'format', 'individual', 'showHour', 'showMinutes', 'showSeconds', 'showTimeReference', 'standaloneAppearance', 'textSelectTime', 'textTime', 'time', 'timeReference'],
  standalone: true
})
export class IxTimePicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['timeSelect', 'done', 'timeChange']);
  }
}


export declare interface IxTimePicker extends Components.IxTimePicker {
  /**
   * Time event
   */
  timeSelect: EventEmitter<CustomEvent<string>>;
  /**
   * Time event @deprecated Will be removed in 3.0.0. Use `time-select` event.
   */
  done: EventEmitter<CustomEvent<string>>;
  /**
   * Time change event
   */
  timeChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxToast,
  inputs: ['autoClose', 'autoCloseDelay', 'icon', 'iconColor', 'toastTitle', 'type']
})
@Component({
  selector: 'ix-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoClose', 'autoCloseDelay', 'icon', 'iconColor', 'toastTitle', 'type'],
  standalone: true
})
export class IxToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeToast']);
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
  standalone: true
})
export class IxToastContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxToastContainer extends Components.IxToastContainer {}


@ProxyCmp({
  defineCustomElementFn: defineIxToggle,
  inputs: ['checked', 'disabled', 'hideText', 'indeterminate', 'textIndeterminate', 'textOff', 'textOn']
})
@Component({
  selector: 'ix-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'hideText', 'indeterminate', 'textIndeterminate', 'textOff', 'textOn'],
  standalone: true
})
export class IxToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface IxToggle extends Components.IxToggle {
  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  checkedChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxToggleButton,
  inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'pressed', 'variant']
})
@Component({
  selector: 'ix-toggle-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'ghost', 'icon', 'loading', 'outline', 'pressed', 'variant'],
  standalone: true
})
export class IxToggleButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pressedChange']);
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
  standalone: true
})
export class IxTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IxTooltip extends Components.IxTooltip {}


@ProxyCmp({
  defineCustomElementFn: defineIxTreeItem,
  inputs: ['context', 'hasChildren', 'text']
})
@Component({
  selector: 'ix-tree-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['context', 'hasChildren', 'text'],
  standalone: true
})
export class IxTreeItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggle', 'itemClick']);
  }
}


export declare interface IxTreeItem extends Components.IxTreeItem {
  /**
   * Expand/Collapsed toggled
   */
  toggle: EventEmitter<CustomEvent<void>>;
  /**
   * Clicked
   */
  itemClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineIxTypography,
  inputs: ['bold', 'color', 'format', 'textColor', 'textDecoration']
})
@Component({
  selector: 'ix-typography',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bold', 'color', 'format', 'textColor', 'textDecoration'],
  standalone: true
})
export class IxTypography {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxUpload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['filesChanged']);
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
  standalone: true
})
export class IxValidationTooltip {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxWorkflowStep {
  protected el: HTMLElement;
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
  standalone: true
})
export class IxWorkflowSteps {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['stepSelected']);
  }
}


export declare interface IxWorkflowSteps extends Components.IxWorkflowSteps {
  /**
   * On step selected event
   */
  stepSelected: EventEmitter<CustomEvent<number>>;
}


