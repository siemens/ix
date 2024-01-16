import { r as registerInstance, h, H as Host, g as getElement } from "./index.ff5c8c71.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
import { c as closestIxMenu } from "./context-c9078420.56584faa.js";
import { c as createMutationObserver } from "./mutation-observer-db8757e6.4a24be36.js";
import "./typed-event-ad6484c5.eb731a3b.js";
const menuCategoryCss = ":host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-chevron{margin-left:auto;margin-right:0px;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0px;transition:var(--theme-default-time) max-height ease-in-out;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--expanded{max-height:999999999px}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{pointer-events:none;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}";
const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
const MenuCategory = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  onCategoryClicked(e) {
    if (this.ixMenu.expand) {
      e === null || e === void 0 ? void 0 : e.stopPropagation();
      this.onExpandCategory(!this.showItems);
      return;
    }
    this.showDropdown = !this.showDropdown;
  }
  onNestedItemsChanged() {
    this.nestedItems = this.getNestedItems();
  }
  isCategoryItemListVisible() {
    return this.menuExpand && (this.showItems || this.isNestedItemActive());
  }
  componentDidLoad() {
    const closestMenu = closestIxMenu(this.hostElement);
    if (!closestMenu) {
      throw Error("ix-menu-category can only be used as a child of ix-menu");
    }
    this.ixMenu = closestMenu;
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
      this.showItems = this.isCategoryItemListVisible();
    });
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    return h(Host, { class: {
      expanded: this.showItems
    } }, h("ix-menu-item", { class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClicked(e) }, h("div", { class: "category" }, this.label, h("ix-icon", { name: "chevron-down-small", class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    } }))), h("div", { ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems
    } }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { closeBehavior: "both", show: this.showDropdown, onShowChanged: ({ detail: dropdownShown }) => {
      this.showDropdown = dropdownShown;
    }, class: "category-dropdown", anchor: this.hostElement, placement: "right-start", offset: {
      mainAxis: 3
    }, onClick: (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.tagName === "IX-MENU-ITEM") {
          this.showDropdown = false;
        }
      }
    } }, h("ix-dropdown-item", { class: "category-dropdown-header" }, h("ix-typography", { variant: "default-title-single", color: "std" }, this.label)), h("ix-divider", null), h("slot", null)));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuCategory.style = menuCategoryCss;
export {
  MenuCategory as ix_menu_category
};
