import { M as Mixin, r as registerInstance, g as getElement, h, H as Host } from "./global-Dfa5QLOG.js";
import { D as DefaultMixins } from "./component-BUhl9jvG-ByrxCX0G.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import "./focus-utilities-COIIN2Es-jUaNMCSm.js";
import "./shadow-dom-BIe8Nw9M-C-dhDpq3.js";
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
  render() {
    return h(Host, { key: "f410e5ba58c3be849c84709a05974a6991d6d853", role: "tabpanel", id: this.getHostElementId() }, h("slot", { key: "44a5223af90b7591559816ba6006273f917ce977" }));
  }
};
TabPanel.style = tabPanelCss();
export {
  TabPanel as ix_tab_panel
};
