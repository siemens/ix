import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { t as iconChevronDownSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { c as closestIxMenu } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-D76QMfpO-DgBj8N2Y.js";
import { g as getComposedPath } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { d as dropdownController } from "./dropdown-controller-C8s2mHuA-BYHx5hRI.js";
import { c as createSequentialId } from "./uuid-D3T7Lr4G-CKA8Zb0e.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./a11y-DD206pTM-BiwZPW5s.js";
import "./path-utils-DfQsu85Q-BnoIgQFc.js";
const menuCategoryCss = () => `@charset "UTF-8";:host{--ix-menu-category--background--expanded:var(--si-sys-color-background-selected)}:host{--ix-menu-category-chevron--transition-duration:var(--theme-default-time);--ix-menu-category-items--transition-duration:var(--theme-default-time);--ix-menu-category-category-text--padding-right:var(--si-sys-sizing-spacing-x-20);--ix-menu-category-category-chevron--block-size:var(--si-sys-sizing-icon-lg);--ix-menu-category-category-chevron--inline-size:var(--si-sys-sizing-icon-lg);--ix-menu-category-category-chevron--min-block-size:var(--si-sys-sizing-icon-lg);--ix-menu-category-category-chevron--min-inline-size:var(--si-sys-sizing-icon-lg);--ix-menu-category-menu-items-expanded--padding:var(--si-sys-sizing-spacing-y-20)     0 var(--si-sys-sizing-spacing-y-20)     calc(       var(--si-sys-sizing-spacing-x-80) + var(--si-sys-sizing-spacing-x-10)     );--ix-menu-category-category-dropdown--menu-item-height:var(--si-sys-sizing-size-90);--ix-menu-category-category-dropdown-header--padding-left:var(--si-sys-sizing-spacing-x-10);--ix-menu-category-category-dropdown-header--min-width:calc(     var(--si-sys-sizing-size-160) + var(--si-sys-sizing-spacing-x-60)   );--ix-menu-category--menu-item-height:var(--si-sys-sizing-size-90);--ix-menu-category-category-dropdown--max-height:calc(     50vh - var(--ix-menu-category-category-dropdown--viewport-offset)   );--ix-menu-category-category-dropdown--viewport-offset:var(--si-sys-sizing-size-100)}:host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-text{width:100%;padding-right:var(--ix-menu-category-category-text--padding-right);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .category-chevron{margin-left:auto;margin-right:0;transition:var(--ix-menu-category-chevron--transition-duration) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .category-chevron{block-size:var(--ix-menu-category-category-chevron--block-size);inline-size:var(--ix-menu-category-category-chevron--inline-size);min-block-size:var(--ix-menu-category-category-chevron--min-block-size);min-inline-size:var(--ix-menu-category-category-chevron--min-inline-size)}:host .menu-items{overflow:hidden;max-height:0;transition:var(--ix-menu-category-items--transition-duration) max-height ease-in-out}:host .menu-items--expanded{max-height:999999999px;padding:var(--ix-menu-category-menu-items-expanded--padding)}:host .menu-items--collapsed{display:none}:host .category-dropdown{display:flex;flex-direction:column;height:-moz-fit-content;height:fit-content;max-height:var(--ix-menu-category-category-dropdown--max-height)}:host .category-dropdown::before{content:"";position:absolute;top:0;bottom:0;width:4px;pointer-events:auto}:host .category-dropdown[data-ix-dropdown-placement^=right]::before{left:-4px}:host .category-dropdown[data-ix-dropdown-placement^=left]::before{right:-4px}:host .category-dropdown .category-dropdown-body{flex:0 1 auto;min-height:0;overflow-y:auto}:host .category-dropdown ix-divider{flex-shrink:0}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:var(     --ix-menu-category-category-dropdown--menu-item-height   )}:host .category-dropdown-header{flex:0 0 auto;pointer-events:none;padding-left:var(--ix-menu-category-category-dropdown-header--padding-left);min-width:var(--ix-menu-category-category-dropdown-header--min-width)}:host ::slotted(ix-menu-item){--ix-menu-item-height:var(--ix-menu-category--menu-item-height)}:host(.expanded){background-color:var(--ix-menu-category--background--expanded)}:host ::slotted(a[href]){text-decoration:none !important}`;
const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
const HideDropdownGracePeriodMs = 250;
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
  /**
   * Disable the tooltip for this menu category.
   *
   * @since 6.0.0
   */
  disableTooltip = false;
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
  hideDropdownTimeout;
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
    if (!this.menuItemsContainer) {
      return;
    }
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
    if (!this.menuItemsContainer) {
      return;
    }
    animate(this.menuItemsContainer, {
      duration: DefaultAnimationTimeout,
      easing: "easeInSine",
      opacity: [0, 1],
      maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight],
      onComplete: () => {
        this.clearMenuItemsContainerStyles();
      }
    });
  }
  isPointerMovingInsideCategory(relatedTarget) {
    if (!(relatedTarget instanceof Node)) {
      return false;
    }
    const dropdown = this.dropdownRef.current;
    return this.hostElement.contains(relatedTarget) || !!this.hostElement.shadowRoot?.contains(relatedTarget) || dropdown === relatedTarget || !!dropdown?.contains(relatedTarget) || !!dropdown?.shadowRoot?.contains(relatedTarget);
  }
  clearHideDropdownTimeout() {
    if (this.hideDropdownTimeout !== void 0) {
      window.clearTimeout(this.hideDropdownTimeout);
      this.hideDropdownTimeout = void 0;
    }
  }
  scheduleHideMenuItemDropdown() {
    this.clearHideDropdownTimeout();
    this.hideDropdownTimeout = window.setTimeout(() => {
      this.hideDropdownTimeout = void 0;
      this.hideMenuItemDropdown();
    }, HideDropdownGracePeriodMs);
  }
  showMenuItemDropdown() {
    this.clearHideDropdownTimeout();
    if (this.ixMenu?.expand) {
      return;
    }
    this.closeOtherCategories.emit(this.categoryId);
    const dropdownId = this.dropdownRef.current?.dataset.ixDropdown;
    if (dropdownId) {
      const ref = dropdownController.getDropdownById(dropdownId);
      if (ref) {
        dropdownController.present(ref);
      }
    }
  }
  hideMenuItemDropdown(event) {
    if (event?.detail === this.categoryId) {
      return;
    }
    this.clearHideDropdownTimeout();
    const dropdownId = this.dropdownRef.current?.dataset.ixDropdown;
    if (dropdownId) {
      const ref = dropdownController.getDropdownById(dropdownId);
      if (ref) {
        dropdownController.dismiss(ref);
        if (!ref.isPresent()) {
          this.showDropdown = false;
        }
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
        this.clearMenuItemsContainerStyles();
      }
      this.showItems = this.isCategoryItemListVisible();
    });
  }
  clearMenuItemsContainerStyles() {
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
    this.clearHideDropdownTimeout();
  }
  render() {
    const inheritedA11yWithoutRole = {
      ...this.inheritAriaAttributes
    };
    delete inheritedA11yWithoutRole.role;
    return h(Host, { key: "27b2c69d99be927ca335f629f08e91061c104b99", class: {
      expanded: this.showItems
    }, onIxMenuCategoryItemSelect: () => this.onNestedItemSelect(), onPointerEnter: () => {
      this.showMenuItemDropdown();
    }, onPointerLeave: (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      if (this.isPointerMovingInsideCategory(event.relatedTarget)) {
        return;
      }
      this.scheduleHideMenuItemDropdown();
    } }, h("ix-menu-item", { key: "b7e907663620f44449bedb9148b666069baa5691", ...inheritedA11yWithoutRole, "aria-haspopup": "menu", "aria-expanded": this.showItems || this.showDropdown ? "true" : "false", id: this.categoryId, ref: this.categoryParentRef, class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClick(e), onKeyDown: (event) => this.onKeyDown(event), tooltipText: this.tooltipText, disableTooltip: this.disableTooltip, isCategory: true, menuCategoryLabel: this.label }, h("span", { key: "2923565b8161c9cba01637569f33b3447acd6ced", class: "category" }, h("span", { key: "8691407e020a85e06d7408c2588a54cf34ab165c", class: "category-text" }, this.label), h("ix-icon", { key: "1f48da0314ae8a76b8747aed7f514c51ff281401", name: iconChevronDownSmall, size: "24", class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    }, "aria-hidden": "true" }))), h("div", { key: "e55779dcbbf81a96c072fab99423c002f690d704", ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems,
      "menu-items--collapsed": !this.showItems
    }, role: "menu", "aria-labelledby": this.categoryId, onKeyDown: (e) => this.onMenuItemsKeyDown(e) }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: "02d2ab91fdaa431146f5b13c98b570d79f3b1db0", ref: this.dropdownRef, hostRole: "menu", "aria-label": this.label, closeBehavior: "both", show: this.showDropdown, onShowChange: ({ detail }) => this.onDropdownShowChange(detail), onShowChanged: ({ detail }) => this.onDropdownShowChanged(detail), class: "category-dropdown", suppressOverflowBehavior: true, anchor: this.hostElement, placement: "right-start", offset: {
      mainAxis: 3
    }, focusHost: this.hostElement, onPointerEnter: () => {
      this.clearHideDropdownTimeout();
    }, onClick: (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.tagName === "IX-MENU-ITEM") {
          this.showDropdown = false;
        } else {
          e.preventDefault();
        }
      }
    }, onFocusout: () => this.onDropdownFocusOut() }, h("ix-dropdown-item", { key: "8637bcd66bcddd392fcb00e21e9afdafdf80b830", class: "category-dropdown-header", tabindex: -1, "aria-hidden": "true", suppressChecked: true }, h("ix-typography", { key: "8d8491391c2ca054b836d13a573365fa16db6f72", format: "body", bold: true, textColor: "std" }, this.label)), h("ix-divider", { key: "4ff5fe48958c2ff98c4fad696fec6487731257fa" }), h("div", { key: "6c9256cb64f0a933e8833c98cfe13d91f5ffdcc3", class: "category-dropdown-body" }, h("slot", { key: "8b297390b7740f7cc845db8dd939ce2cd894bf3d" }))));
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
