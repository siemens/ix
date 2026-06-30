import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-F68Qu5y3.js";
import { y as iconClose, z as iconShout } from "./index-DgUGsIlh-CLxQRaVd.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const menuAboutNewsCss = () => `:host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-2);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--theme-default-time);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--theme-color-primary)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--theme-color-std-text)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-2);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--theme-z-index-sticky) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}`;
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
    return h(Host, { key: "dd1c60bc9d8dfbaec5e66adb22c1bee546a1594c", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "9683a34f3205e6d77c2477c23a8bb8f9758dd97c", class: "banner-container" }, h("ix-icon", { key: "90ac0a6d92bce0c01a9dc546785b186be2b2b58a", color: "color-inv-contrast-text", name: iconShout, size: "32" }), h("svg", { key: "a9cf3663264a6b4755ac2076c323a8287ee1ea90", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "91b760e2b0a25b985b41a8d28a51d35c8697320a", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "ea52a8da8a3b8376a65efecafe6e5227794ec47a", class: "cui-popover-news-header" }, h("ix-typography", { key: "3883c7b6d8feded0d84e211a25dfd0abf8654b60", format: "label", bold: true }, this.label)), h("ix-icon-button", { key: "23beb3ba7905e8ade9406ac1247702ffe982ecb0", size: "24", icon: iconClose, iconColor: "color-soft-text", variant: "tertiary", onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "b7b1b623f40131fa46d721a69037db50cb532322", class: "slot-container" }, h("slot", { key: "e34507c3c798398b1b601fb4716465c0707fa558" })), this.activeAboutTabKey ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (event) => {
      this.show = false;
      this.showMore.emit(event);
    } }, this.i18nShowMore)) : null, h("div", { key: "c5e02348adf58f16e2617931cccea8611d330cea", id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss();
export {
  MenuAboutNews as ix_menu_about_news
};
