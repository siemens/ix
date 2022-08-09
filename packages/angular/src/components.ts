/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@siemens/ix';




export declare interface CwAnimatedTab extends Components.CwAnimatedTab {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['count', 'icon']
})
@Component({
  selector: 'cw-animated-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['count', 'icon']
})
export class CwAnimatedTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwAnimatedTabs extends Components.CwAnimatedTabs {
  /**
   * Tab navigated 
   */
  tabClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disableAnimations', 'selectedIndex', 'tabPlacement']
})
@Component({
  selector: 'cw-animated-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disableAnimations', 'selectedIndex', 'tabPlacement']
})
export class CwAnimatedTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabClick']);
  }
}


export declare interface CwApplicationHeader extends Components.CwApplicationHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['name']
})
@Component({
  selector: 'cw-application-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['name']
})
export class CwApplicationHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwBasicNavigation extends Components.CwBasicNavigation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['applicationName', 'hideHeader']
})
@Component({
  selector: 'cw-basic-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['applicationName', 'hideHeader']
})
export class CwBasicNavigation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwBlind extends Components.CwBlind {
  /**
   * Collapsed state changed 
   */
  collapsedChange: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['collapsed', 'label']
})
@Component({
  selector: 'cw-blind',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapsed', 'label']
})
export class CwBlind {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['collapsedChange']);
  }
}


export declare interface CwBreadcrumb extends Components.CwBreadcrumb {
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
  defineCustomElementFn: undefined,
  inputs: ['ghost', 'nextItems', 'visibleItemCount']
})
@Component({
  selector: 'cw-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ghost', 'nextItems', 'visibleItemCount']
})
export class CwBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick', 'nextClick']);
  }
}


export declare interface CwBreadcrumbItem extends Components.CwBreadcrumbItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['icon', 'label']
})
@Component({
  selector: 'cw-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'label']
})
export class CwBreadcrumbItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwButton extends Components.CwButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'ghost', 'invisible', 'outline', 'selected', 'variant']
})
@Component({
  selector: 'cw-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'ghost', 'invisible', 'outline', 'selected', 'variant']
})
export class CwButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { InputState as ICwCategoryFilterInputState } from '@siemens/ix';
import type { FilterState as ICwCategoryFilterFilterState } from '@siemens/ix';
export declare interface CwCategoryFilter extends Components.CwCategoryFilter {
  /**
   * Event dispatched whenever the text input changes. 
   */
  inputChanged: EventEmitter<CustomEvent<ICwCategoryFilterInputState>>;
  /**
   * Event dispatched whenever the filter state changes. 
   */
  filterChanged: EventEmitter<CustomEvent<ICwCategoryFilterFilterState>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['categories', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'initialState', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'repeatCategories', 'suggestions', 'tmpDisableScrollIntoView']
})
@Component({
  selector: 'cw-category-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['categories', 'filterState', 'hideIcon', 'i18nPlainText', 'icon', 'initialState', 'labelCategories', 'nonSelectableCategories', 'placeholder', 'repeatCategories', 'suggestions', 'tmpDisableScrollIntoView']
})
export class CwCategoryFilter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputChanged', 'filterChanged']);
  }
}


export declare interface CwChip extends Components.CwChip {
  /**
   * Fire event if close button is clicked 
   */
  close: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['active', 'background', 'closable', 'color', 'icon', 'outline', 'variant']
})
@Component({
  selector: 'cw-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'background', 'closable', 'color', 'icon', 'outline', 'variant']
})
export class CwChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close']);
  }
}


export declare interface CwCounterPill extends Components.CwCounterPill {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alignLeft', 'background', 'color', 'outline', 'variant']
})
@Component({
  selector: 'cw-counter-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alignLeft', 'background', 'color', 'outline', 'variant']
})
export class CwCounterPill {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwDrawer extends Components.CwDrawer {
  /**
   * Fire event after drawer is open 
   */
  open: EventEmitter<CustomEvent<any>>;
  /**
   * Fire event after drawer is close 
   */
  close: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['closeOnClickOutside', 'fullHeight', 'maxWidth', 'minWidth', 'show', 'width'],
  methods: ['toggleDrawer']
})
@Component({
  selector: 'cw-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeOnClickOutside', 'fullHeight', 'maxWidth', 'minWidth', 'show', 'width']
})
export class CwDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['open', 'close']);
  }
}


