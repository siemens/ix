import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Cx3A0XQN.js";
import { j as iconChevronRightSmall } from "./index-DgUGsIlh-CLxQRaVd.js";
import { b as a11yHostAttributes } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const breadcrumbCss = () => `:host{display:flex;justify-content:flex-start;height:2.5rem;align-items:center;background-color:transparent}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .previous-button{width:auto;min-width:0px;margin-right:0.25rem}:host .crumb-dropdown{overflow:visible}:host .remove-anchor::after{display:none}:host .more-text{display:flex}:host .more-text .more-text-ellipsis{width:1rem;display:inline-block;font-weight:700}:host .more-text ix-icon{padding-top:2px}:host nav,:host ol,:host .crumb-items{display:contents}:host .chevron{margin-left:0.5rem;margin-right:0rem;color:var(--theme-color-soft-text)}`;
const Breadcrumb = class extends Mixin(...DefaultMixins) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.nextClick = createEvent(this, "nextClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Excess items will get hidden inside of dropdown
   */
  visibleItemCount = 9;
  /**
   * Items will be accessible through a dropdown
   *
   * @since 5.0.0
   */
  nextItems = [];
  onNextItemsChange() {
    this.onChildMutation();
  }
  /**
   * Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover)
   */
  subtle = false;
  /**
   * Accessibility label for the dropdown button (ellipsis icon) used to access the dropdown list
   * with conditionally hidden previous items
   */
  ariaLabelPreviousButton = "Show previous breadcrumb items";
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Crumb item clicked event
   *
   * @since 5.0.0
   */
  itemClick;
  /**
   * Next item clicked event
   *
   * @since 5.0.0
   */
  nextClick;
  items = [];
  isNextDropdownExpanded = false;
  shouldRenderNextDropdown = false;
  mutationObserver;
  inheritAriaAttributes = {};
  onItemClick(item) {
    this.itemClick.emit(item);
  }
  componentDidLoad() {
    this.mutationObserver = createMutationObserver(() => this.onChildMutation());
    this.mutationObserver.observe(this.hostElement, {
      subtree: true,
      childList: true
    });
  }
  componentWillLoad() {
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement);
    this.onChildMutation();
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }
  async onChildMutation() {
    const updatedItems = this.getItems();
    updatedItems.forEach((breadcrumbItem, index) => {
      const isLastItem = updatedItems.length - 1 === index;
      const shouldShowDropdown = this.nextItems.length !== 0 && isLastItem;
      breadcrumbItem.subtle = this.subtle;
      breadcrumbItem.hideChevron = isLastItem && !shouldShowDropdown;
      breadcrumbItem.isDropdownTrigger = shouldShowDropdown;
      breadcrumbItem.isCurrentPage = isLastItem;
      if (shouldShowDropdown) {
        breadcrumbItem.invisible = true;
      } else {
        breadcrumbItem.invisible = index < updatedItems.length - this.visibleItemCount;
      }
    });
    this.shouldRenderNextDropdown = this.nextItems.length !== 0;
    this.items = updatedItems;
  }
  getItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-breadcrumb-item"));
  }
  onNextDropdownExpandedChange() {
    this.onChildMutation();
  }
  render() {
    const labelLastItem = this.items?.[this.items.length - 1];
    this.inheritAriaAttributes["aria-label"] = this.inheritAriaAttributes["aria-label"] ?? "Breadcrumbs";
    return h(Host, { key: "85caab797a6f2d2b670fb0cc80f9c482ee4c026b", ...this.inheritAriaAttributes, role: "navigation" }, this.items?.length > this.visibleItemCount && h("ix-dropdown-button", { key: "2683325cd1607f5132f9f74d4c0ff34f0d0c316b", "aria-label": this.ariaLabelPreviousButton, label: "...", variant: "tertiary", class: "previous-button", enableTopLayer: this.enableTopLayer }, h("ix-icon", { key: "8bc8b6dc5e0e716985759d512c48ad53168e29a2", slot: "button-label", name: iconChevronRightSmall, size: "16", class: "chevron" }), this.items.slice(0, this.items.length - this.visibleItemCount).map((item) => {
      const label = item.label ?? item.innerText;
      return h("ix-dropdown-item", { label, onClick: () => {
        this.onItemClick({
          breadcrumbKey: item.breadcrumbKey,
          label
        });
      }, onItemClick: (event) => event.stopPropagation() });
    })), h("div", { key: "421b17ee5fcd0d0257567525ad31e04e5c510dad", class: "crumb-items" }, h("slot", { key: "717123d66d5b0ba1516736bc7f30240e2c2e6da2" })), this.shouldRenderNextDropdown && h("ix-dropdown-button", { key: "9d532f0c5b2b0c8a0d9f7400d57516b25d6fdc5b", label: labelLastItem.label ?? labelLastItem.innerText, class: "next-button", variant: "tertiary", enableTopLayer: this.enableTopLayer, "aria-current": "page" }, h("ix-icon", { key: "faa0e14bb352eae4d5345d5693e6e05b8495b19d", slot: "button-label", name: iconChevronRightSmall, size: "16", class: "chevron" }), this.nextItems?.map((item) => h("ix-dropdown-item", { label: item.label, onClick: (e) => {
      this.nextClick.emit({
        event: e,
        item
      });
    }, onItemClick: (event) => event.stopPropagation() }))));
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "nextItems": [{
        "onNextItemsChange": 0
      }],
      "isNextDropdownExpanded": [{
        "onNextDropdownExpandedChange": 0
      }]
    };
  }
};
Breadcrumb.style = breadcrumbCss();
export {
  Breadcrumb as ix_breadcrumb
};
