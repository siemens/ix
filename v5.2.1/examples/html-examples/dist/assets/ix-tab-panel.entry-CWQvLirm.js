import { M as Mixin, r as registerInstance, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const tabPanelCss = () => `@charset "UTF-8";:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host(:focus-visible){outline:none}`;
const TabPanel = class extends Mixin(...DefaultMixins, ComponentIdMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Key of the tab panel, has to be the same as the tabKey of the corresponding ix-tab-item
   */
  tabKey;
  connectedCallback() {
    this.hostElement.hidden = true;
  }
  render() {
    return h(Host, { key: "8149158904559bca33b86b0f64559a18a227796e", role: "tabpanel", id: this.getHostElementId() }, h("slot", { key: "ae6d6c931cbb31dbb5465f364b3285ff028a29ac" }));
  }
};
TabPanel.style = tabPanelCss();
export {
  TabPanel as ix_tab_panel
};
