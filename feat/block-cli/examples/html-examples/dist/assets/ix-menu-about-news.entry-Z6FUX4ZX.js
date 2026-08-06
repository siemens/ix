import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-DSse0xVy.js";
import { K as iconClose, L as iconShout } from "./index-BeX6RWvV-CXzUIwMU.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const menuAboutNewsCss = () => `:host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-2);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--theme-default-time);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--theme-color-primary)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--theme-color-std-text)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-2);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--theme-z-index-sticky) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}`;
const MenuAboutNews = class extends Mixin(...DefaultMixins) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.showMore = createEvent(this, "showMore", 7);
    this.closePopover = createEvent(this, "closePopover", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Show about news
   */
  show = false;
  /**
   * Title of the about news
   */
  label;
  /**
   * i18n label for 'Show more' button
   */
  i18nShowMore = "Show more";
  /**
   * Subtitle of the about news
   */
  aboutItemLabel;
  /**
   * Defines which tab should be active, used when the about news is used in combination with ix-menu-about
   *
   * @since 5.0.0
   */
  activeAboutTabKey;
  /**
   * Show More button is pressed
   */
  showMore;
  /**
   * Popover closed
   */
  closePopover;
  /** @internal */
  expanded = false;
  render() {
    return h(Host, { key: "ea0d31adff18fedc745811cd8dd856968ce32156", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "a7e8787cfeb075d246b4e1ac75e86f6117f3962b", class: "banner-container" }, h("ix-icon", { key: "eade0ba81c53f9178ff1367786f7b1fbd7db0de3", color: "color-inv-contrast-text", name: iconShout, size: "32" }), h("svg", { key: "4055441b4ccead8710f82220b69105e9fe818cda", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "f2d07c04a2537855737f8e7b0fdb0fade8fdae31", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "632d5bad277aab9e70673e3916e36bfc31ca0d81", class: "cui-popover-news-header" }, h("ix-typography", { key: "f06e97fc62f95bd26981b1ef7604c25982fa423d", format: "label", bold: true }, this.label)), h("ix-icon-button", { key: "4664ab28d5cc6d0e492b4675540a604ddc67de16", size: "24", icon: iconClose, iconColor: "color-soft-text", variant: "tertiary", onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "a6e383bff67ec56503055f94cbcad3bde5ef9cea", class: "slot-container" }, h("slot", { key: "c23905b1204cab1e709e9aa5c60ac07ed8e3f3c0" })), this.activeAboutTabKey ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (event) => {
      this.show = false;
      this.showMore.emit(event);
    } }, this.i18nShowMore)) : null, h("div", { key: "4b792f84d9c602793af8c7f1bdcdf598c591d353", id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss();
export {
  MenuAboutNews as ix_menu_about_news
};
