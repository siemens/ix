import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { K as iconClose, L as iconShout } from "./index-BeX6RWvV-CXzUIwMU.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const menuAboutNewsCss = () => `@charset "UTF-8";:host{--ix-menu-about-news--background:var(--si-sys-background-1);--ix-menu-about-news-arrow--background:var(--si-sys-background-1);--ix-menu-about-news--transition-duration:var(--theme-default-time);--ix-menu-about-news-banner--fill:var(--si-sys-text-accent);--ix-menu-about-news-body--color:var(--si-sys-text-primary);--ix-menu-about-news--z-index:var(--theme-z-index-sticky)}:host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--ix-menu-about-news--background);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--ix-menu-about-news--transition-duration);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-shadow-4)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--ix-menu-about-news-banner--fill)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--ix-menu-about-news-body--color)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--ix-menu-about-news-arrow--background);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--ix-menu-about-news--z-index) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}`;
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
    return h(Host, { key: "bd8e4e78f3717e0c1a8e9f280af785a3faa6258a", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "fa36659bb804651da5c17d67009cfb8f1eae74ec", class: "banner-container" }, h("ix-icon", { key: "2efb3c0b0c41d31a23311e21abbb66bcfcc1bcf0", color: "--si-sys-text-inverse", name: iconShout, size: "32" }), h("svg", { key: "a54ac7396cb1b67fe0a7fa582e0fd0a18a76e5f5", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "01996dea8ef50debd61b5d77b1633be6f3e4148b", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "ec8732e0fea16d3f515424037c5cf2f44b6d2e42", class: "cui-popover-news-header" }, h("ix-typography", { key: "cd87bc0ecc2ccb9912386d320dc8e17ffb6c89c6", format: "label", bold: true }, this.label)), h("ix-icon-button", { key: "3c1e72d33d165a3aec4457797f8bd402ac011e69", size: "24", icon: iconClose, iconColor: "--si-sys-text-secondary", variant: "tertiary", onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "2dfbcd4e05984409aed678c87f06261bee2d1e0b", class: "slot-container" }, h("slot", { key: "b04f12b2db8dbdb88f8de7444c0d16a5ee69da31" })), this.activeAboutTabKey ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (event) => {
      this.show = false;
      this.showMore.emit(event);
    } }, this.i18nShowMore)) : null, h("div", { key: "d75b03c5d4953243ab94fc6225310a56262e7cf5", id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss();
export {
  MenuAboutNews as ix_menu_about_news
};
