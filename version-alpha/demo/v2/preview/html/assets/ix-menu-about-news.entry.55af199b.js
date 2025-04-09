import { r as registerInstance, c as createEvent, h, H as Host } from "./global.bff64ac3.js";
import { l as iconClose, w as iconShout } from "./index-CrTP-icT.451e0ae2.js";
const menuAboutNewsCss = ":host{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-2);border-radius:0.25rem;padding:1rem;left:3.4rem;z-index:10000;transition:left var(--theme-default-time);margin-inline-start:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .banner-container{position:absolute;top:0.0625rem;left:1rem}:host .banner-container svg{position:absolute;height:3.625rem;width:3rem}:host .banner-container svg polygon{fill:var(--theme-color-primary)}:host .banner-container ix-icon{margin:0.5rem;position:absolute;z-index:1}:host .cui-popover-news-header{margin-bottom:2.5rem;margin-inline-start:4rem;margin-block-start:-0.25rem}:host .popover-body{color:var(--theme-color-std-text)}:host .cui-popover-news-footer{display:flex;justify-content:flex-end;margin-top:1rem}:host ix-icon-button{top:0.5rem;right:0.5rem;position:absolute}:host #arrow{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-2);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}:host(.expanded){left:calc(3.4rem + 12.7rem)}:host(.show){display:none}@media only screen and (max-width: 48em){:host{display:flex;flex-direction:column;max-height:calc(100vh - 4.75rem);width:calc(100% - 2rem);max-width:30rem;transform:translateX(calc(1rem - 50%));left:calc(50% - 1rem) !important;bottom:1rem !important;margin-inline:0 !important;z-index:calc(var(--theme-z-index-sticky) - 1)}:host .slot-container{overflow-y:auto}:host #arrow{display:none}}";
const MenuAboutNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showMore = createEvent(this, "showMore", 7);
    this.closePopover = createEvent(this, "closePopover", 7);
    this.show = false;
    this.i18nShowMore = "Show more";
    this.offsetBottom = 0;
    this.expanded = false;
  }
  render() {
    return h(Host, { key: "c5b159c8613dca12f8eac19425b81caecc30cc17", class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { key: "d2606d5f8173a85a7c5caa447adb2ffcf4e755dd", class: "banner-container" }, h("ix-icon", { key: "8b75cbd54bab0d0a8e68c3b0f5a8b5d906111f83", color: "color-inv-contrast-text", name: iconShout, size: "32" }), h("svg", { key: "91eadc1b622e601d646197a71f8a3c8bd5c2977d", viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { key: "0e4097ac26f22ec8bb2b5e7f9ccaef82650ceb71", points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { key: "ac13dc9d1be6311424eef3b73092e18f1a5f1add", class: "cui-popover-news-header" }, h("ix-typography", { key: "a075a83bea30af970b3ca2f30faa6b2f75fe5c4d", format: "label", bold: true }, this.label)), h("ix-icon-button", { key: "61f67c66e682c7a98b989981ab78599c582632d7", size: "24", icon: iconClose, ghost: true, onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("div", { key: "640d009303d0851244162426ea78e5da3a2fa4e9", class: "slot-container" }, h("slot", { key: "ff577deab9814235708f4cda023485e2550ccbcb" })), this.aboutItemLabel ? h("div", { class: "cui-popover-news-footer" }, h("ix-button", { variant: "primary", onClick: (e) => {
      this.show = false;
      this.showMore.emit(e);
    } }, this.i18nShowMore)) : null, h("div", { key: "79f1454a3226d88cecb309ba435cf788552ed31f", id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss;
export {
  MenuAboutNews as ix_menu_about_news
};
