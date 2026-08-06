import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-DSse0xVy.js";
import { t as iconChevronDownSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { m as modulesExports } from "./index-CE4sJ-mE-CmD1XbUn.js";
import { c as closestIxMenu } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-DqJSHc3A-D5InBSMm.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-nCmPujqf-BypSEB_l.js";
import { g as getComposedPath } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { d as dropdownController } from "./dropdown-controller-Jfg3ZWk6-Dkh7kLy3.js";
import { c as createSequentialId } from "./uuid-D3T7Lr4G-CKA8Zb0e.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./a11y-C21npbUc-CU_Bg8RX.js";
import "./path-utils-CNLoALIl-DdIsPRiD.js";
const menuCategoryCss = () => `:host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-text{width:100%;padding-right:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .category-chevron{margin-left:auto;margin-right:0;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0;transition:var(--theme-default-time) max-height ease-in-out}:host .menu-items--expanded{max-height:999999999px;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--collapsed{display:none}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{pointer-events:none;padding-left:0.125rem;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}`;
const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
let categorySequenceId = 0;
const MenuCategory = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.closeOtherCategories = createEvent(this, "closeOtherCategories", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Display name of the category
   */
  label;
  /**
   * Icon of the category
   */
  icon;
  /**
   * Show notification count on the category
   */
  notifications;
  /**
   * Will be shown as tooltip text, if not provided menu text content will be used.
   *
   * @since 4.0.0
   */
  tooltipText;
  /** @internal */
  closeOtherCategories;
  menuExpand = false;
  showItems = false;
  showDropdown = false;
  nestedItems = [];
  /** @internal */
  async setTabIndex(value) {
    await this.categoryParentRef.current?.setTabIndex(value);
  }
  observer;
  menuItemsContainer;
  ixMenu;
  dropdownRef = makeRef();
  categoryParentRef = makeRef();
  categoryId = createSequentialId("ix-menu-category-", categorySequenceId++);
  focusFirstItemOnDropdownOpen = false;
  isNestedItemActive() {
    return this.getNestedItems().some((item) => item.active);
  }
  getNestedItems() {
    return Array.from(this.hostElement.querySelectorAll(":scope ix-menu-item"));
  }
  getNestedItemsHeight() {
    const items = this.getNestedItems();
    return items.length * DefaultIxMenuItemHeight;
  }
  focusFirstItem() {
    const items = this.getNestedItems();
    const firstItem = items[0];
    if (firstItem) {
      requestAnimationFrameNoNgZone(() => firstItem.focus());
    }
  }
  onExpandCategory(showItems) {
    if (showItems) {
      this.animateFadeIn();
    } else {
      this.animateFadeOut();
    }
  }
  animateFadeOut() {
    const slotHideThresholdMs = 25;
    modulesExports.animate(this.menuItemsContainer, {
      duration: DefaultAnimationTimeout,
      easing: "easeInSine",
      opacity: [1, 0],
      maxHeight: [this.getNestedItemsHeight() + DefaultIxMenuItemHeight, 0],
      onComplete: () => {
        setTimeout(() => {
          this.showItems = false;
          this.showDropdown = false;
        }, DefaultAnimationTimeout + slotHideThresholdMs);
      }
    });
  }
  animateFadeIn() {
    this.showItems = true;
    this.showDropdown = false;
    modulesExports.animate(this.menuItemsContainer, {
      duration: DefaultAnimationTimeout,
      easing: "easeInSine",
      opacity: [0, 1],
      maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight]
    });
  }
  showMenuItemDropdown() {
    if (this.ixMenu?.expand) {
      return;
    }
    this.closeOtherCategories.emit(this.categoryId);
    if (this.dropdownRef.current) {
      const ref = dropdownController.getDropdownById(this.dropdownRef.current.dataset.ixDropdown);
      if (ref) {
        dropdownController.present(ref);
      }
    }
  }
  hideMenuItemDropdown(event) {
    if (event?.detail === this.categoryId) {
      return;
    }
    if (this.dropdownRef.current) {
      const ref = dropdownController.getDropdownById(this.dropdownRef.current.dataset.ixDropdown);
      if (ref) {
        dropdownController.dismiss(ref);
      }
    }
  }
  handleCategoryVisibility() {
    if (this.ixMenu?.expand) {
      this.onExpandCategory(!this.showItems);
      return;
    }
    this.showMenuItemDropdown();
  }
  onDropdownShowChange(dropdownShow) {
    if (dropdownShow) {
      return;
    }
    const activeElement = document.activeElement;
    const isFocused = getComposedPath(activeElement).includes(this.hostElement);
    if (hasKeyboardMode() && isFocused) {
      requestAnimationFrameNoNgZone(() => requestAnimationFrameNoNgZone(() => this.hostElement.focus()));
    }
  }
  onDropdownShowChanged(dropdownShown) {
    this.showDropdown = dropdownShown;
    if (!dropdownShown) {
      this.focusFirstItemOnDropdownOpen = false;
      return;
    }
    if (this.focusFirstItemOnDropdownOpen) {
      this.focusFirstItemOnDropdownOpen = false;
      this.focusFirstItem();
    }
  }
  onDropdownFocusOut() {
    requestAnimationFrameNoNgZone(() => {
      const activeElement = document.activeElement;
      if (!activeElement) {
        return;
      }
      const activePath = getComposedPath(activeElement);
      const focusInsideCategory = activePath.includes(this.hostElement);
      const focusInsideDropdown = !!this.dropdownRef.current && activePath.includes(this.dropdownRef.current);
      if (!focusInsideCategory && !focusInsideDropdown) {
        this.showDropdown = false;
      }
    });
  }
  onNestedItemSelect() {
    if (!this.ixMenu?.expand) {
      this.showDropdown = false;
    }
  }
  onCategoryClick(event) {
    event.stopPropagation();
    this.handleCategoryVisibility();
  }
  onKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const isClosingPanel = this.ixMenu?.expand && this.showItems;
      const isCollapsedMenu = !this.ixMenu?.expand;
      this.handleCategoryVisibility();
      if (!isClosingPanel) {
        if (isCollapsedMenu) {
          this.focusFirstItemOnDropdownOpen = true;
          return;
        }
        this.focusFirstItem();
      }
      return;
    }
    if (event.key === "ArrowDown" && this.showItems) {
      event.preventDefault();
      this.focusFirstItem();
    }
  }
  onMenuItemsKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.categoryParentRef.current?.focus();
      this.handleCategoryVisibility();
      return;
    }
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "Tab") {
      return;
    }
    const items = this.getNestedItems();
    if (items.length === 0) {
      return;
    }
    const path = event.composedPath();
    const currentIndex = items.findIndex((item) => path.includes(item));
    if (currentIndex === -1) {
      return;
    }
    event.preventDefault();
    if (event.key === "ArrowDown" || event.key === "Tab" && !event.shiftKey) {
      items[(currentIndex + 1) % items.length].focus();
    } else {
      items[(currentIndex - 1 + items.length) % items.length].focus();
    }
  }
  suppressAnchorWrapperTabStops() {
    Array.from(this.hostElement.querySelectorAll(":scope > a")).filter((a) => a.querySelector("ix-menu-item")).forEach((a) => {
      if (a.getAttribute("tabindex") !== "-1") {
        a.setAttribute("tabindex", "-1");
      }
    });
  }
  onNestedItemsChanged(mutations) {
    this.suppressAnchorWrapperTabStops();
    const oldNestedItemsLength = this.nestedItems.length;
    this.nestedItems = this.getNestedItems();
    if (this.showItems && this.menuItemsContainer && oldNestedItemsLength !== this.nestedItems.length) {
      this.menuItemsContainer.style.maxHeight = `${this.getNestedItemsHeight() + DefaultIxMenuItemHeight}px`;
    }
    if (!this.menuExpand || this.showItems || !mutations) {
      return;
    }
    for (const mutation of mutations ?? []) {
      if (mutation.attributeName === "class" && mutation.target instanceof HTMLElement && mutation.target.classList.contains("active")) {
        this.showItems = true;
        this.onExpandCategory(true);
        return;
      }
    }
  }
  isCategoryItemListVisible() {
    return this.menuExpand && (this.showItems || this.isNestedItemActive());
  }
  componentWillLoad() {
    super.componentWillLoad();
    const closestMenu = closestIxMenu(this.hostElement);
    if (!closestMenu) {
      throw Error("ix-menu-category can only be used as a child of ix-menu");
    }
    this.ixMenu = closestMenu;
    this.menuExpand = this.ixMenu.expand;
    this.showItems = this.isCategoryItemListVisible();
  }
  componentDidLoad() {
    this.observer = createMutationObserver((mutations) => this.onNestedItemsChanged(mutations));
    this.observer.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ["class"],
      childList: true,
      subtree: true
    });
    requestAnimationFrameNoNgZone(() => {
      this.onNestedItemsChanged();
      this.onShowItemsChange();
    });
    this.ixMenu?.addEventListener("expandChange", ({ detail: menuExpand }) => {
      this.menuExpand = menuExpand;
      if (!menuExpand) {
        this.clearMenuItemStyles();
      }
      this.showItems = this.isCategoryItemListVisible();
    });
  }
  clearMenuItemStyles() {
    this.menuItemsContainer?.style.removeProperty("max-height");
    this.menuItemsContainer?.style.removeProperty("opacity");
  }
  onShowItemsChange() {
    this.getNestedItems().forEach((item) => {
      item.hidden = !this.showItems && !this.showDropdown;
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    const inheritedA11yWithoutRole = {
      ...this.inheritAriaAttributes
    };
    delete inheritedA11yWithoutRole.role;
    return h(Host, { key: "300c76e3633caa8f7cdab8771d1445fc781560bc", class: {
      expanded: this.showItems
    }, onIxMenuCategoryItemSelect: () => this.onNestedItemSelect(), onPointerEnter: () => {
      this.showMenuItemDropdown();
    }, onPointerLeave: (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      this.hideMenuItemDropdown();
    } }, h("ix-menu-item", { key: "953b5bbbc6d16d66c9d552555d5e80162fe85c60", ...inheritedA11yWithoutRole, "aria-haspopup": "menu", "aria-expanded": this.showItems || this.showDropdown ? "true" : "false", id: this.categoryId, ref: this.categoryParentRef, class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClick(e), onKeyDown: (event) => this.onKeyDown(event), tooltipText: this.tooltipText, isCategory: true, menuCategoryLabel: this.label }, h("span", { key: "15e0daefaca0cbc1633029fcc45868e12e02228e", class: "category" }, h("span", { key: "0b9d9959bed2019daa2f3ff5c430e4eab722050d", class: "category-text" }, this.label), h("ix-icon", { key: "d773694c5d5ca26c3d7d95095b0d25c87f17e332", name: iconChevronDownSmall, class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    }, "aria-hidden": "true" }))), h("div", { key: "a72fd62d97f691ebc0bf3aa672804a25896e1076", ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems,
      "menu-items--collapsed": !this.showItems
    }, role: "menu", "aria-labelledby": this.categoryId, onKeyDown: (e) => this.onMenuItemsKeyDown(e) }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: "d2e3dac026e04e4dcf701be2a0dabf26c7cc7733", ref: this.dropdownRef, hostRole: "menu", "aria-label": this.label, closeBehavior: "both", show: this.showDropdown, onShowChange: ({ detail }) => this.onDropdownShowChange(detail), onShowChanged: ({ detail }) => this.onDropdownShowChanged(detail), class: "category-dropdown", anchor: this.hostElement, placement: "right-start", offset: {
      mainAxis: 3
    }, focusHost: this.hostElement, onClick: (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.tagName === "IX-MENU-ITEM") {
          this.showDropdown = false;
        } else {
          e.preventDefault();
        }
      }
    }, onFocusout: () => this.onDropdownFocusOut() }, h("ix-dropdown-item", { key: "726769fe5c2a56f7819937bf176ae4edca9530b7", class: "category-dropdown-header", tabindex: -1, "aria-hidden": "true" }, h("ix-typography", { key: "086bebe5522427df5799206d4712147d0333dba3", format: "label", bold: true, textColor: "std" }, this.label)), h("ix-divider", { key: "0b6d7cffae16f00b0029714b8b3983524bb193aa" }), h("slot", { key: "6d55dfc93b0303a1a71d0b2cff01e035a36d9523" })));
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "role": [{
        "ariaAttributeChanged": 0
      }],
      "aria-activedescendant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-atomic": [{
        "ariaAttributeChanged": 0
      }],
      "aria-autocomplete": [{
        "ariaAttributeChanged": 0
      }],
      "aria-braillelabel": [{
        "ariaAttributeChanged": 0
      }],
      "aria-brailleroledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-busy": [{
        "ariaAttributeChanged": 0
      }],
      "aria-checked": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-controls": [{
        "ariaAttributeChanged": 0
      }],
      "aria-current": [{
        "ariaAttributeChanged": 0
      }],
      "aria-describedby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-description": [{
        "ariaAttributeChanged": 0
      }],
      "aria-details": [{
        "ariaAttributeChanged": 0
      }],
      "aria-disabled": [{
        "ariaAttributeChanged": 0
      }],
      "aria-errormessage": [{
        "ariaAttributeChanged": 0
      }],
      "aria-expanded": [{
        "ariaAttributeChanged": 0
      }],
      "aria-flowto": [{
        "ariaAttributeChanged": 0
      }],
      "aria-haspopup": [{
        "ariaAttributeChanged": 0
      }],
      "aria-hidden": [{
        "ariaAttributeChanged": 0
      }],
      "aria-invalid": [{
        "ariaAttributeChanged": 0
      }],
      "aria-keyshortcuts": [{
        "ariaAttributeChanged": 0
      }],
      "aria-label": [{
        "ariaAttributeChanged": 0
      }],
      "aria-labelledby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-level": [{
        "ariaAttributeChanged": 0
      }],
      "aria-live": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiline": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiselectable": [{
        "ariaAttributeChanged": 0
      }],
      "aria-orientation": [{
        "ariaAttributeChanged": 0
      }],
      "aria-owns": [{
        "ariaAttributeChanged": 0
      }],
      "aria-placeholder": [{
        "ariaAttributeChanged": 0
      }],
      "aria-posinset": [{
        "ariaAttributeChanged": 0
      }],
      "aria-pressed": [{
        "ariaAttributeChanged": 0
      }],
      "aria-readonly": [{
        "ariaAttributeChanged": 0
      }],
      "aria-relevant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-required": [{
        "ariaAttributeChanged": 0
      }],
      "aria-roledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-selected": [{
        "ariaAttributeChanged": 0
      }],
      "aria-setsize": [{
        "ariaAttributeChanged": 0
      }],
      "aria-sort": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemax": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemin": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuenow": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuetext": [{
        "ariaAttributeChanged": 0
      }],
      "showDropdown": [{
        "onShowItemsChange": 0
      }],
      "showItems": [{
        "onShowItemsChange": 0
      }]
    };
  }
};
MenuCategory.style = menuCategoryCss();
export {
  MenuCategory as ix_menu_category
};
