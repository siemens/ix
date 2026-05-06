import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Dfa5QLOG.js";
import { j as iconChevronRightSmall } from "./index-DLhpBBEI-C3tPjcQ4.js";
import { b as a11yHostAttributes } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { D as DefaultMixins } from "./component-BUhl9jvG-ByrxCX0G.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./focus-utilities-COIIN2Es-jUaNMCSm.js";
import "./shadow-dom-BIe8Nw9M-C-dhDpq3.js";
const breadcrumbCss = () => `:host{display:flex;justify-content:flex-start;height:2.5rem;align-items:center;background-color:transparent;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .previous-button{width:auto;min-width:0px;margin-right:0.25rem}:host .crumb-dropdown{overflow:visible}:host .remove-anchor::after{display:none}:host .more-text{display:flex}:host .more-text .more-text-ellipsis{width:1rem;display:inline-block;font-weight:700}:host .more-text ix-icon{padding-top:2px}:host nav,:host ol,:host .crumb-items{display:contents}:host .chevron{margin-left:0.5rem;margin-right:0rem;color:var(--theme-color-soft-text)}`;
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
    return h(Host, { key: "943f0d92964eb934bd999325b4d33cdda6ec7084", ...this.inheritAriaAttributes, role: "navigation" }, this.items?.length > this.visibleItemCount && h("ix-dropdown-button", { key: "83e6565f501dacd209478280a583b5c453c72374", "aria-label": this.ariaLabelPreviousButton, label: "...", variant: "tertiary", class: "previous-button", enableTopLayer: this.enableTopLayer }, h("ix-icon", { key: "c718c6c1bb98c07cca61ca9861abe24b13b7170b", slot: "button-label", name: iconChevronRightSmall, size: "16", class: "chevron" }), this.items.slice(0, this.items.length - this.visibleItemCount).map((item) => {
      const label = item.label ?? item.innerText;
      return h("ix-dropdown-item", { label, onClick: () => {
        this.onItemClick({
          breadcrumbKey: item.breadcrumbKey,
          label
        });
      }, onItemClick: (event) => event.stopPropagation() });
    })), h("div", { key: "193c0e711e2f1bc071e1b7ec202319aee521bc45", class: "crumb-items" }, h("slot", { key: "5470d53296266834ce9e3be588da64e4c1eccab3" })), this.shouldRenderNextDropdown && h("ix-dropdown-button", { key: "c84deb6a966e2bd6783cc122e27f342dab64fb63", label: labelLastItem.label ?? labelLastItem.innerText, class: "next-button", variant: "tertiary", enableTopLayer: this.enableTopLayer, "aria-current": "page" }, h("ix-icon", { key: "2dfc0498309c0113aa7f56e6b74cd07e035f5e59", slot: "button-label", name: iconChevronRightSmall, size: "16", class: "chevron" }), this.nextItems?.map((item) => h("ix-dropdown-item", { label: item.label, onClick: (e) => {
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
