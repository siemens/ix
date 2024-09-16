import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.00f6d77e.js";
import { i as inline, s as shift, o as offset, a as autoUpdate, f as flip, c as computePosition } from "./floating-ui.dom.esm-d4ad786a.60f1e3fd.js";
import { A as ArrowFocusController } from "./focus-d4d3abaf.e4140cbf.js";
import { d as dropdownController, a as addDisposableEventListener, h as hasDropdownItemWrapperImplemented } from "./dropdown-controller-95bd6750.eb0930bc.js";
const dropdownCss = ":host{background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);min-width:0px;z-index:var(--theme-z-index-dropdown);box-shadow:var(--theme-shadow-4);padding:0.25rem 0px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}:host(.overflow){max-height:50vh;overflow-y:auto}:host(:not(.show)){display:none}";
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
    this.ignoreRelatedSubmenu = false;
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
      composed: true,
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
    var _a, _b;
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
      this.destroyAutoUpdate();
      (_a = this.arrowFocusController) === null || _a === void 0 ? void 0 : _a.disconnect();
      this.itemObserver.disconnect();
      (_b = this.disposeKeyListener) === null || _b === void 0 ? void 0 : _b.call(this);
    }
  }
  changedTrigger(newTriggerValue) {
    this.registerListener(newTriggerValue);
  }
  destroyAutoUpdate() {
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
      this.autoUpdateCleanup = null;
    }
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
    this.destroyAutoUpdate();
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
    const target = dropdownController.pathIncludesTrigger(event.composedPath());
    if (target) {
      if (target !== this.triggerElement) {
        event.preventDefault();
      }
      if (this.isTriggerElement(target)) {
        if (this.closeBehavior === "outside") {
          event.preventDefault();
        }
        return;
      }
    }
    if (!event.defaultPrevented && (this.closeBehavior === "inside" || this.closeBehavior === "both")) {
      dropdownController.dismissAll([this.getId()], this.ignoreRelatedSubmenu);
      return;
    }
    dropdownController.dismissOthers(this.getId());
  }
  async updatePosition() {
    this.applyDropdownPosition();
  }
  render() {
    return h(Host, { key: "a0822930491de50066f777003b05892d9fc9587b", "data-ix-dropdown": this.localUId, ref: (ref) => this.dropdownRef = ref, class: {
      "dropdown-menu": true,
      show: this.show,
      overflow: true
    }, style: {
      margin: "0",
      minWidth: "0px",
      position: this.positioningStrategy
    }, role: "list", onClick: (event) => this.onDropdownClick(event) }, h("div", { key: "00f8905edd2cfac83a21fbeee7001a4987fc018e", style: { display: "contents" } }, this.header && h("div", { key: "4ae378c15f844f67c4894bf8ab4c18e502cddceb", class: "dropdown-header" }, this.header), this.show && h("slot", { key: "bca1aac38def6df5d322b42415236daf61f67865" })));
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