export declare interface CwDropdown extends Components.CwDropdown {
  /**
   * Fire event after visibility of dropdown has changed 
   */
  showChanged: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['adjustDropdownWidthToReferenceWidth', 'adjustDropdownWidthToReferenceWith', 'anchor', 'closeBehavior', 'header', 'placement', 'positioningStrategy', 'show', 'trigger'],
  methods: ['updatePosition']
})
@Component({
  selector: 'cw-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['adjustDropdownWidthToReferenceWidth', 'adjustDropdownWidthToReferenceWith', 'anchor', 'closeBehavior', 'header', 'placement', 'positioningStrategy', 'show', 'trigger']
})
export class CwDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['showChanged']);
  }
}


export declare interface CwDropdownItem extends Components.CwDropdownItem {
  /**
   * Click on item 
   */
  itemClick: EventEmitter<CustomEvent<HTMLCwDropdownItemElement>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'hover', 'icon', 'label'],
  methods: ['emitItemClick']
})
@Component({
  selector: 'cw-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'hover', 'icon', 'label']
})
export class CwDropdownItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface CwEventList extends Components.CwEventList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'chevron', 'compact', 'itemHeight']
})
@Component({
  selector: 'cw-event-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'chevron', 'compact', 'itemHeight']
})
export class CwEventList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwEventListItem extends Components.CwEventListItem {
  /**
   * Event list item click 
   */
  itemClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['chevron', 'color', 'disabled', 'opacity', 'selected']
})
@Component({
  selector: 'cw-event-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['chevron', 'color', 'disabled', 'opacity', 'selected']
})
export class CwEventListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface CwExpandingSearch extends Components.CwExpandingSearch {
  /**
   * Value changed 
   */
  valueChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['icon', 'placeholder', 'value']
})
@Component({
  selector: 'cw-expanding-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'placeholder', 'value']
})
export class CwExpandingSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CwFilterChip extends Components.CwFilterChip {
  /**
   * Close clicked 
   */
  closeClick: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled']
})
@Component({
  selector: 'cw-filter-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled']
})
export class CwFilterChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeClick']);
  }
}


export declare interface CwFlipTile extends Components.CwFlipTile {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['footer', 'state']
})
@Component({
  selector: 'cw-flip-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['footer', 'state']
})
export class CwFlipTile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwFlipTileContent extends Components.CwFlipTileContent {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'cw-flip-tile-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CwFlipTileContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwGroup extends Components.CwGroup {
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
  defineCustomElementFn: undefined,
  inputs: ['collapsed', 'expandOnHeaderClick', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection']
})
@Component({
  selector: 'cw-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapsed', 'expandOnHeaderClick', 'header', 'index', 'selected', 'subHeader', 'suppressHeaderSelection']
})
export class CwGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectGroup', 'selectItem', 'collapsedChanged']);
  }
}


export declare interface CwGroupDropdownItem extends Components.CwGroupDropdownItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['icon', 'label']
})
@Component({
  selector: 'cw-group-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'label']
})
export class CwGroupDropdownItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwGroupItem extends Components.CwGroupItem {
  /**
   * Selection changed 
   */
  selectedChanged: EventEmitter<CustomEvent<HTMLCwGroupItemElement>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text']
})
@Component({
  selector: 'cw-group-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'index', 'secondaryText', 'selected', 'suppressSelection', 'text']
})
export class CwGroupItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectedChanged']);
  }
}


