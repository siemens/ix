import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-B1t25MFd.js";
import { h as iconChevronDownSmall } from "./index-CwfZ4aN6-mXhHymhu.js";
import { m as modulesExports } from "./index-CGJC9ptU-OtA7BVGg.js";
import { c as closestIxMenu } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-SNMLMPBN-CiUwHx8-.js";
import { g as getComposedPath } from "./shadow-dom-T30VMB2R-DtdN3xF2.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { d as dropdownController } from "./dropdown-controller-D6Wm2E-0-B2aMR2tH.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./focus-utilities-Cmy8BJlr-BZaPzC8e.js";
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
  // eslint-disable-next-line @stencil-community/decorators-style
  closeOtherCategories;
  menuExpand = false;
  showItems = false;
  showDropdown = false;
  nestedItems = [];
  observer;
  menuItemsContainer;
  ixMenu;
  dropdownRef = makeRef();
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
    modulesExports.animate(this.menuItemsContainer, {
      duration: DefaultAnimationTimeout,
      easing: "easeInSine",
      opacity: [0, 1],
      maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight],
      onBegin: () => {
        this.showItems = true;
        this.showDropdown = false;
      }
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
      this.handleCategoryVisibility();
      const items = this.getNestedItems();
      const firstItem = items[0];
      if (firstItem) {
        requestAnimationFrameNoNgZone(() => firstItem.focus());
      }
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
    return h(Host, { key: "c23421db44b24cceb5f8f3aae68330b4bd68a5d4", class: {
      expanded: this.showItems
    }, onPointerEnter: () => {
      this.showMenuItemDropdown();
    }, onPointerLeave: (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      this.hideMenuItemDropdown();
    } }, h("ix-menu-item", { key: "76ea07314c0c9ceb9e9a5be9c4e4a6c5998cde26", "aria-haspopup": "true", class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClick(e), onKeyDown: (event) => this.onKeyDown(event), tooltipText: this.tooltipText, isCategory: true }, h("span", { key: "bafeae49ff27dcd586dade63b8daec7f8279622a", class: "category" }, h("span", { key: "59262992574422a2f29a52491c3dea829038908c", class: "category-text" }, this.label), h("ix-icon", { key: "8997cb30c795df858cb4935e9542cd35818afbcb", name: iconChevronDownSmall, class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    }, "aria-hidden": "true" }))), h("div", { key: "5b9a126ad094e6306dda15dd9d7494b94fd6135b", ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems,
      "menu-items--collapsed": !this.showItems
    } }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: "8e437a7c804b4ea07d9e5610f691afa165a12110", ref: this.dropdownRef, closeBehavior: "both", show: this.showDropdown, onShowChange: ({ detail: dropdownShow }) => {
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
    } }, h("ix-dropdown-item", { key: "cdced2a75fa79f539986b2f6caa3e2d4f12407fa", class: "category-dropdown-header", tabindex: -1 }, h("ix-typography", { key: "c7784b9b78aeef7a29f6bb0051413b8cc48bde05", format: "label", bold: true, textColor: "std" }, this.label)), h("ix-divider", { key: "18a2755d89c67fac270e32958d3f9af214c06106" }), h("slot", { key: "aa4ff9913f5e496c50920b11271153b89f57c566" })));
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
