import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
import "./preload-helper-UZRgTS1n.js";
const listItemSeparatorCss = () => `@charset "UTF-8";:host{--ix-list-item-separator--border-width:var(--si-sys-sizing-border-width-default);--ix-list-item-separator--border-color:var(--si-sys-color-border-3)}:host{display:block;width:100%;border-bottom:var(--ix-list-item-separator--border-width) solid var(--ix-list-item-separator--border-color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
const ListItemSeparator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "2645006e8aa9cf69dff7fc64a4e0db72b5c13d4d", "aria-hidden": "true" });
  }
};
ListItemSeparator.style = listItemSeparatorCss();
export {
  ListItemSeparator as ix_list_item_separator
};
