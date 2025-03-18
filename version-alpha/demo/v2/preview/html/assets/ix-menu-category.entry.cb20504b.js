import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.78f61b49.js";
import { a as anime } from "./anime.es-Ou74PMQs.d39ae9b1.js";
import { c as closestIxMenu } from "./context-CKM5pVsv.1bb1e898.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk.55d80c4d.js";
import { m as iconChevronDownSmall } from "./index-CrTP-icT.451e0ae2.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
function createEnterLeaveDebounce(enterCallback, leaveCallback, { debounceTimeEnter, debounceTimeLeave } = {
  debounceTimeEnter: 0,
  debounceTimeLeave: 500
}) {
  let enterTimeout;
  let leaveTimeout;
  return {
    onEnter: () => {
      clearTimeout(leaveTimeout);
      enterTimeout = setTimeout(() => {
        enterCallback();
      }, debounceTimeEnter);
    },
    onLeave: () => {
      clearTimeout(enterTimeout);
      leaveTimeout = setTimeout(() => {
        leaveCallback();
      }, debounceTimeLeave);
    }
  };
}
const menuCategoryCss = ":host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-text{width:100%;padding-right:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .category-chevron{margin-left:auto;margin-right:0;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0;transition:var(--theme-default-time) max-height ease-in-out}:host .menu-items--expanded{max-height:999999999px;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--collapsed{display:none}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{pointer-events:none;padding-left:0.125rem;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}";
const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
const MenuCategory = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeOtherCategories = createEvent(this, "closeOtherCategories", 7);
    this.menuExpand = false;
    this.showItems = false;
    this.showDropdown = false;
    this.nestedItems = [];
    this.enterLeaveDebounce = createEnterLeaveDebounce(() => {
      this.onPointerEnter();
    }, () => {
      this.onPointerLeave();
    });
  }
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
    anime({
      targets: this.menuItemsContainer,
      duration: DefaultAnimationTimeout,
      easing: "easeInSine",
      opacity: [1, 0],
      maxHeight: [this.getNestedItemsHeight() + DefaultIxMenuItemHeight, 0],
      complete: () => {
        setTimeout(() => {
          this.showItems = false;
          this.showDropdown = false;
        }, DefaultAnimationTimeout + slotHideThresholdMs);
      }
    });
  }
  animateFadeIn() {
    anime({
      targets: this.menuItemsContainer,
      duration: DefaultAnimationTimeout,
      easing: "easeInSine",
      opacity: [0, 1],
      maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight],
      begin: () => {
        this.showItems = true;
        this.showDropdown = false;
      }
    });
  }
  onPointerEnter() {
    var _a;
    if ((_a = this.ixMenu) === null || _a === void 0 ? void 0 : _a.expand) {
      return;
    }
    this.closeOtherCategories.emit();
    this.showDropdown = true;
  }
  onPointerLeave() {
    this.showDropdown = false;
  }
  onCategoryClick(e) {
    var _a;
    e.stopPropagation();
    if ((_a = this.ixMenu) === null || _a === void 0 ? void 0 : _a.expand) {
      this.onExpandCategory(!this.showItems);
      return;
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
    for (const mutation of mutations !== null && mutations !== void 0 ? mutations : []) {
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
    var _a;
    this.observer = createMutationObserver((mutations) => this.onNestedItemsChanged(mutations));
    this.observer.observe(this.hostElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
    requestAnimationFrame(() => {
      this.onNestedItemsChanged();
    });
    (_a = this.ixMenu) === null || _a === void 0 ? void 0 : _a.addEventListener("expandChange", ({ detail: menuExpand }) => {
      this.menuExpand = menuExpand;
      if (!menuExpand) {
        this.clearMenuItemStyles();
      }
      this.showItems = this.isCategoryItemListVisible();
    });
  }
  clearMenuItemStyles() {
    var _a, _b;
    (_a = this.menuItemsContainer) === null || _a === void 0 ? void 0 : _a.style.removeProperty("max-height");
    (_b = this.menuItemsContainer) === null || _b === void 0 ? void 0 : _b.style.removeProperty("opacity");
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    return h(Host, { key: "571bcfb41185abbb0507273605c92c808c6d5153", class: {
      expanded: this.showItems
    }, onPointerEnter: () => {
      this.enterLeaveDebounce.onEnter();
    }, onPointerLeave: (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      this.enterLeaveDebounce.onLeave();
    } }, h("ix-menu-item", { key: "8bccb98e2774f6ab46fa42ef6ef349464940dd2f", class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClick(e), onFocus: () => this.onPointerEnter(), isCategory: true }, h("div", { key: "6b292422fa8e7ffb5fe572bef0ed94d89d2c9e15", class: "category" }, h("div", { key: "6c2ff8cf81035e13dcdbc0e450a99fb6397951c8", class: "category-text" }, this.label), h("ix-icon", { key: "8f2e7518ab754635fbadd82d54b93e441917ce7a", name: iconChevronDownSmall, class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    } }))), h("div", { key: "b2f01026fcd4893f9b43ee83144f4e978f805358", ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems,
      "menu-items--collapsed": !this.showItems
    } }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: "5c07087f31baea26b2d7f170e9166f7758f59c0a", closeBehavior: "both", show: this.showDropdown, onShowChanged: ({ detail: dropdownShown }) => {
      this.showDropdown = dropdownShown;
    }, class: "category-dropdown", anchor: this.hostElement, placement: "right-start", offset: {
      mainAxis: 3
    }, onClick: (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.tagName === "IX-MENU-ITEM") {
          this.showDropdown = false;
        } else {
          e.preventDefault();
        }
      }
    } }, h("ix-dropdown-item", { key: "58082df65e185ce432b3d901c4c62894bd594790", class: "category-dropdown-header" }, h("ix-typography", { key: "a0effbd7404653428b6197652943b7a6be2cd82f", format: "label", bold: true, textColor: "std" }, this.label)), h("ix-divider", { key: "52a6bd0499b16717a27dc189f170fc1f7d91043a" }), h("slot", { key: "67e00f22fc9ae4cde06408c87357483666201723" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuCategory.style = menuCategoryCss;
export {
  MenuCategory as ix_menu_category
};