export declare interface CwIcon extends Components.CwIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'name', 'size']
})
@Component({
  selector: 'cw-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'name', 'size']
})
export class CwIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwIconButton extends Components.CwIconButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'disabled', 'ghost', 'icon', 'invisible', 'outline', 'oval', 'selected', 'size', 'variant']
})
@Component({
  selector: 'cw-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'ghost', 'icon', 'invisible', 'outline', 'oval', 'selected', 'size', 'variant']
})
export class CwIconButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwInputGroup extends Components.CwInputGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'cw-input-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CwInputGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwMapNavigation extends Components.CwMapNavigation {
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
  defineCustomElementFn: undefined,
  inputs: ['appName', 'hideContextMenu', 'navTitle'],
  methods: ['openOverlay', 'closeOverlay']
})
@Component({
  selector: 'cw-map-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appName', 'hideContextMenu', 'navTitle']
})
export class CwMapNavigation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['navigationToggled', 'contextMenuClick']);
  }
}


export declare interface CwMapNavigationOverlay extends Components.CwMapNavigationOverlay {
  /**
   * Event closed 
   */
  closeClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'icon', 'name']
})
@Component({
  selector: 'cw-map-navigation-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'icon', 'name']
})
export class CwMapNavigationOverlay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeClick']);
  }
}


export declare interface CwMenu extends Components.CwMenu {
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
  defineCustomElementFn: undefined,
  inputs: ['applicationDescription', 'applicationName', 'enableMapExpand', 'enableSettings', 'enableToggleTheme', 'expand', 'i18nCollapse', 'i18nExpand', 'i18nLegal', 'i18nMore', 'i18nSettings', 'i18nToggleTheme', 'maxVisibleMenuItems', 'showAbout', 'showSettings'],
  methods: ['toggleMapExpand', 'toggleMenu', 'toggleSettings', 'toggleAbout']
})
@Component({
  selector: 'cw-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['applicationDescription', 'applicationName', 'enableMapExpand', 'enableSettings', 'enableToggleTheme', 'expand', 'i18nCollapse', 'i18nExpand', 'i18nLegal', 'i18nMore', 'i18nSettings', 'i18nToggleTheme', 'maxVisibleMenuItems', 'showAbout', 'showSettings']
})
export class CwMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandChange', 'mapExpandChange']);
  }
}


export declare interface CwMenuAbout extends Components.CwMenuAbout {
  /**
   * About and Legal closed 
   */
  close: EventEmitter<CustomEvent<MouseEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activeTabLabel', 'applicationDescription', 'applicationName', 'copyrightYears', 'i18nCookieNoticeLabel', 'i18nCorporateLabel', 'i18nDigitalId', 'i18nImprintLabel', 'i18nPrivacyNoticeLabel', 'i18nTermsOfUseLabel', 'imprintLanguage', 'label', 'show']
})
@Component({
  selector: 'cw-menu-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeTabLabel', 'applicationDescription', 'applicationName', 'copyrightYears', 'i18nCookieNoticeLabel', 'i18nCorporateLabel', 'i18nDigitalId', 'i18nImprintLabel', 'i18nPrivacyNoticeLabel', 'i18nTermsOfUseLabel', 'imprintLanguage', 'label', 'show']
})
export class CwMenuAbout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close']);
  }
}


export declare interface CwMenuAboutItem extends Components.CwMenuAboutItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label']
})
@Component({
  selector: 'cw-menu-about-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label']
})
export class CwMenuAboutItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwMenuAboutNews extends Components.CwMenuAboutNews {
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
  defineCustomElementFn: undefined,
  inputs: ['aboutItemLabel', 'expanded', 'i18nShowMore', 'label', 'offsetBottom', 'show']
})
@Component({
  selector: 'cw-menu-about-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['aboutItemLabel', 'expanded', 'i18nShowMore', 'label', 'offsetBottom', 'show']
})
export class CwMenuAboutNews {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['showMore', 'closePopover']);
  }
}


export declare interface CwMenuAvatar extends Components.CwMenuAvatar {
  /**
   * Logout click 
   */
  logoutClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['bottom', 'i18nLogout', 'top']
})
@Component({
  selector: 'cw-menu-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['bottom', 'i18nLogout', 'top']
})
export class CwMenuAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['logoutClick']);
  }
}


