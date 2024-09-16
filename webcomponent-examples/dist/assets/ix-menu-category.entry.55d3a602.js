import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.00f6d77e.js";
import { a as anime } from "./anime.es-a5520566.eae0a8f1.js";
import { c as closestIxMenu } from "./context-82a1ccf8.27f3549a.js";
import { c as createMutationObserver } from "./mutation-observer-db8757e6.4a24be36.js";
import "./typed-event-ad6484c5.eb731a3b.js";
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
const IxMenuCategoryStyle0 = menuCategoryCss;
const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
const MenuCategory = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeOtherCategories = createEvent(this, "closeOtherCategories", 7);
    this.enterLeaveDebounce = createEnterLeaveDebounce(() => {
      this.onPointerEnter();
    }, () => {
      this.onPointerLeave();
    });
    this.label = void 0;
    this.icon = void 0;
    this.notifications = void 0;
    this.menuExpand = false;
    this.showItems = false;
    this.showDropdown = false;
    this.nestedItems = [];
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
    if (this.ixMenu.expand) {
      return;
    }
    this.closeOtherCategories.emit();
    this.showDropdown = true;
  }
  onPointerLeave() {
    this.showDropdown = false;
  }
  onCategoryClick(e) {
    e.stopPropagation();
    if (this.ixMenu.expand) {
      e === null || e === void 0 ? void 0 : e.stopPropagation();
      this.onExpandCategory(!this.showItems);
      return;
    }
  }
  onNestedItemsChanged() {
    this.nestedItems = this.getNestedItems();
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
    this.observer = createMutationObserver(() => this.onNestedItemsChanged());
    this.observer.observe(this.hostElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
    requestAnimationFrame(() => {
      this.onNestedItemsChanged();
    });
    this.ixMenu.addEventListener("expandChange", ({ detail: menuExpand }) => {
      this.menuExpand = menuExpand;
      if (!menuExpand) {
        this.clearMenuItemStyles();
      }
      this.showItems = this.isCategoryItemListVisible();
    });
  }
  clearMenuItemStyles() {
    this.menuItemsContainer.style.removeProperty("max-height");
    this.menuItemsContainer.style.removeProperty("opacity");
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    return h(Host, { key: "3b7a2f4b780189c7527b050c20e036eec255ea29", class: {
      expanded: this.showItems
    }, onPointerEnter: () => {
      this.enterLeaveDebounce.onEnter();
    }, onPointerLeave: (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      this.enterLeaveDebounce.onLeave();
    } }, h("ix-menu-item", { key: "740d283513848384f2b0a980f41e1a41edc3c87a", class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClick(e), onFocus: () => this.onPointerEnter(), isCategory: true }, h("div", { key: "fc663a360899abcaced5bca9fded51d09c15f340", class: "category" }, h("div", { key: "ce375f719315b0d4cccd9838435dc4e59ab126f7", class: "category-text" }, this.label), h("ix-icon", { key: "ce17082c41e6f78ae19e0988b9c8f6b784387d5b", name: "chevron-down-small", class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    } }))), h("div", { key: "2614bff20114b65cc5a79a3b9ab30effc2f09f3b", ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems,
      "menu-items--collapsed": !this.showItems
    } }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: "ffd3996cf5fa75cea5d54a98b5d3fef1aee8baa0", closeBehavior: "both", show: this.showDropdown, onShowChanged: ({ detail: dropdownShown }) => {
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
    } }, h("ix-dropdown-item", { key: "79200ca71682e57529ae12e3b858ed254b78bfda", class: "category-dropdown-header" }, h("ix-typography", { key: "5b1615544787d9bbf831195251750b7c14171dc1", variant: "default-title-single", color: "std" }, this.label)), h("ix-divider", { key: "f3a08498a76abecf1388607c36751de4b1becef8" }), h("slot", { key: "a099d0d632946c6afe98463d238c06360ea82903" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuCategory.style = IxMenuCategoryStyle0;
export {
  MenuCategory as ix_menu_category
};
