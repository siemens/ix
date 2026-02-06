import { r as registerInstance, h, H as Host } from "./global-wi9VneMU.js";
import { w as iconChevronRightSmall } from "./index-8HpPmDK_-DinFJk0z.js";
const linkButtonCss = ":host{display:inline-flex;height:2rem;font-size:0.875rem;font-weight:400;min-width:2rem}:host .link-button{display:inline-flex;position:relative;width:100%;padding:0 0.25rem 0 0;align-items:center;justify-content:center;background-color:transparent;color:var(--theme-color-primary);cursor:pointer;text-decoration:none}:host .link-button .link{display:block;position:relative;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-decoration:underline;text-underline-offset:0.2rem}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):hover,:host .link-button:not(.disabled):not(:disabled).hover{color:var(--theme-color-dynamic--hover)}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):active,:host .link-button:not(.disabled):not(:disabled).active{color:var(--theme-color-dynamic--active)}:host .link-button.disabled{cursor:default;color:var(--theme-color-weak-text)}:host .link-button a{all:unset}:host :focus-visible{outline:1px solid var(--theme-color-focus-bdr)}";
const LinkButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
    this.target = "_self";
  }
  render() {
    return h(Host, { key: "4d24f0a12d133ab58cb2a873536e68db17df2d5a" }, h("a", { key: "0585700d404cf2d49597085527608c6db40ea97e", title: this.url, tabindex: "0", class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target }, h("ix-icon", { key: "68d6611903eec80a879d4bfbb90a71fcdd05d5a0", class: "icon", name: iconChevronRightSmall, size: "16", "aria-hidden": "true" }), h("div", { key: "4e4b66cb6cd469f56d9029a0ddbf5a44ea838128", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "eb961e003cfa95ceaf0033a19d1e12ff92b7f78f" }))));
  }
};
LinkButton.style = linkButtonCss;
export {
  LinkButton as ix_link_button
};
