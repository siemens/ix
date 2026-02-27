import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-DXu0UsM0.js";
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
    return h(Host, { key: "41da2fa2df70d6c8d9feb8fe8d7e8247c2aaef9b" }, h("div", { key: "8dea6f2e76fe847f041655cf234086a8bb4c763f", class: { "btn-group": true, "middle-gap": !hasOutline } }, this.label ? h("ix-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e), "aria-label": this.ariaLabelButton }), this.label) : h("ix-icon-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e), "aria-label": this.ariaLabelButton })), h("ix-icon-button", Object.assign({ key: "651268758d839b8c9365daea99a515dcffb29b25" }, dropdownButtonAttributes, { ref: this.triggerElementRef, class: "anchor", icon: (_a = this.splitIcon) !== null && _a !== void 0 ? _a : iconContextMenu, "aria-label": this.ariaLabelSplitIconButton }))), h("ix-dropdown", { key: "ec7f37fdfd563ad4fce9741c65695f4ef7ec9604", closeBehavior: this.closeBehavior, trigger: this.triggerElementRef.waitForCurrent(), enableTopLayer: this.enableTopLayer }, h("slot", { key: "9423069a660e83a1730d7bc1ca4e2c99c95c7dd7" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButton.style = splitButtonCss;
export {
  SplitButton as ix_split_button
};
