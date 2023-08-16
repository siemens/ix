import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.ffd88f51.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
import { c as createMutationObserver } from "./mutation-observer-7d01bbea.e6c38b94.js";
const breadcrumbCss = ":host{display:flex;height:2.5rem;justify-content:flex-start;align-items:center;background-color:transparent;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host .crumb{position:relative;display:flex;justify-content:flex-start;align-items:center;white-space:nowrap;border-radius:var(--theme-breadcrumb--border-radius);height:2rem;max-height:2rem;min-width:0;-webkit-margin-end:0.25rem;margin-inline-end:0.25rem;padding:0.5rem 0 0.5rem 0.25rem;outline:none;cursor:pointer}:host .crumb:not(.disabled):not(:disabled){cursor:pointer}:host .crumb:not(.disabled):not(:disabled):hover{background-color:var(--theme-breadcrumb-btn--background--hover)}:host .crumb:not(.disabled):not(:disabled):hover .crumb-text,:host .crumb:not(.disabled):not(:disabled):hover ix-icon{color:var(--theme-breadcrumb-btn--color--hover)}:host .crumb:not(.disabled):not(:disabled):hover .crumb-text+ix-icon{color:var(--theme-breadcrumb-btn-arrow--color--hover)}:host .crumb:not(.disabled):not(:disabled){cursor:pointer}:host .crumb:not(.disabled):not(:disabled):active,:host .crumb:not(.disabled):not(:disabled).active{background-color:var(--theme-breadcrumb-btn--background--active)}:host .crumb:not(.disabled):not(:disabled):active .crumb-text,:host .crumb:not(.disabled):not(:disabled):active ix-icon,:host .crumb:not(.disabled):not(:disabled).active .crumb-text,:host .crumb:not(.disabled):not(:disabled).active ix-icon{color:var(--theme-breadcrumb-btn--color--active)}:host .crumb:not(.disabled):not(:disabled):active .crumb-text+ix-icon,:host .crumb:not(.disabled):not(:disabled).active .crumb-text+ix-icon{color:var(--theme-breadcrumb-btn-arrow--color--active)}:host .crumb .crumb-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;min-width:0;font-weight:700}:host .crumb .crumb-text ix-icon{-webkit-margin-end:0.25rem;margin-inline-end:0.25rem}:host .crumb .crumb-text+ix-icon{-webkit-margin-start:0.25rem;margin-inline-start:0.25rem}:host .crumb.last{background-color:transparent !important;cursor:default;-webkit-padding-end:0.25rem;padding-inline-end:0.25rem}:host .crumb.clickable:not(.remove-hover):not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-focus--border-color)}:host .crumb:not(:last-of-type){flex-shrink:0;max-width:14rem}:host .crumb-dropdown{overflow:visible}:host .remove-anchor::after{display:none}:host .more-text{display:flex}:host .more-text .more-text-ellipsis{width:1rem;display:inline-block;font-weight:700}:host .more-text ix-icon{padding-top:2px}:host .crumb-items{display:contents}:host .crumb.btn{background-color:var(--theme-breadcrumb-btn--background);border:var(--theme-btn--btn-thickness) solid transparent;transition:150ms}:host .crumb.btn .crumb-text,:host .crumb.btn ix-icon{color:var(--theme-breadcrumb-btn--color)}:host .crumb.btn .crumb-text+ix-icon{color:var(--theme-breadcrumb-btn-arrow--color)}:host .crumb.btn.last .crumb-text{color:var(--theme-breadcrumb-btn-last--color)}:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled){cursor:pointer}:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled):hover{background-color:var(--theme-breadcrumb-btn--background--hover)}:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled):hover .crumb-text,:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled):hover ix-icon{color:var(--theme-breadcrumb-btn--color--hover)}:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled):hover .crumb-text+ix-icon{color:var(--theme-breadcrumb-btn-arrow--color--hover)}:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled){cursor:pointer}:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled):active,:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled).active{background-color:var(--theme-breadcrumb-btn--background--active)}:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled):active .crumb-text,:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled):active ix-icon,:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled).active .crumb-text,:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled).active ix-icon{color:var(--theme-breadcrumb-btn--color--active)}:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled):active .crumb-text+ix-icon,:host .crumb.btn.clickable:not(.remove-hover):not(.disabled):not(:disabled).active .crumb-text+ix-icon{color:var(--theme-breadcrumb-btn-arrow--color--active)}:host .crumb.ghost{background-color:var(--theme-breadcrumb-ghost--background);border:var(--theme-btn--ghost-thickness) solid transparent;transition:150ms}:host .crumb.ghost .crumb-text,:host .crumb.ghost ix-icon{color:var(--theme-breadcrumb-ghost--color)}:host .crumb.ghost .crumb-text+ix-icon{color:var(--theme-breadcrumb-ghost-arrow--color)}:host .crumb.ghost.last .crumb-text{color:var(--theme-breadcrumb-ghost-last--color)}:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled){cursor:pointer}:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled):hover{background-color:var(--theme-breadcrumb-ghost--background--hover)}:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled):hover .crumb-text,:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled):hover ix-icon{color:var(--theme-breadcrumb-ghost--color--hover)}:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled):hover .crumb-text+ix-icon{color:var(--theme-breadcrumb-ghost-arrow--color--hover)}:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled){cursor:pointer}:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled):active,:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled).active{background-color:var(--theme-breadcrumb-ghost--background--active)}:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled):active .crumb-text,:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled):active ix-icon,:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled).active .crumb-text,:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled).active ix-icon{color:var(--theme-breadcrumb-ghost--color--active)}:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled):active .crumb-text+ix-icon,:host .crumb.ghost.clickable:not(.remove-hover):not(.disabled):not(:disabled).active .crumb-text+ix-icon{color:var(--theme-breadcrumb-ghost-arrow--color--active)}";
const Breadcrumb = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.nextClick = createEvent(this, "nextClick", 7);
    this.visibleItemCount = 9;
    this.nextItems = [];
    this.ghost = false;
    this.previousButtonRef = void 0;
    this.nextButtonRef = void 0;
    this.items = [];
  }
  get breadcrumbItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-breadcrumb-item"));
  }
  get crumbItems() {
    return Array.from(this.hostElement.shadowRoot.querySelectorAll(".crumb-items .crumb"));
  }
  onItemClick(item) {
    this.itemClick.emit(item);
  }
  componentDidLoad() {
    this.mutationObserver = createMutationObserver(() => {
      const updatedItems = this.getItems();
      const update = () => {
        this.items = updatedItems;
      };
      if (updatedItems.length >= this.items.length) {
        update();
      } else if (updatedItems.length < this.items.length) {
        const last = this.crumbItems[this.crumbItems.length - 1];
        this.animationFadeOut(last, () => update());
      }
    });
    this.mutationObserver.observe(this.hostElement, {
      subtree: true,
      childList: true
    });
  }
  componentWillLoad() {
    this.items = this.getItems();
  }
  getItems() {
    return this.breadcrumbItems.map((item) => {
      return { label: item.label, icon: item.icon };
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  animationFadeOut(ref, complete) {
    anime({
      targets: ref,
      translateX: "-100%",
      duration: 150,
      opacity: [1, 0],
      easing: "linear",
      complete: () => complete()
    });
  }
  animationFadeIn(ref) {
    anime({
      targets: ref,
      duration: 150,
      opacity: [0, 1],
      translateX: ["-100%", "0%"],
      easing: "linear"
    });
  }
  handleLastButtonRef(ref, last) {
    var _a;
    if (last) {
      this.animationFadeIn(ref);
    }
    if (last && ((_a = this.nextItems) === null || _a === void 0 ? void 0 : _a.length)) {
      this.nextButtonRef = ref;
    }
  }
  sliceHiddenItems() {
    let sliceIndex = 0;
    if (this.items.length > this.visibleItemCount) {
      sliceIndex = this.items.length - this.visibleItemCount;
    }
    return this.items.slice(sliceIndex);
  }
  clickItem(item, last) {
    if (!last) {
      this.onItemClick(item);
    }
  }
  renderBreadcrumbItems() {
    return this.sliceHiddenItems().map((item, index, array) => {
      var _a;
      const last = index === array.length - 1;
      const isLastItem = last && !((_a = this.nextItems) === null || _a === void 0 ? void 0 : _a.length);
      return h("div", { ref: (ref) => this.handleLastButtonRef(ref, last), "data-breadcrumb": index, class: {
        crumb: true,
        clickable: true,
        ghost: this.ghost,
        btn: !this.ghost,
        last: isLastItem,
        "remove-hover": isLastItem
      }, onClick: () => this.clickItem(item.label, last), "data-testid": "item" }, h("span", { class: "crumb-text remove-anchor" }, item.icon ? h("ix-icon", { name: item.icon, size: "16" }) : "", h("span", { style: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      } }, item.label)), !isLastItem ? h("ix-icon", { name: "chevron-right-small", size: "24" }) : null);
    });
  }
  render() {
    var _a, _b, _c;
    return h(Host, null, h("ix-dropdown", { trigger: ((_a = this.items) === null || _a === void 0 ? void 0 : _a.length) > this.visibleItemCount ? this.previousButtonRef : null }, this.items.slice(0, this.items.length - this.visibleItemCount).map((item) => h("ix-dropdown-item", { label: item.label, onClick: () => this.onItemClick(item.label) }))), ((_b = this.items) === null || _b === void 0 ? void 0 : _b.length) > this.visibleItemCount ? h("div", { class: "crumb crumb-dropdown", ref: (ref) => this.previousButtonRef = ref }, h("span", { class: "remove-anchor more-text" }, h("span", { class: "more-text-ellipsis" }, "..."), h("ix-icon", { name: "chevron-right", size: "16" }))) : null, h("div", { class: "crumb-items" }, this.renderBreadcrumbItems(), h("slot", null)), h("ix-dropdown", { trigger: this.nextButtonRef }, (_c = this.nextItems) === null || _c === void 0 ? void 0 : _c.map((item) => h("ix-dropdown-item", { label: item, onClick: (e) => {
      this.nextClick.emit({
        event: e,
        item
      });
    } }))));
  }
  get hostElement() {
    return getElement(this);
  }
};
Breadcrumb.style = breadcrumbCss;
const breadcrumbItemCss = ":host{display:block}:host *,:host *::after,:host *::before{box-sizing:border-box}";
const BreadcrumbItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = void 0;
    this.icon = void 0;
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
BreadcrumbItem.style = breadcrumbItemCss;
export {
  Breadcrumb as ix_breadcrumb,
  BreadcrumbItem as ix_breadcrumb_item
};
