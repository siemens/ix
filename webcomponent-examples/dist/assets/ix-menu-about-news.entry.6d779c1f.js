import { r as registerInstance, c as createEvent, h, H as Host } from "./global.00f6d77e.js";
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
    return h(Host, { key: "49f78c17e45ad71cb4339d7d53fb98c5e359a468", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "a04326d6e192dfdd8c80388dd9af3efe6f915435", class: "banner-container" }, h("ix-icon", { key: "1311e733e409348f8f7a365652c99afad3391f17", color: "color-inv-contrast-text", name: "shout", size: "32" }), h("svg", { key: "b7874d274c41bbeb46b241bfe8d2759dbd88ca8f", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "6d4f6e0f92a8e07156993693a9d4b67c12e4a2bc", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "39755e039fb3139fb95db1829f15785b4c18846c", class: "cui-popover-news-header" }, h("ix-typography", { key: "7c9f46a117ad88543678de3e22acdacf21c85089", variant: "default-title-single" }, this.label)), h("ix-icon-button", { key: "96f109929cc5d515d83db16b14ad42b37eb7d23f", size: "24", icon: "close", ghost: true, onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "375dcdb8c5913e917597ca6d6ab74595370c2c0f", class: "slot-container" }, h("slot", { key: "d9319ca884b957d2629f24937c958901aa53ebcf" })), this.aboutItemLabel ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
      this.show = false;
      this.showMore.emit(e);
    } }, this.i18nShowMore)) : null, h("div", { key: "bb3c91c6282f18deed4de7c393b5d48427a4ed27", id: "arrow" }));
  }
};
MenuAboutNews.style = IxMenuAboutNewsStyle0;
export {
  MenuAboutNews as ix_menu_about_news
};