export declare interface CwMenuAvatarItem extends Components.CwMenuAvatarItem {
  /**
   * Avatar dropdown item clicked 
   */
  itemClick: EventEmitter<CustomEvent<MouseEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['icon', 'label']
})
@Component({
  selector: 'cw-menu-avatar-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'label']
})
export class CwMenuAvatarItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface CwMenuItem extends Components.CwMenuItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['active', 'bottom', 'disabled', 'home', 'notifications', 'tabIcon']
})
@Component({
  selector: 'cw-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'bottom', 'disabled', 'home', 'notifications', 'tabIcon']
})
export class CwMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwMenuSettings extends Components.CwMenuSettings {
  /**
   * Popover closed 
   */
  close: EventEmitter<CustomEvent<MouseEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activeTabLabel', 'label', 'show']
})
@Component({
  selector: 'cw-menu-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeTabLabel', 'label', 'show']
})
export class CwMenuSettings {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close']);
  }
}


export declare interface CwMenuSettingsItem extends Components.CwMenuSettingsItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label']
})
@Component({
  selector: 'cw-menu-settings-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label']
})
export class CwMenuSettingsItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwMessageBar extends Components.CwMessageBar {
  /**
   * An event emitted when the close button is clicked 
   */
  closedChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['dismissible', 'type']
})
@Component({
  selector: 'cw-message-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dismissible', 'type']
})
export class CwMessageBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closedChange']);
  }
}


export declare interface CwModal extends Components.CwModal {
  /**
   * Modal closed 
   */
  closed: EventEmitter<CustomEvent<any>>;
  /**
   * Modal dismissed 
   */
  dismissed: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animation', 'ariaDescribedBy', 'ariaLabelledBy', 'backdrop', 'backdropClass', 'beforeDismiss', 'centered', 'content', 'headerTitle', 'icon', 'iconColor', 'keyboard', 'modalDialogClass', 'scrollable', 'size', 'windowClass'],
  methods: ['dismiss', 'close']
})
@Component({
  selector: 'cw-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animation', 'ariaDescribedBy', 'ariaLabelledBy', 'backdrop', 'backdropClass', 'beforeDismiss', 'centered', 'content', 'headerTitle', 'icon', 'iconColor', 'keyboard', 'modalDialogClass', 'scrollable', 'size', 'windowClass']
})
export class CwModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closed', 'dismissed']);
  }
}


export declare interface CwModalContainer extends Components.CwModalContainer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  methods: ['showModal']
})
@Component({
  selector: 'cw-modal-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CwModalContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwModalExample extends Components.CwModalExample {
  /**
   * Emit close modal 
   */
  close: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'cw-modal-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CwModalExample {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close']);
  }
}


export declare interface CwPill extends Components.CwPill {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alignLeft', 'background', 'color', 'icon', 'outline', 'variant']
})
@Component({
  selector: 'cw-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alignLeft', 'background', 'color', 'icon', 'outline', 'variant']
})
export class CwPill {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwSelect extends Components.CwSelect {
  /**
   * Item selection changed 
   */
  itemSelectionChange: EventEmitter<CustomEvent<string | string[]>>;
  /**
   * Item added to selection 
   */
  addItem: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['allowClear', 'disabled', 'editable', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nSelectListHeader', 'mode', 'readonly', 'selectedIndices']
})
@Component({
  selector: 'cw-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowClear', 'disabled', 'editable', 'i18nPlaceholder', 'i18nPlaceholderEditable', 'i18nSelectListHeader', 'mode', 'readonly', 'selectedIndices']
})
export class CwSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemSelectionChange', 'addItem']);
  }
}


