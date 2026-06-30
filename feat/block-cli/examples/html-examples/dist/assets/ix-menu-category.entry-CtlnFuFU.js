import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-F68Qu5y3.js";
import { h as iconChevronDownSmall } from "./index-DgUGsIlh-CLxQRaVd.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { c as closestIxMenu } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-DqJSHc3A-D5InBSMm.js";
import { g as getComposedPath } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { d as dropdownController } from "./dropdown-controller-Jfg3ZWk6-Dkh7kLy3.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./path-utils-CNLoALIl-DdIsPRiD.js";
const menuCategoryCss = () => `:host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-text{width:100%;padding-right:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .category-chevron{margin-left:auto;margin-right:0;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0;transition:var(--theme-default-time) max-height ease-in-out}:host .menu-items--expanded{max-height:999999999px;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--collapsed{display:none}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{pointer-events:none;padding-left:0.125rem;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}`;
const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
const MenuCategory = class extends Mixin(...DefaultMixins) {
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
  observer;
  menuItemsContainer;
  ixMenu;
  dropdownRef = makeRef();
  categoryParentRef = makeRef();
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
  onExpandCategory(showItems) {
    if (showItems) {
      this.animateFadeIn();
    } else {
      this.animateFadeOut();
    }
  }
  animateFadeOut() {
    const slotHideThresholdMs = 25;
    animate(this.menuItemsContainer, {
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
    animate(this.menuItemsContainer, {
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
    this.closeOtherCategories.emit();
    if (this.dropdownRef.current) {
      const ref = dropdownController.getDropdownById(this.dropdownRef.current.dataset.ixDropdown);
      if (ref) {
        dropdownController.present(ref);
      }
    }
  }
  hideMenuItemDropdown() {
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
  onCategoryClick(event) {
    event.stopPropagation();
    this.handleCategoryVisibility();
  }
  onKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const isClosingPanel = this.ixMenu?.expand && this.showItems;
      this.handleCategoryVisibility();
      if (!isClosingPanel) {
        const items = this.getNestedItems();
        const firstItem = items[0];
        if (firstItem) {
          requestAnimationFrameNoNgZone(() => requestAnimationFrameNoNgZone(() => firstItem.focus()));
        }
      }
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
  onNestedItemsChanged(mutations) {
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
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    return h(Host, { key: "8b9a30dc7ea0967e819899b52b93ab88d8b88e1e", class: {
      expanded: this.showItems
    }, onPointerEnter: () => {
      this.showMenuItemDropdown();
    }, onPointerLeave: (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      this.hideMenuItemDropdown();
    } }, h("ix-menu-item", { key: "ba5c106da9f818ef8e0f172171600954fbbfcc6f", "aria-haspopup": "true", "aria-expanded": this.showItems || this.showDropdown ? "true" : "false", ref: this.categoryParentRef, class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClick(e), onKeyDown: (event) => this.onKeyDown(event), tooltipText: this.tooltipText, isCategory: true }, h("span", { key: "2420ec1fa5f4fec22c768d44e17404d35b0c2f51", class: "category" }, h("span", { key: "adbe049670a2628f33593598b1373017bc6cb2e3", class: "category-text" }, this.label), h("ix-icon", { key: "590c9c874045e9248c9efae3f86dbe78b2b7865b", name: iconChevronDownSmall, class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    }, "aria-hidden": "true" }))), h("div", { key: "94bdc8f69115515a5209a2cd3379d2496e659dda", ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems,
      "menu-items--collapsed": !this.showItems
    }, role: "menu", onKeyDown: (e) => this.onMenuItemsKeyDown(e) }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: "50f0112e3aad57a0ad4fde81247c437a9566b755", ref: this.dropdownRef, hostRole: "menu", "aria-label": this.label, closeBehavior: "both", show: this.showDropdown, onShowChange: ({ detail: dropdownShow }) => {
      if (dropdownShow) {
        return;
      }
      const activeElement = document.activeElement;
      const isFocused = getComposedPath(activeElement).includes(this.hostElement);
      if (hasKeyboardMode() && isFocused) {
        requestAnimationFrameNoNgZone(() => requestAnimationFrameNoNgZone(() => this.hostElement.focus()));
      }
    }, onShowChanged: ({ detail: dropdownShown }) => {
      this.showDropdown = dropdownShown;
    }, class: "category-dropdown", anchor: this.hostElement, placement: "right-start", offset: {
      mainAxis: 3
    }, focusHost: this.hostElement, onClick: (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.tagName === "IX-MENU-ITEM") {
          this.showDropdown = false;
        } else {
          e.preventDefault();
        }
      }
    }, onFocusout: (event) => {
      const relatedTarget = event.relatedTarget;
      if (relatedTarget && relatedTarget !== this.hostElement && !this.hostElement.contains(relatedTarget)) {
        this.showDropdown = false;
      }
    } }, h("ix-dropdown-item", { key: "61787091256260e9a0cf4d5189fb4851782ffc94", class: "category-dropdown-header", tabindex: -1, "aria-hidden": "true" }, h("ix-typography", { key: "8c3d7e95600d34a8f3ddca68d29180dcac8068dd", format: "label", bold: true, textColor: "std" }, this.label)), h("ix-divider", { key: "7d0ab633d965666e0cae75d93efed651da4eb370" }), h("slot", { key: "0dc00a4eaa41e25225901af3fd19df20d336e670" })));
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
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
