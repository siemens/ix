import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.78f61b49.js";
import { f as flip, i as inline, s as shift, o as offset, a as autoUpdate, c as computePosition } from "./floating-ui.dom-CAqtPJ4-.0101bb86.js";
import { A as ArrowFocusController } from "./focus-BAKpVknt.5771b0d5.js";
import { d as dropdownController, h as hasDropdownItemWrapperImplemented } from "./dropdown-controller-D3K9vmFp.530ecea4.js";
import { f as findElement } from "./find-element-CFRrPFxi.666d4fd2.js";
import { a as addDisposableEventListener } from "./disposable-event-listener-CKoABG1h.c2f909ce.js";
const dropdownCss = ":host{background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);min-width:0px;z-index:var(--theme-z-index-dropdown);box-shadow:var(--theme-shadow-4);padding:0.25rem 0px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}:host(.overflow){max-height:50vh;overflow-y:auto}:host(:not(.show)){display:none}";
let sequenceId = 0;
const Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showChanged = createEvent(this, "showChanged", 7);
    this.suppressAutomaticPlacement = false;
    this.show = false;
    this.closeBehavior = "both";
    this.placement = "bottom-start";
    this.positioningStrategy = "fixed";
    this.discoverAllSubmenus = false;
    this.ignoreRelatedSubmenu = false;
    this.suppressOverflowBehavior = false;
    this.localUId = `dropdown-${sequenceId++}`;
    this.assignedSubmenu = [];
    this.itemObserver = new MutationObserver(() => {
      if (this.arrowFocusController) {
        this.arrowFocusController.items = this.dropdownItems;
      }
    });
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
    var _a;
    dropdownController.dismiss(this);
    dropdownController.disconnected(this);
    if (this.arrowFocusController) {
      (_a = this.arrowFocusController) === null || _a === void 0 ? void 0 : _a.disconnect();
      this.arrowFocusController = void 0;
    }
    if (this.itemObserver) {
      this.itemObserver.disconnect();
      this.itemObserver = void 0;
    }
    if (this.disposeClickListener) {
      this.disposeClickListener();
      this.disposeClickListener = void 0;
    }
    if (this.disposeKeyListener) {
      this.disposeKeyListener();
      this.disposeKeyListener = void 0;
    }
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
      this.autoUpdateCleanup = void 0;
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
    if (!this.triggerElement) {
      return;
    }
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
    const el = await findElement(element);
    return this.checkForSubmenuAnchor(el);
  }
  async checkForSubmenuAnchor(element) {
    if (!element) {
      return void 0;
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
  async resolveAnchorElement() {
    if (this.anchor) {
      this.anchorElement = await this.resolveElement(this.anchor);
    } else if (this.trigger) {
      this.anchorElement = await this.resolveElement(this.trigger);
    }
  }
  async changedShow(newShow) {
    var _a, _b, _c, _d;
    if (newShow) {
      await this.resolveAnchorElement();
      if (this.anchorElement) {
        this.applyDropdownPosition();
      }
      this.arrowFocusController = new ArrowFocusController(this.dropdownItems, this.hostElement, (index) => this.focusDropdownItem(index));
      (_a = this.itemObserver) === null || _a === void 0 ? void 0 : _a.observe(this.hostElement, {
        childList: true,
        subtree: true
      });
      this.registerKeyListener();
    } else {
      this.destroyAutoUpdate();
      (_b = this.arrowFocusController) === null || _b === void 0 ? void 0 : _b.disconnect();
      (_c = this.itemObserver) === null || _c === void 0 ? void 0 : _c.disconnect();
      (_d = this.disposeKeyListener) === null || _d === void 0 ? void 0 : _d.call(this);
    }
  }
  changedTrigger(newTriggerValue) {
    this.registerListener(newTriggerValue);
  }
  destroyAutoUpdate() {
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
      this.autoUpdateCleanup = void 0;
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
    var _a, _b;
    if (!this.show) {
      return;
    }
    if (!this.anchorElement) {
      return;
    }
    const isSubmenu = this.isAnchorSubmenu();
    let positionConfig = {
      strategy: this.positioningStrategy,
      middleware: []
    };
    if (!this.suppressAutomaticPlacement) {
      (_a = positionConfig.middleware) === null || _a === void 0 ? void 0 : _a.push(flip({ fallbackStrategy: "initialPlacement" }));
    }
    positionConfig.placement = isSubmenu ? "right-start" : this.placement;
    positionConfig.middleware = [
      ...((_b = positionConfig.middleware) === null || _b === void 0 ? void 0 : _b.filter(Boolean)) || [],
      inline(),
      shift()
    ];
    if (this.offset) {
      positionConfig.middleware.push(offset(this.offset));
    }
    this.destroyAutoUpdate();
    if (!this.anchorElement) {
      return;
    }
    this.autoUpdateCleanup = autoUpdate(this.anchorElement, this.hostElement, async () => {
      if (this.anchorElement) {
        const computeResponse = await computePosition(this.anchorElement, this.hostElement, positionConfig);
        Object.assign(this.hostElement.style, {
          top: "0",
          left: "0",
          transform: `translate(${Math.round(computeResponse.x)}px,${Math.round(computeResponse.y)}px)`
        });
      }
      if (this.overwriteDropdownStyle) {
        const overwriteStyle = await this.overwriteDropdownStyle({
          dropdownRef: this.hostElement,
          triggerRef: this.triggerElement
        });
        Object.assign(this.hostElement.style, overwriteStyle);
      }
    }, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true
    });
  }
  focusDropdownItem(index) {
    requestAnimationFrame(() => {
      var _a, _b;
      const button = (_b = (_a = this.dropdownItems[index]) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("button");
      if (button) {
        button.focus();
      }
    });
  }
  async componentDidLoad() {
    if (!this.trigger) {
      return;
    }
    this.changedTrigger(this.trigger);
  }
  async componentDidRender() {
    await this.applyDropdownPosition();
    await this.resolveAnchorElement();
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
    return h(Host, { key: "8cb74ddd59a4160b1d85285244391fc8ae275c6d", "data-ix-dropdown": this.localUId, class: {
      "dropdown-menu": true,
      show: this.show,
      overflow: !this.suppressOverflowBehavior
    }, style: {
      margin: "0",
      minWidth: "0px",
      position: this.positioningStrategy
    }, role: "list", onClick: (event) => this.onDropdownClick(event) }, h("div", { key: "ebbec839d63ecf94c025d7d20018a150dee89162", style: { display: "contents" } }, this.header && h("div", { key: "9a25904cd90dbec2f738567350bf0f0ada723abf", class: "dropdown-header" }, this.header), this.show && h("slot", { key: "f0b63a8335765d212f72fdc04f155e367a65c0a6" })));
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
Dropdown.style = dropdownCss;
export {
  Dropdown as ix_dropdown
};
