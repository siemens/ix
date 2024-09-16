import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.00f6d77e.js";
const splitButtonCss = ".btn-group ix-button:first-child .btn{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.btn-group ix-button:last-child .btn{border-top-left-radius:0px;border-bottom-left-radius:0px}.btn-group ix-button:not(:first-child):not(:last-child) .btn{border-radius:0px;border-right:0px}:host{display:inline-block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .btn-group{position:relative;display:inline-flex;vertical-align:middle;width:100%}:host .btn-group>ix-button:nth-child(1){width:calc(100% - 2rem)}:host .btn-group>ix-button:nth-child(2){width:2rem}:host .middle-gap{gap:0.125rem}:host .left-button-border{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}";
const IxSplitButtonStyle0 = splitButtonCss;
const SplitButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonClick = createEvent(this, "buttonClick", 7);
    this.variant = "primary";
    this.closeBehavior = "both";
    this.outline = false;
    this.ghost = false;
    this.label = void 0;
    this.icon = "";
    this.splitIcon = "context-menu";
    this.disabled = false;
    this.placement = "bottom-start";
    this.toggle = false;
  }
  linkTriggerRef() {
    if (this.triggerElement && this.dropdownElement) {
      this.dropdownElement.trigger = this.triggerElement;
    }
  }
  componentDidLoad() {
    this.linkTriggerRef();
  }
  render() {
    const buttonAttributes = {
      variant: this.variant,
      outline: this.outline,
      ghost: this.ghost,
      disabled: this.disabled,
      class: {
        "left-button-border": !this.outline
      }
    };
    return h(Host, { key: "e452c205dc4ff169a9c01b757e913506be6cc217" }, h("div", { key: "926ce0fb8cca44d56d2d975a17858de163f67154", class: { "btn-group": true, "middle-gap": !this.outline } }, this.label ? h("ix-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) }), this.label) : h("ix-icon-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) })), h("ix-icon-button", Object.assign({ key: "acc87b0c8506fc0d7e1e4314bbf9d6edd4a2428a" }, buttonAttributes, { ref: (r) => this.triggerElement = r, class: "anchor", icon: this.splitIcon }))), h("ix-dropdown", { key: "2bbd1e58b11b0f8c733c969a05a9ad14d8e99c94", ref: (r) => this.dropdownElement = r, closeBehavior: this.closeBehavior }, h("slot", { key: "1da482f78a3ac0d6b54ee6c903ce11827c2bf7b1" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButton.style = IxSplitButtonStyle0;
export {
  SplitButton as ix_split_button
};