export declare interface CwSelectItem extends Components.CwSelectItem {
  /**
   * Item clicked 
   */
  itemClick: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hover', 'label', 'selected', 'value'],
  methods: ['onItemClick']
})
@Component({
  selector: 'cw-select-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hover', 'label', 'selected', 'value']
})
export class CwSelectItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface CwSpinner extends Components.CwSpinner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size', 'variant']
})
@Component({
  selector: 'cw-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size', 'variant']
})
export class CwSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwSplitButton extends Components.CwSplitButton {
  /**
   * Button clicked 
   */
  buttonClick: EventEmitter<CustomEvent<MouseEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'ghost', 'icon', 'invisible', 'label', 'outline', 'placement', 'splitIcon', 'variant']
})
@Component({
  selector: 'cw-split-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'ghost', 'icon', 'invisible', 'label', 'outline', 'placement', 'splitIcon', 'variant']
})
export class CwSplitButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClick']);
  }
}


export declare interface CwSplitButtonItem extends Components.CwSplitButtonItem {
  /**
   * Dropdown item clicked 
   */
  itemClick: EventEmitter<CustomEvent<MouseEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['icon', 'label']
})
@Component({
  selector: 'cw-split-button-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'label']
})
export class CwSplitButtonItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface CwTabItem extends Components.CwTabItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'icon', 'layout', 'placement', 'selected', 'small']
})
@Component({
  selector: 'cw-tab-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'icon', 'layout', 'placement', 'selected', 'small']
})
export class CwTabItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwTabs extends Components.CwTabs {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['layout', 'placement', 'selected', 'small']
})
@Component({
  selector: 'cw-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['layout', 'placement', 'selected', 'small']
})
export class CwTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwTile extends Components.CwTile {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'cw-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class CwTile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwToast extends Components.CwToast {
  /**
   * Toast closed 
   */
  closeToast: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoClose', 'autoCloseDelay', 'icon', 'iconColor', 'toastTitle', 'type']
})
@Component({
  selector: 'cw-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoClose', 'autoCloseDelay', 'icon', 'iconColor', 'toastTitle', 'type']
})
export class CwToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeToast']);
  }
}


export declare interface CwToastContainer extends Components.CwToastContainer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['containerClass', 'containerId', 'position'],
  methods: ['getEvents', 'showToast']
})
@Component({
  selector: 'cw-toast-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['containerClass', 'containerId', 'position']
})
export class CwToastContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CwToggle extends Components.CwToggle {
  /**
   * An event will be dispatched each time the slide-toggle changes its value. 
   */
  checkedChange: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'color', 'disabled', 'hideText', 'textOff', 'textOn']
})
@Component({
  selector: 'cw-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'color', 'disabled', 'hideText', 'textOff', 'textOn']
})
export class CwToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}

import type { TreeContext as ICwTreeTreeContext } from '@siemens/ix';
export declare interface CwTree extends Components.CwTree {
  /**
   * Context changed 
   */
  contextChange: EventEmitter<CustomEvent<ICwTreeTreeContext>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['context', 'model', 'renderItem', 'root']
})
@Component({
  selector: 'cw-tree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['context', 'model', 'renderItem', 'root']
})
export class CwTree {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['contextChange']);
  }
}


export declare interface CwTreeItem extends Components.CwTreeItem {
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
  defineCustomElementFn: undefined,
  inputs: ['context', 'hasChildren', 'text']
})
@Component({
  selector: 'cw-tree-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['context', 'hasChildren', 'text']
})
export class CwTreeItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggle', 'itemClick']);
  }
}


export declare interface CwUpload extends Components.CwUpload {
  /**
   * You get an array of Files after drop-action or browse action is finished 
   */
  filesChanged: EventEmitter<CustomEvent<Array<File>>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['accept', 'disabled', 'i18nUploadFile', 'loadingText', 'multiple', 'selectFileText', 'state', 'uploadFailedText', 'uploadSuccessText'],
  methods: ['setFilesToUpload']
})
@Component({
  selector: 'cw-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'disabled', 'i18nUploadFile', 'loadingText', 'multiple', 'selectFileText', 'state', 'uploadFailedText', 'uploadSuccessText']
})
export class CwUpload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['filesChanged']);
  }
}
