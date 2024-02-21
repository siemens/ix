import { r as registerInstance, h, H as Host, g as getElement } from "./index.dde3fc09.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
import { c as closestIxMenu } from "./context-c9078420.56584faa.js";
import { c as createMutationObserver } from "./mutation-observer-db8757e6.4a24be36.js";
import "./typed-event-ad6484c5.eb731a3b.js";
const menuCategoryCss = ":host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-chevron{margin-left:auto;margin-right:0px;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0px;transition:var(--theme-default-time) max-height ease-in-out;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--expanded{max-height:999999999px}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{pointer-events:none;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}";
const IxMenuCategoryStyle0 = menuCategoryCss;
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
    return h(Host, { key: "200bff1a548044f19fb8f2280dfbfafe1e5cfcdd", class: {
      expanded: this.showItems
    } }, h("ix-menu-item", { key: "447015d4ad34f0c2a37ea1c676abb71c062f475c", class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClicked(e) }, h("div", { key: "e0a548b93ea0286298d7d05aa2df2fcafc648fdc", class: "category" }, this.label, h("ix-icon", { key: "1df8ba182dfed3a4b0ce676a4a1e796749d2dacb", name: "chevron-down-small", class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    } }))), h("div", { key: "ade480e9fb57aa93a4796c9c685c1af80db170eb", ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems
    } }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: "8c0c5c2a17314bf9da36dfc6d0c147ee67c7ac16", closeBehavior: "both", show: this.showDropdown, onShowChanged: ({ detail: dropdownShown }) => {
      this.showDropdown = dropdownShown;
    }, class: "category-dropdown", anchor: this.hostElement, placement: "right-start", offset: {
      mainAxis: 3
    }, onClick: (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.tagName === "IX-MENU-ITEM") {
          this.showDropdown = false;
        }
      }
    } }, h("ix-dropdown-item", { key: "d85fdf6132b7214c478547f95ecb28be7b11c3ae", class: "category-dropdown-header" }, h("ix-typography", { key: "b41ede61c366cf9ca189f19ccf1b7369bc3907bd", variant: "default-title-single", color: "std" }, this.label)), h("ix-divider", { key: "5a354c66b93f5f630f75b519234c8f167a15aec9" }), h("slot", { key: "505699faf4ef92aeaea9a8b098b82b8900c56128" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuCategory.style = IxMenuCategoryStyle0;
export {
  MenuCategory as ix_menu_category
};
