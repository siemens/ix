import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.918151cc.js";
import { i as inline, s as shift, o as offset, a as autoUpdate, f as flip, c as computePosition } from "./floating-ui.dom.esm-6e7c098f.28127179.js";
import { A as ArrowFocusController } from "./focus-d4d3abaf.e4140cbf.js";
function hasDropdownItemWrapperImplemented(item) {
  return item && item.getDropdownItemElement !== void 0 && typeof item.getDropdownItemElement === "function";
}
class DropdownController {
  constructor() {
    this.dropdowns = /* @__PURE__ */ new Map();
    this.submenuIds = {};
    this.isWindowListenerActive = false;
  }
  connected(dropdown) {
    if (!this.isWindowListenerActive) {
      this.addOverlayListeners();
    }
    this.dropdowns.set(dropdown.getId(), dropdown);
    if (dropdown.discoverAllSubmenus) {
      this.discoverSubmenus();
    }
  }
  disconnected(dropdown) {
    this.dropdowns.delete(dropdown.getId());
  }
  discoverSubmenus() {
    this.dropdowns.forEach((dropdown) => {
      dropdown.discoverSubmenu();
    });
  }
  present(dropdown) {
    if (!dropdown.isPresent() && dropdown.willPresent()) {
      this.submenuIds[dropdown.getId()] = dropdown.getAssignedSubmenuIds();
      dropdown.present();
    }
  }
  dismissChildren(uid) {
    const childIds = this.submenuIds[uid] || [];
    for (const id of childIds) {
      this.dismiss(this.dropdowns.get(id));
    }
  }
  dismiss(dropdown) {
    if (dropdown.isPresent() && dropdown.willDismiss()) {
      this.dismissChildren(dropdown.getId());
      dropdown.dismiss();
      delete this.submenuIds[dropdown.getId()];
    }
  }
  dismissAll(ignoreBehaviorForIds = []) {
    this.dropdowns.forEach((dropdown) => {
      if (!ignoreBehaviorForIds.includes(dropdown.getId()) && (dropdown.closeBehavior === "inside" || dropdown.closeBehavior === false)) {
        return;
      }
      this.dismiss(dropdown);
    });
  }
  dismissOthers(uid) {
    let path = this.buildComposedPath(uid, /* @__PURE__ */ new Set());
    this.dropdowns.forEach((dropdown) => {
      if (dropdown.closeBehavior !== "inside" && dropdown.closeBehavior !== false && !path.has(dropdown.getId())) {
        this.dismiss(dropdown);
      }
    });
  }
  pathIncludesTrigger(eventTargets) {
    for (let eventTarget of eventTargets) {
      if (eventTarget instanceof HTMLElement) {
        if (eventTarget.hasAttribute("data-ix-dropdown-trigger")) {
          return true;
        }
      }
    }
    return false;
  }
  pathIncludesDropdown(eventTargets) {
    return !!eventTargets.find((element) => element.tagName === "IX-DROPDOWN");
  }
  buildComposedPath(id, path) {
    if (this.submenuIds[id]) {
      path.add(id);
    }
    for (const ruleKey of Object.keys(this.submenuIds)) {
      if (this.submenuIds[ruleKey].includes(id)) {
        this.buildComposedPath(ruleKey, path).forEach((key) => path.add(key));
      }
    }
    return path;
  }
  addOverlayListeners() {
    this.isWindowListenerActive = true;
    window.addEventListener("click", (event) => {
      const hasTrigger = this.pathIncludesTrigger(event.composedPath());
      const hasDropdown = this.pathIncludesDropdown(event.composedPath());
      if (!hasTrigger && !hasDropdown) {
        this.dismissAll();
      }
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.dismissAll([...this.dropdowns.keys()]);
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
    this.focusDropdownItemBind = this.focusDropdownItem.bind(this);
    this.itemObserver = new MutationObserver(() => {
      this.arrowFocusController.items = this.dropdownItems;
    });
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
    this.discoverAllSubmenus = false;
  }
  connectedCallback() {
    dropdownController.connected(this);
    if (this.trigger != void 0) {
      this.registerListener(this.trigger);
    }
  }
  cacheSubmenuId(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    const { detail } = event;
    if (this.assignedSubmenu.indexOf(detail) === -1) {
      this.assignedSubmenu.push(detail);
    }
  }
  disconnectedCallback() {
    dropdownController.dismiss(this);
    dropdownController.disconnected(this);
    if (this.disposeClickListener) {
      this.disposeClickListener();
    }
    if (this.disposeKeyListener) {
      this.disposeKeyListener();
    }
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
    var _a, _b, _c;
    (_a = this.disposeClickListener) === null || _a === void 0 ? void 0 : _a.call(this);
    (_b = this.disposeKeyListener) === null || _b === void 0 ? void 0 : _b.call(this);
    const toggleController = () => {
      if (!this.isPresent()) {
        dropdownController.present(this);
      } else {
        dropdownController.dismiss(this);
      }
      dropdownController.dismissOthers(this.getId());
    };
    this.disposeClickListener = addDisposableEventListener(this.triggerElement, "click", (event) => {
      if (!event.defaultPrevented) {
        toggleController();
      }
    });
    (_c = this.triggerElement) === null || _c === void 0 ? void 0 : _c.setAttribute("data-ix-dropdown-trigger", this.localUId);
  }
  async discoverSubmenu() {
    var _a;
    (_a = this.triggerElement) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent("ix-assign-sub-menu", {
      bubbles: true,
      composed: false,
      cancelable: true,
      detail: this.localUId
    }));
  }
  registerKeyListener() {
    if (!this.triggerElement) {
      return;
    }
    this.disposeKeyListener = addDisposableEventListener(this.triggerElement, "keydown", (event) => {
      if (event.key !== "ArrowDown") {
        return;
      }
      if (document.activeElement !== this.triggerElement) {
        return;
      }
      dropdownController.present(this);
      setTimeout(() => {
        this.focusDropdownItem(0);
      });
    });
  }
  async registerListener(element) {
    this.triggerElement = await this.resolveElement(element);
    if (this.triggerElement) {
      this.addEventListenersFor();
      this.discoverSubmenu();
    }
  }
  async resolveElement(element) {
    const el = await this.findElement(element);
    return this.checkForSubmenuAnchor(el);
  }
  async checkForSubmenuAnchor(element) {
    if (!element) {
      return null;
    }
    if (hasDropdownItemWrapperImplemented(element)) {
      const dropdownItem = await element.getDropdownItemElement();
      dropdownItem.isSubMenu = true;
      this.hostElement.style.zIndex = `var(--theme-z-index-dropdown)`;
    }
    if (element.tagName === "IX-DROPDOWN-ITEM") {
      element.isSubMenu = true;
      this.hostElement.style.zIndex = `var(--theme-z-index-dropdown)`;
    }
    return element;
  }
  findElement(element) {
    if (element instanceof Promise) {
      return element;
    }
    if (typeof element === "object") {
      return Promise.resolve(element);
    }
    if (typeof element != "string") {
      return;
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
    var _a;
    if (newShow) {
      this.anchorElement = await (this.anchor ? this.resolveElement(this.anchor) : this.resolveElement(this.trigger));
      if (this.anchorElement) {
        this.applyDropdownPosition();
      }
      this.arrowFocusController = new ArrowFocusController(this.dropdownItems, this.dropdownRef, this.focusDropdownItemBind);
      this.itemObserver.observe(this.dropdownRef, {
        childList: true,
        subtree: true
      });
      this.registerKeyListener();
    } else {
      this.arrowFocusController.disconnect();
      this.itemObserver.disconnect();
      (_a = this.disposeKeyListener) === null || _a === void 0 ? void 0 : _a.call(this);
    }
  }
  changedTrigger(newTriggerValue) {
    this.registerListener(newTriggerValue);
  }
  isAnchorSubmenu() {
    var _a;
    if (!hasDropdownItemWrapperImplemented(this.anchorElement)) {
      return !!((_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.closest("ix-dropdown-item"));
    }
    return true;
  }
  async applyDropdownPosition() {
    if (!this.show) {
      return;
    }
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
  focusDropdownItem(index) {
    requestAnimationFrame(() => {
      var _a;
      (_a = this.dropdownItems[index]) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector("button").focus();
    });
  }
  async componentDidLoad() {
    this.changedTrigger(this.trigger);
  }
  async componentDidRender() {
    await this.applyDropdownPosition();
    this.anchorElement = await (this.anchor ? this.resolveElement(this.anchor) : this.resolveElement(this.trigger));
  }
  isTriggerElement(element) {
    const trigger = !!element.hasAttribute("data-ix-dropdown-trigger");
    return trigger;
  }
  onDropdownClick(event) {
    if (dropdownController.pathIncludesTrigger(event.composedPath())) {
      event.preventDefault();
      if (this.isTriggerElement(event.target)) {
        return;
      }
    }
    if (this.closeBehavior === "inside" || this.closeBehavior === "both") {
      dropdownController.dismissAll([this.getId()]);
    }
    dropdownController.dismissOthers(this.getId());
  }
  async updatePosition() {
    this.applyDropdownPosition();
  }
  render() {
    return h(Host, { key: "afb0bd3099fd4e5363c4b48f9a718d6b58a29570", "data-ix-dropdown": this.localUId, ref: (ref) => this.dropdownRef = ref, class: {
      "dropdown-menu": true,
      show: this.show,
      overflow: true
    }, style: {
      margin: "0",
      minWidth: "0px",
      position: this.positioningStrategy
    }, role: "list", onClick: (event) => this.onDropdownClick(event) }, h("div", { key: "19fd27ae702d808e76cf7484c2bca3a7cab38b53", style: { display: "contents" } }, this.header && h("div", { class: "dropdown-header" }, this.header), h("slot", { key: "cfaf1630739aba4c96fabf38a7d59780ba7b7a7c" })));
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
