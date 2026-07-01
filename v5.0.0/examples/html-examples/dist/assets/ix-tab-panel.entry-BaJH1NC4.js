import { M as Mixin, r as registerInstance, g as getElement, h, H as Host } from "./global-Cx3A0XQN.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const tabPanelCss = () => `:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(:focus-visible){outline:none}`;
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
    return h(Host, { key: "e2ec4ef03d5909761d3d0e4d3006e3dc8000a41d", role: "tabpanel", id: this.getHostElementId() }, h("slot", { key: "505150a2e102b8e6a41d181822aecfe6026a1ca8" }));
  }
};
TabPanel.style = tabPanelCss();
export {
  TabPanel as ix_tab_panel
};
