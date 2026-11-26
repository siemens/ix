import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-CWpkMnfL.js";
import { G as iconClose, H as iconShout } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { D as DefaultMixins } from "./component-CxWIPGez-55aCZ0ep.js";
import "./preload-helper-UZRgTS1n.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
import "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
const menuAboutNewsCss = () => `@charset "UTF-8";:host{--ix-menu-about-news--background:var(--si-sys-color-background-1);--ix-menu-about-news-arrow--background:var(--si-sys-color-background-1);--ix-menu-about-news-banner--fill:var(--si-sys-color-text-accent);--ix-menu-about-news-body--color:var(--si-sys-color-text-primary);--ix-menu-about-news-content--font:var(--si-sys-typography-body-paragraph);--ix-menu-about-news--box-shadow:var(--si-sys-color-effects-shadow-40)}:host{--ix-menu-about-news--transition-duration:var(--theme-default-time);--ix-menu-about-news--z-index:var(--theme-z-index-sticky);--ix-menu-about-news--left:calc(max(var(--si-sys-sizing-size-100), var(--si-sys-sizing-icon-lg) + 2 * var(--si-sys-sizing-spacing-x-50)) + var(--si-sys-sizing-spacing-x-30) + var(--si-sys-sizing-spacing-x-10) * 0.2);--ix-menu-about-news--left--expanded:calc(var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-x-30) + var(--si-sys-sizing-spacing-x-10) * 0.2 + var(--si-sys-sizing-size-150) + var(--si-sys-sizing-size-90) + var(--si-sys-sizing-spacing-x-20) * 0.8);--ix-menu-about-news--margin:var(--si-sys-sizing-spacing-x-40);--ix-menu-about-news--width:var(--si-sys-sizing-size-170);--ix-menu-about-news--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-menu-about-news--padding:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60);--ix-menu-about-news-banner-container--left:var(--si-sys-sizing-spacing-x-60);--ix-menu-about-news-icon--margin:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-menu-about-news-cui-popover-news-header--margin-bottom:var(--si-sys-sizing-spacing-y-100);--ix-menu-about-news-cui-popover-news-footer--margin-top:var(--si-sys-sizing-spacing-y-60);--ix-menu-about-news-icon--top:var(--si-sys-sizing-spacing-y-40);--ix-menu-about-news-icon--right:var(--si-sys-sizing-spacing-x-40);--ix-menu-about-news-desktop--z-index:10000;--ix-menu-about-news-banner-container--top:calc(var(--si-sys-sizing-spacing-y-10) / 2);--ix-menu-about-news-svg--width:max(var(--si-sys-sizing-size-100), var(--si-sys-sizing-icon-xl) + 2 * var(--si-sys-sizing-spacing-x-40));--ix-menu-about-news-arrow--width:8px;--ix-menu-about-news-arrow--height:8px;--ix-menu-about-news-arrow--transform:12.8px;--ix-menu-about-news--viewport-offset--mobile:76px;--ix-menu-about-news-svg--height:calc(var(--ix-menu-about-news-svg--width) * 58 / 48);--ix-menu-about-news-cui-popover-news-header--margin-inline-start:calc(var(--ix-menu-about-news-svg--width) + var(--si-sys-sizing-spacing-x-60));--ix-menu-about-news-cui-popover-news-header--min-height:calc(var(--ix-menu-about-news-svg--width) * 58 / 48 - var(--ix-menu-about-news-cui-popover-news-header--margin-bottom));--ix-menu-about-news--max-height--mobile:calc(100vh - var(--ix-menu-about-news--viewport-offset--mobile));--ix-menu-about-news-side--inset--mobile:var(--si-sys-sizing-spacing-x-60);--ix-menu-about-news--width--mobile:calc(100% - 2 * var(--ix-menu-about-news-side--inset--mobile));--ix-menu-about-news--max-width--mobile:480px;--ix-menu-about-news--bottom--mobile:var(--si-sys-sizing-spacing-y-60)}:host{--margin:var(--ix-menu-about-news--margin);display:block;position:fixed;width:var(--ix-menu-about-news--width);height:auto;background-color:var(--ix-menu-about-news--background);border-radius:var(--ix-menu-about-news--border-radius);padding:var(--ix-menu-about-news--padding);left:var(--ix-menu-about-news--left);z-index:var(--ix-menu-about-news-desktop--z-index);transition:left var(--ix-menu-about-news--transition-duration);margin-inline-start:var(--margin) !important;box-shadow:var(--ix-menu-about-news--box-shadow)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:8px;height:8px}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:var(--ix-menu-about-news-banner-container--top);left:var(--ix-menu-about-news-banner-container--left)}:host .banner-container svg{position:absolute;height:var(--ix-menu-about-news-svg--height);width:var(--ix-menu-about-news-svg--width)}:host .banner-container svg polygon{fill:var(--ix-menu-about-news-banner--fill)}:host .banner-container ix-icon{margin:var(--ix-menu-about-news-icon--margin);position:absolute;z-index:1}:host .cui-popover-news-header{min-height:var(--ix-menu-about-news-cui-popover-news-header--min-height);margin-bottom:var(--ix-menu-about-news-cui-popover-news-header--margin-bottom);margin-inline-start:var(--ix-menu-about-news-cui-popover-news-header--margin-inline-start)}:host .slot-container{font:var(--ix-menu-about-news-content--font)}:host .popover-body{color:var(--ix-menu-about-news-body--color)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:var(--ix-menu-about-news-cui-popover-news-footer--margin-top)}:host ix-icon-button{top:var(--ix-menu-about-news-icon--top);right:var(--ix-menu-about-news-icon--right);position:absolute}:host #arrow{position:absolute;width:var(--ix-menu-about-news-arrow--width);height:var(--ix-menu-about-news-arrow--height);background-color:var(--ix-menu-about-news-arrow--background);transform:translateX(calc(var(--margin) * -1 - var(--ix-menu-about-news-arrow--transform))) rotateZ(45deg)}:host(.expanded){left:var(--ix-menu-about-news--left--expanded)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:var(--ix-menu-about-news--max-height--mobile);width:var(--ix-menu-about-news--width--mobile);max-width:var(--ix-menu-about-news--max-width--mobile);transform:translateX(calc(var(--ix-menu-about-news-side--inset--mobile) - 50%));left:calc(50% - var(--ix-menu-about-news-side--inset--mobile)) !important;bottom:var(--ix-menu-about-news--bottom--mobile) !important;margin-inline:0 !important;z-index:calc(var(--ix-menu-about-news--z-index) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}`;
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
    return h(Host, { key: "f608d81762d3194abe20400fd5056e5899e17175", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "80cc89db196aef864097e931f610d6b74e2c1fbc", class: "banner-container" }, h("ix-icon", { key: "b856f4c2d15fc2b5ec93ad001db5046cbba83d5e", color: "--si-sys-color-text-inverse", name: iconShout, size: "32", ref: (element) => element?.setAttribute("size", "32") }), h("svg", { key: "4a1dc05dd74ce5fcdd560e837a0ef01f8753d991", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "54c79f1348ea870feb2ce23e62b435d6b5e50870", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "16c39beeec22b0665c8e160fcad159c7851a1791", class: "cui-popover-news-header" }, h("ix-typography", { key: "2eb1c15daace2a0a1d9ef93e93bedca76c306a2a", format: "h5" }, this.label)), h("ix-icon-button", { key: "c75cd203ff6ce87f5797643968e4172ab05bff81", icon: iconClose, iconColor: "--si-sys-color-text-secondary", variant: "tertiary", onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "df0e02ace58d9fd79354922580f28cfbd3f8f1b5", class: "slot-container" }, h("slot", { key: "a16dc3a75fd4eb34191279a44dfb1511b556d795" })), this.activeAboutTabKey ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (event) => {
      this.show = false;
      this.showMore.emit(event);
    } }, this.i18nShowMore)) : null, h("div", { key: "5ee9b5494ff7c773f22feabc4a9b8bfc8fc0e0d8", id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss();
export {
  MenuAboutNews as ix_menu_about_news
};
