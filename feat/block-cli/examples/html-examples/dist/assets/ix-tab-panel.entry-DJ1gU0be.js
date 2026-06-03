import { M as Mixin, a as registerInstance, g as getElement, h, H as Host } from "./global-DUJ9DtiD.js";
import { D as DefaultMixins } from "./component-CijOMCrv-wyGBYWjL.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import "./focus-utilities-B8qsiZ4M-BHg4MFsh.js";
import "./shadow-dom-BIe8Nw9M-DxOF84uP.js";
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
    return h(Host, { key: "0e16dade71f0bf2b5cd3d68f69f6e0676ddf0875", role: "tabpanel", id: this.getHostElementId() }, h("slot", { key: "6ec679d5f971e120661ef540b1601f8ebc567a81" }));
  }
};
TabPanel.style = tabPanelCss();
export {
  TabPanel as ix_tab_panel
};
