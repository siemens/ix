import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-Cn4dOqNA.js";
import { I as iconContextMenu } from "./index-8HpPmDK_-DinFJk0z.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
const splitButtonCss = ".btn-group ix-button:first-child .btn{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.btn-group ix-button:last-child .btn{border-top-left-radius:0px;border-bottom-left-radius:0px}.btn-group ix-button:not(:first-child):not(:last-child) .btn{border-radius:0px;border-right:0px}:host{display:inline-block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .btn-group{position:relative;display:inline-flex;vertical-align:middle;width:100%}:host .btn-group>ix-button:nth-child(1),:host .btn-group>ix-icon-button:nth-child(1){width:calc(100% - 2rem);--ix-button-border-radius-right:0}:host .btn-group>ix-icon-button:nth-child(2){width:2rem;--ix-button-border-radius-left:0}:host .middle-gap{gap:0.125rem}:host .left-button-border{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}";
const SplitButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonClick = createEvent(this, "buttonClick", 7);
    this.variant = "primary";
    this.closeBehavior = "both";
    this.disabled = false;
    this.disableButton = false;
    this.disableDropdownButton = false;
    this.placement = "bottom-start";
    this.enableTopLayer = false;
    this.toggle = false;
    this.triggerElementRef = makeRef();
  }
  get isDisabledButton() {
    return this.disabled || this.disableButton;
  }
  get isDisabledIcon() {
    return this.disabled || this.disableDropdownButton;
  }
  render() {
    var _a;
    const hasOutline = this.variant.toLocaleLowerCase().includes("secondary");
    const baseAttributes = {
      variant: this.variant
    };
    const buttonAttributes = Object.assign(Object.assign({}, baseAttributes), { disabled: this.isDisabledButton, class: {
      "left-button-border": !hasOutline
    } });
    const dropdownButtonAttributes = Object.assign(Object.assign({}, baseAttributes), { disabled: this.isDisabledIcon });
    return h(Host, { key: "034329433940b847951719d6df094e7e799c9b2b" }, h("div", { key: "e08144dd52c338d0cb3a271a95442709a4bd10ba", class: { "btn-group": true, "middle-gap": !hasOutline } }, this.label ? h("ix-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e), "aria-label": this.ariaLabelButton }), this.label) : h("ix-icon-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e), "aria-label": this.ariaLabelButton })), h("ix-icon-button", Object.assign({ key: "4b7776b9328af463c873eb524e8808966b61fff1" }, dropdownButtonAttributes, { ref: this.triggerElementRef, class: "anchor", icon: (_a = this.splitIcon) !== null && _a !== void 0 ? _a : iconContextMenu, "aria-label": this.ariaLabelSplitIconButton }))), h("ix-dropdown", { key: "fbc53f2d73b27ed465a8dc4ae42357a61a6300c7", closeBehavior: this.closeBehavior, trigger: this.triggerElementRef.waitForCurrent(), enableTopLayer: this.enableTopLayer }, h("slot", { key: "e776d44c8f78e89bed7f065edd55168563b0f23c" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButton.style = splitButtonCss;
export {
  SplitButton as ix_split_button
};
