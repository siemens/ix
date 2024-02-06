import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.691fb79b.js";
import { i as inline, s as shift, o as offset, a as autoUpdate, f as flip, c as computePosition } from "./floating-ui.dom.esm-cbe44820.60534149.js";
class DropdownController {
  constructor() {
    this.dropdowns = /* @__PURE__ */ new Set();
    this.dropdownRules = {};
    this.isWindowListenerActive = false;
  }
  connected(dropdown) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.dropdowns.add(dropdown);
  }
  disconnected(dropdown) {
    this.dropdowns.delete(dropdown);
  }
  present(dropdown) {
    this.dropdownRules[dropdown.getId()] = dropdown.getAssignedSubmenuIds();
    if (!dropdown.isPresent() && dropdown.willPresent()) {
      dropdown.present();
      this.dismissPath(dropdown.getId());
    }
  }
  dismiss(dropdown) {
    if (dropdown.isPresent() && dropdown.willDismiss()) {
      dropdown.dismiss();
    }
  }
  dismissAll() {
    for (const dropdown of this.dropdowns) {
      if (dropdown.closeBehavior === "inside" || dropdown.closeBehavior === false) {
        continue;
      }
      this.dismiss(dropdown);
    }
  }
  dismissPath(uid) {
    let path = this.buildComposedPath(uid, []);
    for (const dropdown of this.dropdowns) {
      if (dropdown.closeBehavior !== "inside" && dropdown.closeBehavior !== false && !path.includes(dropdown.getId())) {
        this.dismiss(dropdown);
      }
    }
  }
  buildComposedPath(id, path) {
    if (this.dropdownRules[id]) {
      path.push(id);
    }
    for (const ruleKey of Object.keys(this.dropdownRules)) {
      if (this.dropdownRules[ruleKey].includes(id)) {
        return this.buildComposedPath(ruleKey, path);
      }
    }
    return path;
  }
  addOverlayListeners() {
    this.isWindowListenerActive = true;
    window.addEventListener("click", () => {
      this.dismissAll();
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.dismissAll();
      }
    });
  }
}
const addDisposableEventListener = (element, eventType, callback) => {
  element.addEventListener(eventType, callback);
  return () => {
    element.removeEventListener(eventType, callback);
  };
};
const dropdownController = new DropdownController();
const dropdownCss = ":host{background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);min-width:0px;z-index:var(--theme-z-index-dropdown);box-shadow:var(--theme-shadow-4);padding:0.25rem 0px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}:host(.overflow){max-height:50vh;overflow-y:auto}:host(:not(.show)){display:none}";
const IxDropdownStyle0 = dropdownCss;
let sequenceId = 0;
const Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showChanged = createEvent(this, "showChanged", 7);
    this.autoUpdateCleanup = null;
    this.localUId = `dropdown-${sequenceId++}`;
    this.assignedSubmenu = [];
    this.suppressAutomaticPlacement = false;
    this.show = false;
    this.trigger = void 0;
    this.anchor = void 0;
    this.closeBehavior = "both";
    this.placement = "bottom-start";
    this.positioningStrategy = "fixed";
    this.header = void 0;
    this.offset = void 0;
    this.overwriteDropdownStyle = void 0;
  }
  connectedCallback() {
    dropdownController.connected(this);
  }
  cacheSubmenuId({ detail }) {
    this.assignedSubmenu.push(detail);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.disposeListener) === null || _a === void 0 ? void 0 : _a.call(this);
    dropdownController.disconnected(this);
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
  }
  getAssignedSubmenuIds() {
    return this.assignedSubmenu;
  }
  isPresent() {
    return this.show;
  }
  present() {
    this.show = true;
  }
  dismiss() {
    this.show = false;
  }
  getId() {
    return this.localUId;
  }
  willDismiss() {
    const { defaultPrevented } = this.showChanged.emit(false);
    return !defaultPrevented;
  }
  willPresent() {
    const { defaultPrevented } = this.showChanged.emit(true);
    return !defaultPrevented;
  }
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"));
  }
  get slotElement() {
    return this.hostElement.shadowRoot.querySelector("slot");
  }
  addEventListenersFor() {
    var _a;
    (_a = this.disposeListener) === null || _a === void 0 ? void 0 : _a.call(this);
    const stopEventDispatching = (event) => {
      if (this.triggerElement.hasAttribute("data-ix-dropdown-trigger")) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    const toggleController = () => {
      if (!this.isPresent()) {
        dropdownController.present(this);
      } else {
        dropdownController.dismiss(this);
        dropdownController.dismissPath(this.getId());
      }
    };
    this.disposeListener = addDisposableEventListener(this.triggerElement, "click", (event) => {
      stopEventDispatching(event);
      toggleController();
    });
    this.triggerElement.setAttribute("data-ix-dropdown-trigger", this.localUId);
  }
  async registerListener(element) {
    this.triggerElement = await this.resolveElement(element);
    if (this.triggerElement) {
      this.addEventListenersFor();
      this.triggerElement.dispatchEvent(new CustomEvent("ix-assign-sub-menu", {
        bubbles: true,
        composed: false,
        cancelable: true,
        detail: this.localUId
      }));
    }
  }
  resolveElement(element) {
    if (element instanceof Promise) {
      return element;
    }
    if (typeof element === "object") {
      return Promise.resolve(element);
    }
    const selector = `#${element}`;
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }
  async changedShow(newShow) {
    if (newShow) {
      this.anchorElement = await (this.anchor ? this.resolveElement(this.anchor) : this.resolveElement(this.trigger));
      if (this.anchorElement) {
        this.applyDropdownPosition();
      }
    }
  }
  changedTrigger(newTriggerValue) {
    this.registerListener(newTriggerValue);
  }
  isAnchorSubmenu() {
    var _a;
    const anchor = (_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.closest("ix-dropdown-item");
    if (!anchor) {
      return false;
    }
    return true;
  }
  async applyDropdownPosition() {
    if (!this.anchorElement) {
      return;
    }
    if (!this.dropdownRef) {
      return;
    }
    const isSubmenu = this.isAnchorSubmenu();
    let positionConfig = {
      strategy: this.positioningStrategy,
      middleware: []
    };
    if (!this.suppressAutomaticPlacement) {
      positionConfig.middleware.push(flip({ fallbackStrategy: "initialPlacement" }));
    }
    positionConfig.placement = isSubmenu ? "right-start" : this.placement;
    positionConfig.middleware = [
      ...positionConfig.middleware,
      inline(),
      shift()
    ];
    if (this.offset) {
      positionConfig.middleware.push(offset(this.offset));
    }
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
      this.autoUpdateCleanup = null;
    }
    this.autoUpdateCleanup = autoUpdate(this.anchorElement, this.dropdownRef, async () => {
      const computeResponse = await computePosition(this.anchorElement, this.dropdownRef, positionConfig);
      Object.assign(this.dropdownRef.style, {
        top: "0",
        left: "0",
        transform: `translate(${Math.round(computeResponse.x)}px,${Math.round(computeResponse.y)}px)`
      });
      if (this.overwriteDropdownStyle) {
        const overwriteStyle = await this.overwriteDropdownStyle({
          dropdownRef: this.dropdownRef,
          triggerRef: this.triggerElement
        });
        Object.assign(this.dropdownRef.style, overwriteStyle);
      }
    }, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true
    });
  }
  async componentDidLoad() {
    this.changedTrigger(this.trigger);
    this.hostElement.addEventListener("check-nested-dropdown", (event) => {
      if (event.detail === this.localUId) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
    });
  }
  async componentDidRender() {
    var _a;
    await this.applyDropdownPosition();
    this.anchorElement = await (this.anchor ? this.resolveElement(this.anchor) : this.resolveElement(this.trigger));
    if (this.isAnchorSubmenu() && ((_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.tagName) === "IX-DROPDOWN-ITEM") {
      this.anchorElement.isSubMenu = true;
    }
  }
  onDropdownClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.closeBehavior === "inside" || this.closeBehavior === "both") {
      dropdownController.dismiss(this);
      dropdownController.dismissAll();
    }
  }
  async updatePosition() {
    this.applyDropdownPosition();
  }
  render() {
    return h(Host, { "data-ix-dropdown": this.localUId, ref: (ref) => this.dropdownRef = ref, class: {
      "dropdown-menu": true,
      show: this.show,
      overflow: true
    }, style: {
      margin: "0",
      minWidth: "0px",
      position: this.positioningStrategy
    }, role: "list", onClick: (event) => this.onDropdownClick(event) }, h("div", { style: { display: "contents" } }, this.header && h("div", { class: "dropdown-header" }, this.header), h("slot", null)));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "show": ["changedShow"],
      "trigger": ["changedTrigger"]
    };
  }
};
Dropdown.style = IxDropdownStyle0;
export {
  Dropdown as ix_dropdown
};
