import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.c7eba843.js";
import { c as createPopper } from "./popper-42db9fbd.ae0ce911.js";
const dropdownCss = '.dropup,.dropend,.dropdown,.dropstart,.dropup-center,.dropdown-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:"";border-top:0.3em solid;border-right:0.3em solid transparent;border-bottom:0;border-left:0.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:0.5rem;--bs-dropdown-spacer:0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color:#212529;--bs-dropdown-bg:#fff;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-border-radius:0.375rem;--bs-dropdown-border-width:1px;--bs-dropdown-inner-border-radius:calc(0.375rem - 1px);--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y:0.5rem;--bs-dropdown-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-dropdown-link-color:#212529;--bs-dropdown-link-hover-color:#1e2125;--bs-dropdown-link-hover-bg:#e9ecef;--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:0.25rem;--bs-dropdown-header-color:#6c757d;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:0.5rem;position:absolute;z-index:var(--bs-dropdown-zindex);display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}.dropup .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:"";border-top:0;border-right:0.3em solid transparent;border-bottom:0.3em solid;border-left:0.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}.dropend .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:"";border-top:0.3em solid transparent;border-right:0;border-bottom:0.3em solid transparent;border-left:0.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:""}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:0.255em;vertical-align:0.255em;content:"";border-top:0.3em solid transparent;border-right:0.3em solid;border-bottom:0.3em solid transparent}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:0.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg:rgba(255, 255, 255, 0.15);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}.dropup .btn,.dropright .btn,.dropdown .btn,.dropleft .btn{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;text-align:left;width:100%}.dropdown-group{margin:0.687rem;display:block;position:relative;width:21.562rem;border-radius:0.25rem;background-color:#f8f9fa;border:solid 0.062rem rgba(0, 0, 0, 0.25)}.dropdown-group .dropdown-group-title{display:block;position:relative;font-size:0.875rem;text-align:left;margin:0.937rem 0 1.25rem 0.937rem}.dropdown-group .dropdown-group-content{position:relative;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;height:11.562rem;margin:0.937rem 0 0.937rem 0.937rem}.dropdown-group .dropdown-group-content>*{margin-bottom:1rem}.dropdown-group-submit{display:flex;justify-content:space-between;margin:0 0.687rem 0 0.687rem}.dropdown-menu{background-color:var(--theme-menu--background);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);border:var(--theme-menu--border-thickness) solid var(--theme-menu--border--color);border-radius:var(--theme-menu--border-radius);max-width:100vw;padding:0.25rem 0;transition:background-color 150ms;box-shadow:var(--theme-menu--box-shadow)}.dropdown-menu.xl>.dropdown-item{height:2.5rem;line-height:2.187rem}.dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}.dropdown-buttons{display:flex;padding:0.25rem 0.5rem}.dropdown-buttons ix-icon-button+ix-icon-button{-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}.dropdown-item{display:flex;height:2.5rem;position:relative;align-items:center;cursor:pointer;padding:0 2rem;border:1px solid transparent;color:var(--theme-menu-item--color)}.dropdown-item:focus{background-color:var(--theme-menu-item--background);color:var(--theme-menu-item--color)}.dropdown-item:focus-visible{outline:none;background-color:var(--theme-menu-item--background);border-color:#119fff;color:var(--theme-menu-item--color--focus)}.dropdown-item:not(.disabled):not(:disabled){cursor:pointer}.dropdown-item:not(.disabled):not(:disabled):hover{color:var(--theme-menu-item--color--hover);background-color:var(--theme-menu-item--background--hover)}.dropdown-item:not(.disabled):not(:disabled){cursor:pointer}.dropdown-item:not(.disabled):not(:disabled):active{color:var(--theme-menu-item--color--active);background-color:var(--theme-menu-item--background--active)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--theme-menu-item--color--disabled);background-color:var(--theme-menu-item--background--disabled)}.dropdown-item>a,.dropdown-item a:hover,.dropdown-item a:active{color:var(--theme-color-std-text)}.dropdown-item>.glyph{color:var(--theme-menu-item-icon--color);-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}.dropdown-item>.glyph.glyph-single-check{color:var(--theme-menu-item-icon-check--color)}.dropdown-item>input[type=checkbox]+label{margin-bottom:0px}.dropdown-item>input[type=checkbox]+label::before{margin-right:1rem}.dropdown-divider{border-top:1px solid var(--theme-menu-separator--background);margin:0.25rem 0}button.dropdown-toggle{position:relative;padding-right:1.5rem}button.dropdown-toggle::after{position:absolute;top:45%;right:0.5rem}:host{min-width:0px}';
const Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showChanged = createEvent(this, "showChanged", 7);
    this.show = false;
    this.closeBehavior = "both";
    this.placement = "bottom-end";
    this.positioningStrategy = "fixed";
    this.adjustDropdownWidthToReferenceWith = false;
    this.adjustDropdownWidthToReferenceWidth = false;
    this.openBind = this.open.bind(this);
  }
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"));
  }
  resolveElement(prop) {
    if (typeof prop === "string") {
      return document.querySelector("#" + prop);
    }
    return prop;
  }
  async componentDidLoad() {
    if (this.trigger) {
      this.registerListener(this.trigger);
    }
  }
  registerListener(element) {
    this.triggerElement = this.resolveElement(element);
    this.triggerElement.addEventListener("click", this.openBind);
  }
  unregisterListener(element) {
    const trigger = this.resolveElement(element);
    trigger.removeEventListener("click", this.openBind);
  }
  componentDidRender() {
    var _a;
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.update();
  }
  async changedShow(newShow) {
    var _a;
    if (newShow) {
      this.anchorElement = this.anchor ? this.resolveElement(this.anchor) : this.resolveElement(this.trigger);
      if (this.anchorElement) {
        (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
        this.popperInstance = createPopper(this.anchorElement, this.dropdownRef, {
          placement: this.placement,
          strategy: this.positioningStrategy,
          onFirstUpdate: ({ elements }) => {
            if (this.adjustDropdownWidthToReferenceWith || this.adjustDropdownWidthToReferenceWidth) {
              const { popper, reference } = elements;
              const width = reference.getBoundingClientRect().width;
              popper.style.width = `${width}px`;
            }
          }
        });
      }
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
    const target = event.target;
    if (this.show === false || this.closeBehavior === false || this.anchorElement === target || this.triggerElement === target) {
      return;
    }
    switch (this.closeBehavior) {
      case "outside":
        if (!this.dropdownRef.contains(target)) {
          this.close();
        }
        break;
      case "inside":
        if (this.dropdownRef.contains(target)) {
          this.close();
        }
        break;
      default:
        this.close();
    }
  }
  open(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.show = !this.show;
    this.showChanged.emit(this.show);
  }
  close() {
    this.show = false;
    this.showChanged.emit(this.show);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  async updatePosition() {
    var _a;
    await ((_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.update());
  }
  render() {
    return h(Host, { ref: (ref) => this.dropdownRef = ref, class: {
      "dropdown-menu": true,
      show: this.show
    }, style: {
      margin: "0",
      minWidth: "0px"
    } }, h("div", { style: { display: "contents" } }, this.header ? h("div", { class: "dropdown-header" }, this.header) : "", h("slot", null)));
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
const dropdownItemCss = ".sc-ix-dropdown-item-h{display:block;min-width:10rem}.icon-only.sc-ix-dropdown-item-h{min-width:0}.icon-only.sc-ix-dropdown-item-h .dropdown-item.sc-ix-dropdown-item{padding:0.25rem 0.5rem}.icon-only.sc-ix-dropdown-item-h .dropdown-item.sc-ix-dropdown-item:not(.disabled):not(:disabled):focus-visible{border-color:#199fff}.sc-ix-dropdown-item-h .checkmark.sc-ix-dropdown-item{position:absolute;left:0.5rem}.checked.sc-ix-dropdown-item-h{background-color:var(--theme-select-list-item--background--selected)}.sc-ix-dropdown-item-h .label.sc-ix-dropdown-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
const DropdownItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
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
      "icon-only": this.label === void 0 && this.icon !== void 0
    } }, h("button", { class: {
      "dropdown-item": true,
      hover: this.hover,
      disabled: this.disabled
    }, onClick: () => this.emitItemClick() }, this.checked ? h("ix-icon", { class: "checkmark", name: "single-check", size: "16" }) : null, this.icon ? h("span", { class: {
      glyph: true,
      [`glyph-${this.icon}`]: true
    } }) : null, this.label ? h("span", { class: "label" }, this.label) : null, h("slot", null)));
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
