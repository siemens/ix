import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.18e27e15.js";
const splitButtonCss = ".btn-group ix-button:first-child .btn{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.btn-group ix-button:last-child .btn{border-top-left-radius:0px;border-bottom-left-radius:0px}.btn-group ix-button:not(:first-child):not(:last-child) .btn{border-radius:0px;border-right:0px}:host{display:inline-block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .btn-group{position:relative;display:inline-flex;vertical-align:middle;width:100%}:host .btn-group>ix-button:nth-child(1){width:calc(100% - 2rem)}:host .btn-group>ix-button:nth-child(2){width:2rem}:host .middle-gap{gap:0.125rem}:host .left-button-border{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}";
const IxSplitButtonStyle0 = splitButtonCss;
const SplitButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonClick = createEvent(this, "buttonClick", 7);
    this.variant = "primary";
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
    return h(Host, { key: "df903e750d9182ed38b116e2e0cf0fd02f79573e" }, h("div", { key: "2b8cbbab4380f6d591f27ce874483d31cbb3d059", class: { "btn-group": true, "middle-gap": !this.outline } }, this.label ? h("ix-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) }), this.label) : h("ix-icon-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) })), h("ix-icon-button", Object.assign({ key: "bea28afc3f40e4bdab5299d4154ca76cbc05d46d" }, buttonAttributes, { ref: (r) => this.triggerElement = r, class: "anchor", icon: this.splitIcon }))), h("ix-dropdown", { key: "6476c7a4204d8744652bce6362dc5ce96e44b3a5", ref: (r) => this.dropdownElement = r }, h("slot", { key: "2826455e8721f257c2aece5bca09a29cb503f140" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButton.style = IxSplitButtonStyle0;
export {
  SplitButton as ix_split_button
};
