import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.eca5b8a3.js";
import { i as inline, s as shift, o as offset, a as autoUpdate, f as flip, c as computePosition } from "./floating-ui.dom.esm-3130eda0.5f933242.js";
const dropdownCss = ":host{background-color:var(--theme-color-2);border-radius:var(--theme-default-border-radius);min-width:0px;z-index:var(--theme-z-index-dropdown);box-shadow:var(--theme-shadow-4);padding:0.25rem 0px}:host *,:host *::after,:host *::before{box-sizing:border-box}:host .dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}:host(.overflow){max-height:50vh;overflow-y:auto}:host(:not(.show)){display:none}";
const dropdownDisposer = /* @__PURE__ */ new Map();
let sequenceId = 0;
const Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showChanged = createEvent(this, "showChanged", 7);
    this.autoUpdateCleanup = null;
    this.localUId = `dropdown-${sequenceId++}-${new Date().valueOf()}`;
    this.show = false;
    this.trigger = void 0;
    this.anchor = void 0;
    this.closeBehavior = "both";
    this.placement = "bottom-start";
    this.positioningStrategy = "fixed";
    this.adjustDropdownWidthToReferenceWith = false;
    this.adjustDropdownWidthToReferenceWidth = false;
    this.header = void 0;
    this.offset = void 0;
    this.triggerEvent = "click";
    this.overwriteDropdownStyle = void 0;
    this.toggleBind = this.toggle.bind(this);
    this.openBind = this.open.bind(this);
    if (dropdownDisposer.has(this.localUId)) {
      console.warn("Dropdown with duplicated id detected");
    }
    dropdownDisposer.set(this.localUId, this.close.bind(this));
  }
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"));
  }
  addEventListenersFor(triggerEvent) {
    switch (triggerEvent) {
      case "click":
        if (this.closeBehavior === "outside") {
          this.triggerElement.addEventListener("click", this.openBind);
        } else {
          this.triggerElement.addEventListener("click", this.toggleBind);
        }
        break;
      case "hover":
        this.triggerElement.addEventListener("mouseenter", this.openBind);
        break;
      case "focus":
        this.triggerElement.addEventListener("focusin", this.openBind);
        break;
    }
  }
  removeEventListenersFor(triggerEvent, triggerElement) {
    switch (triggerEvent) {
      case "click":
        if (this.closeBehavior === "outside") {
          triggerElement.removeEventListener("click", this.openBind);
        } else {
          triggerElement.removeEventListener("click", this.toggleBind);
        }
        break;
      case "hover":
        triggerElement.removeEventListener("mouseenter", this.openBind);
        break;
      case "focus":
        triggerElement.removeEventListener("focusin", this.openBind);
        break;
    }
  }
  async registerListener(element) {
    this.triggerElement = await this.resolveElement(element);
    if (this.triggerElement) {
      if (Array.isArray(this.triggerEvent)) {
        this.triggerEvent.forEach((triggerEvent) => {
          this.addEventListenersFor(triggerEvent);
        });
      } else {
        this.addEventListenersFor(this.triggerEvent);
      }
    }
  }
  async unregisterListener(element) {
    const trigger = await this.resolveElement(element);
    if (Array.isArray(this.triggerEvent)) {
      this.triggerEvent.forEach((triggerEvent) => {
        this.removeEventListenersFor(triggerEvent, trigger);
      });
    } else {
      this.removeEventListenersFor(this.triggerEvent, trigger);
    }
  }
  resolveElement(element) {
    if (typeof element !== "string") {
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
    if (newShow) {
      dropdownDisposer.forEach((dispose, id) => {
        if (id !== this.localUId) {
          dispose();
        }
      });
    }
  }
  changedTrigger(newTriggerValue, oldTriggerValue) {
    if (newTriggerValue) {
      this.registerListener(newTriggerValue);
    }
    if (oldTriggerValue) {
      this.unregisterListener(oldTriggerValue);
    }
  }
  clickOutside(event) {
    var _a, _b;
    const target = event.target;
    if (this.show === false || this.closeBehavior === false || ((_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.contains(target)) || ((_b = this.triggerElement) === null || _b === void 0 ? void 0 : _b.contains(target))) {
      return;
    }
    switch (this.closeBehavior) {
      case "outside":
        if (!this.dropdownRef.contains(target)) {
          this.close(event);
        }
        break;
      case "inside":
        if (this.dropdownRef.contains(target) && this.hostElement !== target) {
          this.close(event);
        }
        break;
      case "both":
        if (this.hostElement !== target) {
          this.close(event);
        }
        break;
      default:
        this.close(event);
    }
  }
  keydown(event) {
    if (this.show === true && event.code === "Escape") {
      this.close();
    }
  }
  isNestedDropdown(element) {
    return element.closest("ix-dropdown");
  }
  isAnchorSubmenu() {
    var _a;
    const anchor = (_a = this.anchorElement) === null || _a === void 0 ? void 0 : _a.closest("ix-dropdown-item");
    if (!anchor) {
      return false;
    }
    return true;
  }
  toggle(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    if (this.isNestedDropdown(event.target)) {
      event === null || event === void 0 ? void 0 : event.stopPropagation();
    }
    this.show = !this.show;
    this.showChanged.emit(this.show);
  }
  open(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    if (this.isNestedDropdown(event.target)) {
      event === null || event === void 0 ? void 0 : event.stopPropagation();
    }
    this.show = true;
    this.showChanged.emit(true);
  }
  close(event) {
    if (event === null || event === void 0 ? void 0 : event.defaultPrevented) {
      const target = event.target;
      if (target.contains(this.anchorElement) || target.contains(this.triggerElement) || target.shadowRoot.contains(this.anchorElement) || target.shadowRoot.contains(this.triggerElement))
        return;
    }
    this.show = false;
    this.showChanged.emit(false);
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
    if (isSubmenu) {
      positionConfig.placement = "right-start";
    }
    if (this.placement.includes("auto") || isSubmenu) {
      positionConfig.middleware.push(flip({ fallbackStrategy: "initialPlacement" }));
      positionConfig.placement = "bottom-start";
    } else {
      positionConfig.placement = this.placement;
    }
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
    if (this.trigger) {
      this.registerListener(this.trigger);
    }
  }
  async componentDidRender() {
    await this.applyDropdownPosition();
    this.anchorElement = await (this.anchor ? this.resolveElement(this.anchor) : this.resolveElement(this.trigger));
  }
  disconnectedCallback() {
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
    if (dropdownDisposer.has(this.localUId)) {
      dropdownDisposer.delete(this.localUId);
    }
  }
  async updatePosition() {
    this.applyDropdownPosition();
  }
  render() {
    return h(Host, { ref: (ref) => this.dropdownRef = ref, class: {
      "dropdown-menu": true,
      show: this.show,
      overflow: true
    }, style: {
      margin: "0",
      minWidth: "0px",
      position: this.positioningStrategy
    }, role: "list" }, h("div", { style: { display: "contents" } }, this.header ? h("div", { class: "dropdown-header" }, this.header) : "", h("slot", null)));
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
const dropdownItemCss = ".text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host .checkmark{position:absolute;left:0.5rem;color:var(--theme-color-std-text)}:host .label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}:host ix-icon{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem;transition:color 0}:host .dropdown-item{display:flex;height:2.5rem;width:100%;padding:0 2rem;align-items:center;background-color:var(--theme-color-2);border:1px solid transparent;cursor:pointer;-webkit-appearance:button;-moz-appearance:button;appearance:button;clear:both;list-style-type:none;position:relative;text-align:left;text-transform:none}:host .dropdown-item:hover{background-color:var(--theme-color-ghost--hover)}:host .dropdown-item:active{background-color:var(--theme-color-ghost--active)}:host .dropdown-item:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-color-focus-bdr);outline:none}:host(.icon-only){min-width:0}:host(.icon-only) .dropdown-item>ix-icon{-webkit-margin-end:0;margin-inline-end:0}:host(.icon-only) .dropdown-item{padding:0.25rem 0.5rem}:host(.checked) .dropdown-item{background-color:var(--theme-select-list-item--background--selected)}:host(.disabled){pointer-events:none}:host(:hover:not(.disabled)) ix-icon{color:var(--theme-color-std-text) !important}::slotted(ix-icon){-webkit-margin-start:auto;margin-inline-start:auto}";
const DropdownItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.label = void 0;
    this.icon = void 0;
    this.hover = false;
    this.disabled = false;
    this.checked = false;
  }
  async emitItemClick() {
    this.itemClick.emit(this.hostElement);
  }
  render() {
    return h(Host, { class: {
      checked: this.checked,
      "icon-text": this.label !== void 0 && this.icon !== void 0,
      "icon-only": this.label === void 0 && this.icon !== void 0,
      disabled: this.disabled
    }, role: "listitem" }, h("button", { type: "button", class: {
      "dropdown-item": true,
      hover: this.hover,
      disabled: this.disabled
    }, onClick: () => this.emitItemClick() }, this.checked ? h("ix-icon", { class: "checkmark", name: "single-check", size: "16" }) : null, this.icon ? h("ix-icon", { name: this.icon, color: `color-${this.disabled ? "weak" : "soft"}-text` }) : null, this.label ? h("span", { class: "label" }, this.label) : null, h("slot", null)));
  }
  get hostElement() {
    return getElement(this);
  }
};
DropdownItem.style = dropdownItemCss;
export {
  Dropdown as ix_dropdown,
  DropdownItem as ix_dropdown_item
};
