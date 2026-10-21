import { M as Mixin, r as registerInstance, g as getElement, h, H as Host } from "./global-D_olgeRE.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-C7UpA3Tm-CtINZypD.js";
const tabPanelCss = () => `@charset "UTF-8";:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host(:focus-visible){outline:none}`;
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
    return h(Host, { key: "90ccce633acb00b9e0ace71837b834464c8dffbe", role: "tabpanel", id: this.getHostElementId() }, h("slot", { key: "fd3d0ba78a053736d708a82627f7006645843ccf" }));
  }
};
TabPanel.style = tabPanelCss();
export {
  TabPanel as ix_tab_panel
};
