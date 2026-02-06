import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-wi9VneMU.js";
import { f as flip, i as inline, s as shift, o as offset, a as autoUpdate, c as computePosition } from "./floating-ui.dom-CAqtPJ4--DFASu3km.js";
import { a as addDisposableEventListener } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
import { f as findElement } from "./find-element-CFRrPFxi-BfUKzqCM.js";
import { A as ArrowFocusController } from "./focus-BAKpVknt-BX94nhwN.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { d as dropdownController, h as hasDropdownItemWrapperImplemented } from "./dropdown-controller-D3K9vmFp-CeqyAJWH.js";
const dropdownCss = ":host{background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);min-width:0px;z-index:var(--theme-z-index-dropdown);box-shadow:var(--theme-shadow-4);padding:0.25rem 0px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}:host(.overflow){max-height:calc(50vh - 3rem);overflow-y:auto}:host(:not(.show)){display:none}.dialog{margin:0;border:none;outline:none;padding:0.25rem 0px;min-width:0;max-width:100vw;width:-moz-max-content;width:max-content;height:-moz-fit-content;height:fit-content;background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);box-shadow:var(--theme-shadow-4);overflow-x:visible;overflow-y:visible;inset:unset;color-scheme:inherit;color:var(--theme-color-std-text);box-sizing:border-box}.dialog *,.dialog *::after,.dialog *::before{box-sizing:border-box}.dialog .dropdown-container{display:block;position:relative}.dialog .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}.dialog.overflow{max-height:calc(50vh - 3rem);overflow-y:auto}";
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
    this.enableTopLayer = false;
    this.dialogRef = makeRef();
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
  /** @internal */
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
    this.disposeKeyListener = addDisposableEventListener(this.triggerElement, "keydown", ((event) => {
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
    }));
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
    var _a;
    if (!newShow) {
      this.cleanupOnHide();
      if (this.enableTopLayer) {
        await this.hideDropdownAsync();
      }
      return;
    }
    this.arrowFocusController = new ArrowFocusController(this.dropdownItems, this.hostElement, (index) => this.focusDropdownItem(index));
    (_a = this.itemObserver) === null || _a === void 0 ? void 0 : _a.observe(this.hostElement, {
      childList: true,
      subtree: true
    });
    this.registerKeyListener();
    if (this.enableTopLayer) {
      await this.showDropdownAsync();
      return;
    }
    await this.resolveAnchorElement();
    if (this.anchorElement) {
      this.applyDropdownPosition();
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
  async showDropdownAsync() {
    const popover = await this.dialogRef.waitForCurrent();
    if (!popover) {
      return;
    }
    popover.showPopover();
    await this.resolveAnchorElement();
    if (this.anchorElement) {
      this.applyDropdownPosition();
    } else {
      requestAnimationFrameNoNgZone(() => {
        const referenceElement = this.hostElement.parentElement || this.hostElement;
        const refRect = referenceElement.getBoundingClientRect();
        const transform = `translate(${Math.round(refRect.left)}px, ${Math.round(refRect.top)}px)`;
        Object.assign(popover.style, {
          top: "0",
          left: "0",
          transform
        });
      });
    }
  }
  async hideDropdownAsync() {
    const popover = await this.dialogRef.waitForCurrent();
    if (popover === null || popover === void 0 ? void 0 : popover.matches(":popover-open")) {
      popover.hidePopover();
    }
  }
  cleanupOnHide() {
    var _a, _b, _c;
    this.destroyAutoUpdate();
    (_a = this.arrowFocusController) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.itemObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    (_c = this.disposeKeyListener) === null || _c === void 0 ? void 0 : _c.call(this);
  }
  async applyDropdownPosition() {
    var _a, _b;
    if (!this.show) {
      return;
    }
    if (!this.anchorElement) {
      return;
    }
    const referenceElement = this.anchorElement;
    const isSubmenu = this.isAnchorSubmenu();
    let targetElement = this.hostElement;
    let strategy = this.positioningStrategy;
    if (this.enableTopLayer) {
      const dialog = await this.dialogRef.waitForCurrent();
      if (!dialog) {
        return;
      }
      targetElement = dialog;
      strategy = "fixed";
    }
    let positionConfig = {
      strategy,
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
    this.autoUpdateCleanup = autoUpdate(referenceElement, targetElement, async () => {
      const computeResponse = await computePosition(referenceElement, targetElement, positionConfig);
      Object.assign(targetElement.style, {
        top: "0",
        left: "0",
        transform: `translate(${Math.round(computeResponse.x)}px,${Math.round(computeResponse.y)}px)`
      });
      if (this.overwriteDropdownStyle) {
        const overwriteStyle = await this.overwriteDropdownStyle({
          dropdownRef: targetElement,
          triggerRef: this.triggerElement
        });
        Object.assign(targetElement.style, overwriteStyle);
      }
    }, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true
    });
  }
  focusDropdownItem(index) {
    requestAnimationFrameNoNgZone(() => {
      var _a, _b;
      const button = (_b = (_a = this.dropdownItems[index]) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("button");
      if (button) {
        button.focus();
      }
    });
  }
  async componentDidLoad() {
    if (this.show) {
      this.changedShow(true);
    }
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
  /**
   * Update position of dropdown
   */
  async updatePosition() {
    this.applyDropdownPosition();
  }
  render() {
    if (this.enableTopLayer) {
      return h(Host, { "data-ix-dropdown": this.localUId, class: {
        "dropdown-menu": true,
        show: this.show
      } }, h("dialog", { ref: this.dialogRef, class: {
        dialog: true,
        overflow: !this.suppressOverflowBehavior
      }, popover: "manual", "aria-modal": "true", "aria-label": this.header, tabindex: -1, onClick: (event) => this.onDropdownClick(event) }, h("div", { class: "dropdown-container" }, this.header && h("div", { class: "dropdown-header" }, this.header), this.show && h("slot", null))));
    }
    return h(Host, { "data-ix-dropdown": this.localUId, class: {
      "dropdown-menu": true,
      show: this.show,
      overflow: !this.suppressOverflowBehavior
    }, style: {
      margin: "0",
      minWidth: "0px",
      position: this.positioningStrategy
    }, role: "list", onClick: (event) => this.onDropdownClick(event) }, h("div", { style: { display: "contents" } }, this.header && h("div", { class: "dropdown-header" }, this.header), this.show && h("slot", null)));
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
