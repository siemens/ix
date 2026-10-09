import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { u as iconChevronRightSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { c as a11yHostAttributes } from "./a11y-DD206pTM-BiwZPW5s.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-C7UpA3Tm-CtINZypD.js";
const breadcrumbCss = () => `@charset "UTF-8";:host{--ix-breadcrumb-separator--color:var(--si-sys-color-text-secondary)}:host{--ix-breadcrumb-ellipsis--font:var(--si-sys-typography-body-paragraph-sbold);--ix-breadcrumb--height:var(--si-sys-sizing-size-90);--ix-breadcrumb-previous-button--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-breadcrumb-more-text-ellipsis--width:var(--si-sys-sizing-size-50);--ix-breadcrumb-more-text-icon--padding-top:var(--si-sys-sizing-spacing-y-10);--ix-breadcrumb-chevron--margin-left:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;justify-content:flex-start;height:var(--ix-breadcrumb--height);align-items:center;background-color:transparent}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .previous-button{width:auto;min-width:0px;margin-right:var(--ix-breadcrumb-previous-button--margin-right)}:host .crumb-dropdown{overflow:visible}:host .remove-anchor::after{display:none}:host .more-text{display:flex}:host .more-text .more-text-ellipsis{width:var(--ix-breadcrumb-more-text-ellipsis--width);display:inline-block;font:var(--ix-breadcrumb-ellipsis--font)}:host .more-text ix-icon{padding-top:var(--ix-breadcrumb-more-text-icon--padding-top)}:host nav,:host ol,:host .crumb-items{display:contents}:host .chevron{margin-left:var(--ix-breadcrumb-chevron--margin-left);margin-right:0rem;color:var(--ix-breadcrumb-separator--color)}`;
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
   * Accessible label for the next items dropdown button used to access the dropdown list
   * with conditionally hidden next items
   *
   * @since 6.0.0
   */
  ariaLabelNextButton = "Show next breadcrumb items";
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
    return h(Host, { key: "924d67d230517632a468a4e8181ad1ef219ac738", ...this.inheritAriaAttributes, role: "navigation" }, this.items?.length > this.visibleItemCount && h("ix-dropdown-button", { key: "ea6f4eb7618ab8dbb6eeff3bc133439dc17aaafb", "aria-label": this.ariaLabelPreviousButton, label: "...", variant: "tertiary", class: "previous-button", enableTopLayer: this.enableTopLayer }, h("ix-icon", { key: "bbf1aafd8097e3af6aff873388397dc8c139ae89", slot: "button-label", name: iconChevronRightSmall, size: "16", class: "chevron", "aria-hidden": "true" }), this.items.slice(0, this.items.length - this.visibleItemCount).map((item) => {
      const label = item.label ?? item.innerText;
      return h("ix-dropdown-item", { label, onClick: () => {
        this.onItemClick({
          breadcrumbKey: item.breadcrumbKey,
          label
        });
      }, onItemClick: (event) => event.stopPropagation() });
    })), h("div", { key: "cf90b45355d6767ac6c81759259ad130c0377b03", class: "crumb-items" }, h("slot", { key: "92a87db2420238591aad8e853b160be5b1e8d1b0" })), this.shouldRenderNextDropdown && h("ix-dropdown-button", { key: "2e109e00622c54f9f7ee0b243fa83b3a8adcafdf", label: labelLastItem.label ?? labelLastItem.innerText, class: "next-button", variant: "tertiary", enableTopLayer: this.enableTopLayer, "aria-current": "page", "aria-label": this.ariaLabelNextButton }, h("ix-icon", { key: "8a932bae1b9330aa287c77e0b558d62b874518c1", slot: "button-label", name: iconChevronRightSmall, size: "16", class: "chevron", "aria-hidden": "true" }), this.nextItems?.map((item) => h("ix-dropdown-item", { label: item.label, onClick: (e) => {
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
