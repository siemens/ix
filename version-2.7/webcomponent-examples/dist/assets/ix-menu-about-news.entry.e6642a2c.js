import { r as registerInstance, c as createEvent, h, H as Host } from "./global.7dd975c7.js";
const menuAboutNewsCss = ":host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-2);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--theme-default-time);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--theme-color-primary)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--theme-color-std-text)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-2);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--theme-z-index-sticky) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}";
const IxMenuAboutNewsStyle0 = menuAboutNewsCss;
const MenuAboutNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showMore = createEvent(this, "showMore", 7);
    this.closePopover = createEvent(this, "closePopover", 7);
    this.show = false;
    this.label = void 0;
    this.i18nShowMore = "Show more";
    this.aboutItemLabel = void 0;
    this.offsetBottom = 0;
    this.expanded = false;
  }
  render() {
    return h(Host, { key: "f049e1713ce75c3cf0a066dbcd3878c5752d63b8", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "23f5331fd81c1ac67f36a3f7c2eb0e408f1517a5", class: "banner-container" }, h("ix-icon", { key: "b2b6cc51da89551b5e9ec4f31b026202cb3370a4", color: "color-inv-contrast-text", name: "shout", size: "32" }), h("svg", { key: "2c5b9496a40c3e96af0e12e5f647bac4975060d4", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "ad6a493b513524ed82fb78ad5c9a912c394ac068", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "6c9ae33a65929aaa7da29f91727f298e7ed7ae92", class: "cui-popover-news-header" }, h("ix-typography", { key: "b8e0d8e7b8c2087a0ac5b787db60074fc482cd0e", format: "label", bold: true }, this.label)), h("ix-icon-button", { key: "92b7e27a53e227688f8794d6dffa451453f3416f", size: "24", icon: "close", ghost: true, onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "eb0cdf640a458dcf0f98563402cd1ccd4e111a43", class: "slot-container" }, h("slot", { key: "f59b5a5825a4daa8b2026e3385b22198c0a893b2" })), this.aboutItemLabel ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
      this.show = false;
      this.showMore.emit(e);
    } }, this.i18nShowMore)) : null, h("div", { key: "227e365fa14960bd5f01a54eef9434260cac4055", id: "arrow" }));
  }
};
MenuAboutNews.style = IxMenuAboutNewsStyle0;
export {
  MenuAboutNews as ix_menu_about_news
};
