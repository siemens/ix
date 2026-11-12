import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-vubC4vyH.js";
import { G as iconClose, H as iconShout } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { D as DefaultMixins } from "./component-CxWIPGez-55aCZ0ep.js";
import "./preload-helper-UZRgTS1n.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
import "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
const menuAboutNewsCss = () => `@charset "UTF-8";:host{--ix-menu-about-news--background:var(--si-sys-color-background-1);--ix-menu-about-news-arrow--background:var(--si-sys-color-background-1);--ix-menu-about-news-banner--fill:var(--si-sys-color-text-accent);--ix-menu-about-news-body--color:var(--si-sys-color-text-primary);--ix-menu-about-news-content--font:var(--si-sys-typography-body-paragraph);--ix-menu-about-news--box-shadow:var(--si-sys-color-effects-shadow-40)}:host{--ix-menu-about-news--transition-duration:var(--theme-default-time);--ix-menu-about-news--z-index:var(--theme-z-index-sticky);--ix-menu-about-news--left:calc(     var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-x-30) + var(--si-sys-sizing-spacing-x-10) *       0.2   );--ix-menu-about-news--expanded-left-offset:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-size-90) + var(--si-sys-sizing-spacing-x-20) *       0.8   );--ix-menu-about-news--margin:var(--si-sys-sizing-spacing-x-40);--ix-menu-about-news--width:var(--si-sys-sizing-size-170);--ix-menu-about-news--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-menu-about-news--padding:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60);--ix-menu-about-news-banner-container--left:var(--si-sys-sizing-spacing-x-60);--ix-menu-about-news-icon--margin:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-menu-about-news-cui-popover-news-header--margin-bottom:var(--si-sys-sizing-spacing-y-100);--ix-menu-about-news-cui-popover-news-header--margin-inline-start:var(--si-sys-sizing-spacing-x-120);--ix-menu-about-news-cui-popover-news-footer--margin-top:var(--si-sys-sizing-spacing-y-60);--ix-menu-about-news-icon--top:var(--si-sys-sizing-spacing-y-40);--ix-menu-about-news-icon--right:var(--si-sys-sizing-spacing-x-40);--ix-menu-about-news-desktop--z-index:10000;--ix-menu-about-news-banner-container--top:calc(     var(--si-sys-sizing-spacing-y-10) / 2   );--ix-menu-about-news-svg--height:3.625rem;--ix-menu-about-news-svg--width:3rem;--ix-menu-about-news-arrow--width:0.5rem;--ix-menu-about-news-arrow--height:0.5rem;--ix-menu-about-news-arrow--transform:0.8rem;--ix-menu-about-news-mobile--max-height:calc(     100vh - var(--ix-menu-about-news-mobile--viewport-offset)   );--ix-menu-about-news-mobile--viewport-offset:4.75rem;--ix-menu-about-news-mobile--width:calc(     100% - 2 * var(--ix-menu-about-news-mobile--side-inset)   );--ix-menu-about-news-mobile--max-width:30rem;--ix-menu-about-news-mobile--side-inset:var(--si-sys-sizing-spacing-x-60);--ix-menu-about-news-mobile--bottom:var(--si-sys-sizing-spacing-y-60)}:host{--margin:var(--ix-menu-about-news--margin);display:block;position:fixed;width:var(--ix-menu-about-news--width);height:auto;background-color:var(--ix-menu-about-news--background);border-radius:var(--ix-menu-about-news--border-radius);padding:var(--ix-menu-about-news--padding);left:var(--ix-menu-about-news--left);z-index:var(--ix-menu-about-news-desktop--z-index);transition:left var(--ix-menu-about-news--transition-duration);margin-inline-start:var(--margin) !important;box-shadow:var(--ix-menu-about-news--box-shadow)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:var(--ix-menu-about-news-banner-container--top);left:var(--ix-menu-about-news-banner-container--left)}:host .banner-container svg{position:absolute;height:var(--ix-menu-about-news-svg--height);width:var(--ix-menu-about-news-svg--width)}:host .banner-container svg polygon{fill:var(--ix-menu-about-news-banner--fill)}:host .banner-container ix-icon{margin:var(--ix-menu-about-news-icon--margin);position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:var(--ix-menu-about-news-cui-popover-news-header--margin-bottom);margin-inline-start:var(--ix-menu-about-news-cui-popover-news-header--margin-inline-start)}:host .slot-container{font:var(--ix-menu-about-news-content--font)}:host .popover-body{color:var(--ix-menu-about-news-body--color)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:var(--ix-menu-about-news-cui-popover-news-footer--margin-top)}:host ix-icon-button{top:var(--ix-menu-about-news-icon--top);right:var(--ix-menu-about-news-icon--right);position:absolute}:host #arrow{position:absolute;width:var(--ix-menu-about-news-arrow--width);height:var(--ix-menu-about-news-arrow--height);background-color:var(--ix-menu-about-news-arrow--background);transform:translateX(calc(var(--margin) * -1 - var(--ix-menu-about-news-arrow--transform))) rotateZ(45deg)}:host(.expanded){left:calc(var(--ix-menu-about-news--left) + var(--ix-menu-about-news--expanded-left-offset))}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:var(--ix-menu-about-news-mobile--max-height);width:var(--ix-menu-about-news-mobile--width);max-width:var(--ix-menu-about-news-mobile--max-width);transform:translateX(calc(var(--ix-menu-about-news-mobile--side-inset) - 50%));left:calc(50% - var(--ix-menu-about-news-mobile--side-inset)) !important;bottom:var(--ix-menu-about-news-mobile--bottom) !important;margin-inline:0 !important;z-index:calc(var(--ix-menu-about-news--z-index) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}`;
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
    return h(Host, { key: "b7e1cfb6066b11db5b6977dea9bc184052635797", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "07b3e1997832b1d8cbb9fd1867d32ffc5441fa10", class: "banner-container" }, h("ix-icon", { key: "b3f0aa2506bd7992ef6d6bf62fa50644a9183393", color: "--si-sys-color-text-inverse", name: iconShout, size: "32", ref: (element) => element?.setAttribute("size", "32") }), h("svg", { key: "180845c1f199c9ec322bd2ea4304d59a9bcb4ff5", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "ec4e7e185e249215014a7942d46004edbbf37d20", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "6172dfdb70e649be61c64a7157efdcaf714ac5c3", class: "cui-popover-news-header" }, h("ix-typography", { key: "882cfc371e624113159545036e2fdf306658b950", format: "h5" }, this.label)), h("ix-icon-button", { key: "fba9aff6deac84f76dfd7f675daa64f7ed794b75", icon: iconClose, iconColor: "--si-sys-color-text-secondary", variant: "tertiary", onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "7b2a57f3e7305b7c2404f991135da0f6292dcfcf", class: "slot-container" }, h("slot", { key: "98a786e4b5a72396256badda40ed866bb4bf1ecc" })), this.activeAboutTabKey ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (event) => {
      this.show = false;
      this.showMore.emit(event);
    } }, this.i18nShowMore)) : null, h("div", { key: "5ee8f69eb2bd83eddda564063b7d2aa2230e73f9", id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss();
export {
  MenuAboutNews as ix_menu_about_news
};
