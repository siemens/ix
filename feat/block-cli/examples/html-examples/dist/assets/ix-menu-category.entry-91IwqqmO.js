import { M as Mixin, a as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-B8nXsUf-.js";
import { e as iconChevronDownSmall } from "./index-DgUGsIlh-FNhczk6p.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { c as closestIxMenu } from "./context-zqk3Dkv--CsY55SLG.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-CijOMCrv-wyGBYWjL.js";
import { g as getComposedPath } from "./shadow-dom-BIe8Nw9M-DxOF84uP.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { d as dropdownController } from "./dropdown-controller-D6Wm2E-0-B2aMR2tH.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./focus-utilities-B8qsiZ4M-BHg4MFsh.js";
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
    return h(Host, { key: "17f0069b4ed41939d9a73c1607af46b8f8a05361", class: {
      expanded: this.showItems
    }, onPointerEnter: () => {
      this.showMenuItemDropdown();
    }, onPointerLeave: (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      this.hideMenuItemDropdown();
    } }, h("ix-menu-item", { key: "871a2b690a85cc9d14336fa50bd3e7d6d9791d58", "aria-haspopup": "true", "aria-expanded": this.showItems || this.showDropdown ? "true" : "false", ref: this.categoryParentRef, class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClick(e), onKeyDown: (event) => this.onKeyDown(event), tooltipText: this.tooltipText, isCategory: true }, h("span", { key: "8592320e2197b631bf9dd1789ebb3de7a009ea4d", class: "category" }, h("span", { key: "fb9649acabbc8c3a3dcd06a7e66793803f9504db", class: "category-text" }, this.label), h("ix-icon", { key: "b89665546140408bba94f4a5f6b784b67d883fcc", name: iconChevronDownSmall, class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    }, "aria-hidden": "true" }))), h("div", { key: "790b9552387917ed497111b81f98819d16c605b3", ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems,
      "menu-items--collapsed": !this.showItems
    }, role: "menu", onKeyDown: (e) => this.onMenuItemsKeyDown(e) }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: "5b3e6a89dd6ce65b4186d07bed098721d7bb5d58", ref: this.dropdownRef, hostRole: "menu", "aria-label": this.label, closeBehavior: "both", show: this.showDropdown, onShowChange: ({ detail: dropdownShow }) => {
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
    } }, h("ix-dropdown-item", { key: "deb8327fd7b6c6c6090dd7c8119fd8475483d4be", class: "category-dropdown-header", tabindex: -1, "aria-hidden": "true" }, h("ix-typography", { key: "153fe7fefab55b0d71f63d9133eec7d4bad51e64", format: "label", bold: true, textColor: "std" }, this.label)), h("ix-divider", { key: "02011caf1d6eb20544fabde3bad79d682f1c2d65" }), h("slot", { key: "247365505c7ec3c77731519d071f314b88283ef0" })));
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
